"use client";

import { createContext, type ReactNode, useState } from "react";
import type { IContragent } from "@/entities/contragents";
import type { IOrganization } from "@/entities/organization";
import type { IPaybox } from "@/entities/paybox";
import type { IPriceType } from "@/entities/price-type";
import type { IWarehouse } from "@/entities/warehouse";
import type { IProductInOrderPosition } from "../types/product-in-order-position";

interface IMobileOrderFormContextValue {
	contragent: IContragent | null;
	paybox: IPaybox | null;
	organization: IOrganization | null;
	warehouse: IWarehouse | null;
	priceType: IPriceType | null;
	productPositions: IProductInOrderPosition[];
	setContragent: (contragent: IContragent | null) => void;
	setPaybox: (paybox: IPaybox | null) => void;
	setOrganization: (organization: IOrganization | null) => void;
	setWarehouse: (warehouse: IWarehouse | null) => void;
	setPriceType: (priceType: IPriceType | null) => void;
	setProductPositions: (products: IProductInOrderPosition[]) => void;
}

export const MobileOrderFormContext =
	createContext<IMobileOrderFormContextValue>({
		contragent: null,
		paybox: null,
		organization: null,
		warehouse: null,
		priceType: null,
		productPositions: [],
		setContragent: () => {},
		setPaybox: () => {},
		setOrganization: () => {},
		setWarehouse: () => {},
		setPriceType: () => {},
		setProductPositions: () => {},
	});

export const MobileOrderFormContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [contragent, setContragent] = useState<IContragent | null>(null);
	const [paybox, setPaybox] = useState<IPaybox | null>(null);
	const [organization, setOrganization] = useState<IOrganization | null>(null);
	const [warehouse, setWarehouse] = useState<IWarehouse | null>(null);
	const [priceType, setPriceType] = useState<IPriceType | null>(null);
	const [productPositions, setProductPositions] = useState<
		IProductInOrderPosition[]
	>([]);

	return (
		<MobileOrderFormContext.Provider
			value={{
				contragent,
				paybox,
				organization,
				warehouse,
				priceType,
				productPositions,
				setContragent,
				setPaybox,
				setOrganization,
				setWarehouse,
				setPriceType,
				setProductPositions,
			}}
		>
			{children}
		</MobileOrderFormContext.Provider>
	);
};
