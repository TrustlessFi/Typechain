import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PoolTicksCounterTestInterface extends utils.Interface {
    functions: {
        "countInitializedTicksCrossed(address,int24,int24)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "countInitializedTicksCrossed", values: [string, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "countInitializedTicksCrossed", data: BytesLike): Result;
    events: {};
}
export interface PoolTicksCounterTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PoolTicksCounterTestInterface;
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
        countInitializedTicksCrossed(pool: string, tickBefore: BigNumberish, tickAfter: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            initializedTicksCrossed: number;
        }>;
    };
    countInitializedTicksCrossed(pool: string, tickBefore: BigNumberish, tickAfter: BigNumberish, overrides?: CallOverrides): Promise<number>;
    callStatic: {
        countInitializedTicksCrossed(pool: string, tickBefore: BigNumberish, tickAfter: BigNumberish, overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        countInitializedTicksCrossed(pool: string, tickBefore: BigNumberish, tickAfter: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        countInitializedTicksCrossed(pool: string, tickBefore: BigNumberish, tickAfter: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
