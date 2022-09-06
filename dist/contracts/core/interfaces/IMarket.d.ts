import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace IAccounting {
    type DebtPositionStruct = {
        startCumulativeDebt: PromiseOrValue<BigNumberish>;
        collateral: PromiseOrValue<BigNumberish>;
        debt: PromiseOrValue<BigNumberish>;
        startDebtExchangeRate: PromiseOrValue<BigNumberish>;
        startTCPRewards: PromiseOrValue<BigNumberish>;
        lastTimeUpdated: PromiseOrValue<BigNumberish>;
        lastBlockPositionIncreased: PromiseOrValue<BigNumberish>;
        tick: PromiseOrValue<BigNumberish>;
        tickSet: PromiseOrValue<boolean>;
        tickIndex: PromiseOrValue<BigNumberish>;
        ui: PromiseOrValue<BigNumberish>;
        kickbackDestination: PromiseOrValue<string>;
        kickbackPortion: PromiseOrValue<BigNumberish>;
    };
    type DebtPositionStructOutput = [
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
        lastBlockPositionIncreased: BigNumber;
        tick: number;
        tickSet: boolean;
        tickIndex: BigNumber;
        ui: number;
        kickbackDestination: string;
        kickbackPortion: BigNumber;
    };
}
export interface IMarketInterface extends utils.Interface {
    functions: {
        "accrueInterest()": FunctionFragment;
        "collateralizationRequirement()": FunctionFragment;
        "lastPeriodGlobalInterestAccrued()": FunctionFragment;
        "stop()": FunctionFragment;
        "systemGetUpdatedPosition(uint64)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accrueInterest" | "collateralizationRequirement" | "lastPeriodGlobalInterestAccrued" | "stop" | "systemGetUpdatedPosition"): FunctionFragment;
    encodeFunctionData(functionFragment: "accrueInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralizationRequirement", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastPeriodGlobalInterestAccrued", values?: undefined): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemGetUpdatedPosition", values: [PromiseOrValue<BigNumberish>]): string;
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
export interface CollateralizationRequirementUpdatedEventObject {
    requirement: BigNumber;
}
export declare type CollateralizationRequirementUpdatedEvent = TypedEvent<[
    BigNumber
], CollateralizationRequirementUpdatedEventObject>;
export declare type CollateralizationRequirementUpdatedEventFilter = TypedEventFilter<CollateralizationRequirementUpdatedEvent>;
export interface InterestAccruedEventObject {
    period: BigNumber;
    periods: BigNumber;
    newDebt: BigNumber;
    rewardCount: BigNumber;
    cumulativeDebt: BigNumber;
    debtExchangeRate: BigNumber;
}
export declare type InterestAccruedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], InterestAccruedEventObject>;
export declare type InterestAccruedEventFilter = TypedEventFilter<InterestAccruedEvent>;
export interface InterestPortionToLendersUpdatedEventObject {
    percentage: BigNumber;
}
export declare type InterestPortionToLendersUpdatedEvent = TypedEvent<[
    BigNumber
], InterestPortionToLendersUpdatedEventObject>;
export declare type InterestPortionToLendersUpdatedEventFilter = TypedEventFilter<InterestPortionToLendersUpdatedEvent>;
export interface LendEventObject {
    account: string;
    hueCount: BigNumber;
    lendTokenCount: BigNumber;
}
export declare type LendEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], LendEventObject>;
export declare type LendEventFilter = TypedEventFilter<LendEvent>;
export interface MinPositionSizeUpdatedEventObject {
    size: BigNumber;
}
export declare type MinPositionSizeUpdatedEvent = TypedEvent<[
    BigNumber
], MinPositionSizeUpdatedEventObject>;
export declare type MinPositionSizeUpdatedEventFilter = TypedEventFilter<MinPositionSizeUpdatedEvent>;
export interface PositionAdjustedEventObject {
    positionID: BigNumber;
    debtIncrease: BigNumber;
    debtDecrease: BigNumber;
    collateralIncrease: BigNumber;
    collateralDecrease: BigNumber;
    newDebt: BigNumber;
    newCollateral: BigNumber;
}
export declare type PositionAdjustedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], PositionAdjustedEventObject>;
export declare type PositionAdjustedEventFilter = TypedEventFilter<PositionAdjustedEvent>;
export interface PositionCreatedEventObject {
    creator: string;
    positionID: BigNumber;
    initialDebt: BigNumber;
}
export declare type PositionCreatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], PositionCreatedEventObject>;
export declare type PositionCreatedEventFilter = TypedEventFilter<PositionCreatedEvent>;
export interface PositionUpdatedEventObject {
    positionID: BigNumber;
    period: BigNumber;
    debtAfter: BigNumber;
    tcpRewards: BigNumber;
}
export declare type PositionUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], PositionUpdatedEventObject>;
export declare type PositionUpdatedEventFilter = TypedEventFilter<PositionUpdatedEvent>;
export interface RewardsDistributedEventObject {
    account: string;
    isKickback: boolean;
    tcpRewards: BigNumber;
}
export declare type RewardsDistributedEvent = TypedEvent<[
    string,
    boolean,
    BigNumber
], RewardsDistributedEventObject>;
export declare type RewardsDistributedEventFilter = TypedEventFilter<RewardsDistributedEvent>;
export interface TwapDurationUpdatedEventObject {
    duration: number;
}
export declare type TwapDurationUpdatedEvent = TypedEvent<[
    number
], TwapDurationUpdatedEventObject>;
export declare type TwapDurationUpdatedEventFilter = TypedEventFilter<TwapDurationUpdatedEvent>;
export interface UnlendEventObject {
    account: string;
    hueCount: BigNumber;
    lendTokenCount: BigNumber;
}
export declare type UnlendEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], UnlendEventObject>;
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
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<[BigNumber] & {
            ratio: BigNumber;
        }>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<[BigNumber] & {
            period: BigNumber;
        }>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        systemGetUpdatedPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    accrueInterest(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;
    lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<BigNumber>;
    stop(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    systemGetUpdatedPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accrueInterest(overrides?: CallOverrides): Promise<void>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: CallOverrides): Promise<void>;
        systemGetUpdatedPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IAccounting.DebtPositionStructOutput>;
    };
    filters: {
        "CollateralizationRequirementUpdated(uint256)"(requirement?: null): CollateralizationRequirementUpdatedEventFilter;
        CollateralizationRequirementUpdated(requirement?: null): CollateralizationRequirementUpdatedEventFilter;
        "InterestAccrued(uint64,uint64,uint256,uint256,uint256,uint256)"(period?: PromiseOrValue<BigNumberish> | null, periods?: null, newDebt?: null, rewardCount?: null, cumulativeDebt?: null, debtExchangeRate?: null): InterestAccruedEventFilter;
        InterestAccrued(period?: PromiseOrValue<BigNumberish> | null, periods?: null, newDebt?: null, rewardCount?: null, cumulativeDebt?: null, debtExchangeRate?: null): InterestAccruedEventFilter;
        "InterestPortionToLendersUpdated(uint256)"(percentage?: null): InterestPortionToLendersUpdatedEventFilter;
        InterestPortionToLendersUpdated(percentage?: null): InterestPortionToLendersUpdatedEventFilter;
        "Lend(address,uint256,uint256)"(account?: PromiseOrValue<string> | null, hueCount?: null, lendTokenCount?: null): LendEventFilter;
        Lend(account?: PromiseOrValue<string> | null, hueCount?: null, lendTokenCount?: null): LendEventFilter;
        "MinPositionSizeUpdated(uint256)"(size?: null): MinPositionSizeUpdatedEventFilter;
        MinPositionSizeUpdated(size?: null): MinPositionSizeUpdatedEventFilter;
        "PositionAdjusted(uint64,uint256,uint256,uint256,uint256,uint256,uint256)"(positionID?: PromiseOrValue<BigNumberish> | null, debtIncrease?: null, debtDecrease?: null, collateralIncrease?: null, collateralDecrease?: null, newDebt?: null, newCollateral?: null): PositionAdjustedEventFilter;
        PositionAdjusted(positionID?: PromiseOrValue<BigNumberish> | null, debtIncrease?: null, debtDecrease?: null, collateralIncrease?: null, collateralDecrease?: null, newDebt?: null, newCollateral?: null): PositionAdjustedEventFilter;
        "PositionCreated(address,uint64,uint256)"(creator?: PromiseOrValue<string> | null, positionID?: PromiseOrValue<BigNumberish> | null, initialDebt?: null): PositionCreatedEventFilter;
        PositionCreated(creator?: PromiseOrValue<string> | null, positionID?: PromiseOrValue<BigNumberish> | null, initialDebt?: null): PositionCreatedEventFilter;
        "PositionUpdated(uint256,uint64,uint256,uint256)"(positionID?: PromiseOrValue<BigNumberish> | null, period?: PromiseOrValue<BigNumberish> | null, debtAfter?: null, tcpRewards?: null): PositionUpdatedEventFilter;
        PositionUpdated(positionID?: PromiseOrValue<BigNumberish> | null, period?: PromiseOrValue<BigNumberish> | null, debtAfter?: null, tcpRewards?: null): PositionUpdatedEventFilter;
        "RewardsDistributed(address,bool,uint256)"(account?: PromiseOrValue<string> | null, isKickback?: PromiseOrValue<boolean> | null, tcpRewards?: null): RewardsDistributedEventFilter;
        RewardsDistributed(account?: PromiseOrValue<string> | null, isKickback?: PromiseOrValue<boolean> | null, tcpRewards?: null): RewardsDistributedEventFilter;
        "TwapDurationUpdated(uint32)"(duration?: null): TwapDurationUpdatedEventFilter;
        TwapDurationUpdated(duration?: null): TwapDurationUpdatedEventFilter;
        "Unlend(address,uint256,uint256)"(account?: PromiseOrValue<string> | null, hueCount?: null, lendTokenCount?: null): UnlendEventFilter;
        Unlend(account?: PromiseOrValue<string> | null, hueCount?: null, lendTokenCount?: null): UnlendEventFilter;
    };
    estimateGas: {
        accrueInterest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        systemGetUpdatedPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accrueInterest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        systemGetUpdatedPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
