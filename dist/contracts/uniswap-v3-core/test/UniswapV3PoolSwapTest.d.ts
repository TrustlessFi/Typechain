import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface UniswapV3PoolSwapTestInterface extends utils.Interface {
    functions: {
        "getSwapResult(address,bool,int256,uint160)": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getSwapResult" | "uniswapV3SwapCallback"): FunctionFragment;
    encodeFunctionData(functionFragment: "getSwapResult", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
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
        getSwapResult(pool: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getSwapResult(pool: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getSwapResult(pool: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amount0Delta: BigNumber;
            amount1Delta: BigNumber;
            nextSqrtRatio: BigNumber;
        }>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getSwapResult(pool: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getSwapResult(pool: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
