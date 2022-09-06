import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface SwapMathTestInterface extends utils.Interface {
    functions: {
        "computeSwapStep(uint160,uint160,uint128,int256,uint24)": FunctionFragment;
        "getGasCostOfComputeSwapStep(uint160,uint160,uint128,int256,uint24)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "computeSwapStep" | "getGasCostOfComputeSwapStep"): FunctionFragment;
    encodeFunctionData(functionFragment: "computeSwapStep", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getGasCostOfComputeSwapStep", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "computeSwapStep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfComputeSwapStep", data: BytesLike): Result;
    events: {};
}
export interface SwapMathTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SwapMathTestInterface;
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
        computeSwapStep(sqrtP: PromiseOrValue<BigNumberish>, sqrtPTarget: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            sqrtQ: BigNumber;
            amountIn: BigNumber;
            amountOut: BigNumber;
            feeAmount: BigNumber;
        }>;
        getGasCostOfComputeSwapStep(sqrtP: PromiseOrValue<BigNumberish>, sqrtPTarget: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    computeSwapStep(sqrtP: PromiseOrValue<BigNumberish>, sqrtPTarget: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        sqrtQ: BigNumber;
        amountIn: BigNumber;
        amountOut: BigNumber;
        feeAmount: BigNumber;
    }>;
    getGasCostOfComputeSwapStep(sqrtP: PromiseOrValue<BigNumberish>, sqrtPTarget: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        computeSwapStep(sqrtP: PromiseOrValue<BigNumberish>, sqrtPTarget: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            sqrtQ: BigNumber;
            amountIn: BigNumber;
            amountOut: BigNumber;
            feeAmount: BigNumber;
        }>;
        getGasCostOfComputeSwapStep(sqrtP: PromiseOrValue<BigNumberish>, sqrtPTarget: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        computeSwapStep(sqrtP: PromiseOrValue<BigNumberish>, sqrtPTarget: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfComputeSwapStep(sqrtP: PromiseOrValue<BigNumberish>, sqrtPTarget: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        computeSwapStep(sqrtP: PromiseOrValue<BigNumberish>, sqrtPTarget: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfComputeSwapStep(sqrtP: PromiseOrValue<BigNumberish>, sqrtPTarget: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountRemaining: PromiseOrValue<BigNumberish>, feePips: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
