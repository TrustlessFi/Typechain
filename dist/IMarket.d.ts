import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
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
export interface IMarketInterface extends utils.Interface {
    functions: {
        "accrueInterest()": FunctionFragment;
        "collateralizationRequirement()": FunctionFragment;
        "lastPeriodGlobalInterestAccrued()": FunctionFragment;
        "stop()": FunctionFragment;
        "systemGetUpdatedPosition(uint64)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accrueInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralizationRequirement", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastPeriodGlobalInterestAccrued", values?: undefined): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemGetUpdatedPosition", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "accrueInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralizationRequirement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPeriodGlobalInterestAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemGetUpdatedPosition", data: BytesLike): Result;
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
export interface IMarket extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMarketInterface;
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
        accrueInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<[BigNumber] & {
            ratio: BigNumber;
        }>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<[BigNumber] & {
            period: BigNumber;
        }>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        systemGetUpdatedPosition(positionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    accrueInterest(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;
    lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<BigNumber>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    systemGetUpdatedPosition(positionID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accrueInterest(overrides?: CallOverrides): Promise<void>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: CallOverrides): Promise<void>;
        systemGetUpdatedPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<DebtPositionStructOutput>;
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
        "TwapDurationUpdated(uint32)"(duration?: null): TwapDurationUpdatedEventFilter;
        TwapDurationUpdated(duration?: null): TwapDurationUpdatedEventFilter;
        "Unlend(address,uint256,uint256)"(account?: string | null, hueCount?: null, lendTokenCount?: null): UnlendEventFilter;
        Unlend(account?: string | null, hueCount?: null, lendTokenCount?: null): UnlendEventFilter;
    };
    estimateGas: {
        accrueInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        systemGetUpdatedPosition(positionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accrueInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        systemGetUpdatedPosition(positionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
