import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface TimelockInterfaceInterface extends utils.Interface {
    functions: {
        "GRACE_PERIOD()": FunctionFragment;
        "acceptAdmin()": FunctionFragment;
        "cancelTransaction(address,string,bytes,uint256)": FunctionFragment;
        "delay()": FunctionFragment;
        "executeTransaction(address,string,bytes,uint256)": FunctionFragment;
        "queueTransaction(address,string,bytes,uint256)": FunctionFragment;
        "queuedTransactions(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GRACE_PERIOD" | "acceptAdmin" | "cancelTransaction" | "delay" | "executeTransaction" | "queueTransaction" | "queuedTransactions"): FunctionFragment;
    encodeFunctionData(functionFragment: "GRACE_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelTransaction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "delay", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeTransaction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "queueTransaction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "queuedTransactions", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "GRACE_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedTransactions", data: BytesLike): Result;
    events: {};
}
export interface TimelockInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TimelockInterfaceInterface;
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
        acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        delay(overrides?: CallOverrides): Promise<[BigNumber]>;
        executeTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        queueTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        queuedTransactions(hash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    acceptAdmin(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    delay(overrides?: CallOverrides): Promise<BigNumber>;
    executeTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    queueTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    queuedTransactions(hash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        acceptAdmin(overrides?: CallOverrides): Promise<void>;
        cancelTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        queueTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        queuedTransactions(hash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        queueTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        queuedTransactions(hash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        queueTransaction(target: PromiseOrValue<string>, signature: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, eta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        queuedTransactions(hash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
