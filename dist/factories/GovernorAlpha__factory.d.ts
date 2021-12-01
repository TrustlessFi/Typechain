import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GovernorAlpha, GovernorAlphaInterface } from "../GovernorAlpha";
export declare class GovernorAlpha__factory {
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
        outputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): GovernorAlphaInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorAlpha;
}
