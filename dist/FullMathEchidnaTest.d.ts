import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FullMathEchidnaTestInterface extends utils.Interface {
    functions: {
        "checkMulDiv(uint256,uint256,uint256)": FunctionFragment;
        "checkMulDivRounding(uint256,uint256,uint256)": FunctionFragment;
        "checkMulDivRoundingUp(uint256,uint256,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "checkMulDiv", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkMulDivRounding", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkMulDivRoundingUp", values: [BigNumberish, BigNumberish, BigNumberish]): string;
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
        checkMulDiv(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        checkMulDivRounding(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        checkMulDivRoundingUp(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
    };
    checkMulDiv(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<void>;
    checkMulDivRounding(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<void>;
    checkMulDivRoundingUp(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        checkMulDiv(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkMulDivRounding(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkMulDivRoundingUp(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        checkMulDiv(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkMulDivRounding(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkMulDivRoundingUp(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkMulDiv(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkMulDivRounding(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkMulDivRoundingUp(x: BigNumberish, y: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
