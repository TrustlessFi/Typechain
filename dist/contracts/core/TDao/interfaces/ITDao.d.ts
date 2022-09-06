import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace ITDao {
    type TokenPositionStruct = {
        count: PromiseOrValue<BigNumberish>;
        startTotalRewards: PromiseOrValue<BigNumberish>;
        startCumulativeVirtualCount: PromiseOrValue<BigNumberish>;
        lastPeriodUpdated: PromiseOrValue<BigNumberish>;
        endPeriod: PromiseOrValue<BigNumberish>;
        durationMonths: PromiseOrValue<BigNumberish>;
        tokenID: PromiseOrValue<BigNumberish>;
    };
    type TokenPositionStructOutput = [
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
}
export interface ITDaoInterface extends utils.Interface {
    functions: {
        "getPosition(uint64)": FunctionFragment;
        "idToToken(uint16)": FunctionFragment;
        "lockTokens(uint16,uint256,uint8,address)": FunctionFragment;
        "mintVotingRewards(address,uint256)": FunctionFragment;
        "periodToTime(uint64)": FunctionFragment;
        "positionIsAbleToBeUnlocked(uint64)": FunctionFragment;
        "sendUnderlyingVotingRewards(address,uint256,address,uint256)": FunctionFragment;
        "tokenToID(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getPosition" | "idToToken" | "lockTokens" | "mintVotingRewards" | "periodToTime" | "positionIsAbleToBeUnlocked" | "sendUnderlyingVotingRewards" | "tokenToID"): FunctionFragment;
    encodeFunctionData(functionFragment: "getPosition", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "idToToken", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "lockTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "mintVotingRewards", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "periodToTime", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "positionIsAbleToBeUnlocked", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "sendUnderlyingVotingRewards", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "tokenToID", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "idToToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintVotingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodToTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionIsAbleToBeUnlocked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendUnderlyingVotingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenToID", data: BytesLike): Result;
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
export interface IncentiveMintedEventObject {
    token: string;
    count: BigNumber;
}
export declare type IncentiveMintedEvent = TypedEvent<[
    string,
    BigNumber
], IncentiveMintedEventObject>;
export declare type IncentiveMintedEventFilter = TypedEventFilter<IncentiveMintedEvent>;
export interface InflationAccruedEventObject {
    currentPeriod: BigNumber;
    periods: BigNumber;
}
export declare type InflationAccruedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], InflationAccruedEventObject>;
export declare type InflationAccruedEventFilter = TypedEventFilter<InflationAccruedEvent>;
export interface LiquidationIncentiveContractSetEventObject {
    _contract: string;
}
export declare type LiquidationIncentiveContractSetEvent = TypedEvent<[
    string
], LiquidationIncentiveContractSetEventObject>;
export declare type LiquidationIncentiveContractSetEventFilter = TypedEventFilter<LiquidationIncentiveContractSetEvent>;
export interface LockDurationIncreaseEventObject {
    positionNFTTokenID: BigNumber;
    lockDurationMonths: number;
}
export declare type LockDurationIncreaseEvent = TypedEvent<[
    BigNumber,
    number
], LockDurationIncreaseEventObject>;
export declare type LockDurationIncreaseEventFilter = TypedEventFilter<LockDurationIncreaseEvent>;
export interface RewardsClaimedEventObject {
    positionNFTTokenID: BigNumber;
    owner: string;
}
export declare type RewardsClaimedEvent = TypedEvent<[
    BigNumber,
    string
], RewardsClaimedEventObject>;
export declare type RewardsClaimedEventFilter = TypedEventFilter<RewardsClaimedEvent>;
export interface TDaoStartedEventObject {
}
export declare type TDaoStartedEvent = TypedEvent<[], TDaoStartedEventObject>;
export declare type TDaoStartedEventFilter = TypedEventFilter<TDaoStartedEvent>;
export interface TokenAddedEventObject {
    token: string;
}
export declare type TokenAddedEvent = TypedEvent<[string], TokenAddedEventObject>;
export declare type TokenAddedEventFilter = TypedEventFilter<TokenAddedEvent>;
export interface TokensLockedEventObject {
    tokenID: number;
    initialOwner: string;
    lockDurationMonths: number;
    count: BigNumber;
}
export declare type TokensLockedEvent = TypedEvent<[
    number,
    string,
    number,
    BigNumber
], TokensLockedEventObject>;
export declare type TokensLockedEventFilter = TypedEventFilter<TokensLockedEvent>;
export interface TokensUnlockedEventObject {
    tokenID: number;
    owner: string;
    count: BigNumber;
}
export declare type TokensUnlockedEvent = TypedEvent<[
    number,
    string,
    BigNumber
], TokensUnlockedEventObject>;
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
        getPosition(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[ITDao.TokenPositionStructOutput]>;
        idToToken(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        lockTokens(tokenID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintVotingRewards(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        positionIsAbleToBeUnlocked(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        sendUnderlyingVotingRewards(governorAlpha: PromiseOrValue<string>, proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, votePortion: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tokenToID(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number]>;
    };
    getPosition(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ITDao.TokenPositionStructOutput>;
    idToToken(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    lockTokens(tokenID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintVotingRewards(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    positionIsAbleToBeUnlocked(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    sendUnderlyingVotingRewards(governorAlpha: PromiseOrValue<string>, proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, votePortion: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tokenToID(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    callStatic: {
        getPosition(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ITDao.TokenPositionStructOutput>;
        idToToken(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        lockTokens(tokenID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mintVotingRewards(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        positionIsAbleToBeUnlocked(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        sendUnderlyingVotingRewards(governorAlpha: PromiseOrValue<string>, proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, votePortion: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        tokenToID(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    };
    filters: {
        "IncentiveMinted(address,uint256)"(token?: PromiseOrValue<string> | null, count?: null): IncentiveMintedEventFilter;
        IncentiveMinted(token?: PromiseOrValue<string> | null, count?: null): IncentiveMintedEventFilter;
        "InflationAccrued(uint64,uint64)"(currentPeriod?: PromiseOrValue<BigNumberish> | null, periods?: null): InflationAccruedEventFilter;
        InflationAccrued(currentPeriod?: PromiseOrValue<BigNumberish> | null, periods?: null): InflationAccruedEventFilter;
        "LiquidationIncentiveContractSet(address)"(_contract?: PromiseOrValue<string> | null): LiquidationIncentiveContractSetEventFilter;
        LiquidationIncentiveContractSet(_contract?: PromiseOrValue<string> | null): LiquidationIncentiveContractSetEventFilter;
        "LockDurationIncrease(uint64,uint16)"(positionNFTTokenID?: PromiseOrValue<BigNumberish> | null, lockDurationMonths?: PromiseOrValue<BigNumberish> | null): LockDurationIncreaseEventFilter;
        LockDurationIncrease(positionNFTTokenID?: PromiseOrValue<BigNumberish> | null, lockDurationMonths?: PromiseOrValue<BigNumberish> | null): LockDurationIncreaseEventFilter;
        "RewardsClaimed(uint64,address)"(positionNFTTokenID?: PromiseOrValue<BigNumberish> | null, owner?: PromiseOrValue<string> | null): RewardsClaimedEventFilter;
        RewardsClaimed(positionNFTTokenID?: PromiseOrValue<BigNumberish> | null, owner?: PromiseOrValue<string> | null): RewardsClaimedEventFilter;
        "TDaoStarted()"(): TDaoStartedEventFilter;
        TDaoStarted(): TDaoStartedEventFilter;
        "TokenAdded(address)"(token?: PromiseOrValue<string> | null): TokenAddedEventFilter;
        TokenAdded(token?: PromiseOrValue<string> | null): TokenAddedEventFilter;
        "TokensLocked(uint16,address,uint8,uint256)"(tokenID?: PromiseOrValue<BigNumberish> | null, initialOwner?: PromiseOrValue<string> | null, lockDurationMonths?: PromiseOrValue<BigNumberish> | null, count?: null): TokensLockedEventFilter;
        TokensLocked(tokenID?: PromiseOrValue<BigNumberish> | null, initialOwner?: PromiseOrValue<string> | null, lockDurationMonths?: PromiseOrValue<BigNumberish> | null, count?: null): TokensLockedEventFilter;
        "TokensUnlocked(uint16,address,uint256)"(tokenID?: PromiseOrValue<BigNumberish> | null, owner?: PromiseOrValue<string> | null, count?: null): TokensUnlockedEventFilter;
        TokensUnlocked(tokenID?: PromiseOrValue<BigNumberish> | null, owner?: PromiseOrValue<string> | null, count?: null): TokensUnlockedEventFilter;
    };
    estimateGas: {
        getPosition(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        idToToken(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        lockTokens(tokenID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintVotingRewards(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        positionIsAbleToBeUnlocked(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        sendUnderlyingVotingRewards(governorAlpha: PromiseOrValue<string>, proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, votePortion: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tokenToID(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getPosition(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        idToToken(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockTokens(tokenID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintVotingRewards(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionIsAbleToBeUnlocked(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendUnderlyingVotingRewards(governorAlpha: PromiseOrValue<string>, proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, votePortion: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tokenToID(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
