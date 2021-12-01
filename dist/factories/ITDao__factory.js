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
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
        ],
        name: "IncentiveMinted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint64",
                name: "currentPeriod",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "periods",
                type: "uint64",
            },
        ],
        name: "InflationAccrued",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_contract",
                type: "address",
            },
        ],
        name: "LiquidationIncentiveContractSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint64",
                name: "positionNFTTokenID",
                type: "uint64",
            },
            {
                indexed: true,
                internalType: "uint16",
                name: "lockDurationMonths",
                type: "uint16",
            },
        ],
        name: "LockDurationIncrease",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint64",
                name: "positionNFTTokenID",
                type: "uint64",
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "RewardsClaimed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "TDaoStarted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "TokenAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint16",
                name: "tokenID",
                type: "uint16",
            },
            {
                indexed: true,
                internalType: "address",
                name: "initialOwner",
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
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint16",
                name: "tokenID",
                type: "uint16",
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
                name: "count",
                type: "uint256",
            },
        ],
        name: "TokensUnlocked",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "positionNFTTokenID",
                type: "uint64",
            },
        ],
        name: "getPosition",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "count",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "startTotalRewards",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "startCumulativeVirtualCount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint64",
                        name: "lastPeriodUpdated",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "endPeriod",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "durationMonths",
                        type: "uint64",
                    },
                    {
                        internalType: "uint16",
                        name: "tokenID",
                        type: "uint16",
                    },
                ],
                internalType: "struct ITDao.TokenPosition",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "id",
                type: "uint16",
            },
        ],
        name: "idToToken",
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
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "lockDurationMonths",
                type: "uint8",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "lockTokens",
        outputs: [
            {
                internalType: "uint64",
                name: "positionNFTTokenID",
                type: "uint64",
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
        name: "mintVotingRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "period",
                type: "uint64",
            },
        ],
        name: "periodToTime",
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
                internalType: "uint64",
                name: "positionNFTTokenID",
                type: "uint64",
            },
        ],
        name: "positionIsAbleToBeUnlocked",
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
                name: "governorAlpha",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "proposalID",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "voter",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "votePortion",
                type: "uint256",
            },
        ],
        name: "sendUnderlyingVotingRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var ITDao__factory = /** @class */ (function () {
    function ITDao__factory() {
    }
    ITDao__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    ITDao__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    ITDao__factory.abi = _abi;
    return ITDao__factory;
}());
export { ITDao__factory };
