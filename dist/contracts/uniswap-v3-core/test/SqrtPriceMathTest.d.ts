import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface SqrtPriceMathTestInterface extends utils.Interface {
    functions: {
        "getAmount0Delta(uint160,uint160,uint128,bool)": FunctionFragment;
        "getAmount1Delta(uint160,uint160,uint128,bool)": FunctionFragment;
        "getGasCostOfGetAmount0Delta(uint160,uint160,uint128,bool)": FunctionFragment;
        "getGasCostOfGetAmount1Delta(uint160,uint160,uint128,bool)": FunctionFragment;
        "getGasCostOfGetNextSqrtPriceFromInput(uint160,uint128,uint256,bool)": FunctionFragment;
        "getGasCostOfGetNextSqrtPriceFromOutput(uint160,uint128,uint256,bool)": FunctionFragment;
        "getNextSqrtPriceFromInput(uint160,uint128,uint256,bool)": FunctionFragment;
        "getNextSqrtPriceFromOutput(uint160,uint128,uint256,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAmount0Delta" | "getAmount1Delta" | "getGasCostOfGetAmount0Delta" | "getGasCostOfGetAmount1Delta" | "getGasCostOfGetNextSqrtPriceFromInput" | "getGasCostOfGetNextSqrtPriceFromOutput" | "getNextSqrtPriceFromInput" | "getNextSqrtPriceFromOutput"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAmount0Delta", values: [BigNumberish, BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "getAmount1Delta", values: [BigNumberish, BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "getGasCostOfGetAmount0Delta", values: [BigNumberish, BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "getGasCostOfGetAmount1Delta", values: [BigNumberish, BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "getGasCostOfGetNextSqrtPriceFromInput", values: [BigNumberish, BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "getGasCostOfGetNextSqrtPriceFromOutput", values: [BigNumberish, BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "getNextSqrtPriceFromInput", values: [BigNumberish, BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "getNextSqrtPriceFromOutput", values: [BigNumberish, BigNumberish, BigNumberish, boolean]): string;
    decodeFunctionResult(functionFragment: "getAmount0Delta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmount1Delta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfGetAmount0Delta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfGetAmount1Delta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfGetNextSqrtPriceFromInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfGetNextSqrtPriceFromOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextSqrtPriceFromInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextSqrtPriceFromOutput", data: BytesLike): Result;
    events: {};
}
export interface SqrtPriceMathTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SqrtPriceMathTestInterface;
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
        getAmount0Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount0: BigNumber;
        }>;
        getAmount1Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount1: BigNumber;
        }>;
        getGasCostOfGetAmount0Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        getGasCostOfGetAmount1Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        getGasCostOfGetNextSqrtPriceFromInput(sqrtP: BigNumberish, liquidity: BigNumberish, amountIn: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        getGasCostOfGetNextSqrtPriceFromOutput(sqrtP: BigNumberish, liquidity: BigNumberish, amountOut: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        getNextSqrtPriceFromInput(sqrtP: BigNumberish, liquidity: BigNumberish, amountIn: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<[BigNumber] & {
            sqrtQ: BigNumber;
        }>;
        getNextSqrtPriceFromOutput(sqrtP: BigNumberish, liquidity: BigNumberish, amountOut: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<[BigNumber] & {
            sqrtQ: BigNumber;
        }>;
    };
    getAmount0Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    getAmount1Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    getGasCostOfGetAmount0Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    getGasCostOfGetAmount1Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    getGasCostOfGetNextSqrtPriceFromInput(sqrtP: BigNumberish, liquidity: BigNumberish, amountIn: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    getGasCostOfGetNextSqrtPriceFromOutput(sqrtP: BigNumberish, liquidity: BigNumberish, amountOut: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    getNextSqrtPriceFromInput(sqrtP: BigNumberish, liquidity: BigNumberish, amountIn: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    getNextSqrtPriceFromOutput(sqrtP: BigNumberish, liquidity: BigNumberish, amountOut: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getAmount0Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getAmount1Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetAmount0Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetAmount1Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetNextSqrtPriceFromInput(sqrtP: BigNumberish, liquidity: BigNumberish, amountIn: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetNextSqrtPriceFromOutput(sqrtP: BigNumberish, liquidity: BigNumberish, amountOut: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getNextSqrtPriceFromInput(sqrtP: BigNumberish, liquidity: BigNumberish, amountIn: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getNextSqrtPriceFromOutput(sqrtP: BigNumberish, liquidity: BigNumberish, amountOut: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getAmount0Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getAmount1Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetAmount0Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetAmount1Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetNextSqrtPriceFromInput(sqrtP: BigNumberish, liquidity: BigNumberish, amountIn: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetNextSqrtPriceFromOutput(sqrtP: BigNumberish, liquidity: BigNumberish, amountOut: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getNextSqrtPriceFromInput(sqrtP: BigNumberish, liquidity: BigNumberish, amountIn: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getNextSqrtPriceFromOutput(sqrtP: BigNumberish, liquidity: BigNumberish, amountOut: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getAmount0Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmount1Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfGetAmount0Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfGetAmount1Delta(sqrtLower: BigNumberish, sqrtUpper: BigNumberish, liquidity: BigNumberish, roundUp: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfGetNextSqrtPriceFromInput(sqrtP: BigNumberish, liquidity: BigNumberish, amountIn: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfGetNextSqrtPriceFromOutput(sqrtP: BigNumberish, liquidity: BigNumberish, amountOut: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNextSqrtPriceFromInput(sqrtP: BigNumberish, liquidity: BigNumberish, amountIn: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNextSqrtPriceFromOutput(sqrtP: BigNumberish, liquidity: BigNumberish, amountOut: BigNumberish, zeroForOne: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
