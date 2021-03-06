import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { PeripheryImmutableState, PeripheryImmutableStateInterface } from "../../../../contracts/uniswap-mocks/libraries/PeripheryImmutableState";
export declare class PeripheryImmutableState__factory {
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
    static createInterface(): PeripheryImmutableStateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PeripheryImmutableState;
}
