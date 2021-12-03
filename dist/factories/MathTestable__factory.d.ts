import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MathTestable, MathTestableInterface } from "../MathTestable";
declare type MathTestableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MathTestable__factory extends ContractFactory {
    constructor(...args: MathTestableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MathTestable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MathTestable;
    connect(signer: Signer): MathTestable__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b61012c806100266000396000f3fe608060405234801560105760006000fd5b5060043610602c5760003560e01c80636a263f0214603257602c565b60006000fd5b605c6004803603602081101560475760006000fd5b81019080803590602001909291905050506072565b6040518082815260200191505060405180910390f35b6000608182608b63ffffffff16565b905080505b919050565b6000600382111560df5781905080506000600160028481151560a957fe5b040190505b8181101560da578091508150600281828581151560c757fe5b040181151560d157fe5b049050805060ae565b5060f0565b60008214151560ef576001905080505b5b5b91905056fea26469706673582212203e081b0b57354c0439652c945d1fc6606d06496f207a72cdad84c733642d532064736f6c63430007060033";
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
    static createInterface(): MathTestableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MathTestable;
}
export {};