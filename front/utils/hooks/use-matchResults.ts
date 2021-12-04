import useSwr from "swr";

export const useMatchResults = () => {
  const { data: matchResults, error } = useSwr("/matchResults/");
  console.log("REULSTADO", matchResults);
  return { matchResults, error };
};
