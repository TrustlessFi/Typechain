import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface ITDaoPositionNFTDescriptorInterface extends utils.Interface {
    functions: {
        "getTokenDescription(uint256)": FunctionFragment;
        "getTokenName(uint256)": FunctionFragment;
        "getTokenSVG(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getTokenDescription" | "getTokenName" | "getTokenSVG"): FunctionFragment;
    encodeFunctionData(functionFragment: "getTokenDescription", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTokenName", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTokenSVG", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getTokenDescription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenSVG", data: BytesLike): Result;
    events: {};
}
export interface ITDaoPositionNFTDescriptor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITDaoPositionNFTDescriptorInterface;
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
        getTokenDescription(positionID: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getTokenName(positionID: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getTokenSVG(positionID: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    getTokenDescription(positionID: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getTokenName(positionID: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getTokenSVG(positionID: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getTokenDescription(positionID: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getTokenName(positionID: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getTokenSVG(positionID: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getTokenDescription(positionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenName(positionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenSVG(positionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getTokenDescription(positionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenName(positionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenSVG(positionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
