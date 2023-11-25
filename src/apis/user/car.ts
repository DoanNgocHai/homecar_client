import { instance, getHeader } from "../instance";

const headers = getHeader();

export type CreateCarDto = {
    title: string;
    brand_id: string;
    figure_id: string;
    year: string;
    odo: string;
    gear_id: string;
    color_id: string;
    price: number;
    description: string;

};

export type CreateCarResponse = {
    title: string;
    brand_id: string;
    figure_id: string;
    year: string;
    odo: string;
    gear_id: string;
    color_id: string;
    price: number;
    description: string;
    user_id: string;
    slug: string;
    id: string
};

export const userSaleCar = async (
  createCarDto: CreateCarDto
): Promise<CreateCarResponse> => {
  const { data } = await instance.post("/user/cars", createCarDto, headers);
  return data as CreateCarResponse;
};