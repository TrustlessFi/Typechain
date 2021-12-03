import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PeripheryPaymentsWithFee, PeripheryPaymentsWithFeeInterface } from "../PeripheryPaymentsWithFee";
export declare class PeripheryPaymentsWithFee__factory {
    static readonly abi: ({
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
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
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): PeripheryPaymentsWithFeeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PeripheryPaymentsWithFee;
}
