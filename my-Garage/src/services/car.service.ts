import type { Car } from "../models/car";

const CARS_URL = "../../data/cars.json";
export async function getCars(): Promise<Car[]> {
    const response = await fetch(CARS_URL);
    if (!response.ok) {
        throw new Error(
            `No se pudo cargar cars.json (status ${response.status})`,
        );
    }

    const data = await response.json();
    console.log("carros cargadas", data);
    return data as Car[];
}

export async function getCarsById(id: string): Promise<Car | null>{
    const cars = await getCars();
    const found = cars.find((c) => String(c.id) === String(id));
    return found ?? null;
}