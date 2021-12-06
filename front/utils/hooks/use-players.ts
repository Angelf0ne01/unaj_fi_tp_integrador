import useSwr from "swr";
import { Player } from "../../api";

export const usePlayer = (teamid: any) => {
  const { data: players, error } = useSwr(`/players`);
  return { players: players?.data as Player[], error };
};
