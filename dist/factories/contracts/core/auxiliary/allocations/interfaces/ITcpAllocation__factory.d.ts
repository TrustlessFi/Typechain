import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITcpAllocation, ITcpAllocationInterface } from "../../../../../../contracts/core/auxiliary/allocations/interfaces/ITcpAllocation";
export declare class ITcpAllocation__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
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
    })[];
    static createInterface(): ITcpAllocationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITcpAllocation;
}
