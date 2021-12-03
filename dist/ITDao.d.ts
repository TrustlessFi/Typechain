import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type TokenPositionStruct = {
    count: BigNumberish;
    startTotalRewards: BigNumberish;
    startCumulativeVirtualCount: BigNumberish;
    lastPeriodUpdated: BigNumberish;
    endPeriod: BigNumberish;
    durationMonths: BigNumberish;
    tokenID: BigNumberish;
};
export declare type TokenPositionStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number
] & {
    count: BigNumber;
    startTotalRewards: BigNumber;
    startCumulativeVirtualCount: BigNumber;
    lastPeriodUpdated: BigNumber;
    endPeriod: BigNumber;
    durationMonths: BigNumber;
    tokenID: number;
};
export interface ITDaoInterface extends utils.Interface {
    functions: {
        "getPosition(uint64)": FunctionFragment;
        "idToToken(uint16)": FunctionFragment;
        "lockTokens(address,uint256,uint8,address)": FunctionFragment;
        "mintVotingRewards(address,uint256)": FunctionFragment;
        "periodToTime(uint64)": FunctionFragment;
        "positionIsAbleToBeUnlocked(uint64)": FunctionFragment;
        "sendUnderlyingVotingRewards(address,uint256,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getPosition", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "idToToken", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "lockTokens", values: [string, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "mintVotingRewards", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "periodToTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "positionIsAbleToBeUnlocked", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendUnderlyingVotingRewards", values: [string, BigNumberish, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "idToToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintVotingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodToTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionIsAbleToBeUnlocked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendUnderlyingVotingRewards", data: BytesLike): Result;
    events: {
        "IncentiveMinted(address,uint256)": EventFragment;
        "InflationAccrued(uint64,uint64)": EventFragment;
        "LiquidationIncentiveContractSet(address)": EventFragment;
        "LockDurationIncrease(uint64,uint16)": EventFragment;
        "RewardsClaimed(uint64,address)": EventFragment;
        "TDaoStarted()": EventFragment;
        "TokenAdded(address)": EventFragment;
        "TokensLocked(uint16,address,uint8,uint256)": EventFragment;
        "TokensUnlocked(uint16,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "IncentiveMinted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InflationAccrued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidationIncentiveContractSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LockDurationIncrease"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TDaoStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensUnlocked"): EventFragment;
}
export declare type IncentiveMintedEvent = TypedEvent<[
    string,
    BigNumber
], {
    token: string;
    count: BigNumber;
}>;
export declare type IncentiveMintedEventFilter = TypedEventFilter<IncentiveMintedEvent>;
export declare type InflationAccruedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    currentPeriod: BigNumber;
    periods: BigNumber;
}>;
export declare type InflationAccruedEventFilter = TypedEventFilter<InflationAccruedEvent>;
export declare type LiquidationIncentiveContractSetEvent = TypedEvent<[
    string
], {
    _contract: string;
}>;
export declare type LiquidationIncentiveContractSetEventFilter = TypedEventFilter<LiquidationIncentiveContractSetEvent>;
export declare type LockDurationIncreaseEvent = TypedEvent<[
    BigNumber,
    number
], {
    positionNFTTokenID: BigNumber;
    lockDurationMonths: number;
}>;
export declare type LockDurationIncreaseEventFilter = TypedEventFilter<LockDurationIncreaseEvent>;
export declare type RewardsClaimedEvent = TypedEvent<[
    BigNumber,
    string
], {
    positionNFTTokenID: BigNumber;
    owner: string;
}>;
export declare type RewardsClaimedEventFilter = TypedEventFilter<RewardsClaimedEvent>;
export declare type TDaoStartedEvent = TypedEvent<[], {}>;
export declare type TDaoStartedEventFilter = TypedEventFilter<TDaoStartedEvent>;
export declare type TokenAddedEvent = TypedEvent<[string], {
    token: string;
}>;
export declare type TokenAddedEventFilter = TypedEventFilter<TokenAddedEvent>;
export declare type TokensLockedEvent = TypedEvent<[
    number,
    string,
    number,
    BigNumber
], {
    tokenID: number;
    initialOwner: string;
    lockDurationMonths: number;
    count: BigNumber;
}>;
export declare type TokensLockedEventFilter = TypedEventFilter<TokensLockedEvent>;
export declare type TokensUnlockedEvent = TypedEvent<[
    number,
    string,
    BigNumber
], {
    tokenID: number;
    owner: string;
    count: BigNumber;
}>;
export declare type TokensUnlockedEventFilter = TypedEventFilter<TokensUnlockedEvent>;
export interface ITDao extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITDaoInterface;
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
        getPosition(positionNFTTokenID: BigNumberish, overrides?: CallOverrides): Promise<[TokenPositionStructOutput]>;
        idToToken(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        lockTokens(token: string, count: BigNumberish, lockDurationMonths: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintVotingRewards(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        periodToTime(period: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        positionIsAbleToBeUnlocked(positionNFTTokenID: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        sendUnderlyingVotingRewards(governorAlpha: string, proposalID: BigNumberish, voter: string, votePortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getPosition(positionNFTTokenID: BigNumberish, overrides?: CallOverrides): Promise<TokenPositionStructOutput>;
    idToToken(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    lockTokens(token: string, count: BigNumberish, lockDurationMonths: BigNumberish, to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintVotingRewards(dest: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    periodToTime(period: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    positionIsAbleToBeUnlocked(positionNFTTokenID: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    sendUnderlyingVotingRewards(governorAlpha: string, proposalID: BigNumberish, voter: string, votePortion: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getPosition(positionNFTTokenID: BigNumberish, overrides?: CallOverrides): Promise<TokenPositionStructOutput>;
        idToToken(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        lockTokens(token: string, count: BigNumberish, lockDurationMonths: BigNumberish, to: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintVotingRewards(dest: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        periodToTime(period: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        positionIsAbleToBeUnlocked(positionNFTTokenID: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        sendUnderlyingVotingRewards(governorAlpha: string, proposalID: BigNumberish, voter: string, votePortion: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "IncentiveMinted(address,uint256)"(token?: string | null, count?: null): IncentiveMintedEventFilter;
        IncentiveMinted(token?: string | null, count?: null): IncentiveMintedEventFilter;
        "InflationAccrued(uint64,uint64)"(currentPeriod?: BigNumberish | null, periods?: null): InflationAccruedEventFilter;
        InflationAccrued(currentPeriod?: BigNumberish | null, periods?: null): InflationAccruedEventFilter;
        "LiquidationIncentiveContractSet(address)"(_contract?: string | null): LiquidationIncentiveContractSetEventFilter;
        LiquidationIncentiveContractSet(_contract?: string | null): LiquidationIncentiveContractSetEventFilter;
        "LockDurationIncrease(uint64,uint16)"(positionNFTTokenID?: BigNumberish | null, lockDurationMonths?: BigNumberish | null): LockDurationIncreaseEventFilter;
        LockDurationIncrease(positionNFTTokenID?: BigNumberish | null, lockDurationMonths?: BigNumberish | null): LockDurationIncreaseEventFilter;
        "RewardsClaimed(uint64,address)"(positionNFTTokenID?: BigNumberish | null, owner?: string | null): RewardsClaimedEventFilter;
        RewardsClaimed(positionNFTTokenID?: BigNumberish | null, owner?: string | null): RewardsClaimedEventFilter;
        "TDaoStarted()"(): TDaoStartedEventFilter;
        TDaoStarted(): TDaoStartedEventFilter;
        "TokenAdded(address)"(token?: string | null): TokenAddedEventFilter;
        TokenAdded(token?: string | null): TokenAddedEventFilter;
        "TokensLocked(uint16,address,uint8,uint256)"(tokenID?: BigNumberish | null, initialOwner?: string | null, lockDurationMonths?: BigNumberish | null, count?: null): TokensLockedEventFilter;
        TokensLocked(tokenID?: BigNumberish | null, initialOwner?: string | null, lockDurationMonths?: BigNumberish | null, count?: null): TokensLockedEventFilter;
        "TokensUnlocked(uint16,address,uint256)"(tokenID?: BigNumberish | null, owner?: string | null, count?: null): TokensUnlockedEventFilter;
        TokensUnlocked(tokenID?: BigNumberish | null, owner?: string | null, count?: null): TokensUnlockedEventFilter;
    };
    estimateGas: {
        getPosition(positionNFTTokenID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        idToToken(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        lockTokens(token: string, count: BigNumberish, lockDurationMonths: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintVotingRewards(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        periodToTime(period: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        positionIsAbleToBeUnlocked(positionNFTTokenID: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sendUnderlyingVotingRewards(governorAlpha: string, proposalID: BigNumberish, voter: string, votePortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getPosition(positionNFTTokenID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        idToToken(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockTokens(token: string, count: BigNumberish, lockDurationMonths: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintVotingRewards(dest: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        periodToTime(period: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionIsAbleToBeUnlocked(positionNFTTokenID: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendUnderlyingVotingRewards(governorAlpha: string, proposalID: BigNumberish, voter: string, votePortion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}