import { Knex } from "knex";
import bcrypt from "bcrypt";

export async function seed(knex: Knex): Promise<void> {
  await knex("users").insert([
    {
      name: "superadmin",
      email: "suadmin@bcr.id",
      username: "superadmin",
      password: await bcrypt.hash("admin8521", 10),
      role: "superadmin",
    },
    {
      name: "orang biasa",
      email: "orangbiasa@mail.com",
      username: "orangbiasa",
      password: await bcrypt.hash("biasa231", 10),
      role: "user",
    },
  ]);
}
