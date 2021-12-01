import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface EnumerableUint128SetTestableInterface extends utils.Interface {
    functions: {
        "add(uint128)": FunctionFragment;
        "at(uint256)": FunctionFragment;
        "contains(uint128)": FunctionFragment;
        "getAll()": FunctionFragment;
        "length()": FunctionFragment;
        "remove(uint128)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "add", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "at", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "contains", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "length", values?: undefined): string;
    encodeFunctionData(functionFragment: "remove", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "at", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "length", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
    events: {};
}
export interface EnumerableUint128SetTestable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EnumerableUint128SetTestableInterface;
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
        add(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        at(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        contains(value: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        getAll(overrides?: CallOverrides): Promise<[BigNumber[]]>;
        length(overrides?: CallOverrides): Promise<[BigNumber]>;
        remove(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    add(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    contains(value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    getAll(overrides?: CallOverrides): Promise<BigNumber[]>;
    length(overrides?: CallOverrides): Promise<BigNumber>;
    remove(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        add(value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        contains(value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        getAll(overrides?: CallOverrides): Promise<BigNumber[]>;
        length(overrides?: CallOverrides): Promise<BigNumber>;
        remove(value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        add(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        contains(value: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getAll(overrides?: CallOverrides): Promise<BigNumber>;
        length(overrides?: CallOverrides): Promise<BigNumber>;
        remove(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        add(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        at(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contains(value: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAll(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        length(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
