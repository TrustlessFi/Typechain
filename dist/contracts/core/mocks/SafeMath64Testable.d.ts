import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface SafeMath64TestableInterface extends utils.Interface {
    functions: {
        "add(uint64,uint64)": FunctionFragment;
        "mul(uint64,uint64)": FunctionFragment;
        "sub(uint64,uint64)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "add" | "mul" | "sub"): FunctionFragment;
    encodeFunctionData(functionFragment: "add", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "mul", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "sub", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mul", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sub", data: BytesLike): Result;
    events: {};
}
export interface SafeMath64Testable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SafeMath64TestableInterface;
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
        add(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        mul(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        sub(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
    };
    add(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    mul(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    sub(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        add(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        mul(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        sub(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        add(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        mul(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        sub(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        add(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mul(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sub(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
