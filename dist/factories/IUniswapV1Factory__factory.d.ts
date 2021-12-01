import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUniswapV1Factory, IUniswapV1FactoryInterface } from "../IUniswapV1Factory";
export declare class IUniswapV1Factory__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): IUniswapV1FactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV1Factory;
}
