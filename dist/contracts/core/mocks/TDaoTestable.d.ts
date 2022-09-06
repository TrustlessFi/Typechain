import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
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
    type TokenRewardsStatusStruct = {
        cumulativeVirtualCount: PromiseOrValue<BigNumberish>;
        totalRewards: PromiseOrValue<BigNumberish>;
    };
    type TokenRewardsStatusStructOutput = [BigNumber, BigNumber] & {
        cumulativeVirtualCount: BigNumber;
        totalRewards: BigNumber;
    };
}
export interface TDaoTestableInterface extends utils.Interface {
    functions: {
        "accrueInflation()": FunctionFragment;
        "addToken(address)": FunctionFragment;
        "allTokens()": FunctionFragment;
        "blacklistedAction(bytes4)": FunctionFragment;
        "calculateMonthsToDays(uint64)": FunctionFragment;
        "calculateVirtualCount(uint256,uint64)": FunctionFragment;
        "countUnderlyingProtocolTokens()": FunctionFragment;
        "currentPeriod()": FunctionFragment;
        "dailyProtocolTDaoIncentiveCount()": FunctionFragment;
        "deployer()": FunctionFragment;
        "execute(address,string,bytes)": FunctionFragment;
        "executeMetaProposalVote(uint256)": FunctionFragment;
        "firstPeriod()": FunctionFragment;
        "getPosition(uint64)": FunctionFragment;
        "getRewards(uint64[])": FunctionFragment;
        "getRewardsStatus(uint16)": FunctionFragment;
        "guardian()": FunctionFragment;
        "idToToken(uint16)": FunctionFragment;
        "incentiveContract()": FunctionFragment;
        "incentiveContractMint(address,uint256)": FunctionFragment;
        "incentivesStartPeriod()": FunctionFragment;
        "increaseLockDuration(uint64,uint8)": FunctionFragment;
        "init(address,address,address,address)": FunctionFragment;
        "lastPeriodGlobalInflationUpdated()": FunctionFragment;
        "lockTokens(uint16,uint256,uint8,address)": FunctionFragment;
        "mintIncentive(address,uint256)": FunctionFragment;
        "mintVotingRewards(address,uint256)": FunctionFragment;
        "periodLength()": FunctionFragment;
        "periodToTime(uint64)": FunctionFragment;
        "positionIsAbleToBeUnlocked(uint64)": FunctionFragment;
        "selfDelegate(uint16)": FunctionFragment;
        "sendUnderlyingVotingRewards(address,uint256,address,uint256)": FunctionFragment;
        "setIncentiveContract(address)": FunctionFragment;
        "start()": FunctionFragment;
        "startPeriod()": FunctionFragment;
        "tDaoGovernorAlpha()": FunctionFragment;
        "tDaoPositionNFT()": FunctionFragment;
        "tDaoToken()": FunctionFragment;
        "timelock()": FunctionFragment;
        "tokenToID(address)": FunctionFragment;
        "tokens(uint256)": FunctionFragment;
        "totalIncentivesMinted()": FunctionFragment;
        "underlyingTokenVoteRewardCount(address,uint256)": FunctionFragment;
        "unlockTokens(uint64)": FunctionFragment;
        "virtualCount(uint16)": FunctionFragment;
        "votingRewardsSafe()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accrueInflation" | "addToken" | "allTokens" | "blacklistedAction" | "calculateMonthsToDays" | "calculateVirtualCount" | "countUnderlyingProtocolTokens" | "currentPeriod" | "dailyProtocolTDaoIncentiveCount" | "deployer" | "execute" | "executeMetaProposalVote" | "firstPeriod" | "getPosition" | "getRewards" | "getRewardsStatus" | "guardian" | "idToToken" | "incentiveContract" | "incentiveContractMint" | "incentivesStartPeriod" | "increaseLockDuration" | "init" | "lastPeriodGlobalInflationUpdated" | "lockTokens" | "mintIncentive" | "mintVotingRewards" | "periodLength" | "periodToTime" | "positionIsAbleToBeUnlocked" | "selfDelegate" | "sendUnderlyingVotingRewards" | "setIncentiveContract" | "start" | "startPeriod" | "tDaoGovernorAlpha" | "tDaoPositionNFT" | "tDaoToken" | "timelock" | "tokenToID" | "tokens" | "totalIncentivesMinted" | "underlyingTokenVoteRewardCount" | "unlockTokens" | "virtualCount" | "votingRewardsSafe"): FunctionFragment;
    encodeFunctionData(functionFragment: "accrueInflation", values?: undefined): string;
    encodeFunctionData(functionFragment: "addToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "allTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "blacklistedAction", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "calculateMonthsToDays", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "calculateVirtualCount", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "countUnderlyingProtocolTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "dailyProtocolTDaoIncentiveCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "executeMetaProposalVote", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "firstPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPosition", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRewards", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getRewardsStatus", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "idToToken", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "incentiveContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "incentiveContractMint", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "incentivesStartPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseLockDuration", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "init", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "lastPeriodGlobalInflationUpdated", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "mintIncentive", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "mintVotingRewards", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "periodLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodToTime", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "positionIsAbleToBeUnlocked", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "selfDelegate", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "sendUnderlyingVotingRewards", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setIncentiveContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "start", values?: undefined): string;
    encodeFunctionData(functionFragment: "startPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "tDaoGovernorAlpha", values?: undefined): string;
    encodeFunctionData(functionFragment: "tDaoPositionNFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "tDaoToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenToID", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "tokens", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalIncentivesMinted", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlyingTokenVoteRewardCount", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "unlockTokens", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "virtualCount", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "votingRewardsSafe", values?: undefined): string;
    decodeFunctionResult(functionFragment: "accrueInflation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blacklistedAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateMonthsToDays", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateVirtualCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "countUnderlyingProtocolTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dailyProtocolTDaoIncentiveCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMetaProposalVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "idToToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incentiveContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incentiveContractMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incentivesStartPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseLockDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPeriodGlobalInflationUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintVotingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodToTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionIsAbleToBeUnlocked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfDelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendUnderlyingVotingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIncentiveContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tDaoGovernorAlpha", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tDaoPositionNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tDaoToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenToID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalIncentivesMinted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlyingTokenVoteRewardCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "virtualCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingRewardsSafe", data: BytesLike): Result;
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
export interface TDaoTestable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TDaoTestableInterface;
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
        accrueInflation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allTokens(overrides?: CallOverrides): Promise<[string[]]>;
        blacklistedAction(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        calculateMonthsToDays(months: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateVirtualCount(count: PromiseOrValue<BigNumberish>, durationMonths: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        countUnderlyingProtocolTokens(overrides?: CallOverrides): Promise<[BigNumber]>;
        currentPeriod(overrides?: CallOverrides): Promise<[BigNumber] & {
            period: BigNumber;
        }>;
        dailyProtocolTDaoIncentiveCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        execute(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeMetaProposalVote(metaProposalID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPosition(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[ITDao.TokenPositionStructOutput]>;
        getRewards(positionNFTTokenIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRewardsStatus(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[ITDao.TokenRewardsStatusStructOutput]>;
        guardian(overrides?: CallOverrides): Promise<[string]>;
        idToToken(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        incentiveContract(overrides?: CallOverrides): Promise<[string]>;
        incentiveContractMint(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        incentivesStartPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseLockDuration(positionNFTTokenID: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        init(_tDaoPositionNFT: PromiseOrValue<string>, _tDaoToken: PromiseOrValue<string>, _tDaoGovernorAlpha: PromiseOrValue<string>, _timelock: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lastPeriodGlobalInflationUpdated(overrides?: CallOverrides): Promise<[BigNumber]>;
        lockTokens(tokenID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintIncentive(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintVotingRewards(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        periodLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        positionIsAbleToBeUnlocked(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        selfDelegate(tokenID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendUnderlyingVotingRewards(governorAlpha: PromiseOrValue<string>, proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, votePortion: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setIncentiveContract(_contract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        start(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        tDaoGovernorAlpha(overrides?: CallOverrides): Promise<[string]>;
        tDaoPositionNFT(overrides?: CallOverrides): Promise<[string]>;
        tDaoToken(overrides?: CallOverrides): Promise<[string]>;
        timelock(overrides?: CallOverrides): Promise<[string]>;
        tokenToID(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number]>;
        tokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        totalIncentivesMinted(overrides?: CallOverrides): Promise<[BigNumber]>;
        underlyingTokenVoteRewardCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            count: BigNumber;
            isSet: boolean;
        }>;
        unlockTokens(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        virtualCount(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        votingRewardsSafe(overrides?: CallOverrides): Promise<[string]>;
    };
    accrueInflation(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addToken(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allTokens(overrides?: CallOverrides): Promise<string[]>;
    blacklistedAction(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    calculateMonthsToDays(months: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    calculateVirtualCount(count: PromiseOrValue<BigNumberish>, durationMonths: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    countUnderlyingProtocolTokens(overrides?: CallOverrides): Promise<BigNumber>;
    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    dailyProtocolTDaoIncentiveCount(overrides?: CallOverrides): Promise<BigNumber>;
    deployer(overrides?: CallOverrides): Promise<string>;
    execute(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeMetaProposalVote(metaProposalID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    getPosition(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ITDao.TokenPositionStructOutput>;
    getRewards(positionNFTTokenIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRewardsStatus(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ITDao.TokenRewardsStatusStructOutput>;
    guardian(overrides?: CallOverrides): Promise<string>;
    idToToken(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    incentiveContract(overrides?: CallOverrides): Promise<string>;
    incentiveContractMint(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    incentivesStartPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    increaseLockDuration(positionNFTTokenID: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    init(_tDaoPositionNFT: PromiseOrValue<string>, _tDaoToken: PromiseOrValue<string>, _tDaoGovernorAlpha: PromiseOrValue<string>, _timelock: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lastPeriodGlobalInflationUpdated(overrides?: CallOverrides): Promise<BigNumber>;
    lockTokens(tokenID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintIncentive(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintVotingRewards(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    periodLength(overrides?: CallOverrides): Promise<BigNumber>;
    periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    positionIsAbleToBeUnlocked(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    selfDelegate(tokenID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendUnderlyingVotingRewards(governorAlpha: PromiseOrValue<string>, proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, votePortion: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setIncentiveContract(_contract: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    start(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    tDaoGovernorAlpha(overrides?: CallOverrides): Promise<string>;
    tDaoPositionNFT(overrides?: CallOverrides): Promise<string>;
    tDaoToken(overrides?: CallOverrides): Promise<string>;
    timelock(overrides?: CallOverrides): Promise<string>;
    tokenToID(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    tokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    totalIncentivesMinted(overrides?: CallOverrides): Promise<BigNumber>;
    underlyingTokenVoteRewardCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        count: BigNumber;
        isSet: boolean;
    }>;
    unlockTokens(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    virtualCount(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    votingRewardsSafe(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        accrueInflation(overrides?: CallOverrides): Promise<void>;
        addToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        allTokens(overrides?: CallOverrides): Promise<string[]>;
        blacklistedAction(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        calculateMonthsToDays(months: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateVirtualCount(count: PromiseOrValue<BigNumberish>, durationMonths: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        countUnderlyingProtocolTokens(overrides?: CallOverrides): Promise<BigNumber>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        dailyProtocolTDaoIncentiveCount(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<string>;
        execute(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        executeMetaProposalVote(metaProposalID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        getPosition(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ITDao.TokenPositionStructOutput>;
        getRewards(positionNFTTokenIDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        getRewardsStatus(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ITDao.TokenRewardsStatusStructOutput>;
        guardian(overrides?: CallOverrides): Promise<string>;
        idToToken(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        incentiveContract(overrides?: CallOverrides): Promise<string>;
        incentiveContractMint(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        incentivesStartPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        increaseLockDuration(positionNFTTokenID: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        init(_tDaoPositionNFT: PromiseOrValue<string>, _tDaoToken: PromiseOrValue<string>, _tDaoGovernorAlpha: PromiseOrValue<string>, _timelock: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        lastPeriodGlobalInflationUpdated(overrides?: CallOverrides): Promise<BigNumber>;
        lockTokens(tokenID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mintIncentive(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        mintVotingRewards(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        positionIsAbleToBeUnlocked(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        selfDelegate(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        sendUnderlyingVotingRewards(governorAlpha: PromiseOrValue<string>, proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, votePortion: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setIncentiveContract(_contract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        start(overrides?: CallOverrides): Promise<void>;
        startPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        tDaoGovernorAlpha(overrides?: CallOverrides): Promise<string>;
        tDaoPositionNFT(overrides?: CallOverrides): Promise<string>;
        tDaoToken(overrides?: CallOverrides): Promise<string>;
        timelock(overrides?: CallOverrides): Promise<string>;
        tokenToID(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        tokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        totalIncentivesMinted(overrides?: CallOverrides): Promise<BigNumber>;
        underlyingTokenVoteRewardCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            count: BigNumber;
            isSet: boolean;
        }>;
        unlockTokens(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        virtualCount(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        votingRewardsSafe(overrides?: CallOverrides): Promise<string>;
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
        accrueInflation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allTokens(overrides?: CallOverrides): Promise<BigNumber>;
        blacklistedAction(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateMonthsToDays(months: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateVirtualCount(count: PromiseOrValue<BigNumberish>, durationMonths: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        countUnderlyingProtocolTokens(overrides?: CallOverrides): Promise<BigNumber>;
        currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        dailyProtocolTDaoIncentiveCount(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        execute(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeMetaProposalVote(metaProposalID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        getPosition(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRewards(positionNFTTokenIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRewardsStatus(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        guardian(overrides?: CallOverrides): Promise<BigNumber>;
        idToToken(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        incentiveContract(overrides?: CallOverrides): Promise<BigNumber>;
        incentiveContractMint(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        incentivesStartPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        increaseLockDuration(positionNFTTokenID: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        init(_tDaoPositionNFT: PromiseOrValue<string>, _tDaoToken: PromiseOrValue<string>, _tDaoGovernorAlpha: PromiseOrValue<string>, _timelock: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lastPeriodGlobalInflationUpdated(overrides?: CallOverrides): Promise<BigNumber>;
        lockTokens(tokenID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintIncentive(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintVotingRewards(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        periodLength(overrides?: CallOverrides): Promise<BigNumber>;
        periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        positionIsAbleToBeUnlocked(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        selfDelegate(tokenID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendUnderlyingVotingRewards(governorAlpha: PromiseOrValue<string>, proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, votePortion: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setIncentiveContract(_contract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        start(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        tDaoGovernorAlpha(overrides?: CallOverrides): Promise<BigNumber>;
        tDaoPositionNFT(overrides?: CallOverrides): Promise<BigNumber>;
        tDaoToken(overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<BigNumber>;
        tokenToID(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        tokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalIncentivesMinted(overrides?: CallOverrides): Promise<BigNumber>;
        underlyingTokenVoteRewardCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        unlockTokens(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        virtualCount(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        votingRewardsSafe(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accrueInflation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blacklistedAction(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateMonthsToDays(months: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateVirtualCount(count: PromiseOrValue<BigNumberish>, durationMonths: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        countUnderlyingProtocolTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dailyProtocolTDaoIncentiveCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeMetaProposalVote(metaProposalID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        firstPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPosition(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewards(positionNFTTokenIDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRewardsStatus(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        idToToken(tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        incentiveContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        incentiveContractMint(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        incentivesStartPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseLockDuration(positionNFTTokenID: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        init(_tDaoPositionNFT: PromiseOrValue<string>, _tDaoToken: PromiseOrValue<string>, _tDaoGovernorAlpha: PromiseOrValue<string>, _timelock: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lastPeriodGlobalInflationUpdated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockTokens(tokenID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintIncentive(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintVotingRewards(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        periodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodToTime(period: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionIsAbleToBeUnlocked(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        selfDelegate(tokenID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendUnderlyingVotingRewards(governorAlpha: PromiseOrValue<string>, proposalID: PromiseOrValue<BigNumberish>, voter: PromiseOrValue<string>, votePortion: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setIncentiveContract(_contract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        start(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tDaoGovernorAlpha(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tDaoPositionNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tDaoToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenToID(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalIncentivesMinted(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlyingTokenVoteRewardCount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unlockTokens(positionNFTTokenID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        virtualCount(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingRewardsSafe(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
