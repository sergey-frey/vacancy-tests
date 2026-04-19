"use client";

import { use } from "react";
import {
	OperationTypeEnum,
	orderService,
	UnitNameEnum,
} from "@/entities/order";
import { Button } from "@/shared/components/ui/button";
import { MobileOrderFormContext } from "../lib/mobile-order-form-context";

export const MobileOrderTotalFooter = () => {
	const {
		productPositions,
		contragent,
		paybox,
		organization,
		warehouse,
		priceType,
	} = use(MobileOrderFormContext);

	const total = productPositions.reduce(
		(acc, pos) => acc + pos.price * pos.amount,
		0,
	);

	const handleCreateOrder = () => {
		if (
			!contragent?.id ||
			!paybox?.id ||
			!organization?.id ||
			!warehouse?.id ||
			!priceType?.id
		) {
			return;
		}

		const goods = productPositions.map((pos) => ({
			nomenclature: pos.product.id,
			quantity: pos.amount,
			price: pos.price,
			price_type: priceType?.id,
			unit_name: UnitNameEnum.PIECE,
		}));

		orderService.createOrder({
			contragent: contragent.id,
			paybox: paybox.id,
			organization: organization.id,
			warehouse: warehouse.id,
			operations: OperationTypeEnum.ORDER,
			goods,
		});
	};

	return (
		<footer className="sticky bottom-0 bg-muted">
			<section className="max-w-120 mx-auto p-4">
				<p className="font-medium p-2 border rounded-lg flex items-center">
					Итого: <span className="ml-auto">{total}₽</span>
				</p>

				<Button className="w-full mt-2" onClick={handleCreateOrder}>
					Оформить
				</Button>
			</section>
		</footer>
	);
};
