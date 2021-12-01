import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    Governor: string;
    ProtocolLock: string;
    Hue: string;
    Weth: string;
    CollateralPool: string;
};
export declare type ConstructorParamsStructOutput = [
    string,
    string,
    string,
    string,
    string
] & {
    Governor: string;
    ProtocolLock: string;
    Hue: string;
    Weth: string;
    CollateralPool: string;
};
export declare type PriceInfoStruct = {
    cumulative: BigNumberish;
    time: BigNumberish;
    t0Decimals: BigNumberish;
    t1Decimals: BigNumberish;
    hueOrWethIsToken0: boolean;
};
export declare type PriceInfoStructOutput = [
    BigNumber,
    number,
    number,
    number,
    boolean
] & {
    cumulative: BigNumber;
    time: number;
    t0Decimals: number;
    t1Decimals: number;
    hueOrWethIsToken0: boolean;
};
export interface PricesTestableInterface extends utils.Interface {
    functions: {
        "collateralPool()": FunctionFragment;
        "collateralPoolMaxTwapTime()": FunctionFragment;
        "collateralPoolMinTwapTime()": FunctionFragment;
        "collateralPriceInfo()": FunctionFragment;
        "deployer()": FunctionFragment;
        "governor()": FunctionFragment;
        "hue()": FunctionFragment;
        "init()": FunctionFragment;
        "normalizeDecimals(uint256,(uint192,uint40,uint8,uint8,bool))": FunctionFragment;
        "referencePriceInfo(address)": FunctionFragment;
        "setCollateralPoolMaxTwapTime(uint64)": FunctionFragment;
        "setCollateralPoolMinTwapTime(uint64)": FunctionFragment;
        "stop()": FunctionFragment;
        "stopped()": FunctionFragment;
        "systemInitializeReferencePool(address)": FunctionFragment;
        "systemObtainCollateralPrice()": FunctionFragment;
        "systemObtainReferencePrice(address)": FunctionFragment;
        "updateCollateralPrice()": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
        "viewCurrentTwappedReferencePrice(address)": FunctionFragment;
        "weth()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "collateralPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralPoolMaxTwapTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralPoolMinTwapTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralPriceInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "hue", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values?: undefined): string;
    encodeFunctionData(functionFragment: "normalizeDecimals", values: [BigNumberish, PriceInfoStruct]): string;
    encodeFunctionData(functionFragment: "referencePriceInfo", values: [string]): string;
    encodeFunctionData(functionFragment: "setCollateralPoolMaxTwapTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setCollateralPoolMinTwapTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemInitializeReferencePool", values: [string]): string;
    encodeFunctionData(functionFragment: "systemObtainCollateralPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemObtainReferencePrice", values: [string]): string;
    encodeFunctionData(functionFragment: "updateCollateralPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "viewCurrentTwappedReferencePrice", values: [string]): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    decodeFunctionResult(functionFragment: "collateralPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPoolMaxTwapTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPoolMinTwapTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPriceInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "normalizeDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referencePriceInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCollateralPoolMaxTwapTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCollateralPoolMinTwapTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemInitializeReferencePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemObtainCollateralPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemObtainReferencePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCollateralPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "viewCurrentTwappedReferencePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    events: {
        "CollateralMaxTwapTimeUpdated(uint64)": EventFragment;
        "CollateralMinTwapTimeUpdated(uint64)": EventFragment;
        "Stopped()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CollateralMaxTwapTimeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CollateralMinTwapTimeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
}
export declare type CollateralMaxTwapTimeUpdatedEvent = TypedEvent<[
    BigNumber
], {
    time: BigNumber;
}>;
export declare type CollateralMaxTwapTimeUpdatedEventFilter = TypedEventFilter<CollateralMaxTwapTimeUpdatedEvent>;
export declare type CollateralMinTwapTimeUpdatedEvent = TypedEvent<[
    BigNumber
], {
    time: BigNumber;
}>;
export declare type CollateralMinTwapTimeUpdatedEventFilter = TypedEventFilter<CollateralMinTwapTimeUpdatedEvent>;
export declare type StoppedEvent = TypedEvent<[], {}>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
export interface PricesTestable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PricesTestableInterface;
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
        collateralPool(overrides?: CallOverrides): Promise<[string]>;
        collateralPoolMaxTwapTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        collateralPoolMinTwapTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        collateralPriceInfo(overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number,
            number,
            boolean
        ] & {
            cumulative: BigNumber;
            time: number;
            t0Decimals: number;
            t1Decimals: number;
            hueOrWethIsToken0: boolean;
        }>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        hue(overrides?: CallOverrides): Promise<[string]>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        normalizeDecimals(price: BigNumberish, pi: PriceInfoStruct, overrides?: CallOverrides): Promise<[BigNumber]>;
        referencePriceInfo(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number,
            number,
            boolean
        ] & {
            cumulative: BigNumber;
            time: number;
            t0Decimals: number;
            t1Decimals: number;
            hueOrWethIsToken0: boolean;
        }>;
        setCollateralPoolMaxTwapTime(time: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setCollateralPoolMinTwapTime(time: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        systemInitializeReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        systemObtainCollateralPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        systemObtainReferencePrice(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateCollateralPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        viewCurrentTwappedReferencePrice(pool: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            price: BigNumber;
        }>;
        weth(overrides?: CallOverrides): Promise<[string]>;
    };
    collateralPool(overrides?: CallOverrides): Promise<string>;
    collateralPoolMaxTwapTime(overrides?: CallOverrides): Promise<BigNumber>;
    collateralPoolMinTwapTime(overrides?: CallOverrides): Promise<BigNumber>;
    collateralPriceInfo(overrides?: CallOverrides): Promise<[
        BigNumber,
        number,
        number,
        number,
        boolean
    ] & {
        cumulative: BigNumber;
        time: number;
        t0Decimals: number;
        t1Decimals: number;
        hueOrWethIsToken0: boolean;
    }>;
    deployer(overrides?: CallOverrides): Promise<string>;
    governor(overrides?: CallOverrides): Promise<string>;
    hue(overrides?: CallOverrides): Promise<string>;
    init(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    normalizeDecimals(price: BigNumberish, pi: PriceInfoStruct, overrides?: CallOverrides): Promise<BigNumber>;
    referencePriceInfo(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        number,
        number,
        number,
        boolean
    ] & {
        cumulative: BigNumber;
        time: number;
        t0Decimals: number;
        t1Decimals: number;
        hueOrWethIsToken0: boolean;
    }>;
    setCollateralPoolMaxTwapTime(time: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setCollateralPoolMinTwapTime(time: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    systemInitializeReferencePool(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    systemObtainCollateralPrice(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    systemObtainReferencePrice(pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateCollateralPrice(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    viewCurrentTwappedReferencePrice(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
    weth(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        collateralPool(overrides?: CallOverrides): Promise<string>;
        collateralPoolMaxTwapTime(overrides?: CallOverrides): Promise<BigNumber>;
        collateralPoolMinTwapTime(overrides?: CallOverrides): Promise<BigNumber>;
        collateralPriceInfo(overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number,
            number,
            boolean
        ] & {
            cumulative: BigNumber;
            time: number;
            t0Decimals: number;
            t1Decimals: number;
            hueOrWethIsToken0: boolean;
        }>;
        deployer(overrides?: CallOverrides): Promise<string>;
        governor(overrides?: CallOverrides): Promise<string>;
        hue(overrides?: CallOverrides): Promise<string>;
        init(overrides?: CallOverrides): Promise<void>;
        normalizeDecimals(price: BigNumberish, pi: PriceInfoStruct, overrides?: CallOverrides): Promise<BigNumber>;
        referencePriceInfo(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number,
            number,
            boolean
        ] & {
            cumulative: BigNumber;
            time: number;
            t0Decimals: number;
            t1Decimals: number;
            hueOrWethIsToken0: boolean;
        }>;
        setCollateralPoolMaxTwapTime(time: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setCollateralPoolMinTwapTime(time: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stop(overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        systemInitializeReferencePool(pool: string, overrides?: CallOverrides): Promise<void>;
        systemObtainCollateralPrice(overrides?: CallOverrides): Promise<BigNumber>;
        systemObtainReferencePrice(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        updateCollateralPrice(overrides?: CallOverrides): Promise<void>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        viewCurrentTwappedReferencePrice(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "CollateralMaxTwapTimeUpdated(uint64)"(time?: BigNumberish | null): CollateralMaxTwapTimeUpdatedEventFilter;
        CollateralMaxTwapTimeUpdated(time?: BigNumberish | null): CollateralMaxTwapTimeUpdatedEventFilter;
        "CollateralMinTwapTimeUpdated(uint64)"(time?: BigNumberish | null): CollateralMinTwapTimeUpdatedEventFilter;
        CollateralMinTwapTimeUpdated(time?: BigNumberish | null): CollateralMinTwapTimeUpdatedEventFilter;
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
    };
    estimateGas: {
        collateralPool(overrides?: CallOverrides): Promise<BigNumber>;
        collateralPoolMaxTwapTime(overrides?: CallOverrides): Promise<BigNumber>;
        collateralPoolMinTwapTime(overrides?: CallOverrides): Promise<BigNumber>;
        collateralPriceInfo(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        hue(overrides?: CallOverrides): Promise<BigNumber>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        normalizeDecimals(price: BigNumberish, pi: PriceInfoStruct, overrides?: CallOverrides): Promise<BigNumber>;
        referencePriceInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        setCollateralPoolMaxTwapTime(time: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setCollateralPoolMinTwapTime(time: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        systemInitializeReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        systemObtainCollateralPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        systemObtainReferencePrice(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateCollateralPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        viewCurrentTwappedReferencePrice(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        collateralPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralPoolMaxTwapTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralPoolMinTwapTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralPriceInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        normalizeDecimals(price: BigNumberish, pi: PriceInfoStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referencePriceInfo(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setCollateralPoolMaxTwapTime(time: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setCollateralPoolMinTwapTime(time: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        systemInitializeReferencePool(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        systemObtainCollateralPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        systemObtainReferencePrice(pool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateCollateralPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validUpdate(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        viewCurrentTwappedReferencePrice(pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
