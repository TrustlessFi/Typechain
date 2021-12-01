import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface UniswapV2MigratorInterface extends utils.Interface {
    functions: {
        "migrate(address,uint256,uint256,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "migrate", values: [string, BigNumberish, BigNumberish, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
    events: {};
}
export interface UniswapV2Migrator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UniswapV2MigratorInterface;
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
        migrate(token: string, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    migrate(token: string, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        migrate(token: string, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        migrate(token: string, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        migrate(token: string, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
