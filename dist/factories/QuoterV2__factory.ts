/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { QuoterV2, QuoterV2Interface } from "../QuoterV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_WETH9",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH9",
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
    name: "factory",
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
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "quoteExactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint160[]",
        name: "sqrtPriceX96AfterList",
        type: "uint160[]",
      },
      {
        internalType: "uint32[]",
        name: "initializedTicksCrossedList",
        type: "uint32[]",
      },
      {
        internalType: "uint256",
        name: "gasEstimate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct IQuoterV2.QuoteExactInputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "quoteExactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceX96After",
        type: "uint160",
      },
      {
        internalType: "uint32",
        name: "initializedTicksCrossed",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "gasEstimate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "quoteExactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint160[]",
        name: "sqrtPriceX96AfterList",
        type: "uint160[]",
      },
      {
        internalType: "uint32[]",
        name: "initializedTicksCrossedList",
        type: "uint32[]",
      },
      {
        internalType: "uint256",
        name: "gasEstimate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct IQuoterV2.QuoteExactOutputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "quoteExactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceX96After",
        type: "uint160",
      },
      {
        internalType: "uint32",
        name: "initializedTicksCrossed",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "gasEstimate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052348015620000125760006000fd5b506040516200272d3803806200272d8339818101604052810190620000389190620000e6565b5b81815b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b50505b505062000120566200011f565b6000815190506001600160a01b03811681141515620000e05760006000fd5b5b919050565b6000600060408385031215620000fa578182fd5b6200010583620000c1565b91506200011560208401620000c1565b90505b9250929050565b5b60805160601c60a05160601c6125d962000154600039806104155250806106a25280610b6d5280610dfc52506125d96000f3fe60806040523480156100115760006000fd5b50600436106100825760003560e01c8063c45a01551161005c578063c45a01551461010c578063c6a5026a1461012a578063cdca17531461015d578063fa461e331461019057610082565b80632f80bb1d146100885780634aa4a4fc146100bb578063bd21704a146100d957610082565b60006000fd5b6100a2600480360381019061009d9190611fd9565b6101ac565b6040516100b294939291906123d7565b60405180910390f35b6100c3610413565b6040516100d09190612300565b60405180910390f35b6100f360048036038101906100ee919061213b565b610437565b6040516101039493929190612491565b60405180910390f35b6101146106a0565b6040516101219190612300565b60405180910390f35b610144600480360381019061013f9190612117565b6106c4565b6040516101549493929190612491565b60405180910390f35b61017760048036038101906101729190611fd9565b6108c9565b60405161018794939291906123d7565b60405180910390f35b6101aa60048036038101906101a59190612046565b610b30565b005b60006060606060006101c586610d2c909063ffffffff16565b67ffffffffffffffff811180156101dc5760006000fd5b5060405190808252806020026020018201604052801561020b5781602001602082028036833780820191505090505b509250825061022186610d2c909063ffffffff16565b67ffffffffffffffff811180156102385760006000fd5b506040519080825280602002602001820160405280156102675781602001602082028036833780820191505090505b50915081506000600090505b600115610408576000600060006102918a610d4e909063ffffffff16565b925092509250600060006000600061031f6040518060a001604052808873ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1681526020018f81526020018762ffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020015061043763ffffffff16565b9350935093509350828b8981518110151561033657fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681526020015050818a8981518110151561038257fe5b602002602001019063ffffffff16908163ffffffff1681526020015050839c508c508089019850885087806001019850506103c48e610da7909063ffffffff16565b156103e3576103da8e610dc7909063ffffffff16565b9d508d506103fc565b8c8b8b8b9b509b509b509b50505050505050505061040a565b50505050505050610273565b505b92959194509250565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006000600060006000856020015173ffffffffffffffffffffffffffffffffffffffff16866000015173ffffffffffffffffffffffffffffffffffffffff161090506000610499876000015188602001518960600151610df563ffffffff16565b90506000876080015173ffffffffffffffffffffffffffffffffffffffff1614156104cf57866040015160006000508190909055505b60005a90508173ffffffffffffffffffffffffffffffffffffffff1663128acb0830856105078c60400151610e45909063ffffffff16565b60000360008d6080015173ffffffffffffffffffffffffffffffffffffffff1614610536578c60800151610563565b8761055857600173fffd8963efd1fc6a506488495d951d5263988d2603610562565b60016401000276a3015b5b8d602001518e606001518f600001516040516020016105849392919061228f565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016105b3959493929190612328565b604060405180830381600087803b1580156105ce5760006000fd5b505af19250505080156105ff57506040513d601f19601f820116820180604052508101906105fc9190612020565b60015b610692575b3d8060008114610630576040519150601f19603f3d011682016040523d82523d6000602084013e610635565b606091505b505a8203945084506000896080015173ffffffffffffffffffffffffffffffffffffffff16141561066a576000600050600090555b61067b818487610e8163ffffffff16565b97509750975097505050505061069956505b610695565b50505b5050505b9193509193565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006000600060006000856020015173ffffffffffffffffffffffffffffffffffffffff16866000015173ffffffffffffffffffffffffffffffffffffffff161090506000610726876000015188602001518960600151610df563ffffffff16565b905060005a90508173ffffffffffffffffffffffffffffffffffffffff1663128acb0830856107608c60400151610e45909063ffffffff16565b60008d6080015173ffffffffffffffffffffffffffffffffffffffff161461078c578c608001516107b9565b876107ae57600173fffd8963efd1fc6a506488495d951d5263988d26036107b8565b60016401000276a3015b5b8d600001518e606001518f602001516040516020016107da9392919061228f565b6040516020818303038152906040526040518663ffffffff1660e01b8152600401610809959493929190612328565b604060405180830381600087803b1580156108245760006000fd5b505af192505050801561085557506040513d601f19601f820116820180604052508101906108529190612020565b60015b6108bb575b3d8060008114610886576040519150601f19603f3d011682016040523d82523d6000602084013e61088b565b606091505b505a8203945084506108a4818487610e8163ffffffff16565b9750975097509750505050506108c256505b6108be565b50505b5050505b9193509193565b60006060606060006108e286610d2c909063ffffffff16565b67ffffffffffffffff811180156108f95760006000fd5b506040519080825280602002602001820160405280156109285781602001602082028036833780820191505090505b509250825061093e86610d2c909063ffffffff16565b67ffffffffffffffff811180156109555760006000fd5b506040519080825280602002602001820160405280156109845781602001602082028036833780820191505090505b50915081506000600090505b600115610b25576000600060006109ae8a610d4e909063ffffffff16565b9250925092506000600060006000610a3c6040518060a001604052808973ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018f81526020018762ffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001506106c463ffffffff16565b9350935093509350828b89815181101515610a5357fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681526020015050818a89815181101515610a9f57fe5b602002602001019063ffffffff16908163ffffffff1681526020015050839c508c50808901985088508780600101985050610ae18e610da7909063ffffffff16565b15610b0057610af78e610dc7909063ffffffff16565b9d508d50610b19565b8c8b8b8b9b509b509b509b505050505050505050610b27565b50505050505050610990565b505b92959194509250565b6000831380610b3f5750600082135b1515610b4b5760006000fd5b600060006000610b6284610d4e909063ffffffff16565b925092509250610b9a7f0000000000000000000000000000000000000000000000000000000000000000848484610f8f63ffffffff16565b5060006000600060008913610be2578573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1610888a600003610c17565b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161089896000035b9250925092506000610c30878787610df563ffffffff16565b9050600060008273ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b158015610c7d5760006000fd5b505afa158015610c92573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb6919061215f565b5050505050915091508515610ce157604051848152826020820152816040820152606081fd50610d1d565b6000600060005054141515610d055760006000505484141515610d045760006000fd5b5b604051858152826020820152816040820152606081fd505b5050505050505050505b505050565b600060036014016014835103811515610d4157fe5b049050610d49565b919050565b600060006000610d68600085610fc090919063ffffffff16565b92508250610d806014856110e990919063ffffffff16565b90508050610d9b600360140185610fc090919063ffffffff16565b915081505b9193909250565b60006003601401601460036014010101825110159050610dc2565b919050565b6060610de960036014016003601401845103846112039092919063ffffffff16565b9050610df0565b919050565b6000610e377f0000000000000000000000000000000000000000000000000000000000000000610e2c86868661140363ffffffff16565b6114a763ffffffff16565b9050610e3e565b9392505050565b60007f800000000000000000000000000000000000000000000000000000000000000082101515610e765760006000fd5b81905080505b919050565b6000600060006000600060008773ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b158015610ed45760006000fd5b505afa158015610ee9573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0d919061215f565b9091929394955090919293509091925090915090505080925050610f368961159063ffffffff16565b809350819750829850505050610f6d82828a73ffffffffffffffffffffffffffffffffffffffff166116629092919063ffffffff16565b935083508585858995509550955095505050610f865650505b93509350935093565b6000610fb185610fa686868661140363ffffffff16565b611da963ffffffff16565b9050610fb8565b949350505050565b6000816014830110151515611040576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f746f416464726573735f6f766572666c6f77000000000000000000000000000081526020015060200191505060405180910390fd5b601482018351101515156110bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f746f416464726573735f6f75744f66426f756e6473000000000000000000000081526020015060200191505060405180910390fd5b60006c0100000000000000000000000083602086010151049050809150506110e356505b92915050565b6000816003830110151515611169576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f746f55696e7432345f6f766572666c6f7700000000000000000000000000000081526020015060200191505060405180910390fd5b600382018351101515156111e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f746f55696e7432345f6f75744f66426f756e647300000000000000000000000081526020015060200191505060405180910390fd5b6000826003850101519050809150506111fd56505b92915050565b606081601f830110151515611283576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f736c6963655f6f766572666c6f7700000000000000000000000000000000000081526020015060200191505060405180910390fd5b8282840110151515611300576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f736c6963655f6f766572666c6f7700000000000000000000000000000000000081526020015060200191505060405180910390fd5b81830184511015151561137e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f736c6963655f6f75744f66426f756e647300000000000000000000000000000081526020015060200191505060405180910390fd5b606082156000811461139f57604051915060008252602082016040526113f1565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156113de57805183525b6020830192506020810190506113c0565b5050858452601f19601f82011660405250505b50809150506113fc56505b9392505050565b61140b611e3a565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16111561144a57828480945081955050505b60405180606001604052808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018362ffffff1681526020015090506114a0565b9392505050565b60008273ffffffffffffffffffffffffffffffffffffffff16631698ee828360000151846020015185604001516040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018262ffffff168152602001935050505060206040518083038186803b1580156115485760006000fd5b505afa15801561155d573d600060003e3d6000fd5b505050506040513d60208110156115745760006000fd5b8101908080519060200190929190505050905080505b92915050565b6000600060006060845114151561163c576044845110156115e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115dd90612398565b60405180910390fd5b600484019350838060200190518101906116009190612096565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611633919061237c565b60405180910390fd5b838060200190518101906116509190612201565b92509250925061165b565b9193909250565b6000600060006000600060006000600060088b73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156116bb5760006000fd5b505afa1580156116d0573d600060003e3d6000fd5b505050506040513d60208110156116e75760006000fd5b810190808051906020019092919050505060020b8b60020b81151561170857fe5b0560020b901d905060006101008c73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561175c5760006000fd5b505afa158015611771573d600060003e3d6000fd5b505050506040513d60208110156117885760006000fd5b810190808051906020019092919050505060020b8c60020b8115156117a957fe5b0560020b8115156117b657fe5b079050600060088d73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156118045760006000fd5b505afa158015611819573d600060003e3d6000fd5b505050506040513d60208110156118305760006000fd5b810190808051906020019092919050505060020b8c60020b81151561185157fe5b0560020b901d905060006101008e73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156118a55760006000fd5b505afa1580156118ba573d600060003e3d6000fd5b505050506040513d60208110156118d15760006000fd5b810190808051906020019092919050505060020b8d60020b8115156118f257fe5b0560020b8115156118ff57fe5b07905060008160ff166001901b8f73ffffffffffffffffffffffffffffffffffffffff16635339c296856040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b1580156119615760006000fd5b505afa158015611976573d600060003e3d6000fd5b505050506040513d602081101561198d5760006000fd5b810190808051906020019092919050505016118015611a43575060008e73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156119f05760006000fd5b505afa158015611a05573d600060003e3d6000fd5b505050506040513d6020811015611a1c5760006000fd5b810190808051906020019092919050505060020b8d60020b811515611a3d57fe5b0760020b145b8015611a5457508b60020b8d60020b135b9450845060008360ff166001901b8f73ffffffffffffffffffffffffffffffffffffffff16635339c296876040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b158015611ab75760006000fd5b505afa158015611acc573d600060003e3d6000fd5b505050506040513d6020811015611ae35760006000fd5b810190808051906020019092919050505016118015611b99575060008e73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b158015611b465760006000fd5b505afa158015611b5b573d600060003e3d6000fd5b505050506040513d6020811015611b725760006000fd5b810190808051906020019092919050505060020b8e60020b811515611b9357fe5b0760020b145b8015611baa57508b60020b8d60020b125b955085508160010b8460010b1280611bd957508160010b8460010b148015611bd857508060ff168360ff1611155b5b15611bf7578399508950829750875081985088508096508650611c0c565b81995089508097508750839850885082965086505b5050505060008460ff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff901b90505b8560010b8760010b131515611d6e578560010b8760010b1415611c8a578360ff0360ff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff901c8116905080505b6000818c73ffffffffffffffffffffffffffffffffffffffff16635339c2968a6040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b158015611ce25760006000fd5b505afa158015611cf7573d600060003e3d6000fd5b505050506040513d6020811015611d0e5760006000fd5b8101908080519060200190929190505050169050611d3181611e0163ffffffff16565b61ffff1689019850885087806001019850507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9150815050611c3c565b8115611d7d5760018803975087505b8215611d8c5760018803975087505b87975050505050505050611da256505050505050505b9392505050565b6000611dbb83836114a763ffffffff16565b905080508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611dfa5760006000fd5b5b92915050565b60006000600090505b600083141515611e2b57808060010191505060018303831692508250611e0a565b80915050611e3556505b919050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600062ffffff1681526020015090566125a2565b600082601f8301121515611ea5578081fd5b8135611eb8611eb3826124ff565b6124d4565b818152846020838601011115611ecc578283fd5b81602085016020830137826020838301015280925050505b92915050565b6000815190508060020b81141515611f025760006000fd5b5b919050565b600060a08284031215611f19578081fd5b60405160a0810181811067ffffffffffffffff82111715611f3657fe5b80604052508091508235611f4981612579565b808252506020830135611f5b81612579565b8060208301525060408301356040820152606083013562ffffff811681141515611f855760006000fd5b80606083015250611f9860808401611fa5565b6080820152505b92915050565b600081359050611fb481612579565b5b919050565b60008151905061ffff811681141515611fd35760006000fd5b5b919050565b6000600060408385031215611fec578182fd5b823567ffffffffffffffff811115612002578283fd5b61200e85828601611e93565b925050602083013590505b9250929050565b6000600060408385031215612033578182fd5b82519150602083015190505b9250929050565b6000600060006060848603121561205b578081fd5b8335925060208401359150604084013567ffffffffffffffff81111561207f578182fd5b61208b86828701611e93565b9150505b9250925092565b6000602082840312156120a7578081fd5b815167ffffffffffffffff8111156120bd578182fd5b808301905083601f82011215156120d2578182fd5b80516120e56120e0826124ff565b6124d4565b8181528560208385010111156120f9578384fd5b61210a826020830160208601612544565b8093505050505b92915050565b600060a08284031215612128578081fd5b6121328383611f08565b90505b92915050565b600060a0828403121561214c578081fd5b6121568383611f08565b90505b92915050565b600060006000600060006000600060e0888a03121561217c578283fd5b875161218781612579565b8097505061219760208901611eea565b95506121a560408901611fba565b94506121b360608901611fba565b93506121c160808901611fba565b925060a088015160ff8116811415156121d8578283fd5b8092505060c0880151801515811415156121f0578182fd5b809150505b92959891949750929550565b60006000600060608486031215612216578081fd5b83519250602084015161222881612579565b8092505061223860408501611eea565b90505b9250925092565b6000815180845261225a816020860160208601612544565b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019150505b92915050565b60007fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808660601b1683527fffffff00000000000000000000000000000000000000000000000000000000008560e81b166014840152808460601b16601784015250602b820190505b949350505050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600073ffffffffffffffffffffffffffffffffffffffff8088168352861515602084015285604084015280851660608401525060a0608083015261236f60a0830184612242565b90505b9695505050505050565b60006020825261238f6020830184612242565b90505b92915050565b600060208252601060208301527f556e6578706563746564206572726f720000000000000000000000000000000060408301526060820190505b919050565b600060808201868352602060808185015281875180845260a0860191508289019350845b818110156124335773ffffffffffffffffffffffffffffffffffffffff8551168352838301925083850194505b6001810190506123fb565b50508481036040860152809250865180825282820193508288019150845b818110156124795763ffffffff8351168552838501945083830192505b600181019050612451565b50505050809150508260608301525b95945050505050565b600060808201905085825273ffffffffffffffffffffffffffffffffffffffff8516602083015263ffffffff841660408301528260608301525b95945050505050565b6000604051905081810181811067ffffffffffffffff821117156124f457fe5b80604052505b919050565b600067ffffffffffffffff82111561251357fe5b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160190505b919050565b60005b838110156125635780820151818401525b602081019050612547565b83811115612572576000848401525b505b505050565b73ffffffffffffffffffffffffffffffffffffffff81168114151561259e5760006000fd5b5b50565bfea26469706673582212209e2e61630df655ebb7d78d13496a06b0bd9a6b60523770cf985ee04f5e57740a64736f6c63430007060033";

type QuoterV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: QuoterV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class QuoterV2__factory extends ContractFactory {
  constructor(...args: QuoterV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _factory: string,
    _WETH9: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<QuoterV2> {
    return super.deploy(_factory, _WETH9, overrides || {}) as Promise<QuoterV2>;
  }
  getDeployTransaction(
    _factory: string,
    _WETH9: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _WETH9, overrides || {});
  }
  attach(address: string): QuoterV2 {
    return super.attach(address) as QuoterV2;
  }
  connect(signer: Signer): QuoterV2__factory {
    return super.connect(signer) as QuoterV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QuoterV2Interface {
    return new utils.Interface(_abi) as QuoterV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): QuoterV2 {
    return new Contract(address, _abi, signerOrProvider) as QuoterV2;
  }
}
