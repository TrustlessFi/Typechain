import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IRewardsInterface extends utils.Interface {
    functions: {
        "accrueRewards()": FunctionFragment;
        "addIncentivePool(address,uint64)": FunctionFragment;
        "stop()": FunctionFragment;
        "updatePoolIncentive(uint16,uint64)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accrueRewards" | "addIncentivePool" | "stop" | "updatePoolIncentive"): FunctionFragment;
    encodeFunctionData(functionFragment: "accrueRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "addIncentivePool", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "updatePoolIncentive", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "accrueRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addIncentivePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePoolIncentive", data: BytesLike): Result;
    events: {
        "LiquidityPositionCreated(address,uint16,uint256,int24,int24,uint128)": EventFragment;
        "LiquidityPositionDecreased(uint256,uint256,uint256)": EventFragment;
        "LiquidityPositionIncreased(uint256,uint128)": EventFragment;
        "LiquidityPositionLiquidated(uint256,address)": EventFragment;
        "LiquidityPositionRemoved(uint256,uint256,uint256)": EventFragment;
        "MaxCollateralLiquidityDecreasePerPeriodUpdated(uint64)": EventFragment;
        "PoolAdded(address,uint16,uint64)": EventFragment;
        "PoolIncentiveUpdated(uint16,uint64)": EventFragment;
        "RewardsAccrued(uint256,uint64)": EventFragment;
        "RewardsClaimed(address,uint256,uint256,uint256)": EventFragment;
        "RewardsDistributed(address,bool,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiquidityPositionCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityPositionDecreased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityPositionIncreased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityPositionLiquidated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityPositionRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxCollateralLiquidityDecreasePerPeriodUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolIncentiveUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsAccrued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsDistributed"): EventFragment;
}
export interface LiquidityPositionCreatedEventObject {
    owner: string;
    poolID: number;
    nftID: BigNumber;
    tickLower: number;
    tickUpper: number;
    liquidity: BigNumber;
}
export declare type LiquidityPositionCreatedEvent = TypedEvent<[
    string,
    number,
    BigNumber,
    number,
    number,
    BigNumber
], LiquidityPositionCreatedEventObject>;
export declare type LiquidityPositionCreatedEventFilter = TypedEventFilter<LiquidityPositionCreatedEvent>;
export interface LiquidityPositionDecreasedEventObject {
    nftID: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type LiquidityPositionDecreasedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], LiquidityPositionDecreasedEventObject>;
export declare type LiquidityPositionDecreasedEventFilter = TypedEventFilter<LiquidityPositionDecreasedEvent>;
export interface LiquidityPositionIncreasedEventObject {
    nftID: BigNumber;
    liquidity: BigNumber;
}
export declare type LiquidityPositionIncreasedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], LiquidityPositionIncreasedEventObject>;
export declare type LiquidityPositionIncreasedEventFilter = TypedEventFilter<LiquidityPositionIncreasedEvent>;
export interface LiquidityPositionLiquidatedEventObject {
    nftID: BigNumber;
    liquidator: string;
}
export declare type LiquidityPositionLiquidatedEvent = TypedEvent<[
    BigNumber,
    string
], LiquidityPositionLiquidatedEventObject>;
export declare type LiquidityPositionLiquidatedEventFilter = TypedEventFilter<LiquidityPositionLiquidatedEvent>;
export interface LiquidityPositionRemovedEventObject {
    nftID: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type LiquidityPositionRemovedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], LiquidityPositionRemovedEventObject>;
export declare type LiquidityPositionRemovedEventFilter = TypedEventFilter<LiquidityPositionRemovedEvent>;
export interface MaxCollateralLiquidityDecreasePerPeriodUpdatedEventObject {
    decreasePortion: BigNumber;
}
export declare type MaxCollateralLiquidityDecreasePerPeriodUpdatedEvent = TypedEvent<[
    BigNumber
], MaxCollateralLiquidityDecreasePerPeriodUpdatedEventObject>;
export declare type MaxCollateralLiquidityDecreasePerPeriodUpdatedEventFilter = TypedEventFilter<MaxCollateralLiquidityDecreasePerPeriodUpdatedEvent>;
export interface PoolAddedEventObject {
    pool: string;
    poolID: number;
    rewardsPortion: BigNumber;
}
export declare type PoolAddedEvent = TypedEvent<[
    string,
    number,
    BigNumber
], PoolAddedEventObject>;
export declare type PoolAddedEventFilter = TypedEventFilter<PoolAddedEvent>;
export interface PoolIncentiveUpdatedEventObject {
    poolID: number;
    incentive: BigNumber;
}
export declare type PoolIncentiveUpdatedEvent = TypedEvent<[
    number,
    BigNumber
], PoolIncentiveUpdatedEventObject>;
export declare type PoolIncentiveUpdatedEventFilter = TypedEventFilter<PoolIncentiveUpdatedEvent>;
export interface RewardsAccruedEventObject {
    count: BigNumber;
    periods: BigNumber;
}
export declare type RewardsAccruedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], RewardsAccruedEventObject>;
export declare type RewardsAccruedEventFilter = TypedEventFilter<RewardsAccruedEvent>;
export interface RewardsClaimedEventObject {
    caller: string;
    nftTokenID: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type RewardsClaimedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], RewardsClaimedEventObject>;
