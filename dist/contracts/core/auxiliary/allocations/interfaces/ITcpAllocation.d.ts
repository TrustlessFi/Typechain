import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export interface ITcpAllocationInterface extends utils.Interface {
    functions: {
        "getTokens(address,uint128)": FunctionFragment;
        "incentiveAllocation()": FunctionFragment;
        "increaseAllocation(address,uint128)": FunctionFragment;
        "lockTokensIntoDao(address,uint128,uint8)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getTokens" | "incentiveAllocation" | "increaseAllocation" | "lockTokensIntoDao"): FunctionFragment;
    encodeFunctionData(functionFragment: "getTokens", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "incentiveAllocation", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllocation", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lockTokensIntoDao", values: [string, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incentiveAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockTokensIntoDao", data: BytesLike): Result;
    events: {};
}
export interface ITcpAllocation extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITcpAllocationInterface;
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
        getTokens(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        incentiveAllocation(overrides?: CallOverrides): Promise<[string]>;
        increaseAllocation(allocatee: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lockTokensIntoDao(dest: string, count: BigNumberish, lockDurationMonths: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getTokens(dest: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    incentiveAllocation(overrides?: CallOverrides): Promise<string>;
    increaseAllocation(allocatee: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lockTokensIntoDao(dest: string, count: BigNumberish, lockDurationMonths: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getTokens(dest: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        incentiveAllocation(overrides?: CallOverrides): Promise<string>;
        increaseAllocation(allocatee: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lockTokensIntoDao(dest: string, count: BigNumberish, lockDurationMonths: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getTokens(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        incentiveAllocation(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllocation(allocatee: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lockTokensIntoDao(dest: string, count: BigNumberish, lockDurationMonths: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getTokens(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        incentiveAllocation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllocation(allocatee: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lockTokensIntoDao(dest: string, count: BigNumberish, lockDurationMonths: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
