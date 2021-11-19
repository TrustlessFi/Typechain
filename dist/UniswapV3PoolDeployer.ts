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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface UniswapV3PoolDeployerInterface extends ethers.utils.Interface {
  functions: {
    "parameters()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "parameters",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;

  events: {};
}

export interface UniswapV3PoolDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UniswapV3PoolDeployerInterface;

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
    parameters(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number, number] & {
        factory: string;
        token0: string;
        token1: string;
        fee: number;
        tickSpacing: number;
      }
    >;
  };

  parameters(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, number, number] & {
      factory: string;
      token0: string;
      token1: string;
      fee: number;
      tickSpacing: number;
    }
  >;

  callStatic: {
    parameters(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number, number] & {
        factory: string;
        token0: string;
        token1: string;
        fee: number;
        tickSpacing: number;
      }
    >;
  };

  filters: {};

  estimateGas: {
    parameters(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}