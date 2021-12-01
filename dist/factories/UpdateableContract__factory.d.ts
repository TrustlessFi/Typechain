import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { UpdateableContract, UpdateableContractInterface } from "../UpdateableContract";
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
