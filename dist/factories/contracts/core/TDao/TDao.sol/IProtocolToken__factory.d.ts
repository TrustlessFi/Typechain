import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IProtocolToken, IProtocolTokenInterface } from "../../../../../contracts/core/TDao/TDao.sol/IProtocolToken";
export declare class IProtocolToken__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): IProtocolTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProtocolToken;
}
