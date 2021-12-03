import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface NoDelegateCallTestInterface extends utils.Interface {
    functions: {
        "callsIntoNoDelegateCallFunction()": FunctionFragment;
        "canBeDelegateCalled()": FunctionFragment;
        "cannotBeDelegateCalled()": FunctionFragment;
        "getGasCostOfCanBeDelegateCalled()": FunctionFragment;
        "getGasCostOfCannotBeDelegateCalled()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "callsIntoNoDelegateCallFunction", values?: undefined): string;
    encodeFunctionData(functionFragment: "canBeDelegateCalled", values?: undefined): string;
    encodeFunctionData(functionFragment: "cannotBeDelegateCalled", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGasCostOfCanBeDelegateCalled", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGasCostOfCannotBeDelegateCalled", values?: undefined): string;
    decodeFunctionResult(functionFragment: "callsIntoNoDelegateCallFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canBeDelegateCalled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cannotBeDelegateCalled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfCanBeDelegateCalled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfCannotBeDelegateCalled", data: BytesLike): Result;
    events: {};
}
export interface NoDelegateCallTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NoDelegateCallTestInterface;
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
        callsIntoNoDelegateCallFunction(overrides?: CallOverrides): Promise<[void]>;
        canBeDelegateCalled(overrides?: CallOverrides): Promise<[BigNumber]>;
        cannotBeDelegateCalled(overrides?: CallOverrides): Promise<[BigNumber]>;
        getGasCostOfCanBeDelegateCalled(overrides?: CallOverrides): Promise<[BigNumber]>;
        getGasCostOfCannotBeDelegateCalled(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    callsIntoNoDelegateCallFunction(overrides?: CallOverrides): Promise<void>;
    canBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;
    cannotBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;
    getGasCostOfCanBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;
    getGasCostOfCannotBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        callsIntoNoDelegateCallFunction(overrides?: CallOverrides): Promise<void>;
        canBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;
        cannotBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfCanBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfCannotBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        callsIntoNoDelegateCallFunction(overrides?: CallOverrides): Promise<BigNumber>;
        canBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;
        cannotBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfCanBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfCannotBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        callsIntoNoDelegateCallFunction(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canBeDelegateCalled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cannotBeDelegateCalled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfCanBeDelegateCalled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfCannotBeDelegateCalled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
