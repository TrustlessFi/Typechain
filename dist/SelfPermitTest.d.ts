import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SelfPermitTestInterface extends utils.Interface {
    functions: {
        "selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "selfPermit", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "selfPermitAllowed", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "selfPermitAllowedIfNecessary", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "selfPermitIfNecessary", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "selfPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermitAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermitAllowedIfNecessary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermitIfNecessary", data: BytesLike): Result;
    events: {};
}
export interface SelfPermitTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SelfPermitTestInterface;
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
        selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
