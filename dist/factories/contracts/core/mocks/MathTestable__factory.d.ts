import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MathTestable, MathTestableInterface } from "../../../../contracts/core/mocks/MathTestable";
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
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b6101fb806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c80636a263f021461003657610030565b60006000fd5b610050600480360381019061004b919061010a565b610066565b60405161005d9190610128565b60405180910390f35b60006100778261008163ffffffff16565b905080505b919050565b600060038211156100ee578190508050600060016002846100a2919061013a565b6100ac919061017e565b90505b818110156100e857809150815060028182856100cb919061013a565b6100d5919061017e565b6100df919061013a565b905080506100af565b50610100565b6000821415156100ff576001905080505b5b5b919050566101c4565b60006020828403121561011d5760006000fd5b813590505b92915050565b60006020820190508282525b92915050565b6000821515610172577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b82820490505b92915050565b600082198211156101b8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b82820190505b92915050565bfea2646970667358221220ad48f9f9d88b830d529922fdd384f7162acf7e2a49be7d9b9f6a86226e4ad5e764736f6c634300080c0033";
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
