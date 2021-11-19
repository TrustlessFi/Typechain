/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestnetERC20, TestnetERC20Interface } from "../TestnetERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_initialHolder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialTokens",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialHolder",
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
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052348015620000125760006000fd5b5060405162001d5638038062001d56833981810160405260a0811015620000395760006000fd5b810190808051906020019092919080519060200190929190805160405193929190846401000000008211156200006f5760006000fd5b83820191506020820185811115620000875760006000fd5b8251866001820283011164010000000082111715620000a65760006000fd5b8083526020830192505050908051906020019080838360005b83811015620000dd5780820151818401525b602081019050620000bf565b50505050905090810190601f1680156200010b5780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084640100000000821115620001305760006000fd5b83820191506020820185811115620001485760006000fd5b8251866001820283011164010000000082111715620001675760006000fd5b8083526020830192505050908051906020019080838360005b838110156200019e5780820151818401525b60208101905062000180565b50505050905090810190601f168015620001cc5780820380516001836020036101000a031916815260200191505b50604052602001805190602001909291905050505b82825b8160036000509080519060200190620001ff92919062000625565b5080600460005090805190602001906200021b92919062000625565b506012600560006101000a81548160ff021916908360ff1602179055505b50506200024c81620002a460201b60201c565b6200025e8585620002c360201b60201c565b8473ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b5050505050620006e7565b80600560006101000a81548160ff021916908360ff1602179055505b50565b620002d36200037060201b60201c565b60ff16600a0a6298968002811115151562000359576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260088152602001807f546f6f206d75636800000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b6200036b82826200038d60201b60201c565b5b5050565b6000600560009054906101000a900460ff1690506200038a565b90565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151562000436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081526020015060200191505060405180910390fd5b6200044a600083836200058960201b60201c565b62000469816002600050546200058f60201b62000c261790919060201c565b6002600050819090905550620004d381600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050546200058f60201b62000c261790919060201c565b600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35b5050565b5b505050565b60006000828401905083811015151562000614576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081526020015060200191505060405180910390fd5b809150506200061f56505b92915050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200065d5760008555620006ae565b82601f106200067857805160ff1916838001178555620006ae565b82800160010185558215620006ae579182015b82811115620006ad57825182600050909055916020019190600101906200068b565b5b509050620006bd9190620006c1565b5090565b620006c7565b80821115620006e35760008181506000905550600101620006c7565b5090565b60805160601c61164c6200070a6000398061087a5280610b6f525061164c6000f3fe60806040523480156100115760006000fd5b50600436106100e45760003560e01c8063449a52f81161008d578063a457c2d711610067578063a457c2d714610428578063a9059cbb1461048d578063b72218e3146104f2578063dd62ed3e14610526576100e4565b8063449a52f8146102fc57806370a082311461034b57806395d89b41146103a4576100e4565b806323b872dd116100be57806323b872dd146101f1578063313ce567146102765780633950935114610297576100e4565b806306fdde03146100ea578063095ea7b31461016e57806318160ddd146101d3576100e4565b60006000fd5b6100f261059f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101335780820151818401525b602081019050610117565b50505050905090810190601f1680156101605780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101bb600480360360408110156101855760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610649565b60405180821515815260200191505060405180910390f35b6101db610678565b6040518082815260200191505060405180910390f35b61025e600480360360608110156102085760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061068a565b60405180821515815260200191505060405180910390f35b61027e610789565b604051808260ff16815260200191505060405180910390f35b6102e4600480360360408110156102ae5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107a5565b60405180821515815260200191505060405180910390f35b610349600480360360408110156103135760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610878565b005b61038e600480360360208110156103625760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610953565b6040518082815260200191505060405180910390f35b6103ac6109a7565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103ed5780820151818401525b6020810190506103d1565b50505050905090810190601f16801561041a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104756004803603604081101561043f5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a51565b60405180821515815260200191505060405180910390f35b6104da600480360360408110156104a45760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b3e565b60405180821515815260200191505060405180910390f35b6104fa610b6d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105896004803603604081101561053d5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b91565b6040518082815260200191505060405180910390f35b606060036000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561063a5780601f1061060f5761010080835404028352916020019161063a565b820191906000526020600020905b81548152906001019060200180831161061d57829003601f168201915b50505050509050610646565b90565b600061066961065c610cba63ffffffff16565b8484610cc763ffffffff16565b60019050610672565b92915050565b60006002600050549050610687565b90565b600061069d848484610ece63ffffffff16565b610779846106af610cba63ffffffff16565b61076e8560405180606001604052806028815260200161158160289139600160005060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000610721610cba63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050546111ba9092919063ffffffff16565b610cc763ffffffff16565b60019050610782565b9392505050565b6000600560009054906101000a900460ff1690506107a2565b90565b60006108696107b8610cba63ffffffff16565b8461085e85600160005060006107d2610cba63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054610c2690919063ffffffff16565b610cc763ffffffff16565b60019050610872565b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561093e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b61094e828261127c63ffffffff16565b5b5050565b6000600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490506109a2565b919050565b606060046000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a425780601f10610a1757610100808354040283529160200191610a42565b820191906000526020600020905b815481529060010190602001808311610a2557829003601f168201915b50505050509050610a4e565b90565b6000610b2f610a64610cba63ffffffff16565b84610b24856040518060600160405280602581526020016115f26025913960016000506000610a97610cba63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050546111ba9092919063ffffffff16565b610cc763ffffffff16565b60019050610b38565b92915050565b6000610b5e610b51610cba63ffffffff16565b8484610ece63ffffffff16565b60019050610b67565b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610c20565b92915050565b600060008284019050838110151515610caa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081526020015060200191505060405180910390fd5b80915050610cb456505b92915050565b6000339050610cc4565b90565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610d4f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806115ce6024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610dd7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806115396022913960400191505060405180910390fd5b80600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610f56576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806115a96025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610fde576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806115166023913960400191505060405180910390fd5b610fef83838361132463ffffffff16565b6110618160405180606001604052806026815260200161155b60269139600060005060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050546111ba9092919063ffffffff16565b600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555061110481600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054610c2690919063ffffffff16565b600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35b505050565b6000838311158290151561126a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561122f5780820151818401525b602081019050611213565b50505050905090810190601f16801561125c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508284039050611275565b9392505050565b61128a61078963ffffffff16565b60ff16600a0a6298968002811115151561130f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260088152602001807f546f6f206d75636800000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b61131f828261132a63ffffffff16565b5b5050565b5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156113d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081526020015060200191505060405180910390fd5b6113e46000838361132463ffffffff16565b6113fc81600260005054610c2690919063ffffffff16565b600260005081909090555061145f81600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054610c2690919063ffffffff16565b600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35b505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122042f4ad8176f54d2440e6abc59a3f8e457a0fe4b6a4d914bae4ac6369ebfbd9bf64736f6c63430007060033";

type TestnetERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestnetERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestnetERC20__factory extends ContractFactory {
  constructor(...args: TestnetERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _initialHolder: string,
    initialTokens: BigNumberish,
    _name: string,
    _symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestnetERC20> {
    return super.deploy(
      _initialHolder,
      initialTokens,
      _name,
      _symbol,
      decimals,
      overrides || {}
    ) as Promise<TestnetERC20>;
  }
  getDeployTransaction(
    _initialHolder: string,
    initialTokens: BigNumberish,
    _name: string,
    _symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _initialHolder,
      initialTokens,
      _name,
      _symbol,
      decimals,
      overrides || {}
    );
  }
  attach(address: string): TestnetERC20 {
    return super.attach(address) as TestnetERC20;
  }
  connect(signer: Signer): TestnetERC20__factory {
    return super.connect(signer) as TestnetERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestnetERC20Interface {
    return new utils.Interface(_abi) as TestnetERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestnetERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestnetERC20;
  }
}
