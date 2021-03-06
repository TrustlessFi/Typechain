import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISwapRouter, ISwapRouterInterface } from "../../../../contracts/uniswap-mocks/interfaces/ISwapRouter";
export declare class ISwapRouter__factory {
    static readonly abi: ({
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
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
    })[];
    static createInterface(): ISwapRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISwapRouter;
}
