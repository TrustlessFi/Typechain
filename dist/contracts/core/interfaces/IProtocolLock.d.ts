import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IProtocolLockInterface extends utils.Interface {
    functions: {
        "authorizeCaller(address)": FunctionFragment;
        "enter()": FunctionFragment;
        "exit()": FunctionFragment;
        "unauthorizeCaller(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "authorizeCaller" | "enter" | "exit" | "unauthorizeCaller"): FunctionFragment;
    encodeFunctionData(functionFragment: "authorizeCaller", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "enter", values?: undefined): string;
    encodeFunctionData(functionFragment: "exit", values?: undefined): string;
    encodeFunctionData(functionFragment: "unauthorizeCaller", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "authorizeCaller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
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
export interface IProtocolLock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IProtocolLockInterface;
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
        enter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exit(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unauthorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    authorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    enter(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exit(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unauthorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        authorizeCaller(caller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        enter(overrides?: CallOverrides): Promise<void>;
        exit(overrides?: CallOverrides): Promise<void>;
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
        enter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exit(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unauthorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        authorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        enter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exit(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unauthorizeCaller(caller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
