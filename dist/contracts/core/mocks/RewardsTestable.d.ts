import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export declare namespace IRewards {
    type ConstructorParamsStruct = {
        Governor: string;
        ProtocolLock: string;
        Accounting: string;
        Weth: string;
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
        Weth: string;
    };
    type MinLiquidityByPeriodStruct = {
        period: BigNumberish;
        minLiquidity: BigNumberish;
    };
    type MinLiquidityByPeriodStructOutput = [BigNumber, BigNumber] & {
        period: BigNumber;
        minLiquidity: BigNumber;
    };
    type PoolConfigStruct = {
        pool: string;
        rewardsPortion: BigNumberish;
    };
    type PoolConfigStructOutput = [string, BigNumber] & {
        pool: string;
        rewardsPortion: BigNumber;
    };
}
export declare namespace IAccounting {
    type PoolPositionStruct = {
        owner: string;
        cumulativeLiquidity: BigNumberish;
        totalRewards: BigNumberish;
        lastBlockPositionIncreased: BigNumberish;
        liquidity: BigNumberish;
        lastTimeRewarded: BigNumberish;
        ui: BigNumberish;
        kickbackDestination: string;
        kickbackPortion: BigNumberish;
    };
    type PoolPositionStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string,
        BigNumber
    ] & {
        owner: string;
        cumulativeLiquidity: BigNumber;
        totalRewards: BigNumber;
        lastBlockPositionIncreased: BigNumber;
        liquidity: BigNumber;
        lastTimeRewarded: BigNumber;
        ui: number;
        kickbackDestination: string;
        kickbackPortion: BigNumber;
    };
    type RewardStatusStruct = {
        totalRewards: BigNumberish;
        cumulativeLiquidity: BigNumberish;
    };
    type RewardStatusStructOutput = [BigNumber, BigNumber] & {
        totalRewards: BigNumber;
        cumulativeLiquidity: BigNumber;
    };
}
export declare namespace Rewards {
    type RewardsDepositParamsStruct = {
        poolID: BigNumberish;
        amount0Desired: BigNumberish;
        amount1Desired: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
    };
    type RewardsDepositParamsStructOutput = [
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        poolID: number;
        amount0Desired: BigNumber;
        amount1Desired: BigNumber;
        amount0Min: BigNumber;
        amount1Min: BigNumber;
    };
    type RewardsWithdrawParamsStruct = {
        poolID: BigNumberish;
        liquidity: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
    };
    type RewardsWithdrawParamsStructOutput = [
        number,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        poolID: number;
        liquidity: BigNumber;
        amount0Min: BigNumber;
        amount1Min: BigNumber;
    };
}
export interface RewardsTestableInterface extends utils.Interface {
    functions: {
        "accounting()": FunctionFragment;
        "accrueRewards()": FunctionFragment;
        "addIncentivePool(address,uint64)": FunctionFragment;
        "calculateUpdatedLiquidityPosition((address,uint256,uint256,uint256,uint128,uint64,uint32,address,uint64),(uint256,uint256),uint64)": FunctionFragment;
        "claimAllRewards(uint16[],uint32)": FunctionFragment;
        "claimRewards(uint16,uint32)": FunctionFragment;
        "countPools()": FunctionFragment;
        "currentPeriod()": FunctionFragment;
        "deployer()": FunctionFragment;
        "deposit((uint16,uint256,uint256,uint256,uint256),uint32)": FunctionFragment;
        "firstPeriod()": FunctionFragment;
        "getMinLiquidityByPeriod(address)": FunctionFragment;
        "getPoolConfigForPoolID(uint16)": FunctionFragment;
        "governor()": FunctionFragment;
        "init(address)": FunctionFragment;
        "lastPeriodGlobalRewardsAccrued()": FunctionFragment;
        "maxCollateralLiquidityDecreasePerPeriod()": FunctionFragment;
        "minLiquidityByPeriod(address)": FunctionFragment;
        "periodLength()": FunctionFragment;
        "poolIDForPool(address)": FunctionFragment;
        "removeKickback(uint16)": FunctionFragment;
        "requireAuthorized(bool)": FunctionFragment;
        "setMaxCollateralLiquidityDecreasePerPeriod(uint64)": FunctionFragment;
        "stop()": FunctionFragment;
        "stopped()": FunctionFragment;
        "updatePoolIncentive(uint16,uint64)": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
        "weth()": FunctionFragment;
        "withdraw((uint16,uint128,uint256,uint256),uint32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accounting" | "accrueRewards" | "addIncentivePool" | "calculateUpdatedLiquidityPosition" | "claimAllRewards" | "claimRewards" | "countPools" | "currentPeriod" | "deployer" | "deposit" | "firstPeriod" | "getMinLiquidityByPeriod" | "getPoolConfigForPoolID" | "governor" | "init" | "lastPeriodGlobalRewardsAccrued" | "maxCollateralLiquidityDecreasePerPeriod" | "minLiquidityByPeriod" | "periodLength" | "poolIDForPool" | "removeKickback" | "requireAuthorized" | "setMaxCollateralLiquidityDecreasePerPeriod" | "stop" | "stopped" | "updatePoolIncentive" | "validUpdate" | "weth" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "accounting", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrueRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "addIncentivePool", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateUpdatedLiquidityPosition", values: [
        IAccounting.PoolPositionStruct,
        IAccounting.RewardStatusStruct,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "claimAllRewards", values: [BigNumberish[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "countPools", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [Rewards.RewardsDepositParamsStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "firstPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMinLiquidityByPeriod", values: [string]): string;
    encodeFunctionData(functionFragment: "getPoolConfigForPoolID", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values: [string]): string;
    encodeFunctionData(functionFragment: "lastPeriodGlobalRewardsAccrued", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxCollateralLiquidityDecreasePerPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "minLiquidityByPeriod", values: [string]): string;
    encodeFunctionData(functionFragment: "periodLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolIDForPool", values: [string]): string;
    encodeFunctionData(functionFragment: "removeKickback", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "requireAuthorized", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setMaxCollateralLiquidityDecreasePerPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "updatePoolIncentive", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [Rewards.RewardsWithdrawParamsStruct, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "accounting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrueRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addIncentivePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateUpdatedLiquidityPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAllRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "countPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinLiquidityByPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolConfigForPoolID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPeriodGlobalRewardsAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxCollateralLiquidityDecreasePerPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minLiquidityByPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolIDForPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeKickback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireAuthorized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxCollateralLiquidityDecreasePerPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePoolIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
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
        "Stopped()": EventFragment;
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
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
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
export interface StoppedEventObject {
}
export declare type StoppedEvent = TypedEvent<[], StoppedEventObject>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
export interface RewardsTestable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RewardsTestableInterface;
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
        accrueRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addIncentivePool(pool: string, rewardsPortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        calculateUpdatedLiquidityPosition(_pt: IAccounting.PoolPositionStruct, rs: IAccounting.RewardStatusStruct, timeNow: BigNumberish, overrides?: CallOverrides): Promise<[
            IAccounting.PoolPositionStructOutput,
            BigNumber
        ] & {
            pt: IAccounting.PoolPositionStructOutput;
            rewards: BigNumber;
        }>;
        claimAllRewards(poolIDs: BigNumberish[], ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimRewards(poolID: BigNumberish, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        countPools(overrides?: CallOverrides): Promise<[number]>;
        currentPeriod(overrides?: CallOverrides): Promise<[BigNumber] & {
            period: BigNumber;
        }>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        deposit(params: Rewards.RewardsDepositParamsStruct, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        getMinLiquidityByPeriod(pool: string, overrides?: CallOverrides): Promise<[IRewards.MinLiquidityByPeriodStructOutput]>;
        getPoolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<[IRewards.PoolConfigStructOutput]>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        init(_collateralPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lastPeriodGlobalRewardsAccrued(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxCollateralLiquidityDecreasePerPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        minLiquidityByPeriod(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            period: BigNumber;
            minLiquidity: BigNumber;
        }>;
        periodLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        poolIDForPool(arg0: string, overrides?: CallOverrides): Promise<[number]>;
        removeKickback(poolID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        requireAuthorized(authorized: boolean, overrides?: CallOverrides): Promise<[void]>;
        setMaxCollateralLiquidityDecreasePerPeriod(decreasePortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        updatePoolIncentive(poolID: BigNumberish, incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        weth(overrides?: CallOverrides): Promise<[string]>;
        withdraw(params: Rewards.RewardsWithdrawParamsStruct, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    accounting(overrides?: CallOverrides): Promise<string>;
    accrueRewards(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addIncentivePool(pool: string, rewardsPortion: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    calculateUpdatedLiquidityPosition(_pt: IAccounting.PoolPositionStruct, rs: IAccounting.RewardStatusStruct, timeNow: BigNumberish, overrides?: CallOverrides): Promise<[
        IAccounting.PoolPositionStructOutput,
        BigNumber
    ] & {
        pt: IAccounting.PoolPositionStructOutput;
        rewards: BigNumber;
    }>;
    claimAllRewards(poolIDs: BigNumberish[], ui: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimRewards(poolID: BigNumberish, ui: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    countPools(overrides?: CallOverrides): Promise<number>;
    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    deployer(overrides?: CallOverrides): Promise<string>;
    deposit(params: Rewards.RewardsDepositParamsStruct, ui: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    getMinLiquidityByPeriod(pool: string, overrides?: CallOverrides): Promise<IRewards.MinLiquidityByPeriodStructOutput>;
    getPoolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<IRewards.PoolConfigStructOutput>;
    governor(overrides?: CallOverrides): Promise<string>;
    init(_collateralPool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lastPeriodGlobalRewardsAccrued(overrides?: CallOverrides): Promise<BigNumber>;
    maxCollateralLiquidityDecreasePerPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    minLiquidityByPeriod(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        period: BigNumber;
        minLiquidity: BigNumber;
    }>;
    periodLength(overrides?: CallOverrides): Promise<BigNumber>;
    poolIDForPool(arg0: string, overrides?: CallOverrides): Promise<number>;
    removeKickback(poolID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    requireAuthorized(authorized: boolean, overrides?: CallOverrides): Promise<void>;
    setMaxCollateralLiquidityDecreasePerPeriod(decreasePortion: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    updatePoolIncentive(poolID: BigNumberish, incentive: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    weth(overrides?: CallOverrides): Promise<string>;
    withdraw(params: Rewards.RewardsWithdrawParamsStruct, ui: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accounting(overrides?: CallOverrides): Promise<string>;
        accrueRewards(overrides?: CallOverrides): Promise<void>;
        addIncentivePool(pool: string, rewardsPortion: BigNumberish, overrides?: CallOverrides): Promise<void>;
        calculateUpdatedLiquidityPosition(_pt: IAccounting.PoolPositionStruct, rs: IAccounting.RewardStatusStruct, timeNow: BigNumberish, overrides?: CallOverrides): Promise<[
            IAccounting.PoolPositionStructOutput,
            BigNumber
        ] & {
            pt: IAccounting.PoolPositionStructOutput;
            rewards: BigNumber;
        }>;
        claimAllRewards(poolIDs: BigNumberish[], ui: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claimRewards(poolID: BigNumberish, ui: BigNumberish, overrides?: CallOverrides): Promise<void>;
        countPools(overrides?: CallOverrides): Promise<number>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<string>;
        deposit(params: Rewards.RewardsDepositParamsStruct, ui: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            liquidity: BigNumber;
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        getMinLiquidityByPeriod(pool: string, overrides?: CallOverrides): Promise<IRewards.MinLiquidityByPeriodStructOutput>;
        getPoolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<IRewards.PoolConfigStructOutput>;
        governor(overrides?: CallOverrides): Promise<string>;
        init(_collateralPool: string, overrides?: CallOverrides): Promise<void>;
        lastPeriodGlobalRewardsAccrued(overrides?: CallOverrides): Promise<BigNumber>;
        maxCollateralLiquidityDecreasePerPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        minLiquidityByPeriod(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            period: BigNumber;
            minLiquidity: BigNumber;
        }>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        poolIDForPool(arg0: string, overrides?: CallOverrides): Promise<number>;
        removeKickback(poolID: BigNumberish, overrides?: CallOverrides): Promise<void>;
        requireAuthorized(authorized: boolean, overrides?: CallOverrides): Promise<void>;
        setMaxCollateralLiquidityDecreasePerPeriod(decreasePortion: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        updatePoolIncentive(poolID: BigNumberish, incentive: BigNumberish, overrides?: CallOverrides): Promise<void>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        weth(overrides?: CallOverrides): Promise<string>;
        withdraw(params: Rewards.RewardsWithdrawParamsStruct, ui: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    filters: {
        "LiquidityPositionCreated(address,uint16,uint256,int24,int24,uint128)"(owner?: string | null, poolID?: BigNumberish | null, nftID?: BigNumberish | null, tickLower?: null, tickUpper?: null, liquidity?: null): LiquidityPositionCreatedEventFilter;
        LiquidityPositionCreated(owner?: string | null, poolID?: BigNumberish | null, nftID?: BigNumberish | null, tickLower?: null, tickUpper?: null, liquidity?: null): LiquidityPositionCreatedEventFilter;
        "LiquidityPositionDecreased(uint256,uint256,uint256)"(nftID?: BigNumberish | null, amount0?: null, amount1?: null): LiquidityPositionDecreasedEventFilter;
        LiquidityPositionDecreased(nftID?: BigNumberish | null, amount0?: null, amount1?: null): LiquidityPositionDecreasedEventFilter;
        "LiquidityPositionIncreased(uint256,uint128)"(nftID?: BigNumberish | null, liquidity?: null): LiquidityPositionIncreasedEventFilter;
        LiquidityPositionIncreased(nftID?: BigNumberish | null, liquidity?: null): LiquidityPositionIncreasedEventFilter;
        "LiquidityPositionLiquidated(uint256,address)"(nftID?: BigNumberish | null, liquidator?: string | null): LiquidityPositionLiquidatedEventFilter;
        LiquidityPositionLiquidated(nftID?: BigNumberish | null, liquidator?: string | null): LiquidityPositionLiquidatedEventFilter;
        "LiquidityPositionRemoved(uint256,uint256,uint256)"(nftID?: BigNumberish | null, amount0?: null, amount1?: null): LiquidityPositionRemovedEventFilter;
        LiquidityPositionRemoved(nftID?: BigNumberish | null, amount0?: null, amount1?: null): LiquidityPositionRemovedEventFilter;
        "MaxCollateralLiquidityDecreasePerPeriodUpdated(uint64)"(decreasePortion?: null): MaxCollateralLiquidityDecreasePerPeriodUpdatedEventFilter;
        MaxCollateralLiquidityDecreasePerPeriodUpdated(decreasePortion?: null): MaxCollateralLiquidityDecreasePerPeriodUpdatedEventFilter;
        "PoolAdded(address,uint16,uint64)"(pool?: string | null, poolID?: BigNumberish | null, rewardsPortion?: null): PoolAddedEventFilter;
        PoolAdded(pool?: string | null, poolID?: BigNumberish | null, rewardsPortion?: null): PoolAddedEventFilter;
        "PoolIncentiveUpdated(uint16,uint64)"(poolID?: BigNumberish | null, incentive?: null): PoolIncentiveUpdatedEventFilter;
        PoolIncentiveUpdated(poolID?: BigNumberish | null, incentive?: null): PoolIncentiveUpdatedEventFilter;
        "RewardsAccrued(uint256,uint64)"(count?: null, periods?: null): RewardsAccruedEventFilter;
        RewardsAccrued(count?: null, periods?: null): RewardsAccruedEventFilter;
        "RewardsClaimed(address,uint256,uint256,uint256)"(caller?: string | null, nftTokenID?: BigNumberish | null, amount0?: null, amount1?: null): RewardsClaimedEventFilter;
        RewardsClaimed(caller?: string | null, nftTokenID?: BigNumberish | null, amount0?: null, amount1?: null): RewardsClaimedEventFilter;
        "RewardsDistributed(address,bool,uint256)"(account?: string | null, isKickback?: boolean | null, tcpRewards?: null): RewardsDistributedEventFilter;
        RewardsDistributed(account?: string | null, isKickback?: boolean | null, tcpRewards?: null): RewardsDistributedEventFilter;
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
    };
    estimateGas: {
        accounting(overrides?: CallOverrides): Promise<BigNumber>;
        accrueRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addIncentivePool(pool: string, rewardsPortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        calculateUpdatedLiquidityPosition(_pt: IAccounting.PoolPositionStruct, rs: IAccounting.RewardStatusStruct, timeNow: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimAllRewards(poolIDs: BigNumberish[], ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimRewards(poolID: BigNumberish, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        countPools(overrides?: CallOverrides): Promise<BigNumber>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(params: Rewards.RewardsDepositParamsStruct, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        getMinLiquidityByPeriod(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        init(_collateralPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lastPeriodGlobalRewardsAccrued(overrides?: CallOverrides): Promise<BigNumber>;
        maxCollateralLiquidityDecreasePerPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        minLiquidityByPeriod(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        poolIDForPool(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeKickback(poolID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        requireAuthorized(authorized: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        setMaxCollateralLiquidityDecreasePerPeriod(decreasePortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        updatePoolIncentive(poolID: BigNumberish, incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(params: Rewards.RewardsWithdrawParamsStruct, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accounting(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrueRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addIncentivePool(pool: string, rewardsPortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        calculateUpdatedLiquidityPosition(_pt: IAccounting.PoolPositionStruct, rs: IAccounting.RewardStatusStruct, timeNow: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimAllRewards(poolIDs: BigNumberish[], ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimRewards(poolID: BigNumberish, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        countPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(params: Rewards.RewardsDepositParamsStruct, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMinLiquidityByPeriod(pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(_collateralPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lastPeriodGlobalRewardsAccrued(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxCollateralLiquidityDecreasePerPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minLiquidityByPeriod(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolIDForPool(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeKickback(poolID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        requireAuthorized(authorized: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setMaxCollateralLiquidityDecreasePerPeriod(decreasePortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updatePoolIncentive(poolID: BigNumberish, incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(params: Rewards.RewardsWithdrawParamsStruct, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
