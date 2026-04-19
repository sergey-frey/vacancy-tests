import { use } from "react";
import { getMobileOrderFormFieldsData } from "../lib/get-mobile-order-form-fields-data";
import { MobileOrderForm } from "./mobile-order-form";
import { MobileOrderTotalFooter } from "./mobile-order-total-footer";
import { MobileOrderFormProviders } from "./providers";

interface IProps {
	token: string;
	className?: string;
}

export const MobileOrderFormServerWrapper = ({ token, className }: IProps) => {
	const data = use(getMobileOrderFormFieldsData(token));

	try {
		return (
			<MobileOrderFormProviders>
				<section className="mx-auto w-full max-w-120 p-4">
					<MobileOrderForm
						possibleContragents={data.contragentsResponse}
						possiblePayboxes={data.payboxesResponse}
						possibleOrganizations={data.organizationsResponse}
						possibleWarehouses={data.warehousesResponse}
						possiblePriceTypes={data.priceTypesResponse}
						possibleProducts={data.productsResponse}
						className={className}
					/>
				</section>

				<MobileOrderTotalFooter />
			</MobileOrderFormProviders>
		);
	} catch (error) {
		if (error instanceof Error) {
			return <p>Error: {error.message}</p>;
		}

		return <p>Error: Unknown error</p>;
	}
};
