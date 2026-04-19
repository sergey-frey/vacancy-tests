"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useCallback, useState } from "react";
import type {
	IContragent,
	IGetContragentsResponse,
} from "@/entities/contragents";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
} from "@/shared/components/ui/combobox";

interface IProps {
	value: IContragent | null;
	onChange: (value: IContragent | null) => void;
	possibleContragents: IGetContragentsResponse;
}

const getFilteredContragents = (
	search: string,
	possibleContragents: IGetContragentsResponse,
) => {
	if (!search) return possibleContragents.result;

	return possibleContragents.result.filter((contragent) => {
		if (!contragent.phone) return false;

		return contragent.phone.toLowerCase().startsWith(search.toLowerCase());
	});
};

export const ContragentsSelect = ({
	value,
	onChange,
	possibleContragents,
}: IProps) => {
	const [search, setSearch] = useState(value?.phone || "");

	const filteredContragents = getFilteredContragents(
		search,
		possibleContragents,
	);

	const [scrollElement, setScrollElement] = useState<HTMLDivElement | null>(
		null,
	);

	const scrollAreaRef = useCallback((element: HTMLDivElement) => {
		setScrollElement(element);
	}, []);

	const virtualizer = useVirtualizer({
		count: filteredContragents.length,
		getScrollElement: () => scrollElement,
		estimateSize: () => 28,
		overscan: 5,
	});

	const handleValueChange = (value: IContragent | null) => {
		onChange(value);
		setSearch(value?.phone || "");
	};

	const hasContragents = filteredContragents.length > 0;

	return (
		<Combobox onValueChange={handleValueChange}>
			<ComboboxInput
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Select contragent by phone"
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
				{!hasContragents && <ComboboxEmpty>No contragents found</ComboboxEmpty>}

				<div
					style={{
						height: `${virtualizer.getTotalSize()}px`,
						width: "100%",
						position: "relative",
					}}
				>
					{virtualizer.getVirtualItems().map((virtualItem) => {
						const contragent = filteredContragents[virtualItem.index];

						return (
							<ComboboxItem
								key={contragent.id}
								value={contragent}
								className={"truncate overflow-hidden"}
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									transform: `translateY(${virtualItem.start}px)`,
								}}
							>
								{contragent.name || contragent.phone}
							</ComboboxItem>
						);
					})}
				</div>
			</ComboboxContent>
		</Combobox>
	);
};
