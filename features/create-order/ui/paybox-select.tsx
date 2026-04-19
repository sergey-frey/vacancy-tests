"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useCallback, useState } from "react";
import type { IGetPayboxesResponse, IPaybox } from "@/entities/paybox";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
} from "@/shared/components/ui/combobox";

interface IProps {
	value: IPaybox | null;
	onChange: (value: IPaybox | null) => void;
	possiblePayboxes: IGetPayboxesResponse;
}

const getFilteredPayboxes = (
	search: string,
	possiblePayboxes: IGetPayboxesResponse,
) => {
	if (!search) return possiblePayboxes.result;

	return possiblePayboxes.result.filter((paybox) => {
		if (!paybox.name) return false;

		return paybox.name.toLowerCase().includes(search.toLowerCase());
	});
};

export const PayboxSelect = ({ value, onChange, possiblePayboxes }: IProps) => {
	const [search, setSearch] = useState(value?.name || "");

	const filteredPayboxes = getFilteredPayboxes(search, possiblePayboxes);

	const [scrollElement, setScrollElement] = useState<HTMLDivElement | null>(
		null,
	);

	const scrollAreaRef = useCallback((element: HTMLDivElement) => {
		setScrollElement(element);
	}, []);

	const virtualizer = useVirtualizer({
		count: filteredPayboxes.length,
		getScrollElement: () => scrollElement,
		estimateSize: () => 28,
		overscan: 5,
	});

	const handleValueChange = (value: IPaybox | null) => {
		onChange(value);
		setSearch(value?.name || "");
	};

	const hasPayboxes = filteredPayboxes.length > 0;

	return (
		<Combobox onValueChange={handleValueChange}>
			<ComboboxInput
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Select paybox by name"
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
				{!hasPayboxes && <ComboboxEmpty>No payboxes found</ComboboxEmpty>}

				<div
					style={{
						height: `${virtualizer.getTotalSize()}px`,
						width: "100%",
						position: "relative",
					}}
				>
					{virtualizer.getVirtualItems().map((virtualItem) => {
						const paybox = filteredPayboxes[virtualItem.index];

						return (
							<ComboboxItem
								key={paybox.id}
								value={paybox}
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									transform: `translateY(${virtualItem.start}px)`,
								}}
							>
								{paybox.name}
							</ComboboxItem>
						);
					})}
				</div>
			</ComboboxContent>
		</Combobox>
	);
};
