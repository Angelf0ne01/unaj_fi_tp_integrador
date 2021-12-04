import useSwr from "swr";

export const useMatchResults = () => {
  const { data: matchResults, error } = useSwr("/matchResults");
  return { matchResults, error };
};
