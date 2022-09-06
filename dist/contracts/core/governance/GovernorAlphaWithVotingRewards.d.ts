import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace GovernorAlphaWithVotingRewards {
    type ProposalInfoStruct = {
        targets: PromiseOrValue<string>[];
        signatures: PromiseOrValue<string>[];
        calldatas: PromiseOrValue<BytesLike>[];
        title: PromiseOrValue<string>;
        ipfsHash: PromiseOrValue<string>;
        proposer: PromiseOrValue<string>;
        eta: PromiseOrValue<BigNumberish>;
        id: PromiseOrValue<BigNumberish>;
        forVotes: PromiseOrValue<BigNumberish>;
        startBlock: PromiseOrValue<BigNumberish>;
        endBlock: PromiseOrValue<BigNumberish>;
        canceled: PromiseOrValue<boolean>;
        executed: PromiseOrValue<boolean>;
        againstVotes: PromiseOrValue<BigNumberish>;
        initialSupply: PromiseOrValue<BigNumberish>;
        state: PromiseOrValue<BigNumberish>;
    };
    type ProposalInfoStructOutput = [
        string[],
        string[],
        string[],
        string,
        string,
        string,
        number,
        number,
        BigNumber,
        number,
        number,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        number
    ] & {
        targets: string[];
        signatures: string[];
        calldatas: string[];
        title: string;
        ipfsHash: string;
        proposer: string;
        eta: number;
        id: number;
        forVotes: BigNumber;
        startBlock: number;
        endBlock: number;
        canceled: boolean;
        executed: boolean;
        againstVotes: BigNumber;
        initialSupply: BigNumber;
        state: number;
    };
    type ProposalVoterInfoStruct = {
        id: PromiseOrValue<BigNumberish>;
        receipt: GovernorAlpha.ReceiptStruct;
        votingPower: PromiseOrValue<BigNumberish>;
        votingRewards: PromiseOrValue<BigNumberish>;
    };
    type ProposalVoterInfoStructOutput = [
        number,
        GovernorAlpha.ReceiptStructOutput,
        BigNumber,
        BigNumber
    ] & {
        id: number;
        receipt: GovernorAlpha.ReceiptStructOutput;
        votingPower: BigNumber;
        votingRewards: BigNumber;
    };
}
export declare namespace GovernorAlpha {
    type ReceiptStruct = {
        hasVoted: PromiseOrValue<boolean>;
        support: PromiseOrValue<boolean>;
        rewardReceived: PromiseOrValue<boolean>;
        votes: PromiseOrValue<BigNumberish>;
    };
    type ReceiptStructOutput = [boolean, boolean, boolean, BigNumber] & {
        hasVoted: boolean;
        support: boolean;
        rewardReceived: boolean;
        votes: BigNumber;
    };
}
export interface GovernorAlphaWithVotingRewardsInterface extends utils.Interface {
    functions: {
        "BALLOT_TYPEHASH()": FunctionFragment;
        "DOMAIN_TYPEHASH()": FunctionFragment;
        "INFLATION_PERCENTAGE()": FunctionFragment;
        "__abdicate()": FunctionFragment;
        "cancel(uint256)": FunctionFragment;
        "castVote(uint256,bool)": FunctionFragment;
        "castVoteBySig(uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "claimVotingRewards(uint256[])": FunctionFragment;
        "countVotingRewards(uint256,address)": FunctionFragment;
        "execute(uint256)": FunctionFragment;
        "getActions(uint256)": FunctionFragment;
        "getProposals()": FunctionFragment;
        "getProposalsVoterInfo(address)": FunctionFragment;
        "getReceipt(uint256,address)": FunctionFragment;
        "guardian()": FunctionFragment;
        "implementsVotingRewardsWithToken()": FunctionFragment;
        "latestProposalIds(address)": FunctionFragment;
        "name()": FunctionFragment;
        "proposalCount()": FunctionFragment;
        "proposalMaxOperations()": FunctionFragment;
        "proposalThreshold()": FunctionFragment;
        "proposals(uint256)": FunctionFragment;
        "propose(address[],string[],bytes[],string,string)": FunctionFragment;
        "queue(uint256)": FunctionFragment;
        "quorumVotes()": FunctionFragment;
        "state(uint256)": FunctionFragment;
        "timelock()": FunctionFragment;
        "votingDelay()": FunctionFragment;
        "votingPeriod()": FunctionFragment;
        "votingPeriodBlocks()": FunctionFragment;
        "votingToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BALLOT_TYPEHASH" | "DOMAIN_TYPEHASH" | "INFLATION_PERCENTAGE" | "__abdicate" | "cancel" | "castVote" | "castVoteBySig" | "claimVotingRewards" | "countVotingRewards" | "execute" | "getActions" | "getProposals" | "getProposalsVoterInfo" | "getReceipt" | "guardian" | "implementsVotingRewardsWithToken" | "latestProposalIds" | "name" | "proposalCount" | "proposalMaxOperations" | "proposalThreshold" | "proposals" | "propose" | "queue" | "quorumVotes" | "state" | "timelock" | "votingDelay" | "votingPeriod" | "votingPeriodBlocks" | "votingToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "BALLOT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "INFLATION_PERCENTAGE", values?: undefined): string;
    encodeFunctionData(functionFragment: "__abdicate", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancel", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "castVote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "castVoteBySig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "claimVotingRewards", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "countVotingRewards", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "execute", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getActions", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getProposals", values?: undefined): string;
    encodeFunctionData(functionFragment: "getProposalsVoterInfo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReceipt", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "implementsVotingRewardsWithToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestProposalIds", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalMaxOperations", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposals", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "propose", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<string>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "queue", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "quorumVotes", values?: undefined): string;
    encodeFunctionData(functionFragment: "state", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingPeriodBlocks", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BALLOT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INFLATION_PERCENTAGE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "__abdicate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimVotingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "countVotingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalsVoterInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReceipt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementsVotingRewardsWithToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestProposalIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalMaxOperations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingPeriodBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingToken", data: BytesLike): Result;
    events: {
        "ProposalCanceled(uint256)": EventFragment;
        "ProposalCreated(uint256,address)": EventFragment;
        "ProposalExecuted(uint256)": EventFragment;
        "ProposalQueued(uint256,uint256)": EventFragment;
        "VoteCast(address,uint256,bool,uint256)": EventFragment;
        "VotingRewardsDistributed(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingRewardsDistributed"): EventFragment;
}
export interface ProposalCanceledEventObject {
    id: BigNumber;
}
export declare type ProposalCanceledEvent = TypedEvent<[
    BigNumber
], ProposalCanceledEventObject>;
export declare type ProposalCanceledEventFilter = TypedEventFilter<ProposalCanceledEvent>;
export interface ProposalCreatedEventObject {
    id: BigNumber;
    proposer: string;
}
export declare type ProposalCreatedEvent = TypedEvent<[
    BigNumber,
    string
], ProposalCreatedEventObject>;
export declare type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;
export interface ProposalExecutedEventObject {
    id: BigNumber;
}
export declare type ProposalExecutedEvent = TypedEvent<[
    BigNumber
], ProposalExecutedEventObject>;
export declare type ProposalExecutedEventFilter = TypedEventFilter<ProposalExecutedEvent>;
export interface ProposalQueuedEventObject {
    id: BigNumber;
    eta: BigNumber;
}
export declare type ProposalQueuedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalQueuedEventObject>;
export declare type ProposalQueuedEventFilter = TypedEventFilter<ProposalQueuedEvent>;
export interface VoteCastEventObject {
    voter: string;
    proposalId: BigNumber;
    support: boolean;
    votes: BigNumber;
}
export declare type VoteCastEvent = TypedEvent<[
    string,
    BigNumber,
    boolean,
    BigNumber
], VoteCastEventObject>;
export declare type VoteCastEventFilter = TypedEventFilter<VoteCastEvent>;
export interface VotingRewardsDistributedEventObject {
    voter: string;
    count: BigNumber;
}
export declare type VotingRewardsDistributedEvent = TypedEvent<[
    string,
    BigNumber
], VotingRewardsDistributedEventObject>;
export declare type VotingRewardsDistributedEventFilter = TypedEventFilter<VotingRewardsDistributedEvent>;
export interface GovernorAlphaWithVotingRewards extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GovernorAlphaWithVotingRewardsInterface;
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
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        INFLATION_PERCENTAGE(overrides?: CallOverrides): Promise<[BigNumber]>;
        __abdicate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancel(proposalId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        castVote(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        castVoteBySig(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimVotingRewards(proposalIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        countVotingRewards(proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        execute(proposalId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getActions(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string[],
            string[],
            string[]
        ] & {
            targets: string[];
            signatures: string[];
            calldatas: string[];
        }>;
        getProposals(overrides?: CallOverrides): Promise<[
            GovernorAlphaWithVotingRewards.ProposalInfoStructOutput[]
        ] & {
            proposalsInfo: GovernorAlphaWithVotingRewards.ProposalInfoStructOutput[];
        }>;
        getProposalsVoterInfo(voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            GovernorAlphaWithVotingRewards.ProposalVoterInfoStructOutput[]
        ] & {
            proposalsVoterInfo: GovernorAlphaWithVotingRewards.ProposalVoterInfoStructOutput[];
        }>;
        getReceipt(proposalId: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[GovernorAlpha.ReceiptStructOutput]>;
        guardian(overrides?: CallOverrides): Promise<[string]>;
        implementsVotingRewardsWithToken(overrides?: CallOverrides): Promise<[string]>;
        latestProposalIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        proposalCount(overrides?: CallOverrides): Promise<[number]>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposals(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            number,
            number,
            BigNumber,
            number,
            number,
            boolean,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            title: string;
            ipfsHash: string;
            proposer: string;
            eta: number;
            id: number;
            forVotes: BigNumber;
            startBlock: number;
            endBlock: number;
            canceled: boolean;
            executed: boolean;
            againstVotes: BigNumber;
            initialSupply: BigNumber;
        }>;
        propose(targets: PromiseOrValue<string>[], signatures: PromiseOrValue<string>[], calldatas: PromiseOrValue<BytesLike>[], title: PromiseOrValue<string>, ipfsHash: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        queue(proposalId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        quorumVotes(overrides?: CallOverrides): Promise<[BigNumber]>;
        state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        timelock(overrides?: CallOverrides): Promise<[string]>;
        votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        votingPeriodBlocks(overrides?: CallOverrides): Promise<[number]>;
        votingToken(overrides?: CallOverrides): Promise<[string]>;
    };
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    INFLATION_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;
    __abdicate(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancel(proposalId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    castVote(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    castVoteBySig(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimVotingRewards(proposalIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    countVotingRewards(proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    execute(proposalId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getActions(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string[],
        string[],
        string[]
    ] & {
        targets: string[];
        signatures: string[];
        calldatas: string[];
    }>;
    getProposals(overrides?: CallOverrides): Promise<GovernorAlphaWithVotingRewards.ProposalInfoStructOutput[]>;
    getProposalsVoterInfo(voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<GovernorAlphaWithVotingRewards.ProposalVoterInfoStructOutput[]>;
    getReceipt(proposalId: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<GovernorAlpha.ReceiptStructOutput>;
    guardian(overrides?: CallOverrides): Promise<string>;
    implementsVotingRewardsWithToken(overrides?: CallOverrides): Promise<string>;
    latestProposalIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    proposalCount(overrides?: CallOverrides): Promise<number>;
    proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;
    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    proposals(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        number,
        number,
        BigNumber,
        number,
        number,
        boolean,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        title: string;
        ipfsHash: string;
        proposer: string;
        eta: number;
        id: number;
        forVotes: BigNumber;
        startBlock: number;
        endBlock: number;
        canceled: boolean;
        executed: boolean;
        againstVotes: BigNumber;
        initialSupply: BigNumber;
    }>;
    propose(targets: PromiseOrValue<string>[], signatures: PromiseOrValue<string>[], calldatas: PromiseOrValue<BytesLike>[], title: PromiseOrValue<string>, ipfsHash: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    queue(proposalId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
    state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    timelock(overrides?: CallOverrides): Promise<string>;
    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    votingPeriodBlocks(overrides?: CallOverrides): Promise<number>;
    votingToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        INFLATION_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;
        __abdicate(overrides?: CallOverrides): Promise<void>;
        cancel(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        castVote(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        castVoteBySig(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        claimVotingRewards(proposalIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        countVotingRewards(proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        execute(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getActions(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string[],
            string[],
            string[]
        ] & {
            targets: string[];
            signatures: string[];
            calldatas: string[];
        }>;
        getProposals(overrides?: CallOverrides): Promise<GovernorAlphaWithVotingRewards.ProposalInfoStructOutput[]>;
        getProposalsVoterInfo(voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<GovernorAlphaWithVotingRewards.ProposalVoterInfoStructOutput[]>;
        getReceipt(proposalId: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<GovernorAlpha.ReceiptStructOutput>;
        guardian(overrides?: CallOverrides): Promise<string>;
        implementsVotingRewardsWithToken(overrides?: CallOverrides): Promise<string>;
        latestProposalIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        proposalCount(overrides?: CallOverrides): Promise<number>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            number,
            number,
            BigNumber,
            number,
            number,
            boolean,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            title: string;
            ipfsHash: string;
            proposer: string;
            eta: number;
            id: number;
            forVotes: BigNumber;
            startBlock: number;
            endBlock: number;
            canceled: boolean;
            executed: boolean;
            againstVotes: BigNumber;
            initialSupply: BigNumber;
        }>;
        propose(targets: PromiseOrValue<string>[], signatures: PromiseOrValue<string>[], calldatas: PromiseOrValue<BytesLike>[], title: PromiseOrValue<string>, ipfsHash: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        queue(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        timelock(overrides?: CallOverrides): Promise<string>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriodBlocks(overrides?: CallOverrides): Promise<number>;
        votingToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ProposalCanceled(uint256)"(id?: PromiseOrValue<BigNumberish> | null): ProposalCanceledEventFilter;
        ProposalCanceled(id?: PromiseOrValue<BigNumberish> | null): ProposalCanceledEventFilter;
        "ProposalCreated(uint256,address)"(id?: PromiseOrValue<BigNumberish> | null, proposer?: PromiseOrValue<string> | null): ProposalCreatedEventFilter;
        ProposalCreated(id?: PromiseOrValue<BigNumberish> | null, proposer?: PromiseOrValue<string> | null): ProposalCreatedEventFilter;
        "ProposalExecuted(uint256)"(id?: PromiseOrValue<BigNumberish> | null): ProposalExecutedEventFilter;
        ProposalExecuted(id?: PromiseOrValue<BigNumberish> | null): ProposalExecutedEventFilter;
        "ProposalQueued(uint256,uint256)"(id?: PromiseOrValue<BigNumberish> | null, eta?: null): ProposalQueuedEventFilter;
        ProposalQueued(id?: PromiseOrValue<BigNumberish> | null, eta?: null): ProposalQueuedEventFilter;
        "VoteCast(address,uint256,bool,uint256)"(voter?: PromiseOrValue<string> | null, proposalId?: PromiseOrValue<BigNumberish> | null, support?: PromiseOrValue<boolean> | null, votes?: null): VoteCastEventFilter;
        VoteCast(voter?: PromiseOrValue<string> | null, proposalId?: PromiseOrValue<BigNumberish> | null, support?: PromiseOrValue<boolean> | null, votes?: null): VoteCastEventFilter;
        "VotingRewardsDistributed(address,uint256)"(voter?: PromiseOrValue<string> | null, count?: null): VotingRewardsDistributedEventFilter;
        VotingRewardsDistributed(voter?: PromiseOrValue<string> | null, count?: null): VotingRewardsDistributedEventFilter;
    };
    estimateGas: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        INFLATION_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;
        __abdicate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancel(proposalId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        castVote(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        castVoteBySig(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimVotingRewards(proposalIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        countVotingRewards(proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        execute(proposalId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getActions(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getProposals(overrides?: CallOverrides): Promise<BigNumber>;
        getProposalsVoterInfo(voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReceipt(proposalId: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        guardian(overrides?: CallOverrides): Promise<BigNumber>;
        implementsVotingRewardsWithToken(overrides?: CallOverrides): Promise<BigNumber>;
        latestProposalIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        propose(targets: PromiseOrValue<string>[], signatures: PromiseOrValue<string>[], calldatas: PromiseOrValue<BytesLike>[], title: PromiseOrValue<string>, ipfsHash: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        queue(proposalId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<BigNumber>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        votingToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INFLATION_PERCENTAGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        __abdicate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancel(proposalId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        castVote(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        castVoteBySig(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimVotingRewards(proposalIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        countVotingRewards(proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(proposalId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getActions(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposalsVoterInfo(voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReceipt(proposalId: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementsVotingRewardsWithToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestProposalIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposals(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        propose(targets: PromiseOrValue<string>[], signatures: PromiseOrValue<string>[], calldatas: PromiseOrValue<BytesLike>[], title: PromiseOrValue<string>, ipfsHash: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        queue(proposalId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        quorumVotes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingPeriodBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
