import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ITCPInterface extends utils.Interface {
    functions: {
        "addGovernor(address)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "burnFrom(address,uint256)": FunctionFragment;
        "mintTo(address,uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addGovernor", values: [string]): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "burnFrom", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintTo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addGovernor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    spender: string;
    value: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface ITCP extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITCPInterface;
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
        addGovernor(newGovernor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnFrom(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintTo(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addGovernor(newGovernor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnFrom(account: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintTo(to: string, count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addGovernor(newGovernor: string, overrides?: CallOverrides): Promise<void>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        burnFrom(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mintTo(to: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        addGovernor(newGovernor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnFrom(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintTo(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addGovernor(newGovernor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnFrom(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintTo(to: string, count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
