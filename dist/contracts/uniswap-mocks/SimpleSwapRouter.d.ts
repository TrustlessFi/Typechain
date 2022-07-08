import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace SimpleSwapRouter {
    type ExactInputParamsStruct = {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
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
    encodeFunctionData(functionFragment: "sweepToken", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sweepTokenWithFee", values: [string, BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9WithFee", values: [BigNumberish, string, BigNumberish, string]): string;
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
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        refundETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sweepTokenWithFee(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unwrapWETH9WithFee(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    WETH9(overrides?: CallOverrides): Promise<string>;
    exactInput(params: SimpleSwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    refundETH(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sweepTokenWithFee(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unwrapWETH9WithFee(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        WETH9(overrides?: CallOverrides): Promise<string>;
        exactInput(params: SimpleSwapRouter.ExactInputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<string>;
        refundETH(overrides?: CallOverrides): Promise<void>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        sweepTokenWithFee(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        unwrapWETH9WithFee(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        WETH9(overrides?: CallOverrides): Promise<BigNumber>;
        exactInput(params: SimpleSwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        refundETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sweepTokenWithFee(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unwrapWETH9WithFee(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exactInput(params: SimpleSwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refundETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sweepTokenWithFee(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unwrapWETH9WithFee(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
