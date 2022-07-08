import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
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
    type DebtPositionStruct = {
        startCumulativeDebt: BigNumberish;
        collateral: BigNumberish;
        debt: BigNumberish;
        startDebtExchangeRate: BigNumberish;
        startTCPRewards: BigNumberish;
        lastTimeUpdated: BigNumberish;
        lastBlockPositionIncreased: BigNumberish;
        tick: BigNumberish;
        tickSet: boolean;
        tickIndex: BigNumberish;
        ui: BigNumberish;
        kickbackDestination: string;
        kickbackPortion: BigNumberish;
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
    type RewardStatusStruct = {
        totalRewards: BigNumberish;
        cumulativeLiquidity: BigNumberish;
    };
    type RewardStatusStructOutput = [BigNumber, BigNumber] & {
        totalRewards: BigNumber;
        cumulativeLiquidity: BigNumber;
    };
    type SystemDebtInfoStruct = {
        debt: BigNumberish;
        totalTCPRewards: BigNumberish;
        cumulativeDebt: BigNumberish;
        debtExchangeRate: BigNumberish;
    };
    type SystemDebtInfoStructOutput = [
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
}
export interface IAccountingInterface extends utils.Interface {
    functions: {
        "approveUIs(uint32[])": FunctionFragment;
        "debt()": FunctionFragment;
        "decreaseDebt(uint256)": FunctionFragment;
        "decreasePoolLiquidity(address,uint256)": FunctionFragment;
        "disapproveUIs(uint32[])": FunctionFragment;
        "getBasicPositionInfo(uint64)": FunctionFragment;
        "getPoolPosition(address,address)": FunctionFragment;
        "getPosition(uint64)": FunctionFragment;
        "getRewardStatus(address)": FunctionFragment;
        "getSystemDebtInfo()": FunctionFragment;
        "increaseDebt(uint256)": FunctionFragment;
        "increaseLentHue(uint256)": FunctionFragment;
        "increasePoolLiquidity(address,uint256)": FunctionFragment;
        "lentHue()": FunctionFragment;
        "poolLiquidity(address)": FunctionFragment;
        "sendCollateral(address,uint256)": FunctionFragment;
        "sendLentHue(address,uint256)": FunctionFragment;
        "setPoolPosition(address,address,(address,uint256,uint256,uint256,uint128,uint64,uint32,address,uint64))": FunctionFragment;
        "setPosition(uint64,(uint256,uint256,uint256,uint256,uint256,uint64,uint64,int24,bool,uint64,uint32,address,uint64))": FunctionFragment;
        "setRewardStatus(address,(uint256,uint256))": FunctionFragment;
        "setSystemDebtInfo((uint256,uint256,uint256,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approveUIs" | "debt" | "decreaseDebt" | "decreasePoolLiquidity" | "disapproveUIs" | "getBasicPositionInfo" | "getPoolPosition" | "getPosition" | "getRewardStatus" | "getSystemDebtInfo" | "increaseDebt" | "increaseLentHue" | "increasePoolLiquidity" | "lentHue" | "poolLiquidity" | "sendCollateral" | "sendLentHue" | "setPoolPosition" | "setPosition" | "setRewardStatus" | "setSystemDebtInfo"): FunctionFragment;
    encodeFunctionData(functionFragment: "approveUIs", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "debt", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseDebt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "decreasePoolLiquidity", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "disapproveUIs", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getBasicPositionInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPoolPosition", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getPosition", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRewardStatus", values: [string]): string;
    encodeFunctionData(functionFragment: "getSystemDebtInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseDebt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseLentHue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "increasePoolLiquidity", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lentHue", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolLiquidity", values: [string]): string;
    encodeFunctionData(functionFragment: "sendCollateral", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendLentHue", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPoolPosition", values: [string, string, IAccounting.PoolPositionStruct]): string;
    encodeFunctionData(functionFragment: "setPosition", values: [BigNumberish, IAccounting.DebtPositionStruct]): string;
    encodeFunctionData(functionFragment: "setRewardStatus", values: [string, IAccounting.RewardStatusStruct]): string;
    encodeFunctionData(functionFragment: "setSystemDebtInfo", values: [IAccounting.SystemDebtInfoStruct]): string;
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
export interface DebtPositionIndexingDisabledEventObject {
}
export declare type DebtPositionIndexingDisabledEvent = TypedEvent<[
], DebtPositionIndexingDisabledEventObject>;
export declare type DebtPositionIndexingDisabledEventFilter = TypedEventFilter<DebtPositionIndexingDisabledEvent>;
export interface PoolPositionIndexingDisabledEventObject {
}
export declare type PoolPositionIndexingDisabledEvent = TypedEvent<[
], PoolPositionIndexingDisabledEventObject>;
export declare type PoolPositionIndexingDisabledEventFilter = TypedEventFilter<PoolPositionIndexingDisabledEvent>;
export interface UIInitializedEventObject {
    interfaceID: number;
    kickbackDestination: string;
    ipfsHash: string;
}
export declare type UIInitializedEvent = TypedEvent<[
    number,
    string,
    string
], UIInitializedEventObject>;
export declare type UIInitializedEventFilter = TypedEventFilter<UIInitializedEvent>;
export interface UIRegisteredEventObject {
    interfaceID: number;
    kickbackDestination: string;
    tags: number;
    kickbackPortion: BigNumber;
}
export declare type UIRegisteredEvent = TypedEvent<[
    number,
    string,
    number,
    BigNumber
], UIRegisteredEventObject>;
export declare type UIRegisteredEventFilter = TypedEventFilter<UIRegisteredEvent>;
export interface UIsApprovedEventObject {
    uis: number[];
}
export declare type UIsApprovedEvent = TypedEvent<[number[]], UIsApprovedEventObject>;
export declare type UIsApprovedEventFilter = TypedEventFilter<UIsApprovedEvent>;
export interface UIsDisapprovedEventObject {
    uis: number[];
}
export declare type UIsDisapprovedEvent = TypedEvent<[
    number[]
], UIsDisapprovedEventObject>;
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
        decreasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
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
        getPoolPosition(owner: string, pool: string, overrides?: CallOverrides): Promise<[
            IAccounting.PoolPositionStructOutput
        ] & {
            pt: IAccounting.PoolPositionStructOutput;
        }>;
        getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<[
            IAccounting.DebtPositionStructOutput
        ] & {
            acct: IAccounting.DebtPositionStructOutput;
        }>;
        getRewardStatus(pool: string, overrides?: CallOverrides): Promise<[
            IAccounting.RewardStatusStructOutput
        ] & {
            rs: IAccounting.RewardStatusStructOutput;
        }>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<[IAccounting.SystemDebtInfoStructOutput]>;
        increaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increaseLentHue(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lentHue(overrides?: CallOverrides): Promise<[BigNumber]>;
        poolLiquidity(pool: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            liquidity: BigNumber;
        }>;
        sendCollateral(account: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendLentHue(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPoolPosition(owner: string, pool: string, pt: IAccounting.PoolPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPosition(positionID: BigNumberish, dp: IAccounting.DebtPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRewardStatus(pool: string, rs: IAccounting.RewardStatusStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSystemDebtInfo(_systemDebtInfo: IAccounting.SystemDebtInfoStruct, overrides?: Overrides & {
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
    decreasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
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
    getPoolPosition(owner: string, pool: string, overrides?: CallOverrides): Promise<IAccounting.PoolPositionStructOutput>;
    getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<IAccounting.DebtPositionStructOutput>;
    getRewardStatus(pool: string, overrides?: CallOverrides): Promise<IAccounting.RewardStatusStructOutput>;
    getSystemDebtInfo(overrides?: CallOverrides): Promise<IAccounting.SystemDebtInfoStructOutput>;
    increaseDebt(count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increaseLentHue(count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lentHue(overrides?: CallOverrides): Promise<BigNumber>;
    poolLiquidity(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
    sendCollateral(account: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendLentHue(dest: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPoolPosition(owner: string, pool: string, pt: IAccounting.PoolPositionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPosition(positionID: BigNumberish, dp: IAccounting.DebtPositionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRewardStatus(pool: string, rs: IAccounting.RewardStatusStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSystemDebtInfo(_systemDebtInfo: IAccounting.SystemDebtInfoStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approveUIs(ids: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseDebt(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        decreasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: CallOverrides): Promise<void>;
        disapproveUIs(ids: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        getBasicPositionInfo(positionID: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            debtCount: BigNumber;
            collateralCount: BigNumber;
        }>;
        getPoolPosition(owner: string, pool: string, overrides?: CallOverrides): Promise<IAccounting.PoolPositionStructOutput>;
        getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<IAccounting.DebtPositionStructOutput>;
        getRewardStatus(pool: string, overrides?: CallOverrides): Promise<IAccounting.RewardStatusStructOutput>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<IAccounting.SystemDebtInfoStructOutput>;
        increaseDebt(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        increaseLentHue(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        increasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lentHue(overrides?: CallOverrides): Promise<BigNumber>;
        poolLiquidity(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        sendCollateral(account: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sendLentHue(dest: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPoolPosition(owner: string, pool: string, pt: IAccounting.PoolPositionStruct, overrides?: CallOverrides): Promise<void>;
        setPosition(positionID: BigNumberish, dp: IAccounting.DebtPositionStruct, overrides?: CallOverrides): Promise<void>;
        setRewardStatus(pool: string, rs: IAccounting.RewardStatusStruct, overrides?: CallOverrides): Promise<void>;
        setSystemDebtInfo(_systemDebtInfo: IAccounting.SystemDebtInfoStruct, overrides?: CallOverrides): Promise<void>;
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
        decreasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        disapproveUIs(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getBasicPositionInfo(positionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolPosition(owner: string, pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardStatus(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<BigNumber>;
        increaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increaseLentHue(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lentHue(overrides?: CallOverrides): Promise<BigNumber>;
        poolLiquidity(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        sendCollateral(account: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendLentHue(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPoolPosition(owner: string, pool: string, pt: IAccounting.PoolPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPosition(positionID: BigNumberish, dp: IAccounting.DebtPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRewardStatus(pool: string, rs: IAccounting.RewardStatusStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSystemDebtInfo(_systemDebtInfo: IAccounting.SystemDebtInfoStruct, overrides?: Overrides & {
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
        decreasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        disapproveUIs(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getBasicPositionInfo(positionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolPosition(owner: string, pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPosition(positionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardStatus(pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseDebt(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increaseLentHue(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increasePoolLiquidity(pool: string, liquidity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lentHue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolLiquidity(pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendCollateral(account: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendLentHue(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPoolPosition(owner: string, pool: string, pt: IAccounting.PoolPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPosition(positionID: BigNumberish, dp: IAccounting.DebtPositionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRewardStatus(pool: string, rs: IAccounting.RewardStatusStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSystemDebtInfo(_systemDebtInfo: IAccounting.SystemDebtInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
