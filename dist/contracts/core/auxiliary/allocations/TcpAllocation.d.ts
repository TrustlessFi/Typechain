import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace DaoPositionCreator {
    type DaoPositionCreatorConstructorParamsStruct = {
        Governor: PromiseOrValue<string>;
        Tcp: PromiseOrValue<string>;
        Guardian: PromiseOrValue<string>;
    };
    type DaoPositionCreatorConstructorParamsStructOutput = [
        string,
        string,
        string
    ] & {
        Governor: string;
        Tcp: string;
        Guardian: string;
    };
}
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
export declare namespace TcpAllocation {
    type InitParamsStruct = {
        governor: PromiseOrValue<string>;
        governorAllocationCount: PromiseOrValue<BigNumberish>;
        genesisAllocation: PromiseOrValue<string>;
        genesisAllocationCount: PromiseOrValue<BigNumberish>;
        incentiveAllocation: PromiseOrValue<string>;
        incentiveAllocationCount: PromiseOrValue<BigNumberish>;
        allocationReceivers: PromiseOrValue<string>[];
        allocationAmounts: PromiseOrValue<BigNumberish>[];
    };
    type InitParamsStructOutput = [
        string,
        BigNumber,
        string,
        BigNumber,
        string,
        BigNumber,
        string[],
        BigNumber[]
    ] & {
        governor: string;
        governorAllocationCount: BigNumber;
        genesisAllocation: string;
        genesisAllocationCount: BigNumber;
        incentiveAllocation: string;
        incentiveAllocationCount: BigNumber;
        allocationReceivers: string[];
        allocationAmounts: BigNumber[];
    };
}
export interface TcpAllocationInterface extends utils.Interface {
    functions: {
        "abdicate()": FunctionFragment;
        "allocationCaps(address)": FunctionFragment;
        "dao()": FunctionFragment;
        "deployer()": FunctionFragment;
        "getTokens(address,uint128)": FunctionFragment;
        "getUserAllocation(address)": FunctionFragment;
        "guardian()": FunctionFragment;
        "incentiveAllocation()": FunctionFragment;
        "increaseAllocation(address,uint128)": FunctionFragment;
        "init((address,uint256,address,uint256,address,uint128,address[],uint128[]))": FunctionFragment;
        "lockTokensIntoDao(address,uint128,uint8)": FunctionFragment;
        "restrictedToUnlockDuration(address)": FunctionFragment;
        "restrictedUnlockTime()": FunctionFragment;
        "setDao(address)": FunctionFragment;
        "startTime()": FunctionFragment;
        "tcp()": FunctionFragment;
        "tokenMinter()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "abdicate" | "allocationCaps" | "dao" | "deployer" | "getTokens" | "getUserAllocation" | "guardian" | "incentiveAllocation" | "increaseAllocation" | "init" | "lockTokensIntoDao" | "restrictedToUnlockDuration" | "restrictedUnlockTime" | "setDao" | "startTime" | "tcp" | "tokenMinter"): FunctionFragment;
    encodeFunctionData(functionFragment: "abdicate", values?: undefined): string;
    encodeFunctionData(functionFragment: "allocationCaps", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "dao", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokens", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getUserAllocation", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "incentiveAllocation", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllocation", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "init", values: [TcpAllocation.InitParamsStruct]): string;
    encodeFunctionData(functionFragment: "lockTokensIntoDao", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "restrictedToUnlockDuration", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "restrictedUnlockTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "setDao", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "tcp", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenMinter", values?: undefined): string;
    decodeFunctionResult(functionFragment: "abdicate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allocationCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dao", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incentiveAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockTokensIntoDao", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "restrictedToUnlockDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "restrictedUnlockTime", data: BytesLike): Result;
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
export interface TcpAllocation extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TcpAllocationInterface;
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
        allocationCaps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        dao(overrides?: CallOverrides): Promise<[string]>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        getTokens(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getUserAllocation(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            MinAverageLockDuration.UserAllocationStructOutput
        ] & {
            _userAllocation: MinAverageLockDuration.UserAllocationStructOutput;
        }>;
        guardian(overrides?: CallOverrides): Promise<[string]>;
        incentiveAllocation(overrides?: CallOverrides): Promise<[string]>;
        increaseAllocation(allocatee: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        init(params: TcpAllocation.InitParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lockTokensIntoDao(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        restrictedToUnlockDuration(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        restrictedUnlockTime(overrides?: CallOverrides): Promise<[BigNumber]>;
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
    allocationCaps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    dao(overrides?: CallOverrides): Promise<string>;
    deployer(overrides?: CallOverrides): Promise<string>;
    getTokens(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getUserAllocation(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<MinAverageLockDuration.UserAllocationStructOutput>;
    guardian(overrides?: CallOverrides): Promise<string>;
    incentiveAllocation(overrides?: CallOverrides): Promise<string>;
    increaseAllocation(allocatee: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    init(params: TcpAllocation.InitParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lockTokensIntoDao(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    restrictedToUnlockDuration(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    restrictedUnlockTime(overrides?: CallOverrides): Promise<BigNumber>;
    setDao(_dao: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startTime(overrides?: CallOverrides): Promise<BigNumber>;
    tcp(overrides?: CallOverrides): Promise<string>;
    tokenMinter(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        abdicate(overrides?: CallOverrides): Promise<void>;
        allocationCaps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        dao(overrides?: CallOverrides): Promise<string>;
        deployer(overrides?: CallOverrides): Promise<string>;
        getTokens(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getUserAllocation(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<MinAverageLockDuration.UserAllocationStructOutput>;
        guardian(overrides?: CallOverrides): Promise<string>;
        incentiveAllocation(overrides?: CallOverrides): Promise<string>;
        increaseAllocation(allocatee: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        init(params: TcpAllocation.InitParamsStruct, overrides?: CallOverrides): Promise<void>;
        lockTokensIntoDao(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        restrictedToUnlockDuration(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        restrictedUnlockTime(overrides?: CallOverrides): Promise<BigNumber>;
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
        allocationCaps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        dao(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        getTokens(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getUserAllocation(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        guardian(overrides?: CallOverrides): Promise<BigNumber>;
        incentiveAllocation(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllocation(allocatee: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        init(params: TcpAllocation.InitParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lockTokensIntoDao(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        restrictedToUnlockDuration(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        restrictedUnlockTime(overrides?: CallOverrides): Promise<BigNumber>;
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
        allocationCaps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dao(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokens(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getUserAllocation(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        incentiveAllocation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllocation(allocatee: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        init(params: TcpAllocation.InitParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lockTokensIntoDao(dest: PromiseOrValue<string>, count: PromiseOrValue<BigNumberish>, lockDurationMonths: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        restrictedToUnlockDuration(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        restrictedUnlockTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDao(_dao: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tcp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenMinter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
