/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  MockTDaoIncentiveContract,
  MockTDaoIncentiveContractInterface,
} from "../../../../../contracts/core/mocks/MockTFIncentiveContract.sol/MockTDaoIncentiveContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ITDaoWithIncentiveContractMint",
        name: "_tDao",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b5060405161026938038061026983398181016040528101906100339190610080565b5b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b506100b9566100b8565b6000602082840312156100935760006000fd5b81516001600160a01b038116811415156100ad5760006000fd5b809150505b92915050565b5b6101a1806100c86000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c806340c10f191461003657610030565b60006000fd5b610050600480360381019061004b91906100ec565b610052565b005b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639383ac4483836040518363ffffffff1660e01b81526004016100af92919061013b565b600060405180830381600087803b1580156100ca5760006000fd5b505af11580156100df573d600060003e3d6000fd5b505050505b50505661016a565b60006000604083850312156101015760006000fd5b823573ffffffffffffffffffffffffffffffffffffffff8116811415156101285760006000fd5b80925050602083013590505b9250929050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682528260208301525b9392505050565bfea264697066735822122064f2258572483d274cd7fbe889a8b70bea786f68f6c0a16c491f3286f992af3664736f6c63430008100033";

type MockTDaoIncentiveContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockTDaoIncentiveContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockTDaoIncentiveContract__factory extends ContractFactory {
  constructor(...args: MockTDaoIncentiveContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _tDao: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockTDaoIncentiveContract> {
    return super.deploy(
      _tDao,
      overrides || {}
    ) as Promise<MockTDaoIncentiveContract>;
  }
  override getDeployTransaction(
    _tDao: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tDao, overrides || {});
  }
  override attach(address: string): MockTDaoIncentiveContract {
    return super.attach(address) as MockTDaoIncentiveContract;
  }
  override connect(signer: Signer): MockTDaoIncentiveContract__factory {
    return super.connect(signer) as MockTDaoIncentiveContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTDaoIncentiveContractInterface {
    return new utils.Interface(_abi) as MockTDaoIncentiveContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTDaoIncentiveContract {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockTDaoIncentiveContract;
  }
}
