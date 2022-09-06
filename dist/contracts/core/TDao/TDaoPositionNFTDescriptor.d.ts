import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface TDaoPositionNFTDescriptorInterface extends utils.Interface {
    functions: {
        "getTokenDescription(uint256)": FunctionFragment;
        "getTokenName(uint256)": FunctionFragment;
        "getTokenSVG(uint256)": FunctionFragment;
        "tDao()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getTokenDescription" | "getTokenName" | "getTokenSVG" | "tDao"): FunctionFragment;
    encodeFunctionData(functionFragment: "getTokenDescription", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTokenName", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTokenSVG", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tDao", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getTokenDescription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenSVG", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tDao", data: BytesLike): Result;
    events: {};
}
export interface TDaoPositionNFTDescriptor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TDaoPositionNFTDescriptorInterface;
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
        getTokenDescription(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTokenName(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTokenSVG(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        tDao(overrides?: CallOverrides): Promise<[string]>;
    };
    getTokenDescription(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTokenName(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTokenSVG(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    tDao(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getTokenDescription(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTokenName(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTokenSVG(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        tDao(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getTokenDescription(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenName(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenSVG(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tDao(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getTokenDescription(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenName(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenSVG(positionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tDao(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
