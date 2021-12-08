/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Settlement,
  SettlementInterface,
  ConstructorParamsStruct,
} from "../Settlement";

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
            internalType: "contract IProtocolLock",
            name: "ProtocolLock",
            type: "address",
          },
          {
            internalType: "contract IPriceProvider",
            name: "PriceProvider",
            type: "address",
          },
          {
            internalType: "contract IAccounting",
            name: "Accounting",
            type: "address",
          },
          {
            internalType: "contract ITCP",
            name: "Tcp",
            type: "address",
          },
          {
            internalType: "contract IHue",
            name: "Hue",
            type: "address",
          },
        ],
        internalType: "struct ISettlement.ConstructorParams",
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
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
      },
    ],
    name: "EthPriceProviderUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "NoConfidenceConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionID",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "hueCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralCount",
        type: "uint256",
      },
    ],
    name: "SettlementCollateralForHue",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "settlementDiscoveryStartTime",
        type: "uint256",
      },
    ],
    name: "SettlementInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionID",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralToWithdraw",
        type: "uint256",
      },
    ],
    name: "SettlementWithdrawCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "StakedNoConfidenceTokens",
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
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "UnstakedNoConfidenceTokens",
    type: "event",
  },
  {
    inputs: [],
    name: "SETTLEMENT_PRICE_NO_CONFIDENCE_THRESHOLD",
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
    name: "accounting",
    outputs: [
      {
        internalType: "contract IAccounting",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "confirmNoPriceConfidence",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "confirmPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ethPriceProvider",
    outputs: [
      {
        internalType: "contract IPriceProvider",
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
        internalType: "uint64",
        name: "positionID",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "hueCount",
        type: "uint256",
      },
    ],
    name: "getCollateralForHue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "ethPrice",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "hue",
    outputs: [
      {
        internalType: "contract IHue",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initializeSettlement",
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
    name: "noPriceConfidenceUserVotes",
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
    name: "priceConfidence",
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
    name: "priceDiscoveryStartTime",
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
        internalType: "contract IPriceProvider",
        name: "provider",
        type: "address",
      },
    ],
    name: "setEthPriceProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settlementPrice",
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
    name: "settlementStage",
    outputs: [
      {
        internalType: "enum ISettlement.SettlementStage",
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
        internalType: "uint256",
        name: "countTCPToStake",
        type: "uint256",
      },
    ],
    name: "stakeTokensForNoPriceConfidence",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stop",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "tcp",
    outputs: [
      {
        internalType: "contract ITCP",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "thresholdMet",
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
    name: "unstakeTokensForNoPriceConfidence",
    outputs: [],
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
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionID",
        type: "uint64",
      },
    ],
    name: "withdrawCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610120604052600160026000509090556001600560006101000a81548160ff0219169083151502179055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6007600050909055348015620000615760006000fd5b50604051620038ea380380620038ea8339818101604052810190620000879190620002a6565b5b806000015181602001515b815b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b50508060400151600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806060015173ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b81526014015050806080015173ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508060a0015173ffffffffffffffffffffffffffffffffffffffff166101008173ffffffffffffffffffffffffffffffffffffffff1660601b8152601401505060016001600050600063e4e9bcca60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055505b506200037b566200037a565b600081519050620002a0816200035d565b5b919050565b600060c08284031215620002b8578081fd5b60405160c081018181106001600160401b0382111715620002d557fe5b80604052508251620002e7816200035d565b808252506020830151620002fb816200035d565b80602083015250604083015162000312816200035d565b8060408301525062000327606084016200028f565b60608201526200033a608084016200028f565b60808201526200034d60a084016200028f565b60a0820152809150505b92915050565b6001600160a01b03811681141515620003765760006000fd5b5b50565b5b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c6134c662000424600039806106cd5280610bff5250806107fa52806108985280610d9c5280610e4a52806118ed525080610ae35280610b725280610c8e52806112c952806113585280611687525080612014528061247b52508061044d52806108dc5280610f3452806110a652806115135280611b7c5280611ca65280611e1852506134c66000f3fe60806040523480156100115760006000fd5b506004361061019d5760003560e01c806378e8f96e116100e4578063db7f7f1d1161008d578063e4e9bcca11610067578063e4e9bcca146103e7578063f214a2a214610403578063f348e8b21461040d5761019d565b8063db7f7f1d146103b5578063e2083a89146103bf578063e41f7dc1146103c95761019d565b806398cd845b116100be57806398cd845b1461035d578063997aba1a1461038d578063bde5cdb1146103ab5761019d565b806378e8f96e146103035780639410eb86146103215780639624e83e1461033f5761019d565b806336fc02f4116101465780635130e763116101205780635130e763146102ab57806356850960146102c957806375f12b21146102e55761019d565b806336fc02f4146102535780633ee8b30f1461027157806342c5ddc41461028d5761019d565b806315b7ef9b1161017757806315b7ef9b146101fb578063323741741461021957806335a12e45146102375761019d565b806307da68f5146101a35780630c340a24146101ad578063113cf1ab146101cb5761019d565b60006000fd5b6101ab61042b565b005b6101b561044b565b6040516101c29190612f53565b60405180910390f35b6101e560048036038101906101e09190612afe565b61046f565b6040516101f29190612f17565b60405180910390f35b610203610494565b60405161021091906132c6565b60405180910390f35b6102216106cb565b60405161022e9190612f7b565b60405180910390f35b610251600480360381019061024c9190612cce565b6106ef565b005b61025b610896565b6040516102689190612fcb565b60405180910390f35b61028b60048036038101906102869190612d54565b6108ba565b005b610295610d8c565b6040516102a29190612f17565b60405180910390f35b6102b3610eff565b6040516102c09190612f17565b60405180910390f35b6102e360048036038101906102de9190612d06565b610f12565b005b6102ed6114de565b6040516102fa9190612f17565b60405180910390f35b61030b6114f1565b6040516103189190612ff3565b60405180910390f35b610329611679565b60405161033691906132c6565b60405180910390f35b610347611685565b6040516103549190612f2b565b60405180910390f35b61037760048036038101906103729190612a8d565b6116a9565b60405161038491906132c6565b60405180910390f35b6103956116c4565b6040516103a2919061330d565b60405180910390f35b6103b36116de565b005b6103bd611727565b005b6103c76117fe565b005b6103d1611988565b6040516103de9190612fa3565b60405180910390f35b61040160048036038101906103fc9190612bc0565b6119ae565b005b61040b611b5a565b005b610415611e0a565b60405161042291906132c6565b60405180910390f35b610439611e1363ffffffff16565b610447611e7363ffffffff16565b5b5b565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b600060006000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156105035760006000fd5b505afa158015610518573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053c9190612d85565b50935050925050610551611ebd63ffffffff16565b67ffffffffffffffff16610570610e1083611ed890919063ffffffff16565b1115156105b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a990613011565b60405180910390fd5b6000821315156105f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ee9061318b565b60405180910390fd5b6106c1600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156106635760006000fd5b505afa158015610678573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069c9190612dd7565b60ff16600a0a6106b384611f61909063ffffffff16565b611fec90919063ffffffff16565b9250825050505b90565b7f000000000000000000000000000000000000000000000000000000000000000081565b6106fd61201263ffffffff16565b61070d600361212563ffffffff16565b600081111515610752576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107499061310d565b60405180910390fd5b6107aa81600660005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054611ed890919063ffffffff16565b600660005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055506108277f000000000000000000000000000000000000000000000000000000000000000033308461219063ffffffff16565b6108356123bb63ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff167fedbb4f9340677b55be1420c0b8b3bac9f5b41e08db266f57cfd8befc9fe480d58260405161087b91906132c6565b60405180910390a25b61089261246c63ffffffff16565b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b6108c861201263ffffffff16565b6108d8600661212563ffffffff16565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b815260040160206040518083038186803b1580156109415760006000fd5b505afa158015610956573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097a9190612b72565b73ffffffffffffffffffffffffffffffffffffffff1663eb6843ce846040518263ffffffff1660e01b81526004016109b2919061330d565b6101a060405180830381600087803b1580156109ce5760006000fd5b505af11580156109e3573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a079190612be7565b905081816040015110151515610a52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4990613209565b60405180910390fd5b6000610a6c60046000505484611fec90919063ffffffff16565b905080826020015110151515610ab7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aae90613248565b60405180910390fd5b8082602001818151039150909081815260200150508282604001818151039150909081815260200150507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635a6beaf485846040518363ffffffff1660e01b8152600401610b3c929190613329565b600060405180830381600087803b158015610b575760006000fd5b505af1158015610b6c573d600060003e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632a7ba1f7846040518263ffffffff1660e01b8152600401610bc991906132c6565b600060405180830381600087803b158015610be45760006000fd5b505af1158015610bf9573d600060003e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166379cc679033856040518363ffffffff1660e01b8152600401610c58929190612eaf565b600060405180830381600087803b158015610c735760006000fd5b505af1158015610c88573d600060003e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636250216933836040518363ffffffff1660e01b8152600401610ce7929190612e80565b600060405180830381600087803b158015610d025760006000fd5b505af1158015610d17573d600060003e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff168467ffffffffffffffff167f0d5247bd1efbd67f96fc7a1e9a2a62a42dc9f0279ff6711038be53633079f3f98584604051610d6e9291906132d8565b60405180910390a350505b610d8761246c63ffffffff16565b5b5050565b6000610e4867016345785d8a00007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610e015760006000fd5b505afa158015610e16573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3a9190612cea565b6124fe90919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610ea19190612e58565b60206040518083038186803b158015610eba5760006000fd5b505afa158015610ecf573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef39190612cea565b10159050610efc565b90565b600560009054906101000a900460ff1681565b610f2061201263ffffffff16565b610f30600661212563ffffffff16565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a89f51ae6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f995760006000fd5b505afa158015610fae573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd29190612b99565b90508073ffffffffffffffffffffffffffffffffffffffff1663430c208133846040518363ffffffff1660e01b815260040161100f929190612ede565b60206040518083038186803b1580156110285760006000fd5b505afa15801561103d573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110619190612adb565b15156110a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611099906130ce565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b815260040160206040518083038186803b15801561110b5760006000fd5b505afa158015611120573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111449190612b72565b73ffffffffffffffffffffffffffffffffffffffff1663eb6843ce846040518263ffffffff1660e01b815260040161117c919061330d565b6101a060405180830381600087803b1580156111985760006000fd5b505af11580156111ad573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d19190612be7565b90506000816020015111151561121c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112139061314c565b60405180910390fd5b60006000905060008260400151141561123d578160200151905080506112b2565b600061125b6004600050548460400151611fec90919063ffffffff16565b90508260200151811015156112a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129c906131ca565b60405180910390fd5b8083602001510391508150505b8082602001818151039150909081815260200150507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635a6beaf485846040518363ffffffff1660e01b8152600401611322929190613329565b600060405180830381600087803b15801561133d5760006000fd5b505af1158015611352573d600060003e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663625021698473ffffffffffffffffffffffffffffffffffffffff16636352211e876040518263ffffffff1660e01b81526004016113cb91906132f1565b60206040518083038186803b1580156113e45760006000fd5b505afa1580156113f9573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061141d9190612ab4565b836040518363ffffffff1660e01b815260040161143b929190612e80565b600060405180830381600087803b1580156114565760006000fd5b505af115801561146b573d600060003e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff168467ffffffffffffffff167fea981567b9c640fd744f52ff99859dc343bdb3752f8f6542b014a546ffa0863b836040516114c091906132c6565b60405180910390a35050505b6114da61246c63ffffffff16565b5b50565b600060009054906101000a900460ff1681565b6000600060009054906101000a900460ff16156115115760009050611676565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bf86d6906040518163ffffffff1660e01b815260040160206040518083038186803b1580156115785760006000fd5b505afa15801561158d573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b19190612adb565b15156115c05760019050611676565b6000600560019054906101000a900467ffffffffffffffff1667ffffffffffffffff1614156115f25760029050611676565b600560019054906101000a900467ffffffffffffffff1667ffffffffffffffff16611621611ebd63ffffffff16565b67ffffffffffffffff16101561163a5760039050611676565b600060046000505411156116515760069050611676565b600560009054906101000a900460ff1661166c57600461166f565b60055b9050611676565b90565b67016345785d8a000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60066000506020528060005260406000206000915090505481565b600560019054906101000a900467ffffffffffffffff1681565b6116ec61201263ffffffff16565b6116fc600561212563ffffffff16565b61170a61049463ffffffff16565b60046000508190909055505b61172461246c63ffffffff16565b5b565b61173561201263ffffffff16565b611745600361212563ffffffff16565b4360076000505410151561178e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161178590613287565b60405180910390fd5b6000600560006101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167fcaf37a95bc2985ab407c11d2c65eb92feb22c303997f953e8b2f33a86533ea7a60405160405180910390a25b6117fb61246c63ffffffff16565b5b565b61180c61201263ffffffff16565b6000600660005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054905060008111151561189b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161189290613050565b60405180910390fd5b6000600660005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055506119197f0000000000000000000000000000000000000000000000000000000000000000338361252463ffffffff16565b6119276123bb63ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff167f02cdad8fe595d5f15cdf217aa61a8d7002f148da0abc88d26a93eb3122cf0d598260405161196d91906132c6565b60405180910390a2505b61198561246c63ffffffff16565b5b565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6119bc611e1363ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015611a035760006000fd5b505afa158015611a18573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a3c9190612dd7565b508073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b158015611a845760006000fd5b505afa158015611a99573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611abd9190612d85565b505050505080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560006101000a81548160ff0219169083151502179055507f9f701229040146d627dc720a259fb0d56c65dda95beb31eb1aae4bc8f7ca9a5a81604051611b4d9190612e58565b60405180910390a15b5b50565b611b6861201263ffffffff16565b611b78600261212563ffffffff16565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166385aa61036040518163ffffffff1660e01b815260040160206040518083038186803b158015611be15760006000fd5b505afa158015611bf6573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c1a9190612b4b565b73ffffffffffffffffffffffffffffffffffffffff16631b8757686040518163ffffffff1660e01b815260040160206040518083038186803b158015611c605760006000fd5b505afa158015611c75573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c999190612d2d565b90506000611d5c6202a3007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663585690816040518163ffffffff1660e01b815260040160206040518083038186803b158015611d0b5760006000fd5b505afa158015611d20573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d449190612d2d565b67ffffffffffffffff1661273090919063ffffffff16565b90508067ffffffffffffffff168267ffffffffffffffff1610611d7f5781611d81565b805b600560016101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f34bf3e2c7325e60cfaee127ed77fc0af0b6f642909e032bac8eab42419e22ca7600560019054906101000a900467ffffffffffffffff16604051611dee91906132f1565b60405180910390a150505b611e0761246c63ffffffff16565b5b565b60046000505481565b611e707f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146127cd63ffffffff16565b5b565b6001600060006101000a81548160ff0219169083151502179055507f7acc84e34091ae817647a4c49116f5cc07f319078ba80f8f5fde37ea7e25cbd660405160405180910390a15b565b6000611ed042612849909063ffffffff16565b905080505b90565b60008282840191508110151515611f5a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b600060008212151515611fdf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f76616c7565206e6f7420706f736974697665000000000000000000000000000081526020015060200191505060405180910390fd5b819050611fe7565b919050565b600061200783670de0b6b3a7640000846128db63ffffffff16565b905080505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e97dcb626040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561207b5760006000fd5b505af1158015612090573d600060003e3d6000fd5b50505050600260026000505414151515612115576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4c50205265656e7472616e63790000000000000000000000000000000000000081526020015060200191505060405180910390fd5b600260026000508190909055505b565b80600681111561213157fe5b61213f6114f163ffffffff16565b600681111561214a57fe5b14151561218c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121839061308f565b60405180910390fd5b5b50565b600060008573ffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b868686604051602401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310151561229357805182525b60208201915060208101905060208303925061226d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146122f5576040519150601f19603f3d011682016040523d82523d6000602084013e6122fa565b606091505b509150915081801561233b575060008151148061233a57508080602001905160208110156123285760006000fd5b81019080805190602001909291905050505b5b15156123b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260038152602001807f535446000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b50505b50505050565b6123c9610d8c63ffffffff16565b1561240d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6007600050541415612408574360076000508190909055505b612469565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600760005054141515612468577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60076000508190909055505b5b5b565b600160026000508190909055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156124e25760006000fd5b505af11580156124f7573d600060003e3d6000fd5b505050505b565b60006125198383670de0b6b3a76400006128db63ffffffff16565b905080505b92915050565b600060008473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b8585604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310151561260957805182525b6020820191506020810190506020830392506125e3565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461266b576040519150601f19603f3d011682016040523d82523d6000602084013e612670565b606091505b50915091508180156126b157506000815114806126b0575080806020019051602081101561269e5760006000fd5b81019080805190602001909291905050505b5b1515612728576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f535400000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b50505b505050565b60008267ffffffffffffffff1682840191508167ffffffffffffffff16101515156127c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b801515612845576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b50565b600068010000000000000000821015156128ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b8190506128d6565b919050565b600060006000600019858709858702925082811083820303915050600081141561291e5760008411151561290f5760006000fd5b838204925082925050506129d5565b808411151561292d5760006000fd5b60008486880990508281118203915080830392506000858660000316905080860495508084049350600181826000030401905080830284179350835060006002876003021890508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508085029550855085955050505050506129d55650505050505b93925050505661348f565b6000815190506129ef81613449565b5b919050565b60008151905080151581141515612a0c5760006000fd5b5b919050565b6000815190508060020b81141515612a2a5760006000fd5b5b919050565b60008151905063ffffffff811681141515612a4b5760006000fd5b5b919050565b600081519050612a6081613472565b5b919050565b60008151905069ffffffffffffffffffff811681141515612a875760006000fd5b5b919050565b600060208284031215612a9e578081fd5b8135612aa981613449565b809150505b92915050565b600060208284031215612ac5578081fd5b8151612ad081613449565b809150505b92915050565b600060208284031215612aec578081fd5b612af5826129f5565b90505b92915050565b600060208284031215612b0f578081fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681141515612b40578182fd5b809150505b92915050565b600060208284031215612b5c578081fd5b8151612b6781613449565b809150505b92915050565b600060208284031215612b83578081fd5b8151612b8e81613449565b809150505b92915050565b600060208284031215612baa578081fd5b8151612bb581613449565b809150505b92915050565b600060208284031215612bd1578081fd5b8135612bdc81613449565b809150505b92915050565b60006101a0808385031215612bfa578182fd5b612c038161341e565b90508251815260208301516020820152604083015160408201526060830151606082015260808301516080820152612c3d60a08401612a51565b60a0820152612c4e60c08401612a51565b60c0820152612c5f60e08401612a12565b60e0820152610100612c728185016129f5565b8183015250610120612c85818501612a51565b8183015250610140612c98818501612a30565b8183015250610160612cab8185016129e0565b8183015250610180612cbe818501612a51565b8183015250809150505b92915050565b600060208284031215612cdf578081fd5b813590505b92915050565b600060208284031215612cfb578081fd5b815190505b92915050565b600060208284031215612d17578081fd5b8135612d2281613472565b809150505b92915050565b600060208284031215612d3e578081fd5b8151612d4981613472565b809150505b92915050565b6000600060408385031215612d67578081fd5b8235612d7281613472565b80925050602083013590505b9250929050565b6000600060006000600060a08688031215612d9e578081fd5b612da786612a66565b9450602086015193506040860151925060608601519150612dca60808701612a66565b90505b9295509295909350565b600060208284031215612de8578081fd5b815160ff811681141515612dfa578182fd5b809150505b92915050565b73ffffffffffffffffffffffffffffffffffffffff811682525b5050565b80151582525b5050565b8060020b82525b5050565b63ffffffff811682525b5050565b67ffffffffffffffff811682525b5050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682528260208301525b9392505050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682528260208301525b9392505050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff8416825267ffffffffffffffff831660208301525b9392505050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905060078310151561300757fe5b8282525b92915050565b600060208252601260208301527f457468207072696365206973207374616c65000000000000000000000000000060408301526060820190505b919050565b600060208252601060208301527f4e6f20746f6b656e73207374616b65640000000000000000000000000000000060408301526060820190505b919050565b600060208252600f60208301527f496e636f7272656374207374616765000000000000000000000000000000000060408301526060820190505b919050565b600060208252600e60208301527f4e6f7420417574686f72697a656400000000000000000000000000000000000060408301526060820190505b919050565b600060208252600460208301527f4e6f6f700000000000000000000000000000000000000000000000000000000060408301526060820190505b919050565b600060208252600d60208301527f4e6f20636f6c6c61746572616c0000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601160208301527f45746820707269636520696e76616c696400000000000000000000000000000060408301526060820190505b919050565b600060208252601d60208301527f4e6f20636f6c6c61746572616c20746f2077697468647261772e5b315d00000060408301526060820190505b919050565b600060208252600c60208301527f457863656564732064656274000000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601760208301527f496e73756666696369656e7420636f6c6c61746572616c00000000000000000060408301526060820190505b919050565b600060208252602060208301527f496e73756666696369656e74206e6f20636f6e666964656e636520766f74657360408301526060820190505b919050565b60006020820190508282525b92915050565b60006040820190508382528260208301525b9392505050565b600060208201905067ffffffffffffffff831682525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565b60006101c08201905067ffffffffffffffff8416825282516020830152602083015160408301526040830151606083015260608301516080830152608083015160a083015260a083015161338060c0840182612e46565b5060c083015161339360e0840182612e46565b5060e08301516101006133a881850183612e2d565b808501519150506101206133be81850183612e23565b808501519150506101406133d481850183612e46565b808501519150506101606133ea81850183612e38565b8085015191505061018061340081850183612e05565b808501519150506134156101a0840182612e46565b505b9392505050565b6000604051905081810181811067ffffffffffffffff8211171561343e57fe5b80604052505b919050565b73ffffffffffffffffffffffffffffffffffffffff81168114151561346e5760006000fd5b5b50565b67ffffffffffffffff81168114151561348b5760006000fd5b5b50565bfea2646970667358221220686df0f9fe1976570d9fde865e03fd2cabe3161f753a2daa3644e27bd212229064736f6c63430007060033";

type SettlementConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SettlementConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Settlement__factory extends ContractFactory {
  constructor(...args: SettlementConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Settlement> {
    return super.deploy(params, overrides || {}) as Promise<Settlement>;
  }
  getDeployTransaction(
    params: ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(params, overrides || {});
  }
  attach(address: string): Settlement {
    return super.attach(address) as Settlement;
  }
  connect(signer: Signer): Settlement__factory {
    return super.connect(signer) as Settlement__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SettlementInterface {
    return new utils.Interface(_abi) as SettlementInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Settlement {
    return new Contract(address, _abi, signerOrProvider) as Settlement;
  }
}
