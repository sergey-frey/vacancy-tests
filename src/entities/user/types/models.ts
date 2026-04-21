import type { Address, CryptoInfo } from "@/shared/types/utlity";
import type {
	BloodGroup,
	CardType,
	EyeColor,
	Gender,
	HairColor,
	HairType,
	Role,
} from "./enums";

export interface IUserBank {
	cardExpire: string; // format: "MM/YY"
	cardNumber: string; // format: "1234567890123456"
	cardType: CardType;
	currency: string;
	iban: string; // format: "GB74MH2UZLR9TRPHYNU8F8"
}

export interface IUserCompany {
	department: string;
	name: string;
	title: string;
	address: Address;
}

export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: Gender;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string; // format: YYYY-MM-DD
	image: string;
	bloodGroup: BloodGroup;
	height: number;
	weight: number;
	eyeColor: EyeColor;
	hair: {
		color: HairColor;
		type: HairType;
	};
	ip: string; // fromat: "42.48.100.32"
	address: Address;
	macAddress: string; // format: "47:fa:41:18:ec:eb"
	university: string;
	bank: IUserBank;
	company: IUserCompany;
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: CryptoInfo;
	role: Role;
}
