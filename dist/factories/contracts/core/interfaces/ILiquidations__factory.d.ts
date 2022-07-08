import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILiquidations, ILiquidationsInterface } from "../../../../contracts/core/interfaces/ILiquidations";
export declare class ILiquidations__factory {
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
        inputs: never[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ILiquidationsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILiquidations;
}
