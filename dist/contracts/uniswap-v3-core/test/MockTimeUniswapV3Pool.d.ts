import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface MockTimeUniswapV3PoolInterface extends utils.Interface {
    functions: {
        "advanceTime(uint256)": FunctionFragment;
        "burn(int24,int24,uint128)": FunctionFragment;
        "collect(address,int24,int24,uint128,uint128)": FunctionFragment;
        "collectProtocol(address,uint128,uint128)": FunctionFragment;
        "factory()": FunctionFragment;
        "fee()": FunctionFragment;
        "feeGrowthGlobal0X128()": FunctionFragment;
        "feeGrowthGlobal1X128()": FunctionFragment;
        "flash(address,uint256,uint256,bytes)": FunctionFragment;
        "increaseObservationCardinalityNext(uint16)": FunctionFragment;
        "initialize(uint160)": FunctionFragment;
        "liquidity()": FunctionFragment;
        "maxLiquidityPerTick()": FunctionFragment;
        "mint(address,int24,int24,uint128,bytes)": FunctionFragment;
        "observations(uint256)": FunctionFragment;
        "observe(uint32[])": FunctionFragment;
        "positions(bytes32)": FunctionFragment;
        "protocolFees()": FunctionFragment;
        "setFeeGrowthGlobal0X128(uint256)": FunctionFragment;
        "setFeeGrowthGlobal1X128(uint256)": FunctionFragment;
        "setFeeProtocol(uint8,uint8)": FunctionFragment;
        "slot0()": FunctionFragment;
        "snapshotCumulativesInside(int24,int24)": FunctionFragment;
        "swap(address,bool,int256,uint160,bytes)": FunctionFragment;
        "tickBitmap(int16)": FunctionFragment;
        "tickSpacing()": FunctionFragment;
        "ticks(int24)": FunctionFragment;
        "time()": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "advanceTime" | "burn" | "collect" | "collectProtocol" | "factory" | "fee" | "feeGrowthGlobal0X128" | "feeGrowthGlobal1X128" | "flash" | "increaseObservationCardinalityNext" | "initialize" | "liquidity" | "maxLiquidityPerTick" | "mint" | "observations" | "observe" | "positions" | "protocolFees" | "setFeeGrowthGlobal0X128" | "setFeeGrowthGlobal1X128" | "setFeeProtocol" | "slot0" | "snapshotCumulativesInside" | "swap" | "tickBitmap" | "tickSpacing" | "ticks" | "time" | "token0" | "token1"): FunctionFragment;
    encodeFunctionData(functionFragment: "advanceTime", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "burn", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "collect", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "collectProtocol", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeGrowthGlobal0X128", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeGrowthGlobal1X128", values?: undefined): string;
    encodeFunctionData(functionFragment: "flash", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "increaseObservationCardinalityNext", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxLiquidityPerTick", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "observations", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "observe", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "positions", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "protocolFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "setFeeGrowthGlobal0X128", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setFeeGrowthGlobal1X128", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setFeeProtocol", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "slot0", values?: undefined): string;
    encodeFunctionData(functionFragment: "snapshotCumulativesInside", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "tickBitmap", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tickSpacing", values?: undefined): string;
    encodeFunctionData(functionFragment: "ticks", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "time", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    decodeFunctionResult(functionFragment: "advanceTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectProtocol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeGrowthGlobal0X128", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeGrowthGlobal1X128", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseObservationCardinalityNext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxLiquidityPerTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeGrowthGlobal0X128", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeGrowthGlobal1X128", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeProtocol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slot0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "snapshotCumulativesInside", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tickBitmap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tickSpacing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    events: {
        "Burn(address,int24,int24,uint128,uint256,uint256)": EventFragment;
        "Collect(address,address,int24,int24,uint128,uint128)": EventFragment;
        "CollectProtocol(address,address,uint128,uint128)": EventFragment;
        "Flash(address,address,uint256,uint256,uint256,uint256)": EventFragment;
        "IncreaseObservationCardinalityNext(uint16,uint16)": EventFragment;
        "Initialize(uint160,int24)": EventFragment;
        "Mint(address,address,int24,int24,uint128,uint256,uint256)": EventFragment;
        "SetFeeProtocol(uint8,uint8,uint8,uint8)": EventFragment;
        "Swap(address,address,int256,int256,uint160,uint128,int24)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Collect"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CollectProtocol"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Flash"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncreaseObservationCardinalityNext"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetFeeProtocol"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}
export interface BurnEventObject {
    owner: string;
    tickLower: number;
    tickUpper: number;
    amount: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type BurnEvent = TypedEvent<[
    string,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber
], BurnEventObject>;
export declare type BurnEventFilter = TypedEventFilter<BurnEvent>;
export interface CollectEventObject {
    owner: string;
    recipient: string;
    tickLower: number;
    tickUpper: number;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type CollectEvent = TypedEvent<[
    string,
    string,
    number,
    number,
    BigNumber,
    BigNumber
], CollectEventObject>;
export declare type CollectEventFilter = TypedEventFilter<CollectEvent>;
export interface CollectProtocolEventObject {
    sender: string;
    recipient: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type CollectProtocolEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], CollectProtocolEventObject>;
export declare type CollectProtocolEventFilter = TypedEventFilter<CollectProtocolEvent>;
export interface FlashEventObject {
    sender: string;
    recipient: string;
    amount0: BigNumber;
    amount1: BigNumber;
    paid0: BigNumber;
    paid1: BigNumber;
}
export declare type FlashEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], FlashEventObject>;
export declare type FlashEventFilter = TypedEventFilter<FlashEvent>;
export interface IncreaseObservationCardinalityNextEventObject {
    observationCardinalityNextOld: number;
    observationCardinalityNextNew: number;
}
export declare type IncreaseObservationCardinalityNextEvent = TypedEvent<[
    number,
    number
], IncreaseObservationCardinalityNextEventObject>;
export declare type IncreaseObservationCardinalityNextEventFilter = TypedEventFilter<IncreaseObservationCardinalityNextEvent>;
export interface InitializeEventObject {
    sqrtPriceX96: BigNumber;
    tick: number;
}
export declare type InitializeEvent = TypedEvent<[
    BigNumber,
    number
], InitializeEventObject>;
export declare type InitializeEventFilter = TypedEventFilter<InitializeEvent>;
export interface MintEventObject {
    sender: string;
    owner: string;
    tickLower: number;
    tickUpper: number;
    amount: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type MintEvent = TypedEvent<[
    string,
    string,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber
], MintEventObject>;
export declare type MintEventFilter = TypedEventFilter<MintEvent>;
export interface SetFeeProtocolEventObject {
    feeProtocol0Old: number;
    feeProtocol1Old: number;
    feeProtocol0New: number;
    feeProtocol1New: number;
}
export declare type SetFeeProtocolEvent = TypedEvent<[
    number,
    number,
    number,
    number
], SetFeeProtocolEventObject>;
export declare type SetFeeProtocolEventFilter = TypedEventFilter<SetFeeProtocolEvent>;
export interface SwapEventObject {
    sender: string;
    recipient: string;
    amount0: BigNumber;
    amount1: BigNumber;
    sqrtPriceX96: BigNumber;
    liquidity: BigNumber;
    tick: number;
}
export declare type SwapEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number
], SwapEventObject>;
export declare type SwapEventFilter = TypedEventFilter<SwapEvent>;
export interface MockTimeUniswapV3Pool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockTimeUniswapV3PoolInterface;
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
        advanceTime(by: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burn(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collect(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collectProtocol(recipient: PromiseOrValue<string>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        fee(overrides?: CallOverrides): Promise<[number]>;
        feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<[BigNumber]>;
        feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<[BigNumber]>;
        flash(recipient: PromiseOrValue<string>, amount0: PromiseOrValue<BigNumberish>, amount1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increaseObservationCardinalityNext(observationCardinalityNext: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxLiquidityPerTick(overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        observations(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
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
        observe(secondsAgos: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber[]
        ] & {
            tickCumulatives: BigNumber[];
            secondsPerLiquidityCumulativeX128s: BigNumber[];
        }>;
        positions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
        setFeeGrowthGlobal0X128(_feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeGrowthGlobal1X128(_feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeProtocol(feeProtocol0: PromiseOrValue<BigNumberish>, feeProtocol1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
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
        snapshotCumulativesInside(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number
        ] & {
            tickCumulativeInside: BigNumber;
            secondsPerLiquidityInsideX128: BigNumber;
            secondsInside: number;
        }>;
        swap(recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tickBitmap(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        tickSpacing(overrides?: CallOverrides): Promise<[number]>;
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
        time(overrides?: CallOverrides): Promise<[BigNumber]>;
        token0(overrides?: CallOverrides): Promise<[string]>;
        token1(overrides?: CallOverrides): Promise<[string]>;
    };
    advanceTime(by: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burn(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collect(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collectProtocol(recipient: PromiseOrValue<string>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    fee(overrides?: CallOverrides): Promise<number>;
    feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<BigNumber>;
    feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<BigNumber>;
    flash(recipient: PromiseOrValue<string>, amount0: PromiseOrValue<BigNumberish>, amount1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increaseObservationCardinalityNext(observationCardinalityNext: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    liquidity(overrides?: CallOverrides): Promise<BigNumber>;
    maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;
    mint(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    observations(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
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
    observe(secondsAgos: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[
        BigNumber[],
        BigNumber[]
    ] & {
        tickCumulatives: BigNumber[];
        secondsPerLiquidityCumulativeX128s: BigNumber[];
    }>;
    positions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
    setFeeGrowthGlobal0X128(_feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeGrowthGlobal1X128(_feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeProtocol(feeProtocol0: PromiseOrValue<BigNumberish>, feeProtocol1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
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
    snapshotCumulativesInside(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        number
    ] & {
        tickCumulativeInside: BigNumber;
        secondsPerLiquidityInsideX128: BigNumber;
        secondsInside: number;
    }>;
    swap(recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tickBitmap(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    tickSpacing(overrides?: CallOverrides): Promise<number>;
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
    time(overrides?: CallOverrides): Promise<BigNumber>;
    token0(overrides?: CallOverrides): Promise<string>;
    token1(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        advanceTime(by: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        burn(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        collect(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        collectProtocol(recipient: PromiseOrValue<string>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        factory(overrides?: CallOverrides): Promise<string>;
        fee(overrides?: CallOverrides): Promise<number>;
        feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<BigNumber>;
        feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<BigNumber>;
        flash(recipient: PromiseOrValue<string>, amount0: PromiseOrValue<BigNumberish>, amount1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        increaseObservationCardinalityNext(observationCardinalityNext: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        initialize(sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        liquidity(overrides?: CallOverrides): Promise<BigNumber>;
        maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;
        mint(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        observations(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
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
        observe(secondsAgos: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber[]
        ] & {
            tickCumulatives: BigNumber[];
            secondsPerLiquidityCumulativeX128s: BigNumber[];
        }>;
        positions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
        setFeeGrowthGlobal0X128(_feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setFeeGrowthGlobal1X128(_feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setFeeProtocol(feeProtocol0: PromiseOrValue<BigNumberish>, feeProtocol1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
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
        snapshotCumulativesInside(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number
        ] & {
            tickCumulativeInside: BigNumber;
            secondsPerLiquidityInsideX128: BigNumber;
            secondsInside: number;
        }>;
        swap(recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        tickBitmap(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tickSpacing(overrides?: CallOverrides): Promise<number>;
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
        time(overrides?: CallOverrides): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Burn(address,int24,int24,uint128,uint256,uint256)"(owner?: PromiseOrValue<string> | null, tickLower?: PromiseOrValue<BigNumberish> | null, tickUpper?: PromiseOrValue<BigNumberish> | null, amount?: null, amount0?: null, amount1?: null): BurnEventFilter;
        Burn(owner?: PromiseOrValue<string> | null, tickLower?: PromiseOrValue<BigNumberish> | null, tickUpper?: PromiseOrValue<BigNumberish> | null, amount?: null, amount0?: null, amount1?: null): BurnEventFilter;
        "Collect(address,address,int24,int24,uint128,uint128)"(owner?: PromiseOrValue<string> | null, recipient?: null, tickLower?: PromiseOrValue<BigNumberish> | null, tickUpper?: PromiseOrValue<BigNumberish> | null, amount0?: null, amount1?: null): CollectEventFilter;
        Collect(owner?: PromiseOrValue<string> | null, recipient?: null, tickLower?: PromiseOrValue<BigNumberish> | null, tickUpper?: PromiseOrValue<BigNumberish> | null, amount0?: null, amount1?: null): CollectEventFilter;
        "CollectProtocol(address,address,uint128,uint128)"(sender?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): CollectProtocolEventFilter;
        CollectProtocol(sender?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): CollectProtocolEventFilter;
        "Flash(address,address,uint256,uint256,uint256,uint256)"(sender?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, amount0?: null, amount1?: null, paid0?: null, paid1?: null): FlashEventFilter;
        Flash(sender?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, amount0?: null, amount1?: null, paid0?: null, paid1?: null): FlashEventFilter;
        "IncreaseObservationCardinalityNext(uint16,uint16)"(observationCardinalityNextOld?: null, observationCardinalityNextNew?: null): IncreaseObservationCardinalityNextEventFilter;
        IncreaseObservationCardinalityNext(observationCardinalityNextOld?: null, observationCardinalityNextNew?: null): IncreaseObservationCardinalityNextEventFilter;
        "Initialize(uint160,int24)"(sqrtPriceX96?: null, tick?: null): InitializeEventFilter;
        Initialize(sqrtPriceX96?: null, tick?: null): InitializeEventFilter;
        "Mint(address,address,int24,int24,uint128,uint256,uint256)"(sender?: null, owner?: PromiseOrValue<string> | null, tickLower?: PromiseOrValue<BigNumberish> | null, tickUpper?: PromiseOrValue<BigNumberish> | null, amount?: null, amount0?: null, amount1?: null): MintEventFilter;
        Mint(sender?: null, owner?: PromiseOrValue<string> | null, tickLower?: PromiseOrValue<BigNumberish> | null, tickUpper?: PromiseOrValue<BigNumberish> | null, amount?: null, amount0?: null, amount1?: null): MintEventFilter;
        "SetFeeProtocol(uint8,uint8,uint8,uint8)"(feeProtocol0Old?: null, feeProtocol1Old?: null, feeProtocol0New?: null, feeProtocol1New?: null): SetFeeProtocolEventFilter;
        SetFeeProtocol(feeProtocol0Old?: null, feeProtocol1Old?: null, feeProtocol0New?: null, feeProtocol1New?: null): SetFeeProtocolEventFilter;
        "Swap(address,address,int256,int256,uint160,uint128,int24)"(sender?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, amount0?: null, amount1?: null, sqrtPriceX96?: null, liquidity?: null, tick?: null): SwapEventFilter;
        Swap(sender?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, amount0?: null, amount1?: null, sqrtPriceX96?: null, liquidity?: null, tick?: null): SwapEventFilter;
    };
    estimateGas: {
        advanceTime(by: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burn(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collect(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collectProtocol(recipient: PromiseOrValue<string>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<BigNumber>;
        feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<BigNumber>;
        flash(recipient: PromiseOrValue<string>, amount0: PromiseOrValue<BigNumberish>, amount1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increaseObservationCardinalityNext(observationCardinalityNext: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        liquidity(overrides?: CallOverrides): Promise<BigNumber>;
        maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;
        mint(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        observations(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        observe(secondsAgos: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        positions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        protocolFees(overrides?: CallOverrides): Promise<BigNumber>;
        setFeeGrowthGlobal0X128(_feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeGrowthGlobal1X128(_feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeProtocol(feeProtocol0: PromiseOrValue<BigNumberish>, feeProtocol1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        slot0(overrides?: CallOverrides): Promise<BigNumber>;
        snapshotCumulativesInside(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        swap(recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tickBitmap(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tickSpacing(overrides?: CallOverrides): Promise<BigNumber>;
        ticks(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        time(overrides?: CallOverrides): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<BigNumber>;
        token1(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        advanceTime(by: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burn(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collect(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collectProtocol(recipient: PromiseOrValue<string>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flash(recipient: PromiseOrValue<string>, amount0: PromiseOrValue<BigNumberish>, amount1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increaseObservationCardinalityNext(observationCardinalityNext: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxLiquidityPerTick(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        observations(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observe(secondsAgos: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setFeeGrowthGlobal0X128(_feeGrowthGlobal0X128: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeGrowthGlobal1X128(_feeGrowthGlobal1X128: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeProtocol(feeProtocol0: PromiseOrValue<BigNumberish>, feeProtocol1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        slot0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        snapshotCumulativesInside(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tickBitmap(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tickSpacing(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ticks(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
