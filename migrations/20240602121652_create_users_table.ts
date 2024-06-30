import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.string("email", 255).nullable();
    table.string("username", 255).notNullable();
    table.string("password", 255).notNullable();
    table.enum("role", ["superadmin", "admin", "user"]).notNullable();
    table
      .timestamp("created_at")
      .nullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.timestamp("updated_at").nullable();
    table.timestamp("deleted_at").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
