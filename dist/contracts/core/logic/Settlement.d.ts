import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export declare namespace ISettlement {
    type ConstructorParamsStruct = {
        Governor: string;
        ProtocolLock: string;
        PriceProvider: string;
        Accounting: string;
        Tcp: string;
        Hue: string;
    };
    type ConstructorParamsStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        Governor: string;
        ProtocolLock: string;
        PriceProvider: string;
        Accounting: string;
        Tcp: string;
        Hue: string;
    };
}
export interface SettlementInterface extends utils.Interface {
    functions: {
        "SETTLEMENT_PRICE_NO_CONFIDENCE_THRESHOLD()": FunctionFragment;
        "accounting()": FunctionFragment;
        "confirmNoPriceConfidence()": FunctionFragment;
        "confirmPrice()": FunctionFragment;
        "ethPriceProvider()": FunctionFragment;
        "getCollateralForHue(uint64,uint256)": FunctionFragment;
        "getRecentPrice()": FunctionFragment;
        "governor()": FunctionFragment;
        "hue()": FunctionFragment;
        "initializeSettlement()": FunctionFragment;
        "noPriceConfidenceUserVotes(address)": FunctionFragment;
        "priceConfidence()": FunctionFragment;
        "priceDiscoveryStartTime()": FunctionFragment;
        "setEthPriceProvider(address)": FunctionFragment;
        "settlementPrice()": FunctionFragment;
        "settlementStage()": FunctionFragment;
        "stakeTokensForNoPriceConfidence(uint256)": FunctionFragment;
        "stop()": FunctionFragment;
        "stopped()": FunctionFragment;
        "tcp()": FunctionFragment;
        "thresholdMet()": FunctionFragment;
        "unstakeTokensForNoPriceConfidence()": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
        "withdrawCollateral(uint64)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "SETTLEMENT_PRICE_NO_CONFIDENCE_THRESHOLD" | "accounting" | "confirmNoPriceConfidence" | "confirmPrice" | "ethPriceProvider" | "getCollateralForHue" | "getRecentPrice" | "governor" | "hue" | "initializeSettlement" | "noPriceConfidenceUserVotes" | "priceConfidence" | "priceDiscoveryStartTime" | "setEthPriceProvider" | "settlementPrice" | "settlementStage" | "stakeTokensForNoPriceConfidence" | "stop" | "stopped" | "tcp" | "thresholdMet" | "unstakeTokensForNoPriceConfidence" | "validUpdate" | "withdrawCollateral"): FunctionFragment;
    encodeFunctionData(functionFragment: "SETTLEMENT_PRICE_NO_CONFIDENCE_THRESHOLD", values?: undefined): string;
    encodeFunctionData(functionFragment: "accounting", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmNoPriceConfidence", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "ethPriceProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCollateralForHue", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRecentPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "hue", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeSettlement", values?: undefined): string;
    encodeFunctionData(functionFragment: "noPriceConfidenceUserVotes", values: [string]): string;
    encodeFunctionData(functionFragment: "priceConfidence", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceDiscoveryStartTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "setEthPriceProvider", values: [string]): string;
    encodeFunctionData(functionFragment: "settlementPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "settlementStage", values?: undefined): string;
    encodeFunctionData(functionFragment: "stakeTokensForNoPriceConfidence", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "tcp", values?: undefined): string;
    encodeFunctionData(functionFragment: "thresholdMet", values?: undefined): string;
    encodeFunctionData(functionFragment: "unstakeTokensForNoPriceConfidence", values?: undefined): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawCollateral", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "SETTLEMENT_PRICE_NO_CONFIDENCE_THRESHOLD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accounting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmNoPriceConfidence", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ethPriceProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollateralForHue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRecentPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeSettlement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "noPriceConfidenceUserVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceConfidence", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceDiscoveryStartTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEthPriceProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settlementPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settlementStage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeTokensForNoPriceConfidence", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tcp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "thresholdMet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstakeTokensForNoPriceConfidence", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawCollateral", data: BytesLike): Result;
    events: {
        "EthPriceProviderUpdated(address)": EventFragment;
        "NoConfidenceConfirmed(address)": EventFragment;
        "SettlementCollateralForHue(uint64,address,uint256,uint256)": EventFragment;
        "SettlementInitialized(uint256)": EventFragment;
        "SettlementWithdrawCollateral(uint64,address,uint256)": EventFragment;
        "StakedNoConfidenceTokens(address,uint256)": EventFragment;
        "Stopped()": EventFragment;
        "UnstakedNoConfidenceTokens(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "EthPriceProviderUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NoConfidenceConfirmed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SettlementCollateralForHue"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SettlementInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SettlementWithdrawCollateral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakedNoConfidenceTokens"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnstakedNoConfidenceTokens"): EventFragment;
}
export interface EthPriceProviderUpdatedEventObject {
    provider: string;
}
export declare type EthPriceProviderUpdatedEvent = TypedEvent<[
    string
], EthPriceProviderUpdatedEventObject>;
export declare type EthPriceProviderUpdatedEventFilter = TypedEventFilter<EthPriceProviderUpdatedEvent>;
export interface NoConfidenceConfirmedEventObject {
    account: string;
}
export declare type NoConfidenceConfirmedEvent = TypedEvent<[
    string
], NoConfidenceConfirmedEventObject>;
export declare type NoConfidenceConfirmedEventFilter = TypedEventFilter<NoConfidenceConfirmedEvent>;
export interface SettlementCollateralForHueEventObject {
    positionID: BigNumber;
    caller: string;
    hueCount: BigNumber;
    collateralCount: BigNumber;
}
export declare type SettlementCollateralForHueEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber
], SettlementCollateralForHueEventObject>;
export declare type SettlementCollateralForHueEventFilter = TypedEventFilter<SettlementCollateralForHueEvent>;
export interface SettlementInitializedEventObject {
    settlementDiscoveryStartTime: BigNumber;
}
export declare type SettlementInitializedEvent = TypedEvent<[
    BigNumber
], SettlementInitializedEventObject>;
export declare type SettlementInitializedEventFilter = TypedEventFilter<SettlementInitializedEvent>;
export interface SettlementWithdrawCollateralEventObject {
    positionID: BigNumber;
    owner: string;
    collateralToWithdraw: BigNumber;
}
export declare type SettlementWithdrawCollateralEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], SettlementWithdrawCollateralEventObject>;
export declare type SettlementWithdrawCollateralEventFilter = TypedEventFilter<SettlementWithdrawCollateralEvent>;
export interface StakedNoConfidenceTokensEventObject {
    account: string;
    count: BigNumber;
}
export declare type StakedNoConfidenceTokensEvent = TypedEvent<[
    string,
    BigNumber
], StakedNoConfidenceTokensEventObject>;
export declare type StakedNoConfidenceTokensEventFilter = TypedEventFilter<StakedNoConfidenceTokensEvent>;
export interface StoppedEventObject {
}
export declare type StoppedEvent = TypedEvent<[], StoppedEventObject>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
export interface UnstakedNoConfidenceTokensEventObject {
    account: string;
    count: BigNumber;
}
export declare type UnstakedNoConfidenceTokensEvent = TypedEvent<[
    string,
    BigNumber
], UnstakedNoConfidenceTokensEventObject>;
export declare type UnstakedNoConfidenceTokensEventFilter = TypedEventFilter<UnstakedNoConfidenceTokensEvent>;
export interface Settlement extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SettlementInterface;
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
        SETTLEMENT_PRICE_NO_CONFIDENCE_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>;
        accounting(overrides?: CallOverrides): Promise<[string]>;
        confirmNoPriceConfidence(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        confirmPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        ethPriceProvider(overrides?: CallOverrides): Promise<[string]>;
        getCollateralForHue(positionID: BigNumberish, hueCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getRecentPrice(overrides?: CallOverrides): Promise<[BigNumber] & {
            ethPrice: BigNumber;
        }>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        hue(overrides?: CallOverrides): Promise<[string]>;
        initializeSettlement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        noPriceConfidenceUserVotes(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        priceConfidence(overrides?: CallOverrides): Promise<[boolean]>;
        priceDiscoveryStartTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        setEthPriceProvider(provider: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        settlementPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        settlementStage(overrides?: CallOverrides): Promise<[number]>;
        stakeTokensForNoPriceConfidence(countTCPToStake: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        tcp(overrides?: CallOverrides): Promise<[string]>;
        thresholdMet(overrides?: CallOverrides): Promise<[boolean]>;
        unstakeTokensForNoPriceConfidence(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        withdrawCollateral(positionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    SETTLEMENT_PRICE_NO_CONFIDENCE_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
    accounting(overrides?: CallOverrides): Promise<string>;
    confirmNoPriceConfidence(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    confirmPrice(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ethPriceProvider(overrides?: CallOverrides): Promise<string>;
    getCollateralForHue(positionID: BigNumberish, hueCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getRecentPrice(overrides?: CallOverrides): Promise<BigNumber>;
    governor(overrides?: CallOverrides): Promise<string>;
    hue(overrides?: CallOverrides): Promise<string>;
    initializeSettlement(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    noPriceConfidenceUserVotes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    priceConfidence(overrides?: CallOverrides): Promise<boolean>;
    priceDiscoveryStartTime(overrides?: CallOverrides): Promise<BigNumber>;
    setEthPriceProvider(provider: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    settlementPrice(overrides?: CallOverrides): Promise<BigNumber>;
    settlementStage(overrides?: CallOverrides): Promise<number>;
    stakeTokensForNoPriceConfidence(countTCPToStake: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    tcp(overrides?: CallOverrides): Promise<string>;
    thresholdMet(overrides?: CallOverrides): Promise<boolean>;
    unstakeTokensForNoPriceConfidence(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    withdrawCollateral(positionID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        SETTLEMENT_PRICE_NO_CONFIDENCE_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
        accounting(overrides?: CallOverrides): Promise<string>;
        confirmNoPriceConfidence(overrides?: CallOverrides): Promise<void>;
        confirmPrice(overrides?: CallOverrides): Promise<void>;
        ethPriceProvider(overrides?: CallOverrides): Promise<string>;
        getCollateralForHue(positionID: BigNumberish, hueCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getRecentPrice(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<string>;
        hue(overrides?: CallOverrides): Promise<string>;
        initializeSettlement(overrides?: CallOverrides): Promise<void>;
        noPriceConfidenceUserVotes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        priceConfidence(overrides?: CallOverrides): Promise<boolean>;
        priceDiscoveryStartTime(overrides?: CallOverrides): Promise<BigNumber>;
        setEthPriceProvider(provider: string, overrides?: CallOverrides): Promise<void>;
        settlementPrice(overrides?: CallOverrides): Promise<BigNumber>;
        settlementStage(overrides?: CallOverrides): Promise<number>;
        stakeTokensForNoPriceConfidence(countTCPToStake: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        tcp(overrides?: CallOverrides): Promise<string>;
        thresholdMet(overrides?: CallOverrides): Promise<boolean>;
        unstakeTokensForNoPriceConfidence(overrides?: CallOverrides): Promise<void>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        withdrawCollateral(positionID: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "EthPriceProviderUpdated(address)"(provider?: null): EthPriceProviderUpdatedEventFilter;
        EthPriceProviderUpdated(provider?: null): EthPriceProviderUpdatedEventFilter;
        "NoConfidenceConfirmed(address)"(account?: string | null): NoConfidenceConfirmedEventFilter;
        NoConfidenceConfirmed(account?: string | null): NoConfidenceConfirmedEventFilter;
        "SettlementCollateralForHue(uint64,address,uint256,uint256)"(positionID?: BigNumberish | null, caller?: string | null, hueCount?: null, collateralCount?: null): SettlementCollateralForHueEventFilter;
        SettlementCollateralForHue(positionID?: BigNumberish | null, caller?: string | null, hueCount?: null, collateralCount?: null): SettlementCollateralForHueEventFilter;
        "SettlementInitialized(uint256)"(settlementDiscoveryStartTime?: null): SettlementInitializedEventFilter;
        SettlementInitialized(settlementDiscoveryStartTime?: null): SettlementInitializedEventFilter;
        "SettlementWithdrawCollateral(uint64,address,uint256)"(positionID?: BigNumberish | null, owner?: string | null, collateralToWithdraw?: null): SettlementWithdrawCollateralEventFilter;
        SettlementWithdrawCollateral(positionID?: BigNumberish | null, owner?: string | null, collateralToWithdraw?: null): SettlementWithdrawCollateralEventFilter;
        "StakedNoConfidenceTokens(address,uint256)"(account?: string | null, count?: null): StakedNoConfidenceTokensEventFilter;
        StakedNoConfidenceTokens(account?: string | null, count?: null): StakedNoConfidenceTokensEventFilter;
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
        "UnstakedNoConfidenceTokens(address,uint256)"(account?: string | null, count?: null): UnstakedNoConfidenceTokensEventFilter;
        UnstakedNoConfidenceTokens(account?: string | null, count?: null): UnstakedNoConfidenceTokensEventFilter;
    };
    estimateGas: {
        SETTLEMENT_PRICE_NO_CONFIDENCE_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
        accounting(overrides?: CallOverrides): Promise<BigNumber>;
        confirmNoPriceConfidence(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        confirmPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        ethPriceProvider(overrides?: CallOverrides): Promise<BigNumber>;
        getCollateralForHue(positionID: BigNumberish, hueCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getRecentPrice(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        hue(overrides?: CallOverrides): Promise<BigNumber>;
        initializeSettlement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        noPriceConfidenceUserVotes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        priceConfidence(overrides?: CallOverrides): Promise<BigNumber>;
        priceDiscoveryStartTime(overrides?: CallOverrides): Promise<BigNumber>;
        setEthPriceProvider(provider: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        settlementPrice(overrides?: CallOverrides): Promise<BigNumber>;
        settlementStage(overrides?: CallOverrides): Promise<BigNumber>;
        stakeTokensForNoPriceConfidence(countTCPToStake: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<BigNumber>;
        thresholdMet(overrides?: CallOverrides): Promise<BigNumber>;
        unstakeTokensForNoPriceConfidence(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawCollateral(positionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        SETTLEMENT_PRICE_NO_CONFIDENCE_THRESHOLD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accounting(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        confirmNoPriceConfidence(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        confirmPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        ethPriceProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCollateralForHue(positionID: BigNumberish, hueCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getRecentPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializeSettlement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        noPriceConfidenceUserVotes(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceConfidence(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceDiscoveryStartTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setEthPriceProvider(provider: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        settlementPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        settlementStage(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakeTokensForNoPriceConfidence(countTCPToStake: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tcp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        thresholdMet(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unstakeTokensForNoPriceConfidence(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawCollateral(positionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
