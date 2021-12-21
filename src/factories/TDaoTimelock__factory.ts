/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TDaoTimelock, TDaoTimelockInterface } from "../TDaoTimelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IExecutor",
        name: "_executor",
        type: "address",
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
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
    name: "MAXIMUM_DELAY",
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
    name: "MINIMUM_DELAY",
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
    name: "admin",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
    name: "deployer",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdmin",
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
        name: "_admin",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052348015620000125760006000fd5b5060405162001949380380620019498339818101604052810190620000389190620001b3565b5b6202a300815b6200005082620000d660201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152601401505033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50505b50620002b4565b62015180811015151562000121576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200011890620001e9565b60405180910390fd5b6212750081111515156200016c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000163906200024e565b60405180910390fd5b8060016000508190909055506001600050547f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c60405160405180910390a25b5056620002b3565b600060208284031215620001c5578081fd5b81516001600160a01b03811681141515620001de578182fd5b809150505b92915050565b60208152603460208201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206560408201527f7863656564206d696e696d756d2064656c61792e000000000000000000000000606082015260006080820190505b919050565b60208152603860208201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60408201527f6f7420657863656564206d6178696d756d2064656c61792e0000000000000000606082015260006080820190505b919050565b5b60805160601c61166f620002da6000396000818161086d0152610a42015261166f6000f3fe60806040523480156100115760006000fd5b50600436106100e35760003560e01c80637d645fab1161008d578063d5f3948811610067578063d5f3948814610217578063e177246e14610235578063f2b0653714610251578063f851a44014610281576100e3565b80637d645fab146101bd578063b1b43ae5146101db578063c1a287e2146101f9576100e3565b80633ec5ab32116100be5780633ec5ab32146101515780636a42b8f8146101815780636e9960c31461019f576100e3565b80624b1f12146100e95780630e70eace1461010557806319ab453c14610135576100e3565b60006000fd5b61010360048036038101906100fe9190610d0c565b61029f565b005b61011f600480360381019061011a9190610d0c565b6103e3565b60405161012c9190610fb8565b60405180910390f35b61014f600480360381019061014a9190610ce9565b610598565b005b61016b60048036038101906101669190610d0c565b61065f565b6040516101789190610fca565b60405180910390f35b6101896109cd565b60405161019691906114d9565b60405180910390f35b6101a76109d6565b6040516101b49190610edb565b60405180910390f35b6101c5610a05565b6040516101d291906114d9565b60405180910390f35b6101e3610a0c565b6040516101f091906114d9565b60405180910390f35b610201610a13565b60405161020e91906114d9565b60405180910390f35b61021f610a1a565b60405161022c9190610edb565b60405180910390f35b61024f600480360381019061024a9190610e72565b610a40565b005b61026b60048036038101906102669190610e56565b610ae3565b6040516102789190610fa4565b60405180910390f35b610289610b08565b6040516102969190610edb565b60405180910390f35b6102ad6109d663ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561031c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610313906110e7565b60405180910390fd5b6000848484846040516020016103359493929190610f50565b604051602081830303815290604052805190602001209050600060026000506000836000191660001916815260200190815260200160002060006101000a81548160ff0219169083151502179055508473ffffffffffffffffffffffffffffffffffffffff1681600019167f39805be0099a319b88cf17675318997e223b45eef7836c0bdfa20b4009e67cc68686866040516103d393929190610fe6565b60405180910390a3505b50505050565b60006103f36109d663ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610462576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610459906113e9565b60405180910390fd5b610484610473610b2e63ffffffff16565b600160005054610b3b63ffffffff16565b82101515156104c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bf9061144e565b60405180910390fd5b6000858585856040516020016104e19493929190610f50565b604051602081830303815290604052805190602001209050600160026000506000836000191660001916815260200190815260200160002060006101000a81548160ff0219169083151502179055508573ffffffffffffffffffffffffffffffffffffffff1681600019167ed038d9209423c0ba06a7d606d7a0eeafe97cb5bdb3a9dd5b35c019b0966a9587878760405161057e93929190610fe6565b60405180910390a38091505061059056505b949350505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105f55760006000fd5b600360006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905580600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b606061066f6109d663ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d590611082565b60405180910390fd5b6000858585856040516020016106f79493929190610f50565b60405160208183030381529060405280519060200120905060026000506000826000191660001916815260200190815260200160002060009054906101000a900460ff16151561077c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077390611306565b60405180910390fd5b8261078b610b2e63ffffffff16565b101515156107ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c5906111b1565b60405180910390fd5b6107e18362093a80610b3b63ffffffff16565b6107ef610b2e63ffffffff16565b11151515610832576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108299061114c565b60405180910390fd5b600060026000506000836000191660001916815260200190815260200160002060006101000a81548160ff02191690831515021790555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166333daf5d48888886040518463ffffffff1660e01b81526004016108c893929190610f03565b600060405180830381600087803b1580156108e35760006000fd5b505af11580156108f8573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109219190610dba565b809450819250505080151561096b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109629061101d565b60405180910390fd5b8673ffffffffffffffffffffffffffffffffffffffff1682600019167f73bcadb73827ad9a900198359278e77086ae03e9e17ef173ad7de9e7e39acaff8888886040516109ba93929190610fe6565b60405180910390a350505b949350505050565b60016000505481565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610a02565b90565b6212750081565b6201518081565b62093a8081565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ad0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac79061136b565b60405180910390fd5b610adf81610ba263ffffffff16565b5b50565b600260005060205280600052604060002060009150909054906101000a900460ff1681565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000429050610b38565b90565b600060008284610b4b919061158e565b9050838110151515610b92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b89906113aa565b60405180910390fd5b80915050610b9c56505b92915050565b620151808110151515610bea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be19061123c565b60405180910390fd5b621275008111151515610c32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c29906112a1565b60405180910390fd5b8060016000508190909055506001600050547f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c60405160405180910390a25b5056611638565b6000610c8b610c8684611542565b6114eb565b9050828152838383011115610ca05760006000fd5b828260208301376000602084830101525b9392505050565b60008135905073ffffffffffffffffffffffffffffffffffffffff811681141515610ce35760006000fd5b5b919050565b600060208284031215610cfa578081fd5b610d0382610cb8565b90505b92915050565b600060006000600060808587031215610d23578283fd5b610d2c85610cb8565b9350602085013567ffffffffffffffff80821115610d48578485fd5b818701915087601f8301121515610d5d578485fd5b610d6c88833560208501610c78565b94506040870135915080821115610d81578384fd5b50808601905086601f8201121515610d97578283fd5b610da687823560208401610c78565b925050606085013590505b92959194509250565b6000600060408385031215610dcd578182fd5b825180151581141515610dde578283fd5b80925050602083015167ffffffffffffffff811115610dfb578182fd5b808401905084601f8201121515610e10578182fd5b8051610e23610e1e82611542565b6114eb565b818152866020838501011115610e37578384fd5b610e488260208301602086016115d2565b8093505050505b9250929050565b600060208284031215610e67578081fd5b813590505b92915050565b600060208284031215610e83578081fd5b813590505b92915050565b60008151808452610ea68160208601602086016115d2565b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019150505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b73ffffffffffffffffffffffffffffffffffffffff84168152606060208201526000610f326060830185610e8e565b8281036040840152610f448185610e8e565b9150505b949350505050565b73ffffffffffffffffffffffffffffffffffffffff85168152608060208201526000610f7f6080830186610e8e565b8281036040840152610f918186610e8e565b9150508260608301525b95945050505050565b600060208201905082151582525b92915050565b60006020820190508282525b92915050565b602081526000610fdd6020830184610e8e565b90505b92915050565b606081526000610ff96060830186610e8e565b828103602084015261100b8186610e8e565b9150508260408301525b949350505050565b60208152603c60208201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260408201527f616e73616374696f6e20657865637574696f6e20726576657274656400000000606082015260006080820190505b919050565b60208152603860208201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20436160408201527f6c6c206d75737420636f6d652066726f6d2061646d696e2e0000000000000000606082015260006080820190505b919050565b60208152603760208201527f54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c60408201527f6c206d75737420636f6d652066726f6d2061646d696e2e000000000000000000606082015260006080820190505b919050565b60208152603360208201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260408201527f616e73616374696f6e206973207374616c652e00000000000000000000000000606082015260006080820190505b919050565b60208152604560208201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260408201527f616e73616374696f6e206861736e2774207375727061737365642074696d652060608201527f6c6f636b2e0000000000000000000000000000000000000000000000000000006080820152600060a0820190505b919050565b60208152603460208201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206560408201527f7863656564206d696e696d756d2064656c61792e000000000000000000000000606082015260006080820190505b919050565b60208152603860208201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60408201527f6f7420657863656564206d6178696d756d2064656c61792e0000000000000000606082015260006080820190505b919050565b60208152603d60208201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260408201527f616e73616374696f6e206861736e2774206265656e207175657565642e000000606082015260006080820190505b919050565b60208152601d60208201527f43616c6c206d75737420636f6d652066726f6d206578656375746f722e000000604082015260006060820190505b919050565b60208152601160208201527f6164646974696f6e206f766572666c6f77000000000000000000000000000000604082015260006060820190505b919050565b60208152603660208201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c60408201527f206d75737420636f6d652066726f6d2061646d696e2e00000000000000000000606082015260006080820190505b919050565b60208152604960208201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a204573746960408201527f6d6174656420657865637574696f6e20626c6f636b206d75737420736174697360608201527f66792064656c61792e00000000000000000000000000000000000000000000006080820152600060a0820190505b919050565b60006020820190508282525b92915050565b600060405190507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff8211171561153757611536611607565b5b80604052505b919050565b600067ffffffffffffffff82111561155d5761155c611607565b5b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160190505b919050565b600082198211156115c6577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b82820190505b92915050565b60005b838110156115f15780820151818401525b6020810190506115d5565b83811115611600576000848401525b505050505b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565bfea26469706673582212207bcc66de89f9c449472142f62c3639132e1b7902d48bf051e4e1b9ecac03359d64736f6c63430008040033";

type TDaoTimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TDaoTimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TDaoTimelock__factory extends ContractFactory {
  constructor(...args: TDaoTimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _executor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TDaoTimelock> {
    return super.deploy(_executor, overrides || {}) as Promise<TDaoTimelock>;
  }
  getDeployTransaction(
    _executor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_executor, overrides || {});
  }
  attach(address: string): TDaoTimelock {
    return super.attach(address) as TDaoTimelock;
  }
  connect(signer: Signer): TDaoTimelock__factory {
    return super.connect(signer) as TDaoTimelock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TDaoTimelockInterface {
    return new utils.Interface(_abi) as TDaoTimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TDaoTimelock {
    return new Contract(address, _abi, signerOrProvider) as TDaoTimelock;
  }
}
