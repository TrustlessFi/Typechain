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
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b6104f3806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c8063a6fd00851461004c578063e856528a146100cf578063feb993901461015257610046565b60006000fd5b6100a7600480360360408110156100635760006000fd5b8101908080356fffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff1690602001909291905050506101d5565b60405180826fffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61012a600480360360408110156100e65760006000fd5b8101908080356fffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff169060200190929190505050610207565b60405180826fffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101ad600480360360408110156101695760006000fd5b8101908080356fffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff169060200190929190505050610239565b60405180826fffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60006101fc82846fffffffffffffffffffffffffffffffff1661026b90919063ffffffff16565b905080505b92915050565b600061022e82846fffffffffffffffffffffffffffffffff1661031890919063ffffffff16565b905080505b92915050565b600061026082846fffffffffffffffffffffffffffffffff1661041090919063ffffffff16565b905080505b92915050565b6000826fffffffffffffffffffffffffffffffff168284039150816fffffffffffffffffffffffffffffffff1611151515610311576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f7375622d756e646572666c6f770000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b60006000826fffffffffffffffffffffffffffffffff1614806103925750826fffffffffffffffffffffffffffffffff16826fffffffffffffffffffffffffffffffff168385029250826fffffffffffffffffffffffffffffffff1681151561037d57fe5b046fffffffffffffffffffffffffffffffff16145b1515610409576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6d756c2d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b6000826fffffffffffffffffffffffffffffffff168284019150816fffffffffffffffffffffffffffffffff16101515156104b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b9291505056fea2646970667358221220c018fda07ae433d34235bea186138e583323eb5677c3005439b6dc9ca2393b1a64736f6c63430007060033";
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
