import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV3FlashCallback, IUniswapV3FlashCallbackInterface } from "../../../../../contracts/uniswap-v3-core/interfaces/callback/IUniswapV3FlashCallback";
export declare class IUniswapV3FlashCallback__factory {
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
    static createInterface(): IUniswapV3FlashCallbackInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3FlashCallback;
}
