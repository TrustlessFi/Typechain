/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  HuePositionNFT,
  HuePositionNFTInterface,
} from "../../../../contracts/core/tokens/HuePositionNFT";

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
        internalType: "struct HuePositionNFT.ConstructorParams",
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
    inputs: [
      {
        internalType: "uint64",
        name: "tokenID",
        type: "uint64",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenID",
        type: "uint256",
      },
    ],
    name: "isApprovedOrOwner",
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
        internalType: "address",
        name: "dest",
        type: "address",
      },
    ],
    name: "mintTo",
    outputs: [
      {
        internalType: "uint64",
        name: "id",
        type: "uint64",
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
    name: "nextPositionID",
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
        name: "account",
        type: "address",
      },
    ],
    name: "positionIDs",
    outputs: [
      {
        internalType: "uint64[]",
        name: "IDs",
        type: "uint64[]",
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
  "0x60a0604052348015620000125760006000fd5b5060405162003661380380620036618339818101604052810190620000389190620001f1565b5b6040518060400160405280601b81526020017f48554520546f6b656e697a6564204465627420506f736974696f6e00000000008152602001506040518060400160405280600581526020017f48756544500000000000000000000000000000000000000000000000000000008152602001505b81815b8160006000509080519060200190620000ca92919062000130565b508060016000509080519060200190620000e692919062000130565b505b50505b5050806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b50620002aa565b8280546200013e9062000265565b90600052602060002090601f016020900481019282620001625760008555620001b3565b82601f106200017d57805160ff1916838001178555620001b3565b82800160010185558215620001b3579182015b82811115620001b2578251826000509090559160200191906001019062000190565b5b509050620001c29190620001c6565b5090565b620001cc565b80821115620001e85760008181506000905550600101620001cc565b509056620002a9565b600060208284031215620002055760006000fd5b604051602081018181106001600160401b03821117156200023657634e487b7160e01b600052604160045260246000fd5b806040525082516001600160a01b03811681141515620002565760006000fd5b80825250809150505b92915050565b60008160011c9050600182168015156200028057607f821691505b60208210811415620002a257634e487b7160e01b600052602260045260246000fd5b505b919050565b5b608051613394620002cd600039600081816107cc015261169f01526133946000f3fe60806040523480156100115760006000fd5b50600436106101875760003560e01c80634f6ccce7116100d957806395d89b411161008d578063b88d4fde11610067578063b88d4fde1461045f578063c87b56dd1461047b578063e985e9c5146104ab57610187565b806395d89b41146104095780639dbead4214610427578063a22cb4651461044357610187565b80636352211e116100be5780636352211e1461037957806370a08231146103a9578063755edd17146103d957610187565b80634f6ccce7146103195780635a11a9ad1461034957610187565b806318160ddd1161013b5780632f745c59116101155780632f745c591461029d57806342842e0e146102cd578063430c2081146102e957610187565b806318160ddd146102455780631c8249051461026357806323b872dd1461028157610187565b8063081812fc1161016c578063081812fc146101db578063095ea7b31461020b5780630c340a241461022757610187565b806301ffc9a71461018d57806306fdde03146101bd57610187565b60006000fd5b6101a760048036038101906101a29190612590565b6104db565b6040516101b491906125b9565b60405180910390f35b6101c5610560565b6040516101d2919061264f565b60405180910390f35b6101f560048036038101906101f0919061266b565b6105fa565b6040516102029190612689565b60405180910390f35b610225600480360381019061022091906126da565b61068f565b005b61022f6107ca565b60405161023c919061270d565b60405180910390f35b61024d6107ee565b60405161025a9190612735565b60405180910390f35b61026b610803565b6040516102789190612747565b60405180910390f35b61029b60048036038101906102969190612763565b61081d565b005b6102b760048036038101906102b291906126da565b610892565b6040516102c49190612735565b60405180910390f35b6102e760048036038101906102e29190612763565b61094d565b005b61030360048036038101906102fe91906126da565b610977565b60405161031091906125b9565b60405180910390f35b610333600480360381019061032e919061266b565b610996565b6040516103409190612735565b60405180910390f35b610363600480360381019061035e91906127aa565b610a1e565b60405161037091906127d3565b60405180910390f35b610393600480360381019061038e919061266b565b610af5565b6040516103a09190612689565b60405180910390f35b6103c360048036038101906103be91906127aa565b610bb3565b6040516103d09190612735565b60405180910390f35b6103f360048036038101906103ee91906127aa565b610c79565b6040516104009190612747565b60405180910390f35b610411610dd0565b60405161041e919061264f565b60405180910390f35b610441600480360381019061043c919061282c565b610e6a565b005b61045d60048036038101906104589190612865565b610ed7565b005b610479600480360381019061047491906128dc565b610efa565b005b6104956004803603810190610490919061266b565b610f71565b6040516104a2919061264f565b60405180910390f35b6104c560048036038101906104c091906129ea565b611037565b6040516104d291906125b9565b60405180910390f35b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105545750610553826110d663ffffffff16565b5b905061055b565b919050565b60606000600050805461057290612a28565b80601f016020809104026020016040519081016040528092919081815260200182805461059e90612a28565b80156105eb5780601f106105c0576101008083540402835291602001916105eb565b820191906000526020600020905b8154815290600101906020018083116105ce57829003601f168201915b505050505090506105f7565b90565b600061060b826111c363ffffffff16565b151561064c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064390612a83565b60405180910390fd5b6004600050600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061068a565b919050565b60006106a082610af563ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610713576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070a90612ae8565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661073861123863ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16148061077357506107728161076761123863ffffffff16565b61103763ffffffff16565b5b15156107b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ab90612b4d565b60405180910390fd5b6107c4838361124563ffffffff16565b505b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006008600050805490509050610800565b90565b600a60009054906101000a900467ffffffffffffffff1681565b61083a61082e61123863ffffffff16565b8261130863ffffffff16565b151561087b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087290612bb2565b60405180910390fd5b61088c83838361140663ffffffff16565b5b505050565b60006108a383610bb363ffffffff16565b821015156108e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108dd90612c17565b60405180910390fd5b600660005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000838152602001908152602001600020600050549050610947565b92915050565b61097183838360405180602001604052806000815260200150610efa63ffffffff16565b5b505050565b6000610989838361130863ffffffff16565b9050610990565b92915050565b60006109a66107ee63ffffffff16565b821015156109e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e090612c7c565b60405180910390fd5b600860005082815481101515610a0257610a01612ce1565b5b906000526020600020900160005b50549050610a19565b919050565b60606000610a3183610bb363ffffffff16565b90508067ffffffffffffffff811115610a4d57610a4c6128ab565b5b604051908082528060200260200182016040528015610a7b5781602001602082028036833780820191505090505b50915081506000600090505b81811015610aed57610a9f848261089263ffffffff16565b8382815181101515610ab457610ab3612ce1565b5b602002602001019067ffffffffffffffff16908167ffffffffffffffff16815260200150505b8080610ae590612d43565b915050610a87565b50505b919050565b600060006002600050600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610ba4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9b90612d82565b60405180910390fd5b80915050610bae56505b919050565b6000600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610c27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1e90612de7565b60405180910390fd5b600360005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610c74565b919050565b6000610c8a3361169b63ffffffff16565b1515610ccb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc290612e4c565b60405180910390fd5b67ffffffffffffffff67ffffffffffffffff16600a60009054906101000a900467ffffffffffffffff1667ffffffffffffffff16101515610d41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3890612e8b565b60405180910390fd5b600a60009054906101000a900467ffffffffffffffff1690508050600a600081819054906101000a900467ffffffffffffffff1680929190610d8290612eca565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050610dc3828267ffffffffffffffff1661176763ffffffff16565b809050610dcb565b919050565b606060016000508054610de290612a28565b80601f0160208091040260200160405190810160405280929190818152602001828054610e0e90612a28565b8015610e5b5780601f10610e3057610100808354040283529160200191610e5b565b820191906000526020600020905b815481529060010190602001808311610e3e57829003601f168201915b50505050509050610e67565b90565b610e793361196263ffffffff16565b1515610eba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb190612e4c565b60405180910390fd5b610ed38167ffffffffffffffff1661197263ffffffff16565b5b50565b610ef5610ee861123863ffffffff16565b8383611ab263ffffffff16565b5b5050565b610f17610f0b61123863ffffffff16565b8361130863ffffffff16565b1515610f58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4f90612bb2565b60405180910390fd5b610f6a84848484611c2863ffffffff16565b5b50505050565b6060610f82826111c363ffffffff16565b1515610fc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fba90612ef7565b60405180910390fd5b6000610fd3611c9363ffffffff16565b90506000815111610ff65760405180602001604052806000815260200150611029565b8061100884611cb2909063ffffffff16565b604051602001611019929190612f5c565b6040516020818303038152906040525b91505061103256505b919050565b6000600560005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690506110d0565b92915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806111a157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806111b757506111b682611e2963ffffffff16565b5b90506111be565b919050565b6000600073ffffffffffffffffffffffffffffffffffffffff166002600050600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050611233565b919050565b6000339050611242565b90565b816004600050600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166112c183610af563ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b5050565b6000611319826111c363ffffffff16565b151561135a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135190612f92565b60405180910390fd5b600061136b83610af563ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806113e057508373ffffffffffffffffffffffffffffffffffffffff166113c8846105fa63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16145b806113f757506113f6818561103763ffffffff16565b5b91505061140056505b92915050565b8273ffffffffffffffffffffffffffffffffffffffff1661142c82610af563ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16141515611484576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147b90612ff7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156114f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114ed9061305c565b60405180910390fd5b611507838383611e9863ffffffff16565b61151860008261124563ffffffff16565b6001600360005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505461156d91906130c1565b9250508190909055506001600360005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250546115cb91906130e0565b925050819090905550816002600050600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611695838383611fcf63ffffffff16565b5b505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b8152600401602060405180830381865afa158015611709573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172d9190613100565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050611762565b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156117d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d090613129565b60405180910390fd5b6117e8816111c363ffffffff16565b15151561182a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161182190613168565b60405180910390fd5b61183c60008383611e9863ffffffff16565b6001600360005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505461189191906130e0565b925050819090905550816002600050600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461195d60008383611fcf63ffffffff16565b5b5050565b60006000905061196d565b919050565b600061198382610af563ffffffff16565b905061199781600084611e9863ffffffff16565b6119a860008361124563ffffffff16565b6001600360005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250546119fd91906130c1565b9250508190909055506002600050600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611aad81600084611fcf63ffffffff16565b505b50565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515611b23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b1a906131a7565b60405180910390fd5b80600560005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611c1a91906125b9565b60405180910390a35b505050565b611c3984848461140663ffffffff16565b611c4b84848484611fd563ffffffff16565b1515611c8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c83906131e6565b60405180910390fd5b5b50505050565b6060604051806020016040528060008152602001509050611caf565b90565b60606000821415611cfd576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152602001509050611e24565b600082905060005b600082141515611d33578080611d1a90612d43565b915050600a82611d2a919061327c565b91508150611d05565b60008167ffffffffffffffff811115611d4f57611d4e6128ab565b5b6040519080825280601f01601f191660200182016040528015611d815781602001600182028036833780820191505090505b5090505b600085141515611e1657600182611d9c91906130c1565b91508150600a85611dad919061329a565b6030611db991906130e0565b60f81b8183815181101515611dd157611dd0612ce1565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611e0d919061327c565b94508450611d85565b809350505050611e24565050505b919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050611e93565b919050565b611ea983838361218363ffffffff16565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611ef257611eed8161218963ffffffff16565b611f39565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515611f3857611f3783826121e563ffffffff16565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611f8257611f7d8161238c63ffffffff16565b611fc9565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515611fc857611fc7828261249563ffffffff16565b5b5b5b505050565b5b505050565b6000611ffe8473ffffffffffffffffffffffffffffffffffffffff1661252e909063ffffffff16565b15612171578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261202d61123863ffffffff16565b8786866040518563ffffffff1660e01b815260040161204f94939291906132b8565b6020604051808303816000875af192505050801561208b57506040513d601f19601f820116820180604052508101906120889190613303565b60015b61211b575b5b3d80600081146120bd576040519150601f19603f3d011682016040523d82523d6000602084013e6120c2565b606091505b5060008151141561210c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120ff906131e6565b60405180910390fd612114565b805181602001fd5b505b61216c565b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061217b56505b61217a565b6001905061217b565b5b949350505050565b5b505050565b60086000508054905060096000506000838152602001908152602001600020600050819090905550600860005081908060018154018082558091505060019003906000526020600020900160005b909190919091509090555b50565b600060016121f884610bb363ffffffff16565b61220291906130c1565b9050600060076000506000848152602001908152602001600020600050549050818114151561230b576000600660005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600084815260200190815260200160002060005054905080600660005060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008481526020019081526020016000206000508190909055508160076000506000838152602001908152602001600020600050819090905550505b6007600050600084815260200190815260200160002060005060009055600660005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008381526020019081526020016000206000506000905550505b5050565b600060016008600050805490506123a391906130c1565b905060006009600050600084815260200190815260200160002060005054905060006008600050838154811015156123de576123dd612ce1565b5b906000526020600020900160005b505490508060086000508381548110151561240a57612409612ce1565b5b906000526020600020900160005b5081909090555081600960005060008381526020019081526020016000206000508190909055506009600050600085815260200190815260200160002060005060009055600860005080548015156124735761247261332c565b5b600190038181906000526020600020900160005b506000905590555050505b50565b60006124a683610bb363ffffffff16565b905081600660005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008381526020019081526020016000206000508190909055508060076000506000848152602001908152602001600020600050819090905550505b5050565b600060008273ffffffffffffffffffffffffffffffffffffffff163b119050612552565b9190505661335d565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114151561258c5760006000fd5b505b565b6000602082840312156125a35760006000fd5b81356125ae8161255b565b809150505b92915050565b600060208201905082151582525b92915050565b60005b838110156125ec5780820151818401525b6020810190506125d0565b838111156125fb576000848401525b505050505b565b6000815180845261261a8160208601602086016125cd565b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019150505b92915050565b6020815260006126626020830184612602565b90505b92915050565b60006020828403121561267e5760006000fd5b813590505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b73ffffffffffffffffffffffffffffffffffffffff8116811415156126d65760006000fd5b505b565b60006000604083850312156126ef5760006000fd5b82356126fa816126b1565b80925050602083013590505b9250929050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60006020820190508282525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565b6000600060006060848603121561277a5760006000fd5b8335612785816126b1565b809350506020840135612797816126b1565b80925050604084013590505b9250925092565b6000602082840312156127bd5760006000fd5b81356127c8816126b1565b809150505b92915050565b60006020808301818452808551808352604086019150838701925060005b8181101561281d5767ffffffffffffffff8451168352848301925084840193505b6001810190506127f1565b50508093505050505b92915050565b60006020828403121561283f5760006000fd5b813567ffffffffffffffff81168114151561285a5760006000fd5b809150505b92915050565b600060006040838503121561287a5760006000fd5b8235612885816126b1565b8092505060208301358015158114151561289f5760006000fd5b809150505b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b6000600060006000608085870312156128f55760006000fd5b8435612900816126b1565b809450506020850135612912816126b1565b8093505060408501359150606085013567ffffffffffffffff808211156129395760006000fd5b818701915087601f83011215156129505760006000fd5b813581811115612963576129626128ab565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe060405181603f83601f86011601168101915080821084831117156129ab576129aa6128ab565b5b816040528281528a60208487010111156129c55760006000fd5b8260208601602083013760006020848301015280955050505050505b92959194509250565b60006000604083850312156129ff5760006000fd5b8235612a0a816126b1565b809250506020830135612a1c816126b1565b809150505b9250929050565b60008160011c905060018216801515612a4257607f821691505b60208210811415612a7c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b505b919050565b60208152602c60208201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602160208201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560408201527f7200000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152603860208201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260006080820190505b919050565b60208152603160208201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60408201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606082015260006080820190505b919050565b60208152602b60208201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560408201527f74206f6620626f756e6473000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602c60208201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60408201527f7574206f6620626f756e64730000000000000000000000000000000000000000606082015260006080820190505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612d7657612d75612d12565b5b6001820190505b919050565b60208152602960208201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602a60208201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560408201527f726f206164647265737300000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b60208152600860208201527f4f766572666c6f77000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b600067ffffffffffffffff80831681811415612ee957612ee8612d12565b5b60018101925050505b919050565b60208152602f60208201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606082015260006080820190505b919050565b60008351612f6e8184602088016125cd565b80830190508351612f838183602088016125cd565b808201925050505b9392505050565b60208152602c60208201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602560208201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201527f6f776e6572000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602460208201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b6000828210156130d4576130d3612d12565b5b82820390505b92915050565b600082198211156130f4576130f3612d12565b5b82820190505b92915050565b6000602082840312156131135760006000fd5b815161311e816126b1565b809150505b92915050565b60208152602060208201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260006060820190505b919050565b60208152601c60208201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260006060820190505b919050565b60208152601960208201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260006060820190505b919050565b60208152603260208201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527f63656976657220696d706c656d656e7465720000000000000000000000000000606082015260006080820190505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565b600082151561328e5761328d61324b565b5b82820490505b92915050565b60008215156132ac576132ab61324b565b5b82820690505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526132f76080830184612602565b90505b95945050505050565b6000602082840312156133165760006000fd5b81516133218161255b565b809150505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b565bfea26469706673582212205edc619f592a952bdae7b51e71ac5eb84e850ccf7a9a2d1399fdab585b0038ba64736f6c634300080c0033";

type HuePositionNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HuePositionNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HuePositionNFT__factory extends ContractFactory {
  constructor(...args: HuePositionNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    params: HuePositionNFT.ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HuePositionNFT> {
    return super.deploy(params, overrides || {}) as Promise<HuePositionNFT>;
  }
  override getDeployTransaction(
    params: HuePositionNFT.ConstructorParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(params, overrides || {});
  }
  override attach(address: string): HuePositionNFT {
    return super.attach(address) as HuePositionNFT;
  }
  override connect(signer: Signer): HuePositionNFT__factory {
    return super.connect(signer) as HuePositionNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HuePositionNFTInterface {
    return new utils.Interface(_abi) as HuePositionNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HuePositionNFT {
    return new Contract(address, _abi, signerOrProvider) as HuePositionNFT;
  }
}
