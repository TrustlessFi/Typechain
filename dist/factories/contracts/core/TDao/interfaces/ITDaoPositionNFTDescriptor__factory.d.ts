import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITDaoPositionNFTDescriptor, ITDaoPositionNFTDescriptorInterface } from "../../../../../contracts/core/TDao/interfaces/ITDaoPositionNFTDescriptor";
export declare class ITDaoPositionNFTDescriptor__factory {
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
    static createInterface(): ITDaoPositionNFTDescriptorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITDaoPositionNFTDescriptor;
}
