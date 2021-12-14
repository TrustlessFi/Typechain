import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type UserAllocationStruct = {
    totalAllocation: BigNumberish;
    minimumAverageTokensAllocatedxLockYears: BigNumberish;
    tokensAllocated: BigNumberish;
    cumulativeTokensAllocatedxLockYears: BigNumberish;
};
export declare type UserAllocationStructOutput = [
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
    encodeFunctionData(functionFragment: "abdicate", values?: undefined): string;
    encodeFunctionData(functionFragment: "dao", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserAllocation", values: [string]): string;
    encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "setDao", values: [string]): string;
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
export declare type IncentiveDistributedEvent = TypedEvent<[
    string,
    BigNumber
], {
    dest: string;
    count: BigNumber;
}>;
export declare type IncentiveDistributedEventFilter = TypedEventFilter<IncentiveDistributedEvent>;
export declare type LockPositionIncreasedEvent = TypedEvent<[
    string,
    BigNumber
], {
    receiver: string;
    count: BigNumber;
}>;
export declare type LockPositionIncreasedEventFilter = TypedEventFilter<LockPositionIncreasedEvent>;
export declare type TokensLockedEvent = TypedEvent<[
    string,
    number,
    BigNumber
], {
    receiver: string;
    lockDurationMonths: number;
    count: BigNumber;
}>;
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
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        dao(overrides?: CallOverrides): Promise<[string]>;
        getUserAllocation(user: string, overrides?: CallOverrides): Promise<[
            UserAllocationStructOutput
        ] & {
            _userAllocation: UserAllocationStructOutput;
        }>;
        guardian(overrides?: CallOverrides): Promise<[string]>;
        setDao(_dao: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        tcp(overrides?: CallOverrides): Promise<[string]>;
        tokenMinter(overrides?: CallOverrides): Promise<[string]>;
    };
    abdicate(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    dao(overrides?: CallOverrides): Promise<string>;
    getUserAllocation(user: string, overrides?: CallOverrides): Promise<UserAllocationStructOutput>;
    guardian(overrides?: CallOverrides): Promise<string>;
    setDao(_dao: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startTime(overrides?: CallOverrides): Promise<BigNumber>;
    tcp(overrides?: CallOverrides): Promise<string>;
    tokenMinter(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        abdicate(overrides?: CallOverrides): Promise<void>;
        dao(overrides?: CallOverrides): Promise<string>;
        getUserAllocation(user: string, overrides?: CallOverrides): Promise<UserAllocationStructOutput>;
        guardian(overrides?: CallOverrides): Promise<string>;
        setDao(_dao: string, overrides?: CallOverrides): Promise<void>;
        startTime(overrides?: CallOverrides): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<string>;
        tokenMinter(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "IncentiveDistributed(address,uint256)"(dest?: string | null, count?: null): IncentiveDistributedEventFilter;
        IncentiveDistributed(dest?: string | null, count?: null): IncentiveDistributedEventFilter;
        "LockPositionIncreased(address,uint128)"(receiver?: string | null, count?: null): LockPositionIncreasedEventFilter;
        LockPositionIncreased(receiver?: string | null, count?: null): LockPositionIncreasedEventFilter;
        "TokensLocked(address,uint8,uint256)"(receiver?: string | null, lockDurationMonths?: BigNumberish | null, count?: null): TokensLockedEventFilter;
        TokensLocked(receiver?: string | null, lockDurationMonths?: BigNumberish | null, count?: null): TokensLockedEventFilter;
    };
    estimateGas: {
        abdicate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        dao(overrides?: CallOverrides): Promise<BigNumber>;
        getUserAllocation(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        guardian(overrides?: CallOverrides): Promise<BigNumber>;
        setDao(_dao: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startTime(overrides?: CallOverrides): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<BigNumber>;
        tokenMinter(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        abdicate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        dao(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAllocation(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDao(_dao: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tcp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenMinter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
