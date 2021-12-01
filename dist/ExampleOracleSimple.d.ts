import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ExampleOracleSimpleInterface extends utils.Interface {
    functions: {
        "PERIOD()": FunctionFragment;
        "blockTimestampLast()": FunctionFragment;
        "consult(address,uint256)": FunctionFragment;
        "price0Average()": FunctionFragment;
        "price0CumulativeLast()": FunctionFragment;
        "price1Average()": FunctionFragment;
        "price1CumulativeLast()": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
        "update()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "blockTimestampLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "consult", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "price0Average", values?: undefined): string;
    encodeFunctionData(functionFragment: "price0CumulativeLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "price1Average", values?: undefined): string;
    encodeFunctionData(functionFragment: "price1CumulativeLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    encodeFunctionData(functionFragment: "update", values?: undefined): string;
    decodeFunctionResult(functionFragment: "PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blockTimestampLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "consult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price0Average", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price0CumulativeLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price1Average", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price1CumulativeLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
    events: {};
}
export interface ExampleOracleSimple extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ExampleOracleSimpleInterface;
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
        PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        blockTimestampLast(overrides?: CallOverrides): Promise<[number]>;
        consult(token: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountOut: BigNumber;
        }>;
        price0Average(overrides?: CallOverrides): Promise<[BigNumber] & {
            _x: BigNumber;
        }>;
        price0CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        price1Average(overrides?: CallOverrides): Promise<[BigNumber] & {
            _x: BigNumber;
        }>;
        price1CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        token0(overrides?: CallOverrides): Promise<[string]>;
        token1(overrides?: CallOverrides): Promise<[string]>;
        update(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    blockTimestampLast(overrides?: CallOverrides): Promise<number>;
    consult(token: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    price0Average(overrides?: CallOverrides): Promise<BigNumber>;
    price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
    price1Average(overrides?: CallOverrides): Promise<BigNumber>;
    price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
    token0(overrides?: CallOverrides): Promise<string>;
    token1(overrides?: CallOverrides): Promise<string>;
    update(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        blockTimestampLast(overrides?: CallOverrides): Promise<number>;
        consult(token: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        price0Average(overrides?: CallOverrides): Promise<BigNumber>;
        price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        price1Average(overrides?: CallOverrides): Promise<BigNumber>;
        price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
        update(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        blockTimestampLast(overrides?: CallOverrides): Promise<BigNumber>;
        consult(token: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        price0Average(overrides?: CallOverrides): Promise<BigNumber>;
        price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        price1Average(overrides?: CallOverrides): Promise<BigNumber>;
        price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<BigNumber>;
        token1(overrides?: CallOverrides): Promise<BigNumber>;
        update(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blockTimestampLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        consult(token: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price0Average(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price0CumulativeLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price1Average(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price1CumulativeLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        update(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
