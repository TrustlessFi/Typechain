import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PoolInitializer, PoolInitializerInterface } from "../PoolInitializer";
export declare class PoolInitializer__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): PoolInitializerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PoolInitializer;
}
