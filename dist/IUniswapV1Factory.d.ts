import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IUniswapV1FactoryInterface extends utils.Interface {
    functions: {
        "getExchange(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getExchange", values: [string]): string;
    decodeFunctionResult(functionFragment: "getExchange", data: BytesLike): Result;
    events: {};
}
export interface IUniswapV1Factory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniswapV1FactoryInterface;
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
        getExchange(arg0: string, overrides?: CallOverrides): Promise<[string]>;
    };
    getExchange(arg0: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getExchange(arg0: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getExchange(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getExchange(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
