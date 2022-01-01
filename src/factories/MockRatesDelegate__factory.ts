/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockRatesDelegate,
  MockRatesDelegateInterface,
} from "../MockRatesDelegate";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IGovernor",
        name: "_governor",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "governor",
    outputs: [
      {
        internalType: "contract IGovernor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "guardian",
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
        internalType: "int256",
        name: "newRate",
        type: "int256",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156100115760006000fd5b506040516104e33803806104e3833981810160405281019061003391906100b3565b5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150503373ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b506100e8566100e7565b6000602082840312156100c4578081fd5b81516001600160a01b038116811415156100dc578182fd5b809150505b92915050565b5b60805160601c60a05160601c6103c561011e6000396000818160ca015260ee01526000818160a6015261017e01526103c56000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c80630c340a241461004c578063452a93201461006a5780636299a6ef1461008857610046565b60006000fd5b6100546100a4565b6040516100619190610315565b60405180910390f35b6100726100c8565b60405161007f91906102ed565b60405180910390f35b6100a2600480360381019061009d91906102d1565b6100ec565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561017c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101739061034f565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166343f48fbd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101e35760006000fd5b505afa1580156101f8573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021c9190610290565b73ffffffffffffffffffffffffffffffffffffffff16636dc14c8e826040518263ffffffff1660e01b8152600401610254919061033d565b600060405180830381600087803b15801561026f5760006000fd5b505af1158015610284573d600060003e3d6000fd5b505050505b505661038e565b6000602082840312156102a1578081fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811415156102c6578182fd5b809150505b92915050565b6000602082840312156102e2578081fd5b813590505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60006020820190508282525b92915050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565bfea2646970667358221220cc54456c1c5fe1f684810583d0791511d29a7452ab4dfc49ec488fe967c8476464736f6c63430008040033";

type MockRatesDelegateConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockRatesDelegateConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockRatesDelegate__factory extends ContractFactory {
  constructor(...args: MockRatesDelegateConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _governor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockRatesDelegate> {
    return super.deploy(
      _governor,
      overrides || {}
    ) as Promise<MockRatesDelegate>;
  }
  getDeployTransaction(
    _governor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_governor, overrides || {});
  }
  attach(address: string): MockRatesDelegate {
    return super.attach(address) as MockRatesDelegate;
  }
  connect(signer: Signer): MockRatesDelegate__factory {
    return super.connect(signer) as MockRatesDelegate__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockRatesDelegateInterface {
    return new utils.Interface(_abi) as MockRatesDelegateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockRatesDelegate {
    return new Contract(address, _abi, signerOrProvider) as MockRatesDelegate;
  }
}
