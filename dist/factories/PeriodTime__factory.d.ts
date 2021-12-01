import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PeriodTime, PeriodTimeInterface } from "../PeriodTime";
export declare class PeriodTime__factory {
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
    static createInterface(): PeriodTimeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PeriodTime;
}
