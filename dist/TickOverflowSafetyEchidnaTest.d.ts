import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TickOverflowSafetyEchidnaTestInterface extends utils.Interface {
    functions: {
        "increaseFeeGrowthGlobal0X128(uint256)": FunctionFragment;
        "increaseFeeGrowthGlobal1X128(uint256)": FunctionFragment;
        "moveToTick(int24)": FunctionFragment;
        "setPosition(int24,int24,int128)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "increaseFeeGrowthGlobal0X128", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseFeeGrowthGlobal1X128", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "moveToTick", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPosition", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "increaseFeeGrowthGlobal0X128", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseFeeGrowthGlobal1X128", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moveToTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPosition", data: BytesLike): Result;
    events: {};
}
export interface TickOverflowSafetyEchidnaTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TickOverflowSafetyEchidnaTestInterface;
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
        increaseFeeGrowthGlobal0X128(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increaseFeeGrowthGlobal1X128(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        moveToTick(target: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPosition(tickLower: BigNumberish, tickUpper: BigNumberish, liquidityDelta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    increaseFeeGrowthGlobal0X128(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increaseFeeGrowthGlobal1X128(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    moveToTick(target: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPosition(tickLower: BigNumberish, tickUpper: BigNumberish, liquidityDelta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        increaseFeeGrowthGlobal0X128(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        increaseFeeGrowthGlobal1X128(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        moveToTick(target: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPosition(tickLower: BigNumberish, tickUpper: BigNumberish, liquidityDelta: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        increaseFeeGrowthGlobal0X128(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increaseFeeGrowthGlobal1X128(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        moveToTick(target: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPosition(tickLower: BigNumberish, tickUpper: BigNumberish, liquidityDelta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        increaseFeeGrowthGlobal0X128(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increaseFeeGrowthGlobal1X128(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        moveToTick(target: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPosition(tickLower: BigNumberish, tickUpper: BigNumberish, liquidityDelta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
