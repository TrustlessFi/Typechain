import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    Governor: string;
};
export declare type ConstructorParamsStructOutput = [string] & {
    Governor: string;
};
export interface ProtocolLockInterface extends utils.Interface {
    functions: {
        "authorizeCaller(address)": FunctionFragment;
        "authorizedCaller(address)": FunctionFragment;
        "enter()": FunctionFragment;
        "exit()": FunctionFragment;
        "governor()": FunctionFragment;
        "unauthorizeCaller(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "authorizeCaller", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedCaller", values: [string]): string;
    encodeFunctionData(functionFragment: "enter", values?: undefined): string;
    encodeFunctionData(functionFragment: "exit", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "unauthorizeCaller", values: [string]): string;
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
export declare type CallerAuthorizedEvent = TypedEvent<[string], {
    caller: string;
}>;
export declare type CallerAuthorizedEventFilter = TypedEventFilter<CallerAuthorizedEvent>;
export declare type CallerUnauthorizedEvent = TypedEvent<[string], {
    caller: string;
}>;
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
        authorizeCaller(caller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        authorizedCaller(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        enter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        unauthorizeCaller(caller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    authorizeCaller(caller: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    authorizedCaller(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    enter(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exit(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    governor(overrides?: CallOverrides): Promise<string>;
    unauthorizeCaller(caller: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        authorizeCaller(caller: string, overrides?: CallOverrides): Promise<void>;
        authorizedCaller(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        enter(overrides?: CallOverrides): Promise<void>;
        exit(overrides?: CallOverrides): Promise<void>;
        governor(overrides?: CallOverrides): Promise<string>;
        unauthorizeCaller(caller: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CallerAuthorized(address)"(caller?: string | null): CallerAuthorizedEventFilter;
        CallerAuthorized(caller?: string | null): CallerAuthorizedEventFilter;
        "CallerUnauthorized(address)"(caller?: string | null): CallerUnauthorizedEventFilter;
        CallerUnauthorized(caller?: string | null): CallerUnauthorizedEventFilter;
    };
    estimateGas: {
        authorizeCaller(caller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        authorizedCaller(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        enter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        unauthorizeCaller(caller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        authorizeCaller(caller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        authorizedCaller(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unauthorizeCaller(caller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
