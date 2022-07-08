import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface TcpSafeCastTestableInterface extends utils.Interface {
    functions: {
        "_toInt128(int256)": FunctionFragment;
        "_toInt16(int256)": FunctionFragment;
        "_toInt24(int256)": FunctionFragment;
        "_toInt256(uint256)": FunctionFragment;
        "_toInt32(int256)": FunctionFragment;
        "_toInt64(int256)": FunctionFragment;
        "_toInt8(int256)": FunctionFragment;
        "_toUint128(uint256)": FunctionFragment;
        "_toUint16(uint256)": FunctionFragment;
        "_toUint160(uint256)": FunctionFragment;
        "_toUint176(uint256)": FunctionFragment;
        "_toUint184(uint256)": FunctionFragment;
        "_toUint192(uint256)": FunctionFragment;
        "_toUint216(uint256)": FunctionFragment;
        "_toUint256(int256)": FunctionFragment;
        "_toUint32(uint256)": FunctionFragment;
        "_toUint40(uint256)": FunctionFragment;
        "_toUint48(uint256)": FunctionFragment;
        "_toUint64(uint256)": FunctionFragment;
        "_toUint8(uint256)": FunctionFragment;
        "_toUint96(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_toInt128" | "_toInt16" | "_toInt24" | "_toInt256" | "_toInt32" | "_toInt64" | "_toInt8" | "_toUint128" | "_toUint16" | "_toUint160" | "_toUint176" | "_toUint184" | "_toUint192" | "_toUint216" | "_toUint256" | "_toUint32" | "_toUint40" | "_toUint48" | "_toUint64" | "_toUint8" | "_toUint96"): FunctionFragment;
    encodeFunctionData(functionFragment: "_toInt128", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toInt16", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toInt24", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toInt256", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toInt32", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toInt64", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toInt8", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint128", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint16", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint160", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint176", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint184", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint192", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint216", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint256", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint32", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint40", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint48", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint64", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint8", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_toUint96", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_toInt128", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toInt16", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toInt24", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toInt256", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toInt32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toInt64", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toInt8", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint128", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint16", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint160", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint176", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint184", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint192", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint216", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint256", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint40", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint48", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint64", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint8", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toUint96", data: BytesLike): Result;
    events: {};
}
export interface TcpSafeCastTestable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TcpSafeCastTestableInterface;
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
        _toInt128(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        _toInt16(a: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            r: number;
        }>;
        _toInt24(a: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            r: number;
        }>;
        _toInt256(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        _toInt32(a: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            r: number;
        }>;
        _toInt64(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        _toInt8(a: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            r: number;
        }>;
        _toUint128(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        _toUint16(a: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            r: number;
        }>;
        _toUint160(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        _toUint176(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        _toUint184(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        _toUint192(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        _toUint216(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        _toUint256(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        _toUint32(a: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            r: number;
        }>;
        _toUint40(a: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            r: number;
        }>;
        _toUint48(a: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            r: number;
        }>;
        _toUint64(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        _toUint8(a: BigNumberish, overrides?: CallOverrides): Promise<[number] & {
            r: number;
        }>;
        _toUint96(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
    };
    _toInt128(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    _toInt16(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
    _toInt24(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
    _toInt256(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    _toInt32(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
    _toInt64(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    _toInt8(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
    _toUint128(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    _toUint16(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
    _toUint160(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    _toUint176(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    _toUint184(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    _toUint192(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    _toUint216(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    _toUint256(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    _toUint32(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
    _toUint40(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
    _toUint48(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
    _toUint64(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    _toUint8(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
    _toUint96(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        _toInt128(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toInt16(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
        _toInt24(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
        _toInt256(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toInt32(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
        _toInt64(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toInt8(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
        _toUint128(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint16(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
        _toUint160(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint176(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint184(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint192(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint216(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint256(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint32(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
        _toUint40(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
        _toUint48(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
        _toUint64(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint8(a: BigNumberish, overrides?: CallOverrides): Promise<number>;
        _toUint96(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        _toInt128(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toInt16(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toInt24(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toInt256(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toInt32(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toInt64(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toInt8(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint128(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint16(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint160(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint176(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint184(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint192(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint216(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint256(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint32(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint40(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint48(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint64(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint8(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _toUint96(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _toInt128(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toInt16(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toInt24(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toInt256(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toInt32(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toInt64(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toInt8(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint128(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint16(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint160(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint176(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint184(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint192(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint216(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint256(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint32(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint40(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint48(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint64(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint8(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _toUint96(a: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
