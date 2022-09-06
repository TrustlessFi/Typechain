import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface UnsafeMathEchidnaTestInterface extends utils.Interface {
    functions: {
        "checkDivRoundingUp(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "checkDivRoundingUp"): FunctionFragment;
    encodeFunctionData(functionFragment: "checkDivRoundingUp", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
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
        checkDivRoundingUp(x: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
    };
    checkDivRoundingUp(x: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        checkDivRoundingUp(x: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        checkDivRoundingUp(x: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkDivRoundingUp(x: PromiseOrValue<BigNumberish>, d: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
