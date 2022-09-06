import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IAuctionsInterface extends utils.Interface {
    functions: {
        "latestAuctionCompletionTime()": FunctionFragment;
        "stop()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "latestAuctionCompletionTime" | "stop"): FunctionFragment;
    encodeFunctionData(functionFragment: "latestAuctionCompletionTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    decodeFunctionResult(functionFragment: "latestAuctionCompletionTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    events: {
        "DeficitAuctionBid(uint64,address,uint256)": EventFragment;
        "DeficitAuctionSettled(uint64,address)": EventFragment;
        "DeficitAuctionStarted(uint64,uint256,uint64)": EventFragment;
        "ExtensionPerBidUpdated(uint64)": EventFragment;
        "MaxAuctionDurationUpdated(uint64)": EventFragment;
        "MaxBatchSizeUpdated(uint64)": EventFragment;
        "MaxSurplusLotSizeUpdated(uint256)": EventFragment;
        "MinAuctionDurationUpdated(uint64)": EventFragment;
        "MinBidDeltaUpdated(uint256)": EventFragment;
        "MinLotSizeUpdated(uint256)": EventFragment;
        "ReservesBufferLowerBoundUpdated(uint256)": EventFragment;
        "ReservesBufferUpperBoundUpdated(uint256)": EventFragment;
        "SurplusAuctionBid(uint64,address,uint256)": EventFragment;
        "SurplusAuctionSettled(uint64,address)": EventFragment;
        "SurplusAuctionStarted(uint64,uint256,uint64)": EventFragment;
        "TwapDurationUpdated(uint32)": EventFragment;
        "maxDeficitLotSizeUpdated(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DeficitAuctionBid"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DeficitAuctionSettled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DeficitAuctionStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExtensionPerBidUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxAuctionDurationUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxBatchSizeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxSurplusLotSizeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinAuctionDurationUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinBidDeltaUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinLotSizeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReservesBufferLowerBoundUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReservesBufferUpperBoundUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SurplusAuctionBid"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SurplusAuctionSettled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SurplusAuctionStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TwapDurationUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "maxDeficitLotSizeUpdated"): EventFragment;
}
export interface DeficitAuctionBidEventObject {
    auctionID: BigNumber;
    bidder: string;
    bid: BigNumber;
}
export declare type DeficitAuctionBidEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], DeficitAuctionBidEventObject>;
export declare type DeficitAuctionBidEventFilter = TypedEventFilter<DeficitAuctionBidEvent>;
export interface DeficitAuctionSettledEventObject {
    auctionID: BigNumber;
    winner: string;
}
export declare type DeficitAuctionSettledEvent = TypedEvent<[
    BigNumber,
    string
], DeficitAuctionSettledEventObject>;
export declare type DeficitAuctionSettledEventFilter = TypedEventFilter<DeficitAuctionSettledEvent>;
export interface DeficitAuctionStartedEventObject {
    auctionID: BigNumber;
    count: BigNumber;
    maxEndTime: BigNumber;
}
export declare type DeficitAuctionStartedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], DeficitAuctionStartedEventObject>;
export declare type DeficitAuctionStartedEventFilter = TypedEventFilter<DeficitAuctionStartedEvent>;
export interface ExtensionPerBidUpdatedEventObject {
    extension: BigNumber;
}
export declare type ExtensionPerBidUpdatedEvent = TypedEvent<[
    BigNumber
], ExtensionPerBidUpdatedEventObject>;
export declare type ExtensionPerBidUpdatedEventFilter = TypedEventFilter<ExtensionPerBidUpdatedEvent>;
export interface MaxAuctionDurationUpdatedEventObject {
    duration: BigNumber;
}
export declare type MaxAuctionDurationUpdatedEvent = TypedEvent<[
    BigNumber
], MaxAuctionDurationUpdatedEventObject>;
export declare type MaxAuctionDurationUpdatedEventFilter = TypedEventFilter<MaxAuctionDurationUpdatedEvent>;
export interface MaxBatchSizeUpdatedEventObject {
    size: BigNumber;
}
export declare type MaxBatchSizeUpdatedEvent = TypedEvent<[
    BigNumber
], MaxBatchSizeUpdatedEventObject>;
export declare type MaxBatchSizeUpdatedEventFilter = TypedEventFilter<MaxBatchSizeUpdatedEvent>;
export interface MaxSurplusLotSizeUpdatedEventObject {
    size: BigNumber;
}
export declare type MaxSurplusLotSizeUpdatedEvent = TypedEvent<[
    BigNumber
], MaxSurplusLotSizeUpdatedEventObject>;
export declare type MaxSurplusLotSizeUpdatedEventFilter = TypedEventFilter<MaxSurplusLotSizeUpdatedEvent>;
export interface MinAuctionDurationUpdatedEventObject {
    duration: BigNumber;
}
export declare type MinAuctionDurationUpdatedEvent = TypedEvent<[
    BigNumber
], MinAuctionDurationUpdatedEventObject>;
export declare type MinAuctionDurationUpdatedEventFilter = TypedEventFilter<MinAuctionDurationUpdatedEvent>;
export interface MinBidDeltaUpdatedEventObject {
    delta: BigNumber;
}
export declare type MinBidDeltaUpdatedEvent = TypedEvent<[
    BigNumber
], MinBidDeltaUpdatedEventObject>;
export declare type MinBidDeltaUpdatedEventFilter = TypedEventFilter<MinBidDeltaUpdatedEvent>;
export interface MinLotSizeUpdatedEventObject {
    size: BigNumber;
}
export declare type MinLotSizeUpdatedEvent = TypedEvent<[
    BigNumber
], MinLotSizeUpdatedEventObject>;
export declare type MinLotSizeUpdatedEventFilter = TypedEventFilter<MinLotSizeUpdatedEvent>;
export interface ReservesBufferLowerBoundUpdatedEventObject {
    bound: BigNumber;
}
export declare type ReservesBufferLowerBoundUpdatedEvent = TypedEvent<[
    BigNumber
], ReservesBufferLowerBoundUpdatedEventObject>;
export declare type ReservesBufferLowerBoundUpdatedEventFilter = TypedEventFilter<ReservesBufferLowerBoundUpdatedEvent>;
export interface ReservesBufferUpperBoundUpdatedEventObject {
    bound: BigNumber;
}
export declare type ReservesBufferUpperBoundUpdatedEvent = TypedEvent<[
    BigNumber
], ReservesBufferUpperBoundUpdatedEventObject>;
export declare type ReservesBufferUpperBoundUpdatedEventFilter = TypedEventFilter<ReservesBufferUpperBoundUpdatedEvent>;
export interface SurplusAuctionBidEventObject {
    auctionID: BigNumber;
    bidder: string;
    bid: BigNumber;
}
export declare type SurplusAuctionBidEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], SurplusAuctionBidEventObject>;
export declare type SurplusAuctionBidEventFilter = TypedEventFilter<SurplusAuctionBidEvent>;
export interface SurplusAuctionSettledEventObject {
    auctionID: BigNumber;
    winner: string;
}
export declare type SurplusAuctionSettledEvent = TypedEvent<[
    BigNumber,
    string
], SurplusAuctionSettledEventObject>;
export declare type SurplusAuctionSettledEventFilter = TypedEventFilter<SurplusAuctionSettledEvent>;
export interface SurplusAuctionStartedEventObject {
    auctionID: BigNumber;
    count: BigNumber;
    maxEndTime: BigNumber;
}
export declare type SurplusAuctionStartedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], SurplusAuctionStartedEventObject>;
export declare type SurplusAuctionStartedEventFilter = TypedEventFilter<SurplusAuctionStartedEvent>;
export interface TwapDurationUpdatedEventObject {
    duration: number;
}
export declare type TwapDurationUpdatedEvent = TypedEvent<[
    number
], TwapDurationUpdatedEventObject>;
export declare type TwapDurationUpdatedEventFilter = TypedEventFilter<TwapDurationUpdatedEvent>;
export interface maxDeficitLotSizeUpdatedEventObject {
    size: BigNumber;
}
export declare type maxDeficitLotSizeUpdatedEvent = TypedEvent<[
    BigNumber
], maxDeficitLotSizeUpdatedEventObject>;
export declare type maxDeficitLotSizeUpdatedEventFilter = TypedEventFilter<maxDeficitLotSizeUpdatedEvent>;
export interface IAuctions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAuctionsInterface;
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
        latestAuctionCompletionTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    latestAuctionCompletionTime(overrides?: CallOverrides): Promise<BigNumber>;
    stop(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        latestAuctionCompletionTime(overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DeficitAuctionBid(uint64,address,uint256)"(auctionID?: PromiseOrValue<BigNumberish> | null, bidder?: PromiseOrValue<string> | null, bid?: null): DeficitAuctionBidEventFilter;
        DeficitAuctionBid(auctionID?: PromiseOrValue<BigNumberish> | null, bidder?: PromiseOrValue<string> | null, bid?: null): DeficitAuctionBidEventFilter;
        "DeficitAuctionSettled(uint64,address)"(auctionID?: PromiseOrValue<BigNumberish> | null, winner?: PromiseOrValue<string> | null): DeficitAuctionSettledEventFilter;
        DeficitAuctionSettled(auctionID?: PromiseOrValue<BigNumberish> | null, winner?: PromiseOrValue<string> | null): DeficitAuctionSettledEventFilter;
        "DeficitAuctionStarted(uint64,uint256,uint64)"(auctionID?: PromiseOrValue<BigNumberish> | null, count?: PromiseOrValue<BigNumberish> | null, maxEndTime?: null): DeficitAuctionStartedEventFilter;
        DeficitAuctionStarted(auctionID?: PromiseOrValue<BigNumberish> | null, count?: PromiseOrValue<BigNumberish> | null, maxEndTime?: null): DeficitAuctionStartedEventFilter;
        "ExtensionPerBidUpdated(uint64)"(extension?: null): ExtensionPerBidUpdatedEventFilter;
        ExtensionPerBidUpdated(extension?: null): ExtensionPerBidUpdatedEventFilter;
        "MaxAuctionDurationUpdated(uint64)"(duration?: null): MaxAuctionDurationUpdatedEventFilter;
        MaxAuctionDurationUpdated(duration?: null): MaxAuctionDurationUpdatedEventFilter;
        "MaxBatchSizeUpdated(uint64)"(size?: null): MaxBatchSizeUpdatedEventFilter;
        MaxBatchSizeUpdated(size?: null): MaxBatchSizeUpdatedEventFilter;
        "MaxSurplusLotSizeUpdated(uint256)"(size?: null): MaxSurplusLotSizeUpdatedEventFilter;
        MaxSurplusLotSizeUpdated(size?: null): MaxSurplusLotSizeUpdatedEventFilter;
        "MinAuctionDurationUpdated(uint64)"(duration?: null): MinAuctionDurationUpdatedEventFilter;
        MinAuctionDurationUpdated(duration?: null): MinAuctionDurationUpdatedEventFilter;
        "MinBidDeltaUpdated(uint256)"(delta?: null): MinBidDeltaUpdatedEventFilter;
        MinBidDeltaUpdated(delta?: null): MinBidDeltaUpdatedEventFilter;
        "MinLotSizeUpdated(uint256)"(size?: null): MinLotSizeUpdatedEventFilter;
        MinLotSizeUpdated(size?: null): MinLotSizeUpdatedEventFilter;
        "ReservesBufferLowerBoundUpdated(uint256)"(bound?: null): ReservesBufferLowerBoundUpdatedEventFilter;
        ReservesBufferLowerBoundUpdated(bound?: null): ReservesBufferLowerBoundUpdatedEventFilter;
        "ReservesBufferUpperBoundUpdated(uint256)"(bound?: null): ReservesBufferUpperBoundUpdatedEventFilter;
        ReservesBufferUpperBoundUpdated(bound?: null): ReservesBufferUpperBoundUpdatedEventFilter;
        "SurplusAuctionBid(uint64,address,uint256)"(auctionID?: PromiseOrValue<BigNumberish> | null, bidder?: PromiseOrValue<string> | null, bid?: null): SurplusAuctionBidEventFilter;
        SurplusAuctionBid(auctionID?: PromiseOrValue<BigNumberish> | null, bidder?: PromiseOrValue<string> | null, bid?: null): SurplusAuctionBidEventFilter;
        "SurplusAuctionSettled(uint64,address)"(auctionID?: PromiseOrValue<BigNumberish> | null, winner?: PromiseOrValue<string> | null): SurplusAuctionSettledEventFilter;
        SurplusAuctionSettled(auctionID?: PromiseOrValue<BigNumberish> | null, winner?: PromiseOrValue<string> | null): SurplusAuctionSettledEventFilter;
        "SurplusAuctionStarted(uint64,uint256,uint64)"(auctionID?: PromiseOrValue<BigNumberish> | null, count?: PromiseOrValue<BigNumberish> | null, maxEndTime?: null): SurplusAuctionStartedEventFilter;
        SurplusAuctionStarted(auctionID?: PromiseOrValue<BigNumberish> | null, count?: PromiseOrValue<BigNumberish> | null, maxEndTime?: null): SurplusAuctionStartedEventFilter;
        "TwapDurationUpdated(uint32)"(duration?: null): TwapDurationUpdatedEventFilter;
        TwapDurationUpdated(duration?: null): TwapDurationUpdatedEventFilter;
        "maxDeficitLotSizeUpdated(uint256)"(size?: null): maxDeficitLotSizeUpdatedEventFilter;
        maxDeficitLotSizeUpdated(size?: null): maxDeficitLotSizeUpdatedEventFilter;
    };
    estimateGas: {
        latestAuctionCompletionTime(overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        latestAuctionCompletionTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
