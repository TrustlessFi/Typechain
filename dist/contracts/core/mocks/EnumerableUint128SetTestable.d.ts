import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface EnumerableUint128SetTestableInterface extends utils.Interface {
    functions: {
        "add(uint128)": FunctionFragment;
        "at(uint256)": FunctionFragment;
        "contains(uint128)": FunctionFragment;
        "getAll()": FunctionFragment;
        "length()": FunctionFragment;
        "remove(uint128)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "add" | "at" | "contains" | "getAll" | "length" | "remove"): FunctionFragment;
    encodeFunctionData(functionFragment: "add", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "at", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "contains", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "length", values?: undefined): string;
    encodeFunctionData(functionFragment: "remove", values: [PromiseOrValue<BigNumberish>]): string;
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
        add(value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        at(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        contains(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        getAll(overrides?: CallOverrides): Promise<[BigNumber[]]>;
        length(overrides?: CallOverrides): Promise<[BigNumber]>;
        remove(value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    add(value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    at(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    contains(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    getAll(overrides?: CallOverrides): Promise<BigNumber[]>;
    length(overrides?: CallOverrides): Promise<BigNumber>;
    remove(value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        add(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        at(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        contains(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        getAll(overrides?: CallOverrides): Promise<BigNumber[]>;
        length(overrides?: CallOverrides): Promise<BigNumber>;
        remove(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        add(value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        at(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        contains(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAll(overrides?: CallOverrides): Promise<BigNumber>;
        length(overrides?: CallOverrides): Promise<BigNumber>;
        remove(value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        add(value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        at(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contains(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAll(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        length(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove(value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
