import { instance, getHeader } from "../instance";

const headers = getHeader();


export const listUser = async (): Promise<any> => {
  const { data } = await instance.get("/admin/user", headers);
  return data;
};

export const updateUser = async (
    idUser: any,
    updateUserDto: any
): Promise<any> => {
    const { data } = await instance.put("/admin/user/" + idUser, updateUserDto, headers);
    return data;
};

export const deleteUser = async (idUser: any): Promise<any> => {
  const data = await instance.delete("/admin/user/" + idUser, headers);
  return data;
};

export const listCar = async (): Promise<any> => {
  const { data } = await instance.get("/admin/car", headers);
  return data;
};

export const deleteCar = async (idCar: any): Promise<any> => {
  const data = await instance.delete("/admin/car/" + idCar, headers);
  return data;
};

export const adminGetVerify = async (idCar: number) => {
  const { data } = await instance.get(`/admin/car/${idCar}/verify`, headers);
  return data;
};

export const adminVerify = async (idCar: any, form: any): Promise<any> => {
  const { data } = await instance.post("/admin/verify/" + idCar, form, headers);
  return data;
};
