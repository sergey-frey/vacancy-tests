export type ShareholderTicker = "SBER";

export type ShareholderData = {
  [key in ShareholderTicker]: {
    holder: string;
    share_percent: string;
  }[];
};
