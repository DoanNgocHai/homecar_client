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

export type LoginDto = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: any;
  access_token: string;
  token_type: string;
  expires_at: string;
};

export const login = async (loginDto: LoginDto): Promise<LoginResponse> => {
  const { data } = await instance.post("/auth/login", loginDto);
  return data as LoginResponse;
};
