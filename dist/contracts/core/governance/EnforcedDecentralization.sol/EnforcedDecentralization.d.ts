import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace IEnforcedDecentralization {
    type ConstructorParamsStruct = {
        Governor: PromiseOrValue<string>;
        ProtocolLock: PromiseOrValue<string>;
        Tcp: PromiseOrValue<string>;
    };
    type ConstructorParamsStructOutput = [string, string, string] & {
        Governor: string;
        ProtocolLock: string;
        Tcp: string;
    };
}
export interface EnforcedDecentralizationInterface extends utils.Interface {
    functions: {
        "blacklistAction(address,string)": FunctionFragment;
        "currentPhase()": FunctionFragment;
        "delayPhaseStartTime(uint8)": FunctionFragment;
        "governor()": FunctionFragment;
        "isBlacklistedAction(address,bytes4)": FunctionFragment;
        "isPermanentAction(address,bytes4)": FunctionFragment;
        "isProtocolAction(address,bytes4)": FunctionFragment;
        "isUpgradeAction(address,bytes4)": FunctionFragment;
        "phaseInfo(uint8)": FunctionFragment;
        "requireValidAction(address,string)": FunctionFragment;
        "setPhaseOneStartTime(uint64)": FunctionFragment;
        "stopped()": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "blacklistAction" | "currentPhase" | "delayPhaseStartTime" | "governor" | "isBlacklistedAction" | "isPermanentAction" | "isProtocolAction" | "isUpgradeAction" | "phaseInfo" | "requireValidAction" | "setPhaseOneStartTime" | "stopped" | "validUpdate"): FunctionFragment;
    encodeFunctionData(functionFragment: "blacklistAction", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "currentPhase", values?: undefined): string;
    encodeFunctionData(functionFragment: "delayPhaseStartTime", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "governor", values?: undefined): string;
    encodeFunctionData(functionFragment: "isBlacklistedAction", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isPermanentAction", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isProtocolAction", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isUpgradeAction", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "phaseInfo", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "requireValidAction", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setPhaseOneStartTime", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "blacklistAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPhase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayPhaseStartTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBlacklistedAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPermanentAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isProtocolAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isUpgradeAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "phaseInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireValidAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPhaseOneStartTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
    events: {
        "ActionBlacklisted(address,string)": EventFragment;
        "PhaseOneStartTimeSet(uint64)": EventFragment;
        "PhaseStartDelayed(uint8,uint64,uint8)": EventFragment;
        "Stopped()": EventFragment;
        "UpdateLockDelayed(uint64,uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ActionBlacklisted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PhaseOneStartTimeSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PhaseStartDelayed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateLockDelayed"): EventFragment;
}
export interface ActionBlacklistedEventObject {
    target: string;
    signature: string;
}
export declare type ActionBlacklistedEvent = TypedEvent<[
    string,
    string
], ActionBlacklistedEventObject>;
export declare type ActionBlacklistedEventFilter = TypedEventFilter<ActionBlacklistedEvent>;
export interface PhaseOneStartTimeSetEventObject {
    startTime: BigNumber;
}
export declare type PhaseOneStartTimeSetEvent = TypedEvent<[
    BigNumber
], PhaseOneStartTimeSetEventObject>;
export declare type PhaseOneStartTimeSetEventFilter = TypedEventFilter<PhaseOneStartTimeSetEvent>;
export interface PhaseStartDelayedEventObject {
    phase: number;
    startTime: BigNumber;
    delaysRemaining: number;
}
export declare type PhaseStartDelayedEvent = TypedEvent<[
    number,
    BigNumber,
    number
], PhaseStartDelayedEventObject>;
export declare type PhaseStartDelayedEventFilter = TypedEventFilter<PhaseStartDelayedEvent>;
export interface StoppedEventObject {
}
export declare type StoppedEvent = TypedEvent<[], StoppedEventObject>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
export interface UpdateLockDelayedEventObject {
    locktime: BigNumber;
    delaysRemaining: number;
}
export declare type UpdateLockDelayedEvent = TypedEvent<[
    BigNumber,
    number
], UpdateLockDelayedEventObject>;
export declare type UpdateLockDelayedEventFilter = TypedEventFilter<UpdateLockDelayedEvent>;
export interface EnforcedDecentralization extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EnforcedDecentralizationInterface;
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
        blacklistAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        currentPhase(overrides?: CallOverrides): Promise<[number]>;
        delayPhaseStartTime(phaseNumber: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        isBlacklistedAction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        isPermanentAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        isProtocolAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        isUpgradeAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        phaseInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            number
        ] & {
            startTime: BigNumber;
            phaseStartDelaysRemaining: number;
        }>;
        requireValidAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[void]>;
        setPhaseOneStartTime(phaseOneStartTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    blacklistAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    currentPhase(overrides?: CallOverrides): Promise<number>;
    delayPhaseStartTime(phaseNumber: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    governor(overrides?: CallOverrides): Promise<string>;
    isBlacklistedAction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    isPermanentAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    isProtocolAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    isUpgradeAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    phaseInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        number
    ] & {
        startTime: BigNumber;
        phaseStartDelaysRemaining: number;
    }>;
    requireValidAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    setPhaseOneStartTime(phaseOneStartTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        blacklistAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        currentPhase(overrides?: CallOverrides): Promise<number>;
        delayPhaseStartTime(phaseNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        governor(overrides?: CallOverrides): Promise<string>;
        isBlacklistedAction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        isPermanentAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        isProtocolAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        isUpgradeAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        phaseInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            number
        ] & {
            startTime: BigNumber;
            phaseStartDelaysRemaining: number;
        }>;
        requireValidAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setPhaseOneStartTime(phaseOneStartTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "ActionBlacklisted(address,string)"(target?: PromiseOrValue<string> | null, signature?: PromiseOrValue<string> | null): ActionBlacklistedEventFilter;
        ActionBlacklisted(target?: PromiseOrValue<string> | null, signature?: PromiseOrValue<string> | null): ActionBlacklistedEventFilter;
        "PhaseOneStartTimeSet(uint64)"(startTime?: null): PhaseOneStartTimeSetEventFilter;
        PhaseOneStartTimeSet(startTime?: null): PhaseOneStartTimeSetEventFilter;
        "PhaseStartDelayed(uint8,uint64,uint8)"(phase?: PromiseOrValue<BigNumberish> | null, startTime?: null, delaysRemaining?: null): PhaseStartDelayedEventFilter;
        PhaseStartDelayed(phase?: PromiseOrValue<BigNumberish> | null, startTime?: null, delaysRemaining?: null): PhaseStartDelayedEventFilter;
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
        "UpdateLockDelayed(uint64,uint8)"(locktime?: null, delaysRemaining?: null): UpdateLockDelayedEventFilter;
        UpdateLockDelayed(locktime?: null, delaysRemaining?: null): UpdateLockDelayedEventFilter;
    };
    estimateGas: {
        blacklistAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        currentPhase(overrides?: CallOverrides): Promise<BigNumber>;
        delayPhaseStartTime(phaseNumber: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        isBlacklistedAction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isPermanentAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isProtocolAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isUpgradeAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        phaseInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        requireValidAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setPhaseOneStartTime(phaseOneStartTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        blacklistAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        currentPhase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delayPhaseStartTime(phaseNumber: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBlacklistedAction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPermanentAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isProtocolAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isUpgradeAction(target: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        phaseInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireValidAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPhaseOneStartTime(phaseOneStartTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validUpdate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
