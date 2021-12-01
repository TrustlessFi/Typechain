import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUniswapV1Exchange, IUniswapV1ExchangeInterface } from "../IUniswapV1Exchange";
export declare class IUniswapV1Exchange__factory {
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
    static createInterface(): IUniswapV1ExchangeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV1Exchange;
}
