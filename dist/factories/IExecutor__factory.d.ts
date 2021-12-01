import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IExecutor, IExecutorInterface } from "../IExecutor";
export declare class IExecutor__factory {
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
    static createInterface(): IExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IExecutor;
}
