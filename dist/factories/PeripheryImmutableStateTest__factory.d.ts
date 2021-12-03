import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PeripheryImmutableStateTest, PeripheryImmutableStateTestInterface } from "../PeripheryImmutableStateTest";
declare type PeripheryImmutableStateTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PeripheryImmutableStateTest__factory extends ContractFactory {
    constructor(...args: PeripheryImmutableStateTestConstructorParams);
    deploy(_factory: string, _WETH9: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PeripheryImmutableStateTest>;
    getDeployTransaction(_factory: string, _WETH9: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PeripheryImmutableStateTest;
    connect(signer: Signer): PeripheryImmutableStateTest__factory;
    static readonly bytecode = "0x60c06040523480156100115760006000fd5b50604051610218380380610218833981810160405260408110156100355760006000fd5b8101908080519060200190929190805190602001909291905050505b81815b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b50505b50506100d3565b60805160601c60a05160601c61011e6100fa6000398060a252508060c6525061011e6000f3fe608060405234801560105760006000fd5b506004361060365760003560e01c80634aa4a4fc14603c578063c45a015514606e576036565b60006000fd5b604260a0565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b607460c4565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000008156fea2646970667358221220bb961d86019c2ba177db94f09d4a62f493985b0d12db4dbe938a1f185e927cac64736f6c63430007060033";
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
    static createInterface(): PeripheryImmutableStateTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PeripheryImmutableStateTest;
}
export {};
