import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface TickMathEchidnaTestInterface extends utils.Interface {
    functions: {
        "checkGetSqrtRatioAtTickInvariants(int24)": FunctionFragment;
        "checkGetTickAtSqrtRatioInvariants(uint160)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "checkGetSqrtRatioAtTickInvariants" | "checkGetTickAtSqrtRatioInvariants"): FunctionFragment;
    encodeFunctionData(functionFragment: "checkGetSqrtRatioAtTickInvariants", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "checkGetTickAtSqrtRatioInvariants", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "checkGetSqrtRatioAtTickInvariants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkGetTickAtSqrtRatioInvariants", data: BytesLike): Result;
    events: {};
}
export interface TickMathEchidnaTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TickMathEchidnaTestInterface;
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
        checkGetSqrtRatioAtTickInvariants(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        checkGetTickAtSqrtRatioInvariants(ratio: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
    };
    checkGetSqrtRatioAtTickInvariants(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    checkGetTickAtSqrtRatioInvariants(ratio: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        checkGetSqrtRatioAtTickInvariants(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        checkGetTickAtSqrtRatioInvariants(ratio: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        checkGetSqrtRatioAtTickInvariants(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        checkGetTickAtSqrtRatioInvariants(ratio: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkGetSqrtRatioAtTickInvariants(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkGetTickAtSqrtRatioInvariants(ratio: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
