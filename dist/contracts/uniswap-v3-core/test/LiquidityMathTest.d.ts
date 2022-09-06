import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface LiquidityMathTestInterface extends utils.Interface {
    functions: {
        "addDelta(uint128,int128)": FunctionFragment;
        "getGasCostOfAddDelta(uint128,int128)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addDelta" | "getGasCostOfAddDelta"): FunctionFragment;
    encodeFunctionData(functionFragment: "addDelta", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getGasCostOfAddDelta", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "addDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfAddDelta", data: BytesLike): Result;
    events: {};
}
export interface LiquidityMathTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LiquidityMathTestInterface;
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
        addDelta(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            z: BigNumber;
        }>;
        getGasCostOfAddDelta(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    addDelta(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getGasCostOfAddDelta(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addDelta(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfAddDelta(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        addDelta(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfAddDelta(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addDelta(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfAddDelta(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
