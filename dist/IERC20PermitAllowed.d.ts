import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IERC20PermitAllowedInterface extends utils.Interface {
    functions: {
        "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "permit", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        boolean,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    events: {};
}
export interface IERC20PermitAllowed extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC20PermitAllowedInterface;
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
        permit(holder: string, spender: string, nonce: BigNumberish, expiry: BigNumberish, allowed: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    permit(holder: string, spender: string, nonce: BigNumberish, expiry: BigNumberish, allowed: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        permit(holder: string, spender: string, nonce: BigNumberish, expiry: BigNumberish, allowed: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        permit(holder: string, spender: string, nonce: BigNumberish, expiry: BigNumberish, allowed: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        permit(holder: string, spender: string, nonce: BigNumberish, expiry: BigNumberish, allowed: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}