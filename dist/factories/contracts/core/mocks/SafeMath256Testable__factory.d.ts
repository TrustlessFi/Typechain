import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SafeMath256Testable, SafeMath256TestableInterface } from "../../../../contracts/core/mocks/SafeMath256Testable";
declare type SafeMath256TestableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeMath256Testable__factory extends ContractFactory {
    constructor(...args: SafeMath256TestableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SafeMath256Testable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SafeMath256Testable;
    connect(signer: Signer): SafeMath256Testable__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b6102b6806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c8063771602f71461004c578063b67d77c51461007c578063c8a4ac9c146100ac57610046565b60006000fd5b61006660048036038101906100619190610191565b6100dc565b60405161007391906101b9565b60405180910390f35b61009660048036038101906100919190610191565b6100fc565b6040516100a391906101b9565b60405180910390f35b6100c660048036038101906100c19190610191565b61011c565b6040516100d391906101b9565b60405180910390f35b60006100f1828461013c90919063ffffffff16565b905080505b92915050565b6000610111828461015790919063ffffffff16565b905080505b92915050565b6000610131828461017290919063ffffffff16565b905080505b92915050565b6000818361014a91906101fc565b9050610151565b92915050565b60008183610165919061021b565b905061016c565b92915050565b60008183610180919061023a565b9050610187565b929150505661027f565b60006000604083850312156101a65760006000fd5b82359150602083013590505b9250929050565b60006020820190508282525b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b6000828201905080821115610214576102136101cb565b5b5b92915050565b6000828203905081811115610233576102326101cb565b5b5b92915050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610273576102726101cb565b5b82820290505b92915050565bfea264697066735822122017415f25bed91acd0e5ad670fc5c35f3f4c86ed4a977cb03e9b2865a47081ef164736f6c63430008100033";
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
