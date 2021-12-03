import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    Governor: string;
    NftPositionManager: string;
};
export declare type ConstructorParamsStructOutput = [string, string] & {
    Governor: string;
    NftPositionManager: string;
};
export declare type PoolConfigStruct = {
    pool: string;
    rewardsPortion: BigNumberish;
};
export declare type PoolConfigStructOutput = [string, BigNumber] & {
    pool: string;
    rewardsPortion: BigNumber;
};
export declare type NftPositionTickStatusStruct = {
    token0: string;
    token1: string;
    fee: BigNumberish;
    tickLower: BigNumberish;
    tickUpper: BigNumberish;
};
export declare type NftPositionTickStatusStructOutput = [
    string,
    string,
    number,
    number,
    number
] & {
    token0: string;
    token1: string;
    fee: number;
    tickLower: number;
    tickUpper: number;
};
export interface ProtocolDataAggregatorInterface extends utils.Interface {
    functions: {
        "convertSqrtPriceX96ToTick(uint160)": FunctionFragment;
        "convertTickToSqrtPriceX96(int24)": FunctionFragment;
        "getIncentivizedPools()": FunctionFragment;
        "getLockedNFTIDs(uint32,uint32)": FunctionFragment;
        "getUniswapPositionTickStatuses(uint256[])": FunctionFragment;
        "governor()": FunctionFragment;
        "nftPositionManager()": FunctionFragment;
        "positionsCollateralization(uint64[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "convertSqrtPriceX96ToTick", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "convertTickToSqrtPriceX96", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getIncentivizedPools", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLockedNFTIDs", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getUniswapPositionTickStatuses", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "nftPositionManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionsCollateralization", values: [BigNumberish[]]): string;
    decodeFunctionResult(functionFragment: "convertSqrtPriceX96ToTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertTickToSqrtPriceX96", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIncentivizedPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLockedNFTIDs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUniswapPositionTickStatuses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nftPositionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionsCollateralization", data: BytesLike): Result;
    events: {};
}
export interface ProtocolDataAggregator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProtocolDataAggregatorInterface;
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
        convertSqrtPriceX96ToTick(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        convertTickToSqrtPriceX96(tick: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getIncentivizedPools(overrides?: CallOverrides): Promise<[
            PoolConfigStructOutput[]
        ] & {
            poolConfigs: PoolConfigStructOutput[];
        }>;
        getLockedNFTIDs(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            nftIDs: BigNumber[];
        }>;
        getUniswapPositionTickStatuses(nftIDs: BigNumberish[], overrides?: CallOverrides): Promise<[
            NftPositionTickStatusStructOutput[]
        ] & {
            tickStatuses: NftPositionTickStatusStructOutput[];
        }>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        nftPositionManager(overrides?: CallOverrides): Promise<[string]>;
        positionsCollateralization(positionIDs: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            collateralizations: BigNumber[];
        }>;
    };
    convertSqrtPriceX96ToTick(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<number>;
    convertTickToSqrtPriceX96(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getIncentivizedPools(overrides?: CallOverrides): Promise<PoolConfigStructOutput[]>;
    getLockedNFTIDs(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    getUniswapPositionTickStatuses(nftIDs: BigNumberish[], overrides?: CallOverrides): Promise<NftPositionTickStatusStructOutput[]>;
    governor(overrides?: CallOverrides): Promise<string>;
    nftPositionManager(overrides?: CallOverrides): Promise<string>;
    positionsCollateralization(positionIDs: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    callStatic: {
        convertSqrtPriceX96ToTick(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<number>;
        convertTickToSqrtPriceX96(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getIncentivizedPools(overrides?: CallOverrides): Promise<PoolConfigStructOutput[]>;
        getLockedNFTIDs(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        getUniswapPositionTickStatuses(nftIDs: BigNumberish[], overrides?: CallOverrides): Promise<NftPositionTickStatusStructOutput[]>;
        governor(overrides?: CallOverrides): Promise<string>;
        nftPositionManager(overrides?: CallOverrides): Promise<string>;
        positionsCollateralization(positionIDs: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    };
    filters: {};
    estimateGas: {
        convertSqrtPriceX96ToTick(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        convertTickToSqrtPriceX96(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getIncentivizedPools(overrides?: CallOverrides): Promise<BigNumber>;
        getLockedNFTIDs(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getUniswapPositionTickStatuses(nftIDs: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        nftPositionManager(overrides?: CallOverrides): Promise<BigNumber>;
        positionsCollateralization(positionIDs: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        convertSqrtPriceX96ToTick(sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertTickToSqrtPriceX96(tick: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIncentivizedPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLockedNFTIDs(start: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUniswapPositionTickStatuses(nftIDs: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nftPositionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionsCollateralization(positionIDs: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
