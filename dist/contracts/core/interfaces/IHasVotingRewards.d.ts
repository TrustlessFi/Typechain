import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IHasVotingRewardsInterface extends utils.Interface {
    functions: {
        "claimVotingRewards(uint256[])": FunctionFragment;
        "implementsVotingRewardsWithToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claimVotingRewards" | "implementsVotingRewardsWithToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "claimVotingRewards", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "implementsVotingRewardsWithToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "claimVotingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementsVotingRewardsWithToken", data: BytesLike): Result;
    events: {
        "VotingRewardsDistributed(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "VotingRewardsDistributed"): EventFragment;
}
export interface VotingRewardsDistributedEventObject {
    voter: string;
    count: BigNumber;
}
export declare type VotingRewardsDistributedEvent = TypedEvent<[
    string,
    BigNumber
], VotingRewardsDistributedEventObject>;
export declare type VotingRewardsDistributedEventFilter = TypedEventFilter<VotingRewardsDistributedEvent>;
export interface IHasVotingRewards extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IHasVotingRewardsInterface;
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
        claimVotingRewards(proposalIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        implementsVotingRewardsWithToken(overrides?: CallOverrides): Promise<[string] & {
            votingToken: string;
        }>;
    };
    claimVotingRewards(proposalIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    implementsVotingRewardsWithToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        claimVotingRewards(proposalIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        implementsVotingRewardsWithToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "VotingRewardsDistributed(address,uint256)"(voter?: PromiseOrValue<string> | null, count?: null): VotingRewardsDistributedEventFilter;
        VotingRewardsDistributed(voter?: PromiseOrValue<string> | null, count?: null): VotingRewardsDistributedEventFilter;
    };
    estimateGas: {
        claimVotingRewards(proposalIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        implementsVotingRewardsWithToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        claimVotingRewards(proposalIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        implementsVotingRewardsWithToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
