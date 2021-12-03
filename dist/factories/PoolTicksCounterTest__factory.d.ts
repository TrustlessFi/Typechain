import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoolTicksCounterTest, PoolTicksCounterTestInterface } from "../PoolTicksCounterTest";
declare type PoolTicksCounterTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PoolTicksCounterTest__factory extends ContractFactory {
    constructor(...args: PoolTicksCounterTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PoolTicksCounterTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PoolTicksCounterTest;
    connect(signer: Signer): PoolTicksCounterTest__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b6108a0806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c80634c5b941c1461003657610030565b60006000fd5b6100936004803603606081101561004d5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560020b9060200190929190803560020b90602001909291905050506100af565b604051808263ffffffff16815260200191505060405180910390f35b60006100dc83838673ffffffffffffffffffffffffffffffffffffffff166100ea9092919063ffffffff16565b90506100e3565b9392505050565b6000600060006000600060006000600060088b73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101435760006000fd5b505afa158015610158573d600060003e3d6000fd5b505050506040513d602081101561016f5760006000fd5b810190808051906020019092919050505060020b8b60020b81151561019057fe5b0560020b901d905060006101008c73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101e45760006000fd5b505afa1580156101f9573d600060003e3d6000fd5b505050506040513d60208110156102105760006000fd5b810190808051906020019092919050505060020b8c60020b81151561023157fe5b0560020b81151561023e57fe5b079050600060088d73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561028c5760006000fd5b505afa1580156102a1573d600060003e3d6000fd5b505050506040513d60208110156102b85760006000fd5b810190808051906020019092919050505060020b8c60020b8115156102d957fe5b0560020b901d905060006101008e73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561032d5760006000fd5b505afa158015610342573d600060003e3d6000fd5b505050506040513d60208110156103595760006000fd5b810190808051906020019092919050505060020b8d60020b81151561037a57fe5b0560020b81151561038757fe5b07905060008160ff166001901b8f73ffffffffffffffffffffffffffffffffffffffff16635339c296856040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b1580156103e95760006000fd5b505afa1580156103fe573d600060003e3d6000fd5b505050506040513d60208110156104155760006000fd5b8101908080519060200190929190505050161180156104cb575060008e73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104785760006000fd5b505afa15801561048d573d600060003e3d6000fd5b505050506040513d60208110156104a45760006000fd5b810190808051906020019092919050505060020b8d60020b8115156104c557fe5b0760020b145b80156104dc57508b60020b8d60020b135b9450845060008360ff166001901b8f73ffffffffffffffffffffffffffffffffffffffff16635339c296876040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b15801561053f5760006000fd5b505afa158015610554573d600060003e3d6000fd5b505050506040513d602081101561056b5760006000fd5b810190808051906020019092919050505016118015610621575060008e73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156105ce5760006000fd5b505afa1580156105e3573d600060003e3d6000fd5b505050506040513d60208110156105fa5760006000fd5b810190808051906020019092919050505060020b8e60020b81151561061b57fe5b0760020b145b801561063257508b60020b8d60020b125b955085508160010b8460010b128061066157508160010b8460010b14801561066057508060ff168360ff1611155b5b1561067f578399508950829750875081985088508096508650610694565b81995089508097508750839850885082965086505b5050505060008460ff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff901b90505b8560010b8760010b1315156107f6578560010b8760010b1415610712578360ff0360ff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff901c8116905080505b6000818c73ffffffffffffffffffffffffffffffffffffffff16635339c2968a6040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b15801561076a5760006000fd5b505afa15801561077f573d600060003e3d6000fd5b505050506040513d60208110156107965760006000fd5b81019080805190602001909291905050501690506107b98161083163ffffffff16565b61ffff1689019850885087806001019850507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff91508150506106c4565b81156108055760018803975087505b82156108145760018803975087505b8797505050505050505061082a56505050505050505b9392505050565b60006000600090505b60008314151561085b5780806001019150506001830383169250825061083a565b8091505061086556505b91905056fea2646970667358221220e683676e38d22526276f0ad3e464e8a8da19479e42e57323d5be81699f8464e564736f6c63430007060033";
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
    static createInterface(): PoolTicksCounterTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PoolTicksCounterTest;
}
export {};
