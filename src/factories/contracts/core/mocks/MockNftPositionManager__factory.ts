/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MockNftPositionManager,
  MockNftPositionManagerInterface,
} from "../../../../contracts/core/mocks/MockNftPositionManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH9",
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
];

const _bytecode =
  "0x60a06040523480156100115760006000fd5b506040516101a13803806101a183398181016040528101906100339190610076565b5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b506100af566100ae565b6000602082840312156100895760006000fd5b81516001600160a01b038116811415156100a35760006000fd5b809150505b92915050565b5b60805160da6100c760003960006050015260da6000f3fe608060405234801560105760006000fd5b5060043610602c5760003560e01c80634aa4a4fc14603257602c565b60006000fd5b6038604c565b60405160439190607b565b60405180910390f35b60007f000000000000000000000000000000000000000000000000000000000000000090506075565b905660a3565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565bfea264697066735822122075058a8c008357e628f94127d5e68ed446f5908d3861f92329d7dd5f85cc21ad64736f6c63430008100033";

type MockNftPositionManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockNftPositionManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockNftPositionManager__factory extends ContractFactory {
  constructor(...args: MockNftPositionManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockNftPositionManager> {
    return super.deploy(
      _weth,
      overrides || {}
    ) as Promise<MockNftPositionManager>;
  }
  override getDeployTransaction(
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_weth, overrides || {});
  }
  override attach(address: string): MockNftPositionManager {
    return super.attach(address) as MockNftPositionManager;
  }
  override connect(signer: Signer): MockNftPositionManager__factory {
    return super.connect(signer) as MockNftPositionManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockNftPositionManagerInterface {
    return new utils.Interface(_abi) as MockNftPositionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockNftPositionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockNftPositionManager;
  }
}
