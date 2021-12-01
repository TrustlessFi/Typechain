import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRewards, IRewardsInterface } from "../IRewards";
export declare class IRewards__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IRewardsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRewards;
}
