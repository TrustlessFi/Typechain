import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace IProtocolLock {
    type ConstructorParamsStruct = {
        Governor: PromiseOrValue<string>;
    };
    type ConstructorParamsStructOutput = [string] & {
        Governor: string;
    };
}
export interface ProtocolLockInterface extends utils.Interface {
    functions: {
        "authorizeCaller(address)": FunctionFragment;
        "authorizedCaller(address)": FunctionFragment;
        "enter()": FunctionFragment;
        "exit()": FunctionFragment;
        "governor()": FunctionFragment;
        "unauthorizeCaller(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "authorizeCaller" | "authorizedCaller" | "enter" | "exit" | "governor" | "unauthorizeCaller"): FunctionFragment;
    encodeFunctionData(functionFragment: "authorizeCaller", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "authorizedCaller", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "enter", values?: undefined): string;
    encodeFunctionData(functionFragment: "exit", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "unauthorizeCaller", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "authorizeCaller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedCaller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unauthorizeCaller", data: BytesLike): Result;
    events: {
        "CallerAuthorized(address)": EventFragment;
        "CallerUnauthorized(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CallerAuthorized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CallerUnauthorized"): EventFragment;
}
export interface CallerAuthorizedEventObject {
    caller: string;
}
export declare type CallerAuthorizedEvent = TypedEvent<[
    string
], CallerAuthorizedEventObject>;
export declare type CallerAuthorizedEventFilter = TypedEventFilter<CallerAuthorizedEvent>;
export interface CallerUnauthorizedEventObject {
    caller: string;
}
export declare type CallerUnauthorizedEvent = TypedEvent<[
    string
], CallerUnauthorizedEventObject>;
export declare type CallerUnauthorizedEventFilter = TypedEventFilter<CallerUnauthorizedEvent>;
export interface ProtocolLock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProtocolLockInterface;
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
        authorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        authorizedCaller(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        enter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exit(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        unauthorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    authorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    authorizedCaller(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    enter(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exit(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    governor(overrides?: CallOverrides): Promise<string>;
    unauthorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        authorizeCaller(caller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        authorizedCaller(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        enter(overrides?: CallOverrides): Promise<void>;
        exit(overrides?: CallOverrides): Promise<void>;
        governor(overrides?: CallOverrides): Promise<string>;
        unauthorizeCaller(caller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CallerAuthorized(address)"(caller?: PromiseOrValue<string> | null): CallerAuthorizedEventFilter;
        CallerAuthorized(caller?: PromiseOrValue<string> | null): CallerAuthorizedEventFilter;
        "CallerUnauthorized(address)"(caller?: PromiseOrValue<string> | null): CallerUnauthorizedEventFilter;
        CallerUnauthorized(caller?: PromiseOrValue<string> | null): CallerUnauthorizedEventFilter;
    };
    estimateGas: {
        authorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        authorizedCaller(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        enter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exit(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        unauthorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        authorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        authorizedCaller(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exit(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unauthorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
