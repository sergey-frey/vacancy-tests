/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
import { Trash2 } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import type { IProductInOrderPosition } from "../types/product-in-order-position";

interface IProps {
	className?: string;
	productPositions: IProductInOrderPosition[];
	setProductPositions: (productPositions: IProductInOrderPosition[]) => void;
}

export const ProductsCart = ({
	className,
	productPositions,
	setProductPositions,
}: IProps) => {
	const hasProducts = productPositions.length > 0;

	const handleProductAmountChange = (productId: number, amount: number) => {
		setProductPositions(
			productPositions.map((pos) =>
				pos.product.id === productId ? { ...pos, amount } : pos,
			),
		);
	};

	const handleProductPriceChange = (productId: number, price: number) => {
		setProductPositions(
			productPositions.map((pos) =>
				pos.product.id === productId ? { ...pos, price } : pos,
			),
		);
	};

	const handleRemoveProduct = (productId: number) => {
		setProductPositions(
			productPositions.filter((pos) => pos.product.id !== productId),
		);
	};

	if (!hasProducts) {
		return (
			<div className="text-sm text-center text-muted-foreground p-4">
				Корзина пуста
			</div>
		);
	}

	return productPositions.map((position) => (
		<div
			key={position.product.id}
			className="flex flex-col gap-2 border p-3 rounded-md"
		>
			<div className="flex justify-between items-start gap-2">
				<span className="font-medium text-sm">{position.product.name}</span>
				<Button
					variant="destructive"
					size="icon"
					type="button"
					onClick={() => handleRemoveProduct(position.product.id)}
				>
					<Trash2 className="h-4 w-4" />
				</Button>
			</div>

			<div className="flex gap-4 items-center">
				<label className="flex flex-col gap-1 w-1/2">
					<span className="text-xs text-muted-foreground">Кол-во</span>
					<Input
						type="number"
						min={1}
						value={position.amount}
						onChange={(e) =>
							handleProductAmountChange(
								position.product.id,
								Number(e.target.value) || 0,
							)
						}
					/>
				</label>

				<label className="flex flex-col gap-1 w-1/2">
					<span className="text-xs text-muted-foreground">Цена (₽)</span>
					<Input
						type="number"
						min={0}
						value={position.price}
						onChange={(e) =>
							handleProductPriceChange(
								position.product.id,
								Number(e.target.value) || 0,
							)
						}
					/>
				</label>
			</div>

			<div className="flex justify-end pt-2 text-sm font-medium">
				Сумма: {(position.price * position.amount).toLocaleString("ru-RU")} ₽
			</div>
		</div>
	));
};
