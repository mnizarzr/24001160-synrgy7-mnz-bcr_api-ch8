import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("cars", (table) => {
    table.timestamp("deleted_at").nullable();

    table
      .integer("created_by")
      .nullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("updated_by")
      .nullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("deleted_by")
      .nullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("cars", (table) => {
    table.dropColumns("created_by", "updated_by", "deleted_by");
  });
}
