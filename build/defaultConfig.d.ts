import { type CreateConfigParameters } from '@wagmi/core';
import { CoinbaseWalletParameters } from 'wagmi/connectors';
export declare const getAppName: () => string;
export declare const getAppIcon: () => string;
type DefaultConfigProps = {
    appName: string;
    appIcon?: string;
    appDescription?: string;
    appUrl?: string;
    walletConnectProjectId: string;
    coinbaseWalletPreference?: CoinbaseWalletParameters<'4'>['preference'];
} & Partial<CreateConfigParameters>;
declare const defaultConfig: ({ appName, appIcon, appDescription, appUrl, walletConnectProjectId, coinbaseWalletPreference, chains, client, ...props }: DefaultConfigProps) => CreateConfigParameters;
export default defaultConfig;
