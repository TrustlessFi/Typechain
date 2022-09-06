import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace ISwapRouter {
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
    type ExactInputSingleParamsStruct = {
        tokenIn: PromiseOrValue<string>;
        tokenOut: PromiseOrValue<string>;
        fee: PromiseOrValue<BigNumberish>;
        recipient: PromiseOrValue<string>;
        deadline: PromiseOrValue<BigNumberish>;
        amountIn: PromiseOrValue<BigNumberish>;
        amountOutMinimum: PromiseOrValue<BigNumberish>;
        sqrtPriceLimitX96: PromiseOrValue<BigNumberish>;
    };
    type ExactInputSingleParamsStructOutput = [
        string,
        string,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: number;
        recipient: string;
        deadline: BigNumber;
        amountIn: BigNumber;
        amountOutMinimum: BigNumber;
        sqrtPriceLimitX96: BigNumber;
    };
    type ExactOutputParamsStruct = {
        path: PromiseOrValue<BytesLike>;
        recipient: PromiseOrValue<string>;
        deadline: PromiseOrValue<BigNumberish>;
        amountOut: PromiseOrValue<BigNumberish>;
        amountInMaximum: PromiseOrValue<BigNumberish>;
    };
    type ExactOutputParamsStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        path: string;
        recipient: string;
        deadline: BigNumber;
        amountOut: BigNumber;
        amountInMaximum: BigNumber;
    };
    type ExactOutputSingleParamsStruct = {
        tokenIn: PromiseOrValue<string>;
        tokenOut: PromiseOrValue<string>;
        fee: PromiseOrValue<BigNumberish>;
        recipient: PromiseOrValue<string>;
        deadline: PromiseOrValue<BigNumberish>;
        amountOut: PromiseOrValue<BigNumberish>;
        amountInMaximum: PromiseOrValue<BigNumberish>;
        sqrtPriceLimitX96: PromiseOrValue<BigNumberish>;
    };
    type ExactOutputSingleParamsStructOutput = [
        string,
        string,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: number;
        recipient: string;
        deadline: BigNumber;
        amountOut: BigNumber;
        amountInMaximum: BigNumber;
        sqrtPriceLimitX96: BigNumber;
    };
}
export interface ISwapRouterInterface extends utils.Interface {
    functions: {
        "exactInput((bytes,address,uint256,uint256,uint256))": FunctionFragment;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))": FunctionFragment;
        "exactOutput((bytes,address,uint256,uint256,uint256))": FunctionFragment;
        "exactOutputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exactInput" | "exactInputSingle" | "exactOutput" | "exactOutputSingle" | "uniswapV3SwapCallback"): FunctionFragment;
    encodeFunctionData(functionFragment: "exactInput", values: [ISwapRouter.ExactInputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactInputSingle", values: [ISwapRouter.ExactInputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactOutput", values: [ISwapRouter.ExactOutputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactOutputSingle", values: [ISwapRouter.ExactOutputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3SwapCallback", data: BytesLike): Result;
    events: {};
}
export interface ISwapRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISwapRouterInterface;
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
        exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exactInputSingle(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exactInputSingle(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactInputSingle(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exactInputSingle(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exactInputSingle(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
