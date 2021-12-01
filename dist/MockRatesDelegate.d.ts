import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MockRatesDelegateInterface extends utils.Interface {
    functions: {
        "governor()": FunctionFragment;
        "guardian()": FunctionFragment;
        "update(int256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "update", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
    events: {};
}
export interface MockRatesDelegate extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockRatesDelegateInterface;
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
        governor(overrides?: CallOverrides): Promise<[string]>;
        guardian(overrides?: CallOverrides): Promise<[string]>;
        update(newRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    governor(overrides?: CallOverrides): Promise<string>;
    guardian(overrides?: CallOverrides): Promise<string>;
    update(newRate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        governor(overrides?: CallOverrides): Promise<string>;
        guardian(overrides?: CallOverrides): Promise<string>;
        update(newRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        guardian(overrides?: CallOverrides): Promise<BigNumber>;
        update(newRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        update(newRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
