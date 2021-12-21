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
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b6101f5806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c80636a263f021461003657610030565b60006000fd5b610050600480360381019061004b919061010a565b610066565b60405161005d9190610126565b60405180910390f35b60006100778261008163ffffffff16565b905080505b919050565b600060038211156100ee578190508050600060016002846100a2919061017c565b6100ac9190610138565b90505b818110156100e857809150815060028182856100cb919061017c565b6100d59190610138565b6100df919061017c565b905080506100af565b50610100565b6000821415156100ff576001905080505b5b5b919050566101be565b60006020828403121561011b578081fd5b813590505b92915050565b60006020820190508282525b92915050565b60008219821115610170577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b82820190505b92915050565b60008215156101b2577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b82820490505b92915050565bfea26469706673582212204416896951ebe602dad7e48a5f4ba16658cd8444819a9ae5de889fca112a672564736f6c63430008040033";
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
