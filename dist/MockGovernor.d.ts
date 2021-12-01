import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MockGovernorInterface extends utils.Interface {
    functions: {
        "currentPhase()": FunctionFragment;
        "execute(address,string,bytes)": FunctionFragment;
        "mintTo(address,address,uint256)": FunctionFragment;
        "requireValidAction(address,string)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "currentPhase", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "mintTo", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "requireValidAction", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "currentPhase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireValidAction", data: BytesLike): Result;
    events: {};
}
export interface MockGovernor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockGovernorInterface;
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
        currentPhase(overrides?: CallOverrides): Promise<[number]>;
        execute(arg0: string, arg1: string, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintTo(token: string, dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        requireValidAction(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[void]>;
    };
    currentPhase(overrides?: CallOverrides): Promise<number>;
    execute(arg0: string, arg1: string, arg2: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintTo(token: string, dest: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    requireValidAction(arg0: string, arg1: string, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        currentPhase(overrides?: CallOverrides): Promise<number>;
        execute(arg0: string, arg1: string, arg2: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        mintTo(token: string, dest: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        requireValidAction(arg0: string, arg1: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        currentPhase(overrides?: CallOverrides): Promise<BigNumber>;
        execute(arg0: string, arg1: string, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintTo(token: string, dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        requireValidAction(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        currentPhase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(arg0: string, arg1: string, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintTo(token: string, dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        requireValidAction(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
