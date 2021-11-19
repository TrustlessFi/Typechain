/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TcpSafeMath, TcpSafeMathInterface } from "../TcpSafeMath";

const _abi = [
  {
    inputs: [],
    name: "ONE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x609a610027600b82828239805160001a6073141515601957fe5b30600052607381538281f350fe730000000000000000000000000000000000000000301460806040526004361060365760003560e01c8063c2ee3a0814603c576036565b60006000fd5b60426058565b6040518082815260200191505060405180910390f35b670de0b6b3a76400008156fea26469706673582212204e8d0bcb5c2efd27883ff03ad25bd9389e41d970f27078b0fce3764ec54781c064736f6c63430007060033";

type TcpSafeMathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TcpSafeMathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TcpSafeMath__factory extends ContractFactory {
  constructor(...args: TcpSafeMathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TcpSafeMath> {
    return super.deploy(overrides || {}) as Promise<TcpSafeMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TcpSafeMath {
    return super.attach(address) as TcpSafeMath;
  }
  connect(signer: Signer): TcpSafeMath__factory {
    return super.connect(signer) as TcpSafeMath__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TcpSafeMathInterface {
    return new utils.Interface(_abi) as TcpSafeMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TcpSafeMath {
    return new Contract(address, _abi, signerOrProvider) as TcpSafeMath;
  }
}
