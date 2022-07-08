import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IUniswapV3PoolStateInterface extends utils.Interface {
    functions: {
        "feeGrowthGlobal0X128()": FunctionFragment;
        "feeGrowthGlobal1X128()": FunctionFragment;
        "liquidity()": FunctionFragment;
        "observations(uint256)": FunctionFragment;
        "positions(bytes32)": FunctionFragment;
        "protocolFees()": FunctionFragment;
        "slot0()": FunctionFragment;
        "tickBitmap(int16)": FunctionFragment;
        "ticks(int24)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "feeGrowthGlobal0X128" | "feeGrowthGlobal1X128" | "liquidity" | "observations" | "positions" | "protocolFees" | "slot0" | "tickBitmap" | "ticks"): FunctionFragment;
    encodeFunctionData(functionFragment: "feeGrowthGlobal0X128", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeGrowthGlobal1X128", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "observations", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "positions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "protocolFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "slot0", values?: undefined): string;
    encodeFunctionData(functionFragment: "tickBitmap", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "feeGrowthGlobal0X128", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeGrowthGlobal1X128", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slot0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tickBitmap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
    events: {};
}
export interface IUniswapV3PoolState extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniswapV3PoolStateInterface;
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
        feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<[BigNumber]>;
        feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<[BigNumber]>;
        liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;
        observations(index: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            blockTimestamp: number;
            tickCumulative: BigNumber;
            secondsPerLiquidityCumulativeX128: BigNumber;
            initialized: boolean;
        }>;
        positions(key: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            liquidity: BigNumber;
            feeGrowthInside0LastX128: BigNumber;
            feeGrowthInside1LastX128: BigNumber;
            tokensOwed0: BigNumber;
            tokensOwed1: BigNumber;
        }>;
        protocolFees(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            token0: BigNumber;
            token1: BigNumber;
        }>;
        slot0(overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number,
            number,
            number,
            number,
            boolean
        ] & {
            sqrtPriceX96: BigNumber;
            tick: number;
            observationIndex: number;
            observationCardinality: number;
            observationCardinalityNext: number;
            feeProtocol: number;
            unlocked: boolean;
        }>;
        tickBitmap(wordPosition: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            boolean
        ] & {
            liquidityGross: BigNumber;
            liquidityNet: BigNumber;
            feeGrowthOutside0X128: BigNumber;
            feeGrowthOutside1X128: BigNumber;
            tickCumulativeOutside: BigNumber;
            secondsPerLiquidityOutsideX128: BigNumber;
            secondsOutside: number;
            initialized: boolean;
        }>;
    };
    feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<BigNumber>;
    feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<BigNumber>;
    liquidity(overrides?: CallOverrides): Promise<BigNumber>;
    observations(index: BigNumberish, overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        blockTimestamp: number;
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulativeX128: BigNumber;
        initialized: boolean;
    }>;
    positions(key: BytesLike, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        liquidity: BigNumber;
        feeGrowthInside0LastX128: BigNumber;
        feeGrowthInside1LastX128: BigNumber;
        tokensOwed0: BigNumber;
        tokensOwed1: BigNumber;
    }>;
    protocolFees(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        token0: BigNumber;
        token1: BigNumber;
    }>;
    slot0(overrides?: CallOverrides): Promise<[
        BigNumber,
        number,
        number,
        number,
        number,
        number,
        boolean
    ] & {
        sqrtPriceX96: BigNumber;
        tick: number;
        observationIndex: number;
        observationCardinality: number;
        observationCardinalityNext: number;
        feeProtocol: number;
        unlocked: boolean;
    }>;
    tickBitmap(wordPosition: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
    ] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        feeGrowthOutside0X128: BigNumber;
        feeGrowthOutside1X128: BigNumber;
        tickCumulativeOutside: BigNumber;
        secondsPerLiquidityOutsideX128: BigNumber;
        secondsOutside: number;
        initialized: boolean;
    }>;
    callStatic: {
        feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<BigNumber>;
        feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<BigNumber>;
        liquidity(overrides?: CallOverrides): Promise<BigNumber>;
        observations(index: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            blockTimestamp: number;
            tickCumulative: BigNumber;
            secondsPerLiquidityCumulativeX128: BigNumber;
            initialized: boolean;
        }>;
        positions(key: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            liquidity: BigNumber;
            feeGrowthInside0LastX128: BigNumber;
            feeGrowthInside1LastX128: BigNumber;
            tokensOwed0: BigNumber;
            tokensOwed1: BigNumber;
        }>;
        protocolFees(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            token0: BigNumber;
            token1: BigNumber;
        }>;
        slot0(overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number,
            number,
            number,
            number,
            boolean
        ] & {
            sqrtPriceX96: BigNumber;
            tick: number;
            observationIndex: number;
            observationCardinality: number;
            observationCardinalityNext: number;
            feeProtocol: number;
            unlocked: boolean;
        }>;
        tickBitmap(wordPosition: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            boolean
        ] & {
            liquidityGross: BigNumber;
            liquidityNet: BigNumber;
            feeGrowthOutside0X128: BigNumber;
            feeGrowthOutside1X128: BigNumber;
            tickCumulativeOutside: BigNumber;
            secondsPerLiquidityOutsideX128: BigNumber;
            secondsOutside: number;
            initialized: boolean;
        }>;
    };
    filters: {};
    estimateGas: {
        feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<BigNumber>;
        feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<BigNumber>;
        liquidity(overrides?: CallOverrides): Promise<BigNumber>;
        observations(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        positions(key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        protocolFees(overrides?: CallOverrides): Promise<BigNumber>;
        slot0(overrides?: CallOverrides): Promise<BigNumber>;
        tickBitmap(wordPosition: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observations(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positions(key: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        slot0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tickBitmap(wordPosition: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
