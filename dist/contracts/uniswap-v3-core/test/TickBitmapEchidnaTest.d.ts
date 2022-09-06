import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface TickBitmapEchidnaTestInterface extends utils.Interface {
    functions: {
        "checkNextInitializedTickWithinOneWordInvariants(int24,bool)": FunctionFragment;
        "flipTick(int24)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "checkNextInitializedTickWithinOneWordInvariants" | "flipTick"): FunctionFragment;
    encodeFunctionData(functionFragment: "checkNextInitializedTickWithinOneWordInvariants", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "flipTick", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "checkNextInitializedTickWithinOneWordInvariants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flipTick", data: BytesLike): Result;
    events: {};
}
export interface TickBitmapEchidnaTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TickBitmapEchidnaTestInterface;
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
        checkNextInitializedTickWithinOneWordInvariants(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[void]>;
        flipTick(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    checkNextInitializedTickWithinOneWordInvariants(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    flipTick(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        checkNextInitializedTickWithinOneWordInvariants(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        flipTick(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        checkNextInitializedTickWithinOneWordInvariants(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        flipTick(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        checkNextInitializedTickWithinOneWordInvariants(tick: PromiseOrValue<BigNumberish>, lte: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flipTick(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
