import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";
import { WsMockClient } from "./ws-client-mock";
import { WsServerMock } from "./ws-server-mock";

const WsMockClientContext = createContext<WsMockClient | null>(null);

export function WsMockClientProvider({ children }: { children: ReactNode }) {
  const clientRef = useRef<WsMockClient>(new WsMockClient());

  useEffect(() => {
    new WsServerMock(clientRef.current);
  }, []);

  return (
    <WsMockClientContext.Provider value={clientRef.current}>
      {children}
    </WsMockClientContext.Provider>
  );
}

export function useWsMockClient(): WsMockClient {
  const client = useContext(WsMockClientContext);

  if (!client) {
    throw new Error("useWsMockClient must be used within WsMockClientProvider");
  }

  return client;
}
