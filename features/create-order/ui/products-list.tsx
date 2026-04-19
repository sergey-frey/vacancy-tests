/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { Search } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import type { IGetProductsResponse, IProduct } from "@/entities/product";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/shared/components/ui/input-group";
import type { IProductInOrderPosition } from "../types/product-in-order-position";

interface IProps {
	className?: string;
	possibleProducts: IGetProductsResponse;
	value: IProductInOrderPosition[];
	onChange: (value: IProductInOrderPosition[]) => void;
}

const getFilteredProducts = (
	search: string,
	possibleProducts: IGetProductsResponse,
) => {
	if (!search) return possibleProducts.result;

	return possibleProducts.result.filter((product) => {
		if (!product.name) return false;

		return product.name.toLowerCase().startsWith(search.toLowerCase());
	});
};

const getSelectedProductsMap = (
	productPositions: IProductInOrderPosition[],
) => {
	const map = new Map<number, boolean>();

	for (const productPosition of productPositions) {
		map.set(productPosition.product.id, true);
	}

	return map;
};

export const ProductsList = ({
	className,
	possibleProducts,
	value,
	onChange,
}: IProps) => {
	const selectedProductsMap = useMemo(
		() => getSelectedProductsMap(value),
		[value],
	);

	const [search, setSearch] = useState("");

	const filteredProducts = getFilteredProducts(search, possibleProducts);

	const [scrollElement, setScrollElement] = useState<HTMLUListElement | null>(
		null,
	);

	const scrollAreaRef = useCallback((element: HTMLUListElement) => {
		setScrollElement(element);
	}, []);

	const virtualizer = useVirtualizer({
		count: filteredProducts.length,
		getScrollElement: () => scrollElement,
		estimateSize: () => 28,
		overscan: 5,
	});

	const hasProducts = filteredProducts.length > 0;
	const hasSearch = search.length > 0;

	const inputAddonText = hasSearch ? "Найдено" : "Всего";

	const handleProductClick = (product: IProduct) => {
		if (selectedProductsMap.has(product.id)) {
			return onChange(value.filter((p) => p.product.id !== product.id));
		}

		const newProductPosition: IProductInOrderPosition = {
			product,
			price: product.prices?.[0]?.price ?? 0,
			amount: 1,
		};

		onChange([...value, newProductPosition]);
	};

	return (
		<div className={["flex flex-col gap-2", className]}>
			<InputGroup>
				<InputGroupInput
					placeholder="Поиск товаров"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<InputGroupAddon>
					<Search />
				</InputGroupAddon>
				<InputGroupAddon align="inline-end">
					{inputAddonText}: {filteredProducts.length}
				</InputGroupAddon>
			</InputGroup>
			<ul
				ref={scrollAreaRef}
				style={{
					height: `200px`,
					overflowY: "auto",
					position: "relative",
				}}
				className="border rounded-md bg-background"
			>
				{!hasProducts && (
					<li className="p-2 text-sm text-center text-muted-foreground">
						Ничего не найдено
					</li>
				)}

				{hasProducts && (
					<>
						<li
							style={{
								height: `${virtualizer.getTotalSize()}px`,
								width: "100%",
							}}
						/>
						{virtualizer.getVirtualItems().map((virtualItem) => {
							const product = filteredProducts[virtualItem.index];

							return (
								<li
									key={product.id}
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: `${virtualItem.size}px`,
										transform: `translateY(${virtualItem.start}px)`,
									}}
									className="flex items-center hover:bg-accent hover:text-accent-foreground text-sm"
								>
									<label className="flex items-center gap-2 w-full cursor-pointer px-2 py-1">
										<Checkbox
											checked={selectedProductsMap.has(product.id)}
											onCheckedChange={() => handleProductClick(product)}
										/>
										{product.name}
										<span className="text-xs text-muted-foreground ml-auto">
											{product.prices?.[0].price}
										</span>
									</label>
								</li>
							);
						})}
					</>
				)}
			</ul>
		</div>
	);
};
