import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC20Burnable, ERC20BurnableInterface } from "../../../../../../@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable";
export declare class ERC20Burnable__factory {
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC20BurnableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Burnable;
}
