import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IGovernorInterface extends utils.Interface {
    functions: {
        "accounting()": FunctionFragment;
        "auctions()": FunctionFragment;
        "calculateCurrentDailyDebtRewardCount()": FunctionFragment;
        "calculateCurrentDailyLiquidityRewardCount()": FunctionFragment;
        "currentPhase()": FunctionFragment;
        "enforcedDecentralization()": FunctionFragment;
        "execute(address,string,bytes)": FunctionFragment;
        "executeShutdown()": FunctionFragment;
        "hue()": FunctionFragment;
        "huePositionNFT()": FunctionFragment;
        "increaseTCPAllocation(address,uint256)": FunctionFragment;
        "isShutdown()": FunctionFragment;
        "lendHue()": FunctionFragment;
        "liquidations()": FunctionFragment;
        "market()": FunctionFragment;
        "mintIncentive(address,uint256)": FunctionFragment;
        "mintVotingRewards(address,uint256)": FunctionFragment;
        "prices()": FunctionFragment;
        "protocolLock()": FunctionFragment;
        "rates()": FunctionFragment;
        "requireDebtServicesAccess(address)": FunctionFragment;
        "requireHueReservesBurnAccess(address)": FunctionFragment;
        "requireInitializePoolAccess(address)": FunctionFragment;
        "requireUpdatePositionAccess(address)": FunctionFragment;
        "requireValidAction(address,string)": FunctionFragment;
        "rewards()": FunctionFragment;
        "settlement()": FunctionFragment;
        "shutdownTime()": FunctionFragment;
        "tcp()": FunctionFragment;
        "tcpAllocation()": FunctionFragment;
        "upgradeAuctions(address)": FunctionFragment;
        "upgradeLiquidations(address)": FunctionFragment;
        "upgradeMarket(address)": FunctionFragment;
        "upgradePrices(address)": FunctionFragment;
        "upgradeProtocol(address)": FunctionFragment;
        "upgradeRates(address)": FunctionFragment;
        "upgradeRewards(address)": FunctionFragment;
        "upgradeSettlement(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accounting" | "auctions" | "calculateCurrentDailyDebtRewardCount" | "calculateCurrentDailyLiquidityRewardCount" | "currentPhase" | "enforcedDecentralization" | "execute" | "executeShutdown" | "hue" | "huePositionNFT" | "increaseTCPAllocation" | "isShutdown" | "lendHue" | "liquidations" | "market" | "mintIncentive" | "mintVotingRewards" | "prices" | "protocolLock" | "rates" | "requireDebtServicesAccess" | "requireHueReservesBurnAccess" | "requireInitializePoolAccess" | "requireUpdatePositionAccess" | "requireValidAction" | "rewards" | "settlement" | "shutdownTime" | "tcp" | "tcpAllocation" | "upgradeAuctions" | "upgradeLiquidations" | "upgradeMarket" | "upgradePrices" | "upgradeProtocol" | "upgradeRates" | "upgradeRewards" | "upgradeSettlement"): FunctionFragment;
    encodeFunctionData(functionFragment: "accounting", values?: undefined): string;
    encodeFunctionData(functionFragment: "auctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateCurrentDailyDebtRewardCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateCurrentDailyLiquidityRewardCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentPhase", values?: undefined): string;
    encodeFunctionData(functionFragment: "enforcedDecentralization", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeShutdown", values?: undefined): string;
    encodeFunctionData(functionFragment: "hue", values?: undefined): string;
    encodeFunctionData(functionFragment: "huePositionNFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseTCPAllocation", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isShutdown", values?: undefined): string;
    encodeFunctionData(functionFragment: "lendHue", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidations", values?: undefined): string;
    encodeFunctionData(functionFragment: "market", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintIncentive", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintVotingRewards", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "prices", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolLock", values?: undefined): string;
    encodeFunctionData(functionFragment: "rates", values?: undefined): string;
    encodeFunctionData(functionFragment: "requireDebtServicesAccess", values: [string]): string;
    encodeFunctionData(functionFragment: "requireHueReservesBurnAccess", values: [string]): string;
    encodeFunctionData(functionFragment: "requireInitializePoolAccess", values: [string]): string;
    encodeFunctionData(functionFragment: "requireUpdatePositionAccess", values: [string]): string;
    encodeFunctionData(functionFragment: "requireValidAction", values: [string, string]): string;
    encodeFunctionData(functionFragment: "rewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "settlement", values?: undefined): string;
    encodeFunctionData(functionFragment: "shutdownTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "tcp", values?: undefined): string;
    encodeFunctionData(functionFragment: "tcpAllocation", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeAuctions", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeLiquidations", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeMarket", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradePrices", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeProtocol", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeRates", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeSettlement", values: [string]): string;
    decodeFunctionResult(functionFragment: "accounting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "auctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateCurrentDailyDebtRewardCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateCurrentDailyLiquidityRewardCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPhase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enforcedDecentralization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeShutdown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "huePositionNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseTCPAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isShutdown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lendHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "market", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintVotingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolLock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireDebtServicesAccess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireHueReservesBurnAccess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireInitializePoolAccess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireUpdatePositionAccess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireValidAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settlement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shutdownTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tcp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tcpAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeAuctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeLiquidations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradePrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeProtocol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeSettlement", data: BytesLike): Result;
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
export interface ContractUpgradedEventObject {
    contractName: string;
    contractAddress: string;
}
export declare type ContractUpgradedEvent = TypedEvent<[
    string,
    string
], ContractUpgradedEventObject>;
export declare type ContractUpgradedEventFilter = TypedEventFilter<ContractUpgradedEvent>;
export interface ProtocolUpgradedEventObject {
    newGovernor: string;
}
export declare type ProtocolUpgradedEvent = TypedEvent<[
    string
], ProtocolUpgradedEventObject>;
export declare type ProtocolUpgradedEventFilter = TypedEventFilter<ProtocolUpgradedEvent>;
export interface ShutdownExecutedEventObject {
}
export declare type ShutdownExecutedEvent = TypedEvent<[], ShutdownExecutedEventObject>;
export declare type ShutdownExecutedEventFilter = TypedEventFilter<ShutdownExecutedEvent>;
export interface ShutdownTokensLockedEventObject {
    locker: string;
    count: BigNumber;
}
export declare type ShutdownTokensLockedEvent = TypedEvent<[
    string,
    BigNumber
], ShutdownTokensLockedEventObject>;
export declare type ShutdownTokensLockedEventFilter = TypedEventFilter<ShutdownTokensLockedEvent>;
export interface ShutdownTokensUnlockedEventObject {
    locker: string;
    count: BigNumber;
}
export declare type ShutdownTokensUnlockedEvent = TypedEvent<[
    string,
    BigNumber
], ShutdownTokensUnlockedEventObject>;
export declare type ShutdownTokensUnlockedEventFilter = TypedEventFilter<ShutdownTokensUnlockedEvent>;
export interface IGovernor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGovernorInterface;
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
        auctions(overrides?: CallOverrides): Promise<[string]>;
        calculateCurrentDailyDebtRewardCount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        calculateCurrentDailyLiquidityRewardCount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        currentPhase(overrides?: CallOverrides): Promise<[number]>;
        enforcedDecentralization(overrides?: CallOverrides): Promise<[string]>;
        execute(target: string, signature: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeShutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hue(overrides?: CallOverrides): Promise<[string]>;
        huePositionNFT(overrides?: CallOverrides): Promise<[string]>;
        increaseTCPAllocation(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isShutdown(overrides?: CallOverrides): Promise<[boolean]>;
        lendHue(overrides?: CallOverrides): Promise<[string]>;
        liquidations(overrides?: CallOverrides): Promise<[string]>;
        market(overrides?: CallOverrides): Promise<[string]>;
        mintIncentive(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintVotingRewards(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        prices(overrides?: CallOverrides): Promise<[string]>;
        protocolLock(overrides?: CallOverrides): Promise<[string]>;
        rates(overrides?: CallOverrides): Promise<[string]>;
        requireDebtServicesAccess(caller: string, overrides?: CallOverrides): Promise<[void]>;
        requireHueReservesBurnAccess(caller: string, overrides?: CallOverrides): Promise<[void]>;
        requireInitializePoolAccess(caller: string, overrides?: CallOverrides): Promise<[void]>;
        requireUpdatePositionAccess(caller: string, overrides?: CallOverrides): Promise<[void]>;
        requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<[void]>;
        rewards(overrides?: CallOverrides): Promise<[string]>;
        settlement(overrides?: CallOverrides): Promise<[string]>;
        shutdownTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        tcp(overrides?: CallOverrides): Promise<[string]>;
        tcpAllocation(overrides?: CallOverrides): Promise<[string]>;
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
    };
    accounting(overrides?: CallOverrides): Promise<string>;
    auctions(overrides?: CallOverrides): Promise<string>;
    calculateCurrentDailyDebtRewardCount(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    calculateCurrentDailyLiquidityRewardCount(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    currentPhase(overrides?: CallOverrides): Promise<number>;
    enforcedDecentralization(overrides?: CallOverrides): Promise<string>;
    execute(target: string, signature: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeShutdown(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hue(overrides?: CallOverrides): Promise<string>;
    huePositionNFT(overrides?: CallOverrides): Promise<string>;
    increaseTCPAllocation(to: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isShutdown(overrides?: CallOverrides): Promise<boolean>;
    lendHue(overrides?: CallOverrides): Promise<string>;
    liquidations(overrides?: CallOverrides): Promise<string>;
    market(overrides?: CallOverrides): Promise<string>;
    mintIncentive(dest: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintVotingRewards(to: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    prices(overrides?: CallOverrides): Promise<string>;
    protocolLock(overrides?: CallOverrides): Promise<string>;
    rates(overrides?: CallOverrides): Promise<string>;
    requireDebtServicesAccess(caller: string, overrides?: CallOverrides): Promise<void>;
    requireHueReservesBurnAccess(caller: string, overrides?: CallOverrides): Promise<void>;
    requireInitializePoolAccess(caller: string, overrides?: CallOverrides): Promise<void>;
    requireUpdatePositionAccess(caller: string, overrides?: CallOverrides): Promise<void>;
    requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<void>;
    rewards(overrides?: CallOverrides): Promise<string>;
    settlement(overrides?: CallOverrides): Promise<string>;
    shutdownTime(overrides?: CallOverrides): Promise<BigNumber>;
    tcp(overrides?: CallOverrides): Promise<string>;
    tcpAllocation(overrides?: CallOverrides): Promise<string>;
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
    callStatic: {
        accounting(overrides?: CallOverrides): Promise<string>;
        auctions(overrides?: CallOverrides): Promise<string>;
        calculateCurrentDailyDebtRewardCount(overrides?: CallOverrides): Promise<BigNumber>;
        calculateCurrentDailyLiquidityRewardCount(overrides?: CallOverrides): Promise<BigNumber>;
        currentPhase(overrides?: CallOverrides): Promise<number>;
        enforcedDecentralization(overrides?: CallOverrides): Promise<string>;
        execute(target: string, signature: string, data: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        executeShutdown(overrides?: CallOverrides): Promise<void>;
        hue(overrides?: CallOverrides): Promise<string>;
        huePositionNFT(overrides?: CallOverrides): Promise<string>;
        increaseTCPAllocation(to: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isShutdown(overrides?: CallOverrides): Promise<boolean>;
        lendHue(overrides?: CallOverrides): Promise<string>;
        liquidations(overrides?: CallOverrides): Promise<string>;
        market(overrides?: CallOverrides): Promise<string>;
        mintIncentive(dest: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mintVotingRewards(to: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        prices(overrides?: CallOverrides): Promise<string>;
        protocolLock(overrides?: CallOverrides): Promise<string>;
        rates(overrides?: CallOverrides): Promise<string>;
        requireDebtServicesAccess(caller: string, overrides?: CallOverrides): Promise<void>;
        requireHueReservesBurnAccess(caller: string, overrides?: CallOverrides): Promise<void>;
        requireInitializePoolAccess(caller: string, overrides?: CallOverrides): Promise<void>;
        requireUpdatePositionAccess(caller: string, overrides?: CallOverrides): Promise<void>;
        requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<void>;
        rewards(overrides?: CallOverrides): Promise<string>;
        settlement(overrides?: CallOverrides): Promise<string>;
        shutdownTime(overrides?: CallOverrides): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<string>;
        tcpAllocation(overrides?: CallOverrides): Promise<string>;
        upgradeAuctions(_auctions: string, overrides?: CallOverrides): Promise<void>;
        upgradeLiquidations(_liquidations: string, overrides?: CallOverrides): Promise<void>;
        upgradeMarket(_market: string, overrides?: CallOverrides): Promise<void>;
        upgradePrices(_prices: string, overrides?: CallOverrides): Promise<void>;
        upgradeProtocol(newGovernor: string, overrides?: CallOverrides): Promise<void>;
        upgradeRates(_rates: string, overrides?: CallOverrides): Promise<void>;
        upgradeRewards(_rewards: string, overrides?: CallOverrides): Promise<void>;
        upgradeSettlement(_settlement: string, overrides?: CallOverrides): Promise<void>;
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
        accounting(overrides?: CallOverrides): Promise<BigNumber>;
        auctions(overrides?: CallOverrides): Promise<BigNumber>;
        calculateCurrentDailyDebtRewardCount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        calculateCurrentDailyLiquidityRewardCount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        currentPhase(overrides?: CallOverrides): Promise<BigNumber>;
        enforcedDecentralization(overrides?: CallOverrides): Promise<BigNumber>;
        execute(target: string, signature: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeShutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hue(overrides?: CallOverrides): Promise<BigNumber>;
        huePositionNFT(overrides?: CallOverrides): Promise<BigNumber>;
        increaseTCPAllocation(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isShutdown(overrides?: CallOverrides): Promise<BigNumber>;
        lendHue(overrides?: CallOverrides): Promise<BigNumber>;
        liquidations(overrides?: CallOverrides): Promise<BigNumber>;
        market(overrides?: CallOverrides): Promise<BigNumber>;
        mintIncentive(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintVotingRewards(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        prices(overrides?: CallOverrides): Promise<BigNumber>;
        protocolLock(overrides?: CallOverrides): Promise<BigNumber>;
        rates(overrides?: CallOverrides): Promise<BigNumber>;
        requireDebtServicesAccess(caller: string, overrides?: CallOverrides): Promise<BigNumber>;
        requireHueReservesBurnAccess(caller: string, overrides?: CallOverrides): Promise<BigNumber>;
        requireInitializePoolAccess(caller: string, overrides?: CallOverrides): Promise<BigNumber>;
        requireUpdatePositionAccess(caller: string, overrides?: CallOverrides): Promise<BigNumber>;
        requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewards(overrides?: CallOverrides): Promise<BigNumber>;
        settlement(overrides?: CallOverrides): Promise<BigNumber>;
        shutdownTime(overrides?: CallOverrides): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<BigNumber>;
        tcpAllocation(overrides?: CallOverrides): Promise<BigNumber>;
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
    };
    populateTransaction: {
        accounting(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        auctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateCurrentDailyDebtRewardCount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        calculateCurrentDailyLiquidityRewardCount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        currentPhase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enforcedDecentralization(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(target: string, signature: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeShutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        huePositionNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseTCPAllocation(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isShutdown(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lendHue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidations(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        market(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintIncentive(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintVotingRewards(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        prices(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolLock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rates(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireDebtServicesAccess(caller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireHueReservesBurnAccess(caller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireInitializePoolAccess(caller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireUpdatePositionAccess(caller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        settlement(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        shutdownTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tcp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tcpAllocation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
    };
}
