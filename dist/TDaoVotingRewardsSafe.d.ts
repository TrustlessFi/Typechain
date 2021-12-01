import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TDaoVotingRewardsSafeInterface extends utils.Interface {
    functions: {
        "auth()": FunctionFragment;
        "safeTransfer(address,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "auth", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeTransfer", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "auth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransfer", data: BytesLike): Result;
    events: {};
}
export interface TDaoVotingRewardsSafe extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TDaoVotingRewardsSafeInterface;
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
        auth(overrides?: CallOverrides): Promise<[string]>;
        safeTransfer(token: string, dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    auth(overrides?: CallOverrides): Promise<string>;
    safeTransfer(token: string, dest: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        auth(overrides?: CallOverrides): Promise<string>;
        safeTransfer(token: string, dest: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        auth(overrides?: CallOverrides): Promise<BigNumber>;
        safeTransfer(token: string, dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        auth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safeTransfer(token: string, dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
