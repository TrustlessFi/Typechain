import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockRatesDelegate, MockRatesDelegateInterface } from "../MockRatesDelegate";
declare type MockRatesDelegateConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockRatesDelegate__factory extends ContractFactory {
    constructor(...args: MockRatesDelegateConstructorParams);
    deploy(_governor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockRatesDelegate>;
    getDeployTransaction(_governor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockRatesDelegate;
    connect(signer: Signer): MockRatesDelegate__factory;
    static readonly bytecode = "0x60c06040523480156100115760006000fd5b5060405161042f38038061042f833981810160405260208110156100355760006000fd5b81019080805190602001909291905050505b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150503373ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b506100c2565b60805160601c60a05160601c61033b6100f460003980610109528061012d52508060e552806101f3525061033b6000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c80630c340a241461004c578063452a9320146100805780636299a6ef146100b457610046565b60006000fd5b6100546100e3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610088610107565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100e1600480360360208110156100cb5760006000fd5b810190808035906020019092919050505061012b565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166343f48fbd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102585760006000fd5b505afa15801561026d573d600060003e3d6000fd5b505050506040513d60208110156102845760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16636dc14c8e826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156102e85760006000fd5b505af11580156102fd573d600060003e3d6000fd5b505050505b5056fea2646970667358221220b75cd22cbe4c7dbbd22444adce9ba1eee3cb837aef91d158ca4eb10f33e4c5e364736f6c63430007060033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MockRatesDelegateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockRatesDelegate;
}
export {};
