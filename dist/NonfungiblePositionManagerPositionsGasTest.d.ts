import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface NonfungiblePositionManagerPositionsGasTestInterface extends utils.Interface {
    functions: {
        "getGasCostOfPositions(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getGasCostOfPositions", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getGasCostOfPositions", data: BytesLike): Result;
    events: {};
}
export interface NonfungiblePositionManagerPositionsGasTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NonfungiblePositionManagerPositionsGasTestInterface;
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
        getGasCostOfPositions(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getGasCostOfPositions(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getGasCostOfPositions(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getGasCostOfPositions(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getGasCostOfPositions(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
