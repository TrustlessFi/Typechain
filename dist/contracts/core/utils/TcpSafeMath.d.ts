import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface TcpSafeMathInterface extends utils.Interface {
    functions: {
        "ONE()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ONE"): FunctionFragment;
    encodeFunctionData(functionFragment: "ONE", values?: undefined): string;
    decodeFunctionResult(functionFragment: "ONE", data: BytesLike): Result;
    events: {};
}
export interface TcpSafeMath extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TcpSafeMathInterface;
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
        ONE(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    ONE(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        ONE(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        ONE(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ONE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
