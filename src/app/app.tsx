import {
	UsersTable,
	UsersTableDataLayer,
	UsersTableErrorFallback,
	UsersTableOptionsProvider,
	UsersTableSearchForm,
} from "@/features/users-table";

export function App() {
	return (
		<main className="main">
			<UsersTableOptionsProvider>
				<UsersTableDataLayer>
					{({ data, isLoading, error, refetch }) => {
						const hasError = !!error;

						return (
							<>
								<UsersTableSearchForm refetch={refetch} />

								{hasError && <UsersTableErrorFallback />}

								{!hasError && (
									<UsersTable
										users={data?.users}
										isLoading={isLoading}
										total={data?.total}
									/>
								)}
							</>
						);
					}}
				</UsersTableDataLayer>
			</UsersTableOptionsProvider>
		</main>
	);
}
