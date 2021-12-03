import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BitMathEchidnaTestInterface extends utils.Interface {
    functions: {
        "leastSignificantBitInvariant(uint256)": FunctionFragment;
        "mostSignificantBitInvariant(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "leastSignificantBitInvariant", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "mostSignificantBitInvariant", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "leastSignificantBitInvariant", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mostSignificantBitInvariant", data: BytesLike): Result;
    events: {};
}
export interface BitMathEchidnaTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BitMathEchidnaTestInterface;
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
        leastSignificantBitInvariant(input: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        mostSignificantBitInvariant(input: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
    };
    leastSignificantBitInvariant(input: BigNumberish, overrides?: CallOverrides): Promise<void>;
    mostSignificantBitInvariant(input: BigNumberish, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        leastSignificantBitInvariant(input: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mostSignificantBitInvariant(input: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        leastSignificantBitInvariant(input: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mostSignificantBitInvariant(input: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        leastSignificantBitInvariant(input: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mostSignificantBitInvariant(input: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
