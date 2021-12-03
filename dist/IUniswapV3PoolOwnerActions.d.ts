import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IUniswapV3PoolOwnerActionsInterface extends utils.Interface {
    functions: {
        "collectProtocol(address,uint128,uint128)": FunctionFragment;
        "setFeeProtocol(uint8,uint8)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "collectProtocol", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setFeeProtocol", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "collectProtocol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeProtocol", data: BytesLike): Result;
    events: {};
}
export interface IUniswapV3PoolOwnerActions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniswapV3PoolOwnerActionsInterface;
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
        collectProtocol(recipient: string, amount0Requested: BigNumberish, amount1Requested: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFeeProtocol(feeProtocol0: BigNumberish, feeProtocol1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    collectProtocol(recipient: string, amount0Requested: BigNumberish, amount1Requested: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFeeProtocol(feeProtocol0: BigNumberish, feeProtocol1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        collectProtocol(recipient: string, amount0Requested: BigNumberish, amount1Requested: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        setFeeProtocol(feeProtocol0: BigNumberish, feeProtocol1: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        collectProtocol(recipient: string, amount0Requested: BigNumberish, amount1Requested: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFeeProtocol(feeProtocol0: BigNumberish, feeProtocol1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        collectProtocol(recipient: string, amount0Requested: BigNumberish, amount1Requested: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFeeProtocol(feeProtocol0: BigNumberish, feeProtocol1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
