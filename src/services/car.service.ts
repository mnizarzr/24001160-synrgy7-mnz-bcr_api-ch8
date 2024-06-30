import CarRepository from "../repositories/car.repository";
import { cloudinaryUploader } from "../utils/upload";

type CreateCar = {
  name: string;
  price: number;
  pictureBase64?: string | null;
  start_rent: string;
  finish_rent: string;
};

type UpdateCar = {
  name?: string;
  price?: number;
  pictureBase64?: string | null;
  start_rent?: string;
  finish_rent?: string;
};

export default class CarService {
  private carRepository: CarRepository;

  constructor() {
    this.carRepository = new CarRepository();
  }

  getCars = async () => {
    const cars = await this.carRepository.getCars();
    return cars;
  };

  createCar = async (data: CreateCar, byUserId: number) => {
    const { pictureBase64 } = data;
    let pictureUrl = null;

    if (pictureBase64 != null || pictureBase64 != undefined) {
      const { secure_url } = await cloudinaryUploader(pictureBase64);
      pictureUrl = secure_url;
    }

    const car = await this.carRepository.createCar(
      { ...data, picture: pictureUrl },
      byUserId,
    );
    return car;
  };

  deleteCarById = async (id: number, byUserId: number) => {
    const isDeleted = await this.carRepository.deleteCarById(id, byUserId);
    return isDeleted;
  };

  getCarById = async (id: number) => {
    const car = await this.carRepository.getCarById(id);
    return car;
  };

  updateCarById = async (id: number, data: UpdateCar, byUserId: number) => {
    const { pictureBase64 } = data;
    let pictureUrl = null;

    if (pictureBase64 != null || pictureBase64 != undefined) {
      const { secure_url } = await cloudinaryUploader(pictureBase64);
      pictureUrl = secure_url;
    }

    const car = await this.carRepository.updateCarById(
      id,
      { ...data, picture: pictureUrl },
      byUserId,
    );
    return car;
  };
}
