import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface RouterEventEmitterInterface extends utils.Interface {
    functions: {
        "swapETHForExactTokens(address,uint256,address[],address,uint256)": FunctionFragment;
        "swapExactETHForTokens(address,uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForETH(address,uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokens(address,uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapTokensForExactETH(address,uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapTokensForExactTokens(address,uint256,uint256,address[],address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "swapETHForExactTokens", values: [string, BigNumberish, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactETHForTokens", values: [string, BigNumberish, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForETH", values: [string, BigNumberish, BigNumberish, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [string, BigNumberish, BigNumberish, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapTokensForExactETH", values: [string, BigNumberish, BigNumberish, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapTokensForExactTokens", values: [string, BigNumberish, BigNumberish, string[], string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "swapETHForExactTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactETHForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensForExactETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensForExactTokens", data: BytesLike): Result;
    events: {
        "Amounts(uint256[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Amounts"): EventFragment;
}
export declare type AmountsEvent = TypedEvent<[BigNumber[]], {
    amounts: BigNumber[];
}>;
export declare type AmountsEventFilter = TypedEventFilter<AmountsEvent>;
export interface RouterEventEmitter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RouterEventEmitterInterface;
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
        swapETHForExactTokens(router: string, amountOut: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExactETHForTokens(router: string, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForETH(router: string, amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(router: string, amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapTokensForExactETH(router: string, amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapTokensForExactTokens(router: string, amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    swapETHForExactTokens(router: string, amountOut: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExactETHForTokens(router: string, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForETH(router: string, amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(router: string, amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapTokensForExactETH(router: string, amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapTokensForExactTokens(router: string, amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swapETHForExactTokens(router: string, amountOut: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapExactETHForTokens(router: string, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForETH(router: string, amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForTokens(router: string, amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapTokensForExactETH(router: string, amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapTokensForExactTokens(router: string, amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Amounts(uint256[])"(amounts?: null): AmountsEventFilter;
        Amounts(amounts?: null): AmountsEventFilter;
    };
    estimateGas: {
        swapETHForExactTokens(router: string, amountOut: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExactETHForTokens(router: string, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExactTokensForETH(router: string, amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(router: string, amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapTokensForExactETH(router: string, amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapTokensForExactTokens(router: string, amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swapETHForExactTokens(router: string, amountOut: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExactETHForTokens(router: string, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForETH(router: string, amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(router: string, amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensForExactETH(router: string, amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensForExactTokens(router: string, amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
