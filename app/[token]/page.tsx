import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MobileOrderFormServerWrapper } from "@/features/create-order";
import { Card, CardContent } from "@/shared/components/ui/card";

const ErrorFallback = () => {
	return (
		<section className="mt-4 max-w-120 w-full mx-auto px-4">
			<Card>
				<CardContent>⚠️ Something went wrong</CardContent>
			</Card>
		</section>
	);
};

const LoadingFallback = () => {
	return (
		<section className="mt-4 max-w-120 w-full mx-auto px-4">
			<Card>
				<CardContent className="flex items-center justify-center">
					<Loader2 className="animate-spin" />
				</CardContent>
			</Card>
		</section>
	);
};

export default async function TokenPage({
	params,
}: {
	params: Promise<{ token: string }>;
}) {
	const { token } = await params;

	return (
		<ErrorBoundary fallback={<ErrorFallback />}>
			<Suspense fallback={<LoadingFallback />}>
				<MobileOrderFormServerWrapper token={token} />
			</Suspense>
		</ErrorBoundary>
	);
}
