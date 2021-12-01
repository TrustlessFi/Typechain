import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FixedPointInterface extends utils.Interface {
    functions: {
        "Q112()": FunctionFragment;
        "RESOLUTION()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "Q112", values?: undefined): string;
    encodeFunctionData(functionFragment: "RESOLUTION", values?: undefined): string;
    decodeFunctionResult(functionFragment: "Q112", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESOLUTION", data: BytesLike): Result;
    events: {};
}
export interface FixedPoint extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FixedPointInterface;
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
        Q112(overrides?: CallOverrides): Promise<[BigNumber]>;
        RESOLUTION(overrides?: CallOverrides): Promise<[number]>;
    };
    Q112(overrides?: CallOverrides): Promise<BigNumber>;
    RESOLUTION(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        Q112(overrides?: CallOverrides): Promise<BigNumber>;
        RESOLUTION(overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        Q112(overrides?: CallOverrides): Promise<BigNumber>;
        RESOLUTION(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        Q112(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RESOLUTION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
