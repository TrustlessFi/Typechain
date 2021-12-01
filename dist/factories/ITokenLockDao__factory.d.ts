import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITokenLockDao, ITokenLockDaoInterface } from "../ITokenLockDao";
export declare class ITokenLockDao__factory {
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
    static createInterface(): ITokenLockDaoInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenLockDao;
}
