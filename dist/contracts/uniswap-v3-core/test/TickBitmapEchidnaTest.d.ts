import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface TickBitmapEchidnaTestInterface extends utils.Interface {
    functions: {
        "checkNextInitializedTickWithinOneWordInvariants(int24,bool)": FunctionFragment;
        "flipTick(int24)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "checkNextInitializedTickWithinOneWordInvariants" | "flipTick"): FunctionFragment;
    encodeFunctionData(functionFragment: "checkNextInitializedTickWithinOneWordInvariants", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "flipTick", values: [BigNumberish]): string;
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
        checkNextInitializedTickWithinOneWordInvariants(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<[void]>;
        flipTick(tick: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    checkNextInitializedTickWithinOneWordInvariants(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<void>;
    flipTick(tick: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        checkNextInitializedTickWithinOneWordInvariants(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<void>;
        flipTick(tick: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        checkNextInitializedTickWithinOneWordInvariants(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        flipTick(tick: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        checkNextInitializedTickWithinOneWordInvariants(tick: BigNumberish, lte: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flipTick(tick: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
