import { instance } from "./instance";

export type RegisterDto = {
  email: string;
  name: string;
  password: string;
};

export type RegisterResponse = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export const register = async (
  registerDto: RegisterDto
): Promise<RegisterResponse> => {
  const { data } = await instance.post("/auth/register", registerDto);
  return data as RegisterResponse;
};
