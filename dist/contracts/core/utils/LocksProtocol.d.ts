import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface LocksProtocolInterface extends utils.Interface {
    functions: {
        "governor()": FunctionFragment;
        "stopped()": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "governor" | "stopped" | "validUpdate"): FunctionFragment;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
    events: {
        "Stopped()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
}
export interface StoppedEventObject {
}
export declare type StoppedEvent = TypedEvent<[], StoppedEventObject>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
export interface LocksProtocol extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LocksProtocolInterface;
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
        governor(overrides?: CallOverrides): Promise<[string]>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    governor(overrides?: CallOverrides): Promise<string>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        governor(overrides?: CallOverrides): Promise<string>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
    };
    estimateGas: {
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
