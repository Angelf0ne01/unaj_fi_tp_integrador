import { apiInstance } from "../utils/axios";
import { Team, ResponseType } from "./types";

//Crud Team
export const getTeams = async (): Promise<ResponseType<Team[]>> => {
  return await apiInstance.get("/teams");
};

export const getTeam = async (id: number): Promise<ResponseType<Team>> => {
  return await apiInstance.get(`/teams/${id}`);
};

export const createTeam = async (Team: Team): Promise<ResponseType<Team>> => {
  return await apiInstance.post("/teams", Team);
};

export const updateTeam = async (
  id: number,
  Team: Team
): Promise<ResponseType<Team>> => {
  return await apiInstance.put(`/teams/${id}`, Team);
};

export const deleteTeam = async (id: number): Promise<ResponseType<Team>> => {
  return await apiInstance.delete(`/teams/${id}`);
};
