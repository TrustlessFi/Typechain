import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ISettlementInterface extends utils.Interface {
    functions: {
        "setEthPriceProvider(address)": FunctionFragment;
        "stakeTokensForNoPriceConfidence(uint256)": FunctionFragment;
        "stop()": FunctionFragment;
        "unstakeTokensForNoPriceConfidence()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "setEthPriceProvider", values: [string]): string;
    encodeFunctionData(functionFragment: "stakeTokensForNoPriceConfidence", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "unstakeTokensForNoPriceConfidence", values?: undefined): string;
    decodeFunctionResult(functionFragment: "setEthPriceProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeTokensForNoPriceConfidence", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstakeTokensForNoPriceConfidence", data: BytesLike): Result;
    events: {
        "EthPriceProviderUpdated(address)": EventFragment;
        "NoConfidenceConfirmed(address)": EventFragment;
        "SettlementCollateralForHue(uint64,address,uint256,uint256)": EventFragment;
        "SettlementInitialized(uint256)": EventFragment;
        "SettlementWithdrawCollateral(uint64,address,uint256)": EventFragment;
        "StakedNoConfidenceTokens(address,uint256)": EventFragment;
        "UnstakedNoConfidenceTokens(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "EthPriceProviderUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NoConfidenceConfirmed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SettlementCollateralForHue"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SettlementInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SettlementWithdrawCollateral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakedNoConfidenceTokens"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnstakedNoConfidenceTokens"): EventFragment;
}
export declare type EthPriceProviderUpdatedEvent = TypedEvent<[
    string
], {
    provider: string;
}>;
export declare type EthPriceProviderUpdatedEventFilter = TypedEventFilter<EthPriceProviderUpdatedEvent>;
export declare type NoConfidenceConfirmedEvent = TypedEvent<[
    string
], {
    account: string;
}>;
export declare type NoConfidenceConfirmedEventFilter = TypedEventFilter<NoConfidenceConfirmedEvent>;
export declare type SettlementCollateralForHueEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber
], {
    positionID: BigNumber;
    caller: string;
    hueCount: BigNumber;
    collateralCount: BigNumber;
}>;
export declare type SettlementCollateralForHueEventFilter = TypedEventFilter<SettlementCollateralForHueEvent>;
export declare type SettlementInitializedEvent = TypedEvent<[
    BigNumber
], {
    settlementDiscoveryStartTime: BigNumber;
}>;
export declare type SettlementInitializedEventFilter = TypedEventFilter<SettlementInitializedEvent>;
export declare type SettlementWithdrawCollateralEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], {
    positionID: BigNumber;
    owner: string;
    collateralToWithdraw: BigNumber;
}>;
export declare type SettlementWithdrawCollateralEventFilter = TypedEventFilter<SettlementWithdrawCollateralEvent>;
export declare type StakedNoConfidenceTokensEvent = TypedEvent<[
    string,
    BigNumber
], {
    account: string;
    count: BigNumber;
}>;
export declare type StakedNoConfidenceTokensEventFilter = TypedEventFilter<StakedNoConfidenceTokensEvent>;
export declare type UnstakedNoConfidenceTokensEvent = TypedEvent<[
    string,
    BigNumber
], {
    account: string;
    count: BigNumber;
}>;
export declare type UnstakedNoConfidenceTokensEventFilter = TypedEventFilter<UnstakedNoConfidenceTokensEvent>;
export interface ISettlement extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISettlementInterface;
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
        setEthPriceProvider(aggregator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakeTokensForNoPriceConfidence(countTCPToStake: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unstakeTokensForNoPriceConfidence(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    setEthPriceProvider(aggregator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakeTokensForNoPriceConfidence(countTCPToStake: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unstakeTokensForNoPriceConfidence(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        setEthPriceProvider(aggregator: string, overrides?: CallOverrides): Promise<void>;
        stakeTokensForNoPriceConfidence(countTCPToStake: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        unstakeTokensForNoPriceConfidence(overrides?: CallOverrides): Promise<void>;
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
        "UnstakedNoConfidenceTokens(address,uint256)"(account?: string | null, count?: null): UnstakedNoConfidenceTokensEventFilter;
        UnstakedNoConfidenceTokens(account?: string | null, count?: null): UnstakedNoConfidenceTokensEventFilter;
    };
    estimateGas: {
        setEthPriceProvider(aggregator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakeTokensForNoPriceConfidence(countTCPToStake: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unstakeTokensForNoPriceConfidence(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        setEthPriceProvider(aggregator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakeTokensForNoPriceConfidence(countTCPToStake: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unstakeTokensForNoPriceConfidence(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
