import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TickEchidnaTest, TickEchidnaTestInterface } from "../TickEchidnaTest";
declare type TickEchidnaTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TickEchidnaTest__factory extends ContractFactory {
    constructor(...args: TickEchidnaTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TickEchidnaTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TickEchidnaTest;
    connect(signer: Signer): TickEchidnaTest__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b6102f2806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c8063858027e51461003657610030565b60006000fd5b6100666004803603602081101561004d5760006000fd5b81019080803560020b9060200190929190505050610068565b005b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860000360020b8160020b131515156100a15760006000fd5b60008160020b1315156100b45760006000fd5b6000818260020b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860020b8115156100e857fe5b050290506000828360020b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860000360020b81151561012357fe5b050290506000610138846101e763ffffffff16565b90508260000360020b8260020b14151561014e57fe5b60008260020b13151561015d57fe5b60008460020b84840360020b81151561017257fe5b0760020b14151561017f57fe5b600060018560020b85850360020b81151561019657fe5b0560020b0190506fffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff1681836fffffffffffffffffffffffffffffffff1602111515156101df57fe5b505050505b50565b60006000828360020b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860020b81151561021d57fe5b050290506000838460020b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860000360020b81151561025857fe5b05029050600060018560020b84840360020b81151561027357fe5b050190508062ffffff166fffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff168115156102a957fe5b0493505050506102b7565050505b91905056fea264697066735822122095a3662a7de1eeb91cddd4d712a4a9fe9d5794417619bddd9a3039dcdb0487e364736f6c63430007060033";
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
    static createInterface(): TickEchidnaTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TickEchidnaTest;
}
export {};
