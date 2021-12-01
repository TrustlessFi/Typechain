import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ExampleSlidingWindowOracleInterface extends utils.Interface {
    functions: {
        "consult(address,uint256,address)": FunctionFragment;
        "factory()": FunctionFragment;
        "granularity()": FunctionFragment;
        "observationIndexOf(uint256)": FunctionFragment;
        "pairObservations(address,uint256)": FunctionFragment;
        "periodSize()": FunctionFragment;
        "update(address,address)": FunctionFragment;
        "windowSize()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "consult", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "granularity", values?: undefined): string;
    encodeFunctionData(functionFragment: "observationIndexOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pairObservations", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "periodSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "update", values: [string, string]): string;
    encodeFunctionData(functionFragment: "windowSize", values?: undefined): string;
    decodeFunctionResult(functionFragment: "consult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "granularity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observationIndexOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairObservations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "windowSize", data: BytesLike): Result;
    events: {};
}
export interface ExampleSlidingWindowOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ExampleSlidingWindowOracleInterface;
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
        consult(tokenIn: string, amountIn: BigNumberish, tokenOut: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountOut: BigNumber;
        }>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        granularity(overrides?: CallOverrides): Promise<[number]>;
        observationIndexOf(timestamp: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            index: number;
        }>;
        pairObservations(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            price0Cumulative: BigNumber;
            price1Cumulative: BigNumber;
        }>;
        periodSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        update(tokenA: string, tokenB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        windowSize(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    consult(tokenIn: string, amountIn: BigNumberish, tokenOut: string, overrides?: CallOverrides): Promise<BigNumber>;
    factory(overrides?: CallOverrides): Promise<string>;
    granularity(overrides?: CallOverrides): Promise<number>;
    observationIndexOf(timestamp: BigNumberish, overrides?: CallOverrides): Promise<number>;
    pairObservations(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        timestamp: BigNumber;
        price0Cumulative: BigNumber;
        price1Cumulative: BigNumber;
    }>;
    periodSize(overrides?: CallOverrides): Promise<BigNumber>;
    update(tokenA: string, tokenB: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    windowSize(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        consult(tokenIn: string, amountIn: BigNumberish, tokenOut: string, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<string>;
        granularity(overrides?: CallOverrides): Promise<number>;
        observationIndexOf(timestamp: BigNumberish, overrides?: CallOverrides): Promise<number>;
        pairObservations(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            price0Cumulative: BigNumber;
            price1Cumulative: BigNumber;
        }>;
        periodSize(overrides?: CallOverrides): Promise<BigNumber>;
        update(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<void>;
        windowSize(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        consult(tokenIn: string, amountIn: BigNumberish, tokenOut: string, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        granularity(overrides?: CallOverrides): Promise<BigNumber>;
        observationIndexOf(timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        pairObservations(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        periodSize(overrides?: CallOverrides): Promise<BigNumber>;
        update(tokenA: string, tokenB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        windowSize(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        consult(tokenIn: string, amountIn: BigNumberish, tokenOut: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        granularity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observationIndexOf(timestamp: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairObservations(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        update(tokenA: string, tokenB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        windowSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
