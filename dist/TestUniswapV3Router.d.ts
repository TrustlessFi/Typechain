import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TestUniswapV3RouterInterface extends utils.Interface {
    functions: {
        "swapForExact0Multi(address,address,address,uint256)": FunctionFragment;
        "swapForExact1Multi(address,address,address,uint256)": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "swapForExact0Multi", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapForExact1Multi", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "swapForExact0Multi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapForExact1Multi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3SwapCallback", data: BytesLike): Result;
    events: {
        "SwapCallback(int256,int256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SwapCallback"): EventFragment;
}
export declare type SwapCallbackEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    amount0Delta: BigNumber;
    amount1Delta: BigNumber;
}>;
export declare type SwapCallbackEventFilter = TypedEventFilter<SwapCallbackEvent>;
export interface TestUniswapV3Router extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestUniswapV3RouterInterface;
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
        swapForExact0Multi(recipient: string, poolInput: string, poolOutput: string, amount0Out: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapForExact1Multi(recipient: string, poolInput: string, poolOutput: string, amount1Out: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    swapForExact0Multi(recipient: string, poolInput: string, poolOutput: string, amount0Out: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapForExact1Multi(recipient: string, poolInput: string, poolOutput: string, amount1Out: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swapForExact0Multi(recipient: string, poolInput: string, poolOutput: string, amount0Out: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapForExact1Multi(recipient: string, poolInput: string, poolOutput: string, amount1Out: BigNumberish, overrides?: CallOverrides): Promise<void>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SwapCallback(int256,int256)"(amount0Delta?: null, amount1Delta?: null): SwapCallbackEventFilter;
        SwapCallback(amount0Delta?: null, amount1Delta?: null): SwapCallbackEventFilter;
    };
    estimateGas: {
        swapForExact0Multi(recipient: string, poolInput: string, poolOutput: string, amount0Out: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapForExact1Multi(recipient: string, poolInput: string, poolOutput: string, amount1Out: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swapForExact0Multi(recipient: string, poolInput: string, poolOutput: string, amount0Out: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapForExact1Multi(recipient: string, poolInput: string, poolOutput: string, amount1Out: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
