"use client";

import { useState } from "react";
import type { IGetPriceTypesResponse, IPriceType } from "@/entities/price-type";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
} from "@/shared/components/ui/combobox";

interface IProps {
	value: IPriceType | null;
	onChange: (value: IPriceType | null) => void;
	possiblePriceTypes: IGetPriceTypesResponse;
}

const getFilteredPriceTypes = (
	search: string,
	possiblePriceTypes: IGetPriceTypesResponse,
) => {
	if (!search) return possiblePriceTypes.result;

	return possiblePriceTypes.result.filter((priceType) => {
		if (!priceType.name) return false;

		return priceType.name.toLowerCase().includes(search.toLowerCase());
	});
};

export const PriceTypeSelect = ({
	value,
	onChange,
	possiblePriceTypes,
}: IProps) => {
	const [search, setSearch] = useState(value?.name || "");

	const filteredPriceTypes = getFilteredPriceTypes(search, possiblePriceTypes);

	const handleValueChange = (val: IPriceType | null) => {
		onChange(val);
		setSearch(val?.name || "");
	};

	const hasPriceTypes = filteredPriceTypes.length > 0;

	return (
		<Combobox onValueChange={handleValueChange}>
			<ComboboxInput
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Select price type by name"
				showClear
				className={"w-full"}
			/>

			<ComboboxContent
				className={"w-full"}
				style={{
					maxHeight: `300px`,
					overflowY: "auto",
				}}
			>
				{!hasPriceTypes && <ComboboxEmpty>No price types found</ComboboxEmpty>}

				{filteredPriceTypes.map((priceType) => (
					<ComboboxItem
						key={priceType.id}
						value={priceType}
						className={"truncate"}
					>
						{priceType.name}
					</ComboboxItem>
				))}
			</ComboboxContent>
		</Combobox>
	);
};
