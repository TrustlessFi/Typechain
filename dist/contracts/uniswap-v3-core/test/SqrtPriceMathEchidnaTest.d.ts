import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface SqrtPriceMathEchidnaTestInterface extends utils.Interface {
    functions: {
        "getAmount0DeltaEquivalency(uint160,uint160,uint128,bool)": FunctionFragment;
        "getAmount0DeltaInvariants(uint160,uint160,uint128)": FunctionFragment;
        "getAmount0DeltaSignedInvariants(uint160,uint160,int128)": FunctionFragment;
        "getAmount1DeltaInvariants(uint160,uint160,uint128)": FunctionFragment;
        "getAmount1DeltaSignedInvariants(uint160,uint160,int128)": FunctionFragment;
        "getInRangeMintInvariants(uint160,uint160,uint160,int128)": FunctionFragment;
        "getNextSqrtPriceFromAmount0RoundingUpInvariants(uint160,uint128,uint256,bool)": FunctionFragment;
        "getNextSqrtPriceFromAmount1RoundingDownInvariants(uint160,uint128,uint256,bool)": FunctionFragment;
        "getNextSqrtPriceFromInputInvariants(uint160,uint128,uint256,bool)": FunctionFragment;
        "getNextSqrtPriceFromOutputInvariants(uint160,uint128,uint256,bool)": FunctionFragment;
        "getOutOfRangeMintInvariants(uint160,uint160,int128)": FunctionFragment;
        "mulDivRoundingUpInvariants(uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAmount0DeltaEquivalency" | "getAmount0DeltaInvariants" | "getAmount0DeltaSignedInvariants" | "getAmount1DeltaInvariants" | "getAmount1DeltaSignedInvariants" | "getInRangeMintInvariants" | "getNextSqrtPriceFromAmount0RoundingUpInvariants" | "getNextSqrtPriceFromAmount1RoundingDownInvariants" | "getNextSqrtPriceFromInputInvariants" | "getNextSqrtPriceFromOutputInvariants" | "getOutOfRangeMintInvariants" | "mulDivRoundingUpInvariants"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAmount0DeltaEquivalency", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getAmount0DeltaInvariants", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAmount0DeltaSignedInvariants", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAmount1DeltaInvariants", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAmount1DeltaSignedInvariants", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getInRangeMintInvariants", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getNextSqrtPriceFromAmount0RoundingUpInvariants", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getNextSqrtPriceFromAmount1RoundingDownInvariants", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getNextSqrtPriceFromInputInvariants", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getNextSqrtPriceFromOutputInvariants", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getOutOfRangeMintInvariants", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "mulDivRoundingUpInvariants", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "getAmount0DeltaEquivalency", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmount0DeltaInvariants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmount0DeltaSignedInvariants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmount1DeltaInvariants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmount1DeltaSignedInvariants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInRangeMintInvariants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextSqrtPriceFromAmount0RoundingUpInvariants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextSqrtPriceFromAmount1RoundingDownInvariants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextSqrtPriceFromInputInvariants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextSqrtPriceFromOutputInvariants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOutOfRangeMintInvariants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mulDivRoundingUpInvariants", data: BytesLike): Result;
    events: {};
}
export interface SqrtPriceMathEchidnaTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SqrtPriceMathEchidnaTestInterface;
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
        getAmount0DeltaEquivalency(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[void]>;
        getAmount0DeltaInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        getAmount0DeltaSignedInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        getAmount1DeltaInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        getAmount1DeltaSignedInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        getInRangeMintInvariants(sqrtLower: PromiseOrValue<BigNumberish>, sqrtCurrent: PromiseOrValue<BigNumberish>, sqrtUpper: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        getNextSqrtPriceFromAmount0RoundingUpInvariants(sqrtPX96: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, add: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[void]>;
        getNextSqrtPriceFromAmount1RoundingDownInvariants(sqrtPX96: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, add: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[void]>;
        getNextSqrtPriceFromInputInvariants(sqrtP: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountIn: PromiseOrValue<BigNumberish>, zeroForOne: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[void]>;
        getNextSqrtPriceFromOutputInvariants(sqrtP: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountOut: PromiseOrValue<BigNumberish>, zeroForOne: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[void]>;
        getOutOfRangeMintInvariants(sqrtA: PromiseOrValue<BigNumberish>, sqrtB: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        mulDivRoundingUpInvariants(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
    };
    getAmount0DeltaEquivalency(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    getAmount0DeltaInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    getAmount0DeltaSignedInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    getAmount1DeltaInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    getAmount1DeltaSignedInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    getInRangeMintInvariants(sqrtLower: PromiseOrValue<BigNumberish>, sqrtCurrent: PromiseOrValue<BigNumberish>, sqrtUpper: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    getNextSqrtPriceFromAmount0RoundingUpInvariants(sqrtPX96: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, add: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    getNextSqrtPriceFromAmount1RoundingDownInvariants(sqrtPX96: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, add: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    getNextSqrtPriceFromInputInvariants(sqrtP: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountIn: PromiseOrValue<BigNumberish>, zeroForOne: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    getNextSqrtPriceFromOutputInvariants(sqrtP: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountOut: PromiseOrValue<BigNumberish>, zeroForOne: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    getOutOfRangeMintInvariants(sqrtA: PromiseOrValue<BigNumberish>, sqrtB: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    mulDivRoundingUpInvariants(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        getAmount0DeltaEquivalency(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        getAmount0DeltaInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getAmount0DeltaSignedInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getAmount1DeltaInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getAmount1DeltaSignedInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getInRangeMintInvariants(sqrtLower: PromiseOrValue<BigNumberish>, sqrtCurrent: PromiseOrValue<BigNumberish>, sqrtUpper: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getNextSqrtPriceFromAmount0RoundingUpInvariants(sqrtPX96: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, add: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        getNextSqrtPriceFromAmount1RoundingDownInvariants(sqrtPX96: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, add: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        getNextSqrtPriceFromInputInvariants(sqrtP: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountIn: PromiseOrValue<BigNumberish>, zeroForOne: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        getNextSqrtPriceFromOutputInvariants(sqrtP: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountOut: PromiseOrValue<BigNumberish>, zeroForOne: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        getOutOfRangeMintInvariants(sqrtA: PromiseOrValue<BigNumberish>, sqrtB: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        mulDivRoundingUpInvariants(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getAmount0DeltaEquivalency(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmount0DeltaInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmount0DeltaSignedInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmount1DeltaInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmount1DeltaSignedInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getInRangeMintInvariants(sqrtLower: PromiseOrValue<BigNumberish>, sqrtCurrent: PromiseOrValue<BigNumberish>, sqrtUpper: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getNextSqrtPriceFromAmount0RoundingUpInvariants(sqrtPX96: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, add: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getNextSqrtPriceFromAmount1RoundingDownInvariants(sqrtPX96: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, add: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getNextSqrtPriceFromInputInvariants(sqrtP: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountIn: PromiseOrValue<BigNumberish>, zeroForOne: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getNextSqrtPriceFromOutputInvariants(sqrtP: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountOut: PromiseOrValue<BigNumberish>, zeroForOne: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getOutOfRangeMintInvariants(sqrtA: PromiseOrValue<BigNumberish>, sqrtB: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        mulDivRoundingUpInvariants(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getAmount0DeltaEquivalency(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmount0DeltaInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmount0DeltaSignedInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmount1DeltaInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmount1DeltaSignedInvariants(sqrtP: PromiseOrValue<BigNumberish>, sqrtQ: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInRangeMintInvariants(sqrtLower: PromiseOrValue<BigNumberish>, sqrtCurrent: PromiseOrValue<BigNumberish>, sqrtUpper: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNextSqrtPriceFromAmount0RoundingUpInvariants(sqrtPX96: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, add: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNextSqrtPriceFromAmount1RoundingDownInvariants(sqrtPX96: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, add: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNextSqrtPriceFromInputInvariants(sqrtP: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountIn: PromiseOrValue<BigNumberish>, zeroForOne: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNextSqrtPriceFromOutputInvariants(sqrtP: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, amountOut: PromiseOrValue<BigNumberish>, zeroForOne: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOutOfRangeMintInvariants(sqrtA: PromiseOrValue<BigNumberish>, sqrtB: PromiseOrValue<BigNumberish>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mulDivRoundingUpInvariants(x: PromiseOrValue<BigNumberish>, y: PromiseOrValue<BigNumberish>, z: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
