import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface LowGasSafeMathEchidnaTestInterface extends utils.Interface {
    functions: {
        "checkAdd(uint256,uint256)": FunctionFragment;
        "checkAddi(int256,int256)": FunctionFragment;
        "checkMul(uint256,uint256)": FunctionFragment;
        "checkSub(uint256,uint256)": FunctionFragment;
        "checkSubi(int256,int256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "checkAdd" | "checkAddi" | "checkMul" | "checkSub" | "checkSubi"): FunctionFragment;
    encodeFunctionData(functionFragment: "checkAdd", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "checkAddi", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "checkMul", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "checkSub", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "checkSubi", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "checkAdd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkAddi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkMul", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkSub", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkSubi", data: BytesLike): Result;
    events: {};
}
export interface LowGasSafeMathEchidnaTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LowGasSafeMathEchidnaTestInterface;
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
        checkAdd(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        checkAddi(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        checkMul(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        checkSub(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        checkSubi(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
    };
    checkAdd(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    checkAddi(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    checkMul(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    checkSub(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    checkSubi(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        checkAdd(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        checkAddi(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        checkMul(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        checkSub(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        checkSubi(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        checkAdd(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        checkAddi(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        checkMul(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        checkSub(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        checkSubi(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkAdd(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkAddi(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkMul(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkSub(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkSubi(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
