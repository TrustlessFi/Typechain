import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace IAccounting {
    type ConstructorParamsStruct = {
        Governor: PromiseOrValue<string>;
        Hue: PromiseOrValue<string>;
        TruEth: PromiseOrValue<string>;
    };
    type ConstructorParamsStructOutput = [string, string, string] & {
        Governor: string;
        Hue: string;
        TruEth: string;
    };
    type PoolPositionStruct = {
        owner: PromiseOrValue<string>;
        cumulativeLiquidity: PromiseOrValue<BigNumberish>;
        totalRewards: PromiseOrValue<BigNumberish>;
        lastBlockPositionIncreased: PromiseOrValue<BigNumberish>;
        liquidity: PromiseOrValue<BigNumberish>;
        lastTimeRewarded: PromiseOrValue<BigNumberish>;
        ui: PromiseOrValue<BigNumberish>;
        kickbackDestination: PromiseOrValue<string>;
        kickbackPortion: PromiseOrValue<BigNumberish>;
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
    type RewardStatusStruct = {
        totalRewards: PromiseOrValue<BigNumberish>;
        cumulativeLiquidity: PromiseOrValue<BigNumberish>;
    };
    type RewardStatusStructOutput = [BigNumber, BigNumber] & {
        totalRewards: BigNumber;
        cumulativeLiquidity: BigNumber;
    };
    type SystemDebtInfoStruct = {
        debt: PromiseOrValue<BigNumberish>;
        totalTCPRewards: PromiseOrValue<BigNumberish>;
        cumulativeDebt: PromiseOrValue<BigNumberish>;
        debtExchangeRate: PromiseOrValue<BigNumberish>;
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
    type UserInterfaceStruct = {
        kickbackDestination: PromiseOrValue<string>;
        kickbackPortion: PromiseOrValue<BigNumberish>;
        governanceRating: PromiseOrValue<BigNumberish>;
        tags: PromiseOrValue<BigNumberish>;
        ipfsHash: PromiseOrValue<string>;
    };
    type UserInterfaceStructOutput = [
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
}
export interface AccountingTestableInterface extends utils.Interface {
    functions: {
        "approveUIs(uint32[])": FunctionFragment;
        "debt()": FunctionFragment;
        "debtPositionIndexingEnabled()": FunctionFragment;
        "decreaseDebt(uint256)": FunctionFragment;
        "decreasePoolLiquidity(address,uint256)": FunctionFragment;
        "disapproveUIs(uint32[])": FunctionFragment;
        "getBasicPositionInfo(uint64)": FunctionFragment;
        "getPoolPosition(address,address)": FunctionFragment;
        "getPosition(uint64)": FunctionFragment;
        "getRewardStatus(address)": FunctionFragment;
        "getSystemDebtInfo()": FunctionFragment;
        "getTick(uint256,uint256)": FunctionFragment;
        "getUIs(uint32,uint32)": FunctionFragment;
        "governor()": FunctionFragment;
        "increaseDebt(uint256)": FunctionFragment;
        "increaseLentHue(uint256)": FunctionFragment;
        "increasePoolLiquidity(address,uint256)": FunctionFragment;
        "initializeUI(uint32,string)": FunctionFragment;
        "lentHue()": FunctionFragment;
        "nextUserInterfaceID()": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "poolLiquidity(address)": FunctionFragment;
        "poolPositionIndexingEnabled()": FunctionFragment;
        "positionsForTick(int24)": FunctionFragment;
        "registerUI(uint64,uint24)": FunctionFragment;
        "sendCollateral(address,uint256)": FunctionFragment;
        "sendLentHue(address,uint256)": FunctionFragment;
        "setPoolPosition(address,address,(address,uint256,uint256,uint256,uint128,uint64,uint32,address,uint64))": FunctionFragment;
        "setPosition(uint64,(uint256,uint256,uint256,uint256,uint256,uint64,uint64,int24,bool,uint64,uint32,address,uint64))": FunctionFragment;
        "setRewardStatus(address,(uint256,uint256))": FunctionFragment;
        "setSystemDebtInfo((uint256,uint256,uint256,uint256))": FunctionFragment;
        "snapRawTickToSpacing(int24,int24)": FunctionFragment;
        "stopIndexingDebtPositions()": FunctionFragment;
        "stopIndexingPoolPositions()": FunctionFragment;
        "stopped()": FunctionFragment;
        "sweepHue()": FunctionFragment;
        "truEth()": FunctionFragment;
        "userInterfaces(uint256)": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approveUIs" | "debt" | "debtPositionIndexingEnabled" | "decreaseDebt" | "decreasePoolLiquidity" | "disapproveUIs" | "getBasicPositionInfo" | "getPoolPosition" | "getPosition" | "getRewardStatus" | "getSystemDebtInfo" | "getTick" | "getUIs" | "governor" | "increaseDebt" | "increaseLentHue" | "increasePoolLiquidity" | "initializeUI" | "lentHue" | "nextUserInterfaceID" | "onERC721Received" | "poolLiquidity" | "poolPositionIndexingEnabled" | "positionsForTick" | "registerUI" | "sendCollateral" | "sendLentHue" | "setPoolPosition" | "setPosition" | "setRewardStatus" | "setSystemDebtInfo" | "snapRawTickToSpacing" | "stopIndexingDebtPositions" | "stopIndexingPoolPositions" | "stopped" | "sweepHue" | "truEth" | "userInterfaces" | "validUpdate"): FunctionFragment;
    encodeFunctionData(functionFragment: "approveUIs", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "debt", values?: undefined): string;
    encodeFunctionData(functionFragment: "debtPositionIndexingEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseDebt", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "decreasePoolLiquidity", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "disapproveUIs", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getBasicPositionInfo", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPoolPosition", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPosition", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRewardStatus", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getSystemDebtInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTick", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getUIs", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseDebt", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increaseLentHue", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increasePoolLiquidity", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initializeUI", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lentHue", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextUserInterfaceID", values?: undefined): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "poolLiquidity", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "poolPositionIndexingEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionsForTick", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "registerUI", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "sendCollateral", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "sendLentHue", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPoolPosition", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        IAccounting.PoolPositionStruct
    ]): string;
    encodeFunctionData(functionFragment: "setPosition", values: [PromiseOrValue<BigNumberish>, IAccounting.DebtPositionStruct]): string;
    encodeFunctionData(functionFragment: "setRewardStatus", values: [PromiseOrValue<string>, IAccounting.RewardStatusStruct]): string;
    encodeFunctionData(functionFragment: "setSystemDebtInfo", values: [IAccounting.SystemDebtInfoStruct]): string;
    encodeFunctionData(functionFragment: "snapRawTickToSpacing", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stopIndexingDebtPositions", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopIndexingPoolPositions", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "sweepHue", values?: undefined): string;
    encodeFunctionData(functionFragment: "truEth", values?: undefined): string;
    encodeFunctionData(functionFragment: "userInterfaces", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "approveUIs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debtPositionIndexingEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreasePoolLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disapproveUIs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBasicPositionInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSystemDebtInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUIs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseLentHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increasePoolLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeUI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lentHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextUserInterfaceID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "truEth", data: BytesLike): Result;
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
export interface StoppedEventObject {
}
export declare type StoppedEvent = TypedEvent<[], StoppedEventObject>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
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
export interface AccountingTestable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AccountingTestableInterface;
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
        approveUIs(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        debt(overrides?: CallOverrides): Promise<[BigNumber]>;
        debtPositionIndexingEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        decreaseDebt(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decreasePoolLiquidity(pool: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        disapproveUIs(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getBasicPositionInfo(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            debtCount: BigNumber;
            collateralCount: BigNumber;
        }>;
        getPoolPosition(owner: PromiseOrValue<string>, pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IAccounting.PoolPositionStructOutput
        ] & {
            pp: IAccounting.PoolPositionStructOutput;
        }>;
        getPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IAccounting.DebtPositionStructOutput
        ] & {
            dp: IAccounting.DebtPositionStructOutput;
        }>;
        getRewardStatus(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[IAccounting.RewardStatusStructOutput]>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<[IAccounting.SystemDebtInfoStructOutput]>;
        getTick(collateralCount: PromiseOrValue<BigNumberish>, debtCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        getUIs(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IAccounting.UserInterfaceStructOutput[]
        ] & {
            uis: IAccounting.UserInterfaceStructOutput[];
        }>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        increaseDebt(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increaseLentHue(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increasePoolLiquidity(pool: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initializeUI(interfaceID: PromiseOrValue<BigNumberish>, ipfsHash: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lentHue(overrides?: CallOverrides): Promise<[BigNumber]>;
        nextUserInterfaceID(overrides?: CallOverrides): Promise<[number]>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        poolLiquidity(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        poolPositionIndexingEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        positionsForTick(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        registerUI(kickbackPortion: PromiseOrValue<BigNumberish>, tags: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendCollateral(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendLentHue(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPoolPosition(owner: PromiseOrValue<string>, pool: PromiseOrValue<string>, pp: IAccounting.PoolPositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPosition(positionID: PromiseOrValue<BigNumberish>, dp: IAccounting.DebtPositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRewardStatus(pool: PromiseOrValue<string>, rs: IAccounting.RewardStatusStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSystemDebtInfo(_sdi: IAccounting.SystemDebtInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        snapRawTickToSpacing(rawTick: PromiseOrValue<BigNumberish>, tickSpacing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        stopIndexingDebtPositions(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopIndexingPoolPositions(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        sweepHue(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        truEth(overrides?: CallOverrides): Promise<[string]>;
        userInterfaces(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
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
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    approveUIs(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    debt(overrides?: CallOverrides): Promise<BigNumber>;
    debtPositionIndexingEnabled(overrides?: CallOverrides): Promise<boolean>;
    decreaseDebt(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decreasePoolLiquidity(pool: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    disapproveUIs(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getBasicPositionInfo(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        debtCount: BigNumber;
        collateralCount: BigNumber;
    }>;
    getPoolPosition(owner: PromiseOrValue<string>, pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IAccounting.PoolPositionStructOutput>;
    getPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IAccounting.DebtPositionStructOutput>;
    getRewardStatus(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IAccounting.RewardStatusStructOutput>;
    getSystemDebtInfo(overrides?: CallOverrides): Promise<IAccounting.SystemDebtInfoStructOutput>;
    getTick(collateralCount: PromiseOrValue<BigNumberish>, debtCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    getUIs(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IAccounting.UserInterfaceStructOutput[]>;
    governor(overrides?: CallOverrides): Promise<string>;
    increaseDebt(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increaseLentHue(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increasePoolLiquidity(pool: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initializeUI(interfaceID: PromiseOrValue<BigNumberish>, ipfsHash: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lentHue(overrides?: CallOverrides): Promise<BigNumber>;
    nextUserInterfaceID(overrides?: CallOverrides): Promise<number>;
    onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    poolLiquidity(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    poolPositionIndexingEnabled(overrides?: CallOverrides): Promise<boolean>;
    positionsForTick(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    registerUI(kickbackPortion: PromiseOrValue<BigNumberish>, tags: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendCollateral(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendLentHue(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPoolPosition(owner: PromiseOrValue<string>, pool: PromiseOrValue<string>, pp: IAccounting.PoolPositionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPosition(positionID: PromiseOrValue<BigNumberish>, dp: IAccounting.DebtPositionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRewardStatus(pool: PromiseOrValue<string>, rs: IAccounting.RewardStatusStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSystemDebtInfo(_sdi: IAccounting.SystemDebtInfoStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    snapRawTickToSpacing(rawTick: PromiseOrValue<BigNumberish>, tickSpacing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    stopIndexingDebtPositions(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopIndexingPoolPositions(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    sweepHue(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    truEth(overrides?: CallOverrides): Promise<string>;
    userInterfaces(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
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
    validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        approveUIs(ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        debtPositionIndexingEnabled(overrides?: CallOverrides): Promise<boolean>;
        decreaseDebt(count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        decreasePoolLiquidity(pool: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        disapproveUIs(ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        getBasicPositionInfo(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            debtCount: BigNumber;
            collateralCount: BigNumber;
        }>;
        getPoolPosition(owner: PromiseOrValue<string>, pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IAccounting.PoolPositionStructOutput>;
        getPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IAccounting.DebtPositionStructOutput>;
        getRewardStatus(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IAccounting.RewardStatusStructOutput>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<IAccounting.SystemDebtInfoStructOutput>;
        getTick(collateralCount: PromiseOrValue<BigNumberish>, debtCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        getUIs(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IAccounting.UserInterfaceStructOutput[]>;
        governor(overrides?: CallOverrides): Promise<string>;
        increaseDebt(count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        increaseLentHue(count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        increasePoolLiquidity(pool: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        initializeUI(interfaceID: PromiseOrValue<BigNumberish>, ipfsHash: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        lentHue(overrides?: CallOverrides): Promise<BigNumber>;
        nextUserInterfaceID(overrides?: CallOverrides): Promise<number>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        poolLiquidity(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        poolPositionIndexingEnabled(overrides?: CallOverrides): Promise<boolean>;
        positionsForTick(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        registerUI(kickbackPortion: PromiseOrValue<BigNumberish>, tags: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        sendCollateral(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        sendLentHue(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPoolPosition(owner: PromiseOrValue<string>, pool: PromiseOrValue<string>, pp: IAccounting.PoolPositionStruct, overrides?: CallOverrides): Promise<void>;
        setPosition(positionID: PromiseOrValue<BigNumberish>, dp: IAccounting.DebtPositionStruct, overrides?: CallOverrides): Promise<void>;
        setRewardStatus(pool: PromiseOrValue<string>, rs: IAccounting.RewardStatusStruct, overrides?: CallOverrides): Promise<void>;
        setSystemDebtInfo(_sdi: IAccounting.SystemDebtInfoStruct, overrides?: CallOverrides): Promise<void>;
        snapRawTickToSpacing(rawTick: PromiseOrValue<BigNumberish>, tickSpacing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        stopIndexingDebtPositions(overrides?: CallOverrides): Promise<void>;
        stopIndexingPoolPositions(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        sweepHue(overrides?: CallOverrides): Promise<void>;
        truEth(overrides?: CallOverrides): Promise<string>;
        userInterfaces(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
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
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "DebtPositionIndexingDisabled()"(): DebtPositionIndexingDisabledEventFilter;
        DebtPositionIndexingDisabled(): DebtPositionIndexingDisabledEventFilter;
        "PoolPositionIndexingDisabled()"(): PoolPositionIndexingDisabledEventFilter;
        PoolPositionIndexingDisabled(): PoolPositionIndexingDisabledEventFilter;
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
        "UIInitialized(uint32,address,string)"(interfaceID?: PromiseOrValue<BigNumberish> | null, kickbackDestination?: PromiseOrValue<string> | null, ipfsHash?: null): UIInitializedEventFilter;
        UIInitialized(interfaceID?: PromiseOrValue<BigNumberish> | null, kickbackDestination?: PromiseOrValue<string> | null, ipfsHash?: null): UIInitializedEventFilter;
        "UIRegistered(uint32,address,uint24,uint256)"(interfaceID?: PromiseOrValue<BigNumberish> | null, kickbackDestination?: PromiseOrValue<string> | null, tags?: PromiseOrValue<BigNumberish> | null, kickbackPortion?: null): UIRegisteredEventFilter;
        UIRegistered(interfaceID?: PromiseOrValue<BigNumberish> | null, kickbackDestination?: PromiseOrValue<string> | null, tags?: PromiseOrValue<BigNumberish> | null, kickbackPortion?: null): UIRegisteredEventFilter;
        "UIsApproved(uint32[])"(uis?: null): UIsApprovedEventFilter;
        UIsApproved(uis?: null): UIsApprovedEventFilter;
        "UIsDisapproved(uint32[])"(uis?: null): UIsDisapprovedEventFilter;
        UIsDisapproved(uis?: null): UIsDisapprovedEventFilter;
    };
    estimateGas: {
        approveUIs(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        debtPositionIndexingEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseDebt(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decreasePoolLiquidity(pool: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        disapproveUIs(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getBasicPositionInfo(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolPosition(owner: PromiseOrValue<string>, pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardStatus(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getTick(collateralCount: PromiseOrValue<BigNumberish>, debtCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUIs(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        increaseDebt(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increaseLentHue(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increasePoolLiquidity(pool: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initializeUI(interfaceID: PromiseOrValue<BigNumberish>, ipfsHash: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lentHue(overrides?: CallOverrides): Promise<BigNumber>;
        nextUserInterfaceID(overrides?: CallOverrides): Promise<BigNumber>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        poolLiquidity(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        poolPositionIndexingEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        positionsForTick(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        registerUI(kickbackPortion: PromiseOrValue<BigNumberish>, tags: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendCollateral(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendLentHue(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPoolPosition(owner: PromiseOrValue<string>, pool: PromiseOrValue<string>, pp: IAccounting.PoolPositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPosition(positionID: PromiseOrValue<BigNumberish>, dp: IAccounting.DebtPositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRewardStatus(pool: PromiseOrValue<string>, rs: IAccounting.RewardStatusStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSystemDebtInfo(_sdi: IAccounting.SystemDebtInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        snapRawTickToSpacing(rawTick: PromiseOrValue<BigNumberish>, tickSpacing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        stopIndexingDebtPositions(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopIndexingPoolPositions(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        sweepHue(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        truEth(overrides?: CallOverrides): Promise<BigNumber>;
        userInterfaces(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        approveUIs(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        debt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        debtPositionIndexingEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseDebt(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decreasePoolLiquidity(pool: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        disapproveUIs(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getBasicPositionInfo(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolPosition(owner: PromiseOrValue<string>, pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardStatus(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSystemDebtInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTick(collateralCount: PromiseOrValue<BigNumberish>, debtCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUIs(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseDebt(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increaseLentHue(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increasePoolLiquidity(pool: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initializeUI(interfaceID: PromiseOrValue<BigNumberish>, ipfsHash: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lentHue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextUserInterfaceID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolLiquidity(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolPositionIndexingEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionsForTick(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerUI(kickbackPortion: PromiseOrValue<BigNumberish>, tags: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendCollateral(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendLentHue(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPoolPosition(owner: PromiseOrValue<string>, pool: PromiseOrValue<string>, pp: IAccounting.PoolPositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPosition(positionID: PromiseOrValue<BigNumberish>, dp: IAccounting.DebtPositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRewardStatus(pool: PromiseOrValue<string>, rs: IAccounting.RewardStatusStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSystemDebtInfo(_sdi: IAccounting.SystemDebtInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        snapRawTickToSpacing(rawTick: PromiseOrValue<BigNumberish>, tickSpacing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stopIndexingDebtPositions(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopIndexingPoolPositions(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sweepHue(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        truEth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userInterfaces(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
