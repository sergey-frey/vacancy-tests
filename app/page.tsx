import { TokensTable } from "@/features/tokens-table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <TokensTable className="max-w-[1200px] w-full" />
    </main>
  );
}
