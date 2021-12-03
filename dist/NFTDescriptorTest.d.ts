import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructTokenURIParamsStruct = {
    tokenId: BigNumberish;
    quoteTokenAddress: string;
    baseTokenAddress: string;
    quoteTokenSymbol: string;
    baseTokenSymbol: string;
    quoteTokenDecimals: BigNumberish;
    baseTokenDecimals: BigNumberish;
    flipRatio: boolean;
    tickLower: BigNumberish;
    tickUpper: BigNumberish;
    tickCurrent: BigNumberish;
    tickSpacing: BigNumberish;
    fee: BigNumberish;
    poolAddress: string;
};
export declare type ConstructTokenURIParamsStructOutput = [
    BigNumber,
    string,
    string,
    string,
    string,
    number,
    number,
    boolean,
    number,
    number,
    number,
    number,
    number,
    string
] & {
    tokenId: BigNumber;
    quoteTokenAddress: string;
    baseTokenAddress: string;
    quoteTokenSymbol: string;
    baseTokenSymbol: string;
    quoteTokenDecimals: number;
    baseTokenDecimals: number;
    flipRatio: boolean;
    tickLower: number;
    tickUpper: number;
    tickCurrent: number;
    tickSpacing: number;
    fee: number;
    poolAddress: string;
};
export interface NFTDescriptorTestInterface extends utils.Interface {
    functions: {
        "addressToString(address)": FunctionFragment;
        "constructTokenURI((uint256,address,address,string,string,uint8,uint8,bool,int24,int24,int24,int24,uint24,address))": FunctionFragment;
        "feeToPercentString(uint24)": FunctionFragment;
        "fixedPointToDecimalString(uint160,uint8,uint8)": FunctionFragment;
        "generateSVGImage((uint256,address,address,string,string,uint8,uint8,bool,int24,int24,int24,int24,uint24,address))": FunctionFragment;
        "getGasCostOfConstructTokenURI((uint256,address,address,string,string,uint8,uint8,bool,int24,int24,int24,int24,uint24,address))": FunctionFragment;
        "isRare(uint256,address)": FunctionFragment;
        "rangeLocation(int24,int24)": FunctionFragment;
        "sliceTokenHex(address,uint256)": FunctionFragment;
        "tickToDecimalString(int24,int24,uint8,uint8,bool)": FunctionFragment;
        "tokenToColorHex(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addressToString", values: [string]): string;
    encodeFunctionData(functionFragment: "constructTokenURI", values: [ConstructTokenURIParamsStruct]): string;
    encodeFunctionData(functionFragment: "feeToPercentString", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "fixedPointToDecimalString", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "generateSVGImage", values: [ConstructTokenURIParamsStruct]): string;
    encodeFunctionData(functionFragment: "getGasCostOfConstructTokenURI", values: [ConstructTokenURIParamsStruct]): string;
    encodeFunctionData(functionFragment: "isRare", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "rangeLocation", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sliceTokenHex", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "tickToDecimalString", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "tokenToColorHex", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addressToString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "constructTokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeToPercentString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fixedPointToDecimalString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateSVGImage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasCostOfConstructTokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rangeLocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sliceTokenHex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tickToDecimalString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenToColorHex", data: BytesLike): Result;
    events: {};
}
export interface NFTDescriptorTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NFTDescriptorTestInterface;
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
        addressToString(_address: string, overrides?: CallOverrides): Promise<[string]>;
        constructTokenURI(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<[string]>;
        feeToPercentString(fee: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        fixedPointToDecimalString(sqrtRatioX96: BigNumberish, token0Decimals: BigNumberish, token1Decimals: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        generateSVGImage(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<[string]>;
        getGasCostOfConstructTokenURI(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<[BigNumber]>;
        isRare(tokenId: BigNumberish, poolAddress: string, overrides?: CallOverrides): Promise<[boolean]>;
        rangeLocation(tickLower: BigNumberish, tickUpper: BigNumberish, overrides?: CallOverrides): Promise<[string, string]>;
        sliceTokenHex(token: string, offset: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        tickToDecimalString(tick: BigNumberish, tickSpacing: BigNumberish, token0Decimals: BigNumberish, token1Decimals: BigNumberish, flipRatio: boolean, overrides?: CallOverrides): Promise<[string]>;
        tokenToColorHex(token: string, offset: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    addressToString(_address: string, overrides?: CallOverrides): Promise<string>;
    constructTokenURI(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<string>;
    feeToPercentString(fee: BigNumberish, overrides?: CallOverrides): Promise<string>;
    fixedPointToDecimalString(sqrtRatioX96: BigNumberish, token0Decimals: BigNumberish, token1Decimals: BigNumberish, overrides?: CallOverrides): Promise<string>;
    generateSVGImage(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<string>;
    getGasCostOfConstructTokenURI(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    isRare(tokenId: BigNumberish, poolAddress: string, overrides?: CallOverrides): Promise<boolean>;
    rangeLocation(tickLower: BigNumberish, tickUpper: BigNumberish, overrides?: CallOverrides): Promise<[string, string]>;
    sliceTokenHex(token: string, offset: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    tickToDecimalString(tick: BigNumberish, tickSpacing: BigNumberish, token0Decimals: BigNumberish, token1Decimals: BigNumberish, flipRatio: boolean, overrides?: CallOverrides): Promise<string>;
    tokenToColorHex(token: string, offset: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        addressToString(_address: string, overrides?: CallOverrides): Promise<string>;
        constructTokenURI(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<string>;
        feeToPercentString(fee: BigNumberish, overrides?: CallOverrides): Promise<string>;
        fixedPointToDecimalString(sqrtRatioX96: BigNumberish, token0Decimals: BigNumberish, token1Decimals: BigNumberish, overrides?: CallOverrides): Promise<string>;
        generateSVGImage(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<string>;
        getGasCostOfConstructTokenURI(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        isRare(tokenId: BigNumberish, poolAddress: string, overrides?: CallOverrides): Promise<boolean>;
        rangeLocation(tickLower: BigNumberish, tickUpper: BigNumberish, overrides?: CallOverrides): Promise<[string, string]>;
        sliceTokenHex(token: string, offset: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tickToDecimalString(tick: BigNumberish, tickSpacing: BigNumberish, token0Decimals: BigNumberish, token1Decimals: BigNumberish, flipRatio: boolean, overrides?: CallOverrides): Promise<string>;
        tokenToColorHex(token: string, offset: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        addressToString(_address: string, overrides?: CallOverrides): Promise<BigNumber>;
        constructTokenURI(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        feeToPercentString(fee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        fixedPointToDecimalString(sqrtRatioX96: BigNumberish, token0Decimals: BigNumberish, token1Decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        generateSVGImage(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getGasCostOfConstructTokenURI(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        isRare(tokenId: BigNumberish, poolAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        rangeLocation(tickLower: BigNumberish, tickUpper: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sliceTokenHex(token: string, offset: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tickToDecimalString(tick: BigNumberish, tickSpacing: BigNumberish, token0Decimals: BigNumberish, token1Decimals: BigNumberish, flipRatio: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        tokenToColorHex(token: string, offset: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addressToString(_address: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        constructTokenURI(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeToPercentString(fee: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fixedPointToDecimalString(sqrtRatioX96: BigNumberish, token0Decimals: BigNumberish, token1Decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generateSVGImage(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasCostOfConstructTokenURI(params: ConstructTokenURIParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isRare(tokenId: BigNumberish, poolAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rangeLocation(tickLower: BigNumberish, tickUpper: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sliceTokenHex(token: string, offset: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tickToDecimalString(tick: BigNumberish, tickSpacing: BigNumberish, token0Decimals: BigNumberish, token1Decimals: BigNumberish, flipRatio: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenToColorHex(token: string, offset: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}