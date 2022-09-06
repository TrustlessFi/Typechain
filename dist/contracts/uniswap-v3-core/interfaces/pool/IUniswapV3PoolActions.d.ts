import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IUniswapV3PoolActionsInterface extends utils.Interface {
    functions: {
        "burn(int24,int24,uint128)": FunctionFragment;
        "collect(address,int24,int24,uint128,uint128)": FunctionFragment;
        "flash(address,uint256,uint256,bytes)": FunctionFragment;
        "increaseObservationCardinalityNext(uint16)": FunctionFragment;
        "initialize(uint160)": FunctionFragment;
        "mint(address,int24,int24,uint128,bytes)": FunctionFragment;
        "swap(address,bool,int256,uint160,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "burn" | "collect" | "flash" | "increaseObservationCardinalityNext" | "initialize" | "mint" | "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "burn", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "collect", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "flash", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "increaseObservationCardinalityNext", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "mint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseObservationCardinalityNext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    events: {};
}
export interface IUniswapV3PoolActions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniswapV3PoolActionsInterface;
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
        burn(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collect(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        flash(recipient: PromiseOrValue<string>, amount0: PromiseOrValue<BigNumberish>, amount1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increaseObservationCardinalityNext(observationCardinalityNext: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mint(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swap(recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    burn(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collect(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    flash(recipient: PromiseOrValue<string>, amount0: PromiseOrValue<BigNumberish>, amount1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increaseObservationCardinalityNext(observationCardinalityNext: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mint(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swap(recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        burn(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        collect(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        flash(recipient: PromiseOrValue<string>, amount0: PromiseOrValue<BigNumberish>, amount1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        increaseObservationCardinalityNext(observationCardinalityNext: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        initialize(sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        mint(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        swap(recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        burn(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collect(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        flash(recipient: PromiseOrValue<string>, amount0: PromiseOrValue<BigNumberish>, amount1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increaseObservationCardinalityNext(observationCardinalityNext: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mint(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swap(recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        burn(tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collect(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount0Requested: PromiseOrValue<BigNumberish>, amount1Requested: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        flash(recipient: PromiseOrValue<string>, amount0: PromiseOrValue<BigNumberish>, amount1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increaseObservationCardinalityNext(observationCardinalityNext: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(sqrtPriceX96: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mint(recipient: PromiseOrValue<string>, tickLower: PromiseOrValue<BigNumberish>, tickUpper: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swap(recipient: PromiseOrValue<string>, zeroForOne: PromiseOrValue<boolean>, amountSpecified: PromiseOrValue<BigNumberish>, sqrtPriceLimitX96: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
