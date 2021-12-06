import useSwr from "swr";
import { Team } from "../../api";

export const useTeams = () => {
  const { data: teamsResults, error } = useSwr("/teams");
  return { teamsResults: teamsResults?.data as Team[], error };
};
