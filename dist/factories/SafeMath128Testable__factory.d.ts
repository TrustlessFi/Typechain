import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SafeMath128Testable, SafeMath128TestableInterface } from "../SafeMath128Testable";
declare type SafeMath128TestableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeMath128Testable__factory extends ContractFactory {
    constructor(...args: SafeMath128TestableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SafeMath128Testable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SafeMath128Testable;
    connect(signer: Signer): SafeMath128Testable__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b610368806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c8063a6fd00851461004c578063e856528a1461007c578063feb99390146100ac57610046565b60006000fd5b610066600480360381019061006191906101f4565b6100dc565b6040516100739190610228565b60405180910390f35b610096600480360381019061009191906101f4565b61010e565b6040516100a39190610228565b60405180910390f35b6100c660048036038101906100c191906101f4565b610140565b6040516100d39190610228565b60405180910390f35b600061010382846fffffffffffffffffffffffffffffffff1661017290919063ffffffff16565b905080505b92915050565b600061013582846fffffffffffffffffffffffffffffffff1661018d90919063ffffffff16565b905080505b92915050565b600061016782846fffffffffffffffffffffffffffffffff166101a890919063ffffffff16565b905080505b92915050565b6000818361018091906102c6565b9050610187565b92915050565b6000818361019b9190610287565b90506101a2565b92915050565b600081836101b6919061024c565b90506101bd565b9291505056610331565b6000813590506fffffffffffffffffffffffffffffffff8116811415156101ee5760006000fd5b5b919050565b6000600060408385031215610207578182fd5b610210836101c7565b915061021e602084016101c7565b90505b9250929050565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b60006fffffffffffffffffffffffffffffffff80831681851680830382111561027857610277610300565b5b80820193505050505b92915050565b60006fffffffffffffffffffffffffffffffff808316818516818304811182151516156102b7576102b6610300565b5b80820293505050505b92915050565b60006fffffffffffffffffffffffffffffffff8083168185169150818110156102f2576102f1610300565b5b818103925050505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565bfea26469706673582212208bd4d1637b9c6c17b8ead22e5983218c932de7475fe783a20b4bcd7786c2ca5664736f6c63430008040033";
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
