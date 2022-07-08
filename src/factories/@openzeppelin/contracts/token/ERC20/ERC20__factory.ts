/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20,
  ERC20Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC20/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
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
        name: "to",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
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
  "0x6080604052348015620000125760006000fd5b506040516200149c3803806200149c833981810160405281019062000038919062000217565b5b8160036000509080519060200190620000549291906200007a565b508060046000509080519060200190620000709291906200007a565b505b5050620002cb565b828054620000889062000286565b90600052602060002090601f016020900481019282620000ac5760008555620000fd565b82601f10620000c757805160ff1916838001178555620000fd565b82800160010185558215620000fd579182015b82811115620000fc5782518260005090905591602001919060010190620000da565b5b5090506200010c919062000110565b5090565b62000116565b8082111562000132576000818150600090555060010162000116565b509056620002ca565b634e487b7160e01b600052604160045260246000fd5b565b600082601f8301121515620001685760006000fd5b81516001600160401b03808211156200018657620001856200013b565b5b601f1960405181603f83601f8701160116810191508082108383111715620001b357620001b26200013b565b5b81604052838152602092508683858801011115620001d15760006000fd5b600091505b83821015620001f7578282870101518383830101525b8282019150620001d6565b83821115620002095760008385830101525b809450505050505b92915050565b60006000604083850312156200022d5760006000fd5b82516001600160401b0380821115620002465760006000fd5b620002548683870162000153565b935060208501519150808211156200026c5760006000fd5b506200027b8582860162000153565b9150505b9250929050565b60008160011c905060018216801515620002a157607f821691505b60208210811415620002c357634e487b7160e01b600052602260045260246000fd5b505b919050565b5b6111c180620002db6000396000f3fe60806040523480156100115760006000fd5b50600436106100ce5760003560e01c80633950935111610082578063a457c2d71161005c578063a457c2d71461020c578063a9059cbb1461023c578063dd62ed3e1461026c576100ce565b8063395093511461018e57806370a08231146101be57806395d89b41146101ee576100ce565b806318160ddd116100b357806318160ddd1461012257806323b872dd14610140578063313ce56714610170576100ce565b806306fdde03146100d4578063095ea7b3146100f2576100ce565b60006000fd5b6100dc61029c565b6040516100e99190610c9d565b60405180910390f35b61010c60048036038101906101079190610d48565b610336565b6040516101199190610d77565b60405180910390f35b61012a61036c565b6040516101379190610d8b565b60405180910390f35b61015a60048036038101906101559190610d9d565b61037e565b6040516101679190610d77565b60405180910390f35b6101786103c6565b6040516101859190610ddc565b60405180910390f35b6101a860048036038101906101a39190610d48565b6103d4565b6040516101b59190610d77565b60405180910390f35b6101d860048036038101906101d39190610df1565b61049a565b6040516101e59190610d8b565b60405180910390f35b6101f66104ee565b6040516102039190610c9d565b60405180910390f35b61022660048036038101906102219190610d48565b610588565b6040516102339190610d77565b60405180910390f35b61025660048036038101906102519190610d48565b610691565b6040516102639190610d77565b60405180910390f35b61028660048036038101906102819190610e16565b6106c7565b6040516102939190610d8b565b60405180910390f35b6060600360005080546102ae90610e4c565b80601f01602080910402602001604051908101604052809291908181526020018280546102da90610e4c565b80156103275780601f106102fc57610100808354040283529160200191610327565b820191906000526020600020905b81548152906001019060200180831161030a57829003601f168201915b50505050509050610333565b90565b6000600061034861075c63ffffffff16565b905061035b81858561076963ffffffff16565b600191505061036656505b92915050565b6000600260005054905061037b565b90565b6000600061039061075c63ffffffff16565b90506103a385828561094463ffffffff16565b6103b48585856109e163ffffffff16565b60019150506103bf56505b9392505050565b6000601290506103d1565b90565b600060006103e661075c63ffffffff16565b9050610489818585600160005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505461047e9190610ea7565b61076963ffffffff16565b600191505061049456505b92915050565b6000600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490506104e9565b919050565b60606004600050805461050090610e4c565b80601f016020809104026020016040519081016040528092919081815260200182805461052c90610e4c565b80156105795780601f1061054e57610100808354040283529160200191610579565b820191906000526020600020905b81548152906001019060200180831161055c57829003601f168201915b50505050509050610585565b90565b6000600061059a61075c63ffffffff16565b90506000600160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054905083811015151561066b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066290610eed565b60405180910390fd5b61067e828686840361076963ffffffff16565b60019250505061068b5650505b92915050565b600060006106a361075c63ffffffff16565b90506106b68185856109e163ffffffff16565b60019150506106c156505b92915050565b6000600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610756565b92915050565b6000339050610766565b90565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156107db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d290610f52565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561084d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084490610fb7565b60405180910390fd5b80600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109369190610d8b565b60405180910390a35b505050565b600061095684846106c763ffffffff16565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811415156109da578181101515156109c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109bd9061101c565b60405180910390fd5b6109d9848484840361076963ffffffff16565b5b505b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610a53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4a9061105b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610ac5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610abc906110c0565b60405180910390fd5b610ad6838383610c8d63ffffffff16565b6000600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050818110151515610b65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5c90611125565b60405180910390fd5b818103600060005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555081600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054610c079190610ea7565b9250508190909055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c6d9190610d8b565b60405180910390a3610c86848484610c9363ffffffff16565b505b505050565b5b505050565b5b5050505661118a565b600060208083528351808285015260005b81811015610cce57828187010151604082870101525b8281019050610cae565b81811115610ce0576000604083870101525b5060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565b60008135905073ffffffffffffffffffffffffffffffffffffffff811681141515610d425760006000fd5b5b919050565b6000600060408385031215610d5d5760006000fd5b610d6683610d17565b9150602083013590505b9250929050565b600060208201905082151582525b92915050565b60006020820190508282525b92915050565b60006000600060608486031215610db45760006000fd5b610dbd84610d17565b9250610dcb60208501610d17565b9150604084013590505b9250925092565b600060208201905060ff831682525b92915050565b600060208284031215610e045760006000fd5b610e0d82610d17565b90505b92915050565b6000600060408385031215610e2b5760006000fd5b610e3483610d17565b9150610e4260208401610d17565b90505b9250929050565b60008160011c905060018216801515610e6657607f821691505b60208210811415610ea0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b505b919050565b60008219821115610ee1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b82820190505b92915050565b60208152602560208201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760408201527f207a65726f000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602460208201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602260208201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560408201527f7373000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601d60208201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604082015260006060820190505b919050565b60208152602560208201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602360208201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201527f6573730000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602660208201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408201527f616c616e63650000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565bfea2646970667358221220f76115a00ca871b53131922eae2fdecc5687c0d18fb8c90abda8c603a4980ddf64736f6c634300080c0033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC20>;
  }
  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}