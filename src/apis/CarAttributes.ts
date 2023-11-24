import { instance } from './instance';

// Sử dụng một kiểu cụ thể hơn thay vì 'any'
export type Brand = {
    id: number;
  name: string;
};

export type BrandsResponse = {
  data: Brand[];
};

export const getBrands = async (): Promise<BrandsResponse> => {
  try {
    const response = await instance.get('/brand');
    const data: Brand[] = response.data;
    
    // Bạn có thể xử lý dữ liệu ở đây nếu cần

    return { data };
  } catch (error) {
    // Xử lý lỗi một cách thích hợp
    throw new Error(`Không thể lấy dữ liệu thương hiệu: ${error.message}`);
  }
};