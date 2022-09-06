import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface MockTimeUniswapV3PoolDeployerInterface extends utils.Interface {
    functions: {
        "deploy(address,address,address,uint24,int24)": FunctionFragment;
        "parameters()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deploy" | "parameters"): FunctionFragment;
    encodeFunctionData(functionFragment: "deploy", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "parameters", values?: undefined): string;
    decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;
    events: {
        "PoolDeployed(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PoolDeployed"): EventFragment;
}
export interface PoolDeployedEventObject {
    pool: string;
}
export declare type PoolDeployedEvent = TypedEvent<[string], PoolDeployedEventObject>;
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
        deploy(factory: PromiseOrValue<string>, token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, tickSpacing: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
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
    deploy(factory: PromiseOrValue<string>, token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, tickSpacing: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
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
        deploy(factory: PromiseOrValue<string>, token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, tickSpacing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
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
        deploy(factory: PromiseOrValue<string>, token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, tickSpacing: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parameters(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        deploy(factory: PromiseOrValue<string>, token0: PromiseOrValue<string>, token1: PromiseOrValue<string>, fee: PromiseOrValue<BigNumberish>, tickSpacing: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
