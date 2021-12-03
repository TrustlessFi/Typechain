import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PoolInitializerInterface extends utils.Interface {
    functions: {
        "WETH9()": FunctionFragment;
        "createAndInitializePoolIfNecessary(address,address,uint24,uint160)": FunctionFragment;
        "factory()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
    encodeFunctionData(functionFragment: "createAndInitializePoolIfNecessary", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndInitializePoolIfNecessary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    events: {};
}
export interface PoolInitializer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PoolInitializerInterface;
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
        WETH9(overrides?: CallOverrides): Promise<[string]>;
        createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
    };
    WETH9(overrides?: CallOverrides): Promise<string>;
    createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        WETH9(overrides?: CallOverrides): Promise<string>;
        createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<string>;
        factory(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        WETH9(overrides?: CallOverrides): Promise<BigNumber>;
        createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
