import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { TcpSafeMath, TcpSafeMathInterface } from "../../../../contracts/core/utils/TcpSafeMath";
declare type TcpSafeMathConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TcpSafeMath__factory extends ContractFactory {
    constructor(...args: TcpSafeMathConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TcpSafeMath>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TcpSafeMath;
    connect(signer: Signer): TcpSafeMath__factory;
    static readonly bytecode = "0x60ae610055600b82828239805160001a6073141515610047577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f350fe730000000000000000000000000000000000000000301460806040526004361060365760003560e01c8063c2ee3a0814603c576036565b60006000fd5b60426056565b604051604d91906065565b60405180910390f35b670de0b6b3a764000081566077565b60006020820190508282525b92915050565bfea2646970667358221220b9012ccea73c5080a0330ccf30c36e0113dde632e454b2616d3fed90266c536564736f6c63430008100033";
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
