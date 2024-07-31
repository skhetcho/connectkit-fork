import { type Connector } from 'wagmi';
export declare function useConnectors(): import("@wagmi/core").GetConnectorsReturnType;
export declare function useConnector(id: string, uuid?: string): Connector;
export declare function useInjectedConnector(uuid?: string): Connector;
export declare function useWalletConnectConnector(): Connector;
export declare function useCoinbaseWalletConnector(): Connector;
export declare function useMetaMaskConnector(): Connector;
