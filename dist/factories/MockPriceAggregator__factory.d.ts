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
    static readonly bytecode = "0x60806040523480156100115760006000fd5b5060405161027938038061027983398181016040528101906100339190610067565b5b81600060006101000a81548160ff021916908360ff1602179055508060016000508190909055505b50506100a05661009f565b600060006040838503121561007a578182fd5b825160ff81168114151561008c578283fd5b80925050602083015190505b9250929050565b5b6101ca806100af6000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c8063313ce56714610041578063feaf968c1461005f5761003b565b60006000fd5b610049610081565b604051610056919061013b565b60405180910390f35b61006761009d565b6040516100789594939291906100fd565b60405180910390f35b6000600060009054906101000a900460ff16905061009a565b90565b60006000600060006000680300000000000018ed9450845060016000505493508350610708426100cd9190610150565b92508250610384426100df9190610150565b91508150680300000000000018ed905080505b909192939456610193565b600060a08201905069ffffffffffffffffffff80881683528660208401528560408401528460608401528084166080840152505b9695505050505050565b600060208201905060ff831682525b92915050565b600082821015610187577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b82820390505b92915050565bfea264697066735822122013aab3a7b34206812ff394e6e68ac6d70a1a6c385b34229bfc7b0f61f15670c164736f6c63430008040033";
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
