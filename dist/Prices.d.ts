import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    Governor: string;
    Weth: string;
    Tcp: string;
    Hue: string;
    CollateralPool: string;
    ProtocolPool: string;
};
export declare type ConstructorParamsStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string
] & {
    Governor: string;
    Weth: string;
    Tcp: string;
    Hue: string;
    CollateralPool: string;
    ProtocolPool: string;
};
export interface PricesInterface extends utils.Interface {
    functions: {
        "calculateInstantCollateralPrice(uint32)": FunctionFragment;
        "calculateInstantTwappedPrice(address,uint32)": FunctionFragment;
        "calculateInstantTwappedTick(address,uint32)": FunctionFragment;
        "calculateTwappedPrice(address,bool)": FunctionFragment;
        "collateralPool()": FunctionFragment;
        "deployer()": FunctionFragment;
        "getRealHueCountForSinglePoolPosition(address,int24,int24,int24,uint128,uint32)": FunctionFragment;
        "governor()": FunctionFragment;
        "hue()": FunctionFragment;
        "hueTcpPrice(uint32)": FunctionFragment;
        "init()": FunctionFragment;
        "initializePool(address)": FunctionFragment;
        "initializeWethPool(address)": FunctionFragment;
        "isPoolInitialized(address)": FunctionFragment;
        "priceInfo(address)": FunctionFragment;
        "protocolPool()": FunctionFragment;
        "stop()": FunctionFragment;
        "stopped()": FunctionFragment;
        "systemObtainReferencePrice(address)": FunctionFragment;
        "tcp()": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
        "weth()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "calculateInstantCollateralPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateInstantTwappedPrice", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateInstantTwappedTick", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateTwappedPrice", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "collateralPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRealHueCountForSinglePoolPosition", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "hue", values?: undefined): string;
    encodeFunctionData(functionFragment: "hueTcpPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "init", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializePool", values: [string]): string;
    encodeFunctionData(functionFragment: "initializeWethPool", values: [string]): string;
    encodeFunctionData(functionFragment: "isPoolInitialized", values: [string]): string;
    encodeFunctionData(functionFragment: "priceInfo", values: [string]): string;
    encodeFunctionData(functionFragment: "protocolPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemObtainReferencePrice", values: [string]): string;
    encodeFunctionData(functionFragment: "tcp", values?: undefined): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    decodeFunctionResult(functionFragment: "calculateInstantCollateralPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateInstantTwappedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateInstantTwappedTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateTwappedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRealHueCountForSinglePoolPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hueTcpPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeWethPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPoolInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemObtainReferencePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tcp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    events: {
        "PriceUpdated(address,uint256,int24)": EventFragment;
        "Stopped()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PriceUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
}
export declare type PriceUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    number
], {
    pool: string;
    price: BigNumber;
    tick: number;
}>;
export declare type PriceUpdatedEventFilter = TypedEventFilter<PriceUpdatedEvent>;
export declare type StoppedEvent = TypedEvent<[], {}>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
export interface Prices extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PricesInterface;
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
        calculateInstantCollateralPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateInstantTwappedPrice(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateInstantTwappedTick(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            tick: number;
        }>;
        calculateTwappedPrice(pool: string, normalizeDecimals: boolean, overrides?: CallOverrides): Promise<[BigNumber] & {
            price: BigNumber;
        }>;
        collateralPool(overrides?: CallOverrides): Promise<[string]>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        getRealHueCountForSinglePoolPosition(pool: string, tick: BigNumberish, tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        hue(overrides?: CallOverrides): Promise<[string]>;
        hueTcpPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializeWethPool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isPoolInitialized(pool: string, overrides?: CallOverrides): Promise<[boolean]>;
        priceInfo(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number,
            number,
            boolean,
            boolean
        ] & {
            startTime: BigNumber;
            tickCumulative: BigNumber;
            tick: number;
            otherTokenDecimals: number;
            isToken0: boolean;
            valid: boolean;
        }>;
        protocolPool(overrides?: CallOverrides): Promise<[string]>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        systemObtainReferencePrice(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tcp(overrides?: CallOverrides): Promise<[string]>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        weth(overrides?: CallOverrides): Promise<[string]>;
    };
    calculateInstantCollateralPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    calculateInstantTwappedPrice(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    calculateInstantTwappedTick(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<number>;
    calculateTwappedPrice(pool: string, normalizeDecimals: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    collateralPool(overrides?: CallOverrides): Promise<string>;
    deployer(overrides?: CallOverrides): Promise<string>;
    getRealHueCountForSinglePoolPosition(pool: string, tick: BigNumberish, tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    governor(overrides?: CallOverrides): Promise<string>;
    hue(overrides?: CallOverrides): Promise<string>;
    hueTcpPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    init(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializePool(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializeWethPool(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isPoolInitialized(pool: string, overrides?: CallOverrides): Promise<boolean>;
    priceInfo(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        number,
        number,
        boolean,
        boolean
    ] & {
        startTime: BigNumber;
        tickCumulative: BigNumber;
        tick: number;
        otherTokenDecimals: number;
        isToken0: boolean;
        valid: boolean;
    }>;
    protocolPool(overrides?: CallOverrides): Promise<string>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    systemObtainReferencePrice(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tcp(overrides?: CallOverrides): Promise<string>;
    validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    weth(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        calculateInstantCollateralPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedPrice(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedTick(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<number>;
        calculateTwappedPrice(pool: string, normalizeDecimals: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        collateralPool(overrides?: CallOverrides): Promise<string>;
        deployer(overrides?: CallOverrides): Promise<string>;
        getRealHueCountForSinglePoolPosition(pool: string, tick: BigNumberish, tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<string>;
        hue(overrides?: CallOverrides): Promise<string>;
        hueTcpPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        init(overrides?: CallOverrides): Promise<void>;
        initializePool(pool: string, overrides?: CallOverrides): Promise<void>;
        initializeWethPool(pool: string, overrides?: CallOverrides): Promise<void>;
        isPoolInitialized(pool: string, overrides?: CallOverrides): Promise<boolean>;
        priceInfo(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number,
            number,
            boolean,
            boolean
        ] & {
            startTime: BigNumber;
            tickCumulative: BigNumber;
            tick: number;
            otherTokenDecimals: number;
            isToken0: boolean;
            valid: boolean;
        }>;
        protocolPool(overrides?: CallOverrides): Promise<string>;
        stop(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        systemObtainReferencePrice(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<string>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        weth(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "PriceUpdated(address,uint256,int24)"(pool?: string | null, price?: null, tick?: null): PriceUpdatedEventFilter;
        PriceUpdated(pool?: string | null, price?: null, tick?: null): PriceUpdatedEventFilter;
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
    };
    estimateGas: {
        calculateInstantCollateralPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedPrice(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedTick(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateTwappedPrice(pool: string, normalizeDecimals: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        collateralPool(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        getRealHueCountForSinglePoolPosition(pool: string, tick: BigNumberish, tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        hue(overrides?: CallOverrides): Promise<BigNumber>;
        hueTcpPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializeWethPool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isPoolInitialized(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        priceInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        protocolPool(overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        systemObtainReferencePrice(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<BigNumber>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateInstantCollateralPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateInstantTwappedPrice(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateInstantTwappedTick(pool: string, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateTwappedPrice(pool: string, normalizeDecimals: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRealHueCountForSinglePoolPosition(pool: string, tick: BigNumberish, tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish, twapDuration: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hueTcpPrice(twapDuration: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializeWethPool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isPoolInitialized(pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceInfo(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        systemObtainReferencePrice(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tcp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}