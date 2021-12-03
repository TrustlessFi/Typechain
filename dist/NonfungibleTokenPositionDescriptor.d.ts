import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface NonfungibleTokenPositionDescriptorInterface extends utils.Interface {
    functions: {
        "WETH9()": FunctionFragment;
        "flipRatio(address,address,uint256)": FunctionFragment;
        "tokenRatioPriority(address,uint256)": FunctionFragment;
        "tokenURI(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
    encodeFunctionData(functionFragment: "flipRatio", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenRatioPriority", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flipRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenRatioPriority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    events: {};
}
export interface NonfungibleTokenPositionDescriptor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NonfungibleTokenPositionDescriptorInterface;
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
        WETH9(overrides?: CallOverrides): Promise<[string]>;
        flipRatio(token0: string, token1: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        tokenRatioPriority(token: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    WETH9(overrides?: CallOverrides): Promise<string>;
    flipRatio(token0: string, token1: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    tokenRatioPriority(token: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        WETH9(overrides?: CallOverrides): Promise<string>;
        flipRatio(token0: string, token1: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        tokenRatioPriority(token: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        WETH9(overrides?: CallOverrides): Promise<BigNumber>;
        flipRatio(token0: string, token1: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenRatioPriority(token: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flipRatio(token0: string, token1: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenRatioPriority(token: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}