import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export declare namespace MinAverageLockDuration {
    type UserAllocationStruct = {
        totalAllocation: PromiseOrValue<BigNumberish>;
        minimumAverageTokensAllocatedxLockYears: PromiseOrValue<BigNumberish>;
        tokensAllocated: PromiseOrValue<BigNumberish>;
        cumulativeTokensAllocatedxLockYears: PromiseOrValue<BigNumberish>;
    };
    type UserAllocationStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalAllocation: BigNumber;
        minimumAverageTokensAllocatedxLockYears: BigNumber;
        tokensAllocated: BigNumber;
        cumulativeTokensAllocatedxLockYears: BigNumber;
    };
}
export interface MinAverageLockDurationInterface extends utils.Interface {
    functions: {
        "abdicate()": FunctionFragment;
        "dao()": FunctionFragment;
        "getUserAllocation(address)": FunctionFragment;
        "guardian()": FunctionFragment;
        "setDao(address)": FunctionFragment;
        "startTime()": FunctionFragment;
        "tcp()": FunctionFragment;
        "tokenMinter()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "abdicate" | "dao" | "getUserAllocation" | "guardian" | "setDao" | "startTime" | "tcp" | "tokenMinter"): FunctionFragment;
    encodeFunctionData(functionFragment: "abdicate", values?: undefined): string;
    encodeFunctionData(functionFragment: "dao", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserAllocation", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "setDao", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "tcp", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenMinter", values?: undefined): string;
    decodeFunctionResult(functionFragment: "abdicate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dao", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDao", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tcp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenMinter", data: BytesLike): Result;
    events: {
        "IncentiveDistributed(address,uint256)": EventFragment;
        "LockPositionIncreased(address,uint128)": EventFragment;
        "TokensLocked(address,uint8,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "IncentiveDistributed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LockPositionIncreased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensLocked"): EventFragment;
}
export interface IncentiveDistributedEventObject {
    dest: string;
    count: BigNumber;
}
export declare type IncentiveDistributedEvent = TypedEvent<[
    string,
    BigNumber
], IncentiveDistributedEventObject>;
export declare type IncentiveDistributedEventFilter = TypedEventFilter<IncentiveDistributedEvent>;
export interface LockPositionIncreasedEventObject {
    receiver: string;
    count: BigNumber;
}
export declare type LockPositionIncreasedEvent = TypedEvent<[
    string,
    BigNumber
], LockPositionIncreasedEventObject>;
export declare type LockPositionIncreasedEventFilter = TypedEventFilter<LockPositionIncreasedEvent>;
export interface TokensLockedEventObject {
    receiver: string;
    lockDurationMonths: number;
    count: BigNumber;
}
export declare type TokensLockedEvent = TypedEvent<[
    string,
    number,
    BigNumber
], TokensLockedEventObject>;
export declare type TokensLockedEventFilter = TypedEventFilter<TokensLockedEvent>;
export interface MinAverageLockDuration extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MinAverageLockDurationInterface;
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
        abdicate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        dao(overrides?: CallOverrides): Promise<[string]>;
        getUserAllocation(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            MinAverageLockDuration.UserAllocationStructOutput
        ] & {
            _userAllocation: MinAverageLockDuration.UserAllocationStructOutput;
        }>;
        guardian(overrides?: CallOverrides): Promise<[string]>;
        setDao(_dao: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        tcp(overrides?: CallOverrides): Promise<[string]>;
        tokenMinter(overrides?: CallOverrides): Promise<[string]>;
    };
    abdicate(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    dao(overrides?: CallOverrides): Promise<string>;
    getUserAllocation(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<MinAverageLockDuration.UserAllocationStructOutput>;
    guardian(overrides?: CallOverrides): Promise<string>;
    setDao(_dao: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startTime(overrides?: CallOverrides): Promise<BigNumber>;
    tcp(overrides?: CallOverrides): Promise<string>;
    tokenMinter(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        abdicate(overrides?: CallOverrides): Promise<void>;
        dao(overrides?: CallOverrides): Promise<string>;
        getUserAllocation(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<MinAverageLockDuration.UserAllocationStructOutput>;
        guardian(overrides?: CallOverrides): Promise<string>;
        setDao(_dao: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        startTime(overrides?: CallOverrides): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<string>;
        tokenMinter(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "IncentiveDistributed(address,uint256)"(dest?: PromiseOrValue<string> | null, count?: null): IncentiveDistributedEventFilter;
        IncentiveDistributed(dest?: PromiseOrValue<string> | null, count?: null): IncentiveDistributedEventFilter;
        "LockPositionIncreased(address,uint128)"(receiver?: PromiseOrValue<string> | null, count?: null): LockPositionIncreasedEventFilter;
        LockPositionIncreased(receiver?: PromiseOrValue<string> | null, count?: null): LockPositionIncreasedEventFilter;
        "TokensLocked(address,uint8,uint256)"(receiver?: PromiseOrValue<string> | null, lockDurationMonths?: PromiseOrValue<BigNumberish> | null, count?: null): TokensLockedEventFilter;
        TokensLocked(receiver?: PromiseOrValue<string> | null, lockDurationMonths?: PromiseOrValue<BigNumberish> | null, count?: null): TokensLockedEventFilter;
    };
    estimateGas: {
        abdicate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        dao(overrides?: CallOverrides): Promise<BigNumber>;
        getUserAllocation(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        guardian(overrides?: CallOverrides): Promise<BigNumber>;
        setDao(_dao: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startTime(overrides?: CallOverrides): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<BigNumber>;
        tokenMinter(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        abdicate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        dao(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAllocation(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDao(_dao: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tcp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenMinter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
