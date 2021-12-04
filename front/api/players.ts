import { apiInstance } from "../utils/axios";
import { Player, ResponseType } from "./types";

//Crud player
export const getPlayers = async (): Promise<ResponseType<Player[]>> => {
  return await apiInstance.get("/players");
};

export const getPlayer = async (id: number): Promise<ResponseType<Player>> => {
  return await apiInstance.get(`/players/${id}`);
};

export const createPlayer = async (
  player: Player
): Promise<ResponseType<Player>> => {
  return await apiInstance.post("/players", player);
};

export const updatePlayer = async (
  id: number,
  player: Player
): Promise<ResponseType<Player>> => {
  return await apiInstance.put(`/players/${id}`, player);
};

export const deletePlayer = async (
  id: number
): Promise<ResponseType<Player>> => {
  return await apiInstance.delete(`/players/${id}`);
};
