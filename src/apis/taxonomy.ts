import { instance } from './instance';

export type Brand = {
  id: number;
  name: string;
  year: number;
};

export type BrandsResponse = {
  data: Brand[];
};

export const getBrands = async (): Promise<BrandsResponse> => {
  try {
    const response = await instance.get('/taxonomy/brands');
    const data: Brand[] = response.data;
    return { data };
  } catch (error) {
    // Xử lý lỗi một cách thích hợp
    throw new Error(`Không thể lấy dữ liệu thương hiệu`);
  }
};

export type Figures = {
  id: number;
  name: string;
};

export type FiguresResponse = {
  data: Figures[];
};

export const getFigures = async (): Promise<FiguresResponse> => {
  try {
    const response = await instance.get('/taxonomy/figures');
    const data: Figures[] = response.data;
    return { data };
  } catch (error) {
    // Xử lý lỗi một cách thích hợp
    throw new Error(`Không thể lấy dữ liệu`);
  }
};


export type Gears = {
  id: number;
  name: string;
};

export type GearsResponse = {
  data: Gears[];
};

export const getGears = async (): Promise<GearsResponse> => {
  try {
    const response = await instance.get('/taxonomy/gears');
    const data: Gears[] = response.data;
    return { data };
  } catch (error) {
    // Xử lý lỗi một cách thích hợp
    throw new Error(`Không thể lấy dữ liệu`);
  }
};

export type Colors = {
  id: number;
  name: string;
};


export const getColors = async (): Promise<any> => {
  try {
    const response = await instance.get('/taxonomy/colors');
    const data: Colors[] = response.data;
    return data ;
  } catch (error) {
    // Xử lý lỗi một cách thích hợp
    throw new Error(`Không thể lấy dữ liệu`);
  }
};