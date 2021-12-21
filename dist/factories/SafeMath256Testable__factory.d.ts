import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SafeMath256Testable, SafeMath256TestableInterface } from "../SafeMath256Testable";
declare type SafeMath256TestableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeMath256Testable__factory extends ContractFactory {
    constructor(...args: SafeMath256TestableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SafeMath256Testable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SafeMath256Testable;
    connect(signer: Signer): SafeMath256Testable__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b6102b5806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c8063771602f71461004c578063b67d77c51461007c578063c8a4ac9c146100ac57610046565b60006000fd5b61006660048036038101906100619190610191565b6100dc565b60405161007391906101b7565b60405180910390f35b61009660048036038101906100919190610191565b6100fc565b6040516100a391906101b7565b60405180910390f35b6100c660048036038101906100c19190610191565b61011c565b6040516100d391906101b7565b60405180910390f35b60006100f1828461013c90919063ffffffff16565b905080505b92915050565b6000610111828461015790919063ffffffff16565b905080505b92915050565b6000610131828461017290919063ffffffff16565b905080505b92915050565b6000818361014a91906101c9565b9050610151565b92915050565b60008183610165919061022e565b905061016c565b92915050565b6000818361018091906101e9565b9050610187565b929150505661027e565b60006000604083850312156101a4578182fd5b82359150602083013590505b9250929050565b60006020820190508282525b92915050565b600082198211156101dd576101dc61024d565b5b82820190505b92915050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156102225761022161024d565b5b82820290505b92915050565b6000828210156102415761024061024d565b5b82820390505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565bfea264697066735822122045ed286443893b447817923313711d809a86a3a9e50476e4cac84af6c8c6881764736f6c63430008040033";
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
    static createInterface(): SafeMath256TestableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeMath256Testable;
}
export {};
