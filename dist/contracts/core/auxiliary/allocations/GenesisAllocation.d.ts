import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace GenesisAllocation {
    type ConstructorParamsStruct = {
        Authenticator: PromiseOrValue<string>;
        Guardian: PromiseOrValue<string>;
        TcpAllocation: PromiseOrValue<string>;
        GenesisClaimDuration: PromiseOrValue<BigNumberish>;
    };
    type ConstructorParamsStructOutput = [
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
    type AuthStruct = {
        v: PromiseOrValue<BigNumberish>;
        r: PromiseOrValue<BytesLike>;
        s: PromiseOrValue<BytesLike>;
    };
    type AuthStructOutput = [number, string, string] & {
        v: number;
        r: string;
        s: string;
    };
    type ClaimAllocationDataStruct = {
        auth: GenesisAllocation.AuthStruct;
        roundID: PromiseOrValue<BigNumberish>;
        count: PromiseOrValue<BigNumberish>;
    };
    type ClaimAllocationDataStructOutput = [
        GenesisAllocation.AuthStructOutput,
        BigNumber,
        BigNumber
    ] & {
        auth: GenesisAllocation.AuthStructOutput;
        roundID: BigNumber;
        count: BigNumber;
    };
}
export interface GenesisAllocationInterface extends utils.Interface {
    functions: {
        "NAME()": FunctionFragment;
        "abdicate()": FunctionFragment;
        "authenticator()": FunctionFragment;
        "claimAllocations(((uint8,bytes32,bytes32),uint256,uint128)[])": FunctionFragment;
        "claimedSig(address,uint256)": FunctionFragment;
        "deadline()": FunctionFragment;
        "extendDeadline(uint64)": FunctionFragment;
        "getMessage(address,uint256,uint128)": FunctionFragment;
        "guardian()": FunctionFragment;
        "tcpAllocation()": FunctionFragment;
        "transferAllocationToIncentiveAllocation(uint128)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "NAME" | "abdicate" | "authenticator" | "claimAllocations" | "claimedSig" | "deadline" | "extendDeadline" | "getMessage" | "guardian" | "tcpAllocation" | "transferAllocationToIncentiveAllocation"): FunctionFragment;
    encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
    encodeFunctionData(functionFragment: "abdicate", values?: undefined): string;
    encodeFunctionData(functionFragment: "authenticator", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimAllocations", values: [GenesisAllocation.ClaimAllocationDataStruct[]]): string;
    encodeFunctionData(functionFragment: "claimedSig", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "deadline", values?: undefined): string;
    encodeFunctionData(functionFragment: "extendDeadline", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getMessage", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "tcpAllocation", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferAllocationToIncentiveAllocation", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "abdicate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authenticator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAllocations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimedSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extendDeadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tcpAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAllocationToIncentiveAllocation", data: BytesLike): Result;
    events: {
        "DeadlineSet(uint64)": EventFragment;
        "SignatureProcessed(address,uint256,uint128)": EventFragment;
        "TokensTransferredToIncentiveAllocation(uint128)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DeadlineSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignatureProcessed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensTransferredToIncentiveAllocation"): EventFragment;
}
export interface DeadlineSetEventObject {
    deadline: BigNumber;
}
export declare type DeadlineSetEvent = TypedEvent<[BigNumber], DeadlineSetEventObject>;
export declare type DeadlineSetEventFilter = TypedEventFilter<DeadlineSetEvent>;
export interface SignatureProcessedEventObject {
    receiver: string;
    roundID: BigNumber;
    count: BigNumber;
}
export declare type SignatureProcessedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], SignatureProcessedEventObject>;
export declare type SignatureProcessedEventFilter = TypedEventFilter<SignatureProcessedEvent>;
export interface TokensTransferredToIncentiveAllocationEventObject {
    count: BigNumber;
}
export declare type TokensTransferredToIncentiveAllocationEvent = TypedEvent<[
    BigNumber
], TokensTransferredToIncentiveAllocationEventObject>;
export declare type TokensTransferredToIncentiveAllocationEventFilter = TypedEventFilter<TokensTransferredToIncentiveAllocationEvent>;
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
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        authenticator(overrides?: CallOverrides): Promise<[string]>;
        claimAllocations(claimAllocationData: GenesisAllocation.ClaimAllocationDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimedSig(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        deadline(overrides?: CallOverrides): Promise<[BigNumber]>;
        extendDeadline(newDeadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getMessage(userAddress: PromiseOrValue<string>, roundID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        guardian(overrides?: CallOverrides): Promise<[string]>;
        tcpAllocation(overrides?: CallOverrides): Promise<[string]>;
        transferAllocationToIncentiveAllocation(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    NAME(overrides?: CallOverrides): Promise<string>;
    abdicate(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    authenticator(overrides?: CallOverrides): Promise<string>;
    claimAllocations(claimAllocationData: GenesisAllocation.ClaimAllocationDataStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimedSig(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    deadline(overrides?: CallOverrides): Promise<BigNumber>;
    extendDeadline(newDeadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getMessage(userAddress: PromiseOrValue<string>, roundID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    guardian(overrides?: CallOverrides): Promise<string>;
    tcpAllocation(overrides?: CallOverrides): Promise<string>;
    transferAllocationToIncentiveAllocation(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        NAME(overrides?: CallOverrides): Promise<string>;
        abdicate(overrides?: CallOverrides): Promise<void>;
        authenticator(overrides?: CallOverrides): Promise<string>;
        claimAllocations(claimAllocationData: GenesisAllocation.ClaimAllocationDataStruct[], overrides?: CallOverrides): Promise<void>;
        claimedSig(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        deadline(overrides?: CallOverrides): Promise<BigNumber>;
        extendDeadline(newDeadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getMessage(userAddress: PromiseOrValue<string>, roundID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        guardian(overrides?: CallOverrides): Promise<string>;
        tcpAllocation(overrides?: CallOverrides): Promise<string>;
        transferAllocationToIncentiveAllocation(count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DeadlineSet(uint64)"(deadline?: null): DeadlineSetEventFilter;
        DeadlineSet(deadline?: null): DeadlineSetEventFilter;
        "SignatureProcessed(address,uint256,uint128)"(receiver?: PromiseOrValue<string> | null, roundID?: PromiseOrValue<BigNumberish> | null, count?: null): SignatureProcessedEventFilter;
        SignatureProcessed(receiver?: PromiseOrValue<string> | null, roundID?: PromiseOrValue<BigNumberish> | null, count?: null): SignatureProcessedEventFilter;
        "TokensTransferredToIncentiveAllocation(uint128)"(count?: null): TokensTransferredToIncentiveAllocationEventFilter;
        TokensTransferredToIncentiveAllocation(count?: null): TokensTransferredToIncentiveAllocationEventFilter;
    };
    estimateGas: {
        NAME(overrides?: CallOverrides): Promise<BigNumber>;
        abdicate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        authenticator(overrides?: CallOverrides): Promise<BigNumber>;
        claimAllocations(claimAllocationData: GenesisAllocation.ClaimAllocationDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimedSig(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        deadline(overrides?: CallOverrides): Promise<BigNumber>;
        extendDeadline(newDeadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getMessage(userAddress: PromiseOrValue<string>, roundID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        guardian(overrides?: CallOverrides): Promise<BigNumber>;
        tcpAllocation(overrides?: CallOverrides): Promise<BigNumber>;
        transferAllocationToIncentiveAllocation(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        abdicate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        authenticator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimAllocations(claimAllocationData: GenesisAllocation.ClaimAllocationDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimedSig(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extendDeadline(newDeadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getMessage(userAddress: PromiseOrValue<string>, roundID: PromiseOrValue<BigNumberish>, count: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tcpAllocation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferAllocationToIncentiveAllocation(count: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
