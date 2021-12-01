import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type PoolPositionStruct = {
    ui: BigNumberish;
    kickbackDestination: string;
    kickbackPortion: BigNumberish;
    liquidity: BigNumberish;
    cumulativeLiquidity: BigNumberish;
    totalRewards: BigNumberish;
    lastTimeRewarded: BigNumberish;
    lastBlockPositionIncreased: BigNumberish;
};
export declare type PoolPositionStructOutput = [
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    ui: number;
    kickbackDestination: string;
    kickbackPortion: BigNumber;
    liquidity: BigNumber;
    cumulativeLiquidity: BigNumber;
    totalRewards: BigNumber;
    lastTimeRewarded: BigNumber;
    lastBlockPositionIncreased: BigNumber;
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
export interface IAccountingInterface extends utils.Interface {
    functions: {
        "approveUIs(uint32[])": FunctionFragment;
        "debt()": FunctionFragment;
        "decreaseDebt(uint256)": FunctionFragment;
        "decreasePoolLiquidity(address,uint256)": FunctionFragment;
        "disapproveUIs(uint32[])": FunctionFragment;
        "getBasicPositionInfo(uint64)": FunctionFragment;
        "getPoolPosition(address,uint16)": FunctionFragment;
        "getPosition(uint64)": FunctionFragment;
        "getRewardStatus(uint16)": FunctionFragment;
        "getSystemDebtInfo()": FunctionFragment;
        "increaseDebt(uint256)": FunctionFragment;
        "increaseLentHue(uint256)": FunctionFragment;
        "increasePoolLiquidity(address,uint256)": FunctionFragment;
        "lentHue()": FunctionFragment;
        "poolLiquidity(address)": FunctionFragment;
        "sendCollateral(address,uint256)": FunctionFragment;
        "sendLentHue(address,uint256)": FunctionFragment;
        "setPoolPosition(address,uint16,(uint32,address,uint64,uint256,uint256,uint256,uint64,uint256))": FunctionFragment;
        "setPosition(uint64,(uint256,uint256,uint256,uint256,uint256,uint64,uint64,int24,bool,uint64,uint32,address,uint64))": FunctionFragment;
        "setRewardStatus(uint16,(uint256,uint256))": FunctionFragment;
        "setSystemDebtInfo((uint256,uint256,uint256,uint256))": FunctionFragment;
        "transferPoolTokens(address,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "approveUIs", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "debt", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseDebt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "decreasePoolLiquidity", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "disapproveUIs", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getBasicPositionInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPoolPosition", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPosition", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRewardStatus", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSystemDebtInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseDebt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseLentHue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "increasePoolLiquidity", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lentHue", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolLiquidity", values: [string]): string;
    encodeFunctionData(functionFragment: "sendCollateral", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendLentHue", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPoolPosition", values: [string, BigNumberish, PoolPositionStruct]): string;
    encodeFunctionData(functionFragment: "setPosition", values: [BigNumberish, DebtPositionStruct]): string;
    encodeFunctionData(functionFragment: "setRewardStatus", values: [BigNumberish, RewardStatusStruct]): string;
    encodeFunctionData(functionFragment: "setSystemDebtInfo", values: [SystemDebtInfoStruct]): string;
    encodeFunctionData(functionFragment: "transferPoolTokens", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "approveUIs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreasePoolLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disapproveUIs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBasicPositionInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSystemDebtInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseLentHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increasePoolLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lentHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendLentHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRewardStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSystemDebtInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferPoolTokens", data: BytesLike): Result;
    events: {
        "DebtPositionIndexingDisabled()": EventFragment;
        "PoolPositionIndexingDisabled()": EventFragment;
        "UIInitialized(uint32,address,string)": EventFragment;
        "UIRegistered(uint32,address,uint24,uint256)": EventFragment;
        "UIsApproved(uint32[])": EventFragment;
        "UIsDisapproved(uint32[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DebtPositionIndexingDisabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolPositionIndexingDisabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UIInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UIRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UIsApproved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UIsDisapproved"): EventFragment;
}
export declare type DebtPositionIndexingDisabledEvent = TypedEvent<[], {}>;
export declare type DebtPositionIndexingDisabledEventFilter = TypedEventFilter<DebtPositionIndexingDisabledEvent>;
export declare type PoolPositionIndexingDisabledEvent = TypedEvent<[], {}>;
export declare type PoolPositionIndexingDisabledEventFilter = TypedEventFilter<PoolPositionIndexingDisabledEvent>;
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
export interface IAccounting extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAccountingInterface;
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
        approveUIs(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        debt(overrides?: CallOverrides): Promise<[BigNumber]>;
        decreaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decreasePoolLiquidity(pair: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
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
        getPoolPosition(positionOwner: string, poolID: BigNumberish, overrides?: CallOverrides): Promise<[PoolPositionStructOutput] & {
            pp: PoolPositionStructOutput;
        }>;
        getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<[DebtPositionStructOutput] & {
            acct: DebtPositionStructOutput;
        }>;
        getRewardStatus(poolID: BigNumberish, overrides?: CallOverrides): Promise<[RewardStatusStructOutput] & {
            rs: RewardStatusStructOutput;
        }>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<[SystemDebtInfoStructOutput]>;
        increaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increaseLentHue(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increasePoolLiquidity(pair: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lentHue(overrides?: CallOverrides): Promise<[BigNumber]>;
        poolLiquidity(pair: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            liquidity: BigNumber;
        }>;
        sendCollateral(account: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendLentHue(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPoolPosition(positionOwner: string, poolID: BigNumberish, pp: PoolPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPosition(positionID: BigNumberish, dp: DebtPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRewardStatus(poolID: BigNumberish, rs: RewardStatusStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSystemDebtInfo(_systemDebtInfo: SystemDebtInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferPoolTokens(pair: string, dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    approveUIs(ids: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    debt(overrides?: CallOverrides): Promise<BigNumber>;
    decreaseDebt(count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decreasePoolLiquidity(pair: string, liquidity: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
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
    getPoolPosition(positionOwner: string, poolID: BigNumberish, overrides?: CallOverrides): Promise<PoolPositionStructOutput>;
    getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<DebtPositionStructOutput>;
    getRewardStatus(poolID: BigNumberish, overrides?: CallOverrides): Promise<RewardStatusStructOutput>;
    getSystemDebtInfo(overrides?: CallOverrides): Promise<SystemDebtInfoStructOutput>;
    increaseDebt(count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increaseLentHue(count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increasePoolLiquidity(pair: string, liquidity: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lentHue(overrides?: CallOverrides): Promise<BigNumber>;
    poolLiquidity(pair: string, overrides?: CallOverrides): Promise<BigNumber>;
    sendCollateral(account: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendLentHue(dest: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPoolPosition(positionOwner: string, poolID: BigNumberish, pp: PoolPositionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPosition(positionID: BigNumberish, dp: DebtPositionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRewardStatus(poolID: BigNumberish, rs: RewardStatusStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSystemDebtInfo(_systemDebtInfo: SystemDebtInfoStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferPoolTokens(pair: string, dest: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approveUIs(ids: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseDebt(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        decreasePoolLiquidity(pair: string, liquidity: BigNumberish, overrides?: CallOverrides): Promise<void>;
        disapproveUIs(ids: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        getBasicPositionInfo(positionID: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            debtCount: BigNumber;
            collateralCount: BigNumber;
        }>;
        getPoolPosition(positionOwner: string, poolID: BigNumberish, overrides?: CallOverrides): Promise<PoolPositionStructOutput>;
        getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<DebtPositionStructOutput>;
        getRewardStatus(poolID: BigNumberish, overrides?: CallOverrides): Promise<RewardStatusStructOutput>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<SystemDebtInfoStructOutput>;
        increaseDebt(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        increaseLentHue(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        increasePoolLiquidity(pair: string, liquidity: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lentHue(overrides?: CallOverrides): Promise<BigNumber>;
        poolLiquidity(pair: string, overrides?: CallOverrides): Promise<BigNumber>;
        sendCollateral(account: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sendLentHue(dest: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPoolPosition(positionOwner: string, poolID: BigNumberish, pp: PoolPositionStruct, overrides?: CallOverrides): Promise<void>;
        setPosition(positionID: BigNumberish, dp: DebtPositionStruct, overrides?: CallOverrides): Promise<void>;
        setRewardStatus(poolID: BigNumberish, rs: RewardStatusStruct, overrides?: CallOverrides): Promise<void>;
        setSystemDebtInfo(_systemDebtInfo: SystemDebtInfoStruct, overrides?: CallOverrides): Promise<void>;
        transferPoolTokens(pair: string, dest: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DebtPositionIndexingDisabled()"(): DebtPositionIndexingDisabledEventFilter;
        DebtPositionIndexingDisabled(): DebtPositionIndexingDisabledEventFilter;
        "PoolPositionIndexingDisabled()"(): PoolPositionIndexingDisabledEventFilter;
        PoolPositionIndexingDisabled(): PoolPositionIndexingDisabledEventFilter;
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
        approveUIs(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decreasePoolLiquidity(pair: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        disapproveUIs(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getBasicPositionInfo(positionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolPosition(positionOwner: string, poolID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardStatus(poolID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<BigNumber>;
        increaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increaseLentHue(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increasePoolLiquidity(pair: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lentHue(overrides?: CallOverrides): Promise<BigNumber>;
        poolLiquidity(pair: string, overrides?: CallOverrides): Promise<BigNumber>;
        sendCollateral(account: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendLentHue(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPoolPosition(positionOwner: string, poolID: BigNumberish, pp: PoolPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPosition(positionID: BigNumberish, dp: DebtPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRewardStatus(poolID: BigNumberish, rs: RewardStatusStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSystemDebtInfo(_systemDebtInfo: SystemDebtInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferPoolTokens(pair: string, dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approveUIs(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        debt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decreasePoolLiquidity(pair: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        disapproveUIs(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getBasicPositionInfo(positionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolPosition(positionOwner: string, poolID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardStatus(poolID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increaseLentHue(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increasePoolLiquidity(pair: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lentHue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolLiquidity(pair: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendCollateral(account: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendLentHue(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPoolPosition(positionOwner: string, poolID: BigNumberish, pp: PoolPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPosition(positionID: BigNumberish, dp: DebtPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRewardStatus(poolID: BigNumberish, rs: RewardStatusStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSystemDebtInfo(_systemDebtInfo: SystemDebtInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferPoolTokens(pair: string, dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
