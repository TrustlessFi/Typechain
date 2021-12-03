import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface LiquidityMathTestInterface extends utils.Interface {
    functions: {
        "addDelta(uint128,int128)": FunctionFragment;
        "getGasCostOfAddDelta(uint128,int128)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addDelta", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGasCostOfAddDelta", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfAddDelta", data: BytesLike): Result;
    events: {};
}
export interface LiquidityMathTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LiquidityMathTestInterface;
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
        addDelta(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            z: BigNumber;
        }>;
        getGasCostOfAddDelta(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    addDelta(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getGasCostOfAddDelta(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addDelta(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfAddDelta(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        addDelta(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfAddDelta(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addDelta(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfAddDelta(x: BigNumberish, y: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
