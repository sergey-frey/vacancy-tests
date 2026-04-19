import { contragentsService } from "@/entities/contragents";
import { organizationService } from "@/entities/organization";
import { payboxService } from "@/entities/paybox";
import { priceTypeService } from "@/entities/price-type";
import { productService } from "@/entities/product";
import { warehouseService } from "@/entities/warehouse";

export const getMobileOrderFormFieldsData = async (token: string) => {
	try {
		const [
			contragentsResponse,
			payboxesResponse,
			organizationsResponse,
			warehousesResponse,
			priceTypesResponse,
			productsResponse,
		] = await Promise.all([
			contragentsService.getContragents({ token }),
			payboxService.getPayboxes({ token }),
			organizationService.getOrganizations({ token }),
			warehouseService.getWarehouses({ token }),
			priceTypeService.getPriceTypes({ token }),
			productService.getProducts({ token }),
		]);

		return {
			contragentsResponse,
			payboxesResponse,
			organizationsResponse,
			warehousesResponse,
			priceTypesResponse,
			productsResponse,
		};
	} catch {
		throw new Error("Failed to get mobile order form fields data");
	}
};
