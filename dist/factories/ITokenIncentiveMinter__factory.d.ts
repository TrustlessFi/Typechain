import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITokenIncentiveMinter, ITokenIncentiveMinterInterface } from "../ITokenIncentiveMinter";
export declare class ITokenIncentiveMinter__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ITokenIncentiveMinterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenIncentiveMinter;
}
