import { Signer, ContractFactory, Overrides, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockPriceAggregator, MockPriceAggregatorInterface } from "../MockPriceAggregator";
declare type MockPriceAggregatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockPriceAggregator__factory extends ContractFactory {
    constructor(...args: MockPriceAggregatorConstructorParams);
    deploy(__decimals: BigNumberish, __answer: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockPriceAggregator>;
    getDeployTransaction(__decimals: BigNumberish, __answer: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockPriceAggregator;
    connect(signer: Signer): MockPriceAggregator__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b506040516101df3803806101df833981810160405260408110156100355760006000fd5b8101908080519060200190929190805190602001909291905050505b81600060006101000a81548160ff021916908360ff1602179055508060016000508190909055505b5050610080565b6101508061008f6000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c8063313ce56714610041578063feaf968c146100625761003b565b60006000fd5b6100496100b4565b604051808260ff16815260200191505060405180910390f35b61006a6100d0565b604051808669ffffffffffffffffffff1681526020018581526020018481526020018381526020018269ffffffffffffffffffff1681526020019550505050505060405180910390f35b6000600060009054906101000a900460ff1690506100cd565b90565b60006000600060006000680300000000000018ed9450845060016000505493508350610708420392508250610384420391508150680300000000000018ed905080505b909192939456fea2646970667358221220ea848e03e16ba8f3fa61e77eaff8d8dab67ceedbfaf3139231f7f164103d6cbb64736f6c63430007060033";
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
