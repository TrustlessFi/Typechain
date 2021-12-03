import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PathTestInterface extends utils.Interface {
    functions: {
        "decodeFirstPool(bytes)": FunctionFragment;
        "getFirstPool(bytes)": FunctionFragment;
        "getGasCostOfDecodeFirstPool(bytes)": FunctionFragment;
        "hasMultiplePools(bytes)": FunctionFragment;
        "skipToken(bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "decodeFirstPool", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getFirstPool", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getGasCostOfDecodeFirstPool", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "hasMultiplePools", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "skipToken", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "decodeFirstPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFirstPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfDecodeFirstPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasMultiplePools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skipToken", data: BytesLike): Result;
    events: {};
}
export interface PathTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PathTestInterface;
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
        decodeFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            string,
            number
        ] & {
            tokenA: string;
            tokenB: string;
            fee: number;
        }>;
        getFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getGasCostOfDecodeFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        hasMultiplePools(path: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        skipToken(path: BytesLike, overrides?: CallOverrides): Promise<[string]>;
    };
    decodeFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<[
        string,
        string,
        number
    ] & {
        tokenA: string;
        tokenB: string;
        fee: number;
    }>;
    getFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<string>;
    getGasCostOfDecodeFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    hasMultiplePools(path: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    skipToken(path: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        decodeFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            string,
            number
        ] & {
            tokenA: string;
            tokenB: string;
            fee: number;
        }>;
        getFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<string>;
        getGasCostOfDecodeFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        hasMultiplePools(path: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        skipToken(path: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        decodeFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfDecodeFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        hasMultiplePools(path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        skipToken(path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        decodeFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfDecodeFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasMultiplePools(path: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        skipToken(path: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
