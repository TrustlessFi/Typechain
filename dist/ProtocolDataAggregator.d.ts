import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    Governor: string;
};
export declare type ConstructorParamsStructOutput = [string] & {
    Governor: string;
};
export declare type PoolConfigStruct = {
    pool: string;
    rewardsPortion: BigNumberish;
};
export declare type PoolConfigStructOutput = [string, BigNumber] & {
    pool: string;
    rewardsPortion: BigNumber;
};
export interface ProtocolDataAggregatorInterface extends utils.Interface {
    functions: {
        "getIncentivizedPools()": FunctionFragment;
        "governor()": FunctionFragment;
        "positionsCollateralization(uint64[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getIncentivizedPools", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionsCollateralization", values: [BigNumberish[]]): string;
    decodeFunctionResult(functionFragment: "getIncentivizedPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
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
        getIncentivizedPools(overrides?: CallOverrides): Promise<[
            PoolConfigStructOutput[]
        ] & {
            poolConfigs: PoolConfigStructOutput[];
        }>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        positionsCollateralization(positionIDs: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            collateralizations: BigNumber[];
        }>;
    };
    getIncentivizedPools(overrides?: CallOverrides): Promise<PoolConfigStructOutput[]>;
    governor(overrides?: CallOverrides): Promise<string>;
    positionsCollateralization(positionIDs: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    callStatic: {
        getIncentivizedPools(overrides?: CallOverrides): Promise<PoolConfigStructOutput[]>;
        governor(overrides?: CallOverrides): Promise<string>;
        positionsCollateralization(positionIDs: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    };
    filters: {};
    estimateGas: {
        getIncentivizedPools(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        positionsCollateralization(positionIDs: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getIncentivizedPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionsCollateralization(positionIDs: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
