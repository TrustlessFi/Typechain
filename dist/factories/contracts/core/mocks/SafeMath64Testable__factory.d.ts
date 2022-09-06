import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SafeMath64Testable, SafeMath64TestableInterface } from "../../../../contracts/core/mocks/SafeMath64Testable";
declare type SafeMath64TestableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeMath64Testable__factory extends ContractFactory {
    constructor(...args: SafeMath64TestableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SafeMath64Testable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SafeMath64Testable;
    connect(signer: Signer): SafeMath64Testable__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b61031f806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c806322c6ae151461004c5780636e2c732d1461007c578063911b5f4e146100ac57610046565b60006000fd5b610066600480360381019061006191906101d4565b6100dc565b604051610073919061020a565b60405180910390f35b610096600480360381019061009191906101d4565b610106565b6040516100a3919061020a565b60405180910390f35b6100c660048036038101906100c191906101d4565b610130565b6040516100d3919061020a565b60405180910390f35b60006100fb828467ffffffffffffffff1661015a90919063ffffffff16565b905080505b92915050565b6000610125828467ffffffffffffffff1661017590919063ffffffff16565b905080505b92915050565b600061014f828467ffffffffffffffff1661019090919063ffffffff16565b905080505b92915050565b600081836101689190610257565b905061016f565b92915050565b60008183610183919061028e565b905061018a565b92915050565b6000818361019e91906102bb565b90506101a5565b92915050566102e8565b60008135905067ffffffffffffffff8116811415156101ce5760006000fd5b5b919050565b60006000604083850312156101e95760006000fd5b6101f2836101af565b9150610200602084016101af565b90505b9250929050565b600060208201905067ffffffffffffffff831682525b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b600067ffffffffffffffff8083168185168183048111821515161561027f5761027e610226565b5b80820293505050505b92915050565b600067ffffffffffffffff808416818416019150808211156102b3576102b2610226565b5b505b92915050565b600067ffffffffffffffff808416818416039150808211156102e0576102df610226565b5b505b92915050565bfea26469706673582212200dd28161de5677334047923e5c446ae95a36cc0f93176c5e3f40d790cee67e7e64736f6c63430008100033";
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
    static createInterface(): SafeMath64TestableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeMath64Testable;
}
export {};
