import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IPricesInterface extends utils.Interface {
    functions: {
        "calculateInstantCollateralPrice(uint32)": FunctionFragment;
        "calculateInstantTwappedPrice(address,uint32)": FunctionFragment;
        "calculateInstantTwappedTick(address,uint32)": FunctionFragment;
        "calculateTwappedPrice(address,bool)": FunctionFragment;
        "getRealHueCountForSinglePoolPosition(address,int24,int24,int24,uint128,uint32)": FunctionFragment;
        "hueTcpPrice(uint32)": FunctionFragment;
        "initializePool(address)": FunctionFragment;
        "initializeWethPool(address)": FunctionFragment;
        "isPoolInitialized(address)": FunctionFragment;
        "stop()": FunctionFragment;
        "systemObtainReferencePrice(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "calculateInstantCollateralPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateInstantTwappedPrice", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateInstantTwappedTick", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateTwappedPrice", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "getRealHueCountForSinglePoolPosition", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "hueTcpPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initializePool", values: [string]): string;
    encodeFunctionData(functionFragment: "initializeWethPool", values: [string]): string;
    encodeFunctionData(functionFragment: "isPoolInitialized", values: [string]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemObtainReferencePrice", values: [string]): string;
    decodeFunctionResult(functionFragment: "calculateInstantCollateralPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateInstantTwappedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateInstantTwappedTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateTwappedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRealHueCountForSinglePoolPosition", data: BytesLike): Result;
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
export declare type PriceUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    number
], {
    pool: string;
    price: BigNumber;
    tick: number;
}>;
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
        calculateInstantCollateralPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            price: BigNumber;
        }>;
        calculateInstantTwappedPrice(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateInstantTwappedTick(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            tick: number;
        }>;
        calculateTwappedPrice(pool: string, normalizeDecimals: boolean, overrides?: CallOverrides): Promise<[BigNumber] & {
            price: BigNumber;
        }>;
        getRealHueCountForSinglePoolPosition(pool: string, tick: BigNumberish, tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            hueCount: BigNumber;
        }>;
        hueTcpPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        initializePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializeWethPool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isPoolInitialized(pool: string, overrides?: CallOverrides): Promise<[boolean]>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        systemObtainReferencePrice(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    calculateInstantCollateralPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    calculateInstantTwappedPrice(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    calculateInstantTwappedTick(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<number>;
    calculateTwappedPrice(pool: string, normalizeDecimals: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    getRealHueCountForSinglePoolPosition(pool: string, tick: BigNumberish, tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    hueTcpPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    initializePool(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializeWethPool(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isPoolInitialized(pool: string, overrides?: CallOverrides): Promise<boolean>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    systemObtainReferencePrice(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        calculateInstantCollateralPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedPrice(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedTick(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<number>;
        calculateTwappedPrice(pool: string, normalizeDecimals: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getRealHueCountForSinglePoolPosition(pool: string, tick: BigNumberish, tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        hueTcpPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initializePool(pool: string, overrides?: CallOverrides): Promise<void>;
        initializeWethPool(pool: string, overrides?: CallOverrides): Promise<void>;
        isPoolInitialized(pool: string, overrides?: CallOverrides): Promise<boolean>;
        stop(overrides?: CallOverrides): Promise<void>;
        systemObtainReferencePrice(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "PriceUpdated(address,uint256,int24)"(pool?: string | null, price?: null, tick?: null): PriceUpdatedEventFilter;
        PriceUpdated(pool?: string | null, price?: null, tick?: null): PriceUpdatedEventFilter;
    };
    estimateGas: {
        calculateInstantCollateralPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedPrice(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedTick(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateTwappedPrice(pool: string, normalizeDecimals: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getRealHueCountForSinglePoolPosition(pool: string, tick: BigNumberish, tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        hueTcpPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initializePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializeWethPool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isPoolInitialized(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        systemObtainReferencePrice(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateInstantCollateralPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateInstantTwappedPrice(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateInstantTwappedTick(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateTwappedPrice(pool: string, normalizeDecimals: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRealHueCountForSinglePoolPosition(pool: string, tick: BigNumberish, tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hueTcpPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializeWethPool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isPoolInitialized(pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        systemObtainReferencePrice(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
