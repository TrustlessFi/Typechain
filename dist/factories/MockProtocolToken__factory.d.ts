import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockProtocolToken, MockProtocolTokenInterface } from "../MockProtocolToken";
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
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b60ae806100256000396000f3fe608060405234801560105760006000fd5b5060043610602c5760003560e01c80635c19a95c14603257602c565b60006000fd5b60726004803603602081101560475760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506074565b005b5b5056fea26469706673582212209dd30c473666f328aba84ab022606d43b92e02a0c2edf17a6708eaf336b9ddd064736f6c63430007060033";
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
