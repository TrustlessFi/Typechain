import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IEnforcedDecentralizationInterface extends utils.Interface {
    functions: {
        "currentPhase()": FunctionFragment;
        "requireValidAction(address,string)": FunctionFragment;
        "setPhaseOneStartTime(uint64)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "currentPhase" | "requireValidAction" | "setPhaseOneStartTime"): FunctionFragment;
    encodeFunctionData(functionFragment: "currentPhase", values?: undefined): string;
    encodeFunctionData(functionFragment: "requireValidAction", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setPhaseOneStartTime", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "currentPhase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireValidAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPhaseOneStartTime", data: BytesLike): Result;
    events: {
        "ActionBlacklisted(address,string)": EventFragment;
        "PhaseOneStartTimeSet(uint64)": EventFragment;
        "PhaseStartDelayed(uint8,uint64,uint8)": EventFragment;
        "UpdateLockDelayed(uint64,uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ActionBlacklisted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PhaseOneStartTimeSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PhaseStartDelayed"): EventFragment;
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
export interface UpdateLockDelayedEventObject {
    locktime: BigNumber;
    delaysRemaining: number;
}
export declare type UpdateLockDelayedEvent = TypedEvent<[
    BigNumber,
    number
], UpdateLockDelayedEventObject>;
export declare type UpdateLockDelayedEventFilter = TypedEventFilter<UpdateLockDelayedEvent>;
export interface IEnforcedDecentralization extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IEnforcedDecentralizationInterface;
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
        currentPhase(overrides?: CallOverrides): Promise<[number]>;
        requireValidAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[void]>;
        setPhaseOneStartTime(phaseOneStartTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    currentPhase(overrides?: CallOverrides): Promise<number>;
    requireValidAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    setPhaseOneStartTime(phaseOneStartTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        currentPhase(overrides?: CallOverrides): Promise<number>;
        requireValidAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setPhaseOneStartTime(phaseOneStartTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ActionBlacklisted(address,string)"(target?: PromiseOrValue<string> | null, signature?: PromiseOrValue<string> | null): ActionBlacklistedEventFilter;
        ActionBlacklisted(target?: PromiseOrValue<string> | null, signature?: PromiseOrValue<string> | null): ActionBlacklistedEventFilter;
        "PhaseOneStartTimeSet(uint64)"(startTime?: null): PhaseOneStartTimeSetEventFilter;
        PhaseOneStartTimeSet(startTime?: null): PhaseOneStartTimeSetEventFilter;
        "PhaseStartDelayed(uint8,uint64,uint8)"(phase?: PromiseOrValue<BigNumberish> | null, startTime?: null, delaysRemaining?: null): PhaseStartDelayedEventFilter;
        PhaseStartDelayed(phase?: PromiseOrValue<BigNumberish> | null, startTime?: null, delaysRemaining?: null): PhaseStartDelayedEventFilter;
        "UpdateLockDelayed(uint64,uint8)"(locktime?: null, delaysRemaining?: null): UpdateLockDelayedEventFilter;
        UpdateLockDelayed(locktime?: null, delaysRemaining?: null): UpdateLockDelayedEventFilter;
    };
    estimateGas: {
        currentPhase(overrides?: CallOverrides): Promise<BigNumber>;
        requireValidAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setPhaseOneStartTime(phaseOneStartTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        currentPhase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireValidAction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPhaseOneStartTime(phaseOneStartTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
