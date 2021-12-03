import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface INonfungibleTokenPositionDescriptorInterface extends utils.Interface {
    functions: {
        "tokenURI(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "tokenURI", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    events: {};
}
export interface INonfungibleTokenPositionDescriptor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: INonfungibleTokenPositionDescriptorInterface;
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
        tokenURI(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    tokenURI(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        tokenURI(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        tokenURI(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        tokenURI(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}