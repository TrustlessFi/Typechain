import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    Governor: string;
    ProtocolLock: string;
    Hue: string;
};
export declare type ConstructorParamsStructOutput = [string, string, string] & {
    Governor: string;
    ProtocolLock: string;
    Hue: string;
};
export declare type AuctionStruct = {
    count: BigNumberish;
    bid: BigNumberish;
    bidder: string;
    endTime: BigNumberish;
    maxEndTime: BigNumberish;
};
export declare type AuctionStructOutput = [
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
    encodeFunctionData(functionFragment: "aggregateAuctionSize", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "bidDeficitAuction", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "bidSurplusAuction", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkReservesAndStartAuctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "deficitAuction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "deficitAuctionComplete", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "deficitAuctionCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "deficitAuctionExists", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "deficitAuctionLive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "extensionPerBid", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllAuctions", values: [BigNumberish, boolean]): string;
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
    encodeFunctionData(functionFragment: "setExtensionPerBid", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxAuctionDuration", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxBatchSize", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxDeficitLotSize", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxSurplusLotSize", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMinAuctionDuration", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMinBidDelta", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMinLotSize", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setReservesBufferLowerBound", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setReservesBufferUpperBound", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setTwapDuration", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "settleDeficitAuction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "settleSurplusAuction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "shouldStartAuctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "startAuction", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "startAuctions", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "surplusAuction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "surplusAuctionComplete", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "surplusAuctionCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "surplusAuctionExists", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "surplusAuctionLive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "twapDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [BytesLike]): string;
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
export declare type StoppedEvent = TypedEvent<[], {}>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
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
        aggregateAuctionSize(amtIn: BigNumberish, lotSize: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            size: BigNumber;
        }>;
        bidDeficitAuction(auctionID: BigNumberish, bid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bidSurplusAuction(auctionID: BigNumberish, bid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        checkReservesAndStartAuctions(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deficitAuction(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
        deficitAuctionComplete(auctionID: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        deficitAuctionCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        deficitAuctionExists(id: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        deficitAuctionLive(auctionID: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        extensionPerBid(overrides?: CallOverrides): Promise<[BigNumber]>;
        getAllAuctions(start: BigNumberish, surplus: boolean, overrides?: CallOverrides): Promise<[
            AuctionStructOutput[],
            BigNumber[],
            boolean[]
        ] & {
            _auctions: AuctionStructOutput[];
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
        setExtensionPerBid(extension: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxAuctionDuration(duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxBatchSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxDeficitLotSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxSurplusLotSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinAuctionDuration(duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinBidDelta(delta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinLotSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setReservesBufferLowerBound(bound: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setReservesBufferUpperBound(bound: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTwapDuration(duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        settleDeficitAuction(auctionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        settleSurplusAuction(auctionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        shouldStartAuctions(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            surplusAmount: BigNumber;
            deficitAmount: BigNumber;
        }>;
        startAuction(count: BigNumberish, isSurplus: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startAuctions(amt: BigNumberish, isSurplus: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        surplusAuction(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
        surplusAuctionComplete(auctionID: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        surplusAuctionCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        surplusAuctionExists(id: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        surplusAuctionLive(auctionID: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        twapDuration(overrides?: CallOverrides): Promise<[number]>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    aggregateAuctionSize(amtIn: BigNumberish, lotSize: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    bidDeficitAuction(auctionID: BigNumberish, bid: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bidSurplusAuction(auctionID: BigNumberish, bid: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    checkReservesAndStartAuctions(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deficitAuction(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
    deficitAuctionComplete(auctionID: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    deficitAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;
    deficitAuctionExists(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    deficitAuctionLive(auctionID: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    extensionPerBid(overrides?: CallOverrides): Promise<BigNumber>;
    getAllAuctions(start: BigNumberish, surplus: boolean, overrides?: CallOverrides): Promise<[
        AuctionStructOutput[],
        BigNumber[],
        boolean[]
    ] & {
        _auctions: AuctionStructOutput[];
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
    setExtensionPerBid(extension: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxAuctionDuration(duration: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxBatchSize(size: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxDeficitLotSize(size: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxSurplusLotSize(size: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinAuctionDuration(duration: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinBidDelta(delta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinLotSize(size: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setReservesBufferLowerBound(bound: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setReservesBufferUpperBound(bound: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTwapDuration(duration: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    settleDeficitAuction(auctionID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    settleSurplusAuction(auctionID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    shouldStartAuctions(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        surplusAmount: BigNumber;
        deficitAmount: BigNumber;
    }>;
    startAuction(count: BigNumberish, isSurplus: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startAuctions(amt: BigNumberish, isSurplus: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    surplusAuction(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
    surplusAuctionComplete(auctionID: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    surplusAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;
    surplusAuctionExists(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    surplusAuctionLive(auctionID: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    twapDuration(overrides?: CallOverrides): Promise<number>;
    validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        aggregateAuctionSize(amtIn: BigNumberish, lotSize: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bidDeficitAuction(auctionID: BigNumberish, bid: BigNumberish, overrides?: CallOverrides): Promise<void>;
        bidSurplusAuction(auctionID: BigNumberish, bid: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkReservesAndStartAuctions(overrides?: CallOverrides): Promise<void>;
        deficitAuction(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
        deficitAuctionComplete(auctionID: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        deficitAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;
        deficitAuctionExists(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        deficitAuctionLive(auctionID: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        extensionPerBid(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAuctions(start: BigNumberish, surplus: boolean, overrides?: CallOverrides): Promise<[
            AuctionStructOutput[],
            BigNumber[],
            boolean[]
        ] & {
            _auctions: AuctionStructOutput[];
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
        setExtensionPerBid(extension: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxAuctionDuration(duration: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxBatchSize(size: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxDeficitLotSize(size: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxSurplusLotSize(size: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMinAuctionDuration(duration: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMinBidDelta(delta: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMinLotSize(size: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setReservesBufferLowerBound(bound: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setReservesBufferUpperBound(bound: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setTwapDuration(duration: BigNumberish, overrides?: CallOverrides): Promise<void>;
        settleDeficitAuction(auctionID: BigNumberish, overrides?: CallOverrides): Promise<void>;
        settleSurplusAuction(auctionID: BigNumberish, overrides?: CallOverrides): Promise<void>;
        shouldStartAuctions(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            surplusAmount: BigNumber;
            deficitAmount: BigNumber;
        }>;
        startAuction(count: BigNumberish, isSurplus: boolean, overrides?: CallOverrides): Promise<void>;
        startAuctions(amt: BigNumberish, isSurplus: boolean, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        surplusAuction(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
        surplusAuctionComplete(auctionID: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        surplusAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;
        surplusAuctionExists(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        surplusAuctionLive(auctionID: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        twapDuration(overrides?: CallOverrides): Promise<number>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
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
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
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
        aggregateAuctionSize(amtIn: BigNumberish, lotSize: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bidDeficitAuction(auctionID: BigNumberish, bid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bidSurplusAuction(auctionID: BigNumberish, bid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        checkReservesAndStartAuctions(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deficitAuction(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        deficitAuctionComplete(auctionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        deficitAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;
        deficitAuctionExists(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        deficitAuctionLive(auctionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        extensionPerBid(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAuctions(start: BigNumberish, surplus: boolean, overrides?: CallOverrides): Promise<BigNumber>;
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
        setExtensionPerBid(extension: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxAuctionDuration(duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxBatchSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxDeficitLotSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxSurplusLotSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinAuctionDuration(duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinBidDelta(delta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinLotSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setReservesBufferLowerBound(bound: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setReservesBufferUpperBound(bound: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTwapDuration(duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        settleDeficitAuction(auctionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        settleSurplusAuction(auctionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        shouldStartAuctions(overrides?: CallOverrides): Promise<BigNumber>;
        startAuction(count: BigNumberish, isSurplus: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startAuctions(amt: BigNumberish, isSurplus: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        surplusAuction(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        surplusAuctionComplete(auctionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        surplusAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;
        surplusAuctionExists(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        surplusAuctionLive(auctionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        twapDuration(overrides?: CallOverrides): Promise<BigNumber>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        aggregateAuctionSize(amtIn: BigNumberish, lotSize: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bidDeficitAuction(auctionID: BigNumberish, bid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bidSurplusAuction(auctionID: BigNumberish, bid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        checkReservesAndStartAuctions(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deficitAuction(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deficitAuctionComplete(auctionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deficitAuctionCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deficitAuctionExists(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deficitAuctionLive(auctionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extensionPerBid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAuctions(start: BigNumberish, surplus: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        setExtensionPerBid(extension: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxAuctionDuration(duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxBatchSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxDeficitLotSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxSurplusLotSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinAuctionDuration(duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinBidDelta(delta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinLotSize(size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setReservesBufferLowerBound(bound: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setReservesBufferUpperBound(bound: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTwapDuration(duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        settleDeficitAuction(auctionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        settleSurplusAuction(auctionID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        shouldStartAuctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startAuction(count: BigNumberish, isSurplus: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startAuctions(amt: BigNumberish, isSurplus: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        surplusAuction(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        surplusAuctionComplete(auctionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        surplusAuctionCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        surplusAuctionExists(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        surplusAuctionLive(auctionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        twapDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
