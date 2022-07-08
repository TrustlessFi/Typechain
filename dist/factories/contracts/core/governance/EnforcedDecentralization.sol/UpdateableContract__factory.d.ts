import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { UpdateableContract, UpdateableContractInterface } from "../../../../../contracts/core/governance/EnforcedDecentralization.sol/UpdateableContract";
export declare class UpdateableContract__factory {
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
    static createInterface(): UpdateableContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UpdateableContract;
}
