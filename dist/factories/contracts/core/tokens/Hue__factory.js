var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
var _abi = [
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
var _bytecode = "0x60a0604052600160076000509090553480156200001c5760006000fd5b5060405162002144380380620021448339818101604052810190620000429190620001f9565b5b80600001515b6040518060400160405280600381526020017f48756500000000000000000000000000000000000000000000000000000000008152602001506040518060400160405280600381526020017f48756500000000000000000000000000000000000000000000000000000000008152602001505b8160036000509080519060200190620000d792919062000138565b508060046000509080519060200190620000f392919062000138565b505b50508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b505b50620002b2565b82805462000146906200026d565b90600052602060002090601f0160209004810192826200016a5760008555620001bb565b82601f106200018557805160ff1916838001178555620001bb565b82800160010185558215620001bb579182015b82811115620001ba578251826000509090559160200191906001019062000198565b5b509050620001ca9190620001ce565b5090565b620001d4565b80821115620001f05760008181506000905550600101620001d4565b509056620002b1565b6000602082840312156200020d5760006000fd5b604051602081018181106001600160401b03821117156200023e57634e487b7160e01b600052604160045260246000fd5b806040525082516001600160a01b038116811415156200025e5760006000fd5b80825250809150505b92915050565b60008160011c9050600182168015156200028857607f821691505b60208210811415620002aa57634e487b7160e01b600052602260045260246000fd5b505b919050565b5b608051611e61620002e3600039600081816104f00152818161054a015281816107770152610b820152611e616000f3fe60806040523480156100115760006000fd5b50600436106101565760003560e01c8063449a52f8116100ce57806395d89b4111610082578063a9059cbb11610067578063a9059cbb146103a2578063c59fb1ab146103d2578063dd62ed3e146103ee57610156565b806395d89b4114610354578063a457c2d71461037257610156565b806375172a8b116100b357806375172a8b146102fc57806375f12b211461031a57806379cc67901461033857610156565b8063449a52f8146102b057806370a08231146102cc57610156565b806316f9428f1161012557806323b872dd1161010a57806323b872dd14610232578063313ce56714610262578063395093511461028057610156565b806316f9428f146101f857806318160ddd1461021457610156565b806306fdde031461015c578063095ea7b31461017a5780630c340a24146101aa578063113cf1ab146101c857610156565b60006000fd5b61016461041e565b604051610171919061162c565b60405180910390f35b610194600480360381019061018f91906116cf565b6104b8565b6040516101a19190611702565b60405180910390f35b6101b26104ee565b6040516101bf9190611716565b60405180910390f35b6101e260048036038101906101dd919061173e565b610512565b6040516101ef9190611702565b60405180910390f35b610212600480360381019061020d91906116cf565b610537565b005b61021c610636565b604051610229919061178f565b60405180910390f35b61024c600480360381019061024791906117a1565b610648565b6040516102599190611702565b60405180910390f35b61026a610690565b60405161027791906117e8565b60405180910390f35b61029a600480360381019061029591906116cf565b61069e565b6040516102a79190611702565b60405180910390f35b6102ca60048036038101906102c591906116cf565b610764565b005b6102e660048036038101906102e191906117fd565b610862565b6040516102f3919061178f565b60405180910390f35b6103046108b6565b604051610311919061178f565b60405180910390f35b6103226108d1565b60405161032f9190611702565b60405180910390f35b610352600480360381019061034d91906116cf565b6108e4565b005b61035c610999565b604051610369919061162c565b60405180910390f35b61038c600480360381019061038791906116cf565b610a33565b6040516103999190611702565b60405180910390f35b6103bc60048036038101906103b791906116cf565b610b3c565b6040516103c99190611702565b60405180910390f35b6103ec60048036038101906103e79190611826565b610b72565b005b61040860048036038101906104039190611844565b610c2e565b604051610415919061178f565b60405180910390f35b60606003600050805461043090611882565b80601f016020809104026020016040519081016040528092919081815260200182805461045c90611882565b80156104a95780601f1061047e576101008083540402835291602001916104a9565b820191906000526020600020905b81548152906001019060200180831161048c57829003601f168201915b505050505090506104b5565b90565b600060006104ca610cc363ffffffff16565b90506104dd818585610cd063ffffffff16565b60019150506104e856505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600660005060205280600052604060002060009150909054906101000a900460ff1681565b610545610eab63ffffffff16565b6106117f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166385aa61036040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105b4573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d891906118dd565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f0663ffffffff16565b610622308383610f4c63ffffffff16565b5b6106316111f863ffffffff16565b5b5050565b60006002600050549050610645565b90565b6000600061065a610cc363ffffffff16565b905061066d85828561120863ffffffff16565b61067e858585610f4c63ffffffff16565b600191505061068956505b9392505050565b60006012905061069b565b90565b600060006106b0610cc363ffffffff16565b9050610753818585600160005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050546107489190611937565b610cd063ffffffff16565b600191505061075e56505b92915050565b610772610eab63ffffffff16565b61083e7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107e1573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108059190611957565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f0663ffffffff16565b61084e82826112a563ffffffff16565b5b61085d6111f863ffffffff16565b5b5050565b6000600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490506108b1565b919050565b60006108c73061086263ffffffff16565b90506108ce565b90565b600560009054906101000a900460ff1681565b6108f2610eab63ffffffff16565b60006109048333610c2e63ffffffff16565b905081811015151561094b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094290611980565b60405180910390fd5b6109748361095d610cc363ffffffff16565b848461096991906119bf565b610cd063ffffffff16565b610984838361142063ffffffff16565b505b6109946111f863ffffffff16565b5b5050565b6060600460005080546109ab90611882565b80601f01602080910402602001604051908101604052809291908181526020018280546109d790611882565b8015610a245780601f106109f957610100808354040283529160200191610a24565b820191906000526020600020905b815481529060010190602001808311610a0757829003601f168201915b50505050509050610a30565b90565b60006000610a45610cc363ffffffff16565b90506000600160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050838110151515610b16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0d906119de565b60405180910390fd5b610b298286868403610cd063ffffffff16565b600192505050610b365650505b92915050565b60006000610b4e610cc363ffffffff16565b9050610b61818585610f4c63ffffffff16565b6001915050610b6c56505b92915050565b610b80610eab63ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663734875a8336040518263ffffffff1660e01b8152600401610bd99190611a43565b60006040518083038186803b158015610bf25760006000fd5b505afa158015610c07573d600060003e3d6000fd5b50505050610c1b308261142063ffffffff16565b5b610c2a6111f863ffffffff16565b5b50565b6000600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610cbd565b92915050565b6000339050610ccd565b90565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610d42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3990611a6b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610db4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dab90611ad0565b60405180910390fd5b80600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e9d919061178f565b60405180910390a35b505050565b600260076000505414151515610ef6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eed90611b35565b60405180910390fd5b600260076000508190909055505b565b801515610f48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3f90611b74565b60405180910390fd5b5b50565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610fbe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb590611bb3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611030576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102790611c18565b60405180910390fd5b61104183838361161c63ffffffff16565b6000600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490508181101515156110d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c790611c7d565b60405180910390fd5b818103600060005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555081600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250546111729190611937565b9250508190909055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111d8919061178f565b60405180910390a36111f184848461162263ffffffff16565b505b505050565b600160076000508190909055505b565b600061121a8484610c2e63ffffffff16565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114151561129e5781811015151561128a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128190611ce2565b60405180910390fd5b61129d8484848403610cd063ffffffff16565b5b505b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611317576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130e90611d21565b60405180910390fd5b6113296000838361161c63ffffffff16565b8060026000828282505461133d9190611937565b92505081909090555080600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505461139a9190611937565b9250508190909055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611401919061178f565b60405180910390a361141b6000838361162263ffffffff16565b5b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611492576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148990611d60565b60405180910390fd5b6114a48260008361161c63ffffffff16565b6000600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050818110151515611533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152a90611dc5565b60405180910390fd5b818103600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508160026000828282505461159591906119bf565b925050819090905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516115fc919061178f565b60405180910390a36116168360008461162263ffffffff16565b505b5050565b5b505050565b5b50505056611e2a565b600060208083528351808285015260005b8181101561165d57828187010151604082870101525b828101905061163d565b8181111561166f576000604083870101525b5060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565b73ffffffffffffffffffffffffffffffffffffffff8116811415156116cb5760006000fd5b505b565b60006000604083850312156116e45760006000fd5b82356116ef816116a6565b80925050602083013590505b9250929050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b6000602082840312156117515760006000fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811415156117845760006000fd5b809150505b92915050565b60006020820190508282525b92915050565b600060006000606084860312156117b85760006000fd5b83356117c3816116a6565b8093505060208401356117d5816116a6565b80925050604084013590505b9250925092565b600060208201905060ff831682525b92915050565b6000602082840312156118105760006000fd5b813561181b816116a6565b809150505b92915050565b6000602082840312156118395760006000fd5b813590505b92915050565b60006000604083850312156118595760006000fd5b8235611864816116a6565b809250506020830135611876816116a6565b809150505b9250929050565b60008160011c90506001821680151561189c57607f821691505b602082108114156118d6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b505b919050565b6000602082840312156118f05760006000fd5b81516118fb816116a6565b809150505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b6000821982111561194b5761194a611906565b5b82820190505b92915050565b60006020828403121561196a5760006000fd5b8151611975816116a6565b809150505b92915050565b60208152601660208201527f4275726e206578636565647320616c6c6f77616e636500000000000000000000604082015260006060820190505b919050565b6000828210156119d2576119d1611906565b5b82820390505b92915050565b60208152602560208201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760408201527f207a65726f000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60208152602460208201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602260208201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560408201527f7373000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152600d60208201527f4c43205265656e7472616e637900000000000000000000000000000000000000604082015260006060820190505b919050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b60208152602560208201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602360208201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201527f6573730000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602660208201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408201527f616c616e63650000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601d60208201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604082015260006060820190505b919050565b60208152601f60208201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260006060820190505b919050565b60208152602160208201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360408201527f7300000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602260208201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60408201527f6365000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565bfea2646970667358221220c10510b939702714f44e703ab2f9a6769a5205c0673fdaa20d55fd52c84a96b464736f6c634300080c0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var Hue__factory = /** @class */ (function (_super) {
    __extends(Hue__factory, _super);
    function Hue__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    Hue__factory.prototype.deploy = function (params, overrides) {
        return _super.prototype.deploy.call(this, params, overrides || {});
    };
    Hue__factory.prototype.getDeployTransaction = function (params, overrides) {
        return _super.prototype.getDeployTransaction.call(this, params, overrides || {});
    };
    Hue__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Hue__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Hue__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    Hue__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    Hue__factory.bytecode = _bytecode;
    Hue__factory.abi = _abi;
    return Hue__factory;
}(ContractFactory));
export { Hue__factory };
