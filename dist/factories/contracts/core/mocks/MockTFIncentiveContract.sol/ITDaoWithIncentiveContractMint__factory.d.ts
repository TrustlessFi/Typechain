import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITDaoWithIncentiveContractMint, ITDaoWithIncentiveContractMintInterface } from "../../../../../contracts/core/mocks/MockTFIncentiveContract.sol/ITDaoWithIncentiveContractMint";
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
