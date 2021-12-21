import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TestUniswapV3CalleeInterface extends utils.Interface {
    functions: {
        "swap0ForExact1(address,uint256,address,uint160)": FunctionFragment;
        "swap1ForExact0(address,uint256,address,uint160)": FunctionFragment;
        "swapExact0For1(address,uint256,address,uint160)": FunctionFragment;
        "swapExact1For0(address,uint256,address,uint160)": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "swap0ForExact1", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swap1ForExact0", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExact0For1", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExact1For0", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "swap0ForExact1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap1ForExact0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExact0For1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExact1For0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3SwapCallback", data: BytesLike): Result;
    events: {};
}
export interface TestUniswapV3Callee extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestUniswapV3CalleeInterface;
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
        swap0ForExact1(pool: string, amount1Out: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swap1ForExact0(pool: string, amount0Out: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExact0For1(pool: string, amount0In: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExact1For0(pool: string, amount1In: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    swap0ForExact1(pool: string, amount1Out: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swap1ForExact0(pool: string, amount0Out: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExact0For1(pool: string, amount0In: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExact1For0(pool: string, amount1In: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swap0ForExact1(pool: string, amount1Out: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swap1ForExact0(pool: string, amount0Out: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapExact0For1(pool: string, amount0In: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapExact1For0(pool: string, amount1In: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: CallOverrides): Promise<void>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        swap0ForExact1(pool: string, amount1Out: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swap1ForExact0(pool: string, amount0Out: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExact0For1(pool: string, amount0In: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExact1For0(pool: string, amount1In: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swap0ForExact1(pool: string, amount1Out: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swap1ForExact0(pool: string, amount0Out: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExact0For1(pool: string, amount0In: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExact1For0(pool: string, amount1In: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
