import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { MockRatesDelegate, MockRatesDelegateInterface } from "../../../../contracts/core/mocks/MockRatesDelegate";
declare type MockRatesDelegateConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockRatesDelegate__factory extends ContractFactory {
    constructor(...args: MockRatesDelegateConstructorParams);
    deploy(_governor: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockRatesDelegate>;
    getDeployTransaction(_governor: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockRatesDelegate;
    connect(signer: Signer): MockRatesDelegate__factory;
    static readonly bytecode = "0x60c06040523480156100115760006000fd5b506040516104d13803806104d1833981810160405281019061003391906100ad565b5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150503373ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815260200150505b506100e6566100e5565b6000602082840312156100c05760006000fd5b81516001600160a01b038116811415156100da5760006000fd5b809150505b92915050565b5b60805160a0516103bb6101166000396000818160ca015260ee01526000818160a6015261017e01526103bb6000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c80630c340a241461004c578063452a93201461006a5780636299a6ef1461008857610046565b60006000fd5b6100546100a4565b6040516100619190610280565b60405180910390f35b6100726100c8565b60405161007f91906102a8565b60405180910390f35b6100a2600480360381019061009d91906102d0565b6100ec565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561017c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610173906102ee565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166343f48fbd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101e8573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020c919061032d565b73ffffffffffffffffffffffffffffffffffffffff16636dc14c8e826040518263ffffffff1660e01b81526004016102449190610372565b600060405180830381600087803b15801561025f5760006000fd5b505af1158015610274573d600060003e3d6000fd5b505050505b5056610384565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b6000602082840312156102e35760006000fd5b813590505b92915050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b6000602082840312156103405760006000fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811415156103675760006000fd5b809150505b92915050565b60006020820190508282525b92915050565bfea26469706673582212205a6bef2779a385817f522a639dd1388227aea12133ab2a995b2d612d045d2d0b64736f6c63430008100033";
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
