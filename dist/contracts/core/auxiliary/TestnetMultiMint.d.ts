import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface TestnetMultiMintInterface extends utils.Interface {
    functions: {
        "multiMint(uint256,address[])": FunctionFragment;
        "truEth()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "multiMint" | "truEth"): FunctionFragment;
    encodeFunctionData(functionFragment: "multiMint", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "truEth", values?: undefined): string;
    decodeFunctionResult(functionFragment: "multiMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "truEth", data: BytesLike): Result;
    events: {};
}
export interface TestnetMultiMint extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestnetMultiMintInterface;
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
        multiMint(truEthMintCount: PromiseOrValue<BigNumberish>, targetAddresses: PromiseOrValue<string>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        truEth(overrides?: CallOverrides): Promise<[string]>;
    };
    multiMint(truEthMintCount: PromiseOrValue<BigNumberish>, targetAddresses: PromiseOrValue<string>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    truEth(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        multiMint(truEthMintCount: PromiseOrValue<BigNumberish>, targetAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        truEth(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        multiMint(truEthMintCount: PromiseOrValue<BigNumberish>, targetAddresses: PromiseOrValue<string>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        truEth(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        multiMint(truEthMintCount: PromiseOrValue<BigNumberish>, targetAddresses: PromiseOrValue<string>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        truEth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
