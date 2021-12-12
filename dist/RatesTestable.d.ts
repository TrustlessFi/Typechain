import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    Governor: string;
    ProtocolLock: string;
    CollateralPool: string;
};
export declare type ConstructorParamsStructOutput = [string, string, string] & {
    Governor: string;
    ProtocolLock: string;
    CollateralPool: string;
};
export declare type InterestRateParametersStruct = {
    acceptableError: BigNumberish;
    errorInterval: BigNumberish;
    interestRateStep: BigNumberish;
    maxSteps: BigNumberish;
    minRate: BigNumberish;
    maxRate: BigNumberish;
};
export declare type InterestRateParametersStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    acceptableError: BigNumber;
    errorInterval: BigNumber;
    interestRateStep: BigNumber;
    maxSteps: BigNumber;
    minRate: BigNumber;
    maxRate: BigNumber;
};
export declare type RateDataStruct = {
    rate: BigNumberish;
    nextUpdateTime: BigNumberish;
    rewardCount: BigNumberish;
};
export declare type RateDataStructOutput = [BigNumber, BigNumber, BigNumber] & {
    rate: BigNumber;
    nextUpdateTime: BigNumber;
    rewardCount: BigNumber;
};
export interface RatesTestableInterface extends utils.Interface {
    functions: {
        "addReferencePool(address)": FunctionFragment;
        "calculatePrice(uint256[],uint256)": FunctionFragment;
        "calculateRate(int256,(uint128,uint128,uint128,uint64,int128,int128),uint256)": FunctionFragment;
        "calculateRewardCount((int256,uint64,uint128),uint64)": FunctionFragment;
        "collateralPool()": FunctionFragment;
        "contains(address[],address)": FunctionFragment;
        "currentRateData()": FunctionFragment;
        "deployer()": FunctionFragment;
        "executeRatesUpdateContractUpdate(int256)": FunctionFragment;
        "getReferencePools()": FunctionFragment;
        "getRewardCount()": FunctionFragment;
        "governor()": FunctionFragment;
        "init()": FunctionFragment;
        "interestRateAbsoluteValue()": FunctionFragment;
        "interestRateParameters()": FunctionFragment;
        "median(uint256[])": FunctionFragment;
        "minTimeBetweenUpdates()": FunctionFragment;
        "positiveInterestRate()": FunctionFragment;
        "predictInterestRate()": FunctionFragment;
        "ratesUpdateContract()": FunctionFragment;
        "referencePools(uint256)": FunctionFragment;
        "removePoolFromPools(address[],address)": FunctionFragment;
        "removeReferencePool(address)": FunctionFragment;
        "setAcceptableError(uint128)": FunctionFragment;
        "setErrorInterval(uint128)": FunctionFragment;
        "setInterestRateStep(uint128)": FunctionFragment;
        "setMaxRate(int128)": FunctionFragment;
        "setMaxSteps(uint64)": FunctionFragment;
        "setMinRate(int128)": FunctionFragment;
        "setMinTimeBetweenUpdates(uint64)": FunctionFragment;
        "setRatesUpdateContract(address)": FunctionFragment;
        "stop()": FunctionFragment;
        "stopped()": FunctionFragment;
        "update()": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addReferencePool", values: [string]): string;
    encodeFunctionData(functionFragment: "calculatePrice", values: [BigNumberish[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateRate", values: [BigNumberish, InterestRateParametersStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateRewardCount", values: [RateDataStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "collateralPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "contains", values: [string[], string]): string;
    encodeFunctionData(functionFragment: "currentRateData", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeRatesUpdateContractUpdate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReferencePools", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRewardCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values?: undefined): string;
    encodeFunctionData(functionFragment: "interestRateAbsoluteValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "interestRateParameters", values?: undefined): string;
    encodeFunctionData(functionFragment: "median", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "minTimeBetweenUpdates", values?: undefined): string;
    encodeFunctionData(functionFragment: "positiveInterestRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "predictInterestRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "ratesUpdateContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "referencePools", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "removePoolFromPools", values: [string[], string]): string;
    encodeFunctionData(functionFragment: "removeReferencePool", values: [string]): string;
    encodeFunctionData(functionFragment: "setAcceptableError", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setErrorInterval", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setInterestRateStep", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxRate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxSteps", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMinRate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMinTimeBetweenUpdates", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRatesUpdateContract", values: [string]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "update", values?: undefined): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "addReferencePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculatePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateRewardCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRateData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeRatesUpdateContractUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReferencePools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interestRateAbsoluteValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interestRateParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "median", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minTimeBetweenUpdates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positiveInterestRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "predictInterestRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ratesUpdateContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referencePools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removePoolFromPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeReferencePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAcceptableError", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setErrorInterval", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInterestRateStep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxSteps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinTimeBetweenUpdates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRatesUpdateContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
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
        "Stopped()": EventFragment;
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
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
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
export declare type StoppedEvent = TypedEvent<[], {}>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
export interface RatesTestable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RatesTestableInterface;
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
        calculatePrice(referencePrices: BigNumberish[], collateralPrice: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateRate(rate: BigNumberish, rp: InterestRateParametersStruct, price: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateRewardCount(rd: RateDataStruct, currentTime: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        collateralPool(overrides?: CallOverrides): Promise<[string]>;
        contains(pools: string[], pool: string, overrides?: CallOverrides): Promise<[boolean]>;
        currentRateData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            rate: BigNumber;
            nextUpdateTime: BigNumber;
            rewardCount: BigNumber;
        }>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        executeRatesUpdateContractUpdate(newRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getReferencePools(overrides?: CallOverrides): Promise<[string[]]>;
        getRewardCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        interestRateAbsoluteValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        interestRateParameters(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            acceptableError: BigNumber;
            errorInterval: BigNumber;
            interestRateStep: BigNumber;
            maxSteps: BigNumber;
            minRate: BigNumber;
            maxRate: BigNumber;
        }>;
        median(values: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber]>;
        minTimeBetweenUpdates(overrides?: CallOverrides): Promise<[BigNumber]>;
        positiveInterestRate(overrides?: CallOverrides): Promise<[boolean]>;
        predictInterestRate(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            price: BigNumber;
            rate: BigNumber;
        }>;
        ratesUpdateContract(overrides?: CallOverrides): Promise<[string]>;
        referencePools(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        removePoolFromPools(pools: string[], pool: string, overrides?: CallOverrides): Promise<[string[]]>;
        removeReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAcceptableError(error: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setErrorInterval(interval: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setInterestRateStep(step: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxRate(max: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxSteps(steps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinRate(min: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinTimeBetweenUpdates(time: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRatesUpdateContract(_ratesUpdateContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        update(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    addReferencePool(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    calculatePrice(referencePrices: BigNumberish[], collateralPrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    calculateRate(rate: BigNumberish, rp: InterestRateParametersStruct, price: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    calculateRewardCount(rd: RateDataStruct, currentTime: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    collateralPool(overrides?: CallOverrides): Promise<string>;
    contains(pools: string[], pool: string, overrides?: CallOverrides): Promise<boolean>;
    currentRateData(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        rate: BigNumber;
        nextUpdateTime: BigNumber;
        rewardCount: BigNumber;
    }>;
    deployer(overrides?: CallOverrides): Promise<string>;
    executeRatesUpdateContractUpdate(newRate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getReferencePools(overrides?: CallOverrides): Promise<string[]>;
    getRewardCount(overrides?: CallOverrides): Promise<BigNumber>;
    governor(overrides?: CallOverrides): Promise<string>;
    init(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    interestRateAbsoluteValue(overrides?: CallOverrides): Promise<BigNumber>;
    interestRateParameters(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        acceptableError: BigNumber;
        errorInterval: BigNumber;
        interestRateStep: BigNumber;
        maxSteps: BigNumber;
        minRate: BigNumber;
        maxRate: BigNumber;
    }>;
    median(values: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
    minTimeBetweenUpdates(overrides?: CallOverrides): Promise<BigNumber>;
    positiveInterestRate(overrides?: CallOverrides): Promise<boolean>;
    predictInterestRate(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        price: BigNumber;
        rate: BigNumber;
    }>;
    ratesUpdateContract(overrides?: CallOverrides): Promise<string>;
    referencePools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    removePoolFromPools(pools: string[], pool: string, overrides?: CallOverrides): Promise<string[]>;
    removeReferencePool(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAcceptableError(error: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setErrorInterval(interval: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setInterestRateStep(step: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxRate(max: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxSteps(steps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinRate(min: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinTimeBetweenUpdates(time: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRatesUpdateContract(_ratesUpdateContract: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    update(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        addReferencePool(pool: string, overrides?: CallOverrides): Promise<void>;
        calculatePrice(referencePrices: BigNumberish[], collateralPrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateRate(rate: BigNumberish, rp: InterestRateParametersStruct, price: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateRewardCount(rd: RateDataStruct, currentTime: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        collateralPool(overrides?: CallOverrides): Promise<string>;
        contains(pools: string[], pool: string, overrides?: CallOverrides): Promise<boolean>;
        currentRateData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            rate: BigNumber;
            nextUpdateTime: BigNumber;
            rewardCount: BigNumber;
        }>;
        deployer(overrides?: CallOverrides): Promise<string>;
        executeRatesUpdateContractUpdate(newRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getReferencePools(overrides?: CallOverrides): Promise<string[]>;
        getRewardCount(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<string>;
        init(overrides?: CallOverrides): Promise<void>;
        interestRateAbsoluteValue(overrides?: CallOverrides): Promise<BigNumber>;
        interestRateParameters(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            acceptableError: BigNumber;
            errorInterval: BigNumber;
            interestRateStep: BigNumber;
            maxSteps: BigNumber;
            minRate: BigNumber;
            maxRate: BigNumber;
        }>;
        median(values: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        minTimeBetweenUpdates(overrides?: CallOverrides): Promise<BigNumber>;
        positiveInterestRate(overrides?: CallOverrides): Promise<boolean>;
        predictInterestRate(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            price: BigNumber;
            rate: BigNumber;
        }>;
        ratesUpdateContract(overrides?: CallOverrides): Promise<string>;
        referencePools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        removePoolFromPools(pools: string[], pool: string, overrides?: CallOverrides): Promise<string[]>;
        removeReferencePool(pool: string, overrides?: CallOverrides): Promise<void>;
        setAcceptableError(error: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setErrorInterval(interval: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setInterestRateStep(step: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxRate(max: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxSteps(steps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMinRate(min: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMinTimeBetweenUpdates(time: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setRatesUpdateContract(_ratesUpdateContract: string, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        update(overrides?: CallOverrides): Promise<void>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
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
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
    };
    estimateGas: {
        addReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        calculatePrice(referencePrices: BigNumberish[], collateralPrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateRate(rate: BigNumberish, rp: InterestRateParametersStruct, price: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateRewardCount(rd: RateDataStruct, currentTime: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        collateralPool(overrides?: CallOverrides): Promise<BigNumber>;
        contains(pools: string[], pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        currentRateData(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        executeRatesUpdateContractUpdate(newRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getReferencePools(overrides?: CallOverrides): Promise<BigNumber>;
        getRewardCount(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        interestRateAbsoluteValue(overrides?: CallOverrides): Promise<BigNumber>;
        interestRateParameters(overrides?: CallOverrides): Promise<BigNumber>;
        median(values: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        minTimeBetweenUpdates(overrides?: CallOverrides): Promise<BigNumber>;
        positiveInterestRate(overrides?: CallOverrides): Promise<BigNumber>;
        predictInterestRate(overrides?: CallOverrides): Promise<BigNumber>;
        ratesUpdateContract(overrides?: CallOverrides): Promise<BigNumber>;
        referencePools(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removePoolFromPools(pools: string[], pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAcceptableError(error: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setErrorInterval(interval: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setInterestRateStep(step: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxRate(max: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxSteps(steps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinRate(min: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinTimeBetweenUpdates(time: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRatesUpdateContract(_ratesUpdateContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        update(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        calculatePrice(referencePrices: BigNumberish[], collateralPrice: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateRate(rate: BigNumberish, rp: InterestRateParametersStruct, price: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateRewardCount(rd: RateDataStruct, currentTime: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contains(pools: string[], pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentRateData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeRatesUpdateContractUpdate(newRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getReferencePools(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        interestRateAbsoluteValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        interestRateParameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        median(values: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minTimeBetweenUpdates(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positiveInterestRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        predictInterestRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ratesUpdateContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referencePools(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removePoolFromPools(pools: string[], pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAcceptableError(error: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setErrorInterval(interval: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setInterestRateStep(step: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxRate(max: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxSteps(steps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinRate(min: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinTimeBetweenUpdates(time: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRatesUpdateContract(_ratesUpdateContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        update(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
