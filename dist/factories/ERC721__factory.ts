/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    name: "baseURI",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015620000125760006000fd5b5060405162002f9f38038062002f9f83398181016040526040811015620000395760006000fd5b81019080805160405193929190846401000000008211156200005b5760006000fd5b83820191506020820185811115620000735760006000fd5b8251866001820283011164010000000082111715620000925760006000fd5b8083526020830192505050908051906020019080838360005b83811015620000c95780820151818401525b602081019050620000ab565b50505050905090810190601f168015620000f75780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011c5760006000fd5b83820191506020820185811115620001345760006000fd5b8251866001820283011164010000000082111715620001535760006000fd5b8083526020830192505050908051906020019080838360005b838110156200018a5780820151818401525b6020810190506200016c565b50505050905090810190601f168015620001b85780820380516001836020036101000a031916815260200191505b506040526020015050505b5b620001dc6301ffc9a760e01b6200026660201b60201c565b5b8160066000509080519060200190620001f892919062000379565b5080600760005090805190602001906200021492919062000379565b506200022d6380ac58cd60e01b6200026660201b60201c565b62000245635b5e139f60e01b6200026660201b60201c565b6200025d63780e9d6360e01b6200026660201b60201c565b5b50506200043b565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415151562000308576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081526020015060200191505060405180910390fd5b600160006000506000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620003b1576000855562000402565b82601f10620003cc57805160ff191683800117855562000402565b8280016001018555821562000402579182015b82811115620004015782518260005090905591602001919060010190620003df565b5b50905062000411919062000415565b5090565b6200041b565b808211156200043757600081815060009055506001016200041b565b5090565b612b54806200044b6000396000f3fe60806040523480156100115760006000fd5b50600436106101205760003560e01c80634f6ccce7116100b357806395d89b4111610082578063b88d4fde11610067578063b88d4fde14610663578063c87b56dd14610770578063e985e9c51461081957610120565b806395d89b411461058e578063a22cb4651461061257610120565b80634f6ccce7146104155780636352211e146104585780636c0360eb146104b157806370a082311461053557610120565b806318160ddd116100ef57806318160ddd146102b657806323b872dd146102d45780632f745c591461034357806342842e0e146103a657610120565b806301ffc9a71461012657806306fdde031461018a578063081812fc1461020e578063095ea7b31461026757610120565b60006000fd5b6101726004803603602081101561013d5760006000fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610894565b60405180821515815260200191505060405180910390f35b610192610904565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d35780820151818401525b6020810190506101b7565b50505050905090810190601f1680156102005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61023b600480360360208110156102255760006000fd5b81019080803590602001909291905050506109ae565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102b46004803603604081101561027e5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a59565b005b6102be610bc0565b6040518082815260200191505060405180910390f35b610341600480360360608110156102eb5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610be1565b005b6103906004803603604081101561035a5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c6c565b6040518082815260200191505060405180910390f35b610413600480360360608110156103bd5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610cd2565b005b6104426004803603602081101561042c5760006000fd5b8101908080359060200190929190505050610cfc565b6040518082815260200191505060405180910390f35b6104856004803603602081101561046f5760006000fd5b8101908080359060200190929190505050610d29565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104b9610d68565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104fa5780820151818401525b6020810190506104de565b50505050905090810190601f1680156105275780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105786004803603602081101561054c5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e12565b6040518082815260200191505060405180910390f35b610596610efd565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105d75780820151818401525b6020810190506105bb565b50505050905090810190601f1680156106045780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610661600480360360408110156106295760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610fa7565b005b61076e6004803603608081101561067a5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156106e25760006000fd5b8201836020820111156106f55760006000fd5b803590602001918460018302840111640100000000831117156107185760006000fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505090909192909091929050505061117b565b005b61079d600480360360208110156107875760006000fd5b8101908080359060200190929190505050611208565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107de5780820151818401525b6020810190506107c2565b50505050905090810190601f16801561080b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61087c600480360360408110156108305760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611507565b60405180821515815260200191505060405180910390f35b600060006000506000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff1690506108ff565b919050565b606060066000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561099f5780601f106109745761010080835404028352916020019161099f565b820191906000526020600020905b81548152906001019060200180831161098257829003601f168201915b505050505090506109ab565b90565b60006109bf826115a663ffffffff16565b1515610a16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612a49602c913960400191505060405180910390fd5b6004600050600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610a54565b919050565b6000610a6a82610d2963ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610af3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612acd6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610b186115cb63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff161480610b535750610b5281610b476115cb63ffffffff16565b61150763ffffffff16565b5b1515610baa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018061299c6038913960400191505060405180910390fd5b610bba83836115d863ffffffff16565b505b5050565b6000610bd7600260005061169b909063ffffffff16565b9050610bde565b90565b610bfe610bf26115cb63ffffffff16565b826116be63ffffffff16565b1515610c55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612aee6031913960400191505060405180910390fd5b610c668383836117d263ffffffff16565b5b505050565b6000610cc582600160005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050611a3b90919063ffffffff16565b9050610ccc565b92915050565b610cf68383836040518060200160405280600081526020015061117b63ffffffff16565b5b505050565b60006000610d17836002600050611a6390919063ffffffff16565b50905080915050610d2456505b919050565b6000610d5c826040518060600160405280602981526020016129fe602991396002600050611aa49092919063ffffffff16565b9050610d63565b919050565b606060096000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e035780601f10610dd857610100808354040283529160200191610e03565b820191906000526020600020905b815481529060010190602001808311610de657829003601f168201915b50505050509050610e0f565b90565b6000600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610e9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806129d4602a913960400191505060405180910390fd5b610ef1600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050611ad1909063ffffffff16565b9050610ef8565b919050565b606060076000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f985780601f10610f6d57610100808354040283529160200191610f98565b820191906000526020600020905b815481529060010190602001808311610f7b57829003601f168201915b50505050509050610fa4565b90565b610fb56115cb63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561105b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081526020015060200191505060405180910390fd5b80600560005060006110716115cb63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166111276115cb63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35b5050565b61119861118c6115cb63ffffffff16565b836116be63ffffffff16565b15156111ef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612aee6031913960400191505060405180910390fd5b61120184848484611af463ffffffff16565b5b50505050565b6060611219826115a663ffffffff16565b1515611270576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612a9e602f913960400191505060405180910390fd5b6000600860005060008481526020019081526020016000206000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561131f5780601f106112f45761010080835404028352916020019161131f565b820191906000526020600020905b81548152906001019060200180831161130257829003601f168201915b505050505090506000611336610d6863ffffffff16565b905060008151141561134c578192505050611502565b6000825111156114235780826040516020018083805190602001908083835b60208310151561139157805182525b60208201915060208101905060208303925061136b565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831015156113e557805182525b6020820191506020810190506020830392506113bf565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050611502565b8061143585611b75909063ffffffff16565b6040516020018083805190602001908083835b60208310151561146e57805182525b602082019150602081019050602083039250611448565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831015156114c257805182525b60208201915060208101905060208303925061149c565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506115025650505b919050565b6000600560005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690506115a0565b92915050565b60006115bf826002600050611cda90919063ffffffff16565b90506115c6565b919050565b60003390506115d5565b90565b816004600050600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661165483610d2963ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b5050565b60006116b282600001600050611d0263ffffffff16565b90506116b9565b919050565b60006116cf826115a663ffffffff16565b1515611726576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612970602c913960400191505060405180910390fd5b600061173783610d2963ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806117ac57508373ffffffffffffffffffffffffffffffffffffffff16611794846109ae63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16145b806117c357506117c2818561150763ffffffff16565b5b9150506117cc56505b92915050565b8273ffffffffffffffffffffffffffffffffffffffff166117f882610d2963ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16141515611866576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612a756029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156118ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806129266024913960400191505060405180910390fd5b6118ff838383611d1b63ffffffff16565b6119106000826115d863ffffffff16565b61196781600160005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050611d2190919063ffffffff16565b506119bf81600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050611d4990919063ffffffff16565b506119d981836002600050611d719092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b505050565b6000611a538360000160005083611db463ffffffff16565b60001c9050611a5d565b92915050565b6000600060006000611a818660000160005086611e4b63ffffffff16565b915091508160001c8160001c809050935093505050611a9d5650505b9250929050565b6000611ac0846000016000508460001b84611eff63ffffffff16565b60001c9050611aca565b9392505050565b6000611ae88260000160005061201963ffffffff16565b9050611aef565b919050565b611b058484846117d263ffffffff16565b611b178484848461203263ffffffff16565b1515611b6e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806128f46032913960400191505060405180910390fd5b5b50505050565b60606000821415611bc0576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152602001509050611cd5565b600082905060005b600082141515611bf0578080600101915050600a82811515611be657fe5b0491508150611bc8565b60008167ffffffffffffffff81118015611c0a5760006000fd5b506040519080825280601f01601f191660200182016040528015611c3d5781602001600182028036833780820191505090505b509050600060018303905085935083505b600084141515611cc557600a84811515611c6457fe5b0660300160f81b828280600190039350815181101515611c8057fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84811515611cbb57fe5b0493508350611c4e565b81945050505050611cd556505050505b919050565b6000611cf5836000016000508360001b61226363ffffffff16565b9050611cfc565b92915050565b600081600001600050805490509050611d16565b919050565b5b505050565b6000611d3c836000016000508360001b61229a63ffffffff16565b9050611d43565b92915050565b6000611d64836000016000508360001b6123e563ffffffff16565b9050611d6b565b92915050565b6000611da6846000016000508460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b61248463ffffffff16565b9050611dad565b9392505050565b6000818360000160005080549050111515611e1a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806128d26022913960400191505060405180910390fd5b8260000160005082815481101515611e2e57fe5b906000526020600020900160005b50549050611e45565b92915050565b60006000828460000160005080549050111515611eb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612a276022913960400191505060405180910390fd5b60008460000160005084815481101515611ec957fe5b906000526020600020906002020160005b509050806000016000505481600101600050549250925050611ef856505b9250929050565b600060008460010160005060008560001916600019168152602001908152602001600020600050549050600081141583901515611fd8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611f9d5780820151818401525b602081019050611f81565b50505050905090810190601f168015611fca5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160005060018203815481101515611ff057fe5b906000526020600020906002020160005b506001016000505491505061201256505b9392505050565b60008160000160005080549050905061202d565b919050565b600061205b8473ffffffffffffffffffffffffffffffffffffffff166125bf909063ffffffff16565b151561206a576001905061225b565b60006121db63150b7a0260e01b6120856115cb63ffffffff16565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561210a5780820151818401525b6020810190506120ee565b50505050905090810190601f1680156121375780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518060600160405280603281526020016128f4603291398773ffffffffffffffffffffffffffffffffffffffff166125d99092919063ffffffff16565b905060008180602001905160208110156121f55760006000fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149250505061225b5650505b949350505050565b6000600083600101600050600084600019166000191681526020019081526020016000206000505414159050612294565b92915050565b6000600083600101600050600084600019166000191681526020019081526020016000206000505490506000811415156123d3576000600182039050600060018660000160005080549050039050600086600001600050828154811015156122fe57fe5b906000526020600020900160005b5054905080876000016000508481548110151561232557fe5b906000526020600020900160005b508190906000191690555060018301876001016000506000836000191660001916815260200190815260200160002060005081909090555086600001600050805480151561237d57fe5b600190038181906000526020600020900160005b5060009055905586600101600050600087600019166000191681526020019081526020016000206000506000905560019450505050506123df565050506123dd565b60009150506123df565b505b92915050565b60006123f783836125fc63ffffffff16565b1515612474578260000160005082908060018154018082558091505060019003906000526020600020900160005b9091909190915090600019169055826000016000508054905083600101600050600084600019166000191681526020019081526020016000206000508190909055506001905061247e5661247d565b6000905061247e565b5b92915050565b600060008460010160005060008560001916600019168152602001908152602001600020600050549050600081141561257257846000016000506040518060400160405280866000191681526020018560001916815260200150908060018154018082558091505060019003906000526020600020906002020160005b90919091909150600082015181600001600050906000191690556020820151816001016000509060001916905550508460000160005080549050856001016000506000866000191660001916815260200190815260200160002060005081909090555060019150506125b8566125b6565b82856000016000506001830381548110151561258a57fe5b906000526020600020906002020160005b506001016000508190906000191690555060009150506125b8565b505b9392505050565b60006000823b9050600081119150506125d456505b919050565b60606125ee848460008561263363ffffffff16565b90506125f5565b9392505050565b600060008360010160005060008460001916600019168152602001908152602001600020600050541415905061262d565b92915050565b6060824710151515612690576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061294a6026913960400191505060405180910390fd5b61269f856125bf63ffffffff16565b1515612716576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081526020015060200191505060405180910390fd5b600060008673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310151561276957805182525b602082019150602081019050602083039250612743565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146127cb576040519150601f19603f3d011682016040523d82523d6000602084013e6127d0565b606091505b50915091506127e68282866127f963ffffffff16565b925050506127f15650505b949350505050565b6060831561280d578290506128ca566128c9565b6000835111156128255782518084602001fd506128c8565b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561288d5780820151818401525b602081019050612871565b50505050905090810190601f1680156128ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5b5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a264697066735822122052f01cb269729abc3d851fadd47688eb98b4a7f6b20b4732ad08d8ecfa99526a64736f6c63430007060033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
