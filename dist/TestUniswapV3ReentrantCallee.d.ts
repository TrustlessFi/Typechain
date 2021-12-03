import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TestUniswapV3ReentrantCalleeInterface extends utils.Interface {
    functions: {
        "swapToReenter(address)": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "swapToReenter", values: [string]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "swapToReenter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3SwapCallback", data: BytesLike): Result;
    events: {};
}
export interface TestUniswapV3ReentrantCallee extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestUniswapV3ReentrantCalleeInterface;
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
        swapToReenter(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(arg0: BigNumberish, arg1: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    swapToReenter(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(arg0: BigNumberish, arg1: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swapToReenter(pool: string, overrides?: CallOverrides): Promise<void>;
        uniswapV3SwapCallback(arg0: BigNumberish, arg1: BigNumberish, arg2: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        swapToReenter(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(arg0: BigNumberish, arg1: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swapToReenter(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(arg0: BigNumberish, arg1: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
