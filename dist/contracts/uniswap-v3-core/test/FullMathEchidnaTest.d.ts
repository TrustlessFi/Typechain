import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface FullMathEchidnaTestInterface extends utils.Interface {
    functions: {
        "checkMulDiv(uint256,uint256,uint256)": FunctionFragment;
        "checkMulDivRounding(uint256,uint256,uint256)": FunctionFragment;
        "checkMulDivRoundingUp(uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "checkMulDiv" | "checkMulDivRounding" | "checkMulDivRoundingUp"): FunctionFragment;
    encodeFunctionData(functionFragment: "checkMulDiv", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "checkMulDivRounding", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "checkMulDivRoundingUp", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "checkMulDiv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkMulDivRounding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkMulDivRoundingUp", data: BytesLike): Result;
    events: {};
}
export interface FullMathEchidnaTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FullMathEchidnaTestInterface;
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
        checkMulDiv(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        checkMulDivRounding(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        checkMulDivRoundingUp(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
    };
    checkMulDiv(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    checkMulDivRounding(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    checkMulDivRoundingUp(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        checkMulDiv(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        checkMulDivRounding(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        checkMulDivRoundingUp(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        checkMulDiv(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        checkMulDivRounding(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        checkMulDivRoundingUp(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkMulDiv(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkMulDivRounding(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkMulDivRoundingUp(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
