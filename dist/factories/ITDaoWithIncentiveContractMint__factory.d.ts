import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITDaoWithIncentiveContractMint, ITDaoWithIncentiveContractMintInterface } from "../ITDaoWithIncentiveContractMint";
export declare class ITDaoWithIncentiveContractMint__factory {
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
    static createInterface(): ITDaoWithIncentiveContractMintInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITDaoWithIncentiveContractMint;
}
