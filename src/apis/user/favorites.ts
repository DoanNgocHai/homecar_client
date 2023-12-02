import { instance, getHeader } from "../instance";

const headers = getHeader();

export type SaveFavoritesDto = {
  car_id: string;
};


export const saveCarFavorites = async (
    saveFavoritesDto: SaveFavoritesDto
): Promise<any> => {
  const { data } = await instance.post("/user/favorites", saveFavoritesDto, headers);
  return data;
};

export const listCarFavorites = async (): Promise<any> => {
    const { data } = await instance.get("/user/favorites", headers);
    return data;
};
  