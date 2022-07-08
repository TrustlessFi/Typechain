import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTDaoIncentiveContract, MockTDaoIncentiveContractInterface } from "../../../../../contracts/core/mocks/MockTFIncentiveContract.sol/MockTDaoIncentiveContract";
declare type MockTDaoIncentiveContractConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockTDaoIncentiveContract__factory extends ContractFactory {
    constructor(...args: MockTDaoIncentiveContractConstructorParams);
    deploy(_tDao: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockTDaoIncentiveContract>;
    getDeployTransaction(_tDao: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockTDaoIncentiveContract;
    connect(signer: Signer): MockTDaoIncentiveContract__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b5060405161026938038061026983398181016040528101906100339190610080565b5b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b506100b9566100b8565b6000602082840312156100935760006000fd5b81516001600160a01b038116811415156100ad5760006000fd5b809150505b92915050565b5b6101a1806100c86000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c806340c10f191461003657610030565b60006000fd5b610050600480360381019061004b91906100ec565b610052565b005b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639383ac4483836040518363ffffffff1660e01b81526004016100af92919061013b565b600060405180830381600087803b1580156100ca5760006000fd5b505af11580156100df573d600060003e3d6000fd5b505050505b50505661016a565b60006000604083850312156101015760006000fd5b823573ffffffffffffffffffffffffffffffffffffffff8116811415156101285760006000fd5b80925050602083013590505b9250929050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682528260208301525b9392505050565bfea2646970667358221220131327256464498bd9249e16415053bbf2939f80d79eaecd55ccc24d1d38654964736f6c634300080c0033";
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
    static createInterface(): MockTDaoIncentiveContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTDaoIncentiveContract;
}
export {};
