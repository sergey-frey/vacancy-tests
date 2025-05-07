import Image from "next/image";
import { SyntheticEvent } from "react";

type TokenCellContentProps = {
  logoUrl: string;
  tokenName: string;
  tokenAddress: string;
  tokenLinks?: unknown;
};

const placeholderLogoUrl = "https://fakeimg.pl/24x24/836feb/ffffff?text=U";

export const TokenCellContent = ({
  logoUrl,
  tokenName,
  tokenAddress,
}: TokenCellContentProps) => {
  const handleLogoLoadingError = (
    e: SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    e.currentTarget.src = placeholderLogoUrl;
  };

  return (
    <div className="flex items-center gap-2.5">
      <Image
        className="rounded-full w-6 h-6"
        alt={`logotype ${tokenName}`}
        src={logoUrl}
        width={24}
        height={24}
        unoptimized
        loading="lazy"
        onError={handleLogoLoadingError}
      />

      <div className="flex flex-col gap-0.5 overflow-hidden">
        <h2 className="truncate" title={tokenName}>
          {tokenName}
        </h2>
        <div className="pt-0.5">
          <span className="text-foreground-800 text-sm font-regular">
            {tokenAddress.slice(0, 3)}...
            {tokenAddress.slice(tokenAddress.length - 3)}
          </span>
        </div>
      </div>
    </div>
  );
};
