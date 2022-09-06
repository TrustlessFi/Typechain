import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace IAuctions {
    type ConstructorParamsStruct = {
        Governor: PromiseOrValue<string>;
        ProtocolLock: PromiseOrValue<string>;
        Hue: PromiseOrValue<string>;
    };
    type ConstructorParamsStructOutput = [string, string, string] & {
        Governor: string;
        ProtocolLock: string;
        Hue: string;
    };
    type AuctionStruct = {
        count: PromiseOrValue<BigNumberish>;
        bid: PromiseOrValue<BigNumberish>;
        bidder: PromiseOrValue<string>;
        endTime: PromiseOrValue<BigNumberish>;
        maxEndTime: PromiseOrValue<BigNumberish>;
    };
    type AuctionStructOutput = [
        BigNumber,
        BigNumber,
        string,
        number,
        number
    ] & {
        count: BigNumber;
        bid: BigNumber;
        bidder: string;
        endTime: number;
        maxEndTime: number;
    };
}
export interface AuctionsTestableInterface extends utils.Interface {
    functions: {
        "aggregateAuctionSize(uint256,uint256)": FunctionFragment;
        "bidDeficitAuction(uint64,uint128)": FunctionFragment;
        "bidSurplusAuction(uint64,uint128)": FunctionFragment;
        "checkReservesAndStartAuctions()": FunctionFragment;
        "deficitAuction(uint64)": FunctionFragment;
        "deficitAuctionComplete(uint64)": FunctionFragment;
        "deficitAuctionCount()": FunctionFragment;
        "deficitAuctionExists(uint64)": FunctionFragment;
        "deficitAuctionLive(uint64)": FunctionFragment;
        "extensionPerBid()": FunctionFragment;
        "getAllAuctions(uint64,bool)": FunctionFragment;
        "governor()": FunctionFragment;
        "hue()": FunctionFragment;
        "hueToBeBought()": FunctionFragment;
        "hueToBeSold()": FunctionFragment;
        "latestAuctionCompletionTime()": FunctionFragment;
        "maxAuctionDuration()": FunctionFragment;
        "maxBatchSize()": FunctionFragment;
        "maxDeficitLotSize()": FunctionFragment;
        "maxSurplusLotSize()": FunctionFragment;
        "minAuctionDuration()": FunctionFragment;
        "minBidDelta()": FunctionFragment;
        "minLotSize()": FunctionFragment;
        "reservesBufferLowerBound()": FunctionFragment;
        "reservesBufferUpperBound()": FunctionFragment;
        "setExtensionPerBid(uint64)": FunctionFragment;
        "setMaxAuctionDuration(uint64)": FunctionFragment;
        "setMaxBatchSize(uint64)": FunctionFragment;
        "setMaxDeficitLotSize(uint256)": FunctionFragment;
        "setMaxSurplusLotSize(uint256)": FunctionFragment;
        "setMinAuctionDuration(uint64)": FunctionFragment;
        "setMinBidDelta(uint256)": FunctionFragment;
        "setMinLotSize(uint256)": FunctionFragment;
        "setReservesBufferLowerBound(uint256)": FunctionFragment;
        "setReservesBufferUpperBound(uint256)": FunctionFragment;
        "setTwapDuration(uint32)": FunctionFragment;
        "settleDeficitAuction(uint64)": FunctionFragment;
        "settleSurplusAuction(uint64)": FunctionFragment;
        "shouldStartAuctions()": FunctionFragment;
        "startAuction(uint256,bool)": FunctionFragment;
        "startAuctions(uint256,bool)": FunctionFragment;
        "stop()": FunctionFragment;
        "stopped()": FunctionFragment;
        "surplusAuction(uint64)": FunctionFragment;
        "surplusAuctionComplete(uint64)": FunctionFragment;
        "surplusAuctionCount()": FunctionFragment;
        "surplusAuctionExists(uint64)": FunctionFragment;
        "surplusAuctionLive(uint64)": FunctionFragment;
        "twapDuration()": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "aggregateAuctionSize" | "bidDeficitAuction" | "bidSurplusAuction" | "checkReservesAndStartAuctions" | "deficitAuction" | "deficitAuctionComplete" | "deficitAuctionCount" | "deficitAuctionExists" | "deficitAuctionLive" | "extensionPerBid" | "getAllAuctions" | "governor" | "hue" | "hueToBeBought" | "hueToBeSold" | "latestAuctionCompletionTime" | "maxAuctionDuration" | "maxBatchSize" | "maxDeficitLotSize" | "maxSurplusLotSize" | "minAuctionDuration" | "minBidDelta" | "minLotSize" | "reservesBufferLowerBound" | "reservesBufferUpperBound" | "setExtensionPerBid" | "setMaxAuctionDuration" | "setMaxBatchSize" | "setMaxDeficitLotSize" | "setMaxSurplusLotSize" | "setMinAuctionDuration" | "setMinBidDelta" | "setMinLotSize" | "setReservesBufferLowerBound" | "setReservesBufferUpperBound" | "setTwapDuration" | "settleDeficitAuction" | "settleSurplusAuction" | "shouldStartAuctions" | "startAuction" | "startAuctions" | "stop" | "stopped" | "surplusAuction" | "surplusAuctionComplete" | "surplusAuctionCount" | "surplusAuctionExists" | "surplusAuctionLive" | "twapDuration" | "validUpdate"): FunctionFragment;
    encodeFunctionData(functionFragment: "aggregateAuctionSize", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "bidDeficitAuction", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "bidSurplusAuction", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "checkReservesAndStartAuctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "deficitAuction", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "deficitAuctionComplete", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "deficitAuctionCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "deficitAuctionExists", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "deficitAuctionLive", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "extensionPerBid", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllAuctions", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "hue", values?: undefined): string;
    encodeFunctionData(functionFragment: "hueToBeBought", values?: undefined): string;
    encodeFunctionData(functionFragment: "hueToBeSold", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestAuctionCompletionTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxAuctionDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxBatchSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxDeficitLotSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxSurplusLotSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "minAuctionDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "minBidDelta", values?: undefined): string;
    encodeFunctionData(functionFragment: "minLotSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "reservesBufferLowerBound", values?: undefined): string;
    encodeFunctionData(functionFragment: "reservesBufferUpperBound", values?: undefined): string;
    encodeFunctionData(functionFragment: "setExtensionPerBid", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxAuctionDuration", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxBatchSize", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxDeficitLotSize", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxSurplusLotSize", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMinAuctionDuration", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMinBidDelta", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMinLotSize", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setReservesBufferLowerBound", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setReservesBufferUpperBound", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTwapDuration", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "settleDeficitAuction", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "settleSurplusAuction", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "shouldStartAuctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "startAuction", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "startAuctions", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "surplusAuction", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "surplusAuctionComplete", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "surplusAuctionCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "surplusAuctionExists", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "surplusAuctionLive", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "twapDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "aggregateAuctionSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bidDeficitAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bidSurplusAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkReservesAndStartAuctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deficitAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deficitAuctionComplete", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deficitAuctionCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deficitAuctionExists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deficitAuctionLive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extensionPerBid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAuctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hueToBeBought", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hueToBeSold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestAuctionCompletionTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxAuctionDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxBatchSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxDeficitLotSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxSurplusLotSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minAuctionDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minBidDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minLotSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reservesBufferLowerBound", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reservesBufferUpperBound", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExtensionPerBid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxAuctionDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxBatchSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxDeficitLotSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxSurplusLotSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinAuctionDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinBidDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinLotSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReservesBufferLowerBound", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReservesBufferUpperBound", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTwapDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleDeficitAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleSurplusAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shouldStartAuctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startAuctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "surplusAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "surplusAuctionComplete", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "surplusAuctionCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "surplusAuctionExists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "surplusAuctionLive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "twapDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
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
        "Stopped()": EventFragment;
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
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
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
export interface StoppedEventObject {
}
export declare type StoppedEvent = TypedEvent<[], StoppedEventObject>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
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
export interface AuctionsTestable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AuctionsTestableInterface;
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
        aggregateAuctionSize(amtIn: PromiseOrValue<BigNumberish>, lotSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            size: BigNumber;
        }>;
        bidDeficitAuction(auctionID: PromiseOrValue<BigNumberish>, bid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bidSurplusAuction(auctionID: PromiseOrValue<BigNumberish>, bid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkReservesAndStartAuctions(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deficitAuction(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string,
            number,
            number
        ] & {
            count: BigNumber;
            bid: BigNumber;
            bidder: string;
            endTime: number;
            maxEndTime: number;
        }>;
        deficitAuctionComplete(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        deficitAuctionCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        deficitAuctionExists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        deficitAuctionLive(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        extensionPerBid(overrides?: CallOverrides): Promise<[BigNumber]>;
        getAllAuctions(start: PromiseOrValue<BigNumberish>, surplus: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            IAuctions.AuctionStructOutput[],
            BigNumber[],
            boolean[]
        ] & {
            _auctions: IAuctions.AuctionStructOutput[];
            _auctionIDs: BigNumber[];
            _isComplete: boolean[];
        }>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        hue(overrides?: CallOverrides): Promise<[string]>;
        hueToBeBought(overrides?: CallOverrides): Promise<[BigNumber]>;
        hueToBeSold(overrides?: CallOverrides): Promise<[BigNumber]>;
        latestAuctionCompletionTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxAuctionDuration(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxBatchSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxDeficitLotSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxSurplusLotSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        minAuctionDuration(overrides?: CallOverrides): Promise<[BigNumber]>;
        minBidDelta(overrides?: CallOverrides): Promise<[BigNumber]>;
        minLotSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        reservesBufferLowerBound(overrides?: CallOverrides): Promise<[BigNumber]>;
        reservesBufferUpperBound(overrides?: CallOverrides): Promise<[BigNumber]>;
        setExtensionPerBid(extension: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxAuctionDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxBatchSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxDeficitLotSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxSurplusLotSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinAuctionDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinBidDelta(delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinLotSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReservesBufferLowerBound(bound: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReservesBufferUpperBound(bound: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        settleDeficitAuction(auctionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        settleSurplusAuction(auctionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        shouldStartAuctions(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            surplusAmount: BigNumber;
            deficitAmount: BigNumber;
        }>;
        startAuction(count: PromiseOrValue<BigNumberish>, isSurplus: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startAuctions(amt: PromiseOrValue<BigNumberish>, isSurplus: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        surplusAuction(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string,
            number,
            number
        ] & {
            count: BigNumber;
            bid: BigNumber;
            bidder: string;
            endTime: number;
            maxEndTime: number;
        }>;
        surplusAuctionComplete(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        surplusAuctionCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        surplusAuctionExists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        surplusAuctionLive(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        twapDuration(overrides?: CallOverrides): Promise<[number]>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    aggregateAuctionSize(amtIn: PromiseOrValue<BigNumberish>, lotSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    bidDeficitAuction(auctionID: PromiseOrValue<BigNumberish>, bid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bidSurplusAuction(auctionID: PromiseOrValue<BigNumberish>, bid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkReservesAndStartAuctions(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deficitAuction(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        string,
        number,
        number
    ] & {
        count: BigNumber;
        bid: BigNumber;
        bidder: string;
        endTime: number;
        maxEndTime: number;
    }>;
    deficitAuctionComplete(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    deficitAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;
    deficitAuctionExists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    deficitAuctionLive(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    extensionPerBid(overrides?: CallOverrides): Promise<BigNumber>;
    getAllAuctions(start: PromiseOrValue<BigNumberish>, surplus: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
        IAuctions.AuctionStructOutput[],
        BigNumber[],
        boolean[]
    ] & {
        _auctions: IAuctions.AuctionStructOutput[];
        _auctionIDs: BigNumber[];
        _isComplete: boolean[];
    }>;
    governor(overrides?: CallOverrides): Promise<string>;
    hue(overrides?: CallOverrides): Promise<string>;
    hueToBeBought(overrides?: CallOverrides): Promise<BigNumber>;
    hueToBeSold(overrides?: CallOverrides): Promise<BigNumber>;
    latestAuctionCompletionTime(overrides?: CallOverrides): Promise<BigNumber>;
    maxAuctionDuration(overrides?: CallOverrides): Promise<BigNumber>;
    maxBatchSize(overrides?: CallOverrides): Promise<BigNumber>;
    maxDeficitLotSize(overrides?: CallOverrides): Promise<BigNumber>;
    maxSurplusLotSize(overrides?: CallOverrides): Promise<BigNumber>;
    minAuctionDuration(overrides?: CallOverrides): Promise<BigNumber>;
    minBidDelta(overrides?: CallOverrides): Promise<BigNumber>;
    minLotSize(overrides?: CallOverrides): Promise<BigNumber>;
    reservesBufferLowerBound(overrides?: CallOverrides): Promise<BigNumber>;
    reservesBufferUpperBound(overrides?: CallOverrides): Promise<BigNumber>;
    setExtensionPerBid(extension: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxAuctionDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxBatchSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxDeficitLotSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxSurplusLotSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinAuctionDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinBidDelta(delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinLotSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReservesBufferLowerBound(bound: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReservesBufferUpperBound(bound: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    settleDeficitAuction(auctionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    settleSurplusAuction(auctionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    shouldStartAuctions(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        surplusAmount: BigNumber;
        deficitAmount: BigNumber;
    }>;
    startAuction(count: PromiseOrValue<BigNumberish>, isSurplus: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startAuctions(amt: PromiseOrValue<BigNumberish>, isSurplus: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    surplusAuction(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        string,
        number,
        number
    ] & {
        count: BigNumber;
        bid: BigNumber;
        bidder: string;
        endTime: number;
        maxEndTime: number;
    }>;
    surplusAuctionComplete(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    surplusAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;
    surplusAuctionExists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    surplusAuctionLive(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    twapDuration(overrides?: CallOverrides): Promise<number>;
    validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        aggregateAuctionSize(amtIn: PromiseOrValue<BigNumberish>, lotSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        bidDeficitAuction(auctionID: PromiseOrValue<BigNumberish>, bid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        bidSurplusAuction(auctionID: PromiseOrValue<BigNumberish>, bid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        checkReservesAndStartAuctions(overrides?: CallOverrides): Promise<void>;
        deficitAuction(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string,
            number,
            number
        ] & {
            count: BigNumber;
            bid: BigNumber;
            bidder: string;
            endTime: number;
            maxEndTime: number;
        }>;
        deficitAuctionComplete(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        deficitAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;
        deficitAuctionExists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        deficitAuctionLive(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        extensionPerBid(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAuctions(start: PromiseOrValue<BigNumberish>, surplus: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            IAuctions.AuctionStructOutput[],
            BigNumber[],
            boolean[]
        ] & {
            _auctions: IAuctions.AuctionStructOutput[];
            _auctionIDs: BigNumber[];
            _isComplete: boolean[];
        }>;
        governor(overrides?: CallOverrides): Promise<string>;
        hue(overrides?: CallOverrides): Promise<string>;
        hueToBeBought(overrides?: CallOverrides): Promise<BigNumber>;
        hueToBeSold(overrides?: CallOverrides): Promise<BigNumber>;
        latestAuctionCompletionTime(overrides?: CallOverrides): Promise<BigNumber>;
        maxAuctionDuration(overrides?: CallOverrides): Promise<BigNumber>;
        maxBatchSize(overrides?: CallOverrides): Promise<BigNumber>;
        maxDeficitLotSize(overrides?: CallOverrides): Promise<BigNumber>;
        maxSurplusLotSize(overrides?: CallOverrides): Promise<BigNumber>;
        minAuctionDuration(overrides?: CallOverrides): Promise<BigNumber>;
        minBidDelta(overrides?: CallOverrides): Promise<BigNumber>;
        minLotSize(overrides?: CallOverrides): Promise<BigNumber>;
        reservesBufferLowerBound(overrides?: CallOverrides): Promise<BigNumber>;
        reservesBufferUpperBound(overrides?: CallOverrides): Promise<BigNumber>;
        setExtensionPerBid(extension: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxAuctionDuration(duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxBatchSize(size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxDeficitLotSize(size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxSurplusLotSize(size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMinAuctionDuration(duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMinBidDelta(delta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMinLotSize(size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setReservesBufferLowerBound(bound: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setReservesBufferUpperBound(bound: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        settleDeficitAuction(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        settleSurplusAuction(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        shouldStartAuctions(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            surplusAmount: BigNumber;
            deficitAmount: BigNumber;
        }>;
        startAuction(count: PromiseOrValue<BigNumberish>, isSurplus: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        startAuctions(amt: PromiseOrValue<BigNumberish>, isSurplus: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        surplusAuction(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string,
            number,
            number
        ] & {
            count: BigNumber;
            bid: BigNumber;
            bidder: string;
            endTime: number;
            maxEndTime: number;
        }>;
        surplusAuctionComplete(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        surplusAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;
        surplusAuctionExists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        surplusAuctionLive(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        twapDuration(overrides?: CallOverrides): Promise<number>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
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
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
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
        aggregateAuctionSize(amtIn: PromiseOrValue<BigNumberish>, lotSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        bidDeficitAuction(auctionID: PromiseOrValue<BigNumberish>, bid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bidSurplusAuction(auctionID: PromiseOrValue<BigNumberish>, bid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkReservesAndStartAuctions(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deficitAuction(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        deficitAuctionComplete(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        deficitAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;
        deficitAuctionExists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        deficitAuctionLive(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        extensionPerBid(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAuctions(start: PromiseOrValue<BigNumberish>, surplus: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        hue(overrides?: CallOverrides): Promise<BigNumber>;
        hueToBeBought(overrides?: CallOverrides): Promise<BigNumber>;
        hueToBeSold(overrides?: CallOverrides): Promise<BigNumber>;
        latestAuctionCompletionTime(overrides?: CallOverrides): Promise<BigNumber>;
        maxAuctionDuration(overrides?: CallOverrides): Promise<BigNumber>;
        maxBatchSize(overrides?: CallOverrides): Promise<BigNumber>;
        maxDeficitLotSize(overrides?: CallOverrides): Promise<BigNumber>;
        maxSurplusLotSize(overrides?: CallOverrides): Promise<BigNumber>;
        minAuctionDuration(overrides?: CallOverrides): Promise<BigNumber>;
        minBidDelta(overrides?: CallOverrides): Promise<BigNumber>;
        minLotSize(overrides?: CallOverrides): Promise<BigNumber>;
        reservesBufferLowerBound(overrides?: CallOverrides): Promise<BigNumber>;
        reservesBufferUpperBound(overrides?: CallOverrides): Promise<BigNumber>;
        setExtensionPerBid(extension: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxAuctionDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxBatchSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxDeficitLotSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxSurplusLotSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinAuctionDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinBidDelta(delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinLotSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReservesBufferLowerBound(bound: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReservesBufferUpperBound(bound: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        settleDeficitAuction(auctionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        settleSurplusAuction(auctionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        shouldStartAuctions(overrides?: CallOverrides): Promise<BigNumber>;
        startAuction(count: PromiseOrValue<BigNumberish>, isSurplus: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startAuctions(amt: PromiseOrValue<BigNumberish>, isSurplus: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        surplusAuction(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        surplusAuctionComplete(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        surplusAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;
        surplusAuctionExists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        surplusAuctionLive(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        twapDuration(overrides?: CallOverrides): Promise<BigNumber>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        aggregateAuctionSize(amtIn: PromiseOrValue<BigNumberish>, lotSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bidDeficitAuction(auctionID: PromiseOrValue<BigNumberish>, bid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bidSurplusAuction(auctionID: PromiseOrValue<BigNumberish>, bid: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkReservesAndStartAuctions(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deficitAuction(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deficitAuctionComplete(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deficitAuctionCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deficitAuctionExists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deficitAuctionLive(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extensionPerBid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAuctions(start: PromiseOrValue<BigNumberish>, surplus: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hueToBeBought(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hueToBeSold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestAuctionCompletionTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxAuctionDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxBatchSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxDeficitLotSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxSurplusLotSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minAuctionDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minBidDelta(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minLotSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reservesBufferLowerBound(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reservesBufferUpperBound(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setExtensionPerBid(extension: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxAuctionDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxBatchSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxDeficitLotSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxSurplusLotSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinAuctionDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinBidDelta(delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinLotSize(size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReservesBufferLowerBound(bound: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReservesBufferUpperBound(bound: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTwapDuration(duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        settleDeficitAuction(auctionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        settleSurplusAuction(auctionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        shouldStartAuctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startAuction(count: PromiseOrValue<BigNumberish>, isSurplus: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startAuctions(amt: PromiseOrValue<BigNumberish>, isSurplus: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        surplusAuction(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        surplusAuctionComplete(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        surplusAuctionCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        surplusAuctionExists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        surplusAuctionLive(auctionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        twapDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
