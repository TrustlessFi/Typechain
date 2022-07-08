import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockProtocolToken, MockProtocolTokenInterface } from "../../../../contracts/core/mocks/MockProtocolToken";
declare type MockProtocolTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockProtocolToken__factory extends ContractFactory {
    constructor(...args: MockProtocolTokenConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockProtocolToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockProtocolToken;
    connect(signer: Signer): MockProtocolToken__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b60cb806100256000396000f3fe608060405234801560105760006000fd5b5060043610602c5760003560e01c80635c19a95c14603257602c565b60006000fd5b60486004803603810190604491906051565b604a565b005b5b50566094565b60006020828403121560635760006000fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114151560895760006000fd5b809150505b92915050565bfea264697066735822122091cb17679dc74a08b224abcb1d31d245ce25ec308e9c9d201229191d4c38951264736f6c634300080c0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): MockProtocolTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockProtocolToken;
}
export {};
