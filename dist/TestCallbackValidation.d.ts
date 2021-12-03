import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TestCallbackValidationInterface extends utils.Interface {
    functions: {
        "verifyCallback(address,address,address,uint24)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "verifyCallback", values: [string, string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "verifyCallback", data: BytesLike): Result;
    events: {};
}
export interface TestCallbackValidation extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestCallbackValidationInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        verifyCallback(factory: string, tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            pool: string;
        }>;
    };
    verifyCallback(factory: string, tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        verifyCallback(factory: string, tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        verifyCallback(factory: string, tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        verifyCallback(factory: string, tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
