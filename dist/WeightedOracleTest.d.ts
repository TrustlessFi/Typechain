import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type PeriodObservationStruct = {
    arithmeticMeanTick: BigNumberish;
    harmonicMeanLiquidity: BigNumberish;
};
export declare type PeriodObservationStructOutput = [number, BigNumber] & {
    arithmeticMeanTick: number;
    harmonicMeanLiquidity: BigNumber;
};
export interface WeightedOracleTestInterface extends utils.Interface {
    functions: {
        "consult(address,uint32)": FunctionFragment;
        "getArithmeticMeanTickWeightedByLiquidity((int24,uint128)[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "consult", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getArithmeticMeanTickWeightedByLiquidity", values: [PeriodObservationStruct[]]): string;
    decodeFunctionResult(functionFragment: "consult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getArithmeticMeanTickWeightedByLiquidity", data: BytesLike): Result;
    events: {};
}
export interface WeightedOracleTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WeightedOracleTestInterface;
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
        consult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<[
            PeriodObservationStructOutput
        ] & {
            observation: PeriodObservationStructOutput;
        }>;
        getArithmeticMeanTickWeightedByLiquidity(observations: PeriodObservationStruct[], overrides?: CallOverrides): Promise<[number] & {
            arithmeticMeanWeightedTick: number;
        }>;
    };
    consult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<PeriodObservationStructOutput>;
    getArithmeticMeanTickWeightedByLiquidity(observations: PeriodObservationStruct[], overrides?: CallOverrides): Promise<number>;
    callStatic: {
        consult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<PeriodObservationStructOutput>;
        getArithmeticMeanTickWeightedByLiquidity(observations: PeriodObservationStruct[], overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        consult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getArithmeticMeanTickWeightedByLiquidity(observations: PeriodObservationStruct[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        consult(pool: string, period: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getArithmeticMeanTickWeightedByLiquidity(observations: PeriodObservationStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
