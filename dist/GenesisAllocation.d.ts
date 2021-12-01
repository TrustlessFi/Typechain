import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    Authenticator: string;
    Guardian: string;
    TcpAllocation: string;
    GenesisClaimDuration: BigNumberish;
};
export declare type ConstructorParamsStructOutput = [
    string,
    string,
    string,
    BigNumber
] & {
    Authenticator: string;
    Guardian: string;
    TcpAllocation: string;
    GenesisClaimDuration: BigNumber;
};
export declare type AuthStruct = {
    v: BigNumberish;
    r: BytesLike;
    s: BytesLike;
};
export declare type AuthStructOutput = [number, string, string] & {
    v: number;
    r: string;
    s: string;
};
export declare type ClaimAllocationDataStruct = {
    auth: AuthStruct;
    roundID: BigNumberish;
    count: BigNumberish;
};
export declare type ClaimAllocationDataStructOutput = [
    AuthStructOutput,
    number,
    BigNumber
] & {
    auth: AuthStructOutput;
    roundID: number;
    count: BigNumber;
};
export interface GenesisAllocationInterface extends utils.Interface {
    functions: {
        "NAME()": FunctionFragment;
        "abdicate()": FunctionFragment;
        "authenticator()": FunctionFragment;
        "chainID()": FunctionFragment;
        "claimAllocations(((uint8,bytes32,bytes32),uint16,uint128)[])": FunctionFragment;
        "claimedSig(address,uint8,bytes32,bytes32)": FunctionFragment;
        "deadline()": FunctionFragment;
        "extendDeadline(uint64)": FunctionFragment;
        "getMessage(address,uint16,uint128)": FunctionFragment;
        "guardian()": FunctionFragment;
        "tcpAllocation()": FunctionFragment;
        "transferAllocationToIncentiveGuardian(uint128)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
    encodeFunctionData(functionFragment: "abdicate", values?: undefined): string;
    encodeFunctionData(functionFragment: "authenticator", values?: undefined): string;
    encodeFunctionData(functionFragment: "chainID", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimAllocations", values: [ClaimAllocationDataStruct[]]): string;
    encodeFunctionData(functionFragment: "claimedSig", values: [string, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "deadline", values?: undefined): string;
    encodeFunctionData(functionFragment: "extendDeadline", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMessage", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "tcpAllocation", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferAllocationToIncentiveGuardian", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "abdicate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authenticator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAllocations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimedSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extendDeadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tcpAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAllocationToIncentiveGuardian", data: BytesLike): Result;
    events: {
        "DeadlineSet(uint64)": EventFragment;
        "SignatureProcessed(address,uint16,uint128)": EventFragment;
        "TokensTransferredToIncentiveGuardian(uint128)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DeadlineSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignatureProcessed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensTransferredToIncentiveGuardian"): EventFragment;
}
export declare type DeadlineSetEvent = TypedEvent<[BigNumber], {
    deadline: BigNumber;
}>;
export declare type DeadlineSetEventFilter = TypedEventFilter<DeadlineSetEvent>;
export declare type SignatureProcessedEvent = TypedEvent<[
    string,
    number,
    BigNumber
], {
    receiver: string;
    roundID: number;
    count: BigNumber;
}>;
export declare type SignatureProcessedEventFilter = TypedEventFilter<SignatureProcessedEvent>;
export declare type TokensTransferredToIncentiveGuardianEvent = TypedEvent<[
    BigNumber
], {
    count: BigNumber;
}>;
export declare type TokensTransferredToIncentiveGuardianEventFilter = TypedEventFilter<TokensTransferredToIncentiveGuardianEvent>;
export interface GenesisAllocation extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GenesisAllocationInterface;
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
        NAME(overrides?: CallOverrides): Promise<[string]>;
        abdicate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        authenticator(overrides?: CallOverrides): Promise<[string]>;
        chainID(overrides?: CallOverrides): Promise<[BigNumber] & {
            _chainID: BigNumber;
        }>;
        claimAllocations(claimAllocationData: ClaimAllocationDataStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimedSig(arg0: string, arg1: BigNumberish, arg2: BytesLike, arg3: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        deadline(overrides?: CallOverrides): Promise<[BigNumber]>;
        extendDeadline(newDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getMessage(userAddress: string, roundID: BigNumberish, count: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        guardian(overrides?: CallOverrides): Promise<[string]>;
        tcpAllocation(overrides?: CallOverrides): Promise<[string]>;
        transferAllocationToIncentiveGuardian(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    NAME(overrides?: CallOverrides): Promise<string>;
    abdicate(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    authenticator(overrides?: CallOverrides): Promise<string>;
    chainID(overrides?: CallOverrides): Promise<BigNumber>;
    claimAllocations(claimAllocationData: ClaimAllocationDataStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimedSig(arg0: string, arg1: BigNumberish, arg2: BytesLike, arg3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    deadline(overrides?: CallOverrides): Promise<BigNumber>;
    extendDeadline(newDeadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getMessage(userAddress: string, roundID: BigNumberish, count: BigNumberish, overrides?: CallOverrides): Promise<string>;
    guardian(overrides?: CallOverrides): Promise<string>;
    tcpAllocation(overrides?: CallOverrides): Promise<string>;
    transferAllocationToIncentiveGuardian(count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        NAME(overrides?: CallOverrides): Promise<string>;
        abdicate(overrides?: CallOverrides): Promise<void>;
        authenticator(overrides?: CallOverrides): Promise<string>;
        chainID(overrides?: CallOverrides): Promise<BigNumber>;
        claimAllocations(claimAllocationData: ClaimAllocationDataStruct[], overrides?: CallOverrides): Promise<void>;
        claimedSig(arg0: string, arg1: BigNumberish, arg2: BytesLike, arg3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        deadline(overrides?: CallOverrides): Promise<BigNumber>;
        extendDeadline(newDeadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getMessage(userAddress: string, roundID: BigNumberish, count: BigNumberish, overrides?: CallOverrides): Promise<string>;
        guardian(overrides?: CallOverrides): Promise<string>;
        tcpAllocation(overrides?: CallOverrides): Promise<string>;
        transferAllocationToIncentiveGuardian(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DeadlineSet(uint64)"(deadline?: null): DeadlineSetEventFilter;
        DeadlineSet(deadline?: null): DeadlineSetEventFilter;
        "SignatureProcessed(address,uint16,uint128)"(receiver?: string | null, roundID?: BigNumberish | null, count?: null): SignatureProcessedEventFilter;
        SignatureProcessed(receiver?: string | null, roundID?: BigNumberish | null, count?: null): SignatureProcessedEventFilter;
        "TokensTransferredToIncentiveGuardian(uint128)"(count?: null): TokensTransferredToIncentiveGuardianEventFilter;
        TokensTransferredToIncentiveGuardian(count?: null): TokensTransferredToIncentiveGuardianEventFilter;
    };
    estimateGas: {
        NAME(overrides?: CallOverrides): Promise<BigNumber>;
        abdicate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        authenticator(overrides?: CallOverrides): Promise<BigNumber>;
        chainID(overrides?: CallOverrides): Promise<BigNumber>;
        claimAllocations(claimAllocationData: ClaimAllocationDataStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimedSig(arg0: string, arg1: BigNumberish, arg2: BytesLike, arg3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        deadline(overrides?: CallOverrides): Promise<BigNumber>;
        extendDeadline(newDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getMessage(userAddress: string, roundID: BigNumberish, count: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        guardian(overrides?: CallOverrides): Promise<BigNumber>;
        tcpAllocation(overrides?: CallOverrides): Promise<BigNumber>;
        transferAllocationToIncentiveGuardian(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        abdicate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        authenticator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimAllocations(claimAllocationData: ClaimAllocationDataStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimedSig(arg0: string, arg1: BigNumberish, arg2: BytesLike, arg3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extendDeadline(newDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getMessage(userAddress: string, roundID: BigNumberish, count: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tcpAllocation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferAllocationToIncentiveGuardian(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
