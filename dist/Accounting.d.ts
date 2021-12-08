import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    Governor: string;
    Hue: string;
    NftPositionManager: string;
};
export declare type ConstructorParamsStructOutput = [string, string, string] & {
    Governor: string;
    Hue: string;
    NftPositionManager: string;
};
export declare type PoolPositionStruct = {
    owner: string;
    poolID: BigNumberish;
    cumulativeLiquidity: BigNumberish;
    totalRewards: BigNumberish;
    lastBlockPositionIncreased: BigNumberish;
    liquidity: BigNumberish;
    lastTimeRewarded: BigNumberish;
    tickLower: BigNumberish;
    tickUpper: BigNumberish;
    ui: BigNumberish;
    kickbackDestination: string;
    kickbackPortion: BigNumberish;
};
export declare type PoolPositionStructOutput = [
    string,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    string,
    BigNumber
] & {
    owner: string;
    poolID: number;
    cumulativeLiquidity: BigNumber;
    totalRewards: BigNumber;
    lastBlockPositionIncreased: BigNumber;
    liquidity: BigNumber;
    lastTimeRewarded: BigNumber;
    tickLower: number;
    tickUpper: number;
    ui: number;
    kickbackDestination: string;
    kickbackPortion: BigNumber;
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
export declare type RewardStatusStruct = {
    totalRewards: BigNumberish;
    cumulativeLiquidity: BigNumberish;
};
export declare type RewardStatusStructOutput = [BigNumber, BigNumber] & {
    totalRewards: BigNumber;
    cumulativeLiquidity: BigNumber;
};
export declare type SystemDebtInfoStruct = {
    debt: BigNumberish;
    totalTCPRewards: BigNumberish;
    cumulativeDebt: BigNumberish;
    debtExchangeRate: BigNumberish;
};
export declare type SystemDebtInfoStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    debt: BigNumber;
    totalTCPRewards: BigNumber;
    cumulativeDebt: BigNumber;
    debtExchangeRate: BigNumber;
};
export declare type UserInterfaceStruct = {
    kickbackDestination: string;
    kickbackPortion: BigNumberish;
    governanceRating: BigNumberish;
    tags: BigNumberish;
    ipfsHash: string;
};
export declare type UserInterfaceStructOutput = [
    string,
    BigNumber,
    number,
    number,
    string
] & {
    kickbackDestination: string;
    kickbackPortion: BigNumber;
    governanceRating: number;
    tags: number;
    ipfsHash: string;
};
export interface AccountingInterface extends utils.Interface {
    functions: {
        "TICK_SPACING()": FunctionFragment;
        "addPositionToIndex(address,uint256)": FunctionFragment;
        "approveUIs(uint32[])": FunctionFragment;
        "debt()": FunctionFragment;
        "debtPositionIndexingEnabled()": FunctionFragment;
        "decreaseDebt(uint256)": FunctionFragment;
        "decreasePoolLiquidity(address,uint256)": FunctionFragment;
        "deletePoolPosition(uint256)": FunctionFragment;
        "deployer()": FunctionFragment;
        "disapproveUIs(uint32[])": FunctionFragment;
        "getBasicPositionInfo(uint64)": FunctionFragment;
        "getPoolPosition(uint256)": FunctionFragment;
        "getPoolPositionNftIdsByOwner(address)": FunctionFragment;
        "getPosition(uint64)": FunctionFragment;
        "getRewardStatus(address)": FunctionFragment;
        "getSystemDebtInfo()": FunctionFragment;
        "getTick(uint256,uint256)": FunctionFragment;
        "getUIs(uint32,uint32)": FunctionFragment;
        "governor()": FunctionFragment;
        "hue()": FunctionFragment;
        "increaseDebt(uint256)": FunctionFragment;
        "increaseLentHue(uint256)": FunctionFragment;
        "increasePoolLiquidity(address,uint256)": FunctionFragment;
        "init()": FunctionFragment;
        "initializeUI(uint32,string)": FunctionFragment;
        "lentHue()": FunctionFragment;
        "nextUserInterfaceID()": FunctionFragment;
        "nftPositionManager()": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "onRewardsUpgrade(address)": FunctionFragment;
        "poolLiquidity(address)": FunctionFragment;
        "poolPositionIndexingEnabled()": FunctionFragment;
        "positionsForTick(int24)": FunctionFragment;
        "registerUI(uint64,uint24)": FunctionFragment;
        "sendCollateral(address,uint256)": FunctionFragment;
        "sendLentHue(address,uint256)": FunctionFragment;
        "setPoolPosition(uint256,(address,uint16,uint256,uint256,uint256,uint128,uint64,int24,int24,uint32,address,uint64))": FunctionFragment;
        "setPosition(uint64,(uint256,uint256,uint256,uint256,uint256,uint64,uint64,int24,bool,uint64,uint32,address,uint64))": FunctionFragment;
        "setRewardStatus(address,(uint256,uint256))": FunctionFragment;
        "setSystemDebtInfo((uint256,uint256,uint256,uint256))": FunctionFragment;
        "snapRawTickToSpacing(int24,int24)": FunctionFragment;
        "stopIndexingDebtPositions()": FunctionFragment;
        "stopIndexingPoolPositions()": FunctionFragment;
        "stopped()": FunctionFragment;
        "sweepHue()": FunctionFragment;
        "userInterfaces(uint256)": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "TICK_SPACING", values?: undefined): string;
    encodeFunctionData(functionFragment: "addPositionToIndex", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "approveUIs", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "debt", values?: undefined): string;
    encodeFunctionData(functionFragment: "debtPositionIndexingEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseDebt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "decreasePoolLiquidity", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deletePoolPosition", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "disapproveUIs", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getBasicPositionInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPoolPosition", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPoolPositionNftIdsByOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "getPosition", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRewardStatus", values: [string]): string;
    encodeFunctionData(functionFragment: "getSystemDebtInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTick", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getUIs", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "hue", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseDebt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseLentHue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "increasePoolLiquidity", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "init", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeUI", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "lentHue", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextUserInterfaceID", values?: undefined): string;
    encodeFunctionData(functionFragment: "nftPositionManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onRewardsUpgrade", values: [string]): string;
    encodeFunctionData(functionFragment: "poolLiquidity", values: [string]): string;
    encodeFunctionData(functionFragment: "poolPositionIndexingEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionsForTick", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "registerUI", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendCollateral", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendLentHue", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPoolPosition", values: [BigNumberish, PoolPositionStruct]): string;
    encodeFunctionData(functionFragment: "setPosition", values: [BigNumberish, DebtPositionStruct]): string;
    encodeFunctionData(functionFragment: "setRewardStatus", values: [string, RewardStatusStruct]): string;
    encodeFunctionData(functionFragment: "setSystemDebtInfo", values: [SystemDebtInfoStruct]): string;
    encodeFunctionData(functionFragment: "snapRawTickToSpacing", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "stopIndexingDebtPositions", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopIndexingPoolPositions", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "sweepHue", values?: undefined): string;
    encodeFunctionData(functionFragment: "userInterfaces", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "TICK_SPACING", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPositionToIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveUIs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debtPositionIndexingEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreasePoolLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deletePoolPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disapproveUIs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBasicPositionInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolPositionNftIdsByOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSystemDebtInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUIs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseLentHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increasePoolLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeUI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lentHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextUserInterfaceID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nftPositionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onRewardsUpgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolPositionIndexingEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionsForTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerUI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendLentHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRewardStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSystemDebtInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "snapRawTickToSpacing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopIndexingDebtPositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopIndexingPoolPositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userInterfaces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
    events: {
        "DebtPositionIndexingDisabled()": EventFragment;
        "PoolPositionIndexingDisabled()": EventFragment;
        "Stopped()": EventFragment;
        "UIInitialized(uint32,address,string)": EventFragment;
        "UIRegistered(uint32,address,uint24,uint256)": EventFragment;
        "UIsApproved(uint32[])": EventFragment;
        "UIsDisapproved(uint32[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DebtPositionIndexingDisabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolPositionIndexingDisabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UIInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UIRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UIsApproved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UIsDisapproved"): EventFragment;
}
export declare type DebtPositionIndexingDisabledEvent = TypedEvent<[], {}>;
export declare type DebtPositionIndexingDisabledEventFilter = TypedEventFilter<DebtPositionIndexingDisabledEvent>;
export declare type PoolPositionIndexingDisabledEvent = TypedEvent<[], {}>;
export declare type PoolPositionIndexingDisabledEventFilter = TypedEventFilter<PoolPositionIndexingDisabledEvent>;
export declare type StoppedEvent = TypedEvent<[], {}>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
export declare type UIInitializedEvent = TypedEvent<[
    number,
    string,
    string
], {
    interfaceID: number;
    kickbackDestination: string;
    ipfsHash: string;
}>;
export declare type UIInitializedEventFilter = TypedEventFilter<UIInitializedEvent>;
export declare type UIRegisteredEvent = TypedEvent<[
    number,
    string,
    number,
    BigNumber
], {
    interfaceID: number;
    kickbackDestination: string;
    tags: number;
    kickbackPortion: BigNumber;
}>;
export declare type UIRegisteredEventFilter = TypedEventFilter<UIRegisteredEvent>;
export declare type UIsApprovedEvent = TypedEvent<[number[]], {
    uis: number[];
}>;
export declare type UIsApprovedEventFilter = TypedEventFilter<UIsApprovedEvent>;
export declare type UIsDisapprovedEvent = TypedEvent<[number[]], {
    uis: number[];
}>;
export declare type UIsDisapprovedEventFilter = TypedEventFilter<UIsDisapprovedEvent>;
export interface Accounting extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AccountingInterface;
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
        TICK_SPACING(overrides?: CallOverrides): Promise<[number]>;
        addPositionToIndex(owner: string, nftID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveUIs(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        debt(overrides?: CallOverrides): Promise<[BigNumber]>;
        debtPositionIndexingEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        decreaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decreasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deletePoolPosition(nftID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        disapproveUIs(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getBasicPositionInfo(positionID: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            debtCount: BigNumber;
            collateralCount: BigNumber;
        }>;
        getPoolPosition(nftID: BigNumberish, overrides?: CallOverrides): Promise<[PoolPositionStructOutput] & {
            pp: PoolPositionStructOutput;
        }>;
        getPoolPositionNftIdsByOwner(owner: string, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<[DebtPositionStructOutput] & {
            dp: DebtPositionStructOutput;
        }>;
        getRewardStatus(pool: string, overrides?: CallOverrides): Promise<[RewardStatusStructOutput]>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<[SystemDebtInfoStructOutput]>;
        getTick(collateralCount: BigNumberish, debtCount: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        getUIs(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<[
            UserInterfaceStructOutput[]
        ] & {
            uis: UserInterfaceStructOutput[];
        }>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        hue(overrides?: CallOverrides): Promise<[string]>;
        increaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increaseLentHue(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializeUI(interfaceID: BigNumberish, ipfsHash: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lentHue(overrides?: CallOverrides): Promise<[BigNumber]>;
        nextUserInterfaceID(overrides?: CallOverrides): Promise<[number]>;
        nftPositionManager(overrides?: CallOverrides): Promise<[string]>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        onRewardsUpgrade(newRewards: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        poolLiquidity(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        poolPositionIndexingEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        positionsForTick(tick: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        registerUI(kickbackPortion: BigNumberish, tags: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendCollateral(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendLentHue(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPoolPosition(nftID: BigNumberish, pp: PoolPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPosition(positionID: BigNumberish, dp: DebtPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRewardStatus(pool: string, rs: RewardStatusStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSystemDebtInfo(_sdi: SystemDebtInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        snapRawTickToSpacing(rawTick: BigNumberish, tickSpacing: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        stopIndexingDebtPositions(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stopIndexingPoolPositions(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        sweepHue(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        userInterfaces(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            number,
            number,
            string
        ] & {
            kickbackDestination: string;
            kickbackPortion: BigNumber;
            governanceRating: number;
            tags: number;
            ipfsHash: string;
        }>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    TICK_SPACING(overrides?: CallOverrides): Promise<number>;
    addPositionToIndex(owner: string, nftID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveUIs(ids: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    debt(overrides?: CallOverrides): Promise<BigNumber>;
    debtPositionIndexingEnabled(overrides?: CallOverrides): Promise<boolean>;
    decreaseDebt(count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decreasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deletePoolPosition(nftID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deployer(overrides?: CallOverrides): Promise<string>;
    disapproveUIs(ids: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getBasicPositionInfo(positionID: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        debtCount: BigNumber;
        collateralCount: BigNumber;
    }>;
    getPoolPosition(nftID: BigNumberish, overrides?: CallOverrides): Promise<PoolPositionStructOutput>;
    getPoolPositionNftIdsByOwner(owner: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<DebtPositionStructOutput>;
    getRewardStatus(pool: string, overrides?: CallOverrides): Promise<RewardStatusStructOutput>;
    getSystemDebtInfo(overrides?: CallOverrides): Promise<SystemDebtInfoStructOutput>;
    getTick(collateralCount: BigNumberish, debtCount: BigNumberish, overrides?: CallOverrides): Promise<number>;
    getUIs(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<UserInterfaceStructOutput[]>;
    governor(overrides?: CallOverrides): Promise<string>;
    hue(overrides?: CallOverrides): Promise<string>;
    increaseDebt(count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increaseLentHue(count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    init(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializeUI(interfaceID: BigNumberish, ipfsHash: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lentHue(overrides?: CallOverrides): Promise<BigNumber>;
    nextUserInterfaceID(overrides?: CallOverrides): Promise<number>;
    nftPositionManager(overrides?: CallOverrides): Promise<string>;
    onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
    onRewardsUpgrade(newRewards: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    poolLiquidity(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    poolPositionIndexingEnabled(overrides?: CallOverrides): Promise<boolean>;
    positionsForTick(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    registerUI(kickbackPortion: BigNumberish, tags: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendCollateral(dest: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendLentHue(dest: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPoolPosition(nftID: BigNumberish, pp: PoolPositionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPosition(positionID: BigNumberish, dp: DebtPositionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRewardStatus(pool: string, rs: RewardStatusStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSystemDebtInfo(_sdi: SystemDebtInfoStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    snapRawTickToSpacing(rawTick: BigNumberish, tickSpacing: BigNumberish, overrides?: CallOverrides): Promise<number>;
    stopIndexingDebtPositions(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stopIndexingPoolPositions(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    sweepHue(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    userInterfaces(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        number,
        number,
        string
    ] & {
        kickbackDestination: string;
        kickbackPortion: BigNumber;
        governanceRating: number;
        tags: number;
        ipfsHash: string;
    }>;
    validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        TICK_SPACING(overrides?: CallOverrides): Promise<number>;
        addPositionToIndex(owner: string, nftID: BigNumberish, overrides?: CallOverrides): Promise<void>;
        approveUIs(ids: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        debtPositionIndexingEnabled(overrides?: CallOverrides): Promise<boolean>;
        decreaseDebt(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        decreasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: CallOverrides): Promise<void>;
        deletePoolPosition(nftID: BigNumberish, overrides?: CallOverrides): Promise<void>;
        deployer(overrides?: CallOverrides): Promise<string>;
        disapproveUIs(ids: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        getBasicPositionInfo(positionID: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            debtCount: BigNumber;
            collateralCount: BigNumber;
        }>;
        getPoolPosition(nftID: BigNumberish, overrides?: CallOverrides): Promise<PoolPositionStructOutput>;
        getPoolPositionNftIdsByOwner(owner: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<DebtPositionStructOutput>;
        getRewardStatus(pool: string, overrides?: CallOverrides): Promise<RewardStatusStructOutput>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<SystemDebtInfoStructOutput>;
        getTick(collateralCount: BigNumberish, debtCount: BigNumberish, overrides?: CallOverrides): Promise<number>;
        getUIs(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<UserInterfaceStructOutput[]>;
        governor(overrides?: CallOverrides): Promise<string>;
        hue(overrides?: CallOverrides): Promise<string>;
        increaseDebt(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        increaseLentHue(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        increasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: CallOverrides): Promise<void>;
        init(overrides?: CallOverrides): Promise<void>;
        initializeUI(interfaceID: BigNumberish, ipfsHash: string, overrides?: CallOverrides): Promise<void>;
        lentHue(overrides?: CallOverrides): Promise<BigNumber>;
        nextUserInterfaceID(overrides?: CallOverrides): Promise<number>;
        nftPositionManager(overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        onRewardsUpgrade(newRewards: string, overrides?: CallOverrides): Promise<void>;
        poolLiquidity(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        poolPositionIndexingEnabled(overrides?: CallOverrides): Promise<boolean>;
        positionsForTick(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        registerUI(kickbackPortion: BigNumberish, tags: BigNumberish, overrides?: CallOverrides): Promise<number>;
        sendCollateral(dest: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sendLentHue(dest: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPoolPosition(nftID: BigNumberish, pp: PoolPositionStruct, overrides?: CallOverrides): Promise<void>;
        setPosition(positionID: BigNumberish, dp: DebtPositionStruct, overrides?: CallOverrides): Promise<void>;
        setRewardStatus(pool: string, rs: RewardStatusStruct, overrides?: CallOverrides): Promise<void>;
        setSystemDebtInfo(_sdi: SystemDebtInfoStruct, overrides?: CallOverrides): Promise<void>;
        snapRawTickToSpacing(rawTick: BigNumberish, tickSpacing: BigNumberish, overrides?: CallOverrides): Promise<number>;
        stopIndexingDebtPositions(overrides?: CallOverrides): Promise<void>;
        stopIndexingPoolPositions(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        sweepHue(overrides?: CallOverrides): Promise<void>;
        userInterfaces(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            number,
            number,
            string
        ] & {
            kickbackDestination: string;
            kickbackPortion: BigNumber;
            governanceRating: number;
            tags: number;
            ipfsHash: string;
        }>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "DebtPositionIndexingDisabled()"(): DebtPositionIndexingDisabledEventFilter;
        DebtPositionIndexingDisabled(): DebtPositionIndexingDisabledEventFilter;
        "PoolPositionIndexingDisabled()"(): PoolPositionIndexingDisabledEventFilter;
        PoolPositionIndexingDisabled(): PoolPositionIndexingDisabledEventFilter;
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
        "UIInitialized(uint32,address,string)"(interfaceID?: BigNumberish | null, kickbackDestination?: string | null, ipfsHash?: null): UIInitializedEventFilter;
        UIInitialized(interfaceID?: BigNumberish | null, kickbackDestination?: string | null, ipfsHash?: null): UIInitializedEventFilter;
        "UIRegistered(uint32,address,uint24,uint256)"(interfaceID?: BigNumberish | null, kickbackDestination?: string | null, tags?: BigNumberish | null, kickbackPortion?: null): UIRegisteredEventFilter;
        UIRegistered(interfaceID?: BigNumberish | null, kickbackDestination?: string | null, tags?: BigNumberish | null, kickbackPortion?: null): UIRegisteredEventFilter;
        "UIsApproved(uint32[])"(uis?: null): UIsApprovedEventFilter;
        UIsApproved(uis?: null): UIsApprovedEventFilter;
        "UIsDisapproved(uint32[])"(uis?: null): UIsDisapprovedEventFilter;
        UIsDisapproved(uis?: null): UIsDisapprovedEventFilter;
    };
    estimateGas: {
        TICK_SPACING(overrides?: CallOverrides): Promise<BigNumber>;
        addPositionToIndex(owner: string, nftID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveUIs(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        debtPositionIndexingEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decreasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deletePoolPosition(nftID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        disapproveUIs(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getBasicPositionInfo(positionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolPosition(nftID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolPositionNftIdsByOwner(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardStatus(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getTick(collateralCount: BigNumberish, debtCount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getUIs(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        hue(overrides?: CallOverrides): Promise<BigNumber>;
        increaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increaseLentHue(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializeUI(interfaceID: BigNumberish, ipfsHash: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lentHue(overrides?: CallOverrides): Promise<BigNumber>;
        nextUserInterfaceID(overrides?: CallOverrides): Promise<BigNumber>;
        nftPositionManager(overrides?: CallOverrides): Promise<BigNumber>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        onRewardsUpgrade(newRewards: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        poolLiquidity(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        poolPositionIndexingEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        positionsForTick(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        registerUI(kickbackPortion: BigNumberish, tags: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendCollateral(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendLentHue(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPoolPosition(nftID: BigNumberish, pp: PoolPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPosition(positionID: BigNumberish, dp: DebtPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRewardStatus(pool: string, rs: RewardStatusStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSystemDebtInfo(_sdi: SystemDebtInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        snapRawTickToSpacing(rawTick: BigNumberish, tickSpacing: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        stopIndexingDebtPositions(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stopIndexingPoolPositions(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        sweepHue(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        userInterfaces(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        TICK_SPACING(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addPositionToIndex(owner: string, nftID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveUIs(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        debt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        debtPositionIndexingEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decreasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deletePoolPosition(nftID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disapproveUIs(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getBasicPositionInfo(positionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolPosition(nftID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolPositionNftIdsByOwner(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardStatus(pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTick(collateralCount: BigNumberish, debtCount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUIs(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increaseLentHue(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializeUI(interfaceID: BigNumberish, ipfsHash: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lentHue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextUserInterfaceID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nftPositionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onRewardsUpgrade(newRewards: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        poolLiquidity(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolPositionIndexingEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionsForTick(tick: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerUI(kickbackPortion: BigNumberish, tags: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendCollateral(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendLentHue(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPoolPosition(nftID: BigNumberish, pp: PoolPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPosition(positionID: BigNumberish, dp: DebtPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRewardStatus(pool: string, rs: RewardStatusStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSystemDebtInfo(_sdi: SystemDebtInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        snapRawTickToSpacing(rawTick: BigNumberish, tickSpacing: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stopIndexingDebtPositions(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stopIndexingPoolPositions(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sweepHue(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        userInterfaces(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
