import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IHasVotingRewards, IHasVotingRewardsInterface } from "../IHasVotingRewards";
export declare class IHasVotingRewards__factory {
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
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IHasVotingRewardsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IHasVotingRewards;
}
