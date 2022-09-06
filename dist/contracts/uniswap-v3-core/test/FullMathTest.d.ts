import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface FullMathTestInterface extends utils.Interface {
    functions: {
        "mulDiv(uint256,uint256,uint256)": FunctionFragment;
        "mulDivRoundingUp(uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "mulDiv" | "mulDivRoundingUp"): FunctionFragment;
    encodeFunctionData(functionFragment: "mulDiv", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "mulDivRoundingUp", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "mulDiv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mulDivRoundingUp", data: BytesLike): Result;
    events: {};
}
export interface FullMathTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FullMathTestInterface;
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
        mulDiv(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        mulDivRoundingUp(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    mulDiv(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    mulDivRoundingUp(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        mulDiv(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        mulDivRoundingUp(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        mulDiv(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        mulDivRoundingUp(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        mulDiv(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mulDivRoundingUp(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
