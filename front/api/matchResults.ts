import { apiInstance } from "../utils/axios";
import { MatchResult, ResponseType } from "./types";

const ep = "/matchResults";
//Crud matchResult
export const getMatchResults = async (): Promise<
  ResponseType<MatchResult[]>
> => {
  return await apiInstance.get(`${ep}`);
};

export const getMatchResult = async (
  id: number
): Promise<ResponseType<MatchResult>> => {
  return await apiInstance.get(`/${ep}/${id}`);
};

export const createMatchResult = async (
  MatchResult: MatchResult
): Promise<ResponseType<MatchResult>> => {
  return await apiInstance.put(`${ep}`, MatchResult);
};

export const updateMatchResult = async (
  id: number,
  MatchResult: MatchResult
): Promise<ResponseType<MatchResult>> => {
  return await apiInstance.post(`/${ep}/${id}`, MatchResult);
};

export const deleteMatchResult = async (
  id: number
): Promise<ResponseType<MatchResult>> => {
  return await apiInstance.delete(`/${ep}/${id}`);
};
