import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FixedPoint, FixedPointInterface } from "../FixedPoint";
declare type FixedPointConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FixedPoint__factory extends ContractFactory {
    constructor(...args: FixedPointConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FixedPoint>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FixedPoint;
    connect(signer: Signer): FixedPoint__factory;
    static readonly bytecode = "0x60cf610028600b82828239805160001a607314151561001a57fe5b30600052607381538281f350fe730000000000000000000000000000000000000000301460806040526004361060405760003560e01c80633bf7a83e146046578063552f888a146062576040565b60006000fd5b604c6081565b6040518082815260200191505060405180910390f35b60686094565b604051808260ff16815260200191505060405180910390f35b6e01000000000000000000000000000081565b60708156fea26469706673582212201ec5b9f2fbde667e38a3662770b48873302ffe6e2ff6c67e369a872dd6cdafa764736f6c63430007060033";
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
    static createInterface(): FixedPointInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FixedPoint;
}
export {};
