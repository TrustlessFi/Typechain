/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TcpTimelock,
  TcpTimelockInterface,
  ConstructorParamsStruct,
} from "../TcpTimelock";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IGovernor",
            name: "Governor",
            type: "address",
          },
          {
            internalType: "address",
            name: "Guardian",
            type: "address",
          },
        ],
        internalType: "struct TcpTimelock.ConstructorParams",
        name: "params",
        type: "tuple",
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
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "action",
        type: "bytes4",
      },
    ],
    name: "validUpdate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052348015620000125760006000fd5b5060405162001f6438038062001f6483398181016040528101906200003891906200021f565b5b6202a30081600001515b62000054826200011860201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152601401505033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5050806020015173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b50620002a4565b62015180811015151562000178576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603481526020018062001ef86034913960400191505060405180910390fd5b621275008111151515620001d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018062001f2c6038913960400191505060405180910390fd5b8060016000508190909055506001600050547f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c60405160405180910390a25b5056620002a3565b60006040828403121562000231578081fd5b604051604081018181106001600160401b03821117156200024e57fe5b80604052508251620002608162000286565b808252506020830151620002748162000286565b80602083015250809150505b92915050565b6001600160a01b038116811415156200029f5760006000fd5b5b50565b5b60805160601c60a05160601c611c1b620002dd60003980611259528061135a525080610e4d528061128a52806113c15250611c1b6000f3fe60806040523480156100115760006000fd5b50600436106100f95760003560e01c80636e9960c311610098578063d5f3948811610067578063d5f394881461027b578063e177246e14610299578063f2b06537146102b5578063f851a440146102e5576100f9565b80636e9960c3146102035780637d645fab14610221578063b1b43ae51461023f578063c1a287e21461025d576100f9565b806319ab453c116100d457806319ab453c1461017b5780633ec5ab3214610197578063452a9320146101c75780636a42b8f8146101e5576100f9565b80624b1f12146100ff5780630e70eace1461011b578063113cf1ab1461014b576100f9565b60006000fd5b61011960048036038101906101149190611760565b610303565b005b61013560048036038101906101309190611760565b610629565b60405161014291906118fd565b60405180910390f35b6101656004803603810190610160919061182a565b6109d6565b60405161017291906118e9565b60405180910390f35b6101956004803603810190610190919061173d565b610a2c565b005b6101b160048036038101906101ac9190611760565b610af3565b6040516101be919061190f565b60405180910390f35b6101cf611257565b6040516101dc91906118c1565b60405180910390f35b6101ed61127b565b6040516101fa9190611987565b60405180910390f35b61020b611284565b60405161021891906118c1565b60405180910390f35b610229611384565b6040516102369190611987565b60405180910390f35b61024761138b565b6040516102549190611987565b60405180910390f35b610265611392565b6040516102729190611987565b60405180910390f35b610283611399565b60405161029091906118c1565b60405180910390f35b6102b360048036038101906102ae9190611877565b6113bf565b005b6102cf60048036038101906102ca919061180e565b611498565b6040516102dc91906118e9565b60405180910390f35b6102ed6114bd565b6040516102fa91906118c1565b60405180910390f35b61031161128463ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610396576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180611a0f6037913960400191505060405180910390fd5b600084848484604051602001808573ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156104065780820151818401525b6020810190506103ea565b50505050905090810190601f1680156104335780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561046d5780820151818401525b602081019050610451565b50505050905090810190601f16801561049a5780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052805190602001209050600060026000506000836000191660001916815260200190815260200160002060006101000a81548160ff0219169083151502179055508473ffffffffffffffffffffffffffffffffffffffff1681600019167f39805be0099a319b88cf17675318997e223b45eef7836c0bdfa20b4009e67cc6868686604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b8381101561057d5780820151818401525b602081019050610561565b50505050905090810190601f1680156105aa5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156105e45780820151818401525b6020810190506105c8565b50505050905090810190601f1680156106115780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a3505b50505050565b600061063961128463ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106be576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180611b676036913960400191505060405180910390fd5b6106e06106cf6114e363ffffffff16565b6001600050546114f063ffffffff16565b821015151561073a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526049815260200180611b9d6049913960600191505060405180910390fd5b600085858585604051602001808573ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156107aa5780820151818401525b60208101905061078e565b50505050905090810190601f1680156107d75780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156108115780820151818401525b6020810190506107f5565b50505050905090810190601f16801561083e5780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052805190602001209050600160026000506000836000191660001916815260200190815260200160002060006101000a81548160ff0219169083151502179055508573ffffffffffffffffffffffffffffffffffffffff1681600019167ed038d9209423c0ba06a7d606d7a0eeafe97cb5bdb3a9dd5b35c019b0966a95878787604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156109205780820151818401525b602081019050610904565b50505050905090810190601f16801561094d5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156109875780820151818401525b60208101905061096b565b50505050905090810190601f1680156109b45780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a3809150506109ce56505b949350505050565b600063e177246e60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050610a27565b919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a895760006000fd5b600360006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905580600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6060610b0361128463ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b88576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806119d76038913960400191505060405180910390fd5b600085858585604051602001808573ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610bf85780820151818401525b602081019050610bdc565b50505050905090810190601f168015610c255780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610c5f5780820151818401525b602081019050610c43565b50505050905090810190601f168015610c8c5780820380516001836020036101000a031916815260200191505b50965050505050505060405160208183030381529060405280519060200120905060026000506000826000191660001916815260200190815260200160002060009054906101000a900460ff161515610d30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180611b2a603d913960400191505060405180910390fd5b82610d3f6114e363ffffffff16565b10151515610d98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526045815260200180611a796045913960600191505060405180910390fd5b610dab8362093a806114f063ffffffff16565b610db96114e363ffffffff16565b11151515610e12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180611a466033913960400191505060405180910390fd5b600060026000506000836000191660001916815260200190815260200160002060006101000a81548160ff02191690831515021790555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166333daf5d48888886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610efa5780820151818401525b602081019050610ede565b50505050905090810190601f168015610f275780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610f615780820151818401525b602081019050610f45565b50505050905090810190601f168015610f8e5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015610fb15760006000fd5b505af1158015610fc6573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506040811015610ff15760006000fd5b81019080805190602001909291908051604051939291908464010000000082111561101c5760006000fd5b838201915060208201858111156110335760006000fd5b82518660018202830111640100000000821117156110515760006000fd5b8083526020830192505050908051906020019080838360005b838110156110865780820151818401525b60208101905061106a565b50505050905090810190601f1680156110b35780820380516001836020036101000a031916815260200191505b50604052602001505050809450819250505080151561111d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c81526020018061199b603c913960400191505060405180910390fd5b8673ffffffffffffffffffffffffffffffffffffffff1682600019167f73bcadb73827ad9a900198359278e77086ae03e9e17ef173ad7de9e7e39acaff888888604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156111a85780820151818401525b60208101905061118c565b50505050905090810190601f1680156111d55780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561120f5780820151818401525b6020810190506111f3565b50505050905090810190601f16801561123c5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a350505b949350505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60016000505481565b600060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663055ad42e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156112ef5760006000fd5b505afa158015611304573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113289190611893565b60ff161461135857600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661137a565b7f00000000000000000000000000000000000000000000000000000000000000005b9050611381565b90565b6212750081565b6201518081565b62093a8081565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611485576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f43616c6c206d75737420636f6d652066726f6d206578656375746f722e00000081526020015060200191505060405180910390fd5b6114948161158463ffffffff16565b5b50565b600260005060205280600052604060002060009150909054906101000a900460ff1681565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60004290506114ed565b90565b600060008284019050838110151515611574576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6164646974696f6e206f766572666c6f7700000000000000000000000000000081526020015060200191505060405180910390fd5b8091505061157e56505b92915050565b6201518081101515156115e2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526034815260200180611abe6034913960400191505060405180910390fd5b621275008111151515611640576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180611af26038913960400191505060405180910390fd5b8060016000508190909055506001600050547f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c60405160405180910390a25b5056611999565b600067ffffffffffffffff8084111561169b57fe5b60405160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f87011682010181811083821117156116d757fe5b80604052508092508481528585850111156116f25760006000fd5b8484602083013760006020868301015250505b9392505050565b60008135905073ffffffffffffffffffffffffffffffffffffffff8116811415156117375760006000fd5b5b919050565b60006020828403121561174e578081fd5b6117578261170c565b90505b92915050565b600060006000600060808587031215611777578283fd5b6117808561170c565b9350602085013567ffffffffffffffff8082111561179c578485fd5b818701915087601f83011215156117b1578485fd5b6117c088833560208501611686565b945060408701359150808211156117d5578384fd5b50808601905086601f82011215156117eb578283fd5b6117fa87823560208401611686565b925050606085013590505b92959194509250565b60006020828403121561181f578081fd5b813590505b92915050565b60006020828403121561183b578081fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114151561186c578182fd5b809150505b92915050565b600060208284031215611888578081fd5b813590505b92915050565b6000602082840312156118a4578081fd5b815160ff8116811415156118b6578182fd5b809150505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905082151582525b92915050565b60006020820190508282525b92915050565b6000602080835283518082850152825b8181101561193f57828187010151604082870101525b828101905061191f565b818111156119505783604083870101525b5060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565b60006020820190508282525b92915050565bfe54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e20657865637574696f6e20726576657274656454696d656c6f636b3a3a657865637574655472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206973207374616c652e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206861736e2774207375727061737365642074696d65206c6f636b2e54696d656c6f636b3a3a73657444656c61793a2044656c6179206d75737420657863656564206d696e696d756d2064656c61792e54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e6f7420657863656564206d6178696d756d2064656c61792e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206861736e2774206265656e207175657565642e54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a71756575655472616e73616374696f6e3a20457374696d6174656420657865637574696f6e20626c6f636b206d75737420736174697366792064656c61792ea2646970667358221220d3fee6594589c66be5ad1984a4b597373f5ed82f57047f6fb6e7b8570d1b00eb64736f6c6343000706003354696d656c6f636b3a3a73657444656c61793a2044656c6179206d75737420657863656564206d696e696d756d2064656c61792e54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e6f7420657863656564206d6178696d756d2064656c61792e";

type TcpTimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TcpTimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TcpTimelock__factory extends ContractFactory {
  constructor(...args: TcpTimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TcpTimelock> {
    return super.deploy(params, overrides || {}) as Promise<TcpTimelock>;
  }
  getDeployTransaction(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(params, overrides || {});
  }
  attach(address: string): TcpTimelock {
    return super.attach(address) as TcpTimelock;
  }
  connect(signer: Signer): TcpTimelock__factory {
    return super.connect(signer) as TcpTimelock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TcpTimelockInterface {
    return new utils.Interface(_abi) as TcpTimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TcpTimelock {
    return new Contract(address, _abi, signerOrProvider) as TcpTimelock;
  }
}