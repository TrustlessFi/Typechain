import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IProtocolTokenWithNFTIcon, IProtocolTokenWithNFTIconInterface } from "../IProtocolTokenWithNFTIcon";
export declare class IProtocolTokenWithNFTIcon__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IProtocolTokenWithNFTIconInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProtocolTokenWithNFTIcon;
}
