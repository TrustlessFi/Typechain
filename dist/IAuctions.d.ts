/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IAuctionsInterface extends ethers.utils.Interface {
  functions: {
    "latestAuctionCompletionTime()": FunctionFragment;
    "stop()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "latestAuctionCompletionTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stop", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "latestAuctionCompletionTime",
    data: BytesLike
  ): Result;
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
  getEvent(
    nameOrSignatureOrTopic: "ReservesBufferLowerBoundUpdated"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReservesBufferUpperBoundUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SurplusAuctionBid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SurplusAuctionSettled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SurplusAuctionStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TwapDurationUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "maxDeficitLotSizeUpdated"): EventFragment;
}

export class IAuctions extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IAuctionsInterface;

  functions: {
    latestAuctionCompletionTime(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  latestAuctionCompletionTime(overrides?: CallOverrides): Promise<BigNumber>;

  stop(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    latestAuctionCompletionTime(overrides?: CallOverrides): Promise<BigNumber>;

    stop(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    DeficitAuctionBid(
      auctionID?: BigNumberish | null,
      bidder?: string | null,
      bid?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { auctionID: BigNumber; bidder: string; bid: BigNumber }
    >;

    DeficitAuctionSettled(
      auctionID?: BigNumberish | null,
      winner?: string | null
    ): TypedEventFilter<
      [BigNumber, string],
      { auctionID: BigNumber; winner: string }
    >;

    DeficitAuctionStarted(
      auctionID?: BigNumberish | null,
      count?: BigNumberish | null,
      maxEndTime?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { auctionID: BigNumber; count: BigNumber; maxEndTime: BigNumber }
    >;

    ExtensionPerBidUpdated(
      extension?: null
    ): TypedEventFilter<[BigNumber], { extension: BigNumber }>;

    MaxAuctionDurationUpdated(
      duration?: null
    ): TypedEventFilter<[BigNumber], { duration: BigNumber }>;

    MaxBatchSizeUpdated(
      size?: null
    ): TypedEventFilter<[BigNumber], { size: BigNumber }>;

    MaxSurplusLotSizeUpdated(
      size?: null
    ): TypedEventFilter<[BigNumber], { size: BigNumber }>;

    MinAuctionDurationUpdated(
      duration?: null
    ): TypedEventFilter<[BigNumber], { duration: BigNumber }>;

    MinBidDeltaUpdated(
      delta?: null
    ): TypedEventFilter<[BigNumber], { delta: BigNumber }>;

    MinLotSizeUpdated(
      size?: null
    ): TypedEventFilter<[BigNumber], { size: BigNumber }>;

    ReservesBufferLowerBoundUpdated(
      bound?: null
    ): TypedEventFilter<[BigNumber], { bound: BigNumber }>;

    ReservesBufferUpperBoundUpdated(
      bound?: null
    ): TypedEventFilter<[BigNumber], { bound: BigNumber }>;

    SurplusAuctionBid(
      auctionID?: BigNumberish | null,
      bidder?: string | null,
      bid?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { auctionID: BigNumber; bidder: string; bid: BigNumber }
    >;

    SurplusAuctionSettled(
      auctionID?: BigNumberish | null,
      winner?: string | null
    ): TypedEventFilter<
      [BigNumber, string],
      { auctionID: BigNumber; winner: string }
    >;

    SurplusAuctionStarted(
      auctionID?: BigNumberish | null,
      count?: BigNumberish | null,
      maxEndTime?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { auctionID: BigNumber; count: BigNumber; maxEndTime: BigNumber }
    >;

    TwapDurationUpdated(
      duration?: null
    ): TypedEventFilter<[number], { duration: number }>;

    maxDeficitLotSizeUpdated(
      size?: null
    ): TypedEventFilter<[BigNumber], { size: BigNumber }>;
  };

  estimateGas: {
    latestAuctionCompletionTime(overrides?: CallOverrides): Promise<BigNumber>;

    stop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    latestAuctionCompletionTime(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
