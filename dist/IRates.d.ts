import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IRatesInterface extends utils.Interface {
    functions: {
        "addReferencePool(address)": FunctionFragment;
        "executeRatesUpdateContractUpdate(int256)": FunctionFragment;
        "interestRateAbsoluteValue()": FunctionFragment;
        "positiveInterestRate()": FunctionFragment;
        "removeReferencePool(address)": FunctionFragment;
        "setInterestRateStep(uint128)": FunctionFragment;
        "setRatesUpdateContract(address)": FunctionFragment;
        "stop()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addReferencePool", values: [string]): string;
    encodeFunctionData(functionFragment: "executeRatesUpdateContractUpdate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "interestRateAbsoluteValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "positiveInterestRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeReferencePool", values: [string]): string;
    encodeFunctionData(functionFragment: "setInterestRateStep", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRatesUpdateContract", values: [string]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addReferencePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeRatesUpdateContractUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interestRateAbsoluteValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positiveInterestRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeReferencePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInterestRateStep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRatesUpdateContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    events: {
        "AcceptableErrorUpdated(uint128)": EventFragment;
        "ErrorIntervalUpdated(uint128)": EventFragment;
        "InterestRateStepUpdated(uint128)": EventFragment;
        "MaxRateUpdated(int128)": EventFragment;
        "MaxStepsUpdated(uint64)": EventFragment;
        "MinRateUpdated(int128)": EventFragment;
        "MinTimeBetweenUpdatesUpdated(uint64)": EventFragment;
        "RateUpdated(int256,uint256,uint256,uint64)": EventFragment;
        "RatesContractUpdated(address)": EventFragment;
        "ReferencePoolAdded(address)": EventFragment;
        "ReferencePoolRemoved(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AcceptableErrorUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ErrorIntervalUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InterestRateStepUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxRateUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxStepsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinRateUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinTimeBetweenUpdatesUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RateUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RatesContractUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReferencePoolAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReferencePoolRemoved"): EventFragment;
}
export declare type AcceptableErrorUpdatedEvent = TypedEvent<[
    BigNumber
], {
    error: BigNumber;
}>;
export declare type AcceptableErrorUpdatedEventFilter = TypedEventFilter<AcceptableErrorUpdatedEvent>;
export declare type ErrorIntervalUpdatedEvent = TypedEvent<[
    BigNumber
], {
    error: BigNumber;
}>;
export declare type ErrorIntervalUpdatedEventFilter = TypedEventFilter<ErrorIntervalUpdatedEvent>;
export declare type InterestRateStepUpdatedEvent = TypedEvent<[
    BigNumber
], {
    step: BigNumber;
}>;
export declare type InterestRateStepUpdatedEventFilter = TypedEventFilter<InterestRateStepUpdatedEvent>;
export declare type MaxRateUpdatedEvent = TypedEvent<[BigNumber], {
    max: BigNumber;
}>;
export declare type MaxRateUpdatedEventFilter = TypedEventFilter<MaxRateUpdatedEvent>;
export declare type MaxStepsUpdatedEvent = TypedEvent<[
    BigNumber
], {
    steps: BigNumber;
}>;
export declare type MaxStepsUpdatedEventFilter = TypedEventFilter<MaxStepsUpdatedEvent>;
export declare type MinRateUpdatedEvent = TypedEvent<[BigNumber], {
    min: BigNumber;
}>;
export declare type MinRateUpdatedEventFilter = TypedEventFilter<MinRateUpdatedEvent>;
export declare type MinTimeBetweenUpdatesUpdatedEvent = TypedEvent<[
    BigNumber
], {
    time: BigNumber;
}>;
export declare type MinTimeBetweenUpdatesUpdatedEventFilter = TypedEventFilter<MinTimeBetweenUpdatesUpdatedEvent>;
export declare type RateUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    interestRate: BigNumber;
    price: BigNumber;
    rewardCount: BigNumber;
    nextUpdateTime: BigNumber;
}>;
export declare type RateUpdatedEventFilter = TypedEventFilter<RateUpdatedEvent>;
export declare type RatesContractUpdatedEvent = TypedEvent<[
    string
], {
    ratesUpdateContract: string;
}>;
export declare type RatesContractUpdatedEventFilter = TypedEventFilter<RatesContractUpdatedEvent>;
export declare type ReferencePoolAddedEvent = TypedEvent<[string], {
    pool: string;
}>;
export declare type ReferencePoolAddedEventFilter = TypedEventFilter<ReferencePoolAddedEvent>;
export declare type ReferencePoolRemovedEvent = TypedEvent<[string], {
    pool: string;
}>;
export declare type ReferencePoolRemovedEventFilter = TypedEventFilter<ReferencePoolRemovedEvent>;
export interface IRates extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRatesInterface;
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
        addReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeRatesUpdateContractUpdate(newRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        interestRateAbsoluteValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        positiveInterestRate(overrides?: CallOverrides): Promise<[boolean]>;
        removeReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setInterestRateStep(step: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRatesUpdateContract(ratesUpdateContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addReferencePool(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeRatesUpdateContractUpdate(newRate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    interestRateAbsoluteValue(overrides?: CallOverrides): Promise<BigNumber>;
    positiveInterestRate(overrides?: CallOverrides): Promise<boolean>;
    removeReferencePool(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setInterestRateStep(step: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRatesUpdateContract(ratesUpdateContract: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addReferencePool(pool: string, overrides?: CallOverrides): Promise<void>;
        executeRatesUpdateContractUpdate(newRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        interestRateAbsoluteValue(overrides?: CallOverrides): Promise<BigNumber>;
        positiveInterestRate(overrides?: CallOverrides): Promise<boolean>;
        removeReferencePool(pool: string, overrides?: CallOverrides): Promise<void>;
        setInterestRateStep(step: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setRatesUpdateContract(ratesUpdateContract: string, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AcceptableErrorUpdated(uint128)"(error?: null): AcceptableErrorUpdatedEventFilter;
        AcceptableErrorUpdated(error?: null): AcceptableErrorUpdatedEventFilter;
        "ErrorIntervalUpdated(uint128)"(error?: null): ErrorIntervalUpdatedEventFilter;
        ErrorIntervalUpdated(error?: null): ErrorIntervalUpdatedEventFilter;
        "InterestRateStepUpdated(uint128)"(step?: null): InterestRateStepUpdatedEventFilter;
        InterestRateStepUpdated(step?: null): InterestRateStepUpdatedEventFilter;
        "MaxRateUpdated(int128)"(max?: null): MaxRateUpdatedEventFilter;
        MaxRateUpdated(max?: null): MaxRateUpdatedEventFilter;
        "MaxStepsUpdated(uint64)"(steps?: null): MaxStepsUpdatedEventFilter;
        MaxStepsUpdated(steps?: null): MaxStepsUpdatedEventFilter;
        "MinRateUpdated(int128)"(min?: null): MinRateUpdatedEventFilter;
        MinRateUpdated(min?: null): MinRateUpdatedEventFilter;
        "MinTimeBetweenUpdatesUpdated(uint64)"(time?: null): MinTimeBetweenUpdatesUpdatedEventFilter;
        MinTimeBetweenUpdatesUpdated(time?: null): MinTimeBetweenUpdatesUpdatedEventFilter;
        "RateUpdated(int256,uint256,uint256,uint64)"(interestRate?: null, price?: null, rewardCount?: null, nextUpdateTime?: null): RateUpdatedEventFilter;
        RateUpdated(interestRate?: null, price?: null, rewardCount?: null, nextUpdateTime?: null): RateUpdatedEventFilter;
        "RatesContractUpdated(address)"(ratesUpdateContract?: string | null): RatesContractUpdatedEventFilter;
        RatesContractUpdated(ratesUpdateContract?: string | null): RatesContractUpdatedEventFilter;
        "ReferencePoolAdded(address)"(pool?: null): ReferencePoolAddedEventFilter;
        ReferencePoolAdded(pool?: null): ReferencePoolAddedEventFilter;
        "ReferencePoolRemoved(address)"(pool?: null): ReferencePoolRemovedEventFilter;
        ReferencePoolRemoved(pool?: null): ReferencePoolRemovedEventFilter;
    };
    estimateGas: {
        addReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeRatesUpdateContractUpdate(newRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        interestRateAbsoluteValue(overrides?: CallOverrides): Promise<BigNumber>;
        positiveInterestRate(overrides?: CallOverrides): Promise<BigNumber>;
        removeReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setInterestRateStep(step: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRatesUpdateContract(ratesUpdateContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeRatesUpdateContractUpdate(newRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        interestRateAbsoluteValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positiveInterestRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setInterestRateStep(step: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRatesUpdateContract(ratesUpdateContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
