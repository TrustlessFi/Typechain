import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    Governor: string;
    ProtocolLock: string;
    HuePositionNFT: string;
    Hue: string;
    LendHue: string;
    Accounting: string;
};
export declare type ConstructorParamsStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string
] & {
    Governor: string;
    ProtocolLock: string;
    HuePositionNFT: string;
    Hue: string;
    LendHue: string;
    Accounting: string;
};
export declare type DebtPositionStruct = {
    startCumulativeDebt: BigNumberish;
    collateral: BigNumberish;
    debt: BigNumberish;
    startDebtExchangeRate: BigNumberish;
    startTCPRewards: BigNumberish;
    lastTimeUpdated: BigNumberish;
    lastBorrowTime: BigNumberish;
    tick: BigNumberish;
    tickSet: boolean;
    tickIndex: BigNumberish;
    ui: BigNumberish;
    kickbackDestination: string;
    kickbackPortion: BigNumberish;
};
export declare type DebtPositionStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    boolean,
    BigNumber,
    number,
    string,
    BigNumber
] & {
    startCumulativeDebt: BigNumber;
    collateral: BigNumber;
    debt: BigNumber;
    startDebtExchangeRate: BigNumber;
    startTCPRewards: BigNumber;
    lastTimeUpdated: BigNumber;
    lastBorrowTime: BigNumber;
    tick: number;
    tickSet: boolean;
    tickIndex: BigNumber;
    ui: number;
    kickbackDestination: string;
    kickbackPortion: BigNumber;
};
export interface MarketInterface extends utils.Interface {
    functions: {
        "accounting()": FunctionFragment;
        "accrueInterest()": FunctionFragment;
        "adjustPosition(uint64,int256,uint256,uint32)": FunctionFragment;
        "claimAllRewards(uint64[],uint32)": FunctionFragment;
        "claimRewards(uint64,uint32)": FunctionFragment;
        "collateralizationRequirement()": FunctionFragment;
        "createPosition(uint256,uint32)": FunctionFragment;
        "currentPeriod()": FunctionFragment;
        "deployer()": FunctionFragment;
        "firstPeriod()": FunctionFragment;
        "governor()": FunctionFragment;
        "hue()": FunctionFragment;
        "huePositionNFT()": FunctionFragment;
        "init()": FunctionFragment;
        "interestPortionToLenders()": FunctionFragment;
        "lastPeriodGlobalInterestAccrued()": FunctionFragment;
        "lend(uint256)": FunctionFragment;
        "lendHue()": FunctionFragment;
        "minPositionSize()": FunctionFragment;
        "periodLength()": FunctionFragment;
        "removeKickback(uint64)": FunctionFragment;
        "setCollateralizationRequirement(uint256)": FunctionFragment;
        "setInterestPortionToLenders(uint256)": FunctionFragment;
        "setMinPositionSize(uint256)": FunctionFragment;
        "stop()": FunctionFragment;
        "stopped()": FunctionFragment;
        "systemGetUpdatedPosition(uint64)": FunctionFragment;
        "unlend(uint256)": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
        "valueOfLendTokensInHue(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accounting", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrueInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "adjustPosition", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimAllRewards", values: [BigNumberish[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "collateralizationRequirement", values?: undefined): string;
    encodeFunctionData(functionFragment: "createPosition", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "currentPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "firstPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "hue", values?: undefined): string;
    encodeFunctionData(functionFragment: "huePositionNFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values?: undefined): string;
    encodeFunctionData(functionFragment: "interestPortionToLenders", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastPeriodGlobalInterestAccrued", values?: undefined): string;
    encodeFunctionData(functionFragment: "lend", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "lendHue", values?: undefined): string;
    encodeFunctionData(functionFragment: "minPositionSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeKickback", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setCollateralizationRequirement", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setInterestPortionToLenders", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMinPositionSize", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemGetUpdatedPosition", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unlend", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "valueOfLendTokensInHue", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "accounting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrueInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adjustPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAllRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralizationRequirement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "huePositionNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interestPortionToLenders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPeriodGlobalInterestAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lendHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minPositionSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeKickback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCollateralizationRequirement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInterestPortionToLenders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinPositionSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemGetUpdatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "valueOfLendTokensInHue", data: BytesLike): Result;
    events: {
        "CollateralizationRequirementUpdated(uint256)": EventFragment;
        "InterestAccrued(uint64,uint64,uint256,uint256,uint256,uint256)": EventFragment;
        "InterestPortionToLendersUpdated(uint256)": EventFragment;
        "Lend(address,uint256,uint256)": EventFragment;
        "MinPositionSizeUpdated(uint256)": EventFragment;
        "PositionAdjusted(uint64,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "PositionCreated(address,uint64,uint256)": EventFragment;
        "PositionUpdated(uint256,uint64,uint256,uint256)": EventFragment;
        "RewardsDistributed(address,bool,uint256)": EventFragment;
        "Stopped()": EventFragment;
        "TwapDurationUpdated(uint32)": EventFragment;
        "Unlend(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CollateralizationRequirementUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InterestAccrued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InterestPortionToLendersUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Lend"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinPositionSizeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionAdjusted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsDistributed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TwapDurationUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unlend"): EventFragment;
}
export declare type CollateralizationRequirementUpdatedEvent = TypedEvent<[
    BigNumber
], {
    requirement: BigNumber;
}>;
export declare type CollateralizationRequirementUpdatedEventFilter = TypedEventFilter<CollateralizationRequirementUpdatedEvent>;
export declare type InterestAccruedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    period: BigNumber;
    periods: BigNumber;
    newDebt: BigNumber;
    rewardCount: BigNumber;
    cumulativeDebt: BigNumber;
    debtExchangeRate: BigNumber;
}>;
export declare type InterestAccruedEventFilter = TypedEventFilter<InterestAccruedEvent>;
export declare type InterestPortionToLendersUpdatedEvent = TypedEvent<[
    BigNumber
], {
    percentage: BigNumber;
}>;
export declare type InterestPortionToLendersUpdatedEventFilter = TypedEventFilter<InterestPortionToLendersUpdatedEvent>;
export declare type LendEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    account: string;
    hueCount: BigNumber;
    lendTokenCount: BigNumber;
}>;
export declare type LendEventFilter = TypedEventFilter<LendEvent>;
export declare type MinPositionSizeUpdatedEvent = TypedEvent<[
    BigNumber
], {
    size: BigNumber;
}>;
export declare type MinPositionSizeUpdatedEventFilter = TypedEventFilter<MinPositionSizeUpdatedEvent>;
export declare type PositionAdjustedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    positionID: BigNumber;
    debtIncrease: BigNumber;
    debtDecrease: BigNumber;
    collateralIncrease: BigNumber;
    collateralDecrease: BigNumber;
    newDebt: BigNumber;
    newCollateral: BigNumber;
}>;
export declare type PositionAdjustedEventFilter = TypedEventFilter<PositionAdjustedEvent>;
export declare type PositionCreatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    creator: string;
    positionID: BigNumber;
    initialDebt: BigNumber;
}>;
export declare type PositionCreatedEventFilter = TypedEventFilter<PositionCreatedEvent>;
export declare type PositionUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    positionID: BigNumber;
    period: BigNumber;
    debtAfter: BigNumber;
    tcpRewards: BigNumber;
}>;
export declare type PositionUpdatedEventFilter = TypedEventFilter<PositionUpdatedEvent>;
export declare type RewardsDistributedEvent = TypedEvent<[
    string,
    boolean,
    BigNumber
], {
    account: string;
    isKickback: boolean;
    tcpRewards: BigNumber;
}>;
export declare type RewardsDistributedEventFilter = TypedEventFilter<RewardsDistributedEvent>;
export declare type StoppedEvent = TypedEvent<[], {}>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
export declare type TwapDurationUpdatedEvent = TypedEvent<[
    number
], {
    duration: number;
}>;
export declare type TwapDurationUpdatedEventFilter = TypedEventFilter<TwapDurationUpdatedEvent>;
export declare type UnlendEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    account: string;
    hueCount: BigNumber;
    lendTokenCount: BigNumber;
}>;
export declare type UnlendEventFilter = TypedEventFilter<UnlendEvent>;
export interface Market extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MarketInterface;
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
        accounting(overrides?: CallOverrides): Promise<[string]>;
        accrueInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        adjustPosition(positionID: BigNumberish, debtChange: BigNumberish, collateralDecrease: BigNumberish, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimAllRewards(positionIDs: BigNumberish[], ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimRewards(positionID: BigNumberish, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<[BigNumber]>;
        createPosition(initialDebt: BigNumberish, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        currentPeriod(overrides?: CallOverrides): Promise<[BigNumber] & {
            period: BigNumber;
        }>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        firstPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        hue(overrides?: CallOverrides): Promise<[string]>;
        huePositionNFT(overrides?: CallOverrides): Promise<[string]>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        interestPortionToLenders(overrides?: CallOverrides): Promise<[BigNumber]>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<[BigNumber]>;
        lend(hueCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lendHue(overrides?: CallOverrides): Promise<[string]>;
        minPositionSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        periodLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        removeKickback(positionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setCollateralizationRequirement(requirement: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setInterestPortionToLenders(percentage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinPositionSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        systemGetUpdatedPosition(positionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unlend(lendTokenCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        valueOfLendTokensInHue(lendTokenCount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    accounting(overrides?: CallOverrides): Promise<string>;
    accrueInterest(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    adjustPosition(positionID: BigNumberish, debtChange: BigNumberish, collateralDecrease: BigNumberish, ui: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimAllRewards(positionIDs: BigNumberish[], ui: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimRewards(positionID: BigNumberish, ui: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;
    createPosition(initialDebt: BigNumberish, ui: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    deployer(overrides?: CallOverrides): Promise<string>;
    firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    governor(overrides?: CallOverrides): Promise<string>;
    hue(overrides?: CallOverrides): Promise<string>;
    huePositionNFT(overrides?: CallOverrides): Promise<string>;
    init(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    interestPortionToLenders(overrides?: CallOverrides): Promise<BigNumber>;
    lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<BigNumber>;
    lend(hueCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lendHue(overrides?: CallOverrides): Promise<string>;
    minPositionSize(overrides?: CallOverrides): Promise<BigNumber>;
    periodLength(overrides?: CallOverrides): Promise<BigNumber>;
    removeKickback(positionID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setCollateralizationRequirement(requirement: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setInterestPortionToLenders(percentage: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinPositionSize(size: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    systemGetUpdatedPosition(positionID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unlend(lendTokenCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    valueOfLendTokensInHue(lendTokenCount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        accounting(overrides?: CallOverrides): Promise<string>;
        accrueInterest(overrides?: CallOverrides): Promise<void>;
        adjustPosition(positionID: BigNumberish, debtChange: BigNumberish, collateralDecrease: BigNumberish, ui: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claimAllRewards(positionIDs: BigNumberish[], ui: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claimRewards(positionID: BigNumberish, ui: BigNumberish, overrides?: CallOverrides): Promise<void>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;
        createPosition(initialDebt: BigNumberish, ui: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<string>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<string>;
        hue(overrides?: CallOverrides): Promise<string>;
        huePositionNFT(overrides?: CallOverrides): Promise<string>;
        init(overrides?: CallOverrides): Promise<void>;
        interestPortionToLenders(overrides?: CallOverrides): Promise<BigNumber>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<BigNumber>;
        lend(hueCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lendHue(overrides?: CallOverrides): Promise<string>;
        minPositionSize(overrides?: CallOverrides): Promise<BigNumber>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        removeKickback(positionID: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setCollateralizationRequirement(requirement: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setInterestPortionToLenders(percentage: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMinPositionSize(size: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        systemGetUpdatedPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<DebtPositionStructOutput>;
        unlend(lendTokenCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        valueOfLendTokensInHue(lendTokenCount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "CollateralizationRequirementUpdated(uint256)"(requirement?: null): CollateralizationRequirementUpdatedEventFilter;
        CollateralizationRequirementUpdated(requirement?: null): CollateralizationRequirementUpdatedEventFilter;
        "InterestAccrued(uint64,uint64,uint256,uint256,uint256,uint256)"(period?: BigNumberish | null, periods?: null, newDebt?: null, rewardCount?: null, cumulativeDebt?: null, debtExchangeRate?: null): InterestAccruedEventFilter;
        InterestAccrued(period?: BigNumberish | null, periods?: null, newDebt?: null, rewardCount?: null, cumulativeDebt?: null, debtExchangeRate?: null): InterestAccruedEventFilter;
        "InterestPortionToLendersUpdated(uint256)"(percentage?: null): InterestPortionToLendersUpdatedEventFilter;
        InterestPortionToLendersUpdated(percentage?: null): InterestPortionToLendersUpdatedEventFilter;
        "Lend(address,uint256,uint256)"(account?: string | null, hueCount?: null, lendTokenCount?: null): LendEventFilter;
        Lend(account?: string | null, hueCount?: null, lendTokenCount?: null): LendEventFilter;
        "MinPositionSizeUpdated(uint256)"(size?: null): MinPositionSizeUpdatedEventFilter;
        MinPositionSizeUpdated(size?: null): MinPositionSizeUpdatedEventFilter;
        "PositionAdjusted(uint64,uint256,uint256,uint256,uint256,uint256,uint256)"(positionID?: BigNumberish | null, debtIncrease?: null, debtDecrease?: null, collateralIncrease?: null, collateralDecrease?: null, newDebt?: null, newCollateral?: null): PositionAdjustedEventFilter;
        PositionAdjusted(positionID?: BigNumberish | null, debtIncrease?: null, debtDecrease?: null, collateralIncrease?: null, collateralDecrease?: null, newDebt?: null, newCollateral?: null): PositionAdjustedEventFilter;
        "PositionCreated(address,uint64,uint256)"(creator?: string | null, positionID?: BigNumberish | null, initialDebt?: null): PositionCreatedEventFilter;
        PositionCreated(creator?: string | null, positionID?: BigNumberish | null, initialDebt?: null): PositionCreatedEventFilter;
        "PositionUpdated(uint256,uint64,uint256,uint256)"(positionID?: BigNumberish | null, period?: BigNumberish | null, debtAfter?: null, tcpRewards?: null): PositionUpdatedEventFilter;
        PositionUpdated(positionID?: BigNumberish | null, period?: BigNumberish | null, debtAfter?: null, tcpRewards?: null): PositionUpdatedEventFilter;
        "RewardsDistributed(address,bool,uint256)"(account?: string | null, isKickback?: boolean | null, tcpRewards?: null): RewardsDistributedEventFilter;
        RewardsDistributed(account?: string | null, isKickback?: boolean | null, tcpRewards?: null): RewardsDistributedEventFilter;
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
        "TwapDurationUpdated(uint32)"(duration?: null): TwapDurationUpdatedEventFilter;
        TwapDurationUpdated(duration?: null): TwapDurationUpdatedEventFilter;
        "Unlend(address,uint256,uint256)"(account?: string | null, hueCount?: null, lendTokenCount?: null): UnlendEventFilter;
        Unlend(account?: string | null, hueCount?: null, lendTokenCount?: null): UnlendEventFilter;
    };
    estimateGas: {
        accounting(overrides?: CallOverrides): Promise<BigNumber>;
        accrueInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        adjustPosition(positionID: BigNumberish, debtChange: BigNumberish, collateralDecrease: BigNumberish, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimAllRewards(positionIDs: BigNumberish[], ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimRewards(positionID: BigNumberish, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;
        createPosition(initialDebt: BigNumberish, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        hue(overrides?: CallOverrides): Promise<BigNumber>;
        huePositionNFT(overrides?: CallOverrides): Promise<BigNumber>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        interestPortionToLenders(overrides?: CallOverrides): Promise<BigNumber>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<BigNumber>;
        lend(hueCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lendHue(overrides?: CallOverrides): Promise<BigNumber>;
        minPositionSize(overrides?: CallOverrides): Promise<BigNumber>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        removeKickback(positionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setCollateralizationRequirement(requirement: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setInterestPortionToLenders(percentage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinPositionSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        systemGetUpdatedPosition(positionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unlend(lendTokenCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        valueOfLendTokensInHue(lendTokenCount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accounting(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrueInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        adjustPosition(positionID: BigNumberish, debtChange: BigNumberish, collateralDecrease: BigNumberish, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimAllRewards(positionIDs: BigNumberish[], ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimRewards(positionID: BigNumberish, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createPosition(initialDebt: BigNumberish, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        currentPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        huePositionNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        interestPortionToLenders(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lend(hueCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lendHue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minPositionSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeKickback(positionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setCollateralizationRequirement(requirement: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setInterestPortionToLenders(percentage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinPositionSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        systemGetUpdatedPosition(positionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unlend(lendTokenCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        valueOfLendTokensInHue(lendTokenCount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
