import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IPricesInterface extends utils.Interface {
    functions: {
        "calculateInstantCollateralPrice(uint32)": FunctionFragment;
        "calculateInstantTwappedPrice(address,uint32)": FunctionFragment;
        "calculateInstantTwappedTick(address,uint32)": FunctionFragment;
        "calculateTwappedPrice(address,bool)": FunctionFragment;
        "hueTcpPrice(uint32)": FunctionFragment;
        "initializePool(address)": FunctionFragment;
        "initializeWethPool(address)": FunctionFragment;
        "isPoolInitialized(address)": FunctionFragment;
        "stop()": FunctionFragment;
        "systemObtainReferencePrice(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "calculateInstantCollateralPrice" | "calculateInstantTwappedPrice" | "calculateInstantTwappedTick" | "calculateTwappedPrice" | "hueTcpPrice" | "initializePool" | "initializeWethPool" | "isPoolInitialized" | "stop" | "systemObtainReferencePrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "calculateInstantCollateralPrice", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "calculateInstantTwappedPrice", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "calculateInstantTwappedTick", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "calculateTwappedPrice", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "hueTcpPrice", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initializePool", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initializeWethPool", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isPoolInitialized", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemObtainReferencePrice", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "calculateInstantCollateralPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateInstantTwappedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateInstantTwappedTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateTwappedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hueTcpPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeWethPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPoolInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemObtainReferencePrice", data: BytesLike): Result;
    events: {
        "PriceUpdated(address,uint256,int24)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PriceUpdated"): EventFragment;
}
export interface PriceUpdatedEventObject {
    pool: string;
    price: BigNumber;
    tick: number;
}
export declare type PriceUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    number
], PriceUpdatedEventObject>;
export declare type PriceUpdatedEventFilter = TypedEventFilter<PriceUpdatedEvent>;
export interface IPrices extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPricesInterface;
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
        calculateInstantCollateralPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            price: BigNumber;
        }>;
        calculateInstantTwappedPrice(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateInstantTwappedTick(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number] & {
            tick: number;
        }>;
        calculateTwappedPrice(pool: PromiseOrValue<string>, normalizeDecimals: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber] & {
            price: BigNumber;
        }>;
        hueTcpPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        initializePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initializeWethPool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isPoolInitialized(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        systemObtainReferencePrice(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    calculateInstantCollateralPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    calculateInstantTwappedPrice(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    calculateInstantTwappedTick(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    calculateTwappedPrice(pool: PromiseOrValue<string>, normalizeDecimals: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    hueTcpPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    initializePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initializeWethPool(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isPoolInitialized(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    stop(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    systemObtainReferencePrice(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        calculateInstantCollateralPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedPrice(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedTick(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        calculateTwappedPrice(pool: PromiseOrValue<string>, normalizeDecimals: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        hueTcpPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initializePool(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        initializeWethPool(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isPoolInitialized(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        stop(overrides?: CallOverrides): Promise<void>;
        systemObtainReferencePrice(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "PriceUpdated(address,uint256,int24)"(pool?: PromiseOrValue<string> | null, price?: null, tick?: null): PriceUpdatedEventFilter;
        PriceUpdated(pool?: PromiseOrValue<string> | null, price?: null, tick?: null): PriceUpdatedEventFilter;
    };
    estimateGas: {
        calculateInstantCollateralPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedPrice(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedTick(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateTwappedPrice(pool: PromiseOrValue<string>, normalizeDecimals: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        hueTcpPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initializePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initializeWethPool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isPoolInitialized(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        systemObtainReferencePrice(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateInstantCollateralPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateInstantTwappedPrice(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateInstantTwappedTick(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateTwappedPrice(pool: PromiseOrValue<string>, normalizeDecimals: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hueTcpPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initializeWethPool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isPoolInitialized(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        systemObtainReferencePrice(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
