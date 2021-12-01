import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    TcpAllocation: string;
    Guardian: string;
};
export declare type ConstructorParamsStructOutput = [string, string] & {
    TcpAllocation: string;
    Guardian: string;
};
export interface IncentiveAllocationInterface extends utils.Interface {
    functions: {
        "abdicate()": FunctionFragment;
        "getTokens(address,uint128)": FunctionFragment;
        "guardian()": FunctionFragment;
        "lockTokensIntoDao(address,uint128,uint8)": FunctionFragment;
        "tcpAllocation()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "abdicate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokens", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockTokensIntoDao", values: [string, BigNumberish, BigNumberish]): string;
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
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getTokens(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        guardian(overrides?: CallOverrides): Promise<[string]>;
        lockTokensIntoDao(dest: string, count: BigNumberish, lockDurationMonths: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tcpAllocation(overrides?: CallOverrides): Promise<[string]>;
    };
    abdicate(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getTokens(dest: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    guardian(overrides?: CallOverrides): Promise<string>;
    lockTokensIntoDao(dest: string, count: BigNumberish, lockDurationMonths: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tcpAllocation(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        abdicate(overrides?: CallOverrides): Promise<void>;
        getTokens(dest: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        guardian(overrides?: CallOverrides): Promise<string>;
        lockTokensIntoDao(dest: string, count: BigNumberish, lockDurationMonths: BigNumberish, overrides?: CallOverrides): Promise<void>;
        tcpAllocation(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        abdicate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getTokens(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        guardian(overrides?: CallOverrides): Promise<BigNumber>;
        lockTokensIntoDao(dest: string, count: BigNumberish, lockDurationMonths: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tcpAllocation(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        abdicate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getTokens(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockTokensIntoDao(dest: string, count: BigNumberish, lockDurationMonths: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tcpAllocation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
