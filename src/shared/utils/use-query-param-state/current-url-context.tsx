import { createContext, useState } from "react";

export const CurrentUrlContext = createContext<{
	url: URL;
	setUrl: (url: URL) => void;
} | null>(null);

export const CurrentUrlProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [url, setUrl] = useState(new URL(window.location.href));

	return (
		<CurrentUrlContext.Provider value={{ url, setUrl }}>
			{children}
		</CurrentUrlContext.Provider>
	);
};
