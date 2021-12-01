import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IPricesInterface extends utils.Interface {
    functions: {
        "stop()": FunctionFragment;
        "systemInitializeReferencePool(address)": FunctionFragment;
        "systemObtainCollateralPrice()": FunctionFragment;
        "systemObtainReferencePrice(address)": FunctionFragment;
        "viewCurrentTwappedReferencePrice(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemInitializeReferencePool", values: [string]): string;
    encodeFunctionData(functionFragment: "systemObtainCollateralPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemObtainReferencePrice", values: [string]): string;
    encodeFunctionData(functionFragment: "viewCurrentTwappedReferencePrice", values: [string]): string;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemInitializeReferencePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemObtainCollateralPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemObtainReferencePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "viewCurrentTwappedReferencePrice", data: BytesLike): Result;
    events: {
        "CollateralMaxTwapTimeUpdated(uint64)": EventFragment;
        "CollateralMinTwapTimeUpdated(uint64)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CollateralMaxTwapTimeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CollateralMinTwapTimeUpdated"): EventFragment;
}
export declare type CollateralMaxTwapTimeUpdatedEvent = TypedEvent<[
    BigNumber
], {
    time: BigNumber;
}>;
export declare type CollateralMaxTwapTimeUpdatedEventFilter = TypedEventFilter<CollateralMaxTwapTimeUpdatedEvent>;
export declare type CollateralMinTwapTimeUpdatedEvent = TypedEvent<[
    BigNumber
], {
    time: BigNumber;
}>;
export declare type CollateralMinTwapTimeUpdatedEventFilter = TypedEventFilter<CollateralMinTwapTimeUpdatedEvent>;
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
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        systemInitializeReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        systemObtainCollateralPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        systemObtainReferencePrice(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        viewCurrentTwappedReferencePrice(pool: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            price: BigNumber;
        }>;
    };
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    systemInitializeReferencePool(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    systemObtainCollateralPrice(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    systemObtainReferencePrice(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    viewCurrentTwappedReferencePrice(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        stop(overrides?: CallOverrides): Promise<void>;
        systemInitializeReferencePool(pool: string, overrides?: CallOverrides): Promise<void>;
        systemObtainCollateralPrice(overrides?: CallOverrides): Promise<BigNumber>;
        systemObtainReferencePrice(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        viewCurrentTwappedReferencePrice(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "CollateralMaxTwapTimeUpdated(uint64)"(time?: BigNumberish | null): CollateralMaxTwapTimeUpdatedEventFilter;
        CollateralMaxTwapTimeUpdated(time?: BigNumberish | null): CollateralMaxTwapTimeUpdatedEventFilter;
        "CollateralMinTwapTimeUpdated(uint64)"(time?: BigNumberish | null): CollateralMinTwapTimeUpdatedEventFilter;
        CollateralMinTwapTimeUpdated(time?: BigNumberish | null): CollateralMinTwapTimeUpdatedEventFilter;
    };
    estimateGas: {
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        systemInitializeReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        systemObtainCollateralPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        systemObtainReferencePrice(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        viewCurrentTwappedReferencePrice(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        systemInitializeReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        systemObtainCollateralPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        systemObtainReferencePrice(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        viewCurrentTwappedReferencePrice(pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
