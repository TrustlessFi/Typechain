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
import type {
  CreatorAllocation,
  CreatorAllocationInterface,
} from "../CreatorAllocation";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "Governor",
            type: "address",
          },
          {
            internalType: "address",
            name: "Tcp",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "AllocationReceivers",
            type: "address[]",
          },
          {
            internalType: "uint128[]",
            name: "AllocationAmounts",
            type: "uint128[]",
          },
        ],
        internalType: "struct CreatorAllocation.ConstructorParams",
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
        name: "dest",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "IncentiveDistributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "count",
        type: "uint128",
      },
    ],
    name: "LockPositionIncreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newGuardian",
        type: "address",
      },
    ],
    name: "NewGuardian",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "lockDurationMonths",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "TokensLocked",
    type: "event",
  },
  {
    inputs: [],
    name: "dao",
    outputs: [
      {
        internalType: "contract ITokenLockDao",
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
        internalType: "uint128",
        name: "count",
        type: "uint128",
      },
    ],
    name: "getTokens",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "",
        type: "address",
      },
    ],
    name: "lockPositions",
    outputs: [
      {
        internalType: "uint128",
        name: "totalAllocation",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "tokensAllocated",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "cumulativeTokensAllocatedxLockYears",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "count",
        type: "uint128",
      },
      {
        internalType: "uint8",
        name: "lockDurationMonths",
        type: "uint8",
      },
    ],
    name: "lockTokensIntoDao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minAverageYearsLocked",
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
    name: "pendingGuardian",
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
    name: "recieveGuardianship",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dao",
        type: "address",
      },
    ],
    name: "setDao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
    name: "tokenMinter",
    outputs: [
      {
        internalType: "contract ITokenIncentiveMinter",
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
        name: "newGuardian",
        type: "address",
      },
    ],
    name: "transferGuardianship",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610100604052348015620000135760006000fd5b506040516200261438038062002614833981810160405281019062000039919062000718565b5b806000015181602001516729a2241af62c00005b82825b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b81526014015050620000d633620001dd60201b60201c565b5b5050620000e96200026560201b60201c565b67ffffffffffffffff1660c08167ffffffffffffffff1660c01b815260080150508060e081815260200150505b5050508060600151518160400151511415156200016a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200016190620007ea565b60405180910390fd5b6000600090505b816040015151811015620001d457620001c58260400151828151811015156200019657fe5b6020026020010151836060015183815181101515620001b157fe5b60200260200101516200028760201b60201c565b5b808060010191505062000171565b505b5062000878565b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167fb6182387b7ea948602a7e04e662a27ce251dc3dd014eacaed10dce36b41bf1a560405160405180910390a25b50565b60006200027f426200048860201b620008f317909060201c565b905080505b90565b6000816fffffffffffffffffffffffffffffffff1611151562000315576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f4e6f6f702e00000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b620003a581600360005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166200051c60201b620009851790919060201c565b600360005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff167f39269bcc94baba79914cd1fbb42780568649c4411ad91db4c52e1e029bde31e28260405180826fffffffffffffffffffffffffffffffff16815260200191505060405180910390a25b5050565b600068010000000000000000821015156200050e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b81905062000517565b919050565b6000826fffffffffffffffffffffffffffffffff168284019150816fffffffffffffffffffffffffffffffff1610151515620005c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b929150505662000877565b6000815190506001600160a01b03811681141515620005ee5760006000fd5b5b919050565b600082601f830112151562000607578081fd5b81516020620006206200061a8362000854565b62000829565b808382528282019150828601878485870289010111156200063f578586fd5b855b858110156200066e576200065582620005cf565b8452848401935084820191505b60018101905062000641565b5050809450505050505b92915050565b600082601f830112151562000691578081fd5b81516020620006aa620006a48362000854565b62000829565b80838252828201915082860187848587028901011115620006c9578586fd5b855b85811015620007085781516001600160801b03811681141515620006ed578788fd5b80855250848401935084820191505b600181019050620006cb565b5050809450505050505b92915050565b6000602082840312156200072a578081fd5b81516001600160401b038082111562000741578283fd5b81840191506080828603121562000756578283fd5b6040516080810181811083821117156200076c57fe5b80604052506200077c83620005cf565b81526200078c60208401620005cf565b6020820152604083015182811115620007a3578485fd5b620007b187828601620005f4565b604083015250606083015182811115620007c9578485fd5b620007d7878286016200067e565b6060830152508093505050505b92915050565b600060208252600e60208301527f4172697479206d69736d6174636800000000000000000000000000000000000060408301526060820190505b919050565b600060405190508181018181106001600160401b03821117156200084957fe5b80604052505b919050565b60006001600160401b038211156200086857fe5b6020602083020190505b919050565b5b60805160601c60a05160601c60c05160c01c60e051611d3a620008da600039806107f5528061126252508061029652806106a0528061083952806111db52508061062752806108d1528061151d5250806107d152806119265250611d3a6000f3fe60806040523480156100115760006000fd5b50600436106100e45760003560e01c806378e979251161008d578063cfb3647b11610067578063cfb3647b146101f2578063d4ce8c1014610210578063f60d7af41461022e578063fc0c546a1461024a576100e4565b806378e97925146101865780639cef4240146101a4578063c5c57a22146101c0576100e4565b8063452a9320116100be578063452a93201461012e5780636637b8821461014c578063762c31ba14610168576100e4565b80630b54d683146100ea5780633d2ec400146101065780634162169f14610110576100e4565b60006000fd5b61010460048036038101906100ff9190611b6a565b610268565b005b61010e61032f565b005b6101186103e7565b6040516101259190611bf9565b60405180910390f35b61013661040d565b6040516101439190611ba9565b60405180910390f35b61016660048036038101906101619190611b06565b610433565b005b610170610678565b60405161017d9190611ba9565b60405180910390f35b61018e61069e565b60405161019b9190611ce7565b60405180910390f35b6101be60048036038101906101b99190611b06565b6106c2565b005b6101da60048036038101906101d59190611b06565b610767565b6040516101e993929190611c9f565b60405180910390f35b6101fa6107cf565b6040516102079190611bd1565b60405180910390f35b6102186107f3565b6040516102259190611cd5565b60405180910390f35b61024860048036038101906102439190611b47565b610817565b005b6102526108cf565b60405161025f9190611ba9565b60405180910390f35b60068160ff1611806102d95750610283610a3263ffffffff16565b67ffffffffffffffff166102cd62f142807f000000000000000000000000000000000000000000000000000000000000000067ffffffffffffffff16610a4d90919063ffffffff16565b67ffffffffffffffff16105b151561031a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031190611c60565b60405180910390fd5b61032a8282610aea63ffffffff16565b5b5050565b61038e600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b4163ffffffff16565b6103bf600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610bbd63ffffffff16565b600160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610492600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b4163ffffffff16565b6104a181610c4563ffffffff16565b1515610518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f74206120636f6e747261637400000000000000000000000000000000000081526020015060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156105e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f44616f20616c726561647920736574000000000000000000000000000000000081526020015060200191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506106737f0000000000000000000000000000000000000000000000000000000000000000827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610c5f63ffffffff16565b5b5b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b610721600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b4163ffffffff16565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b60036000506020528060005260406000206000915090508060000160009054906101000a90046fffffffffffffffffffffffffffffffff16908060000160109054906101000a90046fffffffffffffffffffffffffffffffff16908060010160005054905083565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b610825610a3263ffffffff16565b67ffffffffffffffff166108706301e285007f000000000000000000000000000000000000000000000000000000000000000067ffffffffffffffff16610a4d90919063ffffffff16565b67ffffffffffffffff161015156108bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b390611c21565b60405180910390fd5b6108cb81610e6b63ffffffff16565b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006801000000000000000082101515610978576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610980565b919050565b6000826fffffffffffffffffffffffffffffffff168284019150816fffffffffffffffffffffffffffffffff1610151515610a2b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b6000610a45426108f3909063ffffffff16565b905080505b90565b60008267ffffffffffffffff1682840191508167ffffffffffffffff1610151515610ae3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b610b1982610b0e610b038460ff16610eae63ffffffff16565b610f1063ffffffff16565b610f4663ffffffff16565b610b3c826fffffffffffffffffffffffffffffffff16823361140363ffffffff16565b5b5050565b801515610bb9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b50565b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167fb6182387b7ea948602a7e04e662a27ce251dc3dd014eacaed10dce36b41bf1a560405160405180910390a25b50565b60006000823b905060008111915050610c5a56505b919050565b600060008473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083101515610d4457805182525b602082019150602081019050602083039250610d1e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610da6576040519150601f19603f3d011682016040523d82523d6000602084013e610dab565b606091505b5091509150818015610dec5750600081511480610deb5750808060200190516020811015610dd95760006000fd5b81019080805190602001909291905050505b5b1515610e63576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f534100000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b50505b505050565b610e8881610e7d610a3263ffffffff16565b610f4663ffffffff16565b610eaa33826fffffffffffffffffffffffffffffffff1661165063ffffffff16565b5b50565b6000600c610ef062015180610ed861016d8667ffffffffffffffff166116b390919063ffffffff16565b67ffffffffffffffff166116b390919063ffffffff16565b67ffffffffffffffff16811515610f0357fe5b049050610f0b565b919050565b6000610f3c82610f24610a3263ffffffff16565b67ffffffffffffffff16610a4d90919063ffffffff16565b905080505b919050565b6000826fffffffffffffffffffffffffffffffff16111515610fd3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260048152602001807f4e6f6f700000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b6000600360005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506040518060600160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16815260200160018201600050548152602001505090506110f48382602001516fffffffffffffffffffffffffffffffff1661098590919063ffffffff16565b81602001906fffffffffffffffffffffffffffffffff1690816fffffffffffffffffffffffffffffffff168152602001505080600001516fffffffffffffffffffffffffffffffff1681602001516fffffffffffffffffffffffffffffffff16111515156111cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f546f6f206d616e7920746f6b656e73000000000000000000000000000000000081526020015060200191505060405180910390fd5b61125261123f61121e6112137f00000000000000000000000000000000000000000000000000000000000000008667ffffffffffffffff1661178390919063ffffffff16565b61182063ffffffff16565b856fffffffffffffffffffffffffffffffff1661184f90919063ffffffff16565b826040015161187590919063ffffffff16565b81604001909081815260200150507f00000000000000000000000000000000000000000000000000000000000000006112ae82602001516fffffffffffffffffffffffffffffffff1683604001516118fe90919063ffffffff16565b10151515611327576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4176657261676520756e6c6f636b2074696d6520746f6f2073686f727400000081526020015060200191505060405180910390fd5b80600360005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008201518160000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060208201518160000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550604082015181600101600050909055905050505b5050565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515156114cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f44616f206e6f742073657400000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b6114dd308461192463ffffffff16565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166327fb04747f00000000000000000000000000000000000000000000000000000000000000008585856040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018360ff1681526020018273ffffffffffffffffffffffffffffffffffffffff168152602001945050505050602060405180830381600087803b1580156115ba5760006000fd5b505af11580156115cf573d600060003e3d6000fd5b505050506040513d60208110156115e65760006000fd5b8101908080519060200190929190505050508160ff168173ffffffffffffffffffffffffffffffffffffffff167f603b80bf3fe3620c8b3029a98c48ed6d0a750f155cd9ad74e5a33637b6e27612856040518082815260200191505060405180910390a35b505050565b611660828261192463ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff167faf2b23cbaeeb4ac51eb45799ad2661590f109d149e349e2c1b8a89b769c46846826040518082815260200191505060405180910390a25b5050565b600060008267ffffffffffffffff16148061170557508267ffffffffffffffff168267ffffffffffffffff1683850292508267ffffffffffffffff168115156116f857fe5b0467ffffffffffffffff16145b151561177c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6d756c2d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b60008267ffffffffffffffff1682840391508167ffffffffffffffff1611151515611819576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f7375622d756e646572666c6f770000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b60006118436301e133808367ffffffffffffffff166118fe90919063ffffffff16565b905061184a565b919050565b600061186a8383670de0b6b3a76400006119d463ffffffff16565b905080505b92915050565b600082828401915081101515156118f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b600061191983670de0b6b3a7640000846119d463ffffffff16565b905080505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd7a31583836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156119b65760006000fd5b505af11580156119cb573d600060003e3d6000fd5b505050505b5050565b6000600060006000198587098587029250828110838203039150506000811415611a1757600084111515611a085760006000fd5b83820492508292505050611ace565b8084111515611a265760006000fd5b6000848688099050828111820391508083039250600085866000031690508086049550808404935060018182600003040190508083028417935083506000600287600302189050808702600203810290508050808702600203810290508050808702600203810290508050808702600203810290508050808702600203810290508050808702600203810290508050808502955085508595505050505050611ace5650505050505b939250505056611d03565b6000813590506fffffffffffffffffffffffffffffffff811681141515611b005760006000fd5b5b919050565b600060208284031215611b17578081fd5b813573ffffffffffffffffffffffffffffffffffffffff811681141515611b3c578182fd5b809150505b92915050565b600060208284031215611b58578081fd5b611b6182611ad9565b90505b92915050565b6000600060408385031215611b7d578081fd5b611b8683611ad9565b9150602083013560ff811681141515611b9d578182fd5b809150505b9250929050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208252601360208301527f4f6e6c79206166746572206f6e6520796561720000000000000000000000000060408301526060820190505b919050565b600060208252601060208301527f546f74616c20312079656172206d696e0000000000000000000000000000000060408301526060820190505b919050565b60006060820190506fffffffffffffffffffffffffffffffff80861683528085166020840152508260408301525b949350505050565b60006020820190508282525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565bfea26469706673582212204273c4e1edac294b560b08d8e981eacc6cf55bb1c75be77b2f707c0b2257f02864736f6c63430007060033";

export class CreatorAllocation__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    params: {
      Governor: string;
      Tcp: string;
      AllocationReceivers: string[];
      AllocationAmounts: BigNumberish[];
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CreatorAllocation> {
    return super.deploy(params, overrides || {}) as Promise<CreatorAllocation>;
  }
  getDeployTransaction(
    params: {
      Governor: string;
      Tcp: string;
      AllocationReceivers: string[];
      AllocationAmounts: BigNumberish[];
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(params, overrides || {});
  }
  attach(address: string): CreatorAllocation {
    return super.attach(address) as CreatorAllocation;
  }
  connect(signer: Signer): CreatorAllocation__factory {
    return super.connect(signer) as CreatorAllocation__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreatorAllocationInterface {
    return new utils.Interface(_abi) as CreatorAllocationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreatorAllocation {
    return new Contract(address, _abi, signerOrProvider) as CreatorAllocation;
  }
}
