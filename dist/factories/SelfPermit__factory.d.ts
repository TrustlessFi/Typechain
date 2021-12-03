import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { SelfPermit, SelfPermitInterface } from "../SelfPermit";
export declare class SelfPermit__factory {
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
    static createInterface(): SelfPermitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SelfPermit;
}
