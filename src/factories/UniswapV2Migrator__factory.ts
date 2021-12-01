/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapV2Migrator,
  UniswapV2MigratorInterface,
} from "../UniswapV2Migrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factoryV1",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c06040523480156100115760006000fd5b50604051610d96380380610d96833981810160405260408110156100355760006000fd5b8101908080519060200190929190805190602001909291905050505b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b50506100cd565b60805160601c60a05160601c610c976100ff600039806104b352806104e4528061063b52508060c65250610c976000f3fe6080604052600436106100225760003560e01c8063b7df1d25146100315761002b565b3661002b575b5b005b60006000fd5b34801561003e5760006000fd5b506100c0600480360360a08110156100565760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506100c2565b005b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166306f2bf62876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156101625760006000fd5b505afa158015610177573d600060003e3d6000fd5b505050506040513d602081101561018e5760006000fd5b8101908080519060200190929190505050905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156102215760006000fd5b505afa158015610236573d600060003e3d6000fd5b505050506040513d602081101561024d5760006000fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561031c5760006000fd5b505af1158015610331573d600060003e3d6000fd5b505050506040513d60208110156103485760006000fd5b810190808051906020019092919050505015156103d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5452414e534645525f46524f4d5f4641494c454400000000000000000000000081526020015060200191505060405180910390fd5b600060008373ffffffffffffffffffffffffffffffffffffffff1663f88bf15a84600160017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518563ffffffff1660e01b815260040180858152602001848152602001838152602001828152602001945050505050604060405180830381600087803b1580156104625760006000fd5b505af1158015610477573d600060003e3d6000fd5b505050506040513d604081101561048e5760006000fd5b810190808051906020019092919080519060200190929190505050915091506104de897f0000000000000000000000000000000000000000000000000000000000000000836106a963ffffffff16565b600060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f305d719858d868e8e8e8e6040518863ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200196505050505050506060604051808303818588803b1580156105d65760006000fd5b505af11580156105eb573d600060003e3d6000fd5b50505050506040513d60608110156106035760006000fd5b8101908080519060200190929190805190602001909291908051906020019092919050505050915091508183111561067f576106678b7f000000000000000000000000000000000000000000000000000000000000000060006106a963ffffffff16565b61067a8b3384860361088c63ffffffff16565b61069b565b8084111561069a5761069933828603610a6f63ffffffff16565b5b5b5050505050505b5050505050565b600060608473ffffffffffffffffffffffffffffffffffffffff1663095ea7b38585604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310151561078557805182525b60208201915060208101905060208303925061075f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146107e7576040519150601f19603f3d011682016040523d82523d6000602084013e6107ec565b606091505b509150915081801561082d575060008151148061082c575080806020019051602081101561081a5760006000fd5b81019080805190602001909291905050505b5b1515610884576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180610c0a602b913960400191505060405180910390fd5b50505b505050565b600060608473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310151561096857805182525b602082019150602081019050602083039250610942565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146109ca576040519150601f19603f3d011682016040523d82523d6000602084013e6109cf565b606091505b5091509150818015610a105750600081511480610a0f57508080602001905160208110156109fd5760006000fd5b81019080805190602001909291905050505b5b1515610a67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180610c35602d913960400191505060405180910390fd5b50505b505050565b60008273ffffffffffffffffffffffffffffffffffffffff1682600067ffffffffffffffff81118015610aa25760006000fd5b506040519080825280601f01601f191660200182016040528015610ad55781602001600182028036833780820191505090505b506040518082805190602001908083835b602083101515610b0c57805182525b602082019150602081019050602083039250610ae6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610b6e576040519150601f19603f3d011682016040523d82523d6000602084013e610b73565b606091505b50509050801515610bcf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526034815260200180610bd66034913960400191505060405180910390fd5b505b505056fe5472616e7366657248656c7065723a3a736166655472616e736665724554483a20455448207472616e73666572206661696c65645472616e7366657248656c7065723a3a73616665417070726f76653a20617070726f7665206661696c65645472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c6564a2646970667358221220136110aca577226ed3d4f943726920baec268bb64cbbe71e9c9d515b708f5db164736f6c63430006060033";

type UniswapV2MigratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV2MigratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV2Migrator__factory extends ContractFactory {
  constructor(...args: UniswapV2MigratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _factoryV1: string,
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV2Migrator> {
    return super.deploy(
      _factoryV1,
      _router,
      overrides || {}
    ) as Promise<UniswapV2Migrator>;
  }
  getDeployTransaction(
    _factoryV1: string,
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factoryV1, _router, overrides || {});
  }
  attach(address: string): UniswapV2Migrator {
    return super.attach(address) as UniswapV2Migrator;
  }
  connect(signer: Signer): UniswapV2Migrator__factory {
    return super.connect(signer) as UniswapV2Migrator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2MigratorInterface {
    return new utils.Interface(_abi) as UniswapV2MigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Migrator {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Migrator;
  }
}