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
  PromiseOrValue,
} from "../../../common";

export interface OracleEchidnaTestInterface extends utils.Interface {
  functions: {
    "advanceTime(uint32)": FunctionFragment;
    "checkTimeWeightedAveragesAlwaysFitsType(uint32)": FunctionFragment;
    "checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(uint16)": FunctionFragment;
    "echidna_AlwaysInitialized()": FunctionFragment;
    "echidna_canAlwaysObserve0IfInitialized()": FunctionFragment;
    "echidna_cardinalityAlwaysLteNext()": FunctionFragment;
    "echidna_indexAlwaysLtCardinality()": FunctionFragment;
    "grow(uint16)": FunctionFragment;
    "initialize(uint32,int24,uint128)": FunctionFragment;
    "update(uint32,int24,uint128)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "advanceTime"
      | "checkTimeWeightedAveragesAlwaysFitsType"
      | "checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0"
      | "echidna_AlwaysInitialized"
      | "echidna_canAlwaysObserve0IfInitialized"
      | "echidna_cardinalityAlwaysLteNext"
      | "echidna_indexAlwaysLtCardinality"
      | "grow"
      | "initialize"
      | "update"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "advanceTime",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTimeWeightedAveragesAlwaysFitsType",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_AlwaysInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_canAlwaysObserve0IfInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_cardinalityAlwaysLteNext",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_indexAlwaysLtCardinality",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "grow",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "advanceTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTimeWeightedAveragesAlwaysFitsType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_AlwaysInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_canAlwaysObserve0IfInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_cardinalityAlwaysLteNext",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_indexAlwaysLtCardinality",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {};
}

export interface OracleEchidnaTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OracleEchidnaTestInterface;

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
    advanceTime(
      by: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    echidna_AlwaysInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    echidna_canAlwaysObserve0IfInitialized(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    echidna_cardinalityAlwaysLteNext(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    grow(
      cardinality: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      time: PromiseOrValue<BigNumberish>,
      tick: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    update(
      advanceTimeBy: PromiseOrValue<BigNumberish>,
      tick: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  advanceTime(
    by: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checkTimeWeightedAveragesAlwaysFitsType(
    secondsAgo: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<void>;

  checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<void>;

  echidna_AlwaysInitialized(overrides?: CallOverrides): Promise<boolean>;

  echidna_canAlwaysObserve0IfInitialized(
    overrides?: CallOverrides
  ): Promise<boolean>;

  echidna_cardinalityAlwaysLteNext(overrides?: CallOverrides): Promise<boolean>;

  echidna_indexAlwaysLtCardinality(overrides?: CallOverrides): Promise<boolean>;

  grow(
    cardinality: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    time: PromiseOrValue<BigNumberish>,
    tick: PromiseOrValue<BigNumberish>,
    liquidity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  update(
    advanceTimeBy: PromiseOrValue<BigNumberish>,
    tick: PromiseOrValue<BigNumberish>,
    liquidity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    advanceTime(
      by: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    echidna_AlwaysInitialized(overrides?: CallOverrides): Promise<boolean>;

    echidna_canAlwaysObserve0IfInitialized(
      overrides?: CallOverrides
    ): Promise<boolean>;

    echidna_cardinalityAlwaysLteNext(
      overrides?: CallOverrides
    ): Promise<boolean>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<boolean>;

    grow(
      cardinality: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      time: PromiseOrValue<BigNumberish>,
      tick: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    update(
      advanceTimeBy: PromiseOrValue<BigNumberish>,
      tick: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    advanceTime(
      by: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    echidna_AlwaysInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    echidna_canAlwaysObserve0IfInitialized(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    echidna_cardinalityAlwaysLteNext(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grow(
      cardinality: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      time: PromiseOrValue<BigNumberish>,
      tick: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    update(
      advanceTimeBy: PromiseOrValue<BigNumberish>,
      tick: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    advanceTime(
      by: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_AlwaysInitialized(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_canAlwaysObserve0IfInitialized(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_cardinalityAlwaysLteNext(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grow(
      cardinality: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      time: PromiseOrValue<BigNumberish>,
      tick: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    update(
      advanceTimeBy: PromiseOrValue<BigNumberish>,
      tick: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
