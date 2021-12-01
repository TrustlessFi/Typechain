import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IEnforcedDecentralizationInterface extends utils.Interface {
    functions: {
        "currentPhase()": FunctionFragment;
        "requireValidAction(address,string)": FunctionFragment;
        "setPhaseOneStartTime(uint64)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "currentPhase", values?: undefined): string;
    encodeFunctionData(functionFragment: "requireValidAction", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setPhaseOneStartTime", values: [BigNumberish]): string;
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
export declare type ActionBlacklistedEvent = TypedEvent<[
    string,
    string
], {
    target: string;
    signature: string;
}>;
export declare type ActionBlacklistedEventFilter = TypedEventFilter<ActionBlacklistedEvent>;
export declare type PhaseOneStartTimeSetEvent = TypedEvent<[
    BigNumber
], {
    startTime: BigNumber;
}>;
export declare type PhaseOneStartTimeSetEventFilter = TypedEventFilter<PhaseOneStartTimeSetEvent>;
export declare type PhaseStartDelayedEvent = TypedEvent<[
    number,
    BigNumber,
    number
], {
    phase: number;
    startTime: BigNumber;
    delaysRemaining: number;
}>;
export declare type PhaseStartDelayedEventFilter = TypedEventFilter<PhaseStartDelayedEvent>;
export declare type UpdateLockDelayedEvent = TypedEvent<[
    BigNumber,
    number
], {
    locktime: BigNumber;
    delaysRemaining: number;
}>;
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
        requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<[void]>;
        setPhaseOneStartTime(phaseOneStartTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    currentPhase(overrides?: CallOverrides): Promise<number>;
    requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<void>;
    setPhaseOneStartTime(phaseOneStartTime: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        currentPhase(overrides?: CallOverrides): Promise<number>;
        requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<void>;
        setPhaseOneStartTime(phaseOneStartTime: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ActionBlacklisted(address,string)"(target?: string | null, signature?: string | null): ActionBlacklistedEventFilter;
        ActionBlacklisted(target?: string | null, signature?: string | null): ActionBlacklistedEventFilter;
        "PhaseOneStartTimeSet(uint64)"(startTime?: null): PhaseOneStartTimeSetEventFilter;
        PhaseOneStartTimeSet(startTime?: null): PhaseOneStartTimeSetEventFilter;
        "PhaseStartDelayed(uint8,uint64,uint8)"(phase?: BigNumberish | null, startTime?: null, delaysRemaining?: null): PhaseStartDelayedEventFilter;
        PhaseStartDelayed(phase?: BigNumberish | null, startTime?: null, delaysRemaining?: null): PhaseStartDelayedEventFilter;
        "UpdateLockDelayed(uint64,uint8)"(locktime?: null, delaysRemaining?: null): UpdateLockDelayedEventFilter;
        UpdateLockDelayed(locktime?: null, delaysRemaining?: null): UpdateLockDelayedEventFilter;
    };
    estimateGas: {
        currentPhase(overrides?: CallOverrides): Promise<BigNumber>;
        requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<BigNumber>;
        setPhaseOneStartTime(phaseOneStartTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        currentPhase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireValidAction(target: string, signature: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPhaseOneStartTime(phaseOneStartTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
