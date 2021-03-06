/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export declare namespace Tick {
  export type InfoStruct = {
    liquidityGross: BigNumberish;
    liquidityNet: BigNumberish;
    feeGrowthOutside0X128: BigNumberish;
    feeGrowthOutside1X128: BigNumberish;
    tickCumulativeOutside: BigNumberish;
    secondsPerLiquidityOutsideX128: BigNumberish;
    secondsOutside: BigNumberish;
    initialized: boolean;
  };

  export type InfoStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    boolean
  ] & {
    liquidityGross: BigNumber;
    liquidityNet: BigNumber;
    feeGrowthOutside0X128: BigNumber;
    feeGrowthOutside1X128: BigNumber;
    tickCumulativeOutside: BigNumber;
    secondsPerLiquidityOutsideX128: BigNumber;
    secondsOutside: number;
    initialized: boolean;
  };
}

export interface TickTestInterface extends utils.Interface {
  functions: {
    "clear(int24)": FunctionFragment;
    "cross(int24,uint256,uint256,uint160,int56,uint32)": FunctionFragment;
    "getFeeGrowthInside(int24,int24,int24,uint256,uint256)": FunctionFragment;
    "setTick(int24,(uint128,int128,uint256,uint256,int56,uint160,uint32,bool))": FunctionFragment;
    "tickSpacingToMaxLiquidityPerTick(int24)": FunctionFragment;
    "ticks(int24)": FunctionFragment;
    "update(int24,int24,int128,uint256,uint256,uint160,int56,uint32,bool,uint128)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "clear"
      | "cross"
      | "getFeeGrowthInside"
      | "setTick"
      | "tickSpacingToMaxLiquidityPerTick"
      | "ticks"
      | "update"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "clear", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "cross",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeeGrowthInside",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setTick",
    values: [BigNumberish, Tick.InfoStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "tickSpacingToMaxLiquidityPerTick",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "clear", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cross", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFeeGrowthInside",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTick", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tickSpacingToMaxLiquidityPerTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {};
}

export interface TickTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TickTestInterface;

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
    clear(
      tick: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cross(
      tick: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getFeeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        feeGrowthInside0X128: BigNumber;
        feeGrowthInside1X128: BigNumber;
      }
    >;

    setTick(
      tick: BigNumberish,
      info: Tick.InfoStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tickSpacingToMaxLiquidityPerTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        feeGrowthOutside0X128: BigNumber;
        feeGrowthOutside1X128: BigNumber;
        tickCumulativeOutside: BigNumber;
        secondsPerLiquidityOutsideX128: BigNumber;
        secondsOutside: number;
        initialized: boolean;
      }
    >;

    update(
      tick: BigNumberish,
      tickCurrent: BigNumberish,
      liquidityDelta: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      upper: boolean,
      maxLiquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  clear(
    tick: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cross(
    tick: BigNumberish,
    feeGrowthGlobal0X128: BigNumberish,
    feeGrowthGlobal1X128: BigNumberish,
    secondsPerLiquidityCumulativeX128: BigNumberish,
    tickCumulative: BigNumberish,
    time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getFeeGrowthInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    tickCurrent: BigNumberish,
    feeGrowthGlobal0X128: BigNumberish,
    feeGrowthGlobal1X128: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      feeGrowthInside0X128: BigNumber;
      feeGrowthInside1X128: BigNumber;
    }
  >;

  setTick(
    tick: BigNumberish,
    info: Tick.InfoStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tickSpacingToMaxLiquidityPerTick(
    tickSpacing: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ticks(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      boolean
    ] & {
      liquidityGross: BigNumber;
      liquidityNet: BigNumber;
      feeGrowthOutside0X128: BigNumber;
      feeGrowthOutside1X128: BigNumber;
      tickCumulativeOutside: BigNumber;
      secondsPerLiquidityOutsideX128: BigNumber;
      secondsOutside: number;
      initialized: boolean;
    }
  >;

  update(
    tick: BigNumberish,
    tickCurrent: BigNumberish,
    liquidityDelta: BigNumberish,
    feeGrowthGlobal0X128: BigNumberish,
    feeGrowthGlobal1X128: BigNumberish,
    secondsPerLiquidityCumulativeX128: BigNumberish,
    tickCumulative: BigNumberish,
    time: BigNumberish,
    upper: boolean,
    maxLiquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    clear(tick: BigNumberish, overrides?: CallOverrides): Promise<void>;

    cross(
      tick: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFeeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        feeGrowthInside0X128: BigNumber;
        feeGrowthInside1X128: BigNumber;
      }
    >;

    setTick(
      tick: BigNumberish,
      info: Tick.InfoStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    tickSpacingToMaxLiquidityPerTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        feeGrowthOutside0X128: BigNumber;
        feeGrowthOutside1X128: BigNumber;
        tickCumulativeOutside: BigNumber;
        secondsPerLiquidityOutsideX128: BigNumber;
        secondsOutside: number;
        initialized: boolean;
      }
    >;

    update(
      tick: BigNumberish,
      tickCurrent: BigNumberish,
      liquidityDelta: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      upper: boolean,
      maxLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    clear(
      tick: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cross(
      tick: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getFeeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setTick(
      tick: BigNumberish,
      info: Tick.InfoStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tickSpacingToMaxLiquidityPerTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ticks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    update(
      tick: BigNumberish,
      tickCurrent: BigNumberish,
      liquidityDelta: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      upper: boolean,
      maxLiquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    clear(
      tick: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cross(
      tick: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getFeeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setTick(
      tick: BigNumberish,
      info: Tick.InfoStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tickSpacingToMaxLiquidityPerTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    update(
      tick: BigNumberish,
      tickCurrent: BigNumberish,
      liquidityDelta: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      upper: boolean,
      maxLiquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
