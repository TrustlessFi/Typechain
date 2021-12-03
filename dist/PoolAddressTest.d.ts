import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PoolAddressTestInterface extends utils.Interface {
    functions: {
        "POOL_INIT_CODE_HASH()": FunctionFragment;
        "computeAddress(address,address,address,uint24)": FunctionFragment;
        "getGasCostOfComputeAddress(address,address,address,uint24)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "POOL_INIT_CODE_HASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "computeAddress", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGasCostOfComputeAddress", values: [string, string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "POOL_INIT_CODE_HASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "computeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfComputeAddress", data: BytesLike): Result;
    events: {};
}
export interface PoolAddressTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PoolAddressTestInterface;
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
        POOL_INIT_CODE_HASH(overrides?: CallOverrides): Promise<[string]>;
        computeAddress(factory: string, token0: string, token1: string, fee: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getGasCostOfComputeAddress(factory: string, token0: string, token1: string, fee: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    POOL_INIT_CODE_HASH(overrides?: CallOverrides): Promise<string>;
    computeAddress(factory: string, token0: string, token1: string, fee: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getGasCostOfComputeAddress(factory: string, token0: string, token1: string, fee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        POOL_INIT_CODE_HASH(overrides?: CallOverrides): Promise<string>;
        computeAddress(factory: string, token0: string, token1: string, fee: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getGasCostOfComputeAddress(factory: string, token0: string, token1: string, fee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        POOL_INIT_CODE_HASH(overrides?: CallOverrides): Promise<BigNumber>;
        computeAddress(factory: string, token0: string, token1: string, fee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfComputeAddress(factory: string, token0: string, token1: string, fee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        POOL_INIT_CODE_HASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        computeAddress(factory: string, token0: string, token1: string, fee: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfComputeAddress(factory: string, token0: string, token1: string, fee: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}