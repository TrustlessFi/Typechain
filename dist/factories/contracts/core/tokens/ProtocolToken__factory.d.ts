import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ProtocolToken, ProtocolTokenInterface } from "../../../../contracts/core/tokens/ProtocolToken";
export declare class ProtocolToken__factory {
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
    static createInterface(): ProtocolTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ProtocolToken;
}
