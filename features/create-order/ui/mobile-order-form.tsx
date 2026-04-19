/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
"use client";

import { Trash2 } from "lucide-react";
import { use } from "react";
import type { IGetContragentsResponse } from "@/entities/contragents";
import type { IGetOrganizationsResponse } from "@/entities/organization";
import type { IGetPayboxesResponse } from "@/entities/paybox";
import type { IGetPriceTypesResponse } from "@/entities/price-type";
import type { IGetProductsResponse } from "@/entities/product";
import type { IGetWarehousesResponse } from "@/entities/warehouse";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { MobileOrderFormContext } from "../lib/mobile-order-form-context";
import { ContragentsSelect } from "./contragents-select";
import { OrganizationSelect } from "./organization-select";
import { PayboxSelect } from "./paybox-select";
import { PriceTypeSelect } from "./price-type-select";
import { ProductsCart } from "./products-cart";
import { ProductsList } from "./products-list";
import { WarehouseSelect } from "./warehouse-select";

interface IProps {
	possibleContragents: IGetContragentsResponse;
	possiblePayboxes: IGetPayboxesResponse;
	possibleOrganizations: IGetOrganizationsResponse;
	possibleWarehouses: IGetWarehousesResponse;
	possiblePriceTypes: IGetPriceTypesResponse;
	possibleProducts: IGetProductsResponse;
	className?: string;
}

export const MobileOrderForm = ({
	possibleContragents,
	possiblePayboxes,
	possibleOrganizations,
	possibleWarehouses,
	possiblePriceTypes,
	possibleProducts,
	className,
}: IProps) => {
	const {
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
	} = use(MobileOrderFormContext);

	return (
		<>
			<Card className={className}>
				<CardHeader>
					<CardTitle>Параметры заказа</CardTitle>
				</CardHeader>

				<CardContent>
					<form className={["flex flex-col w-full gap-4"]}>
						<label className="flex flex-col w-full items-start gap-1">
							<span>Клиент {contragent && `(ID: ${contragent?.id})`}</span>
							<ContragentsSelect
								value={contragent}
								onChange={setContragent}
								possibleContragents={possibleContragents}
							/>
						</label>

						<label className="flex flex-col w-full items-start gap-1">
							<span>Счёт {paybox && `(ID: ${paybox?.id})`}</span>
							<PayboxSelect
								value={paybox}
								onChange={setPaybox}
								possiblePayboxes={possiblePayboxes}
							/>
						</label>

						<label className="flex flex-col w-full items-start gap-1">
							<span>
								Организация {organization && `(ID: ${organization?.id})`}
							</span>
							<OrganizationSelect
								value={organization}
								onChange={setOrganization}
								possibleOrganizations={possibleOrganizations}
							/>
						</label>

						<label className="flex flex-col w-full items-start gap-1">
							<span>Склад {warehouse && `(ID: ${warehouse?.id})`}</span>
							<WarehouseSelect
								value={warehouse}
								onChange={setWarehouse}
								possibleWarehouses={possibleWarehouses}
							/>
						</label>

						<label className="flex flex-col w-full items-start gap-1">
							<span>Тип цены {priceType && `(ID: ${priceType?.id})`}</span>
							<PriceTypeSelect
								value={priceType}
								onChange={setPriceType}
								possiblePriceTypes={possiblePriceTypes}
							/>
						</label>
					</form>
				</CardContent>
			</Card>

			<Card className="mt-4">
				<CardHeader>
					<CardTitle>Товары</CardTitle>
					<CardDescription>Поиск и добавление номенклатуры</CardDescription>
				</CardHeader>

				<CardContent>
					<ProductsList
						value={productPositions}
						onChange={setProductPositions}
						possibleProducts={possibleProducts}
					/>
				</CardContent>
			</Card>

			<Card className="mt-4">
				<CardHeader>
					<CardTitle>Корзина</CardTitle>
					<CardDescription>Выбранные товары</CardDescription>
				</CardHeader>

				<CardContent className="flex flex-col gap-4">
					<ProductsCart
						productPositions={productPositions}
						setProductPositions={setProductPositions}
					/>
				</CardContent>
			</Card>
		</>
	);
};
