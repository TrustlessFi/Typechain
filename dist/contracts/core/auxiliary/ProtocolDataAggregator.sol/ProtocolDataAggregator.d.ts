import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace ProtocolDataAggregator {
    type ConstructorParamsStruct = {
        Governor: PromiseOrValue<string>;
    };
    type ConstructorParamsStructOutput = [string] & {
        Governor: string;
    };
}
export declare namespace IRewards {
    type PoolConfigStruct = {
        pool: PromiseOrValue<string>;
        rewardsPortion: PromiseOrValue<BigNumberish>;
    };
    type PoolConfigStructOutput = [string, BigNumber] & {
        pool: string;
        rewardsPortion: BigNumber;
    };
}
export interface ProtocolDataAggregatorInterface extends utils.Interface {
    functions: {
        "counter()": FunctionFragment;
        "getIncentivizedPools()": FunctionFragment;
        "governor()": FunctionFragment;
        "incrementCounter()": FunctionFragment;
        "positionsCollateralization(uint64[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "counter" | "getIncentivizedPools" | "governor" | "incrementCounter" | "positionsCollateralization"): FunctionFragment;
    encodeFunctionData(functionFragment: "counter", values?: undefined): string;
    encodeFunctionData(functionFragment: "getIncentivizedPools", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "incrementCounter", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionsCollateralization", values: [PromiseOrValue<BigNumberish>[]]): string;
    decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIncentivizedPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incrementCounter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionsCollateralization", data: BytesLike): Result;
    events: {};
}
export interface ProtocolDataAggregator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProtocolDataAggregatorInterface;
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
        counter(overrides?: CallOverrides): Promise<[BigNumber]>;
        getIncentivizedPools(overrides?: CallOverrides): Promise<[
            IRewards.PoolConfigStructOutput[]
        ] & {
            poolConfigs: IRewards.PoolConfigStructOutput[];
        }>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        incrementCounter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        positionsCollateralization(positionIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            collateralizations: BigNumber[];
        }>;
    };
    counter(overrides?: CallOverrides): Promise<BigNumber>;
    getIncentivizedPools(overrides?: CallOverrides): Promise<IRewards.PoolConfigStructOutput[]>;
    governor(overrides?: CallOverrides): Promise<string>;
    incrementCounter(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    positionsCollateralization(positionIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    callStatic: {
        counter(overrides?: CallOverrides): Promise<BigNumber>;
        getIncentivizedPools(overrides?: CallOverrides): Promise<IRewards.PoolConfigStructOutput[]>;
        governor(overrides?: CallOverrides): Promise<string>;
        incrementCounter(overrides?: CallOverrides): Promise<void>;
        positionsCollateralization(positionIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    };
    filters: {};
    estimateGas: {
        counter(overrides?: CallOverrides): Promise<BigNumber>;
        getIncentivizedPools(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        incrementCounter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        positionsCollateralization(positionIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        counter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIncentivizedPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        incrementCounter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        positionsCollateralization(positionIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
