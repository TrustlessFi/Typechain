import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type UpdateParamsStruct = {
    advanceTimeBy: BigNumberish;
    tick: BigNumberish;
    liquidity: BigNumberish;
};
export declare type UpdateParamsStructOutput = [number, number, BigNumber] & {
    advanceTimeBy: number;
    tick: number;
    liquidity: BigNumber;
};
export declare type InitializeParamsStruct = {
    time: BigNumberish;
    tick: BigNumberish;
    liquidity: BigNumberish;
};
export declare type InitializeParamsStructOutput = [number, number, BigNumber] & {
    time: number;
    tick: number;
    liquidity: BigNumber;
};
export interface OracleTestInterface extends utils.Interface {
    functions: {
        "advanceTime(uint32)": FunctionFragment;
        "batchUpdate((uint32,int24,uint128)[])": FunctionFragment;
        "cardinality()": FunctionFragment;
        "cardinalityNext()": FunctionFragment;
        "getGasCostOfObserve(uint32[])": FunctionFragment;
        "grow(uint16)": FunctionFragment;
        "index()": FunctionFragment;
        "initialize((uint32,int24,uint128))": FunctionFragment;
        "liquidity()": FunctionFragment;
        "observations(uint256)": FunctionFragment;
        "observe(uint32[])": FunctionFragment;
        "tick()": FunctionFragment;
        "time()": FunctionFragment;
        "update((uint32,int24,uint128))": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "advanceTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "batchUpdate", values: [UpdateParamsStruct[]]): string;
    encodeFunctionData(functionFragment: "cardinality", values?: undefined): string;
    encodeFunctionData(functionFragment: "cardinalityNext", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGasCostOfObserve", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "grow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "index", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [InitializeParamsStruct]): string;
    encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "observations", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "observe", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "tick", values?: undefined): string;
    encodeFunctionData(functionFragment: "time", values?: undefined): string;
    encodeFunctionData(functionFragment: "update", values: [UpdateParamsStruct]): string;
    decodeFunctionResult(functionFragment: "advanceTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cardinality", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cardinalityNext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfObserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
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
        advanceTime(by: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchUpdate(params: UpdateParamsStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cardinality(overrides?: CallOverrides): Promise<[number]>;
        cardinalityNext(overrides?: CallOverrides): Promise<[number]>;
        getGasCostOfObserve(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber]>;
        grow(_cardinalityNext: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        index(overrides?: CallOverrides): Promise<[number]>;
        initialize(params: InitializeParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;
        observations(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            blockTimestamp: number;
            tickCumulative: BigNumber;
            secondsPerLiquidityCumulativeX128: BigNumber;
            initialized: boolean;
        }>;
        observe(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber[]
        ] & {
            tickCumulatives: BigNumber[];
            secondsPerLiquidityCumulativeX128s: BigNumber[];
        }>;
        tick(overrides?: CallOverrides): Promise<[number]>;
        time(overrides?: CallOverrides): Promise<[number]>;
        update(params: UpdateParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    advanceTime(by: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchUpdate(params: UpdateParamsStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cardinality(overrides?: CallOverrides): Promise<number>;
    cardinalityNext(overrides?: CallOverrides): Promise<number>;
    getGasCostOfObserve(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
    grow(_cardinalityNext: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    index(overrides?: CallOverrides): Promise<number>;
    initialize(params: InitializeParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    liquidity(overrides?: CallOverrides): Promise<BigNumber>;
    observations(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        blockTimestamp: number;
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulativeX128: BigNumber;
        initialized: boolean;
    }>;
    observe(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<[
        BigNumber[],
        BigNumber[]
    ] & {
        tickCumulatives: BigNumber[];
        secondsPerLiquidityCumulativeX128s: BigNumber[];
    }>;
    tick(overrides?: CallOverrides): Promise<number>;
    time(overrides?: CallOverrides): Promise<number>;
    update(params: UpdateParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        advanceTime(by: BigNumberish, overrides?: CallOverrides): Promise<void>;
        batchUpdate(params: UpdateParamsStruct[], overrides?: CallOverrides): Promise<void>;
        cardinality(overrides?: CallOverrides): Promise<number>;
        cardinalityNext(overrides?: CallOverrides): Promise<number>;
        getGasCostOfObserve(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        grow(_cardinalityNext: BigNumberish, overrides?: CallOverrides): Promise<void>;
        index(overrides?: CallOverrides): Promise<number>;
        initialize(params: InitializeParamsStruct, overrides?: CallOverrides): Promise<void>;
        liquidity(overrides?: CallOverrides): Promise<BigNumber>;
        observations(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            blockTimestamp: number;
            tickCumulative: BigNumber;
            secondsPerLiquidityCumulativeX128: BigNumber;
            initialized: boolean;
        }>;
        observe(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber[]
        ] & {
            tickCumulatives: BigNumber[];
            secondsPerLiquidityCumulativeX128s: BigNumber[];
        }>;
        tick(overrides?: CallOverrides): Promise<number>;
        time(overrides?: CallOverrides): Promise<number>;
        update(params: UpdateParamsStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        advanceTime(by: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchUpdate(params: UpdateParamsStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cardinality(overrides?: CallOverrides): Promise<BigNumber>;
        cardinalityNext(overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfObserve(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        grow(_cardinalityNext: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        index(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(params: InitializeParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        liquidity(overrides?: CallOverrides): Promise<BigNumber>;
        observations(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        observe(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        tick(overrides?: CallOverrides): Promise<BigNumber>;
        time(overrides?: CallOverrides): Promise<BigNumber>;
        update(params: UpdateParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        advanceTime(by: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchUpdate(params: UpdateParamsStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cardinality(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cardinalityNext(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfObserve(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grow(_cardinalityNext: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        index(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(params: InitializeParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observations(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observe(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tick(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        update(params: UpdateParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
