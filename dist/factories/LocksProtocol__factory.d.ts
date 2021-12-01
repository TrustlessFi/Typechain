import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { LocksProtocol, LocksProtocolInterface } from "../LocksProtocol";
export declare class LocksProtocol__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: never[];
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
    static createInterface(): LocksProtocolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LocksProtocol;
}
