import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export interface DaoPositionCreatorInterface extends utils.Interface {
    functions: {
        "abdicate()": FunctionFragment;
        "dao()": FunctionFragment;
        "guardian()": FunctionFragment;
        "setDao(address)": FunctionFragment;
        "tcp()": FunctionFragment;
        "tokenMinter()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "abdicate" | "dao" | "guardian" | "setDao" | "tcp" | "tokenMinter"): FunctionFragment;
    encodeFunctionData(functionFragment: "abdicate", values?: undefined): string;
    encodeFunctionData(functionFragment: "dao", values?: undefined): string;
    encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "setDao", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "tcp", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenMinter", values?: undefined): string;
    decodeFunctionResult(functionFragment: "abdicate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dao", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDao", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tcp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenMinter", data: BytesLike): Result;
    events: {
        "IncentiveDistributed(address,uint256)": EventFragment;
        "TokensLocked(address,uint8,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "IncentiveDistributed"): EventFragment;
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
export interface DaoPositionCreator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DaoPositionCreatorInterface;
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
        guardian(overrides?: CallOverrides): Promise<[string]>;
        setDao(_dao: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tcp(overrides?: CallOverrides): Promise<[string]>;
        tokenMinter(overrides?: CallOverrides): Promise<[string]>;
    };
    abdicate(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    dao(overrides?: CallOverrides): Promise<string>;
    guardian(overrides?: CallOverrides): Promise<string>;
    setDao(_dao: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tcp(overrides?: CallOverrides): Promise<string>;
    tokenMinter(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        abdicate(overrides?: CallOverrides): Promise<void>;
        dao(overrides?: CallOverrides): Promise<string>;
        guardian(overrides?: CallOverrides): Promise<string>;
        setDao(_dao: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        tcp(overrides?: CallOverrides): Promise<string>;
        tokenMinter(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "IncentiveDistributed(address,uint256)"(dest?: PromiseOrValue<string> | null, count?: null): IncentiveDistributedEventFilter;
        IncentiveDistributed(dest?: PromiseOrValue<string> | null, count?: null): IncentiveDistributedEventFilter;
        "TokensLocked(address,uint8,uint256)"(receiver?: PromiseOrValue<string> | null, lockDurationMonths?: PromiseOrValue<BigNumberish> | null, count?: null): TokensLockedEventFilter;
        TokensLocked(receiver?: PromiseOrValue<string> | null, lockDurationMonths?: PromiseOrValue<BigNumberish> | null, count?: null): TokensLockedEventFilter;
    };
    estimateGas: {
        abdicate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        dao(overrides?: CallOverrides): Promise<BigNumber>;
        guardian(overrides?: CallOverrides): Promise<BigNumber>;
        setDao(_dao: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tcp(overrides?: CallOverrides): Promise<BigNumber>;
        tokenMinter(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        abdicate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        dao(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDao(_dao: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tcp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenMinter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
