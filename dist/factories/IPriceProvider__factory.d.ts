import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPriceProvider, IPriceProviderInterface } from "../IPriceProvider";
export declare class IPriceProvider__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IPriceProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPriceProvider;
}
