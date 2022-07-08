import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IProtocolLock, IProtocolLockInterface } from "../../../../contracts/core/interfaces/IProtocolLock";
export declare class IProtocolLock__factory {
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
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IProtocolLockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProtocolLock;
}
