export const amountStopsHelper = (amount: number) => {
  switch (amount) {
    case 1:
      return "1 пересадка";
    case 2:
    case 3:
    case 4:
      return `${amount} пересадки`;
    default:
      return `${amount} пересадок`;
  }
};
