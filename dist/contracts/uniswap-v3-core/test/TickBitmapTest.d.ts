import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface TickBitmapTestInterface extends utils.Interface {
    functions: {
        "bitmap(int16)": FunctionFragment;
        "flipTick(int24)": FunctionFragment;
        "getGasCostOfFlipTick(int24)": FunctionFragment;
        "getGasCostOfNextInitializedTickWithinOneWord(int24,bool)": FunctionFragment;
        "isInitialized(int24)": FunctionFragment;
        "nextInitializedTickWithinOneWord(int24,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "bitmap" | "flipTick" | "getGasCostOfFlipTick" | "getGasCostOfNextInitializedTickWithinOneWord" | "isInitialized" | "nextInitializedTickWithinOneWord"): FunctionFragment;
    encodeFunctionData(functionFragment: "bitmap", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "flipTick", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getGasCostOfFlipTick", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getGasCostOfNextInitializedTickWithinOneWord", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "isInitialized", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "nextInitializedTickWithinOneWord", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
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
        bitmap(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        flipTick(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getGasCostOfFlipTick(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getGasCostOfNextInitializedTickWithinOneWord(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
        isInitialized(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        nextInitializedTickWithinOneWord(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[number, boolean] & {
            next: number;
            initialized: boolean;
        }>;
    };
    bitmap(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    flipTick(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getGasCostOfFlipTick(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getGasCostOfNextInitializedTickWithinOneWord(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    isInitialized(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    nextInitializedTickWithinOneWord(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[number, boolean] & {
        next: number;
        initialized: boolean;
    }>;
    callStatic: {
        bitmap(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        flipTick(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getGasCostOfFlipTick(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfNextInitializedTickWithinOneWord(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        isInitialized(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        nextInitializedTickWithinOneWord(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[number, boolean] & {
            next: number;
            initialized: boolean;
        }>;
    };
    filters: {};
    estimateGas: {
        bitmap(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        flipTick(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getGasCostOfFlipTick(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getGasCostOfNextInitializedTickWithinOneWord(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        isInitialized(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nextInitializedTickWithinOneWord(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bitmap(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flipTick(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getGasCostOfFlipTick(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getGasCostOfNextInitializedTickWithinOneWord(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isInitialized(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextInitializedTickWithinOneWord(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
