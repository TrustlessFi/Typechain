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
    static readonly bytecode = "0x60c06040523480156100115760006000fd5b506040516104e33803806104e3833981810160405281019061003391906100b3565b5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150503373ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b506100e8566100e7565b6000602082840312156100c4578081fd5b81516001600160a01b038116811415156100dc578182fd5b809150505b92915050565b5b60805160601c60a05160601c6103c561011e6000396000818160ca015260ee01526000818160a6015261017e01526103c56000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c80630c340a241461004c578063452a93201461006a5780636299a6ef1461008857610046565b60006000fd5b6100546100a4565b6040516100619190610315565b60405180910390f35b6100726100c8565b60405161007f91906102ed565b60405180910390f35b6100a2600480360381019061009d91906102d1565b6100ec565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561017c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101739061034f565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166343f48fbd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101e35760006000fd5b505afa1580156101f8573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021c9190610290565b73ffffffffffffffffffffffffffffffffffffffff16636dc14c8e826040518263ffffffff1660e01b8152600401610254919061033d565b600060405180830381600087803b15801561026f5760006000fd5b505af1158015610284573d600060003e3d6000fd5b505050505b505661038e565b6000602082840312156102a1578081fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811415156102c6578182fd5b809150505b92915050565b6000602082840312156102e2578081fd5b813590505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60006020820190508282525b92915050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565bfea264697066735822122088eb06b0288efa1e1290e17423f4d1aefd3c79df8b4f0e3f574d8fdff242ee6064736f6c63430008040033";
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
