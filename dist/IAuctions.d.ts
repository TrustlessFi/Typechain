import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IAuctionsInterface extends utils.Interface {
    functions: {
        "latestAuctionCompletionTime()": FunctionFragment;
        "stop()": FunctionFragment;
    };
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
export declare type DeficitAuctionBidEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], {
    auctionID: BigNumber;
    bidder: string;
    bid: BigNumber;
}>;
export declare type DeficitAuctionBidEventFilter = TypedEventFilter<DeficitAuctionBidEvent>;
export declare type DeficitAuctionSettledEvent = TypedEvent<[
    BigNumber,
    string
], {
    auctionID: BigNumber;
    winner: string;
}>;
export declare type DeficitAuctionSettledEventFilter = TypedEventFilter<DeficitAuctionSettledEvent>;
export declare type DeficitAuctionStartedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], {
    auctionID: BigNumber;
    count: BigNumber;
    maxEndTime: BigNumber;
}>;
export declare type DeficitAuctionStartedEventFilter = TypedEventFilter<DeficitAuctionStartedEvent>;
export declare type ExtensionPerBidUpdatedEvent = TypedEvent<[
    BigNumber
], {
    extension: BigNumber;
}>;
export declare type ExtensionPerBidUpdatedEventFilter = TypedEventFilter<ExtensionPerBidUpdatedEvent>;
export declare type MaxAuctionDurationUpdatedEvent = TypedEvent<[
    BigNumber
], {
    duration: BigNumber;
}>;
export declare type MaxAuctionDurationUpdatedEventFilter = TypedEventFilter<MaxAuctionDurationUpdatedEvent>;
export declare type MaxBatchSizeUpdatedEvent = TypedEvent<[
    BigNumber
], {
    size: BigNumber;
}>;
export declare type MaxBatchSizeUpdatedEventFilter = TypedEventFilter<MaxBatchSizeUpdatedEvent>;
export declare type MaxSurplusLotSizeUpdatedEvent = TypedEvent<[
    BigNumber
], {
    size: BigNumber;
}>;
export declare type MaxSurplusLotSizeUpdatedEventFilter = TypedEventFilter<MaxSurplusLotSizeUpdatedEvent>;
export declare type MinAuctionDurationUpdatedEvent = TypedEvent<[
    BigNumber
], {
    duration: BigNumber;
}>;
export declare type MinAuctionDurationUpdatedEventFilter = TypedEventFilter<MinAuctionDurationUpdatedEvent>;
export declare type MinBidDeltaUpdatedEvent = TypedEvent<[
    BigNumber
], {
    delta: BigNumber;
}>;
export declare type MinBidDeltaUpdatedEventFilter = TypedEventFilter<MinBidDeltaUpdatedEvent>;
export declare type MinLotSizeUpdatedEvent = TypedEvent<[
    BigNumber
], {
    size: BigNumber;
}>;
export declare type MinLotSizeUpdatedEventFilter = TypedEventFilter<MinLotSizeUpdatedEvent>;
export declare type ReservesBufferLowerBoundUpdatedEvent = TypedEvent<[
    BigNumber
], {
    bound: BigNumber;
}>;
export declare type ReservesBufferLowerBoundUpdatedEventFilter = TypedEventFilter<ReservesBufferLowerBoundUpdatedEvent>;
export declare type ReservesBufferUpperBoundUpdatedEvent = TypedEvent<[
    BigNumber
], {
    bound: BigNumber;
}>;
export declare type ReservesBufferUpperBoundUpdatedEventFilter = TypedEventFilter<ReservesBufferUpperBoundUpdatedEvent>;
export declare type SurplusAuctionBidEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], {
    auctionID: BigNumber;
    bidder: string;
    bid: BigNumber;
}>;
export declare type SurplusAuctionBidEventFilter = TypedEventFilter<SurplusAuctionBidEvent>;
export declare type SurplusAuctionSettledEvent = TypedEvent<[
    BigNumber,
    string
], {
    auctionID: BigNumber;
    winner: string;
}>;
export declare type SurplusAuctionSettledEventFilter = TypedEventFilter<SurplusAuctionSettledEvent>;
export declare type SurplusAuctionStartedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], {
    auctionID: BigNumber;
    count: BigNumber;
    maxEndTime: BigNumber;
}>;
export declare type SurplusAuctionStartedEventFilter = TypedEventFilter<SurplusAuctionStartedEvent>;
export declare type TwapDurationUpdatedEvent = TypedEvent<[
    number
], {
    duration: number;
}>;
export declare type TwapDurationUpdatedEventFilter = TypedEventFilter<TwapDurationUpdatedEvent>;
export declare type maxDeficitLotSizeUpdatedEvent = TypedEvent<[
    BigNumber
], {
    size: BigNumber;
}>;
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
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    latestAuctionCompletionTime(overrides?: CallOverrides): Promise<BigNumber>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        latestAuctionCompletionTime(overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DeficitAuctionBid(uint64,address,uint256)"(auctionID?: BigNumberish | null, bidder?: string | null, bid?: null): DeficitAuctionBidEventFilter;
        DeficitAuctionBid(auctionID?: BigNumberish | null, bidder?: string | null, bid?: null): DeficitAuctionBidEventFilter;
        "DeficitAuctionSettled(uint64,address)"(auctionID?: BigNumberish | null, winner?: string | null): DeficitAuctionSettledEventFilter;
        DeficitAuctionSettled(auctionID?: BigNumberish | null, winner?: string | null): DeficitAuctionSettledEventFilter;
        "DeficitAuctionStarted(uint64,uint256,uint64)"(auctionID?: BigNumberish | null, count?: BigNumberish | null, maxEndTime?: null): DeficitAuctionStartedEventFilter;
        DeficitAuctionStarted(auctionID?: BigNumberish | null, count?: BigNumberish | null, maxEndTime?: null): DeficitAuctionStartedEventFilter;
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
        "SurplusAuctionBid(uint64,address,uint256)"(auctionID?: BigNumberish | null, bidder?: string | null, bid?: null): SurplusAuctionBidEventFilter;
        SurplusAuctionBid(auctionID?: BigNumberish | null, bidder?: string | null, bid?: null): SurplusAuctionBidEventFilter;
        "SurplusAuctionSettled(uint64,address)"(auctionID?: BigNumberish | null, winner?: string | null): SurplusAuctionSettledEventFilter;
        SurplusAuctionSettled(auctionID?: BigNumberish | null, winner?: string | null): SurplusAuctionSettledEventFilter;
        "SurplusAuctionStarted(uint64,uint256,uint64)"(auctionID?: BigNumberish | null, count?: BigNumberish | null, maxEndTime?: null): SurplusAuctionStartedEventFilter;
        SurplusAuctionStarted(auctionID?: BigNumberish | null, count?: BigNumberish | null, maxEndTime?: null): SurplusAuctionStartedEventFilter;
        "TwapDurationUpdated(uint32)"(duration?: null): TwapDurationUpdatedEventFilter;
        TwapDurationUpdated(duration?: null): TwapDurationUpdatedEventFilter;
        "maxDeficitLotSizeUpdated(uint256)"(size?: null): maxDeficitLotSizeUpdatedEventFilter;
        maxDeficitLotSizeUpdated(size?: null): maxDeficitLotSizeUpdatedEventFilter;
    };
    estimateGas: {
        latestAuctionCompletionTime(overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        latestAuctionCompletionTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
