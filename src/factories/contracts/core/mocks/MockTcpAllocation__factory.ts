/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MockTcpAllocation,
  MockTcpAllocationInterface,
} from "../../../../contracts/core/mocks/MockTcpAllocation";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allocations",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    name: "getTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "incentiveAllocation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "allocatee",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "count",
        type: "uint128",
      },
    ],
    name: "increaseAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "lockTokensIntoDao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b61051d806100266000396000f3fe60806040523480156100115760006000fd5b506004361061006c5760003560e01c8063628e2e8511610051578063628e2e85146100c0578063a9778eb0146100dc578063ee5f1ee4146100f85761006c565b8063262406de1461007257806352a9039c146100905761006c565b60006000fd5b61007a610114565b60405161008791906102f4565b60405180910390f35b6100aa60048036038101906100a5919061034d565b610122565b6040516100b79190610372565b60405180910390f35b6100da60048036038101906100d591906103c3565b610156565b005b6100f660048036038101906100f19190610416565b610196565b005b610112600480360381019061010d9190610416565b6101d5565b005b60006000905061011f565b90565b600060005060205280600052604060002060009150909054906101000a90046fffffffffffffffffffffffffffffffff1681565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101889061044c565b60405180910390fd5b505050565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c89061044c565b60405180910390fd5b5050565b61025881600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166102d590919063ffffffff16565b600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b5050565b600081836102e3919061048b565b90506102ea565b92915050566104e6565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60008135905073ffffffffffffffffffffffffffffffffffffffff8116811415156103475760006000fd5b5b919050565b6000602082840312156103605760006000fd5b6103698261031c565b90505b92915050565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b6000813590506fffffffffffffffffffffffffffffffff8116811415156103bd5760006000fd5b5b919050565b600060006000606084860312156103da5760006000fd5b6103e38461031c565b92506103f160208501610396565b9150604084013560ff81168114151561040a5760006000fd5b809150505b9250925092565b600060006040838503121561042b5760006000fd5b6104348361031c565b915061044260208401610396565b90505b9250929050565b60208152600f60208201527f4e6f7420496d706c656d656e7465640000000000000000000000000000000000604082015260006060820190505b919050565b60006fffffffffffffffffffffffffffffffff808416818416019150808211156104de577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b505b92915050565bfea2646970667358221220336736bbc2355e8d577bee19a511feea4352fd3a3f221b8276079a14319fcd2364736f6c63430008100033";

type MockTcpAllocationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockTcpAllocationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockTcpAllocation__factory extends ContractFactory {
  constructor(...args: MockTcpAllocationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockTcpAllocation> {
    return super.deploy(overrides || {}) as Promise<MockTcpAllocation>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockTcpAllocation {
    return super.attach(address) as MockTcpAllocation;
  }
  override connect(signer: Signer): MockTcpAllocation__factory {
    return super.connect(signer) as MockTcpAllocation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTcpAllocationInterface {
    return new utils.Interface(_abi) as MockTcpAllocationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTcpAllocation {
    return new Contract(address, _abi, signerOrProvider) as MockTcpAllocation;
  }
}
