import { AppProviders } from "@/app/providers/AppProviders";
import { AppRoutes } from "@/app/router";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { CopyToastProvider } from "@/features/copy-toast";
import { OnboardingTour } from "@/features/onboarding";
import { CornerPromo, DailyCheckIn } from "@/features/promo";
import { Layout } from "@/widgets/layout";

export default function App() {
  return (
    <AppProviders>
      <Layout>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </Layout>
      <OnboardingTour />
      <CopyToastProvider />
      <DailyCheckIn />
      <CornerPromo />
    </AppProviders>
  );
}
