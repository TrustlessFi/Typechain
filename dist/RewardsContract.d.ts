import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type PoolConfigStruct = {
    pool: string;
    rewardsPortion: BigNumberish;
};
export declare type PoolConfigStructOutput = [string, BigNumber] & {
    pool: string;
    rewardsPortion: BigNumber;
};
export interface RewardsContractInterface extends utils.Interface {
    functions: {
        "countPools()": FunctionFragment;
        "poolConfigForPoolID(uint16)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "countPools", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolConfigForPoolID", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "countPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolConfigForPoolID", data: BytesLike): Result;
    events: {};
}
export interface RewardsContract extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RewardsContractInterface;
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
        countPools(overrides?: CallOverrides): Promise<[number]>;
        poolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<[PoolConfigStructOutput]>;
    };
    countPools(overrides?: CallOverrides): Promise<number>;
    poolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<PoolConfigStructOutput>;
    callStatic: {
        countPools(overrides?: CallOverrides): Promise<number>;
        poolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<PoolConfigStructOutput>;
    };
    filters: {};
    estimateGas: {
        countPools(overrides?: CallOverrides): Promise<BigNumber>;
        poolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        countPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
