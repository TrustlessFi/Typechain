/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
var _abi = [
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
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "getUserAllocation",
        outputs: [
            {
                components: [
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
                internalType: "struct MinAverageLockDuration.UserAllocation",
                name: "_userAllocation",
                type: "tuple",
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
var MinAverageLockDuration__factory = /** @class */ (function () {
    function MinAverageLockDuration__factory() {
    }
    MinAverageLockDuration__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    MinAverageLockDuration__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    MinAverageLockDuration__factory.abi = _abi;
    return MinAverageLockDuration__factory;
}());
export { MinAverageLockDuration__factory };
