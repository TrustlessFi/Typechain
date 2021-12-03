import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TickBitmapTestInterface extends utils.Interface {
    functions: {
        "bitmap(int16)": FunctionFragment;
        "flipTick(int24)": FunctionFragment;
        "getGasCostOfFlipTick(int24)": FunctionFragment;
        "getGasCostOfNextInitializedTickWithinOneWord(int24,bool)": FunctionFragment;
        "isInitialized(int24)": FunctionFragment;
        "nextInitializedTickWithinOneWord(int24,bool)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "bitmap", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "flipTick", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGasCostOfFlipTick", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGasCostOfNextInitializedTickWithinOneWord", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "isInitialized", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "nextInitializedTickWithinOneWord", values: [BigNumberish, boolean]): string;
    decodeFunctionResult(functionFragment: "bitmap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flipTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfFlipTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfNextInitializedTickWithinOneWord", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextInitializedTickWithinOneWord", data: BytesLike): Result;
    events: {};
}
export interface TickBitmapTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TickBitmapTestInterface;
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
        bitmap(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        flipTick(tick: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getGasCostOfFlipTick(tick: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getGasCostOfNextInitializedTickWithinOneWord(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        isInitialized(tick: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        nextInitializedTickWithinOneWord(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<[number, boolean] & {
            next: number;
            initialized: boolean;
        }>;
    };
    bitmap(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    flipTick(tick: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getGasCostOfFlipTick(tick: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getGasCostOfNextInitializedTickWithinOneWord(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    isInitialized(tick: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    nextInitializedTickWithinOneWord(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<[number, boolean] & {
        next: number;
        initialized: boolean;
    }>;
    callStatic: {
        bitmap(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        flipTick(tick: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getGasCostOfFlipTick(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfNextInitializedTickWithinOneWord(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        isInitialized(tick: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        nextInitializedTickWithinOneWord(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<[number, boolean] & {
            next: number;
            initialized: boolean;
        }>;
    };
    filters: {};
    estimateGas: {
        bitmap(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        flipTick(tick: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getGasCostOfFlipTick(tick: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getGasCostOfNextInitializedTickWithinOneWord(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        isInitialized(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        nextInitializedTickWithinOneWord(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bitmap(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flipTick(tick: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getGasCostOfFlipTick(tick: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getGasCostOfNextInitializedTickWithinOneWord(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isInitialized(tick: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextInitializedTickWithinOneWord(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
