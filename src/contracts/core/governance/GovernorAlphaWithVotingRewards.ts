/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export declare namespace GovernorAlphaWithVotingRewards {
  export type ProposalInfoStruct = {
    targets: string[];
    signatures: string[];
    calldatas: BytesLike[];
    title: string;
    ipfsHash: string;
    proposer: string;
    eta: BigNumberish;
    id: BigNumberish;
    forVotes: BigNumberish;
    startBlock: BigNumberish;
    endBlock: BigNumberish;
    canceled: boolean;
    executed: boolean;
    againstVotes: BigNumberish;
    initialSupply: BigNumberish;
    state: BigNumberish;
  };

  export type ProposalInfoStructOutput = [
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

  export type ProposalVoterInfoStruct = {
    id: BigNumberish;
    receipt: GovernorAlpha.ReceiptStruct;
    votingPower: BigNumberish;
    votingRewards: BigNumberish;
  };

  export type ProposalVoterInfoStructOutput = [
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
  export type ReceiptStruct = {
    hasVoted: boolean;
    support: boolean;
    rewardReceived: boolean;
    votes: BigNumberish;
  };

  export type ReceiptStructOutput = [boolean, boolean, boolean, BigNumber] & {
    hasVoted: boolean;
    support: boolean;
    rewardReceived: boolean;
    votes: BigNumber;
  };
}

export interface GovernorAlphaWithVotingRewardsInterface
  extends utils.Interface {
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

  getFunction(
    nameOrSignatureOrTopic:
      | "BALLOT_TYPEHASH"
      | "DOMAIN_TYPEHASH"
      | "INFLATION_PERCENTAGE"
      | "__abdicate"
      | "cancel"
      | "castVote"
      | "castVoteBySig"
      | "claimVotingRewards"
      | "countVotingRewards"
      | "execute"
      | "getActions"
      | "getProposals"
      | "getProposalsVoterInfo"
      | "getReceipt"
      | "guardian"
      | "implementsVotingRewardsWithToken"
      | "latestProposalIds"
      | "name"
      | "proposalCount"
      | "proposalMaxOperations"
      | "proposalThreshold"
      | "proposals"
      | "propose"
      | "queue"
      | "quorumVotes"
      | "state"
      | "timelock"
      | "votingDelay"
      | "votingPeriod"
      | "votingPeriodBlocks"
      | "votingToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BALLOT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DOMAIN_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INFLATION_PERCENTAGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "__abdicate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteBySig",
    values: [BigNumberish, boolean, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimVotingRewards",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "countVotingRewards",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getActions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalsVoterInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceipt",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "implementsVotingRewardsWithToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestProposalIds",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposalCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalMaxOperations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [string[], string[], BytesLike[], string, string]
  ): string;
  encodeFunctionData(functionFragment: "queue", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "quorumVotes",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "votingDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingPeriodBlocks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingToken",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BALLOT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DOMAIN_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INFLATION_PERCENTAGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "__abdicate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "castVoteBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimVotingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "countVotingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getActions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalsVoterInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReceipt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementsVotingRewardsWithToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestProposalIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalMaxOperations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quorumVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPeriodBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingToken",
    data: BytesLike
  ): Result;

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
export type ProposalCanceledEvent = TypedEvent<
  [BigNumber],
  ProposalCanceledEventObject
>;

export type ProposalCanceledEventFilter =
  TypedEventFilter<ProposalCanceledEvent>;

export interface ProposalCreatedEventObject {
  id: BigNumber;
  proposer: string;
}
export type ProposalCreatedEvent = TypedEvent<
  [BigNumber, string],
  ProposalCreatedEventObject
>;

export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;

export interface ProposalExecutedEventObject {
  id: BigNumber;
}
export type ProposalExecutedEvent = TypedEvent<
  [BigNumber],
  ProposalExecutedEventObject
>;

export type ProposalExecutedEventFilter =
  TypedEventFilter<ProposalExecutedEvent>;

export interface ProposalQueuedEventObject {
  id: BigNumber;
  eta: BigNumber;
}
export type ProposalQueuedEvent = TypedEvent<
  [BigNumber, BigNumber],
  ProposalQueuedEventObject
>;

export type ProposalQueuedEventFilter = TypedEventFilter<ProposalQueuedEvent>;

export interface VoteCastEventObject {
  voter: string;
  proposalId: BigNumber;
  support: boolean;
  votes: BigNumber;
}
export type VoteCastEvent = TypedEvent<
  [string, BigNumber, boolean, BigNumber],
  VoteCastEventObject
>;

export type VoteCastEventFilter = TypedEventFilter<VoteCastEvent>;

export interface VotingRewardsDistributedEventObject {
  voter: string;
  count: BigNumber;
}
export type VotingRewardsDistributedEvent = TypedEvent<
  [string, BigNumber],
  VotingRewardsDistributedEventObject
>;

export type VotingRewardsDistributedEventFilter =
  TypedEventFilter<VotingRewardsDistributedEvent>;

export interface GovernorAlphaWithVotingRewards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GovernorAlphaWithVotingRewardsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    INFLATION_PERCENTAGE(overrides?: CallOverrides): Promise<[BigNumber]>;

    __abdicate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancel(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    castVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    castVoteBySig(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimVotingRewards(
      proposalIDs: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    countVotingRewards(
      proposalID: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    execute(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getActions(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], string[], string[]] & {
        targets: string[];
        signatures: string[];
        calldatas: string[];
      }
    >;

    getProposals(
      overrides?: CallOverrides
    ): Promise<
      [GovernorAlphaWithVotingRewards.ProposalInfoStructOutput[]] & {
        proposalsInfo: GovernorAlphaWithVotingRewards.ProposalInfoStructOutput[];
      }
    >;

    getProposalsVoterInfo(
      voter: string,
      overrides?: CallOverrides
    ): Promise<
      [GovernorAlphaWithVotingRewards.ProposalVoterInfoStructOutput[]] & {
        proposalsVoterInfo: GovernorAlphaWithVotingRewards.ProposalVoterInfoStructOutput[];
      }
    >;

    getReceipt(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<[GovernorAlpha.ReceiptStructOutput]>;

    guardian(overrides?: CallOverrides): Promise<[string]>;

    implementsVotingRewardsWithToken(
      overrides?: CallOverrides
    ): Promise<[string]>;

    latestProposalIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    proposalCount(overrides?: CallOverrides): Promise<[number]>;

    proposalMaxOperations(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposalThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
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
      }
    >;

    propose(
      targets: string[],
      signatures: string[],
      calldatas: BytesLike[],
      title: string,
      ipfsHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queue(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    quorumVotes(overrides?: CallOverrides): Promise<[BigNumber]>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    timelock(overrides?: CallOverrides): Promise<[string]>;

    votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    votingPeriodBlocks(overrides?: CallOverrides): Promise<[number]>;

    votingToken(overrides?: CallOverrides): Promise<[string]>;
  };

  BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  INFLATION_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

  __abdicate(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancel(
    proposalId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  castVote(
    proposalId: BigNumberish,
    support: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  castVoteBySig(
    proposalId: BigNumberish,
    support: boolean,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimVotingRewards(
    proposalIDs: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  countVotingRewards(
    proposalID: BigNumberish,
    voter: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  execute(
    proposalId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getActions(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string[], string[], string[]] & {
      targets: string[];
      signatures: string[];
      calldatas: string[];
    }
  >;

  getProposals(
    overrides?: CallOverrides
  ): Promise<GovernorAlphaWithVotingRewards.ProposalInfoStructOutput[]>;

  getProposalsVoterInfo(
    voter: string,
    overrides?: CallOverrides
  ): Promise<GovernorAlphaWithVotingRewards.ProposalVoterInfoStructOutput[]>;

  getReceipt(
    proposalId: BigNumberish,
    voter: string,
    overrides?: CallOverrides
  ): Promise<GovernorAlpha.ReceiptStructOutput>;

  guardian(overrides?: CallOverrides): Promise<string>;

  implementsVotingRewardsWithToken(overrides?: CallOverrides): Promise<string>;

  latestProposalIds(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  proposalCount(overrides?: CallOverrides): Promise<number>;

  proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;

  proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  proposals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
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
    }
  >;

  propose(
    targets: string[],
    signatures: string[],
    calldatas: BytesLike[],
    title: string,
    ipfsHash: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queue(
    proposalId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;

  state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;

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

    cancel(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    castVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    castVoteBySig(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    claimVotingRewards(
      proposalIDs: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    countVotingRewards(
      proposalID: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    execute(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getActions(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], string[], string[]] & {
        targets: string[];
        signatures: string[];
        calldatas: string[];
      }
    >;

    getProposals(
      overrides?: CallOverrides
    ): Promise<GovernorAlphaWithVotingRewards.ProposalInfoStructOutput[]>;

    getProposalsVoterInfo(
      voter: string,
      overrides?: CallOverrides
    ): Promise<GovernorAlphaWithVotingRewards.ProposalVoterInfoStructOutput[]>;

    getReceipt(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<GovernorAlpha.ReceiptStructOutput>;

    guardian(overrides?: CallOverrides): Promise<string>;

    implementsVotingRewardsWithToken(
      overrides?: CallOverrides
    ): Promise<string>;

    latestProposalIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    proposalCount(overrides?: CallOverrides): Promise<number>;

    proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;

    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
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
      }
    >;

    propose(
      targets: string[],
      signatures: string[],
      calldatas: BytesLike[],
      title: string,
      ipfsHash: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queue(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;

    state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;

    timelock(overrides?: CallOverrides): Promise<string>;

    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    votingPeriodBlocks(overrides?: CallOverrides): Promise<number>;

    votingToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ProposalCanceled(uint256)"(
      id?: BigNumberish | null
    ): ProposalCanceledEventFilter;
    ProposalCanceled(id?: BigNumberish | null): ProposalCanceledEventFilter;

    "ProposalCreated(uint256,address)"(
      id?: BigNumberish | null,
      proposer?: string | null
    ): ProposalCreatedEventFilter;
    ProposalCreated(
      id?: BigNumberish | null,
      proposer?: string | null
    ): ProposalCreatedEventFilter;

    "ProposalExecuted(uint256)"(
      id?: BigNumberish | null
    ): ProposalExecutedEventFilter;
    ProposalExecuted(id?: BigNumberish | null): ProposalExecutedEventFilter;

    "ProposalQueued(uint256,uint256)"(
      id?: BigNumberish | null,
      eta?: null
    ): ProposalQueuedEventFilter;
    ProposalQueued(
      id?: BigNumberish | null,
      eta?: null
    ): ProposalQueuedEventFilter;

    "VoteCast(address,uint256,bool,uint256)"(
      voter?: string | null,
      proposalId?: BigNumberish | null,
      support?: boolean | null,
      votes?: null
    ): VoteCastEventFilter;
    VoteCast(
      voter?: string | null,
      proposalId?: BigNumberish | null,
      support?: boolean | null,
      votes?: null
    ): VoteCastEventFilter;

    "VotingRewardsDistributed(address,uint256)"(
      voter?: string | null,
      count?: null
    ): VotingRewardsDistributedEventFilter;
    VotingRewardsDistributed(
      voter?: string | null,
      count?: null
    ): VotingRewardsDistributedEventFilter;
  };

  estimateGas: {
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    INFLATION_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

    __abdicate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancel(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    castVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    castVoteBySig(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimVotingRewards(
      proposalIDs: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    countVotingRewards(
      proposalID: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    execute(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getActions(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposals(overrides?: CallOverrides): Promise<BigNumber>;

    getProposalsVoterInfo(
      voter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReceipt(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    guardian(overrides?: CallOverrides): Promise<BigNumber>;

    implementsVotingRewardsWithToken(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestProposalIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;

    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    propose(
      targets: string[],
      signatures: string[],
      calldatas: BytesLike[],
      title: string,
      ipfsHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queue(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    timelock(overrides?: CallOverrides): Promise<BigNumber>;

    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    votingPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;

    votingToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INFLATION_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    __abdicate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancel(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    castVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    castVoteBySig(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimVotingRewards(
      proposalIDs: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    countVotingRewards(
      proposalID: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    execute(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getActions(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProposalsVoterInfo(
      voter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReceipt(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    implementsVotingRewardsWithToken(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestProposalIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalMaxOperations(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposalThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    propose(
      targets: string[],
      signatures: string[],
      calldatas: BytesLike[],
      title: string,
      ipfsHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queue(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    quorumVotes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votingPeriodBlocks(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    votingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
