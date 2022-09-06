import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { MockNftPositionManager, MockNftPositionManagerInterface } from "../../../../contracts/core/mocks/MockNftPositionManager";
declare type MockNftPositionManagerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockNftPositionManager__factory extends ContractFactory {
    constructor(...args: MockNftPositionManagerConstructorParams);
    deploy(_weth: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockNftPositionManager>;
    getDeployTransaction(_weth: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockNftPositionManager;
    connect(signer: Signer): MockNftPositionManager__factory;
    static readonly bytecode = "0x60a06040523480156100115760006000fd5b506040516101a13803806101a183398181016040528101906100339190610076565b5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b506100af566100ae565b6000602082840312156100895760006000fd5b81516001600160a01b038116811415156100a35760006000fd5b809150505b92915050565b5b60805160da6100c760003960006050015260da6000f3fe608060405234801560105760006000fd5b5060043610602c5760003560e01c80634aa4a4fc14603257602c565b60006000fd5b6038604c565b60405160439190607b565b60405180910390f35b60007f000000000000000000000000000000000000000000000000000000000000000090506075565b905660a3565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565bfea264697066735822122075058a8c008357e628f94127d5e68ed446f5908d3861f92329d7dd5f85cc21ad64736f6c63430008100033";
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
    static createInterface(): MockNftPositionManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockNftPositionManager;
}
export {};
