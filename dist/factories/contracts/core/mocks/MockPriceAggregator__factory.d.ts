import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { MockPriceAggregator, MockPriceAggregatorInterface } from "../../../../contracts/core/mocks/MockPriceAggregator";
declare type MockPriceAggregatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockPriceAggregator__factory extends ContractFactory {
    constructor(...args: MockPriceAggregatorConstructorParams);
    deploy(__decimals: PromiseOrValue<BigNumberish>, __answer: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockPriceAggregator>;
    getDeployTransaction(__decimals: PromiseOrValue<BigNumberish>, __answer: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockPriceAggregator;
    connect(signer: Signer): MockPriceAggregator__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b5060405161027f38038061027f83398181016040528101906100339190610067565b5b81600060006101000a81548160ff021916908360ff1602179055508060016000508190909055505b50506100a4566100a3565b600060006040838503121561007c5760006000fd5b825160ff8116811415156100905760006000fd5b80925050602083015190505b9250929050565b5b6101cc806100b36000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c8063313ce56714610041578063feaf968c1461005f5761003b565b60006000fd5b610049610081565b60405161005691906100fd565b60405180910390f35b61006761009d565b604051610078959493929190610112565b60405180910390f35b6000600060009054906101000a900460ff16905061009a565b90565b60006000600060006000680300000000000018ed9450845060016000505493508350610708426100cd9190610150565b92508250610384426100df9190610150565b91508150680300000000000018ed905080505b909192939456610195565b600060208201905060ff831682525b92915050565b600060a08201905069ffffffffffffffffffff80881683528660208401528560408401528460608401528084166080840152505b9695505050505050565b600082820390508181111561018e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5b92915050565bfea2646970667358221220f7afe2ddfa9be7d035264c014e4ccfb1f1710ef166e0fc94a375098bb8e1e67064736f6c63430008100033";
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
    })[];
    static createInterface(): MockPriceAggregatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockPriceAggregator;
}
export {};
