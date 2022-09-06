import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace IMarket {
    type ConstructorParamsStruct = {
        Governor: PromiseOrValue<string>;
        ProtocolLock: PromiseOrValue<string>;
        HuePositionNFT: PromiseOrValue<string>;
        Hue: PromiseOrValue<string>;
        LendHue: PromiseOrValue<string>;
        Accounting: PromiseOrValue<string>;
        TruEth: PromiseOrValue<string>;
    };
    type ConstructorParamsStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        Governor: string;
        ProtocolLock: string;
        HuePositionNFT: string;
        Hue: string;
        LendHue: string;
        Accounting: string;
        TruEth: string;
    };
}
export declare namespace IAccounting {
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
}
export interface MarketInterface extends utils.Interface {
    functions: {
        "accounting()": FunctionFragment;
        "accrueInterest()": FunctionFragment;
        "adjustPosition(uint64,int256,uint256,uint256,uint32)": FunctionFragment;
        "claimAllRewards(uint64[],uint32)": FunctionFragment;
        "collateralizationRequirement()": FunctionFragment;
        "createPosition(uint256,uint256,uint32)": FunctionFragment;
        "currentPeriod()": FunctionFragment;
        "deployer()": FunctionFragment;
        "firstPeriod()": FunctionFragment;
        "governor()": FunctionFragment;
        "hue()": FunctionFragment;
        "huePositionNFT()": FunctionFragment;
        "init()": FunctionFragment;
        "interestPortionToLenders()": FunctionFragment;
        "lastPeriodGlobalInterestAccrued()": FunctionFragment;
        "lend(uint256)": FunctionFragment;
        "lendHue()": FunctionFragment;
        "minPositionSize()": FunctionFragment;
        "periodLength()": FunctionFragment;
        "removeKickback(uint64)": FunctionFragment;
        "setCollateralizationRequirement(uint256)": FunctionFragment;
        "setInterestPortionToLenders(uint256)": FunctionFragment;
        "setMinPositionSize(uint256)": FunctionFragment;
        "setTwapDuration(uint32)": FunctionFragment;
        "stop()": FunctionFragment;
        "stopped()": FunctionFragment;
        "systemGetUpdatedPosition(uint64)": FunctionFragment;
        "truEth()": FunctionFragment;
        "twapDuration()": FunctionFragment;
        "unlend(uint256)": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
        "valueOfLendTokensInHue(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accounting" | "accrueInterest" | "adjustPosition" | "claimAllRewards" | "collateralizationRequirement" | "createPosition" | "currentPeriod" | "deployer" | "firstPeriod" | "governor" | "hue" | "huePositionNFT" | "init" | "interestPortionToLenders" | "lastPeriodGlobalInterestAccrued" | "lend" | "lendHue" | "minPositionSize" | "periodLength" | "removeKickback" | "setCollateralizationRequirement" | "setInterestPortionToLenders" | "setMinPositionSize" | "setTwapDuration" | "stop" | "stopped" | "systemGetUpdatedPosition" | "truEth" | "twapDuration" | "unlend" | "validUpdate" | "valueOfLendTokensInHue"): FunctionFragment;
    encodeFunctionData(functionFragment: "accounting", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrueInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "adjustPosition", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "claimAllRewards", values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "collateralizationRequirement", values?: undefined): string;
    encodeFunctionData(functionFragment: "createPosition", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "currentPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "firstPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "hue", values?: undefined): string;
    encodeFunctionData(functionFragment: "huePositionNFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values?: undefined): string;
    encodeFunctionData(functionFragment: "interestPortionToLenders", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastPeriodGlobalInterestAccrued", values?: undefined): string;
    encodeFunctionData(functionFragment: "lend", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "lendHue", values?: undefined): string;
    encodeFunctionData(functionFragment: "minPositionSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeKickback", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setCollateralizationRequirement", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setInterestPortionToLenders", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMinPositionSize", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTwapDuration", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemGetUpdatedPosition", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "truEth", values?: undefined): string;
    encodeFunctionData(functionFragment: "twapDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "unlend", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "valueOfLendTokensInHue", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "accounting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrueInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adjustPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAllRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralizationRequirement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "huePositionNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interestPortionToLenders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPeriodGlobalInterestAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lendHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minPositionSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeKickback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCollateralizationRequirement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInterestPortionToLenders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinPositionSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTwapDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemGetUpdatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "truEth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "twapDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "valueOfLendTokensInHue", data: BytesLike): Result;
    events: {
        "CollateralizationRequirementUpdated(uint256)": EventFragment;
        "InterestAccrued(uint64,uint64,uint256,uint256,uint256,uint256)": EventFragment;
        "InterestPortionToLendersUpdated(uint256)": EventFragment;
        "Lend(address,uint256,uint256)": EventFragment;
        "MinPositionSizeUpdated(uint256)": EventFragment;
        "PositionAdjusted(uint64,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "PositionCreated(address,uint64,uint256)": EventFragment;
        "PositionUpdated(uint256,uint64,uint256,uint256)": EventFragment;
        "RewardsDistributed(address,bool,uint256)": EventFragment;
        "Stopped()": EventFragment;
        "TwapDurationUpdated(uint32)": EventFragment;
        "Unlend(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CollateralizationRequirementUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InterestAccrued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InterestPortionToLendersUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Lend"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinPositionSizeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionAdjusted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsDistributed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TwapDurationUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unlend"): EventFragment;
}
export interface CollateralizationRequirementUpdatedEventObject {
    requirement: BigNumber;
}
export declare type CollateralizationRequirementUpdatedEvent = TypedEvent<[
    BigNumber
], CollateralizationRequirementUpdatedEventObject>;
export declare type CollateralizationRequirementUpdatedEventFilter = TypedEventFilter<CollateralizationRequirementUpdatedEvent>;
export interface InterestAccruedEventObject {
    period: BigNumber;
    periods: BigNumber;
    newDebt: BigNumber;
    rewardCount: BigNumber;
    cumulativeDebt: BigNumber;
    debtExchangeRate: BigNumber;
}
export declare type InterestAccruedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], InterestAccruedEventObject>;
export declare type InterestAccruedEventFilter = TypedEventFilter<InterestAccruedEvent>;
export interface InterestPortionToLendersUpdatedEventObject {
    percentage: BigNumber;
}
export declare type InterestPortionToLendersUpdatedEvent = TypedEvent<[
    BigNumber
], InterestPortionToLendersUpdatedEventObject>;
export declare type InterestPortionToLendersUpdatedEventFilter = TypedEventFilter<InterestPortionToLendersUpdatedEvent>;
export interface LendEventObject {
    account: string;
    hueCount: BigNumber;
    lendTokenCount: BigNumber;
}
export declare type LendEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], LendEventObject>;
export declare type LendEventFilter = TypedEventFilter<LendEvent>;
export interface MinPositionSizeUpdatedEventObject {
    size: BigNumber;
}
export declare type MinPositionSizeUpdatedEvent = TypedEvent<[
    BigNumber
], MinPositionSizeUpdatedEventObject>;
export declare type MinPositionSizeUpdatedEventFilter = TypedEventFilter<MinPositionSizeUpdatedEvent>;
export interface PositionAdjustedEventObject {
    positionID: BigNumber;
    debtIncrease: BigNumber;
    debtDecrease: BigNumber;
    collateralIncrease: BigNumber;
    collateralDecrease: BigNumber;
    newDebt: BigNumber;
    newCollateral: BigNumber;
}
export declare type PositionAdjustedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], PositionAdjustedEventObject>;
export declare type PositionAdjustedEventFilter = TypedEventFilter<PositionAdjustedEvent>;
export interface PositionCreatedEventObject {
    creator: string;
    positionID: BigNumber;
    initialDebt: BigNumber;
}
export declare type PositionCreatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], PositionCreatedEventObject>;
export declare type PositionCreatedEventFilter = TypedEventFilter<PositionCreatedEvent>;
export interface PositionUpdatedEventObject {
    positionID: BigNumber;
    period: BigNumber;
    debtAfter: BigNumber;
    tcpRewards: BigNumber;
}
export declare type PositionUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], PositionUpdatedEventObject>;
export declare type PositionUpdatedEventFilter = TypedEventFilter<PositionUpdatedEvent>;
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
export interface TwapDurationUpdatedEventObject {
    duration: number;
}
export declare type TwapDurationUpdatedEvent = TypedEvent<[
    number
], TwapDurationUpdatedEventObject>;
export declare type TwapDurationUpdatedEventFilter = TypedEventFilter<TwapDurationUpdatedEvent>;
export interface UnlendEventObject {
    account: string;
    hueCount: BigNumber;
    lendTokenCount: BigNumber;
}
export declare type UnlendEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], UnlendEventObject>;
export declare type UnlendEventFilter = TypedEventFilter<UnlendEvent>;
export interface Market extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MarketInterface;
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
        accrueInterest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        adjustPosition(positionID: PromiseOrValue<BigNumberish>, debtChange: PromiseOrValue<BigNumberish>, collateralIncrease: PromiseOrValue<BigNumberish>, collateralDecrease: PromiseOrValue<BigNumberish>, ui: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimAllRewards(positionIDs: PromiseOrValue<BigNumberish>[], ui: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<[BigNumber]>;
        createPosition(initialCollateral: PromiseOrValue<BigNumberish>, initialDebt: PromiseOrValue<BigNumberish>, ui: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        currentPeriod(overrides?: CallOverrides): Promise<[BigNumber] & {
            period: BigNumber;
        }>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        firstPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        hue(overrides?: CallOverrides): Promise<[string]>;
        huePositionNFT(overrides?: CallOverrides): Promise<[string]>;
        init(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        interestPortionToLenders(overrides?: CallOverrides): Promise<[BigNumber]>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<[BigNumber]>;
        lend(hueCount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lendHue(overrides?: CallOverrides): Promise<[string]>;
        minPositionSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        periodLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        removeKickback(positionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCollateralizationRequirement(requirement: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setInterestPortionToLenders(percentage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinPositionSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        systemGetUpdatedPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        truEth(overrides?: CallOverrides): Promise<[string]>;
        twapDuration(overrides?: CallOverrides): Promise<[number]>;
        unlend(lendTokenCount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        valueOfLendTokensInHue(lendTokenCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    accounting(overrides?: CallOverrides): Promise<string>;
    accrueInterest(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    adjustPosition(positionID: PromiseOrValue<BigNumberish>, debtChange: PromiseOrValue<BigNumberish>, collateralIncrease: PromiseOrValue<BigNumberish>, collateralDecrease: PromiseOrValue<BigNumberish>, ui: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimAllRewards(positionIDs: PromiseOrValue<BigNumberish>[], ui: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;
    createPosition(initialCollateral: PromiseOrValue<BigNumberish>, initialDebt: PromiseOrValue<BigNumberish>, ui: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    deployer(overrides?: CallOverrides): Promise<string>;
    firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    governor(overrides?: CallOverrides): Promise<string>;
    hue(overrides?: CallOverrides): Promise<string>;
    huePositionNFT(overrides?: CallOverrides): Promise<string>;
    init(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    interestPortionToLenders(overrides?: CallOverrides): Promise<BigNumber>;
    lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<BigNumber>;
    lend(hueCount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lendHue(overrides?: CallOverrides): Promise<string>;
    minPositionSize(overrides?: CallOverrides): Promise<BigNumber>;
    periodLength(overrides?: CallOverrides): Promise<BigNumber>;
    removeKickback(positionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCollateralizationRequirement(requirement: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setInterestPortionToLenders(percentage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinPositionSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    systemGetUpdatedPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    truEth(overrides?: CallOverrides): Promise<string>;
    twapDuration(overrides?: CallOverrides): Promise<number>;
    unlend(lendTokenCount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    valueOfLendTokensInHue(lendTokenCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        accounting(overrides?: CallOverrides): Promise<string>;
        accrueInterest(overrides?: CallOverrides): Promise<void>;
        adjustPosition(positionID: PromiseOrValue<BigNumberish>, debtChange: PromiseOrValue<BigNumberish>, collateralIncrease: PromiseOrValue<BigNumberish>, collateralDecrease: PromiseOrValue<BigNumberish>, ui: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        claimAllRewards(positionIDs: PromiseOrValue<BigNumberish>[], ui: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;
        createPosition(initialCollateral: PromiseOrValue<BigNumberish>, initialDebt: PromiseOrValue<BigNumberish>, ui: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<string>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<string>;
        hue(overrides?: CallOverrides): Promise<string>;
        huePositionNFT(overrides?: CallOverrides): Promise<string>;
        init(overrides?: CallOverrides): Promise<void>;
        interestPortionToLenders(overrides?: CallOverrides): Promise<BigNumber>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<BigNumber>;
        lend(hueCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        lendHue(overrides?: CallOverrides): Promise<string>;
        minPositionSize(overrides?: CallOverrides): Promise<BigNumber>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        removeKickback(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setCollateralizationRequirement(requirement: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setInterestPortionToLenders(percentage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMinPositionSize(size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        systemGetUpdatedPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IAccounting.DebtPositionStructOutput>;
        truEth(overrides?: CallOverrides): Promise<string>;
        twapDuration(overrides?: CallOverrides): Promise<number>;
        unlend(lendTokenCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        valueOfLendTokensInHue(lendTokenCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "CollateralizationRequirementUpdated(uint256)"(requirement?: null): CollateralizationRequirementUpdatedEventFilter;
        CollateralizationRequirementUpdated(requirement?: null): CollateralizationRequirementUpdatedEventFilter;
        "InterestAccrued(uint64,uint64,uint256,uint256,uint256,uint256)"(period?: PromiseOrValue<BigNumberish> | null, periods?: null, newDebt?: null, rewardCount?: null, cumulativeDebt?: null, debtExchangeRate?: null): InterestAccruedEventFilter;
        InterestAccrued(period?: PromiseOrValue<BigNumberish> | null, periods?: null, newDebt?: null, rewardCount?: null, cumulativeDebt?: null, debtExchangeRate?: null): InterestAccruedEventFilter;
        "InterestPortionToLendersUpdated(uint256)"(percentage?: null): InterestPortionToLendersUpdatedEventFilter;
        InterestPortionToLendersUpdated(percentage?: null): InterestPortionToLendersUpdatedEventFilter;
        "Lend(address,uint256,uint256)"(account?: PromiseOrValue<string> | null, hueCount?: null, lendTokenCount?: null): LendEventFilter;
        Lend(account?: PromiseOrValue<string> | null, hueCount?: null, lendTokenCount?: null): LendEventFilter;
        "MinPositionSizeUpdated(uint256)"(size?: null): MinPositionSizeUpdatedEventFilter;
        MinPositionSizeUpdated(size?: null): MinPositionSizeUpdatedEventFilter;
        "PositionAdjusted(uint64,uint256,uint256,uint256,uint256,uint256,uint256)"(positionID?: PromiseOrValue<BigNumberish> | null, debtIncrease?: null, debtDecrease?: null, collateralIncrease?: null, collateralDecrease?: null, newDebt?: null, newCollateral?: null): PositionAdjustedEventFilter;
        PositionAdjusted(positionID?: PromiseOrValue<BigNumberish> | null, debtIncrease?: null, debtDecrease?: null, collateralIncrease?: null, collateralDecrease?: null, newDebt?: null, newCollateral?: null): PositionAdjustedEventFilter;
        "PositionCreated(address,uint64,uint256)"(creator?: PromiseOrValue<string> | null, positionID?: PromiseOrValue<BigNumberish> | null, initialDebt?: null): PositionCreatedEventFilter;
        PositionCreated(creator?: PromiseOrValue<string> | null, positionID?: PromiseOrValue<BigNumberish> | null, initialDebt?: null): PositionCreatedEventFilter;
        "PositionUpdated(uint256,uint64,uint256,uint256)"(positionID?: PromiseOrValue<BigNumberish> | null, period?: PromiseOrValue<BigNumberish> | null, debtAfter?: null, tcpRewards?: null): PositionUpdatedEventFilter;
        PositionUpdated(positionID?: PromiseOrValue<BigNumberish> | null, period?: PromiseOrValue<BigNumberish> | null, debtAfter?: null, tcpRewards?: null): PositionUpdatedEventFilter;
        "RewardsDistributed(address,bool,uint256)"(account?: PromiseOrValue<string> | null, isKickback?: PromiseOrValue<boolean> | null, tcpRewards?: null): RewardsDistributedEventFilter;
        RewardsDistributed(account?: PromiseOrValue<string> | null, isKickback?: PromiseOrValue<boolean> | null, tcpRewards?: null): RewardsDistributedEventFilter;
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
        "TwapDurationUpdated(uint32)"(duration?: null): TwapDurationUpdatedEventFilter;
        TwapDurationUpdated(duration?: null): TwapDurationUpdatedEventFilter;
        "Unlend(address,uint256,uint256)"(account?: PromiseOrValue<string> | null, hueCount?: null, lendTokenCount?: null): UnlendEventFilter;
        Unlend(account?: PromiseOrValue<string> | null, hueCount?: null, lendTokenCount?: null): UnlendEventFilter;
    };
    estimateGas: {
        accounting(overrides?: CallOverrides): Promise<BigNumber>;
        accrueInterest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        adjustPosition(positionID: PromiseOrValue<BigNumberish>, debtChange: PromiseOrValue<BigNumberish>, collateralIncrease: PromiseOrValue<BigNumberish>, collateralDecrease: PromiseOrValue<BigNumberish>, ui: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimAllRewards(positionIDs: PromiseOrValue<BigNumberish>[], ui: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;
        createPosition(initialCollateral: PromiseOrValue<BigNumberish>, initialDebt: PromiseOrValue<BigNumberish>, ui: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        hue(overrides?: CallOverrides): Promise<BigNumber>;
        huePositionNFT(overrides?: CallOverrides): Promise<BigNumber>;
        init(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        interestPortionToLenders(overrides?: CallOverrides): Promise<BigNumber>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<BigNumber>;
        lend(hueCount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lendHue(overrides?: CallOverrides): Promise<BigNumber>;
        minPositionSize(overrides?: CallOverrides): Promise<BigNumber>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        removeKickback(positionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCollateralizationRequirement(requirement: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setInterestPortionToLenders(percentage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinPositionSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        systemGetUpdatedPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        truEth(overrides?: CallOverrides): Promise<BigNumber>;
        twapDuration(overrides?: CallOverrides): Promise<BigNumber>;
        unlend(lendTokenCount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        valueOfLendTokensInHue(lendTokenCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accounting(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrueInterest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        adjustPosition(positionID: PromiseOrValue<BigNumberish>, debtChange: PromiseOrValue<BigNumberish>, collateralIncrease: PromiseOrValue<BigNumberish>, collateralDecrease: PromiseOrValue<BigNumberish>, ui: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimAllRewards(positionIDs: PromiseOrValue<BigNumberish>[], ui: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collateralizationRequirement(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createPosition(initialCollateral: PromiseOrValue<BigNumberish>, initialDebt: PromiseOrValue<BigNumberish>, ui: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        currentPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        huePositionNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        interestPortionToLenders(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastPeriodGlobalInterestAccrued(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lend(hueCount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lendHue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minPositionSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeKickback(positionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCollateralizationRequirement(requirement: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setInterestPortionToLenders(percentage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinPositionSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        systemGetUpdatedPosition(positionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        truEth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        twapDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unlend(lendTokenCount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        valueOfLendTokensInHue(lendTokenCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
