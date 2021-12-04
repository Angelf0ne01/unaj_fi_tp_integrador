import { apiInstance } from "../utils/axios";
import { MatchResult, ResponseType } from "./types";

//Crud matchResult
export const getMatchResults = async (): Promise<
  ResponseType<MatchResult[]>
> => {
  return await apiInstance.get("/matchResults");
};

export const getMatchResult = async (
  id: number
): Promise<ResponseType<MatchResult>> => {
  return await apiInstance.get(`/matchResults/${id}`);
};

export const createMatchResult = async (
  MatchResult: MatchResult
): Promise<ResponseType<MatchResult>> => {
  return await apiInstance.post("/matchResults", MatchResult);
};

export const updateMatchResult = async (
  id: number,
  MatchResult: MatchResult
): Promise<ResponseType<MatchResult>> => {
  return await apiInstance.put(`/matchResults/${id}`, MatchResult);
};

export const deleteMatchResult = async (
  id: number
): Promise<ResponseType<MatchResult>> => {
  return await apiInstance.delete(`/matchResults/${id}`);
};
