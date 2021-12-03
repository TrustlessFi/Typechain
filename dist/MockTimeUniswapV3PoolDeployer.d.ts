import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MockTimeUniswapV3PoolDeployerInterface extends utils.Interface {
    functions: {
        "deploy(address,address,address,uint24,int24)": FunctionFragment;
        "parameters()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "deploy", values: [string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "parameters", values?: undefined): string;
    decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;
    events: {
        "PoolDeployed(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PoolDeployed"): EventFragment;
}
export declare type PoolDeployedEvent = TypedEvent<[string], {
    pool: string;
}>;
export declare type PoolDeployedEventFilter = TypedEventFilter<PoolDeployedEvent>;
export interface MockTimeUniswapV3PoolDeployer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockTimeUniswapV3PoolDeployerInterface;
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
        deploy(factory: string, token0: string, token1: string, fee: BigNumberish, tickSpacing: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        parameters(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            number,
            number
        ] & {
            factory: string;
            token0: string;
            token1: string;
            fee: number;
            tickSpacing: number;
        }>;
    };
    deploy(factory: string, token0: string, token1: string, fee: BigNumberish, tickSpacing: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    parameters(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        number,
        number
    ] & {
        factory: string;
        token0: string;
        token1: string;
        fee: number;
        tickSpacing: number;
    }>;
    callStatic: {
        deploy(factory: string, token0: string, token1: string, fee: BigNumberish, tickSpacing: BigNumberish, overrides?: CallOverrides): Promise<string>;
        parameters(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            number,
            number
        ] & {
            factory: string;
            token0: string;
            token1: string;
            fee: number;
            tickSpacing: number;
        }>;
    };
    filters: {
        "PoolDeployed(address)"(pool?: null): PoolDeployedEventFilter;
        PoolDeployed(pool?: null): PoolDeployedEventFilter;
    };
    estimateGas: {
        deploy(factory: string, token0: string, token1: string, fee: BigNumberish, tickSpacing: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        parameters(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        deploy(factory: string, token0: string, token1: string, fee: BigNumberish, tickSpacing: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
