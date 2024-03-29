import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { NoDelegateCallTest, NoDelegateCallTestInterface } from "../../../../contracts/uniswap-v3-core/test/NoDelegateCallTest";
declare type NoDelegateCallTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NoDelegateCallTest__factory extends ContractFactory {
    constructor(...args: NoDelegateCallTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NoDelegateCallTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NoDelegateCallTest;
    connect(signer: Signer): NoDelegateCallTest__factory;
    static readonly bytecode = "0x60a06040523480156100115760006000fd5b505b3073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b610050565b6080516102e861006b60003960006101a401526102e86000f3fe60806040523480156100115760006000fd5b506004361061006c5760003560e01c8063423ecb0511610051578063423ecb05146100ae57806364270164146100cc578063f45f416e146100d65761006c565b80633045a6e0146100725780633c7c8dd0146100905761006c565b60006000fd5b61007a6100f4565b6040516100879190610216565b60405180910390f35b610098610122565b6040516100a59190610216565b60405180910390f35b6100b6610150565b6040516100c39190610216565b60405180910390f35b6100d4610178565b005b6100de610189565b6040516100eb9190610216565b60405180910390f35b600060005a905061010961018963ffffffff16565b505a816101169190610228565b91505061011f56505b90565b600060005a905061013761015063ffffffff16565b505a816101449190610228565b91505061014d56505b90565b60006101606101a263ffffffff16565b60054261016d919061026d565b9050610174565b5b90565b61018661020063ffffffff16565b5b565b6000600542610198919061026d565b905061019f565b90565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161415156101fd5760006000fd5b5b565b61020e6101a263ffffffff16565b5b5b566102b1565b60006020820190508282525b92915050565b6000828203905081811115610266577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5b92915050565b60008215156102a5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b82820490505b92915050565bfea26469706673582212200919bfa014c421e3c411d551ade84a3fd22ed83be3d41fca894bf9ee7db8213064736f6c63430008100033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): NoDelegateCallTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NoDelegateCallTest;
}
export {};
