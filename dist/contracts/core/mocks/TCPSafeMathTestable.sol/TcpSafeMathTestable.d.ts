import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface TcpSafeMathTestableInterface extends utils.Interface {
    functions: {
        "_div(uint256,uint256)": FunctionFragment;
        "_mul(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_div" | "_mul"): FunctionFragment;
    encodeFunctionData(functionFragment: "_div", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "_mul", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "_div", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_mul", data: BytesLike): Result;
    events: {};
}
export interface TcpSafeMathTestable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TcpSafeMathTestableInterface;
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
        _div(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        _mul(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
    };
    _div(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    _mul(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        _div(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        _mul(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        _div(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        _mul(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _div(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _mul(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
