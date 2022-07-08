import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export declare namespace IRewards {
    type PoolConfigStruct = {
        pool: string;
        rewardsPortion: BigNumberish;
    };
    type PoolConfigStructOutput = [string, BigNumber] & {
        pool: string;
        rewardsPortion: BigNumber;
    };
}
export interface RewardsContractInterface extends utils.Interface {
    functions: {
        "countPools()": FunctionFragment;
        "getPoolConfigForPoolID(uint16)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "countPools" | "getPoolConfigForPoolID"): FunctionFragment;
    encodeFunctionData(functionFragment: "countPools", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPoolConfigForPoolID", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "countPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolConfigForPoolID", data: BytesLike): Result;
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
        getPoolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<[IRewards.PoolConfigStructOutput]>;
    };
    countPools(overrides?: CallOverrides): Promise<number>;
    getPoolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<IRewards.PoolConfigStructOutput>;
    callStatic: {
        countPools(overrides?: CallOverrides): Promise<number>;
        getPoolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<IRewards.PoolConfigStructOutput>;
    };
    filters: {};
    estimateGas: {
        countPools(overrides?: CallOverrides): Promise<BigNumber>;
        getPoolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        countPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolConfigForPoolID(poolID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}