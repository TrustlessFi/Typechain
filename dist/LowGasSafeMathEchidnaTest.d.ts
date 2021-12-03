import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface LowGasSafeMathEchidnaTestInterface extends utils.Interface {
    functions: {
        "checkAdd(uint256,uint256)": FunctionFragment;
        "checkAddi(int256,int256)": FunctionFragment;
        "checkMul(uint256,uint256)": FunctionFragment;
        "checkSub(uint256,uint256)": FunctionFragment;
        "checkSubi(int256,int256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "checkAdd", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkAddi", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkMul", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkSub", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkSubi", values: [BigNumberish, BigNumberish]): string;
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
        checkAdd(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        checkAddi(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        checkMul(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        checkSub(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        checkSubi(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
    };
    checkAdd(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<void>;
    checkAddi(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<void>;
    checkMul(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<void>;
    checkSub(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<void>;
    checkSubi(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        checkAdd(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkAddi(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkMul(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkSub(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkSubi(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        checkAdd(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkAddi(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkMul(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkSub(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkSubi(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkAdd(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkAddi(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkMul(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkSub(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkSubi(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
