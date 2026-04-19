"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useCallback, useState } from "react";
import type {
	IGetOrganizationsResponse,
	IOrganization,
} from "@/entities/organization";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
} from "@/shared/components/ui/combobox";

interface IProps {
	value: IOrganization | null;
	onChange: (value: IOrganization | null) => void;
	possibleOrganizations: IGetOrganizationsResponse;
}

const getFilteredOrganizations = (
	search: string,
	possibleOrganizations: IGetOrganizationsResponse,
) => {
	if (!search) return possibleOrganizations.result;

	return possibleOrganizations.result.filter((organization) => {
		if (!organization.short_name) return false;

		return organization.short_name.toLowerCase().includes(search.toLowerCase());
	});
};

export const OrganizationSelect = ({
	value,
	onChange,
	possibleOrganizations,
}: IProps) => {
	const [search, setSearch] = useState(value?.short_name || "");

	const filteredOrganizations = getFilteredOrganizations(
		search,
		possibleOrganizations,
	);

	const [scrollElement, setScrollElement] = useState<HTMLDivElement | null>(
		null,
	);

	const scrollAreaRef = useCallback((element: HTMLDivElement) => {
		setScrollElement(element);
	}, []);

	const virtualizer = useVirtualizer({
		count: filteredOrganizations.length,
		getScrollElement: () => scrollElement,
		estimateSize: () => 28,
		overscan: 5,
	});

	const handleValueChange = (value: IOrganization | null) => {
		onChange(value);
		setSearch(value?.short_name || "");
	};

	const hasOrganizations = filteredOrganizations.length > 0;

	return (
		<Combobox onValueChange={handleValueChange}>
			<ComboboxInput
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Select organization by name"
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
				{!hasOrganizations && (
					<ComboboxEmpty>No organizations found</ComboboxEmpty>
				)}

				<div
					style={{
						height: `${virtualizer.getTotalSize()}px`,
						width: "100%",
						position: "relative",
					}}
				>
					{virtualizer.getVirtualItems().map((virtualItem) => {
						const organization = filteredOrganizations[virtualItem.index];

						return (
							<ComboboxItem
								key={organization.id}
								value={organization}
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									transform: `translateY(${virtualItem.start}px)`,
								}}
							>
								{organization.short_name}
							</ComboboxItem>
						);
					})}
				</div>
			</ComboboxContent>
		</Combobox>
	);
};
