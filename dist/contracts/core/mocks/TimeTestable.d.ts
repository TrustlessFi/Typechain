import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface TimeTestableInterface extends utils.Interface {
    functions: {
        "currentPeriod()": FunctionFragment;
        "currentTime()": FunctionFragment;
        "firstPeriod()": FunctionFragment;
        "futureTime(uint64)": FunctionFragment;
        "getPeriodLength()": FunctionFragment;
        "periodLength()": FunctionFragment;
        "periodToTime(uint64)": FunctionFragment;
        "timeToPeriod(uint64)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "currentPeriod" | "currentTime" | "firstPeriod" | "futureTime" | "getPeriodLength" | "periodLength" | "periodToTime" | "timeToPeriod"): FunctionFragment;
    encodeFunctionData(functionFragment: "currentPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "firstPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "futureTime", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPeriodLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodToTime", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "timeToPeriod", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "currentPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "futureTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPeriodLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodToTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timeToPeriod", data: BytesLike): Result;
    events: {};
}
export interface TimeTestable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TimeTestableInterface;
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
        currentPeriod(overrides?: CallOverrides): Promise<[BigNumber] & {
            period: BigNumber;
        }>;
        currentTime(overrides?: CallOverrides): Promise<[BigNumber] & {
            time: BigNumber;
        }>;
        firstPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        futureTime(addition: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            time: BigNumber;
        }>;
        getPeriodLength(overrides?: CallOverrides): Promise<[BigNumber] & {
            length: BigNumber;
        }>;
        periodLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            time: BigNumber;
        }>;
        timeToPeriod(time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            period: BigNumber;
        }>;
    };
    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    currentTime(overrides?: CallOverrides): Promise<BigNumber>;
    firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    futureTime(addition: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getPeriodLength(overrides?: CallOverrides): Promise<BigNumber>;
    periodLength(overrides?: CallOverrides): Promise<BigNumber>;
    periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    timeToPeriod(time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        currentTime(overrides?: CallOverrides): Promise<BigNumber>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        futureTime(addition: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPeriodLength(overrides?: CallOverrides): Promise<BigNumber>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        timeToPeriod(time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        currentTime(overrides?: CallOverrides): Promise<BigNumber>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        futureTime(addition: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPeriodLength(overrides?: CallOverrides): Promise<BigNumber>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        timeToPeriod(time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        currentPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        futureTime(addition: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPeriodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timeToPeriod(time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
