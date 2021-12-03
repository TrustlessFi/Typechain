import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface UnsafeMathEchidnaTestInterface extends utils.Interface {
    functions: {
        "checkDivRoundingUp(uint256,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "checkDivRoundingUp", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "checkDivRoundingUp", data: BytesLike): Result;
    events: {};
}
export interface UnsafeMathEchidnaTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UnsafeMathEchidnaTestInterface;
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
        checkDivRoundingUp(x: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
    };
    checkDivRoundingUp(x: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        checkDivRoundingUp(x: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        checkDivRoundingUp(x: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkDivRoundingUp(x: BigNumberish, d: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
