import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface OracleTestInterface extends utils.Interface {
    functions: {
        "consult(address,uint32)": FunctionFragment;
        "getGasCostOfConsult(address,uint32)": FunctionFragment;
        "getGasCostOfGetQuoteAtTick(int24,uint128,address,address)": FunctionFragment;
        "getQuoteAtTick(int24,uint128,address,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "consult", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGasCostOfConsult", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGasCostOfGetQuoteAtTick", values: [BigNumberish, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getQuoteAtTick", values: [BigNumberish, BigNumberish, string, string]): string;
    decodeFunctionResult(functionFragment: "consult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfConsult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfGetQuoteAtTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getQuoteAtTick", data: BytesLike): Result;
    events: {};
}
export interface OracleTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OracleTestInterface;
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
        consult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            timeWeightedAverageTick: number;
        }>;
        getGasCostOfConsult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getGasCostOfGetQuoteAtTick(tick: BigNumberish, baseAmount: BigNumberish, baseToken: string, quoteToken: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getQuoteAtTick(tick: BigNumberish, baseAmount: BigNumberish, baseToken: string, quoteToken: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            quoteAmount: BigNumber;
        }>;
    };
    consult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<number>;
    getGasCostOfConsult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getGasCostOfGetQuoteAtTick(tick: BigNumberish, baseAmount: BigNumberish, baseToken: string, quoteToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    getQuoteAtTick(tick: BigNumberish, baseAmount: BigNumberish, baseToken: string, quoteToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        consult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<number>;
        getGasCostOfConsult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetQuoteAtTick(tick: BigNumberish, baseAmount: BigNumberish, baseToken: string, quoteToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getQuoteAtTick(tick: BigNumberish, baseAmount: BigNumberish, baseToken: string, quoteToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        consult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfConsult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetQuoteAtTick(tick: BigNumberish, baseAmount: BigNumberish, baseToken: string, quoteToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getQuoteAtTick(tick: BigNumberish, baseAmount: BigNumberish, baseToken: string, quoteToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        consult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfConsult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfGetQuoteAtTick(tick: BigNumberish, baseAmount: BigNumberish, baseToken: string, quoteToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getQuoteAtTick(tick: BigNumberish, baseAmount: BigNumberish, baseToken: string, quoteToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
