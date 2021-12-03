import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    Governor: string;
    ProtocolLock: string;
    Accounting: string;
    Weth: string;
    NftPositionManager: string;
    UniswapV3Factory: string;
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
    Accounting: string;
    Weth: string;
    NftPositionManager: string;
    UniswapV3Factory: string;
};
export declare type MintParamsStruct = {
    token0: string;
    token1: string;
    fee: BigNumberish;
    tickLower: BigNumberish;
    tickUpper: BigNumberish;
    amount0Desired: BigNumberish;
    amount1Desired: BigNumberish;
    amount0Min: BigNumberish;
    amount1Min: BigNumberish;
    recipient: string;
    deadline: BigNumberish;
};
export declare type MintParamsStructOutput = [
    string,
    string,
    number,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber
] & {
    token0: string;
    token1: string;
    fee: number;
    tickLower: number;
    tickUpper: number;
    amount0Desired: BigNumber;
    amount1Desired: BigNumber;
    amount0Min: BigNumber;
    amount1Min: BigNumber;
    recipient: string;
    deadline: BigNumber;
};
export declare type DecreaseLiquidityParamsStruct = {
    tokenId: BigNumberish;
    liquidity: BigNumberish;
    amount0Min: BigNumberish;
    amount1Min: BigNumberish;
    deadline: BigNumberish;
};
export declare type DecreaseLiquidityParamsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    tokenId: BigNumber;
    liquidity: BigNumber;
    amount0Min: BigNumber;
    amount1Min: BigNumber;
    deadline: BigNumber;
};
export declare type IncreaseLiquidityParamsStruct = {
    tokenId: BigNumberish;
    amount0Desired: BigNumberish;
    amount1Desired: BigNumberish;
    amount0Min: BigNumberish;
    amount1Min: BigNumberish;
    deadline: BigNumberish;
};
export declare type IncreaseLiquidityParamsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    tokenId: BigNumber;
    amount0Desired: BigNumber;
    amount1Desired: BigNumber;
    amount0Min: BigNumber;
    amount1Min: BigNumber;
    deadline: BigNumber;
};
export interface RewardsInterface extends utils.Interface {
    functions: {
        "accounting()": FunctionFragment;
        "accrueRewards()": FunctionFragment;
        "addIncentivePool(address,uint64)": FunctionFragment;
        "claimRewards(uint256,uint32)": FunctionFragment;
        "countPools()": FunctionFragment;
        "createLiquidityPosition((address,address,uint24,int24,int24,uint256,uint256,uint256,uint256,address,uint256),uint32)": FunctionFragment;
        "currentPeriod()": FunctionFragment;
        "decreaseLiquidityPosition((uint256,uint128,uint256,uint256,uint256),uint32)": FunctionFragment;
        "deployer()": FunctionFragment;
        "firstPeriod()": FunctionFragment;
        "governor()": FunctionFragment;
        "increaseLiquidityPosition((uint256,uint256,uint256,uint256,uint256,uint256),uint32)": FunctionFragment;
        "init(address,address)": FunctionFragment;
        "lastPeriodGlobalRewardsAccrued()": FunctionFragment;
        "liquidateOutofRangePositions(address,uint256[])": FunctionFragment;
        "liquidationPenalty()": FunctionFragment;
        "maxCollateralLiquidityDecreasePerPeriod()": FunctionFragment;
        "minCollateralLiquidityByPeriod(address)": FunctionFragment;
        "minHueCountPerPosition()": FunctionFragment;
        "nftPositionManager()": FunctionFragment;
        "periodLength()": FunctionFragment;
        "poolConfigForPoolID(uint16)": FunctionFragment;
        "poolIDForPool(address)": FunctionFragment;
        "removeKickback(uint256)": FunctionFragment;
        "removeLiquidityPosition((uint256,uint128,uint256,uint256,uint256))": FunctionFragment;
        "setLiquidationPenalty(uint64)": FunctionFragment;
        "setMaxCollateralLiquidityDecreasePerPeriod(uint64)": FunctionFragment;
        "setMinHueCountPerPosition(uint128)": FunctionFragment;
        "setTwapDuration(uint32)": FunctionFragment;
        "stop()": FunctionFragment;
        "stopped()": FunctionFragment;
        "twapDuration()": FunctionFragment;
        "uniswapV3Factory()": FunctionFragment;
        "updatePoolIncentive(uint16,uint64)": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
        "weth()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accounting", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrueRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "addIncentivePool", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "countPools", values?: undefined): string;
    encodeFunctionData(functionFragment: "createLiquidityPosition", values: [MintParamsStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "currentPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseLiquidityPosition", values: [DecreaseLiquidityParamsStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "firstPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseLiquidityPosition", values: [IncreaseLiquidityParamsStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "init", values: [string, string]): string;
    encodeFunctionData(functionFragment: "lastPeriodGlobalRewardsAccrued", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidateOutofRangePositions", values: [string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "liquidationPenalty", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxCollateralLiquidityDecreasePerPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "minCollateralLiquidityByPeriod", values: [string]): string;
    encodeFunctionData(functionFragment: "minHueCountPerPosition", values?: undefined): string;
    encodeFunctionData(functionFragment: "nftPositionManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolConfigForPoolID", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "poolIDForPool", values: [string]): string;
    encodeFunctionData(functionFragment: "removeKickback", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeLiquidityPosition", values: [DecreaseLiquidityParamsStruct]): string;
    encodeFunctionData(functionFragment: "setLiquidationPenalty", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxCollateralLiquidityDecreasePerPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMinHueCountPerPosition", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setTwapDuration", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "twapDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "uniswapV3Factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "updatePoolIncentive", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    decodeFunctionResult(functionFragment: "accounting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrueRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addIncentivePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "countPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createLiquidityPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseLiquidityPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseLiquidityPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPeriodGlobalRewardsAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateOutofRangePositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationPenalty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxCollateralLiquidityDecreasePerPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minCollateralLiquidityByPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minHueCountPerPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nftPositionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolConfigForPoolID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolIDForPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeKickback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidationPenalty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxCollateralLiquidityDecreasePerPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinHueCountPerPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTwapDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "twapDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3Factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePoolIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    events: {
        "LiquidationPenaltyUpdated(uint64)": EventFragment;
        "LiquidityPositionCreated(address,uint16,uint256,int24,int24,uint128)": EventFragment;
        "LiquidityPositionDecreased(uint256,uint256,uint256)": EventFragment;
        "LiquidityPositionIncreased(uint256,uint128)": EventFragment;
        "LiquidityPositionLiquidated(uint256,address)": EventFragment;
        "LiquidityPositionRemoved(uint256,uint256,uint256)": EventFragment;
        "MaxCollateralLiquidityDecreasePerPeriodUpdated(uint64)": EventFragment;
        "MinHueCountPerPositionUpdated(uint128)": EventFragment;
        "PoolAdded(address,uint16,uint64)": EventFragment;
        "PoolIncentiveUpdated(uint16,uint64)": EventFragment;
        "RewardsAccrued(uint256,uint64)": EventFragment;
        "RewardsClaimed(address,uint256,uint256,uint256)": EventFragment;
        "RewardsDistributed(address,bool,uint256)": EventFragment;
        "Stopped()": EventFragment;
        "TwapDurationUpdated(uint64)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiquidationPenaltyUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityPositionCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityPositionDecreased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityPositionIncreased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityPositionLiquidated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityPositionRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxCollateralLiquidityDecreasePerPeriodUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinHueCountPerPositionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolIncentiveUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsAccrued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsDistributed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TwapDurationUpdated"): EventFragment;
}
export declare type LiquidationPenaltyUpdatedEvent = TypedEvent<[
    BigNumber
], {
    penalty: BigNumber;
}>;
export declare type LiquidationPenaltyUpdatedEventFilter = TypedEventFilter<LiquidationPenaltyUpdatedEvent>;
export declare type LiquidityPositionCreatedEvent = TypedEvent<[
    string,
    number,
    BigNumber,
    number,
    number,
    BigNumber
], {
    owner: string;
    poolID: number;
    nftID: BigNumber;
    tickLower: number;
    tickUpper: number;
    liquidity: BigNumber;
}>;
export declare type LiquidityPositionCreatedEventFilter = TypedEventFilter<LiquidityPositionCreatedEvent>;
export declare type LiquidityPositionDecreasedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], {
    nftID: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
}>;
export declare type LiquidityPositionDecreasedEventFilter = TypedEventFilter<LiquidityPositionDecreasedEvent>;
export declare type LiquidityPositionIncreasedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    nftID: BigNumber;
    liquidity: BigNumber;
}>;
export declare type LiquidityPositionIncreasedEventFilter = TypedEventFilter<LiquidityPositionIncreasedEvent>;
export declare type LiquidityPositionLiquidatedEvent = TypedEvent<[
    BigNumber,
    string
], {
    nftID: BigNumber;
    liquidator: string;
}>;
export declare type LiquidityPositionLiquidatedEventFilter = TypedEventFilter<LiquidityPositionLiquidatedEvent>;
export declare type LiquidityPositionRemovedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], {
    nftID: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
}>;
export declare type LiquidityPositionRemovedEventFilter = TypedEventFilter<LiquidityPositionRemovedEvent>;
export declare type MaxCollateralLiquidityDecreasePerPeriodUpdatedEvent = TypedEvent<[
    BigNumber
], {
    decreasePortion: BigNumber;
}>;
export declare type MaxCollateralLiquidityDecreasePerPeriodUpdatedEventFilter = TypedEventFilter<MaxCollateralLiquidityDecreasePerPeriodUpdatedEvent>;
export declare type MinHueCountPerPositionUpdatedEvent = TypedEvent<[
    BigNumber
], {
    min: BigNumber;
}>;
export declare type MinHueCountPerPositionUpdatedEventFilter = TypedEventFilter<MinHueCountPerPositionUpdatedEvent>;
export declare type PoolAddedEvent = TypedEvent<[
    string,
    number,
    BigNumber
], {
    pool: string;
    poolID: number;
    rewardsPortion: BigNumber;
}>;
export declare type PoolAddedEventFilter = TypedEventFilter<PoolAddedEvent>;
export declare type PoolIncentiveUpdatedEvent = TypedEvent<[
    number,
    BigNumber
], {
    poolID: number;
    incentive: BigNumber;
}>;
export declare type PoolIncentiveUpdatedEventFilter = TypedEventFilter<PoolIncentiveUpdatedEvent>;
export declare type RewardsAccruedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    count: BigNumber;
    periods: BigNumber;
}>;
export declare type RewardsAccruedEventFilter = TypedEventFilter<RewardsAccruedEvent>;
export declare type RewardsClaimedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], {
    caller: string;
    nftTokenID: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
}>;
export declare type RewardsClaimedEventFilter = TypedEventFilter<RewardsClaimedEvent>;
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
    BigNumber
], {
    duration: BigNumber;
}>;
export declare type TwapDurationUpdatedEventFilter = TypedEventFilter<TwapDurationUpdatedEvent>;
export interface Rewards extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RewardsInterface;
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
        claimRewards(nftTokenID: BigNumberish, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        countPools(overrides?: CallOverrides): Promise<[number]>;
        createLiquidityPosition(params: MintParamsStruct, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        currentPeriod(overrides?: CallOverrides): Promise<[BigNumber] & {
            period: BigNumber;
        }>;
        decreaseLiquidityPosition(params: DecreaseLiquidityParamsStruct, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        firstPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        increaseLiquidityPosition(params: IncreaseLiquidityParamsStruct, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        init(_collateralPool: string, _protocolPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lastPeriodGlobalRewardsAccrued(overrides?: CallOverrides): Promise<[BigNumber]>;
        liquidateOutofRangePositions(pool: string, nftTokenIDs: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        liquidationPenalty(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxCollateralLiquidityDecreasePerPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        minCollateralLiquidityByPeriod(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            period: BigNumber;
            minLiquidity: BigNumber;
        }>;
        minHueCountPerPosition(overrides?: CallOverrides): Promise<[BigNumber]>;
        nftPositionManager(overrides?: CallOverrides): Promise<[string]>;
        periodLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        poolConfigForPoolID(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            pool: string;
            rewardsPortion: BigNumber;
        }>;
        poolIDForPool(arg0: string, overrides?: CallOverrides): Promise<[number]>;
        removeKickback(nftTokenID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityPosition(params: DecreaseLiquidityParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLiquidationPenalty(penalty: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxCollateralLiquidityDecreasePerPeriod(decreasePortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinHueCountPerPosition(min: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTwapDuration(duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        twapDuration(overrides?: CallOverrides): Promise<[number]>;
        uniswapV3Factory(overrides?: CallOverrides): Promise<[string]>;
        updatePoolIncentive(poolID: BigNumberish, incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        weth(overrides?: CallOverrides): Promise<[string]>;
    };
    accounting(overrides?: CallOverrides): Promise<string>;
    accrueRewards(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addIncentivePool(pool: string, rewardsPortion: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimRewards(nftTokenID: BigNumberish, ui: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    countPools(overrides?: CallOverrides): Promise<number>;
    createLiquidityPosition(params: MintParamsStruct, ui: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    decreaseLiquidityPosition(params: DecreaseLiquidityParamsStruct, ui: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deployer(overrides?: CallOverrides): Promise<string>;
    firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    governor(overrides?: CallOverrides): Promise<string>;
    increaseLiquidityPosition(params: IncreaseLiquidityParamsStruct, ui: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    init(_collateralPool: string, _protocolPool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lastPeriodGlobalRewardsAccrued(overrides?: CallOverrides): Promise<BigNumber>;
    liquidateOutofRangePositions(pool: string, nftTokenIDs: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    liquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;
    maxCollateralLiquidityDecreasePerPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    minCollateralLiquidityByPeriod(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        period: BigNumber;
        minLiquidity: BigNumber;
    }>;
    minHueCountPerPosition(overrides?: CallOverrides): Promise<BigNumber>;
    nftPositionManager(overrides?: CallOverrides): Promise<string>;
    periodLength(overrides?: CallOverrides): Promise<BigNumber>;
    poolConfigForPoolID(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber] & {
        pool: string;
        rewardsPortion: BigNumber;
    }>;
    poolIDForPool(arg0: string, overrides?: CallOverrides): Promise<number>;
    removeKickback(nftTokenID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityPosition(params: DecreaseLiquidityParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLiquidationPenalty(penalty: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxCollateralLiquidityDecreasePerPeriod(decreasePortion: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinHueCountPerPosition(min: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTwapDuration(duration: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    twapDuration(overrides?: CallOverrides): Promise<number>;
    uniswapV3Factory(overrides?: CallOverrides): Promise<string>;
    updatePoolIncentive(poolID: BigNumberish, incentive: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    weth(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        accounting(overrides?: CallOverrides): Promise<string>;
        accrueRewards(overrides?: CallOverrides): Promise<void>;
        addIncentivePool(pool: string, rewardsPortion: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claimRewards(nftTokenID: BigNumberish, ui: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        countPools(overrides?: CallOverrides): Promise<number>;
        createLiquidityPosition(params: MintParamsStruct, ui: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nftTokenID: BigNumber;
            liquidity: BigNumber;
        }>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseLiquidityPosition(params: DecreaseLiquidityParamsStruct, ui: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        deployer(overrides?: CallOverrides): Promise<string>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<string>;
        increaseLiquidityPosition(params: IncreaseLiquidityParamsStruct, ui: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        init(_collateralPool: string, _protocolPool: string, overrides?: CallOverrides): Promise<void>;
        lastPeriodGlobalRewardsAccrued(overrides?: CallOverrides): Promise<BigNumber>;
        liquidateOutofRangePositions(pool: string, nftTokenIDs: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        liquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;
        maxCollateralLiquidityDecreasePerPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        minCollateralLiquidityByPeriod(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            period: BigNumber;
            minLiquidity: BigNumber;
        }>;
        minHueCountPerPosition(overrides?: CallOverrides): Promise<BigNumber>;
        nftPositionManager(overrides?: CallOverrides): Promise<string>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        poolConfigForPoolID(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            pool: string;
            rewardsPortion: BigNumber;
        }>;
        poolIDForPool(arg0: string, overrides?: CallOverrides): Promise<number>;
        removeKickback(nftTokenID: BigNumberish, overrides?: CallOverrides): Promise<void>;
        removeLiquidityPosition(params: DecreaseLiquidityParamsStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        setLiquidationPenalty(penalty: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxCollateralLiquidityDecreasePerPeriod(decreasePortion: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMinHueCountPerPosition(min: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setTwapDuration(duration: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        twapDuration(overrides?: CallOverrides): Promise<number>;
        uniswapV3Factory(overrides?: CallOverrides): Promise<string>;
        updatePoolIncentive(poolID: BigNumberish, incentive: BigNumberish, overrides?: CallOverrides): Promise<void>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        weth(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "LiquidationPenaltyUpdated(uint64)"(penalty?: null): LiquidationPenaltyUpdatedEventFilter;
        LiquidationPenaltyUpdated(penalty?: null): LiquidationPenaltyUpdatedEventFilter;
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
        "MinHueCountPerPositionUpdated(uint128)"(min?: null): MinHueCountPerPositionUpdatedEventFilter;
        MinHueCountPerPositionUpdated(min?: null): MinHueCountPerPositionUpdatedEventFilter;
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
        "TwapDurationUpdated(uint64)"(duration?: null): TwapDurationUpdatedEventFilter;
        TwapDurationUpdated(duration?: null): TwapDurationUpdatedEventFilter;
    };
    estimateGas: {
        accounting(overrides?: CallOverrides): Promise<BigNumber>;
        accrueRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addIncentivePool(pool: string, rewardsPortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimRewards(nftTokenID: BigNumberish, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        countPools(overrides?: CallOverrides): Promise<BigNumber>;
        createLiquidityPosition(params: MintParamsStruct, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseLiquidityPosition(params: DecreaseLiquidityParamsStruct, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        increaseLiquidityPosition(params: IncreaseLiquidityParamsStruct, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        init(_collateralPool: string, _protocolPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lastPeriodGlobalRewardsAccrued(overrides?: CallOverrides): Promise<BigNumber>;
        liquidateOutofRangePositions(pool: string, nftTokenIDs: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        liquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;
        maxCollateralLiquidityDecreasePerPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        minCollateralLiquidityByPeriod(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        minHueCountPerPosition(overrides?: CallOverrides): Promise<BigNumber>;
        nftPositionManager(overrides?: CallOverrides): Promise<BigNumber>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        poolConfigForPoolID(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        poolIDForPool(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeKickback(nftTokenID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeLiquidityPosition(params: DecreaseLiquidityParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLiquidationPenalty(penalty: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxCollateralLiquidityDecreasePerPeriod(decreasePortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinHueCountPerPosition(min: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTwapDuration(duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        twapDuration(overrides?: CallOverrides): Promise<BigNumber>;
        uniswapV3Factory(overrides?: CallOverrides): Promise<BigNumber>;
        updatePoolIncentive(poolID: BigNumberish, incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accounting(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrueRewards(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addIncentivePool(pool: string, rewardsPortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimRewards(nftTokenID: BigNumberish, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        countPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createLiquidityPosition(params: MintParamsStruct, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        currentPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseLiquidityPosition(params: DecreaseLiquidityParamsStruct, ui: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseLiquidityPosition(params: IncreaseLiquidityParamsStruct, ui: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        init(_collateralPool: string, _protocolPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lastPeriodGlobalRewardsAccrued(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidateOutofRangePositions(pool: string, nftTokenIDs: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        liquidationPenalty(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxCollateralLiquidityDecreasePerPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minCollateralLiquidityByPeriod(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minHueCountPerPosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nftPositionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolConfigForPoolID(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolIDForPool(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeKickback(nftTokenID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityPosition(params: DecreaseLiquidityParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidationPenalty(penalty: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxCollateralLiquidityDecreasePerPeriod(decreasePortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinHueCountPerPosition(min: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTwapDuration(duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        twapDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uniswapV3Factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updatePoolIncentive(poolID: BigNumberish, incentive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
