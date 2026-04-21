import type { ConstEnumUnion } from "@/shared/types/utlity";

export const GenderEnum = {
	Male: "male",
	Female: "female",
} as const;

export type Gender = ConstEnumUnion<typeof GenderEnum>;

export const ABOBloodTypeEnum = {
	A: "A",
	B: "B",
	AB: "AB",
	O: "O",
} as const;

export type BloodGroup =
	`${ConstEnumUnion<typeof ABOBloodTypeEnum>}${"+" | "-"}`;

export const EyeColorEnum = {
	Green: "Green",
	Red: "Red",
	Blue: "Blue",
	Brown: "Brown",
	Hazel: "Hazel",
	Amber: "Amber",
	Violet: "Violet",
	Gray: "Gray",
} as const;

export type EyeColor = ConstEnumUnion<typeof EyeColorEnum>;

export const HairColorEnum = {
	Brown: "Brown",
	Green: "Green",
	White: "White",
	Blonde: "Blonde",
	Gray: "Gray",
	Red: "Red",
	Purple: "Purple",
	Blue: "Blue",
	Black: "Black",
} as const;

export type HairColor = ConstEnumUnion<typeof HairColorEnum>;

export const HairTypeEnum = {
	Curly: "Curly",
	Straight: "Straight",
	Wavy: "Wavy",
	Kinky: "Kinky",
} as const;

export type HairType = ConstEnumUnion<typeof HairTypeEnum>;

export const CardTypeEnum = {
	DinersClubInternational: "Diners Club International",
	JCB: "JCB",
	Discover: "Discover",
	Mastercard: "Mastercard",
	AmericanExpress: "American Express",
	UnionPay: "UnionPay",
	Visa: "Visa",
} as const;

export type CardType = ConstEnumUnion<typeof CardTypeEnum>;

export const RoleEnum = {
	Admin: "admin",
	Moderator: "moderator",
	User: "user",
} as const;

export type Role = ConstEnumUnion<typeof RoleEnum>;
