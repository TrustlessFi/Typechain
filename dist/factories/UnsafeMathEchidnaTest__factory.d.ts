import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UnsafeMathEchidnaTest, UnsafeMathEchidnaTestInterface } from "../UnsafeMathEchidnaTest";
declare type UnsafeMathEchidnaTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UnsafeMathEchidnaTest__factory extends ContractFactory {
    constructor(...args: UnsafeMathEchidnaTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UnsafeMathEchidnaTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UnsafeMathEchidnaTest;
    connect(signer: Signer): UnsafeMathEchidnaTest__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b610119806100266000396000f3fe608060405234801560105760006000fd5b5060043610602c5760003560e01c80632724da4e14603257602c565b60006000fd5b60666004803603604081101560475760006000fd5b8101908080359060200190929190803590602001909291905050506068565b005b60008111151560775760006000fd5b60006087838360ce63ffffffff16565b905060008284811515609557fe5b04820390506000838581151560a657fe5b06141560bb5760008114151560b757fe5b60c7565b60018114151560c657fe5b5b50505b5050565b60006000828406118284040190505b9291505056fea26469706673582212201cc1e6d79cc9b82500af33176c6abc7ee8e28cbc608714b7100662c1df14ca5c64736f6c63430007060033";
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
