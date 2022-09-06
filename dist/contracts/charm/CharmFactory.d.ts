import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace CharmFactory {
    type ConstructorParamsStruct = {
        Weth: PromiseOrValue<string>;
    };
    type ConstructorParamsStructOutput = [string] & {
        Weth: string;
    };
}
export interface CharmFactoryInterface extends utils.Interface {
    functions: {
        "createWrapper(address)": FunctionFragment;
        "poolToWrapper(address)": FunctionFragment;
        "wrapperToPool(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createWrapper" | "poolToWrapper" | "wrapperToPool"): FunctionFragment;
    encodeFunctionData(functionFragment: "createWrapper", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "poolToWrapper", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "wrapperToPool", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "createWrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolToWrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrapperToPool", data: BytesLike): Result;
    events: {};
}
export interface CharmFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CharmFactoryInterface;
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
        createWrapper(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        poolToWrapper(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        wrapperToPool(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
    };
    createWrapper(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    poolToWrapper(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    wrapperToPool(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        createWrapper(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        poolToWrapper(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        wrapperToPool(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        createWrapper(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        poolToWrapper(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        wrapperToPool(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createWrapper(pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        poolToWrapper(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wrapperToPool(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
