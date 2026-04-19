import { MobileOrderFormContextProvider } from "../lib/mobile-order-form-context";

export const MobileOrderFormProviders = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<MobileOrderFormContextProvider>{children}</MobileOrderFormContextProvider>
	);
};
