import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TDaoPositionNFTDescriptorInterface extends utils.Interface {
    functions: {
        "getTokenURI(uint64)": FunctionFragment;
        "tDao()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getTokenURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "tDao", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getTokenURI", data: BytesLike): Result;
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
        getTokenURI(positionID: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        tDao(overrides?: CallOverrides): Promise<[string]>;
    };
    getTokenURI(positionID: BigNumberish, overrides?: CallOverrides): Promise<string>;
    tDao(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getTokenURI(positionID: BigNumberish, overrides?: CallOverrides): Promise<string>;
        tDao(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getTokenURI(positionID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tDao(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getTokenURI(positionID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tDao(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
