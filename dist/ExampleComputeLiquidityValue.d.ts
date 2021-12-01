import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ExampleComputeLiquidityValueInterface extends utils.Interface {
    functions: {
        "factory()": FunctionFragment;
        "getGasCostOfGetLiquidityValueAfterArbitrageToPrice(address,address,uint256,uint256,uint256)": FunctionFragment;
        "getLiquidityValue(address,address,uint256)": FunctionFragment;
        "getLiquidityValueAfterArbitrageToPrice(address,address,uint256,uint256,uint256)": FunctionFragment;
        "getReservesAfterArbitrage(address,address,uint256,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGasCostOfGetLiquidityValueAfterArbitrageToPrice", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLiquidityValue", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLiquidityValueAfterArbitrageToPrice", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReservesAfterArbitrage", values: [string, string, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfGetLiquidityValueAfterArbitrageToPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidityValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidityValueAfterArbitrageToPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReservesAfterArbitrage", data: BytesLike): Result;
    events: {};
}
export interface ExampleComputeLiquidityValue extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ExampleComputeLiquidityValueInterface;
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
        factory(overrides?: CallOverrides): Promise<[string]>;
        getGasCostOfGetLiquidityValueAfterArbitrageToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getLiquidityValue(tokenA: string, tokenB: string, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            tokenAAmount: BigNumber;
            tokenBAmount: BigNumber;
        }>;
        getLiquidityValueAfterArbitrageToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            tokenAAmount: BigNumber;
            tokenBAmount: BigNumber;
        }>;
        getReservesAfterArbitrage(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
    };
    factory(overrides?: CallOverrides): Promise<string>;
    getGasCostOfGetLiquidityValueAfterArbitrageToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getLiquidityValue(tokenA: string, tokenB: string, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        tokenAAmount: BigNumber;
        tokenBAmount: BigNumber;
    }>;
    getLiquidityValueAfterArbitrageToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        tokenAAmount: BigNumber;
        tokenBAmount: BigNumber;
    }>;
    getReservesAfterArbitrage(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        reserveA: BigNumber;
        reserveB: BigNumber;
    }>;
    callStatic: {
        factory(overrides?: CallOverrides): Promise<string>;
        getGasCostOfGetLiquidityValueAfterArbitrageToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidityValue(tokenA: string, tokenB: string, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            tokenAAmount: BigNumber;
            tokenBAmount: BigNumber;
        }>;
        getLiquidityValueAfterArbitrageToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            tokenAAmount: BigNumber;
            tokenBAmount: BigNumber;
        }>;
        getReservesAfterArbitrage(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfGetLiquidityValueAfterArbitrageToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidityValue(tokenA: string, tokenB: string, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidityValueAfterArbitrageToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getReservesAfterArbitrage(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfGetLiquidityValueAfterArbitrageToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidityValue(tokenA: string, tokenB: string, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidityValueAfterArbitrageToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, liquidityAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReservesAfterArbitrage(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
