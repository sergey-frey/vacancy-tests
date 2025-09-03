import {
  ShareholderRepo,
  useFetch,
  type ShareholderTicker,
} from "@/shared/api";

export const useFetchShareholderStructure = (ticker: ShareholderTicker) => {
  const { data, error, isLoading } = useFetch(() =>
    ShareholderRepo.getShareholdersData(ticker),
  );

  return { data, error, isLoading };
};
