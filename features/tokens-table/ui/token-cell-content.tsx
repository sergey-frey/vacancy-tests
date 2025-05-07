import Image from "next/image";

type TokenCellContentProps = {
  logoUrl: string;
  tokenName: string;
  tokenAddress: string;
  tokenLinks?: unknown;
};

export const TokenCellContent = ({
  logoUrl,
  tokenName,
  tokenAddress,
}: TokenCellContentProps) => {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        className="rounded-full w-6 h-6"
        alt={`logotype ${tokenName}`}
        src={logoUrl}
        width={24}
        height={24}
        unoptimized
      />

      <div className="flex flex-col gap-0.5">
        <h2>{tokenName}</h2>
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
