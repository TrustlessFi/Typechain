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
  "0x60a0604052600160076000509090553480156200001c5760006000fd5b50604051620021b0380380620021b08339818101604052810190620000429190620001fc565b5b80600001515b6040518060400160405280600381526020017f48756500000000000000000000000000000000000000000000000000000000008152602001506040518060400160405280600381526020017f48756500000000000000000000000000000000000000000000000000000000008152602001505b8160036000509080519060200190620000d79291906200013b565b508060046000509080519060200190620000f39291906200013b565b505b50508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b505b50620002af565b82805462000149906200026a565b90600052602060002090601f0160209004810192826200016d5760008555620001be565b82601f106200018857805160ff1916838001178555620001be565b82800160010185558215620001be579182015b82811115620001bd57825182600050909055916020019190600101906200019b565b5b509050620001cd9190620001d1565b5090565b620001d7565b80821115620001f35760008181506000905550600101620001d7565b509056620002ae565b6000602082840312156200020e578081fd5b604051602081018181106001600160401b03821117156200023d57634e487b7160e01b83526041600452602483fd5b806040525082516001600160a01b038116811415156200025b578283fd5b80825250809150505b92915050565b60008160011c9050600182168015156200028557607f821691505b60208210811415620002a757634e487b7160e01b600052602260045260246000fd5b505b919050565b5b60805160601c611ecd620002e3600039600081816104e9015281816105430152818161085f0152610c790152611ecd6000f3fe60806040523480156100115760006000fd5b50600436106101565760003560e01c8063449a52f8116100ce57806395d89b4111610082578063a9059cbb11610067578063a9059cbb146103a2578063c59fb1ab146103d2578063dd62ed3e146103ee57610156565b806395d89b4114610354578063a457c2d71461037257610156565b806375172a8b116100b357806375172a8b146102fc57806375f12b211461031a57806379cc67901461033857610156565b8063449a52f8146102b057806370a08231146102cc57610156565b806316f9428f1161012557806323b872dd1161010a57806323b872dd14610232578063313ce56714610262578063395093511461028057610156565b806316f9428f146101f857806318160ddd1461021457610156565b806306fdde031461015c578063095ea7b31461017a5780630c340a24146101aa578063113cf1ab146101c857610156565b60006000fd5b61016461041e565b604051610171919061187a565b60405180910390f35b610194600480360381019061018f919061172e565b6104b8565b6040516101a1919061183e565b60405180910390f35b6101b26104e7565b6040516101bf9190611852565b60405180910390f35b6101e260048036038101906101dd919061175f565b61050b565b6040516101ef919061183e565b60405180910390f35b610212600480360381019061020d919061172e565b610530565b005b61021c61063f565b6040516102299190611d7b565b60405180910390f35b61024c600480360381019061024791906116e9565b610651565b604051610259919061183e565b60405180910390f35b61026a610772565b6040516102779190611d8d565b60405180910390f35b61029a6004803603810190610295919061172e565b610780565b6040516102a7919061183e565b60405180910390f35b6102ca60048036038101906102c5919061172e565b61084c565b005b6102e660048036038101906102e19190611686565b61095a565b6040516102f39190611d7b565b60405180910390f35b6103046109ae565b6040516103119190611d7b565b60405180910390f35b6103226109c9565b60405161032f919061183e565b60405180910390f35b610352600480360381019061034d919061172e565b6109dc565b005b61035c610a91565b604051610369919061187a565b60405180910390f35b61038c6004803603810190610387919061172e565b610b2b565b604051610399919061183e565b60405180910390f35b6103bc60048036038101906103b7919061172e565b610c3a565b6040516103c9919061183e565b60405180910390f35b6103ec60048036038101906103e791906117fa565b610c69565b005b610408600480360381019061040391906116ad565b610d25565b6040516104159190611d7b565b60405180910390f35b60606003600050805461043090611de1565b80601f016020809104026020016040519081016040528092919081815260200182805461045c90611de1565b80156104a95780601f1061047e576101008083540402835291602001916104a9565b820191906000526020600020905b81548152906001019060200180831161048c57829003601f168201915b505050505090506104b5565b90565b60006104d86104cb610dba63ffffffff16565b8484610dc763ffffffff16565b600190506104e1565b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600660005060205280600052604060002060009150909054906101000a900460ff1681565b61053e610fa263ffffffff16565b61061a7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166385aa61036040518163ffffffff1660e01b815260040160206040518083038186803b1580156105a85760006000fd5b505afa1580156105bd573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e191906117ac565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ffd63ffffffff16565b61062b30838361104363ffffffff16565b5b61063a6112ef63ffffffff16565b5b5050565b6000600260005054905061064e565b90565b600061066484848461104363ffffffff16565b6000600160005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060006106bb610dba63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050828110151515610740576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073790611b43565b60405180910390fd5b61076085610752610dba63ffffffff16565b858403610dc763ffffffff16565b600191505061076b56505b9392505050565b60006012905061077d565b90565b600061083d610793610dba63ffffffff16565b8484600160005060006107aa610dba63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050546108329190611da2565b610dc763ffffffff16565b60019050610846565b92915050565b61085a610fa263ffffffff16565b6109367f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b815260040160206040518083038186803b1580156108c45760006000fd5b505afa1580156108d9573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fd91906117d3565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ffd63ffffffff16565b61094682826112ff63ffffffff16565b5b6109556112ef63ffffffff16565b5b5050565b6000600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490506109a9565b919050565b60006109bf3061095a63ffffffff16565b90506109c6565b90565b600560009054906101000a900460ff1681565b6109ea610fa263ffffffff16565b60006109fc8333610d2563ffffffff16565b9050818110151515610a43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3a90611ac5565b60405180910390fd5b610a6c83610a55610dba63ffffffff16565b8484610a619190611dc2565b610dc763ffffffff16565b610a7c838361147a63ffffffff16565b505b610a8c6112ef63ffffffff16565b5b5050565b606060046000508054610aa390611de1565b80601f0160208091040260200160405190810160405280929190818152602001828054610acf90611de1565b8015610b1c5780601f10610af157610100808354040283529160200191610b1c565b820191906000526020600020905b815481529060010190602001808311610aff57829003601f168201915b50505050509050610b28565b90565b6000600060016000506000610b44610dba63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050828110151515610c09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0090611cd7565b60405180910390fd5b610c29610c1a610dba63ffffffff16565b85858403610dc763ffffffff16565b6001915050610c3456505b92915050565b6000610c5a610c4d610dba63ffffffff16565b848461104363ffffffff16565b60019050610c63565b92915050565b610c77610fa263ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663734875a8336040518263ffffffff1660e01b8152600401610cd09190611816565b60006040518083038186803b158015610ce95760006000fd5b505afa158015610cfe573d600060003e3d6000fd5b50505050610d12308261147a63ffffffff16565b5b610d216112ef63ffffffff16565b5b50565b6000600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610db4565b92915050565b6000339050610dc4565b90565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610e39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3090611c72565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610eab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ea2906119fb565b60405180910390fd5b80600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610f949190611d7b565b60405180910390a35b505050565b600260076000505414151515610fed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe4906119bc565b60405180910390fd5b600260076000508190909055505b565b80151561103f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103690611b04565b60405180910390fd5b5b50565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156110b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ac90611c0d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611127576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111e906118f2565b60405180910390fd5b61113883838361167663ffffffff16565b6000600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490508181101515156111c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111be90611a60565b60405180910390fd5b818103600060005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555081600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250546112699190611da2565b9250508190909055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516112cf9190611d7b565b60405180910390a36112e884848461167c63ffffffff16565b505b505050565b600160076000508190909055505b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611371576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136890611d3c565b60405180910390fd5b6113836000838361167663ffffffff16565b806002600082828250546113979190611da2565b92505081909090555080600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250546113f49190611da2565b9250508190909055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161145b9190611d7b565b60405180910390a36114756000838361167c63ffffffff16565b5b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156114ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114e390611ba8565b60405180910390fd5b6114fe8260008361167663ffffffff16565b6000600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054905081811015151561158d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158490611957565b60405180910390fd5b818103600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819090905550816002600082828250546115ef9190611dc2565b925050819090905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516116569190611d7b565b60405180910390a36116708360008461167c63ffffffff16565b505b5050565b5b505050565b5b50505056611e96565b600060208284031215611697578081fd5b81356116a281611e6d565b809150505b92915050565b60006000604083850312156116c0578081fd5b82356116cb81611e6d565b8092505060208301356116dd81611e6d565b809150505b9250929050565b600060006000606084860312156116fe578081fd5b833561170981611e6d565b80935050602084013561171b81611e6d565b80925050604084013590505b9250925092565b6000600060408385031215611741578182fd5b823561174c81611e6d565b80925050602083013590505b9250929050565b600060208284031215611770578081fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811415156117a1578182fd5b809150505b92915050565b6000602082840312156117bd578081fd5b81516117c881611e6d565b809150505b92915050565b6000602082840312156117e4578081fd5b81516117ef81611e6d565b809150505b92915050565b60006020828403121561180b578081fd5b813590505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b6000602080835283518082850152825b818110156118aa57828187010151604082870101525b828101905061188a565b818111156118bb5783604083870101525b5060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565b60208152602360208201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201527f6573730000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602260208201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60408201527f6365000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152600d60208201527f4c43205265656e7472616e637900000000000000000000000000000000000000604082015260006060820190505b919050565b60208152602260208201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560408201527f7373000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602660208201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408201527f616c616e63650000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601660208201527f4275726e206578636565647320616c6c6f77616e636500000000000000000000604082015260006060820190505b919050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b60208152602860208201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160408201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602160208201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360408201527f7300000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602560208201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602460208201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602560208201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760408201527f207a65726f000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601f60208201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260006060820190505b919050565b60006020820190508282525b92915050565b600060208201905060ff831682525b92915050565b60008219821115611db657611db5611e3c565b5b82820190505b92915050565b600082821015611dd557611dd4611e3c565b5b82820390505b92915050565b60008160011c905060018216801515611dfb57607f821691505b60208210811415611e35577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b73ffffffffffffffffffffffffffffffffffffffff811681141515611e925760006000fd5b505b565bfea26469706673582212201a758f375bf6c7cc13648d6cbffeb23d7a1ace19b4cbf1d23dff870b03c98fe764736f6c63430008040033";

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
