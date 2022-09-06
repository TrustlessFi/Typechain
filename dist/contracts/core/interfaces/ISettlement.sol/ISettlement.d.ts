import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface ISettlementInterface extends utils.Interface {
    functions: {
        "setEthPriceProvider(address)": FunctionFragment;
        "stakeTokensForNoPriceConfidence(uint256)": FunctionFragment;
        "stop()": FunctionFragment;
        "unstakeTokensForNoPriceConfidence()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "setEthPriceProvider" | "stakeTokensForNoPriceConfidence" | "stop" | "unstakeTokensForNoPriceConfidence"): FunctionFragment;
    encodeFunctionData(functionFragment: "setEthPriceProvider", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "stakeTokensForNoPriceConfidence", values: [PromiseOrValue<BigNumberish>]): string;
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
export interface UnstakedNoConfidenceTokensEventObject {
    account: string;
    count: BigNumber;
}
export declare type UnstakedNoConfidenceTokensEvent = TypedEvent<[
    string,
    BigNumber
], UnstakedNoConfidenceTokensEventObject>;
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
        setEthPriceProvider(aggregator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stakeTokensForNoPriceConfidence(countTCPToStake: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unstakeTokensForNoPriceConfidence(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    setEthPriceProvider(aggregator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stakeTokensForNoPriceConfidence(countTCPToStake: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unstakeTokensForNoPriceConfidence(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        setEthPriceProvider(aggregator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        stakeTokensForNoPriceConfidence(countTCPToStake: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        unstakeTokensForNoPriceConfidence(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "EthPriceProviderUpdated(address)"(provider?: null): EthPriceProviderUpdatedEventFilter;
        EthPriceProviderUpdated(provider?: null): EthPriceProviderUpdatedEventFilter;
        "NoConfidenceConfirmed(address)"(account?: PromiseOrValue<string> | null): NoConfidenceConfirmedEventFilter;
        NoConfidenceConfirmed(account?: PromiseOrValue<string> | null): NoConfidenceConfirmedEventFilter;
        "SettlementCollateralForHue(uint64,address,uint256,uint256)"(positionID?: PromiseOrValue<BigNumberish> | null, caller?: PromiseOrValue<string> | null, hueCount?: null, collateralCount?: null): SettlementCollateralForHueEventFilter;
        SettlementCollateralForHue(positionID?: PromiseOrValue<BigNumberish> | null, caller?: PromiseOrValue<string> | null, hueCount?: null, collateralCount?: null): SettlementCollateralForHueEventFilter;
        "SettlementInitialized(uint256)"(settlementDiscoveryStartTime?: null): SettlementInitializedEventFilter;
        SettlementInitialized(settlementDiscoveryStartTime?: null): SettlementInitializedEventFilter;
        "SettlementWithdrawCollateral(uint64,address,uint256)"(positionID?: PromiseOrValue<BigNumberish> | null, owner?: PromiseOrValue<string> | null, collateralToWithdraw?: null): SettlementWithdrawCollateralEventFilter;
        SettlementWithdrawCollateral(positionID?: PromiseOrValue<BigNumberish> | null, owner?: PromiseOrValue<string> | null, collateralToWithdraw?: null): SettlementWithdrawCollateralEventFilter;
        "StakedNoConfidenceTokens(address,uint256)"(account?: PromiseOrValue<string> | null, count?: null): StakedNoConfidenceTokensEventFilter;
        StakedNoConfidenceTokens(account?: PromiseOrValue<string> | null, count?: null): StakedNoConfidenceTokensEventFilter;
        "UnstakedNoConfidenceTokens(address,uint256)"(account?: PromiseOrValue<string> | null, count?: null): UnstakedNoConfidenceTokensEventFilter;
        UnstakedNoConfidenceTokens(account?: PromiseOrValue<string> | null, count?: null): UnstakedNoConfidenceTokensEventFilter;
    };
    estimateGas: {
        setEthPriceProvider(aggregator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stakeTokensForNoPriceConfidence(countTCPToStake: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unstakeTokensForNoPriceConfidence(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        setEthPriceProvider(aggregator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stakeTokensForNoPriceConfidence(countTCPToStake: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unstakeTokensForNoPriceConfidence(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
