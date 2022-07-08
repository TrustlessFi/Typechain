import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface BitMathTestInterface extends utils.Interface {
    functions: {
        "getGasCostOfLeastSignificantBit(uint256)": FunctionFragment;
        "getGasCostOfMostSignificantBit(uint256)": FunctionFragment;
        "leastSignificantBit(uint256)": FunctionFragment;
        "mostSignificantBit(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getGasCostOfLeastSignificantBit" | "getGasCostOfMostSignificantBit" | "leastSignificantBit" | "mostSignificantBit"): FunctionFragment;
    encodeFunctionData(functionFragment: "getGasCostOfLeastSignificantBit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGasCostOfMostSignificantBit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "leastSignificantBit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "mostSignificantBit", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getGasCostOfLeastSignificantBit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfMostSignificantBit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "leastSignificantBit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mostSignificantBit", data: BytesLike): Result;
    events: {};
}
export interface BitMathTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BitMathTestInterface;
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
        getGasCostOfLeastSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getGasCostOfMostSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        leastSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            r: number;
        }>;
        mostSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            r: number;
        }>;
    };
    getGasCostOfLeastSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getGasCostOfMostSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    leastSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<number>;
    mostSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<number>;
    callStatic: {
        getGasCostOfLeastSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfMostSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        leastSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<number>;
        mostSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        getGasCostOfLeastSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfMostSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        leastSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mostSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getGasCostOfLeastSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfMostSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        leastSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mostSignificantBit(x: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
