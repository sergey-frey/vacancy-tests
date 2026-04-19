export enum OperationTypeEnum {
	ORDER = "Заказ",
}

export enum UnitNameEnum {
	PIECE = "шт",
}

export interface ICreateOrderPayload {
	operations: OperationTypeEnum;
	/**
	 * contragent ID
	 */
	contragent: number;

	/**
	 * organization ID
	 */
	organization: number;

	/**
	 * warehouse ID
	 */
	warehouse: number;

	/**
	 * paybox ID
	 */
	paybox: number;

	/**
	 * products
	 */
	goods: {
		/**
		 * product ID
		 */
		nomenclature: number;

		/**
		 * amount
		 */
		quantity: number;

		/**
		 * price
		 */
		price: number;

		/**
		 * price type ID
		 */
		price_type: number;

		/**
		 * unit name
		 */
		unit_name: UnitNameEnum;
	}[];
}
