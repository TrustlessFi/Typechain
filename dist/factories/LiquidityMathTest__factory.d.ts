import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LiquidityMathTest, LiquidityMathTestInterface } from "../LiquidityMathTest";
declare type LiquidityMathTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiquidityMathTest__factory extends ContractFactory {
    constructor(...args: LiquidityMathTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LiquidityMathTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LiquidityMathTest;
    connect(signer: Signer): LiquidityMathTest__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b6102fb806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c8063402d44fb14610041578063cf41632f146100b55761003b565b60006000fd5b61008d600480360360408110156100585760006000fd5b8101908080356fffffffffffffffffffffffffffffffff1690602001909291908035600f0b9060200190929190505050610117565b60405180826fffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610101600480360360408110156100cc5760006000fd5b8101908080356fffffffffffffffffffffffffffffffff1690602001909291908035600f0b9060200190929190505050610136565b6040518082815260200191505060405180910390f35b6000610129838361016063ffffffff16565b9050610130565b92915050565b600060005a905061014d848461016063ffffffff16565b505a810391505061015a56505b92915050565b6000600082600f0b121561021957826fffffffffffffffffffffffffffffffff168260000384039150816fffffffffffffffffffffffffffffffff16101515610214576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f4c5300000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b6102be565b826fffffffffffffffffffffffffffffffff168284019150816fffffffffffffffffffffffffffffffff16101515156102bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f4c4100000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b5b9291505056fea2646970667358221220006f0b4f8b728542214aab1529487388e5d80c4b553dff1021b8382893bea1bd64736f6c63430007060033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): LiquidityMathTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiquidityMathTest;
}
export {};
