/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Base64Test, Base64TestInterface } from "../Base64Test";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "encode",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getGasCostOfEncode",
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
  "0x60806040523480156100115760006000fd5b50610017565b610478806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c806312496a1b1461004157806374b86d1e1461017e5761003b565b60006000fd5b610102600480360360208110156100585760006000fd5b81019080803590602001906401000000008111156100765760006000fd5b8201836020820111156100895760006000fd5b803590602001918460018302840111640100000000831117156100ac5760006000fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050909091929090919290505050610255565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101435780820151818401525b602081019050610127565b50505050905090810190601f1680156101705780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61023f600480360360208110156101955760006000fd5b81019080803590602001906401000000008111156101b35760006000fd5b8201836020820111156101c65760006000fd5b803590602001918460018302840111640100000000831117156101e95760006000fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050909091929090919290505050610272565b6040518082815260200191505060405180910390f35b60606102668261029a63ffffffff16565b905061026d565b919050565b600060005a90506102888361029a63ffffffff16565b505a810391505061029556505b919050565b60606000825114156102c0576040518060200160405280600081526020015090506103fd565b60006040518060600160405280604081526020016104036040913990506000600360028551018115156102ef57fe5b04600402905060006020820167ffffffffffffffff811180156103125760006000fd5b506040519080825280601f01601f1916602001820160405280156103455781602001600182028036833780820191505090505b509050818152600183018586518101602084015b818310156103b5576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f81168501518253506001810190505b610359565b6003895106600181146103cf57600281146103df576103ea565b613d3d60f01b60028303526103ea565b603d60f81b60018303525b50505050508093505050506103fd565050505b91905056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212208098bd3045739c28ffc36c4e62cec5497b052589948e06638e4fc8f94a37d74064736f6c63430007060033";

type Base64TestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Base64TestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Base64Test__factory extends ContractFactory {
  constructor(...args: Base64TestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Base64Test> {
    return super.deploy(overrides || {}) as Promise<Base64Test>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Base64Test {
    return super.attach(address) as Base64Test;
  }
  connect(signer: Signer): Base64Test__factory {
    return super.connect(signer) as Base64Test__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Base64TestInterface {
    return new utils.Interface(_abi) as Base64TestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Base64Test {
    return new Contract(address, _abi, signerOrProvider) as Base64Test;
  }
}
