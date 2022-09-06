import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface TimelockInterface extends utils.Interface {
    functions: {
        "GRACE_PERIOD()": FunctionFragment;
        "MAXIMUM_DELAY()": FunctionFragment;
        "MINIMUM_DELAY()": FunctionFragment;
        "admin()": FunctionFragment;
        "cancelTransaction(address,string,bytes,uint256)": FunctionFragment;
        "delay()": FunctionFragment;
        "deployer()": FunctionFragment;
        "executeTransaction(address,string,bytes,uint256)": FunctionFragment;
        "getAdmin()": FunctionFragment;
        "init(address)": FunctionFragment;
        "queueTransaction(address,string,bytes,uint256)": FunctionFragment;
        "queuedTransactions(bytes32)": FunctionFragment;
        "setDelay(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GRACE_PERIOD" | "MAXIMUM_DELAY" | "MINIMUM_DELAY" | "admin" | "cancelTransaction" | "delay" | "deployer" | "executeTransaction" | "getAdmin" | "init" | "queueTransaction" | "queuedTransactions" | "setDelay"): FunctionFragment;
    encodeFunctionData(functionFragment: "GRACE_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAXIMUM_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINIMUM_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelTransaction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "delay", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeTransaction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "queueTransaction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "queuedTransactions", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setDelay", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "GRACE_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAXIMUM_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINIMUM_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelay", data: BytesLike): Result;
    events: {
        "CancelTransaction(bytes32,address,string,bytes,uint256)": EventFragment;
        "ExecuteTransaction(bytes32,address,string,bytes,uint256)": EventFragment;
        "NewAdmin(address)": EventFragment;
        "NewDelay(uint256)": EventFragment;
        "NewPendingAdmin(address)": EventFragment;
        "QueueTransaction(bytes32,address,string,bytes,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CancelTransaction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecuteTransaction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewDelay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QueueTransaction"): EventFragment;
}
export interface CancelTransactionEventObject {
    txHash: string;
    target: string;
    signature: string;
    data: string;
    eta: BigNumber;
}
export declare type CancelTransactionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber
], CancelTransactionEventObject>;
export declare type CancelTransactionEventFilter = TypedEventFilter<CancelTransactionEvent>;
export interface ExecuteTransactionEventObject {
    txHash: string;
    target: string;
    signature: string;
    data: string;
    eta: BigNumber;
}
export declare type ExecuteTransactionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber
], ExecuteTransactionEventObject>;
export declare type ExecuteTransactionEventFilter = TypedEventFilter<ExecuteTransactionEvent>;
export interface NewAdminEventObject {
    newAdmin: string;
}
export declare type NewAdminEvent = TypedEvent<[string], NewAdminEventObject>;
export declare type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;
export interface NewDelayEventObject {
    newDelay: BigNumber;
}
export declare type NewDelayEvent = TypedEvent<[BigNumber], NewDelayEventObject>;
export declare type NewDelayEventFilter = TypedEventFilter<NewDelayEvent>;
export interface NewPendingAdminEventObject {
    newPendingAdmin: string;
}
export declare type NewPendingAdminEvent = TypedEvent<[
    string
], NewPendingAdminEventObject>;
export declare type NewPendingAdminEventFilter = TypedEventFilter<NewPendingAdminEvent>;
export interface QueueTransactionEventObject {
    txHash: string;
    target: string;
    signature: string;
    data: string;
    eta: BigNumber;
}
export declare type QueueTransactionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber
], QueueTransactionEventObject>;
export declare type QueueTransactionEventFilter = TypedEventFilter<QueueTransactionEvent>;
export interface Timelock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TimelockInterface;
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
        GRACE_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAXIMUM_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        MINIMUM_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        cancelTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        delay(overrides?: CallOverrides): Promise<[BigNumber]>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        executeTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAdmin(overrides?: CallOverrides): Promise<[string]>;
        init(_admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        queueTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        queuedTransactions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        setDelay(delay_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    admin(overrides?: CallOverrides): Promise<string>;
    cancelTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    delay(overrides?: CallOverrides): Promise<BigNumber>;
    deployer(overrides?: CallOverrides): Promise<string>;
    executeTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAdmin(overrides?: CallOverrides): Promise<string>;
    init(_admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    queueTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    queuedTransactions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    setDelay(delay_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<string>;
        cancelTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<string>;
        executeTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getAdmin(overrides?: CallOverrides): Promise<string>;
        init(_admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        queueTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        queuedTransactions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        setDelay(delay_: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CancelTransaction(bytes32,address,string,bytes,uint256)"(txHash?: PromiseOrValue<BytesLike> | null, target?: PromiseOrValue<string> | null, signature?: null, data?: null, eta?: null): CancelTransactionEventFilter;
        CancelTransaction(txHash?: PromiseOrValue<BytesLike> | null, target?: PromiseOrValue<string> | null, signature?: null, data?: null, eta?: null): CancelTransactionEventFilter;
        "ExecuteTransaction(bytes32,address,string,bytes,uint256)"(txHash?: PromiseOrValue<BytesLike> | null, target?: PromiseOrValue<string> | null, signature?: null, data?: null, eta?: null): ExecuteTransactionEventFilter;
        ExecuteTransaction(txHash?: PromiseOrValue<BytesLike> | null, target?: PromiseOrValue<string> | null, signature?: null, data?: null, eta?: null): ExecuteTransactionEventFilter;
        "NewAdmin(address)"(newAdmin?: PromiseOrValue<string> | null): NewAdminEventFilter;
        NewAdmin(newAdmin?: PromiseOrValue<string> | null): NewAdminEventFilter;
        "NewDelay(uint256)"(newDelay?: PromiseOrValue<BigNumberish> | null): NewDelayEventFilter;
        NewDelay(newDelay?: PromiseOrValue<BigNumberish> | null): NewDelayEventFilter;
        "NewPendingAdmin(address)"(newPendingAdmin?: PromiseOrValue<string> | null): NewPendingAdminEventFilter;
        NewPendingAdmin(newPendingAdmin?: PromiseOrValue<string> | null): NewPendingAdminEventFilter;
        "QueueTransaction(bytes32,address,string,bytes,uint256)"(txHash?: PromiseOrValue<BytesLike> | null, target?: PromiseOrValue<string> | null, signature?: null, data?: null, eta?: null): QueueTransactionEventFilter;
        QueueTransaction(txHash?: PromiseOrValue<BytesLike> | null, target?: PromiseOrValue<string> | null, signature?: null, data?: null, eta?: null): QueueTransactionEventFilter;
    };
    estimateGas: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        cancelTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        init(_admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        queueTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        queuedTransactions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        setDelay(delay_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAXIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(_admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        queueTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        queuedTransactions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDelay(delay_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
