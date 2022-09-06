import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace Tick {
    type InfoStruct = {
        liquidityGross: PromiseOrValue<BigNumberish>;
        liquidityNet: PromiseOrValue<BigNumberish>;
        feeGrowthOutside0X128: PromiseOrValue<BigNumberish>;
        feeGrowthOutside1X128: PromiseOrValue<BigNumberish>;
        tickCumulativeOutside: PromiseOrValue<BigNumberish>;
        secondsPerLiquidityOutsideX128: PromiseOrValue<BigNumberish>;
        secondsOutside: PromiseOrValue<BigNumberish>;
        initialized: PromiseOrValue<boolean>;
    };
    type InfoStructOutput = [
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
    };
}
export interface TickTestInterface extends utils.Interface {
    functions: {
        "clear(int24)": FunctionFragment;
        "cross(int24,uint256,uint256,uint160,int56,uint32)": FunctionFragment;
        "getFeeGrowthInside(int24,int24,int24,uint256,uint256)": FunctionFragment;
        "setTick(int24,(uint128,int128,uint256,uint256,int56,uint160,uint32,bool))": FunctionFragment;
        "tickSpacingToMaxLiquidityPerTick(int24)": FunctionFragment;
        "ticks(int24)": FunctionFragment;
        "update(int24,int24,int128,uint256,uint256,uint160,int56,uint32,bool,uint128)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "clear" | "cross" | "getFeeGrowthInside" | "setTick" | "tickSpacingToMaxLiquidityPerTick" | "ticks" | "update"): FunctionFragment;
    encodeFunctionData(functionFragment: "clear", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "cross", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getFeeGrowthInside", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setTick", values: [PromiseOrValue<BigNumberish>, Tick.InfoStruct]): string;
    encodeFunctionData(functionFragment: "tickSpacingToMaxLiquidityPerTick", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "ticks", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "update", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "clear", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cross", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFeeGrowthInside", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tickSpacingToMaxLiquidityPerTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
    events: {};
}
export interface TickTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TickTestInterface;
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
        clear(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cross(tick: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, secondsPerLiquidityCumulativeX128: PromiseOrValue<BigNumberish>, tickCumulative: PromiseOrValue<BigNumberish>, time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getFeeGrowthInside(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, tickCurrent: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            feeGrowthInside0X128: BigNumber;
            feeGrowthInside1X128: BigNumber;
        }>;
        setTick(tick: PromiseOrValue<BigNumberish>, info: Tick.InfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tickSpacingToMaxLiquidityPerTick(tickSpacing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        ticks(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
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
        update(tick: PromiseOrValue<BigNumberish>, tickCurrent: PromiseOrValue<BigNumberish>, liquidityDelta: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, secondsPerLiquidityCumulativeX128: PromiseOrValue<BigNumberish>, tickCumulative: PromiseOrValue<BigNumberish>, time: PromiseOrValue<BigNumberish>, upper: PromiseOrValue<boolean>, maxLiquidity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    clear(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cross(tick: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, secondsPerLiquidityCumulativeX128: PromiseOrValue<BigNumberish>, tickCumulative: PromiseOrValue<BigNumberish>, time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getFeeGrowthInside(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, tickCurrent: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        feeGrowthInside0X128: BigNumber;
        feeGrowthInside1X128: BigNumber;
    }>;
    setTick(tick: PromiseOrValue<BigNumberish>, info: Tick.InfoStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tickSpacingToMaxLiquidityPerTick(tickSpacing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    ticks(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
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
    update(tick: PromiseOrValue<BigNumberish>, tickCurrent: PromiseOrValue<BigNumberish>, liquidityDelta: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, secondsPerLiquidityCumulativeX128: PromiseOrValue<BigNumberish>, tickCumulative: PromiseOrValue<BigNumberish>, time: PromiseOrValue<BigNumberish>, upper: PromiseOrValue<boolean>, maxLiquidity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        clear(tick: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        cross(tick: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, secondsPerLiquidityCumulativeX128: PromiseOrValue<BigNumberish>, tickCumulative: PromiseOrValue<BigNumberish>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFeeGrowthInside(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, tickCurrent: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            feeGrowthInside0X128: BigNumber;
            feeGrowthInside1X128: BigNumber;
        }>;
        setTick(tick: PromiseOrValue<BigNumberish>, info: Tick.InfoStruct, overrides?: CallOverrides): Promise<void>;
        tickSpacingToMaxLiquidityPerTick(tickSpacing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        ticks(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
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
        update(tick: PromiseOrValue<BigNumberish>, tickCurrent: PromiseOrValue<BigNumberish>, liquidityDelta: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, secondsPerLiquidityCumulativeX128: PromiseOrValue<BigNumberish>, tickCumulative: PromiseOrValue<BigNumberish>, time: PromiseOrValue<BigNumberish>, upper: PromiseOrValue<boolean>, maxLiquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        clear(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cross(tick: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, secondsPerLiquidityCumulativeX128: PromiseOrValue<BigNumberish>, tickCumulative: PromiseOrValue<BigNumberish>, time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getFeeGrowthInside(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, tickCurrent: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setTick(tick: PromiseOrValue<BigNumberish>, info: Tick.InfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tickSpacingToMaxLiquidityPerTick(tickSpacing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        ticks(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        update(tick: PromiseOrValue<BigNumberish>, tickCurrent: PromiseOrValue<BigNumberish>, liquidityDelta: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, secondsPerLiquidityCumulativeX128: PromiseOrValue<BigNumberish>, tickCumulative: PromiseOrValue<BigNumberish>, time: PromiseOrValue<BigNumberish>, upper: PromiseOrValue<boolean>, maxLiquidity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        clear(tick: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cross(tick: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, secondsPerLiquidityCumulativeX128: PromiseOrValue<BigNumberish>, tickCumulative: PromiseOrValue<BigNumberish>, time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getFeeGrowthInside(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, tickCurrent: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setTick(tick: PromiseOrValue<BigNumberish>, info: Tick.InfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tickSpacingToMaxLiquidityPerTick(tickSpacing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ticks(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        update(tick: PromiseOrValue<BigNumberish>, tickCurrent: PromiseOrValue<BigNumberish>, liquidityDelta: PromiseOrValue<BigNumberish>, feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, secondsPerLiquidityCumulativeX128: PromiseOrValue<BigNumberish>, tickCumulative: PromiseOrValue<BigNumberish>, time: PromiseOrValue<BigNumberish>, upper: PromiseOrValue<boolean>, maxLiquidity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
