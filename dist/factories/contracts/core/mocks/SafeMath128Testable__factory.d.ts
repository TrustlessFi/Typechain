import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SafeMath128Testable, SafeMath128TestableInterface } from "../../../../contracts/core/mocks/SafeMath128Testable";
declare type SafeMath128TestableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeMath128Testable__factory extends ContractFactory {
    constructor(...args: SafeMath128TestableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SafeMath128Testable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SafeMath128Testable;
    connect(signer: Signer): SafeMath128Testable__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b61035f806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c8063a6fd00851461004c578063e856528a1461007c578063feb99390146100ac57610046565b60006000fd5b610066600480360381019061006191906101f4565b6100dc565b604051610073919061022a565b60405180910390f35b610096600480360381019061009191906101f4565b61010e565b6040516100a3919061022a565b60405180910390f35b6100c660048036038101906100c191906101f4565b610140565b6040516100d3919061022a565b60405180910390f35b600061010382846fffffffffffffffffffffffffffffffff1661017290919063ffffffff16565b905080505b92915050565b600061013582846fffffffffffffffffffffffffffffffff1661018d90919063ffffffff16565b905080505b92915050565b600061016782846fffffffffffffffffffffffffffffffff166101a890919063ffffffff16565b905080505b92915050565b60008183610180919061027f565b9050610187565b92915050565b6000818361019b91906102b4565b90506101a2565b92915050565b600081836101b691906102f3565b90506101bd565b9291505056610328565b6000813590506fffffffffffffffffffffffffffffffff8116811415156101ee5760006000fd5b5b919050565b60006000604083850312156102095760006000fd5b610212836101c7565b9150610220602084016101c7565b90505b9250929050565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b60006fffffffffffffffffffffffffffffffff808416818416039150808211156102ac576102ab61024e565b5b505b92915050565b60006fffffffffffffffffffffffffffffffff808316818516818304811182151516156102e4576102e361024e565b5b80820293505050505b92915050565b60006fffffffffffffffffffffffffffffffff808416818416019150808211156103205761031f61024e565b5b505b92915050565bfea2646970667358221220a52786e702434ee3a4287045db2c2620f78b8dd7e7b0008a129a79c3e17553aa64736f6c63430008100033";
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
    static createInterface(): SafeMath128TestableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeMath128Testable;
}
export {};
