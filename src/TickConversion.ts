/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TickConversionInterface extends utils.Interface {
  functions: {
    "convertSqrtPriceX96ToTick(uint160)": FunctionFragment;
    "convertTickToSqrtPriceX96(int24)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "convertSqrtPriceX96ToTick",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "convertTickToSqrtPriceX96",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "convertSqrtPriceX96ToTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertTickToSqrtPriceX96",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TickConversion extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TickConversionInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    convertSqrtPriceX96ToTick(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    convertTickToSqrtPriceX96(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  convertSqrtPriceX96ToTick(
    sqrtPriceX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  convertTickToSqrtPriceX96(
    tick: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    convertSqrtPriceX96ToTick(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    convertTickToSqrtPriceX96(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    convertSqrtPriceX96ToTick(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertTickToSqrtPriceX96(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    convertSqrtPriceX96ToTick(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    convertTickToSqrtPriceX96(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}