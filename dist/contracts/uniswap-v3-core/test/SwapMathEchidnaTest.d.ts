import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface SwapMathEchidnaTestInterface extends utils.Interface {
    functions: {
        "checkComputeSwapStepInvariants(uint160,uint160,uint128,int256,uint24)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "checkComputeSwapStepInvariants"): FunctionFragment;
    encodeFunctionData(functionFragment: "checkComputeSwapStepInvariants", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "checkComputeSwapStepInvariants", data: BytesLike): Result;
    events: {};
}
export interface SwapMathEchidnaTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SwapMathEchidnaTestInterface;
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
        checkComputeSwapStepInvariants(sqrtPriceRaw: PromiseOrValue<BigNumberish>, sqrtPriceTargetRaw: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
    };
    checkComputeSwapStepInvariants(sqrtPriceRaw: PromiseOrValue<BigNumberish>, sqrtPriceTargetRaw: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        checkComputeSwapStepInvariants(sqrtPriceRaw: PromiseOrValue<BigNumberish>, sqrtPriceTargetRaw: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        checkComputeSwapStepInvariants(sqrtPriceRaw: PromiseOrValue<BigNumberish>, sqrtPriceTargetRaw: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkComputeSwapStepInvariants(sqrtPriceRaw: PromiseOrValue<BigNumberish>, sqrtPriceTargetRaw: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
