import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type CallStruct = {
    target: string;
    callData: BytesLike;
};
export declare type CallStructOutput = [string, string] & {
    target: string;
    callData: string;
};
export interface TrustlessMulticallViewOnlyInterface extends utils.Interface {
    functions: {
        "all((address,bytes)[])": FunctionFragment;
        "getBlockHash(uint256)": FunctionFragment;
        "getBlockNumber()": FunctionFragment;
        "getChainId()": FunctionFragment;
        "getCurrentBlockCoinbase()": FunctionFragment;
        "getCurrentBlockDifficulty()": FunctionFragment;
        "getCurrentBlockGasLimit()": FunctionFragment;
        "getCurrentBlockTimestamp()": FunctionFragment;
        "getEthBalance(address)": FunctionFragment;
        "getLastBlockHash()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "all", values: [CallStruct[]]): string;
    encodeFunctionData(functionFragment: "getBlockHash", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBlockNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "getChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentBlockCoinbase", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentBlockDifficulty", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentBlockGasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentBlockTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEthBalance", values: [string]): string;
    encodeFunctionData(functionFragment: "getLastBlockHash", values?: undefined): string;
    decodeFunctionResult(functionFragment: "all", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBlockHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBlockNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentBlockCoinbase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentBlockDifficulty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentBlockGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentBlockTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEthBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastBlockHash", data: BytesLike): Result;
    events: {};
}
export interface TrustlessMulticallViewOnly extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TrustlessMulticallViewOnlyInterface;
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
        all(calls: CallStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            string[]
        ] & {
            blockNumber: BigNumber;
            returnData: string[];
        }>;
        getBlockHash(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;
        getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<[string]>;
        getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<[BigNumber]>;
        getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        getEthBalance(addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getLastBlockHash(overrides?: CallOverrides): Promise<[string]>;
    };
    all(calls: CallStruct[], overrides?: CallOverrides): Promise<[
        BigNumber,
        string[]
    ] & {
        blockNumber: BigNumber;
        returnData: string[];
    }>;
    getBlockHash(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
    getChainId(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<string>;
    getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
    getLastBlockHash(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        all(calls: CallStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            string[]
        ] & {
            blockNumber: BigNumber;
            returnData: string[];
        }>;
        getBlockHash(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<string>;
        getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLastBlockHash(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        all(calls: CallStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        getBlockHash(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLastBlockHash(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        all(calls: CallStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBlockHash(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEthBalance(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastBlockHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}