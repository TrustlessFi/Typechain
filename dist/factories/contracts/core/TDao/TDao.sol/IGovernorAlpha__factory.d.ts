import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGovernorAlpha, IGovernorAlphaInterface } from "../../../../../contracts/core/TDao/TDao.sol/IGovernorAlpha";
export declare class IGovernorAlpha__factory {
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
    static createInterface(): IGovernorAlphaInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGovernorAlpha;
}
