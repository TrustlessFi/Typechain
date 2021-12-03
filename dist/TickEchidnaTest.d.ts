import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TickEchidnaTestInterface extends utils.Interface {
    functions: {
        "checkTickSpacingToParametersInvariants(int24)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "checkTickSpacingToParametersInvariants", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "checkTickSpacingToParametersInvariants", data: BytesLike): Result;
    events: {};
}
export interface TickEchidnaTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TickEchidnaTestInterface;
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
        checkTickSpacingToParametersInvariants(tickSpacing: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
    };
    checkTickSpacingToParametersInvariants(tickSpacing: BigNumberish, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        checkTickSpacingToParametersInvariants(tickSpacing: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        checkTickSpacingToParametersInvariants(tickSpacing: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkTickSpacingToParametersInvariants(tickSpacing: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
