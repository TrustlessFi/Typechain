import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TickMathTestInterface extends utils.Interface {
    functions: {
        "MAX_SQRT_RATIO()": FunctionFragment;
        "MIN_SQRT_RATIO()": FunctionFragment;
        "getGasCostOfGetSqrtRatioAtTick(int24)": FunctionFragment;
        "getGasCostOfGetTickAtSqrtRatio(uint160)": FunctionFragment;
        "getSqrtRatioAtTick(int24)": FunctionFragment;
        "getTickAtSqrtRatio(uint160)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "MAX_SQRT_RATIO", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_SQRT_RATIO", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGasCostOfGetSqrtRatioAtTick", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGasCostOfGetTickAtSqrtRatio", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSqrtRatioAtTick", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTickAtSqrtRatio", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "MAX_SQRT_RATIO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_SQRT_RATIO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfGetSqrtRatioAtTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfGetTickAtSqrtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSqrtRatioAtTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTickAtSqrtRatio", data: BytesLike): Result;
    events: {};
}
export interface TickMathTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TickMathTestInterface;
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
        MAX_SQRT_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_SQRT_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;
        getGasCostOfGetSqrtRatioAtTick(tick: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getGasCostOfGetTickAtSqrtRatio(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSqrtRatioAtTick(tick: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTickAtSqrtRatio(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
    };
    MAX_SQRT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_SQRT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
    getGasCostOfGetSqrtRatioAtTick(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getGasCostOfGetTickAtSqrtRatio(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getSqrtRatioAtTick(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getTickAtSqrtRatio(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<number>;
    callStatic: {
        MAX_SQRT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_SQRT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetSqrtRatioAtTick(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetTickAtSqrtRatio(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSqrtRatioAtTick(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTickAtSqrtRatio(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        MAX_SQRT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_SQRT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetSqrtRatioAtTick(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetTickAtSqrtRatio(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSqrtRatioAtTick(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTickAtSqrtRatio(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_SQRT_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_SQRT_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfGetSqrtRatioAtTick(tick: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfGetTickAtSqrtRatio(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSqrtRatioAtTick(tick: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTickAtSqrtRatio(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
