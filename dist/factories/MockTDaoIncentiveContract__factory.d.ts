import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTDaoIncentiveContract, MockTDaoIncentiveContractInterface } from "../MockTDaoIncentiveContract";
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
    static readonly bytecode = "0x60806040523480156100115760006000fd5b5060405161020b38038061020b833981810160405260208110156100355760006000fd5b81019080805190602001909291905050505b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5061008f565b61016d8061009e6000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c806340c10f191461003657610030565b60006000fd5b6100836004803603604081101561004d5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610085565b005b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639383ac4483836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156101195760006000fd5b505af115801561012e573d600060003e3d6000fd5b505050505b505056fea2646970667358221220f2593e92757348df9c7f0d7e909743e8d01232e83730ffd8fab58c265356f9b464736f6c63430007060033";
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
