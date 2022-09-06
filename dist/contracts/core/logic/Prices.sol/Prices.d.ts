import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace IPrices {
    type ConstructorParamsStruct = {
        Governor: PromiseOrValue<string>;
        Tcp: PromiseOrValue<string>;
        Hue: PromiseOrValue<string>;
        CollateralPool: PromiseOrValue<string>;
        ProtocolPool: PromiseOrValue<string>;
        TruEth: PromiseOrValue<string>;
    };
    type ConstructorParamsStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        Governor: string;
        Tcp: string;
        Hue: string;
        CollateralPool: string;
        ProtocolPool: string;
        TruEth: string;
    };
}
export interface PricesInterface extends utils.Interface {
    functions: {
        "calculateInstantCollateralPrice(uint32)": FunctionFragment;
        "calculateInstantTwappedPrice(address,uint32)": FunctionFragment;
        "calculateInstantTwappedTick(address,uint32)": FunctionFragment;
        "calculateTwappedPrice(address,bool)": FunctionFragment;
        "collateralPool()": FunctionFragment;
        "deployer()": FunctionFragment;
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
        "truEth()": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "calculateInstantCollateralPrice" | "calculateInstantTwappedPrice" | "calculateInstantTwappedTick" | "calculateTwappedPrice" | "collateralPool" | "deployer" | "governor" | "hue" | "hueTcpPrice" | "init" | "initializePool" | "initializeWethPool" | "isPoolInitialized" | "priceInfo" | "protocolPool" | "stop" | "stopped" | "systemObtainReferencePrice" | "tcp" | "truEth" | "validUpdate"): FunctionFragment;
    encodeFunctionData(functionFragment: "calculateInstantCollateralPrice", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "calculateInstantTwappedPrice", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "calculateInstantTwappedTick", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "calculateTwappedPrice", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "collateralPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "hue", values?: undefined): string;
    encodeFunctionData(functionFragment: "hueTcpPrice", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "init", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializePool", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initializeWethPool", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isPoolInitialized", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "priceInfo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "protocolPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemObtainReferencePrice", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "tcp", values?: undefined): string;
    encodeFunctionData(functionFragment: "truEth", values?: undefined): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "calculateInstantCollateralPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateInstantTwappedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateInstantTwappedTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateTwappedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "truEth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
    events: {
        "PriceUpdated(address,uint256,int24)": EventFragment;
        "Stopped()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PriceUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
}
export interface PriceUpdatedEventObject {
    pool: string;
    price: BigNumber;
    tick: number;
}
export declare type PriceUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    number
], PriceUpdatedEventObject>;
export declare type PriceUpdatedEventFilter = TypedEventFilter<PriceUpdatedEvent>;
export interface StoppedEventObject {
}
export declare type StoppedEvent = TypedEvent<[], StoppedEventObject>;
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
        calculateInstantCollateralPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateInstantTwappedPrice(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateInstantTwappedTick(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number] & {
            tick: number;
        }>;
        calculateTwappedPrice(pool: PromiseOrValue<string>, normalizeDecimals: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber] & {
            price: BigNumber;
        }>;
        collateralPool(overrides?: CallOverrides): Promise<[string]>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        hue(overrides?: CallOverrides): Promise<[string]>;
        hueTcpPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        init(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initializePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initializeWethPool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isPoolInitialized(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        priceInfo(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
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
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        systemObtainReferencePrice(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tcp(overrides?: CallOverrides): Promise<[string]>;
        truEth(overrides?: CallOverrides): Promise<[string]>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    calculateInstantCollateralPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    calculateInstantTwappedPrice(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    calculateInstantTwappedTick(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    calculateTwappedPrice(pool: PromiseOrValue<string>, normalizeDecimals: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    collateralPool(overrides?: CallOverrides): Promise<string>;
    deployer(overrides?: CallOverrides): Promise<string>;
    governor(overrides?: CallOverrides): Promise<string>;
    hue(overrides?: CallOverrides): Promise<string>;
    hueTcpPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    init(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initializePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initializeWethPool(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isPoolInitialized(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    priceInfo(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
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
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    systemObtainReferencePrice(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tcp(overrides?: CallOverrides): Promise<string>;
    truEth(overrides?: CallOverrides): Promise<string>;
    validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        calculateInstantCollateralPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedPrice(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedTick(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        calculateTwappedPrice(pool: PromiseOrValue<string>, normalizeDecimals: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        collateralPool(overrides?: CallOverrides): Promise<string>;
        deployer(overrides?: CallOverrides): Promise<string>;
        governor(overrides?: CallOverrides): Promise<string>;
        hue(overrides?: CallOverrides): Promise<string>;
        hueTcpPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        init(overrides?: CallOverrides): Promise<void>;
        initializePool(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        initializeWethPool(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isPoolInitialized(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        priceInfo(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
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
        systemObtainReferencePrice(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<string>;
        truEth(overrides?: CallOverrides): Promise<string>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "PriceUpdated(address,uint256,int24)"(pool?: PromiseOrValue<string> | null, price?: null, tick?: null): PriceUpdatedEventFilter;
        PriceUpdated(pool?: PromiseOrValue<string> | null, price?: null, tick?: null): PriceUpdatedEventFilter;
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
    };
    estimateGas: {
        calculateInstantCollateralPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedPrice(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateInstantTwappedTick(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateTwappedPrice(pool: PromiseOrValue<string>, normalizeDecimals: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        collateralPool(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        hue(overrides?: CallOverrides): Promise<BigNumber>;
        hueTcpPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        init(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initializePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initializeWethPool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isPoolInitialized(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        priceInfo(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        protocolPool(overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        systemObtainReferencePrice(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<BigNumber>;
        truEth(overrides?: CallOverrides): Promise<BigNumber>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateInstantCollateralPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateInstantTwappedPrice(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateInstantTwappedTick(pool: PromiseOrValue<string>, twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateTwappedPrice(pool: PromiseOrValue<string>, normalizeDecimals: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hueTcpPrice(twapDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initializePool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initializeWethPool(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isPoolInitialized(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceInfo(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        systemObtainReferencePrice(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tcp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        truEth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
