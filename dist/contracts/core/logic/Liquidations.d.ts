import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace ILiquidations {
    type ConstructorParamsStruct = {
        Governor: PromiseOrValue<string>;
        ProtocolLock: PromiseOrValue<string>;
        Accounting: PromiseOrValue<string>;
        Hue: PromiseOrValue<string>;
    };
    type ConstructorParamsStructOutput = [
        string,
        string,
        string,
        string
    ] & {
        Governor: string;
        ProtocolLock: string;
        Accounting: string;
        Hue: string;
    };
}
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
        "setTwapDuration(uint32)": FunctionFragment;
        "stop()": FunctionFragment;
        "stopped()": FunctionFragment;
        "twapDuration()": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accounting" | "currentPeriod" | "discoverUndercollateralizedPositions" | "discoveryIncentive" | "ensureLiquidationIncentive" | "firstPeriod" | "governor" | "hue" | "liquidate" | "liquidationIncentive" | "maxRewardsRatio" | "minLiquidationIncentive" | "periodLength" | "rewardsLimit" | "setDiscoveryIncentive" | "setLiquidationIncentive" | "setMaxRewardsRatio" | "setMinLiquidationIncentive" | "setTwapDuration" | "stop" | "stopped" | "twapDuration" | "validUpdate"): FunctionFragment;
    encodeFunctionData(functionFragment: "accounting", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "discoverUndercollateralizedPositions", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "discoveryIncentive", values?: undefined): string;
    encodeFunctionData(functionFragment: "ensureLiquidationIncentive", values?: undefined): string;
    encodeFunctionData(functionFragment: "firstPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "hue", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidate", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "liquidationIncentive", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxRewardsRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "minLiquidationIncentive", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "setDiscoveryIncentive", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setLiquidationIncentive", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxRewardsRatio", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMinLiquidationIncentive", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTwapDuration", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "twapDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [PromiseOrValue<BytesLike>]): string;
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
    decodeFunctionResult(functionFragment: "setTwapDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "twapDuration", data: BytesLike): Result;
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
export interface CoveredUnbackedDebtEventObject {
    price: BigNumber;
    amountCovered: BigNumber;
}
export declare type CoveredUnbackedDebtEvent = TypedEvent<[
    BigNumber,
    BigNumber
], CoveredUnbackedDebtEventObject>;
export declare type CoveredUnbackedDebtEventFilter = TypedEventFilter<CoveredUnbackedDebtEvent>;
export interface DiscoveryIncentiveUpdatedEventObject {
    incentive: BigNumber;
}
export declare type DiscoveryIncentiveUpdatedEvent = TypedEvent<[
    BigNumber
], DiscoveryIncentiveUpdatedEventObject>;
export declare type DiscoveryIncentiveUpdatedEventFilter = TypedEventFilter<DiscoveryIncentiveUpdatedEvent>;
export interface LiquidatedEventObject {
    baseTokensToRepay: BigNumber;
    collateralToReceive: BigNumber;
}
export declare type LiquidatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], LiquidatedEventObject>;
export declare type LiquidatedEventFilter = TypedEventFilter<LiquidatedEvent>;
export interface LiquidationIncentiveUpdatedEventObject {
    incentive: BigNumber;
}
export declare type LiquidationIncentiveUpdatedEvent = TypedEvent<[
    BigNumber
], LiquidationIncentiveUpdatedEventObject>;
export declare type LiquidationIncentiveUpdatedEventFilter = TypedEventFilter<LiquidationIncentiveUpdatedEvent>;
export interface MaxRewardsRatioUpdatedEventObject {
    ratio: BigNumber;
}
export declare type MaxRewardsRatioUpdatedEvent = TypedEvent<[
    BigNumber
], MaxRewardsRatioUpdatedEventObject>;
export declare type MaxRewardsRatioUpdatedEventFilter = TypedEventFilter<MaxRewardsRatioUpdatedEvent>;
export interface MinLiquidationIncentiveUpdatedEventObject {
    incentive: BigNumber;
}
export declare type MinLiquidationIncentiveUpdatedEvent = TypedEvent<[
    BigNumber
], MinLiquidationIncentiveUpdatedEventObject>;
export declare type MinLiquidationIncentiveUpdatedEventFilter = TypedEventFilter<MinLiquidationIncentiveUpdatedEvent>;
export interface StoppedEventObject {
}
export declare type StoppedEvent = TypedEvent<[], StoppedEventObject>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
export interface UndercollatPositionDiscoveredEventObject {
    positionID: BigNumber;
    debtCount: BigNumber;
    collateralCount: BigNumber;
    price: BigNumber;
}
export declare type UndercollatPositionDiscoveredEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], UndercollatPositionDiscoveredEventObject>;
export declare type UndercollatPositionDiscoveredEventFilter = TypedEventFilter<UndercollatPositionDiscoveredEvent>;
export interface twapDurationUpdatedEventObject {
    duration: number;
}
export declare type twapDurationUpdatedEvent = TypedEvent<[
    number
], twapDurationUpdatedEventObject>;
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
        discoverUndercollateralizedPositions(positionIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        discoveryIncentive(overrides?: CallOverrides): Promise<[BigNumber]>;
        ensureLiquidationIncentive(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        hue(overrides?: CallOverrides): Promise<[string]>;
        liquidate(baseTokensToRepay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
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
        setDiscoveryIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLiquidationIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxRewardsRatio(ratio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinLiquidationIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        twapDuration(overrides?: CallOverrides): Promise<[number]>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    accounting(overrides?: CallOverrides): Promise<string>;
    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    discoverUndercollateralizedPositions(positionIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    discoveryIncentive(overrides?: CallOverrides): Promise<BigNumber>;
    ensureLiquidationIncentive(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    governor(overrides?: CallOverrides): Promise<string>;
    hue(overrides?: CallOverrides): Promise<string>;
    liquidate(baseTokensToRepay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
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
    setDiscoveryIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLiquidationIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxRewardsRatio(ratio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinLiquidationIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    twapDuration(overrides?: CallOverrides): Promise<number>;
    validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        accounting(overrides?: CallOverrides): Promise<string>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        discoverUndercollateralizedPositions(positionIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        discoveryIncentive(overrides?: CallOverrides): Promise<BigNumber>;
        ensureLiquidationIncentive(overrides?: CallOverrides): Promise<void>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<string>;
        hue(overrides?: CallOverrides): Promise<string>;
        liquidate(baseTokensToRepay: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
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
        setDiscoveryIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setLiquidationIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxRewardsRatio(ratio: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMinLiquidationIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        twapDuration(overrides?: CallOverrides): Promise<number>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
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
        "UndercollatPositionDiscovered(uint64,uint256,uint256,uint256)"(positionID?: PromiseOrValue<BigNumberish> | null, debtCount?: null, collateralCount?: null, price?: null): UndercollatPositionDiscoveredEventFilter;
        UndercollatPositionDiscovered(positionID?: PromiseOrValue<BigNumberish> | null, debtCount?: null, collateralCount?: null, price?: null): UndercollatPositionDiscoveredEventFilter;
        "twapDurationUpdated(uint32)"(duration?: null): twapDurationUpdatedEventFilter;
        twapDurationUpdated(duration?: null): twapDurationUpdatedEventFilter;
    };
    estimateGas: {
        accounting(overrides?: CallOverrides): Promise<BigNumber>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        discoverUndercollateralizedPositions(positionIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        discoveryIncentive(overrides?: CallOverrides): Promise<BigNumber>;
        ensureLiquidationIncentive(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        hue(overrides?: CallOverrides): Promise<BigNumber>;
        liquidate(baseTokensToRepay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        liquidationIncentive(overrides?: CallOverrides): Promise<BigNumber>;
        maxRewardsRatio(overrides?: CallOverrides): Promise<BigNumber>;
        minLiquidationIncentive(overrides?: CallOverrides): Promise<BigNumber>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        rewardsLimit(overrides?: CallOverrides): Promise<BigNumber>;
        setDiscoveryIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLiquidationIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxRewardsRatio(ratio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinLiquidationIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        twapDuration(overrides?: CallOverrides): Promise<BigNumber>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accounting(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        discoverUndercollateralizedPositions(positionIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        discoveryIncentive(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ensureLiquidationIncentive(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidate(baseTokensToRepay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        liquidationIncentive(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxRewardsRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minLiquidationIncentive(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDiscoveryIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidationIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxRewardsRatio(ratio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinLiquidationIncentive(incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        twapDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
