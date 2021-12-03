import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestCallbackValidation, TestCallbackValidationInterface } from "../TestCallbackValidation";
declare type TestCallbackValidationConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestCallbackValidation__factory extends ContractFactory {
    constructor(...args: TestCallbackValidationConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestCallbackValidation>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestCallbackValidation;
    connect(signer: Signer): TestCallbackValidation__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b6103b8806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c80638bdb19251461003657610030565b60006000fd5b6100c86004803603608081101561004d5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803562ffffff1690602001909291905050506100f4565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60006101088585858561011763ffffffff16565b905061010f565b949350505050565b60006101398561012e86868661014863ffffffff16565b6101ec63ffffffff16565b9050610140565b949350505050565b61015061032d565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16111561018f57828480945081955050505b60405180606001604052808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018362ffffff1681526020015090506101e5565b9392505050565b60006101fe838361024463ffffffff16565b905080508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561023d5760006000fd5b5b92915050565b60008273ffffffffffffffffffffffffffffffffffffffff16631698ee828360000151846020015185604001516040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018262ffffff168152602001935050505060206040518083038186803b1580156102e55760006000fd5b505afa1580156102fa573d600060003e3d6000fd5b505050506040513d60208110156103115760006000fd5b8101908080519060200190929190505050905080505b92915050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600062ffffff168152602001509056fea26469706673582212205d739f4d78c69a6e5117bdca1c0a3e6bd71d2246ea8305ebe05135471df1428964736f6c63430007060033";
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
    static createInterface(): TestCallbackValidationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestCallbackValidation;
}
export {};
