type FinanceDescription = {
  USD: string;
};

type Security = {
  shortName: string;
  name: string;
  status: boolean;
};

export type TokenType = {
  id: number;
  address: string;
  logoUrl: string;
  name: string;
  symbol: string;
  chain: {
    id: number;
    name: string;
    slug: string;
    logoUrl: string;
  };
  platform: {
    id: number;
    name: string;
    slug: string;
    logoUrl: string;
  };
  createdAt: number;
  smartFollowersCount: number;
  smartFollowersCountChange: number;
  smartMentionsCount: number;
  smartMentionsCountChange: number;
  txsBuyCount: number;
  txsSellCount: number;
  txsCountChange: number;
  volumeBuy: FinanceDescription;
  volumeSell: FinanceDescription;
  volumeChange: FinanceDescription;
  marketCap: FinanceDescription;
  marketCapChange: FinanceDescription;
  marketCapChangePercents: FinanceDescription;
  liquidity: FinanceDescription;
  holdersCount: number;
  holdersCountChange: number;
  security: [Security, Security, Security, Security];
  links: unknown[];
};
