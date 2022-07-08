import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC20Decimals, ERC20DecimalsInterface } from "../../../../../contracts/core/logic/Prices.sol/ERC20Decimals";
export declare class ERC20Decimals__factory {
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
    static createInterface(): ERC20DecimalsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Decimals;
}
