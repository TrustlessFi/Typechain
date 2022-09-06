import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace SimpleSwapRouter {
    type ExactInputParamsStruct = {
        path: PromiseOrValue<BytesLike>;
        recipient: PromiseOrValue<string>;
        deadline: PromiseOrValue<BigNumberish>;
        amountIn: PromiseOrValue<BigNumberish>;
        amountOutMinimum: PromiseOrValue<BigNumberish>;
    };
    type ExactInputParamsStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        path: string;
        recipient: string;
        deadline: BigNumber;
        amountIn: BigNumber;
        amountOutMinimum: BigNumber;
    };
}
export interface SimpleSwapRouterInterface extends utils.Interface {
    functions: {
        "WETH9()": FunctionFragment;
        "exactInput((bytes,address,uint256,uint256,uint256))": FunctionFragment;
        "factory()": FunctionFragment;
        "refundETH()": FunctionFragment;
        "sweepToken(address,uint256,address)": FunctionFragment;
        "sweepTokenWithFee(address,uint256,address,uint256,address)": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
        "unwrapWETH9(uint256,address)": FunctionFragment;
        "unwrapWETH9WithFee(uint256,address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "WETH9" | "exactInput" | "factory" | "refundETH" | "sweepToken" | "sweepTokenWithFee" | "uniswapV3SwapCallback" | "unwrapWETH9" | "unwrapWETH9WithFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
    encodeFunctionData(functionFragment: "exactInput", values: [SimpleSwapRouter.ExactInputParamsStruct]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "refundETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "sweepToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "sweepTokenWithFee", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9WithFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refundETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepTokenWithFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3SwapCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9WithFee", data: BytesLike): Result;
    events: {};
}
export interface SimpleSwapRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SimpleSwapRouterInterface;
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
        WETH9(overrides?: CallOverrides): Promise<[string]>;
        exactInput(params: SimpleSwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        refundETH(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sweepToken(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sweepTokenWithFee(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, feeBips: PromiseOrValue<BigNumberish>, feeRecipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unwrapWETH9(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unwrapWETH9WithFee(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, feeBips: PromiseOrValue<BigNumberish>, feeRecipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    WETH9(overrides?: CallOverrides): Promise<string>;
    exactInput(params: SimpleSwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    refundETH(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sweepToken(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sweepTokenWithFee(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, feeBips: PromiseOrValue<BigNumberish>, feeRecipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unwrapWETH9(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unwrapWETH9WithFee(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, feeBips: PromiseOrValue<BigNumberish>, feeRecipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        WETH9(overrides?: CallOverrides): Promise<string>;
        exactInput(params: SimpleSwapRouter.ExactInputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<string>;
        refundETH(overrides?: CallOverrides): Promise<void>;
        sweepToken(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        sweepTokenWithFee(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, feeBips: PromiseOrValue<BigNumberish>, feeRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        unwrapWETH9(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unwrapWETH9WithFee(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, feeBips: PromiseOrValue<BigNumberish>, feeRecipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        WETH9(overrides?: CallOverrides): Promise<BigNumber>;
        exactInput(params: SimpleSwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        refundETH(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sweepToken(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sweepTokenWithFee(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, feeBips: PromiseOrValue<BigNumberish>, feeRecipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unwrapWETH9(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unwrapWETH9WithFee(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, feeBips: PromiseOrValue<BigNumberish>, feeRecipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exactInput(params: SimpleSwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refundETH(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sweepToken(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sweepTokenWithFee(token: PromiseOrValue<string>, amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, feeBips: PromiseOrValue<BigNumberish>, feeRecipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unwrapWETH9(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unwrapWETH9WithFee(amountMinimum: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, feeBips: PromiseOrValue<BigNumberish>, feeRecipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
