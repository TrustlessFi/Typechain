import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { RewardsContract, RewardsContractInterface } from "../RewardsContract";
export declare class RewardsContract__factory {
    static readonly abi: ({
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): RewardsContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RewardsContract;
}
