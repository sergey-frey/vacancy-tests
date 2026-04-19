"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useCallback, useState } from "react";
import type { IGetWarehousesResponse, IWarehouse } from "@/entities/warehouse";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
} from "@/shared/components/ui/combobox";

interface IProps {
	value: IWarehouse | null;
	onChange: (value: IWarehouse | null) => void;
	possibleWarehouses: IGetWarehousesResponse;
}

const getFilteredWarehouses = (
	search: string,
	possibleWarehouses: IGetWarehousesResponse,
) => {
	if (!search) return possibleWarehouses.result;

	return possibleWarehouses.result.filter((warehouse) => {
		if (!warehouse.name) return false;

		return warehouse.name.toLowerCase().includes(search.toLowerCase());
	});
};

export const WarehouseSelect = ({
	value,
	onChange,
	possibleWarehouses,
}: IProps) => {
	const [search, setSearch] = useState(value?.name || "");

	const filteredWarehouses = getFilteredWarehouses(search, possibleWarehouses);

	const [scrollElement, setScrollElement] = useState<HTMLDivElement | null>(
		null,
	);

	const scrollAreaRef = useCallback((element: HTMLDivElement) => {
		setScrollElement(element);
	}, []);

	const virtualizer = useVirtualizer({
		count: filteredWarehouses.length,
		getScrollElement: () => scrollElement,
		estimateSize: () => 28,
		overscan: 5,
	});

	const handleValueChange = (value: IWarehouse | null) => {
		onChange(value);
		setSearch(value?.name || "");
	};

	const hasWarehouses = filteredWarehouses.length > 0;

	return (
		<Combobox onValueChange={handleValueChange}>
			<ComboboxInput
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Select warehouse by name"
				showClear
				className={"w-full"}
			/>

			<ComboboxContent
				className={"w-full"}
				style={{
					maxHeight: `300px`,
					overflowY: "auto",
				}}
				ref={scrollAreaRef}
			>
				{!hasWarehouses && <ComboboxEmpty>No warehouses found</ComboboxEmpty>}

				<div
					style={{
						height: `${virtualizer.getTotalSize()}px`,
						width: "100%",
						position: "relative",
					}}
				>
					{virtualizer.getVirtualItems().map((virtualItem) => {
						const warehouse = filteredWarehouses[virtualItem.index];

						return (
							<ComboboxItem
								key={warehouse.id}
								value={warehouse}
								className={"truncate overflow-hidden"}
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									transform: `translateY(${virtualItem.start}px)`,
								}}
							>
								{warehouse.name}
							</ComboboxItem>
						);
					})}
				</div>
			</ComboboxContent>
		</Combobox>
	);
};
