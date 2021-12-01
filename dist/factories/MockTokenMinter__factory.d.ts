import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { MockTokenMinter, MockTokenMinterInterface } from "../MockTokenMinter";
export declare class MockTokenMinter__factory {
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
    static createInterface(): MockTokenMinterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTokenMinter;
}
