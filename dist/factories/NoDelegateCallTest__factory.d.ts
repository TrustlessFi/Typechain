import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NoDelegateCallTest, NoDelegateCallTestInterface } from "../NoDelegateCallTest";
declare type NoDelegateCallTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NoDelegateCallTest__factory extends ContractFactory {
    constructor(...args: NoDelegateCallTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NoDelegateCallTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NoDelegateCallTest;
    connect(signer: Signer): NoDelegateCallTest__factory;
    static readonly bytecode = "0x60a06040523480156100115760006000fd5b505b3073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b610053565b60805160601c6102366100706000398061019252506102366000f3fe60806040523480156100115760006000fd5b506004361061006c5760003560e01c8063423ecb0511610051578063423ecb05146100ae57806364270164146100cc578063f45f416e146100d65761006c565b80633045a6e0146100725780633c7c8dd0146100905761006c565b60006000fd5b61007a6100f4565b6040518082815260200191505060405180910390f35b610098610119565b6040518082815260200191505060405180910390f35b6100b661013e565b6040518082815260200191505060405180910390f35b6100d4610166565b005b6100de610177565b6040518082815260200191505060405180910390f35b600060005a905061010961017763ffffffff16565b505a810391505061011656505b90565b600060005a905061012e61013e63ffffffff16565b505a810391505061013b56505b90565b600061014e61019063ffffffff16565b60054281151561015a57fe5b049050610162565b5b90565b6101746101ee63ffffffff16565b5b565b600060054281151561018557fe5b04905061018d565b90565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161415156101eb5760006000fd5b5b565b6101fc61019063ffffffff16565b5b5b56fea264697066735822122058396a2f87b4fde0b42447816c7dbc75cf5baa1d7b560a6a082bf9f54c87eee564736f6c63430007060033";
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
    static createInterface(): NoDelegateCallTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NoDelegateCallTest;
}
export {};
