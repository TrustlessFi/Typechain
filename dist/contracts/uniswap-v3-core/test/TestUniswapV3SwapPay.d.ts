import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface TestUniswapV3SwapPayInterface extends utils.Interface {
    functions: {
        "swap(address,address,bool,uint160,int256,uint256,uint256)": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "swap" | "uniswapV3SwapCallback"): FunctionFragment;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3SwapCallback", data: BytesLike): Result;
    events: {};
}
export interface TestUniswapV3SwapPay extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestUniswapV3SwapPayInterface;
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
        swap(pool: PromiseOrValue<string>, recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, sqrtPriceX96: PromiseOrValue<BigNumberish>, amountSpecified: PromiseOrValue<BigNumberish>, pay0: PromiseOrValue<BigNumberish>, pay1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    swap(pool: PromiseOrValue<string>, recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, sqrtPriceX96: PromiseOrValue<BigNumberish>, amountSpecified: PromiseOrValue<BigNumberish>, pay0: PromiseOrValue<BigNumberish>, pay1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swap(pool: PromiseOrValue<string>, recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, sqrtPriceX96: PromiseOrValue<BigNumberish>, amountSpecified: PromiseOrValue<BigNumberish>, pay0: PromiseOrValue<BigNumberish>, pay1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        uniswapV3SwapCallback(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        swap(pool: PromiseOrValue<string>, recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, sqrtPriceX96: PromiseOrValue<BigNumberish>, amountSpecified: PromiseOrValue<BigNumberish>, pay0: PromiseOrValue<BigNumberish>, pay1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swap(pool: PromiseOrValue<string>, recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, sqrtPriceX96: PromiseOrValue<BigNumberish>, amountSpecified: PromiseOrValue<BigNumberish>, pay0: PromiseOrValue<BigNumberish>, pay1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
