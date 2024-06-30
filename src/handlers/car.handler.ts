import { Request, Response } from "express";
import CarService from "../services/car.service";

export default class CarHandler {
  private carService: CarService;

  constructor() {
    this.carService = new CarService();
  }

  getAllCars = async (_: Request, res: Response) => {
    const cars = await this.carService.getCars();
    res.status(200).json({ message: "success", cars });
  };

  postCar = async (req: Request, res: Response) => {
    // @ts-expect-error but it won't error because middleware already check the user
    const { id } = req.user;
    const { name, price, start_rent, finish_rent } = req.body;

    let file = null;

    if (req.file?.buffer != null || req.file?.buffer != undefined) {
      const bufferBase64: string | undefined =
        req.file?.buffer.toString("base64");
      file = `data:${req.file?.mimetype};base64,${bufferBase64}`;
    }

    try {
      const car = await this.carService.createCar(
        {
          name,
          price,
          start_rent,
          finish_rent,
          pictureBase64: file,
        },
        id,
      );

      res.status(201).json({
        message: "Car created",
        car,
      });
    } catch (error) {
      res.status(400).json({
        error: true,
        message: "something's wrong",
        car: null
      })
    }

  };

  getCarById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const car = await this.carService.getCarById(+id);
    res.status(200).json({ message: "success", car });
  };

  updateCarById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price, start_rent, finish_rent } = req.body;

    let file = null;

    if (req.file?.buffer != null || req.file?.buffer != undefined) {
      const bufferBase64: string | undefined =
        req.file?.buffer.toString("base64");
      file = `data:${req.file?.mimetype};base64,${bufferBase64}`;
    }

    const car = await this.carService.updateCarById(
      +id,
      {
        name,
        price,
        start_rent,
        finish_rent,
        pictureBase64: file,
      },
      1,
    );

    res.status(200).json({
      message: "Car updated",
      car,
    });
  };

  deleteCarById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const isDeleted = await this.carService.deleteCarById(+id, 1);

    res.status(200).json({
      message: "Car deleted",
      isDeleted,
    });
  };
}
