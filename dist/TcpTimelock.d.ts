import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ConstructorParamsStruct = {
    Governor: string;
    Guardian: string;
};
export declare type ConstructorParamsStructOutput = [string, string] & {
    Governor: string;
    Guardian: string;
};
export interface TcpTimelockInterface extends utils.Interface {
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
        "guardian()": FunctionFragment;
        "init(address)": FunctionFragment;
        "queueTransaction(address,string,bytes,uint256)": FunctionFragment;
        "queuedTransactions(bytes32)": FunctionFragment;
        "setDelay(uint256)": FunctionFragment;
        "validUpdate(bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "GRACE_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAXIMUM_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINIMUM_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelTransaction", values: [string, string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "delay", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeTransaction", values: [string, string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values: [string]): string;
    encodeFunctionData(functionFragment: "queueTransaction", values: [string, string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "queuedTransactions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "validUpdate", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "GRACE_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAXIMUM_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINIMUM_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validUpdate", data: BytesLike): Result;
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
export declare type CancelTransactionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber
], {
    txHash: string;
    target: string;
    signature: string;
    data: string;
    eta: BigNumber;
}>;
export declare type CancelTransactionEventFilter = TypedEventFilter<CancelTransactionEvent>;
export declare type ExecuteTransactionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber
], {
    txHash: string;
    target: string;
    signature: string;
    data: string;
    eta: BigNumber;
}>;
export declare type ExecuteTransactionEventFilter = TypedEventFilter<ExecuteTransactionEvent>;
export declare type NewAdminEvent = TypedEvent<[string], {
    newAdmin: string;
}>;
export declare type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;
export declare type NewDelayEvent = TypedEvent<[BigNumber], {
    newDelay: BigNumber;
}>;
export declare type NewDelayEventFilter = TypedEventFilter<NewDelayEvent>;
export declare type NewPendingAdminEvent = TypedEvent<[
    string
], {
    newPendingAdmin: string;
}>;
export declare type NewPendingAdminEventFilter = TypedEventFilter<NewPendingAdminEvent>;
export declare type QueueTransactionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber
], {
    txHash: string;
    target: string;
    signature: string;
    data: string;
    eta: BigNumber;
}>;
export declare type QueueTransactionEventFilter = TypedEventFilter<QueueTransactionEvent>;
export interface TcpTimelock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TcpTimelockInterface;
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
        cancelTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delay(overrides?: CallOverrides): Promise<[BigNumber]>;
        deployer(overrides?: CallOverrides): Promise<[string]>;
        executeTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAdmin(overrides?: CallOverrides): Promise<[string]>;
        guardian(overrides?: CallOverrides): Promise<[string]>;
        init(_admin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queueTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        setDelay(delay_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validUpdate(action: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    admin(overrides?: CallOverrides): Promise<string>;
    cancelTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delay(overrides?: CallOverrides): Promise<BigNumber>;
    deployer(overrides?: CallOverrides): Promise<string>;
    executeTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAdmin(overrides?: CallOverrides): Promise<string>;
    guardian(overrides?: CallOverrides): Promise<string>;
    init(_admin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queueTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    setDelay(delay_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validUpdate(action: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<string>;
        cancelTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: CallOverrides): Promise<void>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<string>;
        executeTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getAdmin(overrides?: CallOverrides): Promise<string>;
        guardian(overrides?: CallOverrides): Promise<string>;
        init(_admin: string, overrides?: CallOverrides): Promise<void>;
        queueTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: CallOverrides): Promise<string>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        setDelay(delay_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        validUpdate(action: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "CancelTransaction(bytes32,address,string,bytes,uint256)"(txHash?: BytesLike | null, target?: string | null, signature?: null, data?: null, eta?: null): CancelTransactionEventFilter;
        CancelTransaction(txHash?: BytesLike | null, target?: string | null, signature?: null, data?: null, eta?: null): CancelTransactionEventFilter;
        "ExecuteTransaction(bytes32,address,string,bytes,uint256)"(txHash?: BytesLike | null, target?: string | null, signature?: null, data?: null, eta?: null): ExecuteTransactionEventFilter;
        ExecuteTransaction(txHash?: BytesLike | null, target?: string | null, signature?: null, data?: null, eta?: null): ExecuteTransactionEventFilter;
        "NewAdmin(address)"(newAdmin?: string | null): NewAdminEventFilter;
        NewAdmin(newAdmin?: string | null): NewAdminEventFilter;
        "NewDelay(uint256)"(newDelay?: BigNumberish | null): NewDelayEventFilter;
        NewDelay(newDelay?: BigNumberish | null): NewDelayEventFilter;
        "NewPendingAdmin(address)"(newPendingAdmin?: string | null): NewPendingAdminEventFilter;
        NewPendingAdmin(newPendingAdmin?: string | null): NewPendingAdminEventFilter;
        "QueueTransaction(bytes32,address,string,bytes,uint256)"(txHash?: BytesLike | null, target?: string | null, signature?: null, data?: null, eta?: null): QueueTransactionEventFilter;
        QueueTransaction(txHash?: BytesLike | null, target?: string | null, signature?: null, data?: null, eta?: null): QueueTransactionEventFilter;
    };
    estimateGas: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        cancelTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        deployer(overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        guardian(overrides?: CallOverrides): Promise<BigNumber>;
        init(_admin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queueTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setDelay(delay_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validUpdate(action: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAXIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(_admin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queueTransaction(target: string, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDelay(delay_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validUpdate(action: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
