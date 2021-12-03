import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type CallStruct = {
    target: string;
    gasLimit: BigNumberish;
    callData: BytesLike;
};
export declare type CallStructOutput = [string, BigNumber, string] & {
    target: string;
    gasLimit: BigNumber;
    callData: string;
};
export declare type ResultStruct = {
    success: boolean;
    gasUsed: BigNumberish;
    returnData: BytesLike;
};
export declare type ResultStructOutput = [boolean, BigNumber, string] & {
    success: boolean;
    gasUsed: BigNumber;
    returnData: string;
};
export interface UniswapInterfaceMulticallInterface extends utils.Interface {
    functions: {
        "getCurrentBlockTimestamp()": FunctionFragment;
        "getEthBalance(address)": FunctionFragment;
        "multicall((address,uint256,bytes)[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getCurrentBlockTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEthBalance", values: [string]): string;
    encodeFunctionData(functionFragment: "multicall", values: [CallStruct[]]): string;
    decodeFunctionResult(functionFragment: "getCurrentBlockTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEthBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    events: {};
}
export interface UniswapInterfaceMulticall extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UniswapInterfaceMulticallInterface;
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
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<[BigNumber] & {
            timestamp: BigNumber;
        }>;
        getEthBalance(addr: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        multicall(calls: CallStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
    multicall(calls: CallStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(calls: CallStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            ResultStructOutput[]
        ] & {
            blockNumber: BigNumber;
            returnData: ResultStructOutput[];
        }>;
    };
    filters: {};
    estimateGas: {
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(calls: CallStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEthBalance(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(calls: CallStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
