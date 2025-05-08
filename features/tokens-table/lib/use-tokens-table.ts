import { tokenRepository } from "@/entities/token";
import { TOKENS_PLACEHOLDER_DATA } from "@/shared/ui/table/lib/constants";
import { useScroll } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";

export const useTokensTable = () => {
  const { data, isPlaceholderData } = useQuery({
    queryKey: ["tokens"],
    queryFn: ({ signal }) => {
      return tokenRepository.getAll({ limit: 50, offset: 0, signal });
    },
    placeholderData: TOKENS_PLACEHOLDER_DATA,
  });

  const { elemRef, scroll } = useScroll<HTMLDivElement>();

  const isShowLeftShadow = scroll.x > 0;
  const isShowRightShadow =
    scroll.width > 0 && scroll.width - scroll.clientWidth - scroll.x > 10;

  return {
    data,
    isPlaceholderData,
    scrollElemRef: elemRef,
    isShowLeftShadow,
    isShowRightShadow,
  };
};
