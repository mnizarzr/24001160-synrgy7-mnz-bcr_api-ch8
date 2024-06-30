import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cars", (table) => {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.integer("price").notNullable();
    table.text("picture").nullable();
    table.timestamp("start_rent").notNullable();
    table.timestamp("finish_rent").notNullable();
    table
      .timestamp("created_at")
      .nullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.timestamp("updated_at").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("cars");
}
