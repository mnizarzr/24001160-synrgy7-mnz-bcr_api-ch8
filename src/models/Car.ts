import { Model, ModelObject } from "objection";

export class CarModel extends Model {
  id!: number;
  name!: string;
  price!: number;
  picture!: string | null;
  start_rent!: string;
  finish_rent!: string;
  created_at!: string | null;
  updated_at!: string | null;
  deleted_at!: string | null;
  created_by!: number;
  updated_by!: number | null;
  deleted_by!: number | null;

  static get tableName() {
    return "cars";
  }
}

export type Car = ModelObject<CarModel>;
