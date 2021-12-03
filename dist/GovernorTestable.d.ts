import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ProtocolDataStruct = {
    accounting: string;
    auctions: string;
    enforcedDecentralization: string;
    governorAlpha: string;
    hue: string;
    huePositionNFT: string;
    lendHue: string;
    liquidations: string;
    market: string;
    prices: string;
    protocolLock: string;
    rates: string;
    rewards: string;
    settlement: string;
    tcp: string;
    timelock: string;
    tcpAllocation: string;
};
export declare type ProtocolDataStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
] & {
    accounting: string;
    auctions: string;
    enforcedDecentralization: string;
    governorAlpha: string;
    hue: string;
    huePositionNFT: string;
    lendHue: string;
    liquidations: string;
    market: string;
    prices: string;
    protocolLock: string;
    rates: string;
    rewards: string;
    settlement: string;
    tcp: string;
    timelock: string;
    tcpAllocation: string;
};
export interface GovernorTestableInterface extends utils.Interface {
    functions: {
        "EMERGENCY_SHUTDOWN_THRESHOLD()": FunctionFragment;
        "accounting()": FunctionFragment;
        "auctions()": FunctionFragment;
        "borrowRewardsPortion()": FunctionFragment;
        "calculateCurrentDailyDebtRewardCount()": FunctionFragment;
        "calculateCurrentDailyLiquidityRewardCount()": FunctionFragment;
        "currentPeriod()": FunctionFragment;
        "currentPhase()": FunctionFragment;
        "deployer()": FunctionFragment;
        "emergencyShutdownThresholdMet()": FunctionFragment;
        "emergencyShutdownTokensLocked(address)": FunctionFragment;
        "enforcedDecentralization()": FunctionFragment;
        "execute(address,string,bytes)": FunctionFragment;
        "executeEmergencyShutdown()": FunctionFragment;
        "executeShutdown()": FunctionFragment;
        "firstPeriod()": FunctionFragment;
        "firstRewardsPeriod()": FunctionFragment;
        "governorAlpha()": FunctionFragment;
        "hue()": FunctionFragment;
        "huePositionNFT()": FunctionFragment;
        "increaseTCPAllocation(address,uint256)": FunctionFragment;
        "increaseTCPAllocationOverride(address,uint256)": FunctionFragment;
        "init((address,address,address,address,address,address,address,address,address,address,address,address,address,address,address,address,address))": FunctionFragment;
        "isShutdown()": FunctionFragment;
        "lendHue()": FunctionFragment;
        "liquidations()": FunctionFragment;
        "lockTokensForEmergencyShutdown(uint256)": FunctionFragment;
        "market()": FunctionFragment;
        "maxTotalDailyRewardsAllocation()": FunctionFragment;
        "mintIncentive(address,uint256)": FunctionFragment;
        "mintVotingRewards(address,uint256)": FunctionFragment;
        "periodLength()": FunctionFragment;
        "periodRewards()": FunctionFragment;
        "prices()": FunctionFragment;
        "protocolLock()": FunctionFragment;
        "rates()": FunctionFragment;
        "requireDebtServicesAccess(address)": FunctionFragment;
        "requireHueReservesBurnAccess(address)": FunctionFragment;
        "requireInitializePoolAccess(address)": FunctionFragment;
        "requireUpdatePositionAccess(address)": FunctionFragment;
        "requireValidAction(address,string)": FunctionFragment;
        "rewards()": FunctionFragment;
        "setBorrowRewardsPortion(uint64)": FunctionFragment;
        "setFirstRewardsPeriodToCurrentPeriod()": FunctionFragment;
        "setMockTcpAllocation(address)": FunctionFragment;
        "setPhaseOneStartTime(uint64)": FunctionFragment;
        "settlement()": FunctionFragment;
        "shutdownTime()": FunctionFragment;
        "tcp()": FunctionFragment;
        "tcpAllocation()": FunctionFragment;
        "timelock()": FunctionFragment;
        "totalTcpAllocated()": FunctionFragment;
        "unlockTokensForEmergencyShutdown()": FunctionFragment;
        "upgradeAuctions(address)": FunctionFragment;
        "upgradeLiquidations(address)": FunctionFragment;
        "upgradeMarket(address)": FunctionFragment;
        "upgradePrices(address)": FunctionFragment;
        "upgradeProtocol(address)": FunctionFragment;
        "upgradeRates(address)": FunctionFragment;
        "upgradeRewards(address)": FunctionFragment;
        "upgradeSettlement(address)": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "EMERGENCY_SHUTDOWN_THRESHOLD", values?: undefined): string;
    encodeFunctionData(functionFragment: "accounting", values?: undefined): string;
    encodeFunctionData(functionFragment: "auctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowRewardsPortion", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateCurrentDailyDebtRewardCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateCurrentDailyLiquidityRewardCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentPhase", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "emergencyShutdownThresholdMet", values?: undefined): string;
    encodeFunctionData(functionFragment: "emergencyShutdownTokensLocked", values: [string]): string;
    encodeFunctionData(functionFragment: "enforcedDecentralization", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeEmergencyShutdown", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeShutdown", values?: undefined): string;
    encodeFunctionData(functionFragment: "firstPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "firstRewardsPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "governorAlpha", values?: undefined): string;
    encodeFunctionData(functionFragment: "hue", values?: undefined): string;
    encodeFunctionData(functionFragment: "huePositionNFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseTCPAllocation", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseTCPAllocationOverride", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "init", values: [ProtocolDataStruct]): string;
    encodeFunctionData(functionFragment: "isShutdown", values?: undefined): string;
    encodeFunctionData(functionFragment: "lendHue", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidations", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockTokensForEmergencyShutdown", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "market", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxTotalDailyRewardsAllocation", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintIncentive", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintVotingRewards", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "periodLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "prices", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolLock", values?: undefined): string;
    encodeFunctionData(functionFragment: "rates", values?: undefined): string;
    encodeFunctionData(functionFragment: "requireDebtServicesAccess", values: [string]): string;
    encodeFunctionData(functionFragment: "requireHueReservesBurnAccess", values: [string]): string;
    encodeFunctionData(functionFragment: "requireInitializePoolAccess", values: [string]): string;
    encodeFunctionData(functionFragment: "requireUpdatePositionAccess", values: [string]): string;
    encodeFunctionData(functionFragment: "requireValidAction", values: [string, string]): string;
    encodeFunctionData(functionFragment: "rewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "setBorrowRewardsPortion", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setFirstRewardsPeriodToCurrentPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMockTcpAllocation", values: [string]): string;
    encodeFunctionData(functionFragment: "setPhaseOneStartTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "settlement", values?: undefined): string;
    encodeFunctionData(functionFragment: "shutdownTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "tcp", values?: undefined): string;
    encodeFunctionData(functionFragment: "tcpAllocation", values?: undefined): string;
    encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalTcpAllocated", values?: undefined): string;
    encodeFunctionData(functionFragment: "unlockTokensForEmergencyShutdown", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeAuctions", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeLiquidations", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeMarket", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradePrices", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeProtocol", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeRates", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeSettlement", values: [string]): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "EMERGENCY_SHUTDOWN_THRESHOLD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accounting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "auctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowRewardsPortion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateCurrentDailyDebtRewardCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateCurrentDailyLiquidityRewardCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPhase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyShutdownThresholdMet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyShutdownTokensLocked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enforcedDecentralization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeEmergencyShutdown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeShutdown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstRewardsPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governorAlpha", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "huePositionNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseTCPAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseTCPAllocationOverride", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isShutdown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lendHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockTokensForEmergencyShutdown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "market", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxTotalDailyRewardsAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintVotingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolLock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireDebtServicesAccess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireHueReservesBurnAccess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireInitializePoolAccess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireUpdatePositionAccess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireValidAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBorrowRewardsPortion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFirstRewardsPeriodToCurrentPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMockTcpAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPhaseOneStartTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settlement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shutdownTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tcp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tcpAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalTcpAllocated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockTokensForEmergencyShutdown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeAuctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeLiquidations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradePrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeProtocol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeSettlement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
    events: {
        "ContractUpgraded(string,address)": EventFragment;
        "ProtocolUpgraded(address)": EventFragment;
        "ShutdownExecuted()": EventFragment;
        "ShutdownTokensLocked(address,uint256)": EventFragment;
        "ShutdownTokensUnlocked(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProtocolUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ShutdownExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ShutdownTokensLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ShutdownTokensUnlocked"): EventFragment;
}
export declare type ContractUpgradedEvent = TypedEvent<[
    string,
    string
], {
    contractName: string;
    contractAddress: string;
}>;
export declare type ContractUpgradedEventFilter = TypedEventFilter<ContractUpgradedEvent>;
export declare type ProtocolUpgradedEvent = TypedEvent<[
    string
], {
    newGovernor: string;
}>;
export declare type ProtocolUpgradedEventFilter = TypedEventFilter<ProtocolUpgradedEvent>;
export declare type ShutdownExecutedEvent = TypedEvent<[], {}>;
export declare type ShutdownExecutedEventFilter = TypedEventFilter<ShutdownExecutedEvent>;
export declare type ShutdownTokensLockedEvent = TypedEvent<[
    string,
    BigNumber
], {
    locker: string;
    count: BigNumber;
}>;
export declare type ShutdownTokensLockedEventFilter = TypedEventFilter<ShutdownTokensLockedEvent>;
export declare type ShutdownTokensUnlockedEvent = TypedEvent<[
    string,
    BigNumber
], {
    locker: string;
    count: BigNumber;
}>;
export declare type ShutdownTokensUnlockedEventFilter = TypedEventFilter<ShutdownTokensUnlockedEvent>;
export interface GovernorTestable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GovernorTestableInterface;
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
        EMERGENCY_SHUTDOWN_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>;
        accounting(overrides?: CallOverrides): Promise<[string]>;
        auctions(overrides?: CallOverrides): Promise<[string]>;
        borrowRewardsPortion(overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateCurrentDailyDebtRewardCount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        calculateCurrentDailyLiquidityRewardCount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        currentPeriod(overrides?: CallOverrides): Promise<[BigNumber] & {
            period: BigNumber;
        }>;
        currentPhase(overrides?: CallOverrides): Promise<[number]>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        emergencyShutdownThresholdMet(overrides?: CallOverrides): Promise<[boolean]>;
        emergencyShutdownTokensLocked(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        enforcedDecentralization(overrides?: CallOverrides): Promise<[string]>;
        execute(target: string, signature: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeEmergencyShutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeShutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        firstRewardsPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        governorAlpha(overrides?: CallOverrides): Promise<[string]>;
        hue(overrides?: CallOverrides): Promise<[string]>;
        huePositionNFT(overrides?: CallOverrides): Promise<[string]>;
        increaseTCPAllocation(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increaseTCPAllocationOverride(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        init(pd: ProtocolDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isShutdown(overrides?: CallOverrides): Promise<[boolean]>;
        lendHue(overrides?: CallOverrides): Promise<[string]>;
        liquidations(overrides?: CallOverrides): Promise<[string]>;
        lockTokensForEmergencyShutdown(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        market(overrides?: CallOverrides): Promise<[string]>;
        maxTotalDailyRewardsAllocation(overrides?: CallOverrides): Promise<[BigNumber]>;
        mintIncentive(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintVotingRewards(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        periodLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        periodRewards(overrides?: CallOverrides): Promise<[
            BigNumber,
            number
        ] & {
            periodRewards: BigNumber;
            currentCalculatedPeriod: number;
        }>;
        prices(overrides?: CallOverrides): Promise<[string]>;
        protocolLock(overrides?: CallOverrides): Promise<[string]>;
        rates(overrides?: CallOverrides): Promise<[string]>;
        requireDebtServicesAccess(caller: string, overrides?: CallOverrides): Promise<[void]>;
        requireHueReservesBurnAccess(caller: string, overrides?: CallOverrides): Promise<[void]>;
        requireInitializePoolAccess(caller: string, overrides?: CallOverrides): Promise<[void]>;
        requireUpdatePositionAccess(caller: string, overrides?: CallOverrides): Promise<[void]>;
        requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<[void]>;
        rewards(overrides?: CallOverrides): Promise<[string]>;
        setBorrowRewardsPortion(portion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFirstRewardsPeriodToCurrentPeriod(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMockTcpAllocation(mockTcpAllocation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPhaseOneStartTime(phaseOneStartTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        settlement(overrides?: CallOverrides): Promise<[string]>;
        shutdownTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        tcp(overrides?: CallOverrides): Promise<[string]>;
        tcpAllocation(overrides?: CallOverrides): Promise<[string]>;
        timelock(overrides?: CallOverrides): Promise<[string]>;
        totalTcpAllocated(overrides?: CallOverrides): Promise<[BigNumber]>;
        unlockTokensForEmergencyShutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeAuctions(_auctions: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeLiquidations(_liquidations: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeMarket(_market: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradePrices(_prices: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeProtocol(newGovernor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeRates(_rates: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeRewards(_rewards: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeSettlement(_settlement: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    EMERGENCY_SHUTDOWN_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
    accounting(overrides?: CallOverrides): Promise<string>;
    auctions(overrides?: CallOverrides): Promise<string>;
    borrowRewardsPortion(overrides?: CallOverrides): Promise<BigNumber>;
    calculateCurrentDailyDebtRewardCount(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    calculateCurrentDailyLiquidityRewardCount(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    currentPhase(overrides?: CallOverrides): Promise<number>;
    deployer(overrides?: CallOverrides): Promise<string>;
    emergencyShutdownThresholdMet(overrides?: CallOverrides): Promise<boolean>;
    emergencyShutdownTokensLocked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    enforcedDecentralization(overrides?: CallOverrides): Promise<string>;
    execute(target: string, signature: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeEmergencyShutdown(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeShutdown(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    firstRewardsPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    governorAlpha(overrides?: CallOverrides): Promise<string>;
    hue(overrides?: CallOverrides): Promise<string>;
    huePositionNFT(overrides?: CallOverrides): Promise<string>;
    increaseTCPAllocation(to: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increaseTCPAllocationOverride(to: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    init(pd: ProtocolDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isShutdown(overrides?: CallOverrides): Promise<boolean>;
    lendHue(overrides?: CallOverrides): Promise<string>;
    liquidations(overrides?: CallOverrides): Promise<string>;
    lockTokensForEmergencyShutdown(count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    market(overrides?: CallOverrides): Promise<string>;
    maxTotalDailyRewardsAllocation(overrides?: CallOverrides): Promise<BigNumber>;
    mintIncentive(to: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintVotingRewards(to: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    periodLength(overrides?: CallOverrides): Promise<BigNumber>;
    periodRewards(overrides?: CallOverrides): Promise<[
        BigNumber,
        number
    ] & {
        periodRewards: BigNumber;
        currentCalculatedPeriod: number;
    }>;
    prices(overrides?: CallOverrides): Promise<string>;
    protocolLock(overrides?: CallOverrides): Promise<string>;
    rates(overrides?: CallOverrides): Promise<string>;
    requireDebtServicesAccess(caller: string, overrides?: CallOverrides): Promise<void>;
    requireHueReservesBurnAccess(caller: string, overrides?: CallOverrides): Promise<void>;
    requireInitializePoolAccess(caller: string, overrides?: CallOverrides): Promise<void>;
    requireUpdatePositionAccess(caller: string, overrides?: CallOverrides): Promise<void>;
    requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<void>;
    rewards(overrides?: CallOverrides): Promise<string>;
    setBorrowRewardsPortion(portion: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFirstRewardsPeriodToCurrentPeriod(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMockTcpAllocation(mockTcpAllocation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPhaseOneStartTime(phaseOneStartTime: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    settlement(overrides?: CallOverrides): Promise<string>;
    shutdownTime(overrides?: CallOverrides): Promise<BigNumber>;
    tcp(overrides?: CallOverrides): Promise<string>;
    tcpAllocation(overrides?: CallOverrides): Promise<string>;
    timelock(overrides?: CallOverrides): Promise<string>;
    totalTcpAllocated(overrides?: CallOverrides): Promise<BigNumber>;
    unlockTokensForEmergencyShutdown(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeAuctions(_auctions: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeLiquidations(_liquidations: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeMarket(_market: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradePrices(_prices: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeProtocol(newGovernor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeRates(_rates: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeRewards(_rewards: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeSettlement(_settlement: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        EMERGENCY_SHUTDOWN_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
        accounting(overrides?: CallOverrides): Promise<string>;
        auctions(overrides?: CallOverrides): Promise<string>;
        borrowRewardsPortion(overrides?: CallOverrides): Promise<BigNumber>;
        calculateCurrentDailyDebtRewardCount(overrides?: CallOverrides): Promise<BigNumber>;
        calculateCurrentDailyLiquidityRewardCount(overrides?: CallOverrides): Promise<BigNumber>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        currentPhase(overrides?: CallOverrides): Promise<number>;
        deployer(overrides?: CallOverrides): Promise<string>;
        emergencyShutdownThresholdMet(overrides?: CallOverrides): Promise<boolean>;
        emergencyShutdownTokensLocked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        enforcedDecentralization(overrides?: CallOverrides): Promise<string>;
        execute(target: string, signature: string, data: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        executeEmergencyShutdown(overrides?: CallOverrides): Promise<void>;
        executeShutdown(overrides?: CallOverrides): Promise<void>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        firstRewardsPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        governorAlpha(overrides?: CallOverrides): Promise<string>;
        hue(overrides?: CallOverrides): Promise<string>;
        huePositionNFT(overrides?: CallOverrides): Promise<string>;
        increaseTCPAllocation(to: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        increaseTCPAllocationOverride(to: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        init(pd: ProtocolDataStruct, overrides?: CallOverrides): Promise<void>;
        isShutdown(overrides?: CallOverrides): Promise<boolean>;
        lendHue(overrides?: CallOverrides): Promise<string>;
        liquidations(overrides?: CallOverrides): Promise<string>;
        lockTokensForEmergencyShutdown(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        market(overrides?: CallOverrides): Promise<string>;
        maxTotalDailyRewardsAllocation(overrides?: CallOverrides): Promise<BigNumber>;
        mintIncentive(to: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mintVotingRewards(to: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        periodRewards(overrides?: CallOverrides): Promise<[
            BigNumber,
            number
        ] & {
            periodRewards: BigNumber;
            currentCalculatedPeriod: number;
        }>;
        prices(overrides?: CallOverrides): Promise<string>;
        protocolLock(overrides?: CallOverrides): Promise<string>;
        rates(overrides?: CallOverrides): Promise<string>;
        requireDebtServicesAccess(caller: string, overrides?: CallOverrides): Promise<void>;
        requireHueReservesBurnAccess(caller: string, overrides?: CallOverrides): Promise<void>;
        requireInitializePoolAccess(caller: string, overrides?: CallOverrides): Promise<void>;
        requireUpdatePositionAccess(caller: string, overrides?: CallOverrides): Promise<void>;
        requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<void>;
        rewards(overrides?: CallOverrides): Promise<string>;
        setBorrowRewardsPortion(portion: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setFirstRewardsPeriodToCurrentPeriod(overrides?: CallOverrides): Promise<void>;
        setMockTcpAllocation(mockTcpAllocation: string, overrides?: CallOverrides): Promise<void>;
        setPhaseOneStartTime(phaseOneStartTime: BigNumberish, overrides?: CallOverrides): Promise<void>;
        settlement(overrides?: CallOverrides): Promise<string>;
        shutdownTime(overrides?: CallOverrides): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<string>;
        tcpAllocation(overrides?: CallOverrides): Promise<string>;
        timelock(overrides?: CallOverrides): Promise<string>;
        totalTcpAllocated(overrides?: CallOverrides): Promise<BigNumber>;
        unlockTokensForEmergencyShutdown(overrides?: CallOverrides): Promise<void>;
        upgradeAuctions(_auctions: string, overrides?: CallOverrides): Promise<void>;
        upgradeLiquidations(_liquidations: string, overrides?: CallOverrides): Promise<void>;
        upgradeMarket(_market: string, overrides?: CallOverrides): Promise<void>;
        upgradePrices(_prices: string, overrides?: CallOverrides): Promise<void>;
        upgradeProtocol(newGovernor: string, overrides?: CallOverrides): Promise<void>;
        upgradeRates(_rates: string, overrides?: CallOverrides): Promise<void>;
        upgradeRewards(_rewards: string, overrides?: CallOverrides): Promise<void>;
        upgradeSettlement(_settlement: string, overrides?: CallOverrides): Promise<void>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "ContractUpgraded(string,address)"(contractName?: string | null, contractAddress?: string | null): ContractUpgradedEventFilter;
        ContractUpgraded(contractName?: string | null, contractAddress?: string | null): ContractUpgradedEventFilter;
        "ProtocolUpgraded(address)"(newGovernor?: string | null): ProtocolUpgradedEventFilter;
        ProtocolUpgraded(newGovernor?: string | null): ProtocolUpgradedEventFilter;
        "ShutdownExecuted()"(): ShutdownExecutedEventFilter;
        ShutdownExecuted(): ShutdownExecutedEventFilter;
        "ShutdownTokensLocked(address,uint256)"(locker?: string | null, count?: null): ShutdownTokensLockedEventFilter;
        ShutdownTokensLocked(locker?: string | null, count?: null): ShutdownTokensLockedEventFilter;
        "ShutdownTokensUnlocked(address,uint256)"(locker?: string | null, count?: null): ShutdownTokensUnlockedEventFilter;
        ShutdownTokensUnlocked(locker?: string | null, count?: null): ShutdownTokensUnlockedEventFilter;
    };
    estimateGas: {
        EMERGENCY_SHUTDOWN_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
        accounting(overrides?: CallOverrides): Promise<BigNumber>;
        auctions(overrides?: CallOverrides): Promise<BigNumber>;
        borrowRewardsPortion(overrides?: CallOverrides): Promise<BigNumber>;
        calculateCurrentDailyDebtRewardCount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        calculateCurrentDailyLiquidityRewardCount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        currentPhase(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        emergencyShutdownThresholdMet(overrides?: CallOverrides): Promise<BigNumber>;
        emergencyShutdownTokensLocked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        enforcedDecentralization(overrides?: CallOverrides): Promise<BigNumber>;
        execute(target: string, signature: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeEmergencyShutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeShutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        firstRewardsPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        governorAlpha(overrides?: CallOverrides): Promise<BigNumber>;
        hue(overrides?: CallOverrides): Promise<BigNumber>;
        huePositionNFT(overrides?: CallOverrides): Promise<BigNumber>;
        increaseTCPAllocation(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increaseTCPAllocationOverride(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        init(pd: ProtocolDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isShutdown(overrides?: CallOverrides): Promise<BigNumber>;
        lendHue(overrides?: CallOverrides): Promise<BigNumber>;
        liquidations(overrides?: CallOverrides): Promise<BigNumber>;
        lockTokensForEmergencyShutdown(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        market(overrides?: CallOverrides): Promise<BigNumber>;
        maxTotalDailyRewardsAllocation(overrides?: CallOverrides): Promise<BigNumber>;
        mintIncentive(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintVotingRewards(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        periodRewards(overrides?: CallOverrides): Promise<BigNumber>;
        prices(overrides?: CallOverrides): Promise<BigNumber>;
        protocolLock(overrides?: CallOverrides): Promise<BigNumber>;
        rates(overrides?: CallOverrides): Promise<BigNumber>;
        requireDebtServicesAccess(caller: string, overrides?: CallOverrides): Promise<BigNumber>;
        requireHueReservesBurnAccess(caller: string, overrides?: CallOverrides): Promise<BigNumber>;
        requireInitializePoolAccess(caller: string, overrides?: CallOverrides): Promise<BigNumber>;
        requireUpdatePositionAccess(caller: string, overrides?: CallOverrides): Promise<BigNumber>;
        requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewards(overrides?: CallOverrides): Promise<BigNumber>;
        setBorrowRewardsPortion(portion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFirstRewardsPeriodToCurrentPeriod(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMockTcpAllocation(mockTcpAllocation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPhaseOneStartTime(phaseOneStartTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        settlement(overrides?: CallOverrides): Promise<BigNumber>;
        shutdownTime(overrides?: CallOverrides): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<BigNumber>;
        tcpAllocation(overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<BigNumber>;
        totalTcpAllocated(overrides?: CallOverrides): Promise<BigNumber>;
        unlockTokensForEmergencyShutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeAuctions(_auctions: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeLiquidations(_liquidations: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeMarket(_market: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradePrices(_prices: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeProtocol(newGovernor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeRates(_rates: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeRewards(_rewards: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeSettlement(_settlement: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        EMERGENCY_SHUTDOWN_THRESHOLD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accounting(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        auctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowRewardsPortion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateCurrentDailyDebtRewardCount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        calculateCurrentDailyLiquidityRewardCount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        currentPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentPhase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emergencyShutdownThresholdMet(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emergencyShutdownTokensLocked(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enforcedDecentralization(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(target: string, signature: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeEmergencyShutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeShutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        firstRewardsPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governorAlpha(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        huePositionNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseTCPAllocation(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increaseTCPAllocationOverride(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        init(pd: ProtocolDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isShutdown(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lendHue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidations(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockTokensForEmergencyShutdown(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        market(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxTotalDailyRewardsAllocation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintIncentive(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintVotingRewards(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        periodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        prices(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolLock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rates(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireDebtServicesAccess(caller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireHueReservesBurnAccess(caller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireInitializePoolAccess(caller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireUpdatePositionAccess(caller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setBorrowRewardsPortion(portion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFirstRewardsPeriodToCurrentPeriod(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMockTcpAllocation(mockTcpAllocation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPhaseOneStartTime(phaseOneStartTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        settlement(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        shutdownTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tcp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tcpAllocation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalTcpAllocated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unlockTokensForEmergencyShutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeAuctions(_auctions: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeLiquidations(_liquidations: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeMarket(_market: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradePrices(_prices: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeProtocol(newGovernor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeRates(_rates: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeRewards(_rewards: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeSettlement(_settlement: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
