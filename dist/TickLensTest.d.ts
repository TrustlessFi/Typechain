import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type PopulatedTickStruct = {
    tick: BigNumberish;
    liquidityNet: BigNumberish;
    liquidityGross: BigNumberish;
};
export declare type PopulatedTickStructOutput = [number, BigNumber, BigNumber] & {
    tick: number;
    liquidityNet: BigNumber;
    liquidityGross: BigNumber;
};
export interface TickLensTestInterface extends utils.Interface {
    functions: {
        "getGasCostOfGetPopulatedTicksInWord(address,int16)": FunctionFragment;
        "getPopulatedTicksInWord(address,int16)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getGasCostOfGetPopulatedTicksInWord", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPopulatedTicksInWord", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getGasCostOfGetPopulatedTicksInWord", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPopulatedTicksInWord", data: BytesLike): Result;
    events: {};
}
export interface TickLensTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TickLensTestInterface;
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
        getGasCostOfGetPopulatedTicksInWord(pool: string, tickBitmapIndex: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPopulatedTicksInWord(pool: string, tickBitmapIndex: BigNumberish, overrides?: CallOverrides): Promise<[
            PopulatedTickStructOutput[]
        ] & {
            populatedTicks: PopulatedTickStructOutput[];
        }>;
    };
    getGasCostOfGetPopulatedTicksInWord(pool: string, tickBitmapIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getPopulatedTicksInWord(pool: string, tickBitmapIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTickStructOutput[]>;
    callStatic: {
        getGasCostOfGetPopulatedTicksInWord(pool: string, tickBitmapIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPopulatedTicksInWord(pool: string, tickBitmapIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTickStructOutput[]>;
    };
    filters: {};
    estimateGas: {
        getGasCostOfGetPopulatedTicksInWord(pool: string, tickBitmapIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPopulatedTicksInWord(pool: string, tickBitmapIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getGasCostOfGetPopulatedTicksInWord(pool: string, tickBitmapIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPopulatedTicksInWord(pool: string, tickBitmapIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}