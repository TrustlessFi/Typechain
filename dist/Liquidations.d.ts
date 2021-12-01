import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    Governor: string;
    ProtocolLock: string;
    Accounting: string;
    Hue: string;
};
export declare type ConstructorParamsStructOutput = [string, string, string, string] & {
    Governor: string;
    ProtocolLock: string;
    Accounting: string;
    Hue: string;
};
export interface LiquidationsInterface extends utils.Interface {
    functions: {
        "accounting()": FunctionFragment;
        "currentPeriod()": FunctionFragment;
        "discoverUndercollateralizedPositions(uint64[])": FunctionFragment;
        "discoveryIncentive()": FunctionFragment;
        "ensureLiquidationIncentive()": FunctionFragment;
        "firstPeriod()": FunctionFragment;
        "governor()": FunctionFragment;
        "hue()": FunctionFragment;
        "liquidate(uint256)": FunctionFragment;
        "liquidationIncentive()": FunctionFragment;
        "maxRewardsRatio()": FunctionFragment;
        "minLiquidationIncentive()": FunctionFragment;
        "periodLength()": FunctionFragment;
        "rewardsLimit()": FunctionFragment;
        "setDiscoveryIncentive(uint64)": FunctionFragment;
        "setLiquidationIncentive(uint64)": FunctionFragment;
        "setMaxRewardsRatio(uint64)": FunctionFragment;
        "setMinLiquidationIncentive(uint64)": FunctionFragment;
        "stop()": FunctionFragment;
        "stopped()": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accounting", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "discoverUndercollateralizedPositions", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "discoveryIncentive", values?: undefined): string;
    encodeFunctionData(functionFragment: "ensureLiquidationIncentive", values?: undefined): string;
    encodeFunctionData(functionFragment: "firstPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "hue", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidationIncentive", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxRewardsRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "minLiquidationIncentive", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "setDiscoveryIncentive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLiquidationIncentive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxRewardsRatio", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMinLiquidationIncentive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "accounting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "discoverUndercollateralizedPositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "discoveryIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ensureLiquidationIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxRewardsRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minLiquidationIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDiscoveryIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidationIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxRewardsRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinLiquidationIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
    events: {
        "CoveredUnbackedDebt(uint256,uint256)": EventFragment;
        "DiscoveryIncentiveUpdated(uint64)": EventFragment;
        "Liquidated(uint256,uint256)": EventFragment;
        "LiquidationIncentiveUpdated(uint64)": EventFragment;
        "MaxRewardsRatioUpdated(uint64)": EventFragment;
        "MinLiquidationIncentiveUpdated(uint64)": EventFragment;
        "Stopped()": EventFragment;
        "UndercollatPositionDiscovered(uint64,uint256,uint256,uint256)": EventFragment;
        "twapDurationUpdated(uint32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CoveredUnbackedDebt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DiscoveryIncentiveUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Liquidated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidationIncentiveUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxRewardsRatioUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinLiquidationIncentiveUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
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
export declare type StoppedEvent = TypedEvent<[], {}>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
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
export interface Liquidations extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LiquidationsInterface;
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
        currentPeriod(overrides?: CallOverrides): Promise<[BigNumber] & {
            period: BigNumber;
        }>;
        discoverUndercollateralizedPositions(positionIDs: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        discoveryIncentive(overrides?: CallOverrides): Promise<[BigNumber]>;
        ensureLiquidationIncentive(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        hue(overrides?: CallOverrides): Promise<[string]>;
        liquidate(baseTokensToRepay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        liquidationIncentive(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxRewardsRatio(overrides?: CallOverrides): Promise<[BigNumber]>;
        minLiquidationIncentive(overrides?: CallOverrides): Promise<[BigNumber]>;
        periodLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardsLimit(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            remaining: BigNumber;
            period: BigNumber;
        }>;
        setDiscoveryIncentive(incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLiquidationIncentive(incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxRewardsRatio(ratio: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinLiquidationIncentive(incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    accounting(overrides?: CallOverrides): Promise<string>;
    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    discoverUndercollateralizedPositions(positionIDs: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    discoveryIncentive(overrides?: CallOverrides): Promise<BigNumber>;
    ensureLiquidationIncentive(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    governor(overrides?: CallOverrides): Promise<string>;
    hue(overrides?: CallOverrides): Promise<string>;
    liquidate(baseTokensToRepay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    liquidationIncentive(overrides?: CallOverrides): Promise<BigNumber>;
    maxRewardsRatio(overrides?: CallOverrides): Promise<BigNumber>;
    minLiquidationIncentive(overrides?: CallOverrides): Promise<BigNumber>;
    periodLength(overrides?: CallOverrides): Promise<BigNumber>;
    rewardsLimit(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        remaining: BigNumber;
        period: BigNumber;
    }>;
    setDiscoveryIncentive(incentive: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLiquidationIncentive(incentive: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxRewardsRatio(ratio: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinLiquidationIncentive(incentive: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        accounting(overrides?: CallOverrides): Promise<string>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        discoverUndercollateralizedPositions(positionIDs: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        discoveryIncentive(overrides?: CallOverrides): Promise<BigNumber>;
        ensureLiquidationIncentive(overrides?: CallOverrides): Promise<void>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<string>;
        hue(overrides?: CallOverrides): Promise<string>;
        liquidate(baseTokensToRepay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        liquidationIncentive(overrides?: CallOverrides): Promise<BigNumber>;
        maxRewardsRatio(overrides?: CallOverrides): Promise<BigNumber>;
        minLiquidationIncentive(overrides?: CallOverrides): Promise<BigNumber>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        rewardsLimit(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            remaining: BigNumber;
            period: BigNumber;
        }>;
        setDiscoveryIncentive(incentive: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLiquidationIncentive(incentive: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxRewardsRatio(ratio: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMinLiquidationIncentive(incentive: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
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
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
        "UndercollatPositionDiscovered(uint64,uint256,uint256,uint256)"(positionID?: BigNumberish | null, debtCount?: null, collateralCount?: null, price?: null): UndercollatPositionDiscoveredEventFilter;
        UndercollatPositionDiscovered(positionID?: BigNumberish | null, debtCount?: null, collateralCount?: null, price?: null): UndercollatPositionDiscoveredEventFilter;
        "twapDurationUpdated(uint32)"(duration?: null): twapDurationUpdatedEventFilter;
        twapDurationUpdated(duration?: null): twapDurationUpdatedEventFilter;
    };
    estimateGas: {
        accounting(overrides?: CallOverrides): Promise<BigNumber>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        discoverUndercollateralizedPositions(positionIDs: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        discoveryIncentive(overrides?: CallOverrides): Promise<BigNumber>;
        ensureLiquidationIncentive(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        hue(overrides?: CallOverrides): Promise<BigNumber>;
        liquidate(baseTokensToRepay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        liquidationIncentive(overrides?: CallOverrides): Promise<BigNumber>;
        maxRewardsRatio(overrides?: CallOverrides): Promise<BigNumber>;
        minLiquidationIncentive(overrides?: CallOverrides): Promise<BigNumber>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        rewardsLimit(overrides?: CallOverrides): Promise<BigNumber>;
        setDiscoveryIncentive(incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLiquidationIncentive(incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxRewardsRatio(ratio: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinLiquidationIncentive(incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accounting(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        discoverUndercollateralizedPositions(positionIDs: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        discoveryIncentive(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ensureLiquidationIncentive(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidate(baseTokensToRepay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        liquidationIncentive(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxRewardsRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minLiquidationIncentive(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDiscoveryIncentive(incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidationIncentive(incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxRewardsRatio(ratio: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinLiquidationIncentive(incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
