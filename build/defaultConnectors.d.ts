import { CreateConnectorFn } from 'wagmi';
import { CoinbaseWalletParameters } from '@wagmi/connectors';
type DefaultConnectorsProps = {
    app: {
        name: string;
        icon?: string;
        description?: string;
        url?: string;
    };
    walletConnectProjectId?: string;
    coinbaseWalletPreference?: CoinbaseWalletParameters<'4'>['preference'];
};
declare const defaultConnectors: ({ app, walletConnectProjectId, coinbaseWalletPreference, }: DefaultConnectorsProps) => CreateConnectorFn[];
export default defaultConnectors;
