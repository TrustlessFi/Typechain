/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Hue, HueInterface, ConstructorParamsStruct } from "../Hue";

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
        ],
        internalType: "struct IHue.ConstructorParams",
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
    inputs: [],
    name: "Stopped",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "burnReserves",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "distributeReserves",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    name: "reserves",
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
    name: "stopped",
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
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "",
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
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052600160076000509090553480156200001c5760006000fd5b506040516200209a3803806200209a83398181016040528101906200004291906200021e565b5b80600001515b6040518060400160405280600981526020017f48756520546f6b656e00000000000000000000000000000000000000000000008152602001506040518060400160405280600381526020017f48554500000000000000000000000000000000000000000000000000000000008152602001505b8160036000509080519060200190620000d792919062000157565b508060046000509080519060200190620000f392919062000157565b506012600560006101000a81548160ff021916908360ff1602179055505b50508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b505b506200027b565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200018f5760008555620001e0565b82601f10620001aa57805160ff1916838001178555620001e0565b82800160010185558215620001e0579182015b82811115620001df5782518260005090905591602001919060010190620001bd565b5b509050620001ef9190620001f3565b5090565b620001f9565b80821115620002155760008181506000905550600101620001f9565b5090566200027a565b60006020828403121562000230578081fd5b604051602081018181106001600160401b03821117156200024d57fe5b806040525082516001600160a01b038116811415156200026b578283fd5b80825250809150505b92915050565b5b60805160601c611df2620002a8600039806104f9528061055352806108625280610c615250611df26000f3fe60806040523480156100115760006000fd5b50600436106101565760003560e01c8063449a52f8116100ce57806395d89b4111610082578063a9059cbb11610067578063a9059cbb146103a2578063c59fb1ab146103d2578063dd62ed3e146103ee57610156565b806395d89b4114610354578063a457c2d71461037257610156565b806375172a8b116100b357806375172a8b146102fc57806375f12b211461031a57806379cc67901461033857610156565b8063449a52f8146102b057806370a08231146102cc57610156565b806316f9428f1161012557806323b872dd1161010a57806323b872dd14610232578063313ce56714610262578063395093511461028057610156565b806316f9428f146101f857806318160ddd1461021457610156565b806306fdde031461015c578063095ea7b31461017a5780630c340a24146101aa578063113cf1ab146101c857610156565b60006000fd5b61016461041e565b6040516101719190611b70565b60405180910390f35b610194600480360381019061018f9190611a24565b6104c8565b6040516101a19190611b34565b60405180910390f35b6101b26104f7565b6040516101bf9190611b48565b60405180910390f35b6101e260048036038101906101dd9190611a55565b61051b565b6040516101ef9190611b34565b60405180910390f35b610212600480360381019061020d9190611a24565b610540565b005b61021c61064f565b6040516102299190611c27565b60405180910390f35b61024c600480360381019061024791906119df565b610661565b6040516102599190611b34565b60405180910390f35b61026a610760565b6040516102779190611c39565b60405180910390f35b61029a60048036038101906102959190611a24565b61077c565b6040516102a79190611b34565b60405180910390f35b6102ca60048036038101906102c59190611a24565b61084f565b005b6102e660048036038101906102e1919061197c565b61095d565b6040516102f39190611c27565b60405180910390f35b6103046109b1565b6040516103119190611c27565b60405180910390f35b6103226109cc565b60405161032f9190611b34565b60405180910390f35b610352600480360381019061034d9190611a24565b6109df565b005b61035c610a8b565b6040516103699190611b70565b60405180910390f35b61038c60048036038101906103879190611a24565b610b35565b6040516103999190611b34565b60405180910390f35b6103bc60048036038101906103b79190611a24565b610c22565b6040516103c99190611b34565b60405180910390f35b6103ec60048036038101906103e79190611af0565b610c51565b005b610408600480360381019061040391906119a3565b610d0d565b6040516104159190611c27565b60405180910390f35b606060036000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104b95780601f1061048e576101008083540402835291602001916104b9565b820191906000526020600020905b81548152906001019060200180831161049c57829003601f168201915b505050505090506104c5565b90565b60006104e86104db610da263ffffffff16565b8484610daf63ffffffff16565b600190506104f1565b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600660005060205280600052604060002060009150909054906101000a900460ff1681565b61054e610fb663ffffffff16565b61062a7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166385aa61036040518163ffffffff1660e01b815260040160206040518083038186803b1580156105b85760006000fd5b505afa1580156105cd573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f19190611aa2565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461104763ffffffff16565b61063b3083836110c363ffffffff16565b5b61064a6113af63ffffffff16565b5b5050565b6000600260005054905061065e565b90565b60006106748484846110c363ffffffff16565b61075084610686610da263ffffffff16565b61074585604051806060016040528060288152602001611d0660289139600160005060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060006106f8610da263ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050546113bf9092919063ffffffff16565b610daf63ffffffff16565b60019050610759565b9392505050565b6000600560009054906101000a900460ff169050610779565b90565b600061084061078f610da263ffffffff16565b8461083585600160005060006107a9610da263ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505461148190919063ffffffff16565b610daf63ffffffff16565b60019050610849565b92915050565b61085d610fb663ffffffff16565b6109397f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b815260040160206040518083038186803b1580156108c75760006000fd5b505afa1580156108dc573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109009190611ac9565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461104763ffffffff16565b610949828261151563ffffffff16565b5b6109586113af63ffffffff16565b5b5050565b6000600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490506109ac565b919050565b60006109c23061095d63ffffffff16565b90506109c9565b90565b600560019054906101000a900460ff1681565b6109ed610fb663ffffffff16565b60006109ff8333610d0d63ffffffff16565b9050818110151515610a46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3d90611be8565b60405180910390fd5b610a6683610a58610da263ffffffff16565b848403610daf63ffffffff16565b610a76838361170063ffffffff16565b505b610a866113af63ffffffff16565b5b5050565b606060046000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b265780601f10610afb57610100808354040283529160200191610b26565b820191906000526020600020905b815481529060010190602001808311610b0957829003601f168201915b50505050509050610b32565b90565b6000610c13610b48610da263ffffffff16565b84610c0885604051806060016040528060258152602001611d986025913960016000506000610b7b610da263ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050546113bf9092919063ffffffff16565b610daf63ffffffff16565b60019050610c1c565b92915050565b6000610c42610c35610da263ffffffff16565b84846110c363ffffffff16565b60019050610c4b565b92915050565b610c5f610fb663ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663734875a8336040518263ffffffff1660e01b8152600401610cb89190611b0c565b60006040518083038186803b158015610cd15760006000fd5b505afa158015610ce6573d600060003e3d6000fd5b50505050610cfa308261170063ffffffff16565b5b610d096113af63ffffffff16565b5b50565b6000600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610d9c565b92915050565b6000339050610dac565b90565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610e37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180611d746024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610ebf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611cbe6022913960400191505060405180910390fd5b80600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b505050565b600260076000505414151515611037576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4c43205265656e7472616e63790000000000000000000000000000000000000081526020015060200191505060405180910390fd5b600260076000508190909055505b565b8015156110bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b50565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561114b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611d4f6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156111d3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611c796023913960400191505060405180910390fd5b6111e48383836118e563ffffffff16565b61125681604051806060016040528060268152602001611ce060269139600060005060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050546113bf9092919063ffffffff16565b600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055506112f981600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505461148190919063ffffffff16565b600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35b505050565b600160076000508190909055505b565b6000838311158290151561146f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156114345780820151818401525b602081019050611418565b50505050905090810190601f1680156114615780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50828403905061147a565b9392505050565b600060008284019050838110151515611505576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081526020015060200191505060405180910390fd5b8091505061150f56505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156115bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081526020015060200191505060405180910390fd5b6115cf600083836118e563ffffffff16565b6115e78160026000505461148190919063ffffffff16565b600260005081909090555061164a81600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505461148190919063ffffffff16565b600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611788576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611d2e6021913960400191505060405180910390fd5b61179a826000836118e563ffffffff16565b61180c81604051806060016040528060228152602001611c9c60229139600060005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050546113bf9092919063ffffffff16565b600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555061186f816002600050546118eb90919063ffffffff16565b6002600050819090905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35b5050565b5b505050565b6000828211151515611968576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081526020015060200191505060405180910390fd5b8183039050611972565b9291505056611c77565b60006020828403121561198d578081fd5b813561199881611c4e565b809150505b92915050565b60006000604083850312156119b6578081fd5b82356119c181611c4e565b8092505060208301356119d381611c4e565b809150505b9250929050565b600060006000606084860312156119f4578081fd5b83356119ff81611c4e565b809350506020840135611a1181611c4e565b80925050604084013590505b9250925092565b6000600060408385031215611a37578182fd5b8235611a4281611c4e565b80925050602083013590505b9250929050565b600060208284031215611a66578081fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681141515611a97578182fd5b809150505b92915050565b600060208284031215611ab3578081fd5b8151611abe81611c4e565b809150505b92915050565b600060208284031215611ada578081fd5b8151611ae581611c4e565b809150505b92915050565b600060208284031215611b01578081fd5b813590505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b6000602080835283518082850152825b81811015611ba057828187010151604082870101525b8281019050611b80565b81811115611bb15783604083870101525b5060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565b600060208252601660208301527f4275726e206578636565647320616c6c6f77616e63650000000000000000000060408301526060820190505b919050565b60006020820190508282525b92915050565b600060208201905060ff831682525b92915050565b73ffffffffffffffffffffffffffffffffffffffff811681141515611c735760006000fd5b5b50565bfe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220e7a45efed2763f6f1f10d1b12057a3bf525d0fd8de56ad40dc9e980e9be1aa8c64736f6c63430007060033";

type HueConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HueConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Hue__factory extends ContractFactory {
  constructor(...args: HueConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Hue> {
    return super.deploy(params, overrides || {}) as Promise<Hue>;
  }
  getDeployTransaction(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(params, overrides || {});
  }
  attach(address: string): Hue {
    return super.attach(address) as Hue;
  }
  connect(signer: Signer): Hue__factory {
    return super.connect(signer) as Hue__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HueInterface {
    return new utils.Interface(_abi) as HueInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Hue {
    return new Contract(address, _abi, signerOrProvider) as Hue;
  }
}
