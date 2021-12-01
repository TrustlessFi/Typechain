import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { VotingTokenInterface, VotingTokenInterfaceInterface } from "../VotingTokenInterface";
export declare class VotingTokenInterface__factory {
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
    static createInterface(): VotingTokenInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VotingTokenInterface;
}
