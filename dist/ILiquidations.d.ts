import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ILiquidationsInterface extends utils.Interface {
    functions: {
        "stop()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    events: {
        "CoveredUnbackedDebt(uint256,uint256)": EventFragment;
        "DiscoveryIncentiveUpdated(uint64)": EventFragment;
        "Liquidated(uint256,uint256)": EventFragment;
        "LiquidationIncentiveUpdated(uint64)": EventFragment;
        "MaxRewardsRatioUpdated(uint64)": EventFragment;
        "MinLiquidationIncentiveUpdated(uint64)": EventFragment;
        "UndercollatPositionDiscovered(uint64,uint256,uint256,uint256)": EventFragment;
        "twapDurationUpdated(uint32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CoveredUnbackedDebt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DiscoveryIncentiveUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Liquidated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidationIncentiveUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxRewardsRatioUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinLiquidationIncentiveUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UndercollatPositionDiscovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "twapDurationUpdated"): EventFragment;
}
export declare type CoveredUnbackedDebtEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    price: BigNumber;
    amountCovered: BigNumber;
}>;
export declare type CoveredUnbackedDebtEventFilter = TypedEventFilter<CoveredUnbackedDebtEvent>;
export declare type DiscoveryIncentiveUpdatedEvent = TypedEvent<[
    BigNumber
], {
    incentive: BigNumber;
}>;
export declare type DiscoveryIncentiveUpdatedEventFilter = TypedEventFilter<DiscoveryIncentiveUpdatedEvent>;
export declare type LiquidatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    baseTokensToRepay: BigNumber;
    collateralToReceive: BigNumber;
}>;
export declare type LiquidatedEventFilter = TypedEventFilter<LiquidatedEvent>;
export declare type LiquidationIncentiveUpdatedEvent = TypedEvent<[
    BigNumber
], {
    incentive: BigNumber;
}>;
export declare type LiquidationIncentiveUpdatedEventFilter = TypedEventFilter<LiquidationIncentiveUpdatedEvent>;
export declare type MaxRewardsRatioUpdatedEvent = TypedEvent<[
    BigNumber
], {
    ratio: BigNumber;
}>;
export declare type MaxRewardsRatioUpdatedEventFilter = TypedEventFilter<MaxRewardsRatioUpdatedEvent>;
export declare type MinLiquidationIncentiveUpdatedEvent = TypedEvent<[
    BigNumber
], {
    incentive: BigNumber;
}>;
export declare type MinLiquidationIncentiveUpdatedEventFilter = TypedEventFilter<MinLiquidationIncentiveUpdatedEvent>;
export declare type UndercollatPositionDiscoveredEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    positionID: BigNumber;
    debtCount: BigNumber;
    collateralCount: BigNumber;
    price: BigNumber;
}>;
export declare type UndercollatPositionDiscoveredEventFilter = TypedEventFilter<UndercollatPositionDiscoveredEvent>;
export declare type twapDurationUpdatedEvent = TypedEvent<[
    number
], {
    duration: number;
}>;
export declare type twapDurationUpdatedEventFilter = TypedEventFilter<twapDurationUpdatedEvent>;
export interface ILiquidations extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILiquidationsInterface;
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
    };
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        stop(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CoveredUnbackedDebt(uint256,uint256)"(price?: null, amountCovered?: null): CoveredUnbackedDebtEventFilter;
        CoveredUnbackedDebt(price?: null, amountCovered?: null): CoveredUnbackedDebtEventFilter;
        "DiscoveryIncentiveUpdated(uint64)"(incentive?: null): DiscoveryIncentiveUpdatedEventFilter;
        DiscoveryIncentiveUpdated(incentive?: null): DiscoveryIncentiveUpdatedEventFilter;
        "Liquidated(uint256,uint256)"(baseTokensToRepay?: null, collateralToReceive?: null): LiquidatedEventFilter;
        Liquidated(baseTokensToRepay?: null, collateralToReceive?: null): LiquidatedEventFilter;
        "LiquidationIncentiveUpdated(uint64)"(incentive?: null): LiquidationIncentiveUpdatedEventFilter;
        LiquidationIncentiveUpdated(incentive?: null): LiquidationIncentiveUpdatedEventFilter;
        "MaxRewardsRatioUpdated(uint64)"(ratio?: null): MaxRewardsRatioUpdatedEventFilter;
        MaxRewardsRatioUpdated(ratio?: null): MaxRewardsRatioUpdatedEventFilter;
        "MinLiquidationIncentiveUpdated(uint64)"(incentive?: null): MinLiquidationIncentiveUpdatedEventFilter;
        MinLiquidationIncentiveUpdated(incentive?: null): MinLiquidationIncentiveUpdatedEventFilter;
        "UndercollatPositionDiscovered(uint64,uint256,uint256,uint256)"(positionID?: BigNumberish | null, debtCount?: null, collateralCount?: null, price?: null): UndercollatPositionDiscoveredEventFilter;
        UndercollatPositionDiscovered(positionID?: BigNumberish | null, debtCount?: null, collateralCount?: null, price?: null): UndercollatPositionDiscoveredEventFilter;
        "twapDurationUpdated(uint32)"(duration?: null): twapDurationUpdatedEventFilter;
        twapDurationUpdated(duration?: null): twapDurationUpdatedEventFilter;
    };
    estimateGas: {
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
