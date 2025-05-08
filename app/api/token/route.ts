import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

import { TokenType } from "@/entities/token";

const generateFakeToken = (): TokenType => {
  return {
    id: faker.number.int(),
    address: faker.string.uuid(),
    logoUrl: faker.image.url(),
    name: faker.person.firstName(),
    symbol: faker.string.alpha({ length: 3 }).toUpperCase(),
    chain: {
      id: faker.number.int(),
      name: faker.person.firstName(),
      logoUrl: faker.image.url(),
      slug: faker.string.uuid(),
    },
    platform: {
      id: faker.number.int(),
      name: faker.person.firstName(),
      logoUrl: faker.image.url(),
      slug: faker.string.uuid(),
    },
    createdAt: faker.date.anytime().getTime(),
    smartFollowersCount: faker.number.int({ min: 0, max: 1000 }),
    smartFollowersCountChange: faker.number.int({ min: -100, max: 100 }),
    smartMentionsCount: faker.number.int({ min: 0, max: 1000 }),
    smartMentionsCountChange: faker.number.int({ min: -100, max: 100 }),
    txsBuyCount: faker.number.int({ min: 0, max: 1000 }),
    txsSellCount: faker.number.int({ min: 0, max: 1000 }),
    txsCountChange: faker.number.int({ min: -100, max: 100 }),
    volumeBuy: {
      USD: faker.number.float({ min: 0, max: 10000 }).toFixed(2).toString(),
    },
    volumeSell: {
      USD: faker.number.float({ min: 0, max: 10000 }).toFixed(2).toString(),
    },
    volumeChange: {
      USD: faker.number.float({ min: -100, max: 100 }).toFixed(2).toString(),
    },
    marketCap: {
      USD: faker.number.float({ min: 0, max: 10000 }).toFixed(2).toString(),
    },
    marketCapChange: {
      USD: faker.number.float({ min: -100, max: 100 }).toFixed(2).toString(),
    },
    marketCapChangePercents: {
      USD: faker.number.float({ min: -100, max: 100 }).toFixed(2).toString(),
    },
    liquidity: {
      USD: faker.number.float({ min: 0, max: 10000 }).toFixed(2).toString(),
    },
    holdersCount: faker.number.int({ min: 0, max: 1000 }),
    holdersCountChange: faker.number.int({ min: -100, max: 100 }),
    security: [
      {
        shortName: faker.person.firstName(),
        name: faker.person.firstName(),
        status: faker.datatype.boolean(),
      },
      {
        shortName: faker.person.firstName(),
        name: faker.person.firstName(),
        status: faker.datatype.boolean(),
      },
      {
        shortName: faker.person.firstName(),
        name: faker.person.firstName(),
        status: faker.datatype.boolean(),
      },
      {
        shortName: faker.person.firstName(),
        name: faker.person.firstName(),
        status: faker.datatype.boolean(),
      },
    ],
    links: [],
  };
};

export async function GET() {
  return NextResponse.json({
    items: faker.helpers.multiple(generateFakeToken, { count: 50 }),
  });
}
