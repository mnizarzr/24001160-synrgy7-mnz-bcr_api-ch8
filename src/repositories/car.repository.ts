import { CarModel } from "../models/Car";

type CreateCar = {
  name: string;
  price: number;
  picture?: string | null;
  start_rent: string;
  finish_rent: string;
};

type UpdateCar = {
  name?: string;
  price?: number;
  picture?: string | null;
  start_rent?: string;
  finish_rent?: string;
};

export default class CarRepository {
  async getCars() {
    const cars = await CarModel.query().whereNull("deleted_at");
    return cars;
  }

  async createCar(params: CreateCar, byUserId: number) {
    const { name, price, picture, start_rent, finish_rent } = params;

    const car = await CarModel.query()
      .insert({
        name,
        price,
        picture,
        start_rent,
        finish_rent,
        created_by: byUserId,
      })
      .returning("*");

    return car;
  }

  async deleteCarById(id: number, byUserId: number) {
    try {
      await CarModel.query()
        .findById(id)
        .patch({ deleted_at: new Date().toISOString(), deleted_by: byUserId });
      return true;
    } catch (error) {
      return false;
    }
  }

  async getCarById(id: number) {
    const car = await CarModel.query().findById(id).whereNull("deleted_at");
    return car;
  }

  async updateCarById(id: number, params: UpdateCar, byUserId: number) {
    const car = await CarModel.query()
      .findById(id)
      .patch({ ...params, updated_at: new Date().toISOString(), created_by: byUserId })
      .returning("*");
    return car[0];
  }
}
