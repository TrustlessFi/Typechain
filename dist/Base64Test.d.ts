import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface Base64TestInterface extends utils.Interface {
    functions: {
        "encode(bytes)": FunctionFragment;
        "getGasCostOfEncode(bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "encode", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getGasCostOfEncode", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "encode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfEncode", data: BytesLike): Result;
    events: {};
}
export interface Base64Test extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Base64TestInterface;
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
        encode(data: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getGasCostOfEncode(data: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    encode(data: BytesLike, overrides?: CallOverrides): Promise<string>;
    getGasCostOfEncode(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        encode(data: BytesLike, overrides?: CallOverrides): Promise<string>;
        getGasCostOfEncode(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        encode(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfEncode(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        encode(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfEncode(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
