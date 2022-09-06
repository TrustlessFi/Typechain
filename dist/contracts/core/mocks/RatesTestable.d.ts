import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace IRates {
    type ConstructorParamsStruct = {
        Governor: PromiseOrValue<string>;
        ProtocolLock: PromiseOrValue<string>;
        CollateralPool: PromiseOrValue<string>;
    };
    type ConstructorParamsStructOutput = [string, string, string] & {
        Governor: string;
        ProtocolLock: string;
        CollateralPool: string;
    };
}
export declare namespace Rates {
    type InterestRateParametersStruct = {
        acceptableError: PromiseOrValue<BigNumberish>;
        errorInterval: PromiseOrValue<BigNumberish>;
        interestRateStep: PromiseOrValue<BigNumberish>;
        maxSteps: PromiseOrValue<BigNumberish>;
        minRate: PromiseOrValue<BigNumberish>;
        maxRate: PromiseOrValue<BigNumberish>;
    };
    type InterestRateParametersStructOutput = [
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
    type RateDataStruct = {
        rate: PromiseOrValue<BigNumberish>;
        nextUpdateTime: PromiseOrValue<BigNumberish>;
        rewardCount: PromiseOrValue<BigNumberish>;
    };
    type RateDataStructOutput = [BigNumber, BigNumber, BigNumber] & {
        rate: BigNumber;
        nextUpdateTime: BigNumber;
        rewardCount: BigNumber;
    };
}
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
    getFunction(nameOrSignatureOrTopic: "addReferencePool" | "calculatePrice" | "calculateRate" | "calculateRewardCount" | "collateralPool" | "contains" | "currentRateData" | "deployer" | "executeRatesUpdateContractUpdate" | "getReferencePools" | "getRewardCount" | "governor" | "init" | "interestRateAbsoluteValue" | "interestRateParameters" | "median" | "minTimeBetweenUpdates" | "positiveInterestRate" | "predictInterestRate" | "ratesUpdateContract" | "referencePools" | "removePoolFromPools" | "removeReferencePool" | "setAcceptableError" | "setErrorInterval" | "setInterestRateStep" | "setMaxRate" | "setMaxSteps" | "setMinRate" | "setMinTimeBetweenUpdates" | "setRatesUpdateContract" | "stop" | "stopped" | "update" | "validUpdate"): FunctionFragment;
    encodeFunctionData(functionFragment: "addReferencePool", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "calculatePrice", values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "calculateRate", values: [
        PromiseOrValue<BigNumberish>,
        Rates.InterestRateParametersStruct,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "calculateRewardCount", values: [Rates.RateDataStruct, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "collateralPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "contains", values: [PromiseOrValue<string>[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "currentRateData", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeRatesUpdateContractUpdate", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getReferencePools", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRewardCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values?: undefined): string;
    encodeFunctionData(functionFragment: "interestRateAbsoluteValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "interestRateParameters", values?: undefined): string;
    encodeFunctionData(functionFragment: "median", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "minTimeBetweenUpdates", values?: undefined): string;
    encodeFunctionData(functionFragment: "positiveInterestRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "predictInterestRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "ratesUpdateContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "referencePools", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "removePoolFromPools", values: [PromiseOrValue<string>[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeReferencePool", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAcceptableError", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setErrorInterval", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setInterestRateStep", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxRate", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxSteps", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMinRate", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMinTimeBetweenUpdates", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setRatesUpdateContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "update", values?: undefined): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [PromiseOrValue<BytesLike>]): string;
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
export interface AcceptableErrorUpdatedEventObject {
    error: BigNumber;
}
export declare type AcceptableErrorUpdatedEvent = TypedEvent<[
    BigNumber
], AcceptableErrorUpdatedEventObject>;
export declare type AcceptableErrorUpdatedEventFilter = TypedEventFilter<AcceptableErrorUpdatedEvent>;
export interface ErrorIntervalUpdatedEventObject {
    error: BigNumber;
}
export declare type ErrorIntervalUpdatedEvent = TypedEvent<[
    BigNumber
], ErrorIntervalUpdatedEventObject>;
export declare type ErrorIntervalUpdatedEventFilter = TypedEventFilter<ErrorIntervalUpdatedEvent>;
export interface InterestRateStepUpdatedEventObject {
    step: BigNumber;
}
export declare type InterestRateStepUpdatedEvent = TypedEvent<[
    BigNumber
], InterestRateStepUpdatedEventObject>;
export declare type InterestRateStepUpdatedEventFilter = TypedEventFilter<InterestRateStepUpdatedEvent>;
export interface MaxRateUpdatedEventObject {
    max: BigNumber;
}
export declare type MaxRateUpdatedEvent = TypedEvent<[
    BigNumber
], MaxRateUpdatedEventObject>;
export declare type MaxRateUpdatedEventFilter = TypedEventFilter<MaxRateUpdatedEvent>;
export interface MaxStepsUpdatedEventObject {
    steps: BigNumber;
}
export declare type MaxStepsUpdatedEvent = TypedEvent<[
    BigNumber
], MaxStepsUpdatedEventObject>;
export declare type MaxStepsUpdatedEventFilter = TypedEventFilter<MaxStepsUpdatedEvent>;
export interface MinRateUpdatedEventObject {
    min: BigNumber;
}
export declare type MinRateUpdatedEvent = TypedEvent<[
    BigNumber
], MinRateUpdatedEventObject>;
export declare type MinRateUpdatedEventFilter = TypedEventFilter<MinRateUpdatedEvent>;
export interface MinTimeBetweenUpdatesUpdatedEventObject {
    time: BigNumber;
}
export declare type MinTimeBetweenUpdatesUpdatedEvent = TypedEvent<[
    BigNumber
], MinTimeBetweenUpdatesUpdatedEventObject>;
export declare type MinTimeBetweenUpdatesUpdatedEventFilter = TypedEventFilter<MinTimeBetweenUpdatesUpdatedEvent>;
export interface RateUpdatedEventObject {
    interestRate: BigNumber;
    price: BigNumber;
    rewardCount: BigNumber;
    nextUpdateTime: BigNumber;
}
export declare type RateUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], RateUpdatedEventObject>;
export declare type RateUpdatedEventFilter = TypedEventFilter<RateUpdatedEvent>;
export interface RatesContractUpdatedEventObject {
    ratesUpdateContract: string;
}
export declare type RatesContractUpdatedEvent = TypedEvent<[
    string
], RatesContractUpdatedEventObject>;
export declare type RatesContractUpdatedEventFilter = TypedEventFilter<RatesContractUpdatedEvent>;
export interface ReferencePoolAddedEventObject {
    pool: string;
}
export declare type ReferencePoolAddedEvent = TypedEvent<[
    string
], ReferencePoolAddedEventObject>;
export declare type ReferencePoolAddedEventFilter = TypedEventFilter<ReferencePoolAddedEvent>;
export interface ReferencePoolRemovedEventObject {
    pool: string;
}
export declare type ReferencePoolRemovedEvent = TypedEvent<[
    string
], ReferencePoolRemovedEventObject>;
export declare type ReferencePoolRemovedEventFilter = TypedEventFilter<ReferencePoolRemovedEvent>;
export interface StoppedEventObject {
}
export declare type StoppedEvent = TypedEvent<[], StoppedEventObject>;
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
        addReferencePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        calculatePrice(referencePrices: PromiseOrValue<BigNumberish>[], collateralPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateRate(rate: PromiseOrValue<BigNumberish>, rp: Rates.InterestRateParametersStruct, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateRewardCount(rd: Rates.RateDataStruct, currentTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        collateralPool(overrides?: CallOverrides): Promise<[string]>;
        contains(pools: PromiseOrValue<string>[], pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
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
        executeRatesUpdateContractUpdate(newRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getReferencePools(overrides?: CallOverrides): Promise<[string[]]>;
        getRewardCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        init(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
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
        median(values: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber]>;
        minTimeBetweenUpdates(overrides?: CallOverrides): Promise<[BigNumber]>;
        positiveInterestRate(overrides?: CallOverrides): Promise<[boolean]>;
        predictInterestRate(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            price: BigNumber;
            rate: BigNumber;
        }>;
        ratesUpdateContract(overrides?: CallOverrides): Promise<[string]>;
        referencePools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        removePoolFromPools(pools: PromiseOrValue<string>[], pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;
        removeReferencePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAcceptableError(error: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setErrorInterval(interval: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setInterestRateStep(step: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxRate(max: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxSteps(steps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinRate(min: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinTimeBetweenUpdates(time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRatesUpdateContract(_ratesUpdateContract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        update(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    addReferencePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    calculatePrice(referencePrices: PromiseOrValue<BigNumberish>[], collateralPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    calculateRate(rate: PromiseOrValue<BigNumberish>, rp: Rates.InterestRateParametersStruct, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    calculateRewardCount(rd: Rates.RateDataStruct, currentTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    collateralPool(overrides?: CallOverrides): Promise<string>;
    contains(pools: PromiseOrValue<string>[], pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
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
    executeRatesUpdateContractUpdate(newRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getReferencePools(overrides?: CallOverrides): Promise<string[]>;
    getRewardCount(overrides?: CallOverrides): Promise<BigNumber>;
    governor(overrides?: CallOverrides): Promise<string>;
    init(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
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
    median(values: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
    minTimeBetweenUpdates(overrides?: CallOverrides): Promise<BigNumber>;
    positiveInterestRate(overrides?: CallOverrides): Promise<boolean>;
    predictInterestRate(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        price: BigNumber;
        rate: BigNumber;
    }>;
    ratesUpdateContract(overrides?: CallOverrides): Promise<string>;
    referencePools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    removePoolFromPools(pools: PromiseOrValue<string>[], pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    removeReferencePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAcceptableError(error: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setErrorInterval(interval: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setInterestRateStep(step: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxRate(max: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxSteps(steps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinRate(min: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinTimeBetweenUpdates(time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRatesUpdateContract(_ratesUpdateContract: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    update(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        addReferencePool(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        calculatePrice(referencePrices: PromiseOrValue<BigNumberish>[], collateralPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateRate(rate: PromiseOrValue<BigNumberish>, rp: Rates.InterestRateParametersStruct, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateRewardCount(rd: Rates.RateDataStruct, currentTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        collateralPool(overrides?: CallOverrides): Promise<string>;
        contains(pools: PromiseOrValue<string>[], pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
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
        executeRatesUpdateContractUpdate(newRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
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
        median(values: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        minTimeBetweenUpdates(overrides?: CallOverrides): Promise<BigNumber>;
        positiveInterestRate(overrides?: CallOverrides): Promise<boolean>;
        predictInterestRate(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            price: BigNumber;
            rate: BigNumber;
        }>;
        ratesUpdateContract(overrides?: CallOverrides): Promise<string>;
        referencePools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        removePoolFromPools(pools: PromiseOrValue<string>[], pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        removeReferencePool(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setAcceptableError(error: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setErrorInterval(interval: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setInterestRateStep(step: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxRate(max: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxSteps(steps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMinRate(min: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMinTimeBetweenUpdates(time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setRatesUpdateContract(_ratesUpdateContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        update(overrides?: CallOverrides): Promise<void>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
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
        "RatesContractUpdated(address)"(ratesUpdateContract?: PromiseOrValue<string> | null): RatesContractUpdatedEventFilter;
        RatesContractUpdated(ratesUpdateContract?: PromiseOrValue<string> | null): RatesContractUpdatedEventFilter;
        "ReferencePoolAdded(address)"(pool?: null): ReferencePoolAddedEventFilter;
        ReferencePoolAdded(pool?: null): ReferencePoolAddedEventFilter;
        "ReferencePoolRemoved(address)"(pool?: null): ReferencePoolRemovedEventFilter;
        ReferencePoolRemoved(pool?: null): ReferencePoolRemovedEventFilter;
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
    };
    estimateGas: {
        addReferencePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        calculatePrice(referencePrices: PromiseOrValue<BigNumberish>[], collateralPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateRate(rate: PromiseOrValue<BigNumberish>, rp: Rates.InterestRateParametersStruct, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateRewardCount(rd: Rates.RateDataStruct, currentTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        collateralPool(overrides?: CallOverrides): Promise<BigNumber>;
        contains(pools: PromiseOrValue<string>[], pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        currentRateData(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        executeRatesUpdateContractUpdate(newRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getReferencePools(overrides?: CallOverrides): Promise<BigNumber>;
        getRewardCount(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        init(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        interestRateAbsoluteValue(overrides?: CallOverrides): Promise<BigNumber>;
        interestRateParameters(overrides?: CallOverrides): Promise<BigNumber>;
        median(values: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        minTimeBetweenUpdates(overrides?: CallOverrides): Promise<BigNumber>;
        positiveInterestRate(overrides?: CallOverrides): Promise<BigNumber>;
        predictInterestRate(overrides?: CallOverrides): Promise<BigNumber>;
        ratesUpdateContract(overrides?: CallOverrides): Promise<BigNumber>;
        referencePools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        removePoolFromPools(pools: PromiseOrValue<string>[], pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        removeReferencePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAcceptableError(error: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setErrorInterval(interval: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setInterestRateStep(step: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxRate(max: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxSteps(steps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinRate(min: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinTimeBetweenUpdates(time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRatesUpdateContract(_ratesUpdateContract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        update(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addReferencePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        calculatePrice(referencePrices: PromiseOrValue<BigNumberish>[], collateralPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateRate(rate: PromiseOrValue<BigNumberish>, rp: Rates.InterestRateParametersStruct, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateRewardCount(rd: Rates.RateDataStruct, currentTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contains(pools: PromiseOrValue<string>[], pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentRateData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeRatesUpdateContractUpdate(newRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getReferencePools(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        interestRateAbsoluteValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        interestRateParameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        median(values: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minTimeBetweenUpdates(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positiveInterestRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        predictInterestRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ratesUpdateContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referencePools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removePoolFromPools(pools: PromiseOrValue<string>[], pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeReferencePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAcceptableError(error: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setErrorInterval(interval: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setInterestRateStep(step: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxRate(max: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxSteps(steps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinRate(min: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinTimeBetweenUpdates(time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRatesUpdateContract(_ratesUpdateContract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        update(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
