import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoolAddressTest, PoolAddressTestInterface } from "../PoolAddressTest";
declare type PoolAddressTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PoolAddressTest__factory extends ContractFactory {
    constructor(...args: PoolAddressTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PoolAddressTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PoolAddressTest;
    connect(signer: Signer): PoolAddressTest__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b61040c806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c80638716c5ff1461004c578063cce34ec61461010a578063dc6fd8ab146101b257610046565b60006000fd5b6100de600480360360808110156100635760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803562ffffff1690602001909291905050506101d4565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61019c600480360360808110156101215760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803562ffffff169060200190929190505050610243565b6040518082815260200191505060405180910390f35b6101ba6102bd565b604051808260001916815260200191505060405180910390f35b60006102348560405180606001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018562ffffff168152602001506102ed63ffffffff16565b905061023b565b949350505050565b600060005a90506102a88660405180606001604052808873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018662ffffff168152602001506102ed63ffffffff16565b505a81039150506102b556505b949350505050565b60007fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460001b90506102ea565b90565b60008273ffffffffffffffffffffffffffffffffffffffff16631698ee828360000151846020015185604001516040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018262ffffff168152602001935050505060206040518083038186803b15801561038e5760006000fd5b505afa1580156103a3573d600060003e3d6000fd5b505050506040513d60208110156103ba5760006000fd5b8101908080519060200190929190505050905080505b9291505056fea2646970667358221220ec1b7c74ba65b6720e51b50a690a5d3161c39cc0843f8db331d9a14d4ce0cd4664736f6c63430007060033";
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
    static createInterface(): PoolAddressTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PoolAddressTest;
}
export {};