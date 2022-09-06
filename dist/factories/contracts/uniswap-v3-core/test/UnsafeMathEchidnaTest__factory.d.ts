import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { UnsafeMathEchidnaTest, UnsafeMathEchidnaTestInterface } from "../../../../contracts/uniswap-v3-core/test/UnsafeMathEchidnaTest";
declare type UnsafeMathEchidnaTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UnsafeMathEchidnaTest__factory extends ContractFactory {
    constructor(...args: UnsafeMathEchidnaTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UnsafeMathEchidnaTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UnsafeMathEchidnaTest;
    connect(signer: Signer): UnsafeMathEchidnaTest__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b610233806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c80632724da4e1461003657610030565b60006000fd5b610050600480360381019061004b91906100f1565b610052565b005b6000811115156100625760006000fd5b600061007483836100d863ffffffff16565b905060008284610084919061014a565b8261008f9190610168565b90506000838561009f91906101ad565b14156100bd576000811415156100b8576100b76101cb565b5b6100d1565b6001811415156100d0576100cf6101cb565b5b5b50505b5050565b60006000828406118284040190505b92915050566101fc565b60006000604083850312156101065760006000fd5b82359150602083013590505b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565b600082151561015c5761015b610119565b5b82820490505b92915050565b60008282039050818111156101a6577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5b92915050565b60008215156101bf576101be610119565b5b82820690505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b565bfea2646970667358221220aa86f313fa7a70c66341d068cb47c1f5cd279ef75632b4d66f2e797533ade8a164736f6c63430008100033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): UnsafeMathEchidnaTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UnsafeMathEchidnaTest;
}
export {};
