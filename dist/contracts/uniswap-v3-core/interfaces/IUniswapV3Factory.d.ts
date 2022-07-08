import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IUniswapV3FactoryInterface extends utils.Interface {
    functions: {
        "createPool(address,address,uint24)": FunctionFragment;
        "enableFeeAmount(uint24,int24)": FunctionFragment;
        "feeAmountTickSpacing(uint24)": FunctionFragment;
        "getPool(address,address,uint24)": FunctionFragment;
        "owner()": FunctionFragment;
        "setOwner(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createPool" | "enableFeeAmount" | "feeAmountTickSpacing" | "getPool" | "owner" | "setOwner"): FunctionFragment;
    encodeFunctionData(functionFragment: "createPool", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "enableFeeAmount", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "feeAmountTickSpacing", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPool", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableFeeAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeAmountTickSpacing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    events: {
        "FeeAmountEnabled(uint24,int24)": EventFragment;
        "OwnerChanged(address,address)": EventFragment;
        "PoolCreated(address,address,uint24,int24,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FeeAmountEnabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
}
export interface FeeAmountEnabledEventObject {
    fee: number;
    tickSpacing: number;
}
export declare type FeeAmountEnabledEvent = TypedEvent<[
    number,
    number
], FeeAmountEnabledEventObject>;
export declare type FeeAmountEnabledEventFilter = TypedEventFilter<FeeAmountEnabledEvent>;
export interface OwnerChangedEventObject {
    oldOwner: string;
    newOwner: string;
}
export declare type OwnerChangedEvent = TypedEvent<[
    string,
    string
], OwnerChangedEventObject>;
export declare type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;
export interface PoolCreatedEventObject {
    token0: string;
    token1: string;
    fee: number;
    tickSpacing: number;
    pool: string;
}
export declare type PoolCreatedEvent = TypedEvent<[
    string,
    string,
    number,
    number,
    string
], PoolCreatedEventObject>;
export declare type PoolCreatedEventFilter = TypedEventFilter<PoolCreatedEvent>;
export interface IUniswapV3Factory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniswapV3FactoryInterface;
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
        createPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        enableFeeAmount(fee: BigNumberish, tickSpacing: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        feeAmountTickSpacing(fee: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        getPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            pool: string;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        setOwner(_owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    createPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    enableFeeAmount(fee: BigNumberish, tickSpacing: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    feeAmountTickSpacing(fee: BigNumberish, overrides?: CallOverrides): Promise<number>;
    getPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    setOwner(_owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<string>;
        enableFeeAmount(fee: BigNumberish, tickSpacing: BigNumberish, overrides?: CallOverrides): Promise<void>;
        feeAmountTickSpacing(fee: BigNumberish, overrides?: CallOverrides): Promise<number>;
        getPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        setOwner(_owner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FeeAmountEnabled(uint24,int24)"(fee?: BigNumberish | null, tickSpacing?: BigNumberish | null): FeeAmountEnabledEventFilter;
        FeeAmountEnabled(fee?: BigNumberish | null, tickSpacing?: BigNumberish | null): FeeAmountEnabledEventFilter;
        "OwnerChanged(address,address)"(oldOwner?: string | null, newOwner?: string | null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: string | null, newOwner?: string | null): OwnerChangedEventFilter;
        "PoolCreated(address,address,uint24,int24,address)"(token0?: string | null, token1?: string | null, fee?: BigNumberish | null, tickSpacing?: null, pool?: null): PoolCreatedEventFilter;
        PoolCreated(token0?: string | null, token1?: string | null, fee?: BigNumberish | null, tickSpacing?: null, pool?: null): PoolCreatedEventFilter;
    };
    estimateGas: {
        createPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        enableFeeAmount(fee: BigNumberish, tickSpacing: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        feeAmountTickSpacing(fee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        setOwner(_owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        enableFeeAmount(fee: BigNumberish, tickSpacing: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        feeAmountTickSpacing(fee: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setOwner(_owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
