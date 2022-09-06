import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace IncentiveAllocation {
    type ConstructorParamsStruct = {
        TcpAllocation: PromiseOrValue<string>;
        Guardian: PromiseOrValue<string>;
    };
    type ConstructorParamsStructOutput = [string, string] & {
        TcpAllocation: string;
        Guardian: string;
    };
}
export interface IncentiveAllocationInterface extends utils.Interface {
    functions: {
        "abdicate()": FunctionFragment;
        "getTokens(address,uint128)": FunctionFragment;
        "guardian()": FunctionFragment;
        "lockTokensIntoDao(address,uint128,uint8)": FunctionFragment;
        "tcpAllocation()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "abdicate" | "getTokens" | "guardian" | "lockTokensIntoDao" | "tcpAllocation"): FunctionFragment;
    encodeFunctionData(functionFragment: "abdicate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokens", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockTokensIntoDao", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "tcpAllocation", values?: undefined): string;
    decodeFunctionResult(functionFragment: "abdicate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockTokensIntoDao", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tcpAllocation", data: BytesLike): Result;
    events: {};
}
export interface IncentiveAllocation extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IncentiveAllocationInterface;
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
        abdicate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getTokens(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        guardian(overrides?: CallOverrides): Promise<[string]>;
        lockTokensIntoDao(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tcpAllocation(overrides?: CallOverrides): Promise<[string]>;
    };
    abdicate(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getTokens(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    guardian(overrides?: CallOverrides): Promise<string>;
    lockTokensIntoDao(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tcpAllocation(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        abdicate(overrides?: CallOverrides): Promise<void>;
        getTokens(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        guardian(overrides?: CallOverrides): Promise<string>;
        lockTokensIntoDao(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        tcpAllocation(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        abdicate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getTokens(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        guardian(overrides?: CallOverrides): Promise<BigNumber>;
        lockTokensIntoDao(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tcpAllocation(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        abdicate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getTokens(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockTokensIntoDao(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tcpAllocation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
