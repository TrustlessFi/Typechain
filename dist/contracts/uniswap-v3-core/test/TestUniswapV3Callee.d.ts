import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface TestUniswapV3CalleeInterface extends utils.Interface {
    functions: {
        "flash(address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
        "mint(address,address,int24,int24,uint128)": FunctionFragment;
        "swap0ForExact1(address,uint256,address,uint160)": FunctionFragment;
        "swap1ForExact0(address,uint256,address,uint160)": FunctionFragment;
        "swapExact0For1(address,uint256,address,uint160)": FunctionFragment;
        "swapExact1For0(address,uint256,address,uint160)": FunctionFragment;
        "swapToHigherSqrtPrice(address,uint160,address)": FunctionFragment;
        "swapToLowerSqrtPrice(address,uint160,address)": FunctionFragment;
        "uniswapV3FlashCallback(uint256,uint256,bytes)": FunctionFragment;
        "uniswapV3MintCallback(uint256,uint256,bytes)": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "flash" | "mint" | "swap0ForExact1" | "swap1ForExact0" | "swapExact0For1" | "swapExact1For0" | "swapToHigherSqrtPrice" | "swapToLowerSqrtPrice" | "uniswapV3FlashCallback" | "uniswapV3MintCallback" | "uniswapV3SwapCallback"): FunctionFragment;
    encodeFunctionData(functionFragment: "flash", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swap0ForExact1", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swap1ForExact0", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExact0For1", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExact1For0", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapToHigherSqrtPrice", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "swapToLowerSqrtPrice", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "uniswapV3FlashCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "uniswapV3MintCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap0ForExact1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap1ForExact0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExact0For1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExact1For0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapToHigherSqrtPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapToLowerSqrtPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3FlashCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3MintCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3SwapCallback", data: BytesLike): Result;
    events: {
        "FlashCallback(uint256,uint256)": EventFragment;
        "MintCallback(uint256,uint256)": EventFragment;
        "SwapCallback(int256,int256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FlashCallback"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MintCallback"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SwapCallback"): EventFragment;
}
export interface FlashCallbackEventObject {
    fee0: BigNumber;
    fee1: BigNumber;
}
export declare type FlashCallbackEvent = TypedEvent<[
    BigNumber,
    BigNumber
], FlashCallbackEventObject>;
export declare type FlashCallbackEventFilter = TypedEventFilter<FlashCallbackEvent>;
export interface MintCallbackEventObject {
    amount0Owed: BigNumber;
    amount1Owed: BigNumber;
}
export declare type MintCallbackEvent = TypedEvent<[
    BigNumber,
    BigNumber
], MintCallbackEventObject>;
export declare type MintCallbackEventFilter = TypedEventFilter<MintCallbackEvent>;
export interface SwapCallbackEventObject {
    amount0Delta: BigNumber;
    amount1Delta: BigNumber;
}
export declare type SwapCallbackEvent = TypedEvent<[
    BigNumber,
    BigNumber
], SwapCallbackEventObject>;
export declare type SwapCallbackEventFilter = TypedEventFilter<SwapCallbackEvent>;
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
        flash(pool: string, recipient: string, amount0: BigNumberish, amount1: BigNumberish, pay0: BigNumberish, pay1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mint(pool: string, recipient: string, tickLower: BigNumberish, tickUpper: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
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
        swapToHigherSqrtPrice(pool: string, sqrtPriceX96: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapToLowerSqrtPrice(pool: string, sqrtPriceX96: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uniswapV3MintCallback(amount0Owed: BigNumberish, amount1Owed: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    flash(pool: string, recipient: string, amount0: BigNumberish, amount1: BigNumberish, pay0: BigNumberish, pay1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mint(pool: string, recipient: string, tickLower: BigNumberish, tickUpper: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
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
    swapToHigherSqrtPrice(pool: string, sqrtPriceX96: BigNumberish, recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapToLowerSqrtPrice(pool: string, sqrtPriceX96: BigNumberish, recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uniswapV3MintCallback(amount0Owed: BigNumberish, amount1Owed: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        flash(pool: string, recipient: string, amount0: BigNumberish, amount1: BigNumberish, pay0: BigNumberish, pay1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mint(pool: string, recipient: string, tickLower: BigNumberish, tickUpper: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swap0ForExact1(pool: string, amount1Out: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swap1ForExact0(pool: string, amount0Out: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapExact0For1(pool: string, amount0In: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapExact1For0(pool: string, amount1In: BigNumberish, recipient: string, sqrtPriceLimitX96: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapToHigherSqrtPrice(pool: string, sqrtPriceX96: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        swapToLowerSqrtPrice(pool: string, sqrtPriceX96: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        uniswapV3MintCallback(amount0Owed: BigNumberish, amount1Owed: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FlashCallback(uint256,uint256)"(fee0?: null, fee1?: null): FlashCallbackEventFilter;
        FlashCallback(fee0?: null, fee1?: null): FlashCallbackEventFilter;
        "MintCallback(uint256,uint256)"(amount0Owed?: null, amount1Owed?: null): MintCallbackEventFilter;
        MintCallback(amount0Owed?: null, amount1Owed?: null): MintCallbackEventFilter;
        "SwapCallback(int256,int256)"(amount0Delta?: null, amount1Delta?: null): SwapCallbackEventFilter;
        SwapCallback(amount0Delta?: null, amount1Delta?: null): SwapCallbackEventFilter;
    };
    estimateGas: {
        flash(pool: string, recipient: string, amount0: BigNumberish, amount1: BigNumberish, pay0: BigNumberish, pay1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mint(pool: string, recipient: string, tickLower: BigNumberish, tickUpper: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
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
        swapToHigherSqrtPrice(pool: string, sqrtPriceX96: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapToLowerSqrtPrice(pool: string, sqrtPriceX96: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uniswapV3MintCallback(amount0Owed: BigNumberish, amount1Owed: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        flash(pool: string, recipient: string, amount0: BigNumberish, amount1: BigNumberish, pay0: BigNumberish, pay1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mint(pool: string, recipient: string, tickLower: BigNumberish, tickUpper: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
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
        swapToHigherSqrtPrice(pool: string, sqrtPriceX96: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapToLowerSqrtPrice(pool: string, sqrtPriceX96: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3MintCallback(amount0Owed: BigNumberish, amount1Owed: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
