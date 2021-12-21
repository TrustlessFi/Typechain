import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockNftPositionManager, MockNftPositionManagerInterface } from "../MockNftPositionManager";
declare type MockNftPositionManagerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockNftPositionManager__factory extends ContractFactory {
    constructor(...args: MockNftPositionManagerConstructorParams);
    deploy(_weth: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockNftPositionManager>;
    getDeployTransaction(_weth: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockNftPositionManager;
    connect(signer: Signer): MockNftPositionManager__factory;
    static readonly bytecode = "0x60a06040523480156100115760006000fd5b506040516101a33803806101a383398181016040528101906100339190610079565b5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b506100ae566100ad565b60006020828403121561008a578081fd5b81516001600160a01b038116811415156100a2578182fd5b809150505b92915050565b5b60805160601c60da6100c960003960006050015260da6000f3fe608060405234801560105760006000fd5b5060043610602c5760003560e01c80634aa4a4fc14603257602c565b60006000fd5b6038604c565b60405160439190607b565b60405180910390f35b60007f000000000000000000000000000000000000000000000000000000000000000090506075565b905660a3565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565bfea26469706673582212208c41867fe67693075338a6cb86c4c4dcf32491cc566b4b94516291f2d766edac64736f6c63430008040033";
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
