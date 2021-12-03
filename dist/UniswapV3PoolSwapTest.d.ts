import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface UniswapV3PoolSwapTestInterface extends utils.Interface {
    functions: {
        "getSwapResult(address,bool,int256,uint160)": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getSwapResult", values: [string, boolean, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "getSwapResult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3SwapCallback", data: BytesLike): Result;
    events: {};
}
export interface UniswapV3PoolSwapTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UniswapV3PoolSwapTestInterface;
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
        getSwapResult(pool: string, zeroForOne: boolean, amountSpecified: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getSwapResult(pool: string, zeroForOne: boolean, amountSpecified: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getSwapResult(pool: string, zeroForOne: boolean, amountSpecified: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amount0Delta: BigNumber;
            amount1Delta: BigNumber;
            nextSqrtRatio: BigNumber;
        }>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getSwapResult(pool: string, zeroForOne: boolean, amountSpecified: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getSwapResult(pool: string, zeroForOne: boolean, amountSpecified: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
