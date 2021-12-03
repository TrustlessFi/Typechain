import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FullMathTest, FullMathTestInterface } from "../FullMathTest";
declare type FullMathTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FullMathTest__factory extends ContractFactory {
    constructor(...args: FullMathTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FullMathTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FullMathTest;
    connect(signer: Signer): FullMathTest__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b6102d4806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c80630af8b27f14610041578063aa9a0912146100985761003b565b60006000fd5b610082600480360360608110156100585760006000fd5b810190808035906020019092919080359060200190929190803590602001909291905050506100ef565b6040518082815260200191505060405180910390f35b6100d9600480360360608110156100af5760006000fd5b81019080803590602001909291908035906020019092919080359060200190929190505050610110565b6040518082815260200191505060405180910390f35b600061010284848461013163ffffffff16565b9050610109565b9392505050565b600061012384848461019d63ffffffff16565b905061012a565b9392505050565b600061014484848461019d63ffffffff16565b9050805060008280151561015457fe5b8486091115610195577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110151561018c5760006000fd5b80806001019150505b5b9392505050565b60006000600060001985870985870292508281108382030391505060008114156101e0576000841115156101d15760006000fd5b83820492508292505050610297565b80841115156101ef5760006000fd5b60008486880990508281118203915080830392506000858660000316905080860495508084049350600181826000030401905080830284179350835060006002876003021890508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508085029550855085955050505050506102975650505050505b939250505056fea2646970667358221220404193b4781b2a19bb75fc34f7b09cc5ed2aff37427c84794bbe6ad14331a59164736f6c63430007060033";
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
    static createInterface(): FullMathTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FullMathTest;
}
export {};
