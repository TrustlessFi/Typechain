import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type TupleStruct = {
    a: BigNumberish;
    b: BigNumberish;
};
export declare type TupleStructOutput = [BigNumber, BigNumber] & {
    a: BigNumber;
    b: BigNumber;
};
export interface TestMulticallInterface extends utils.Interface {
    functions: {
        "functionThatReturnsTuple(uint256,uint256)": FunctionFragment;
        "functionThatRevertsWithError(string)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "paid()": FunctionFragment;
        "pays()": FunctionFragment;
        "returnSender()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "functionThatReturnsTuple", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "functionThatRevertsWithError", values: [string]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "paid", values?: undefined): string;
    encodeFunctionData(functionFragment: "pays", values?: undefined): string;
    encodeFunctionData(functionFragment: "returnSender", values?: undefined): string;
    decodeFunctionResult(functionFragment: "functionThatReturnsTuple", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "functionThatRevertsWithError", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pays", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "returnSender", data: BytesLike): Result;
    events: {};
}
export interface TestMulticall extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestMulticallInterface;
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
        functionThatReturnsTuple(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<[TupleStructOutput] & {
            tuple: TupleStructOutput;
        }>;
        functionThatRevertsWithError(error: string, overrides?: CallOverrides): Promise<[void]>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paid(overrides?: CallOverrides): Promise<[BigNumber]>;
        pays(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        returnSender(overrides?: CallOverrides): Promise<[string]>;
    };
    functionThatReturnsTuple(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<TupleStructOutput>;
    functionThatRevertsWithError(error: string, overrides?: CallOverrides): Promise<void>;
    multicall(data: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paid(overrides?: CallOverrides): Promise<BigNumber>;
    pays(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    returnSender(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        functionThatReturnsTuple(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<TupleStructOutput>;
        functionThatRevertsWithError(error: string, overrides?: CallOverrides): Promise<void>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        paid(overrides?: CallOverrides): Promise<BigNumber>;
        pays(overrides?: CallOverrides): Promise<void>;
        returnSender(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        functionThatReturnsTuple(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        functionThatRevertsWithError(error: string, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paid(overrides?: CallOverrides): Promise<BigNumber>;
        pays(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        returnSender(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        functionThatReturnsTuple(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        functionThatRevertsWithError(error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pays(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        returnSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
