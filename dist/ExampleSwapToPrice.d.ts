import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ExampleSwapToPriceInterface extends utils.Interface {
    functions: {
        "factory()": FunctionFragment;
        "router()": FunctionFragment;
        "swapToPrice(address,address,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapToPrice", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapToPrice", data: BytesLike): Result;
    events: {};
}
export interface ExampleSwapToPrice extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ExampleSwapToPriceInterface;
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
        factory(overrides?: CallOverrides): Promise<[string]>;
        router(overrides?: CallOverrides): Promise<[string]>;
        swapToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, maxSpendTokenA: BigNumberish, maxSpendTokenB: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    factory(overrides?: CallOverrides): Promise<string>;
    router(overrides?: CallOverrides): Promise<string>;
    swapToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, maxSpendTokenA: BigNumberish, maxSpendTokenB: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        factory(overrides?: CallOverrides): Promise<string>;
        router(overrides?: CallOverrides): Promise<string>;
        swapToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, maxSpendTokenA: BigNumberish, maxSpendTokenB: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
        swapToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, maxSpendTokenA: BigNumberish, maxSpendTokenB: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapToPrice(tokenA: string, tokenB: string, truePriceTokenA: BigNumberish, truePriceTokenB: BigNumberish, maxSpendTokenA: BigNumberish, maxSpendTokenB: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
