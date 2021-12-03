import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SwapMathEchidnaTestInterface extends utils.Interface {
    functions: {
        "checkComputeSwapStepInvariants(uint160,uint160,uint128,int256,uint24)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "checkComputeSwapStepInvariants", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
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
        checkComputeSwapStepInvariants(sqrtPriceRaw: BigNumberish, sqrtPriceTargetRaw: BigNumberish, liquidity: BigNumberish, amountRemaining: BigNumberish, feePips: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
    };
    checkComputeSwapStepInvariants(sqrtPriceRaw: BigNumberish, sqrtPriceTargetRaw: BigNumberish, liquidity: BigNumberish, amountRemaining: BigNumberish, feePips: BigNumberish, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        checkComputeSwapStepInvariants(sqrtPriceRaw: BigNumberish, sqrtPriceTargetRaw: BigNumberish, liquidity: BigNumberish, amountRemaining: BigNumberish, feePips: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        checkComputeSwapStepInvariants(sqrtPriceRaw: BigNumberish, sqrtPriceTargetRaw: BigNumberish, liquidity: BigNumberish, amountRemaining: BigNumberish, feePips: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkComputeSwapStepInvariants(sqrtPriceRaw: BigNumberish, sqrtPriceTargetRaw: BigNumberish, liquidity: BigNumberish, amountRemaining: BigNumberish, feePips: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
