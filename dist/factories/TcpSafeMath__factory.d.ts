import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TcpSafeMath, TcpSafeMathInterface } from "../TcpSafeMath";
declare type TcpSafeMathConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TcpSafeMath__factory extends ContractFactory {
    constructor(...args: TcpSafeMathConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TcpSafeMath>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TcpSafeMath;
    connect(signer: Signer): TcpSafeMath__factory;
    static readonly bytecode = "0x609a610027600b82828239805160001a6073141515601957fe5b30600052607381538281f350fe730000000000000000000000000000000000000000301460806040526004361060365760003560e01c8063c2ee3a0814603c576036565b60006000fd5b60426058565b6040518082815260200191505060405180910390f35b670de0b6b3a76400008156fea26469706673582212204e8d0bcb5c2efd27883ff03ad25bd9389e41d970f27078b0fce3764ec54781c064736f6c63430007060033";
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
    static createInterface(): TcpSafeMathInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TcpSafeMath;
}
export {};
