import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { TimelockInterface, TimelockInterfaceInterface } from "../../../../../contracts/core/governance/GovernorAlpha.sol/TimelockInterface";
export declare class TimelockInterface__factory {
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
    static createInterface(): TimelockInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TimelockInterface;
}
