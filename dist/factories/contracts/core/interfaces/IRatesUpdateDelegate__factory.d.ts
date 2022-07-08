import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRatesUpdateDelegate, IRatesUpdateDelegateInterface } from "../../../../contracts/core/interfaces/IRatesUpdateDelegate";
export declare class IRatesUpdateDelegate__factory {
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
    static createInterface(): IRatesUpdateDelegateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRatesUpdateDelegate;
}
