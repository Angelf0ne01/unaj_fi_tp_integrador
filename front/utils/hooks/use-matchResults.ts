import useSwr from "swr";
import { MatchResult } from "../../api";

export const useMatchResults = () => {
  const { data: matchResults, error } = useSwr("/matchResults/");
  return { matchResults: matchResults?.data as MatchResult[], error };
};
