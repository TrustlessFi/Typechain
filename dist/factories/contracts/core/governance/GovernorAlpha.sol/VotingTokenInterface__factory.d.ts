import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { VotingTokenInterface, VotingTokenInterfaceInterface } from "../../../../../contracts/core/governance/GovernorAlpha.sol/VotingTokenInterface";
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
