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
    static readonly bytecode = "0x60a06040523480156100115760006000fd5b50604051610168380380610168833981810160405260208110156100355760006000fd5b81019080805190602001909291905050505b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b50610088565b60805160601c60c66100a2600039806068525060c66000f3fe608060405234801560105760006000fd5b5060043610602c5760003560e01c80634aa4a4fc14603257602c565b60006000fd5b60386064565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60007f00000000000000000000000000000000000000000000000000000000000000009050608d565b9056fea2646970667358221220df3063e893646b2cd5c37fef882b1d8b42192a594cb90c112e1c40d33850a3d564736f6c63430007060033";
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
