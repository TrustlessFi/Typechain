import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MathTestableInterface extends utils.Interface {
    functions: {
        "_sqrt(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_sqrt", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_sqrt", data: BytesLike): Result;
    events: {};
}
export interface MathTestable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MathTestableInterface;
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
        _sqrt(y: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
    };
    _sqrt(y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        _sqrt(y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        _sqrt(y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _sqrt(y: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
