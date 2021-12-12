/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TcpAllocation,
  TcpAllocationInterface,
  DaoPositionCreatorConstructorParamsStruct,
} from "../TcpAllocation";

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
            internalType: "contract IERC20",
            name: "Tcp",
            type: "address",
          },
          {
            internalType: "address",
            name: "Guardian",
            type: "address",
          },
        ],
        internalType:
          "struct DaoPositionCreator.DaoPositionCreatorConstructorParams",
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
    name: "abdicate",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "allocationCaps",
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
        name: "dest",
        type: "address",
      },
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
    inputs: [],
    name: "incentiveAllocation",
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
        name: "allocatee",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "count",
        type: "uint128",
      },
    ],
    name: "increaseAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "governor",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "governorAllocationCount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "genesisAllocation",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "genesisAllocationCount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "incentiveAllocation",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "incentiveAllocationCount",
            type: "uint128",
          },
          {
            internalType: "address[]",
            name: "allocationReceivers",
            type: "address[]",
          },
          {
            internalType: "uint128[]",
            name: "allocationAmounts",
            type: "uint128[]",
          },
        ],
        internalType: "struct TcpAllocation.InitParams",
        name: "params",
        type: "tuple",
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
        name: "minimumAverageTokensAllocatedxLockYears",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "tokensAllocated",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "cumulativeTokensAllocatedxLockYears",
        type: "uint128",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "restrictedToUnlockDuration",
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
    name: "restrictedUnlockTime",
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
    name: "tcp",
    outputs: [
      {
        internalType: "contract IERC20",
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
];

const _bytecode =
  "0x60e0604052348015620000125760006000fd5b5060405162002d2038038062002d20833981810160405281019062000038919062000237565b5b805b805b806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81526014015050806020015173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508060400151600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50620001106200017c60201b60201c565b67ffffffffffffffff1660c08167ffffffffffffffff1660c01b815260080150505b5033600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50620002d3565b600062000196426200019e60201b62000d9317909060201c565b905080505b90565b6000680100000000000000008210151562000224576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b8190506200022d565b91905056620002d2565b60006060828403121562000249578081fd5b604051606081018181106001600160401b03821117156200026657fe5b806040525082516200027881620002b5565b8082525060208301516200028c81620002b5565b806020830152506040830151620002a381620002b5565b80604083015250809150505b92915050565b6001600160a01b03811681141515620002ce5760006000fd5b5b50565b5b60805160601c60a05160601c60c05160c01c6129f962000327600039806106615280610a2452806116ec52508061073f52806109d25280611ec75280611fe4525080610bd1528061232e52506129f96000f3fe60806040523480156100115760006000fd5b50600436106101205760003560e01c80636637b882116100b3578063cfb3647b11610082578063ee5f1ee411610067578063ee5f1ee4146102d5578063f44c3881146102f1578063f4c4a6131461030f57610120565b8063cfb3647b14610299578063d5f39488146102b757610120565b80636637b8821461021057806378e979251461022c578063a9778eb01461024a578063c5c57a221461026657610120565b806336fc02f4116100ef57806336fc02f41461019a5780634162169f146101b8578063452a9320146101d6578063628e2e85146101f457610120565b806311fd38cc1461012657806323fe981d14610156578063262406de14610172578063314e99a21461019057610120565b60006000fd5b610140600480360381019061013b919061263f565b61033f565b60405161014d91906127fb565b60405180910390f35b610170600480360381019061016b91906126e5565b610364565b005b61017a610690565b60405161018791906127d3565b60405180910390f35b6101986106b6565b005b6101a261073d565b6040516101af919061280f565b60405180910390f35b6101c0610761565b6040516101cd919061285f565b60405180910390f35b6101de610787565b6040516101eb91906127d3565b60405180910390f35b61020e60048036038101906102099190612696565b6107ad565b005b61022a6004803603810190610225919061263f565b6108a7565b005b610234610a22565b6040516102419190612958565b60405180910390f35b610264600480360381019061025f9190612662565b610a46565b005b610280600480360381019061027b919061263f565b610b2c565b6040516102909493929190612905565b60405180910390f35b6102a1610bcf565b6040516102ae9190612837565b60405180910390f35b6102bf610bf3565b6040516102cc91906127d3565b60405180910390f35b6102ef60048036038101906102ea9190612662565b610c19565b005b6102f9610d5e565b6040516103069190612958565b60405180910390f35b6103296004803603810190610324919061263f565b610d78565b6040516103369190612946565b60405180910390f35b600460005060205280600052604060002060009150909054906101000a900460ff1681565b6103c3600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e2563ffffffff16565b600660006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556103fb6301e13380610ea163ffffffff16565b600560006101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550600061043b60036301e1338002610ea163ffffffff16565b90508160e00151518260c001515114151561048b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048290612887565b60405180910390fd5b6000600090505b8260c0015151811015610564576001600460005060008560c00151848151811015156104ba57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506105568360c001518281518110151561052857fe5b60200260200101518460e001518381518110151561054257fe5b602002602001015184610ed763ffffffff16565b5b8080600101915050610492565b508160800151600560086101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816020015160036000506000846000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819090905550816060015160036000506000846040015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555061068b82608001518360a001517f0000000000000000000000000000000000000000000000000000000000000000610ed763ffffffff16565b505b50565b600560089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610715600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e2563ffffffff16565b600060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610890576108226108178260ff166111e763ffffffff16565b610ea163ffffffff16565b67ffffffffffffffff16600560009054906101000a900467ffffffffffffffff1667ffffffffffffffff1610151561088f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610886906128c6565b60405180910390fd5b5b6108a182828561122c63ffffffff16565b5b505050565b610906600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e2563ffffffff16565b6109158161128463ffffffff16565b151561098c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f74206120636f6e747261637400000000000000000000000000000000000081526020015060200191505060405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610a1e7f0000000000000000000000000000000000000000000000000000000000000000827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61129e63ffffffff16565b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b600460005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610b1757610aa96114aa63ffffffff16565b67ffffffffffffffff16600560009054906101000a900467ffffffffffffffff1667ffffffffffffffff16101515610b16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0d906128c6565b60405180910390fd5b5b610b2782826114c563ffffffff16565b5b5050565b60026000506020528060005260406000206000915090508060000160009054906101000a90046fffffffffffffffffffffffffffffffff16908060000160109054906101000a90046fffffffffffffffffffffffffffffffff16908060010160009054906101000a90046fffffffffffffffffffffffffffffffff16908060010160109054906101000a90046fffffffffffffffffffffffffffffffff16905084565b7f000000000000000000000000000000000000000000000000000000000000000081565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610c83816fffffffffffffffffffffffffffffffff16600360005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505461150990919063ffffffff16565b600360005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055506000600460005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610d2e576301e13380610d37565b60036301e13380025b9050610d588383610d4d84610ea163ffffffff16565b610ed763ffffffff16565b505b5050565b600560009054906101000a900467ffffffffffffffff1681565b60036000506020528060005260406000206000915090505481565b60006801000000000000000082101515610e18576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610e20565b919050565b801515610e9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b50565b6000610ecd82610eb56114aa63ffffffff16565b67ffffffffffffffff1661159290919063ffffffff16565b905080505b919050565b6000826fffffffffffffffffffffffffffffffff16111515610f64576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f4e6f6f702e00000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b610fed82600260005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1661162f90919063ffffffff16565b600260005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555061110361107e83836116dc63ffffffff16565b600260005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1661162f90919063ffffffff16565b600260005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff167f39269bcc94baba79914cd1fbb42780568649c4411ad91db4c52e1e029bde31e28360405180826fffffffffffffffffffffffffffffffff16815260200191505060405180910390a25b505050565b6000600c61120c6301e133808467ffffffffffffffff1661176a90919063ffffffff16565b67ffffffffffffffff1681151561121f57fe5b049050611227565b919050565b61125b836112506112458560ff166111e763ffffffff16565b610ea163ffffffff16565b61183a63ffffffff16565b61127e836fffffffffffffffffffffffffffffffff168383611df463ffffffff16565b5b505050565b60006000823b90506000811191505061129956505b919050565b600060008473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310151561138357805182525b60208201915060208101905060208303925061135d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146113e5576040519150601f19603f3d011682016040523d82523d6000602084013e6113ea565b606091505b509150915081801561142b575060008151148061142a57508080602001905160208110156114185760006000fd5b81019080805190602001909291905050505b5b15156114a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f534100000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b50505b505050565b60006114bd42610d93909063ffffffff16565b905080505b90565b6114e2816114d76114aa63ffffffff16565b61183a63ffffffff16565b61150482826fffffffffffffffffffffffffffffffff1661211763ffffffff16565b5b5050565b6000828284039150811115151561158b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f7375622d756e646572666c6f770000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b60008267ffffffffffffffff1682840191508167ffffffffffffffff1610151515611628576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b6000826fffffffffffffffffffffffffffffffff168284019150816fffffffffffffffffffffffffffffffff16101515156116d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b600061175d61175061172f6117247f00000000000000000000000000000000000000000000000000000000000000008667ffffffffffffffff1661217a90919063ffffffff16565b61221763ffffffff16565b856fffffffffffffffffffffffffffffffff1661224690919063ffffffff16565b61226c909063ffffffff16565b9050611764565b92915050565b600060008267ffffffffffffffff1614806117bc57508267ffffffffffffffff168267ffffffffffffffff1683850292508267ffffffffffffffff168115156117af57fe5b0467ffffffffffffffff16145b1515611833576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6d756c2d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b6000826fffffffffffffffffffffffffffffffff161115156118c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260048152602001807f4e6f6f700000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b6000600260005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506040518060800160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016001820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16815260200150509050611a6f8382604001516fffffffffffffffffffffffffffffffff1661162f90919063ffffffff16565b81604001906fffffffffffffffffffffffffffffffff1690816fffffffffffffffffffffffffffffffff168152602001505080600001516fffffffffffffffffffffffffffffffff1681604001516fffffffffffffffffffffffffffffffff1611151515611b48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f546f6f206d616e7920746f6b656e73000000000000000000000000000000000081526020015060200191505060405180910390fd5b611b80611b5b84846116dc63ffffffff16565b82606001516fffffffffffffffffffffffffffffffff1661162f90919063ffffffff16565b81606001906fffffffffffffffffffffffffffffffff1690816fffffffffffffffffffffffffffffffff1681526020015050611bf181600001516fffffffffffffffffffffffffffffffff1682602001516fffffffffffffffffffffffffffffffff1661230690919063ffffffff16565b611c3082604001516fffffffffffffffffffffffffffffffff1683606001516fffffffffffffffffffffffffffffffff1661230690919063ffffffff16565b10151515611ca9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4176657261676520756e6c6f636b2074696d6520746f6f2073686f727400000081526020015060200191505060405180910390fd5b80600260005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008201518160000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060208201518160000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060408201518160010160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060608201518160010160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550905050505b5050565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151515611ebe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f44616f206e6f742073657400000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b611fa430611f997f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611f4d5760006000fd5b505afa158015611f62573d600060003e3d6000fd5b505050506040513d6020811015611f795760006000fd5b81019080805190602001909291905050508661150990919063ffffffff16565b61232c63ffffffff16565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166327fb04747f00000000000000000000000000000000000000000000000000000000000000008585856040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018360ff1681526020018273ffffffffffffffffffffffffffffffffffffffff168152602001945050505050602060405180830381600087803b1580156120815760006000fd5b505af1158015612096573d600060003e3d6000fd5b505050506040513d60208110156120ad5760006000fd5b8101908080519060200190929190505050508160ff168173ffffffffffffffffffffffffffffffffffffffff167f603b80bf3fe3620c8b3029a98c48ed6d0a750f155cd9ad74e5a33637b6e27612856040518082815260200191505060405180910390a35b505050565b612127828261232c63ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff167faf2b23cbaeeb4ac51eb45799ad2661590f109d149e349e2c1b8a89b769c46846826040518082815260200191505060405180910390a25b5050565b60008267ffffffffffffffff1682840391508167ffffffffffffffff1611151515612210576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f7375622d756e646572666c6f770000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b600061223a6301e133808367ffffffffffffffff1661230690919063ffffffff16565b9050612241565b919050565b60006122618383670de0b6b3a76400006123dc63ffffffff16565b905080505b92915050565b6000700100000000000000000000000000000000821015156122f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203132382062697473000000000000000000000000000081526020015060200191505060405180910390fd5b819050612301565b919050565b600061232183670de0b6b3a7640000846123dc63ffffffff16565b905080505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd7a31583836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156123be5760006000fd5b505af11580156123d3573d600060003e3d6000fd5b505050505b5050565b600060006000600019858709858702925082811083820303915050600081141561241f576000841115156124105760006000fd5b838204925082925050506124d6565b808411151561242e5760006000fd5b60008486880990508281118203915080830392506000858660000316905080860495508084049350600181826000030401905080830284179350835060006002876003021890508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508085029550855085955050505050506124d65650505050505b9392505050566129c2565b60008135905073ffffffffffffffffffffffffffffffffffffffff81168114151561250c5760006000fd5b5b919050565b600082601f8301121515612524578081fd5b813560206125396125348361299f565b612974565b80838252828201915082860187848587028901011115612557578586fd5b855b858110156125825761256a826124e1565b8452848401935084820191505b600181019050612559565b5050809450505050505b92915050565b600082601f83011215156125a4578081fd5b813560206125b96125b48361299f565b612974565b808382528282019150828601878485870289010111156125d7578586fd5b855b85811015612602576125ea82612612565b8452848401935084820191505b6001810190506125d9565b5050809450505050505b92915050565b6000813590506fffffffffffffffffffffffffffffffff8116811415156126395760006000fd5b5b919050565b600060208284031215612650578081fd5b612659826124e1565b90505b92915050565b6000600060408385031215612675578081fd5b61267e836124e1565b915061268c60208401612612565b90505b9250929050565b600060006000606084860312156126ab578081fd5b6126b4846124e1565b92506126c260208501612612565b9150604084013560ff8116811415156126d9578182fd5b809150505b9250925092565b6000602082840312156126f6578081fd5b813567ffffffffffffffff8082111561270d578283fd5b8184019150610100808387031215612723578384fd5b61272c81612974565b9050612737836124e1565b81526020830135602082015261274f604084016124e1565b60408201526060830135606082015261276a608084016124e1565b608082015261277b60a08401612612565b60a082015260c083013582811115612791578485fd5b61279d87828601612512565b60c08301525060e0830135828111156127b4578485fd5b6127c087828601612592565b60e0830152508093505050505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208252600e60208301527f4172697479206d69736d6174636800000000000000000000000000000000000060408301526060820190505b919050565b600060208252600960208301527f546f6f206561726c79000000000000000000000000000000000000000000000060408301526060820190505b919050565b60006080820190506fffffffffffffffffffffffffffffffff8087168352808616602084015280851660408401528084166060840152505b95945050505050565b60006020820190508282525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565b6000604051905081810181811067ffffffffffffffff8211171561299457fe5b80604052505b919050565b600067ffffffffffffffff8211156129b357fe5b6020602083020190505b919050565bfea26469706673582212205241f3e8cbb7b3c9ae055545e7f5a8edc455ca5be5110442e70d3e2cfa57787464736f6c63430007060033";

type TcpAllocationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TcpAllocationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TcpAllocation__factory extends ContractFactory {
  constructor(...args: TcpAllocationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    params: DaoPositionCreatorConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TcpAllocation> {
    return super.deploy(params, overrides || {}) as Promise<TcpAllocation>;
  }
  getDeployTransaction(
    params: DaoPositionCreatorConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(params, overrides || {});
  }
  attach(address: string): TcpAllocation {
    return super.attach(address) as TcpAllocation;
  }
  connect(signer: Signer): TcpAllocation__factory {
    return super.connect(signer) as TcpAllocation__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TcpAllocationInterface {
    return new utils.Interface(_abi) as TcpAllocationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TcpAllocation {
    return new Contract(address, _abi, signerOrProvider) as TcpAllocation;
  }
}