export declare type RewardsClaimedEventFilter = TypedEventFilter<RewardsClaimedEvent>;
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
export interface IRewards extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRewardsInterface;
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
        accrueRewards(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addIncentivePool(pool: PromiseOrValue<string>, rewardsPortion: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updatePoolIncentive(poolID: PromiseOrValue<BigNumberish>, incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    accrueRewards(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addIncentivePool(pool: PromiseOrValue<string>, rewardsPortion: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updatePoolIncentive(poolID: PromiseOrValue<BigNumberish>, incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accrueRewards(overrides?: CallOverrides): Promise<void>;
        addIncentivePool(pool: PromiseOrValue<string>, rewardsPortion: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        updatePoolIncentive(poolID: PromiseOrValue<BigNumberish>, incentive: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiquidityPositionCreated(address,uint16,uint256,int24,int24,uint128)"(owner?: PromiseOrValue<string> | null, poolID?: PromiseOrValue<BigNumberish> | null, nftID?: PromiseOrValue<BigNumberish> | null, tickLower?: null, tickUpper?: null, liquidity?: null): LiquidityPositionCreatedEventFilter;
        LiquidityPositionCreated(owner?: PromiseOrValue<string> | null, poolID?: PromiseOrValue<BigNumberish> | null, nftID?: PromiseOrValue<BigNumberish> | null, tickLower?: null, tickUpper?: null, liquidity?: null): LiquidityPositionCreatedEventFilter;
        "LiquidityPositionDecreased(uint256,uint256,uint256)"(nftID?: PromiseOrValue<BigNumberish> | null, amount0?: null, amount1?: null): LiquidityPositionDecreasedEventFilter;
        LiquidityPositionDecreased(nftID?: PromiseOrValue<BigNumberish> | null, amount0?: null, amount1?: null): LiquidityPositionDecreasedEventFilter;
        "LiquidityPositionIncreased(uint256,uint128)"(nftID?: PromiseOrValue<BigNumberish> | null, liquidity?: null): LiquidityPositionIncreasedEventFilter;
        LiquidityPositionIncreased(nftID?: PromiseOrValue<BigNumberish> | null, liquidity?: null): LiquidityPositionIncreasedEventFilter;
        "LiquidityPositionLiquidated(uint256,address)"(nftID?: PromiseOrValue<BigNumberish> | null, liquidator?: PromiseOrValue<string> | null): LiquidityPositionLiquidatedEventFilter;
        LiquidityPositionLiquidated(nftID?: PromiseOrValue<BigNumberish> | null, liquidator?: PromiseOrValue<string> | null): LiquidityPositionLiquidatedEventFilter;
        "LiquidityPositionRemoved(uint256,uint256,uint256)"(nftID?: PromiseOrValue<BigNumberish> | null, amount0?: null, amount1?: null): LiquidityPositionRemovedEventFilter;
        LiquidityPositionRemoved(nftID?: PromiseOrValue<BigNumberish> | null, amount0?: null, amount1?: null): LiquidityPositionRemovedEventFilter;
        "MaxCollateralLiquidityDecreasePerPeriodUpdated(uint64)"(decreasePortion?: null): MaxCollateralLiquidityDecreasePerPeriodUpdatedEventFilter;
        MaxCollateralLiquidityDecreasePerPeriodUpdated(decreasePortion?: null): MaxCollateralLiquidityDecreasePerPeriodUpdatedEventFilter;
        "PoolAdded(address,uint16,uint64)"(pool?: PromiseOrValue<string> | null, poolID?: PromiseOrValue<BigNumberish> | null, rewardsPortion?: null): PoolAddedEventFilter;
        PoolAdded(pool?: PromiseOrValue<string> | null, poolID?: PromiseOrValue<BigNumberish> | null, rewardsPortion?: null): PoolAddedEventFilter;
        "PoolIncentiveUpdated(uint16,uint64)"(poolID?: PromiseOrValue<BigNumberish> | null, incentive?: null): PoolIncentiveUpdatedEventFilter;
        PoolIncentiveUpdated(poolID?: PromiseOrValue<BigNumberish> | null, incentive?: null): PoolIncentiveUpdatedEventFilter;
        "RewardsAccrued(uint256,uint64)"(count?: null, periods?: null): RewardsAccruedEventFilter;
        RewardsAccrued(count?: null, periods?: null): RewardsAccruedEventFilter;
        "RewardsClaimed(address,uint256,uint256,uint256)"(caller?: PromiseOrValue<string> | null, nftTokenID?: PromiseOrValue<BigNumberish> | null, amount0?: null, amount1?: null): RewardsClaimedEventFilter;
        RewardsClaimed(caller?: PromiseOrValue<string> | null, nftTokenID?: PromiseOrValue<BigNumberish> | null, amount0?: null, amount1?: null): RewardsClaimedEventFilter;
        "RewardsDistributed(address,bool,uint256)"(account?: PromiseOrValue<string> | null, isKickback?: PromiseOrValue<boolean> | null, tcpRewards?: null): RewardsDistributedEventFilter;
        RewardsDistributed(account?: PromiseOrValue<string> | null, isKickback?: PromiseOrValue<boolean> | null, tcpRewards?: null): RewardsDistributedEventFilter;
    };
    estimateGas: {
        accrueRewards(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addIncentivePool(pool: PromiseOrValue<string>, rewardsPortion: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updatePoolIncentive(poolID: PromiseOrValue<BigNumberish>, incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accrueRewards(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addIncentivePool(pool: PromiseOrValue<string>, rewardsPortion: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updatePoolIncentive(poolID: PromiseOrValue<BigNumberish>, incentive: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
