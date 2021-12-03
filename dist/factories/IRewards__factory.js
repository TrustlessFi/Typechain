/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "penalty",
                type: "uint64",
            },
        ],
        name: "LiquidationPenaltyUpdated",
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
                internalType: "uint16",
                name: "poolID",
                type: "uint16",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "nftID",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "liquidity",
                type: "uint128",
            },
        ],
        name: "LiquidityPositionCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "nftID",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
        ],
        name: "LiquidityPositionDecreased",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "nftID",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "liquidity",
                type: "uint128",
            },
        ],
        name: "LiquidityPositionIncreased",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "nftID",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "liquidator",
                type: "address",
            },
        ],
        name: "LiquidityPositionLiquidated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "nftID",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
        ],
        name: "LiquidityPositionRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "decreasePortion",
                type: "uint64",
            },
        ],
        name: "MaxCollateralLiquidityDecreasePerPeriodUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint128",
                name: "min",
                type: "uint128",
            },
        ],
        name: "MinHueCountPerPositionUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint16",
                name: "poolID",
                type: "uint16",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "rewardsPortion",
                type: "uint64",
            },
        ],
        name: "PoolAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint16",
                name: "poolID",
                type: "uint16",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "incentive",
                type: "uint64",
            },
        ],
        name: "PoolIncentiveUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "periods",
                type: "uint64",
            },
        ],
        name: "RewardsAccrued",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "nftTokenID",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
        ],
        name: "RewardsClaimed",
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
                indexed: true,
                internalType: "bool",
                name: "isKickback",
                type: "bool",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tcpRewards",
                type: "uint256",
            },
        ],
        name: "RewardsDistributed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "duration",
                type: "uint64",
            },
        ],
        name: "TwapDurationUpdated",
        type: "event",
    },
    {
        inputs: [],
        name: "accrueRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IUniswapV3Pool",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "rewardsPortion",
                type: "uint64",
            },
        ],
        name: "addIncentivePool",
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
        inputs: [
            {
                internalType: "uint16",
                name: "poolID",
                type: "uint16",
            },
            {
                internalType: "uint64",
                name: "incentive",
                type: "uint64",
            },
        ],
        name: "updatePoolIncentive",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IRewards__factory = /** @class */ (function () {
    function IRewards__factory() {
    }
    IRewards__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    IRewards__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    IRewards__factory.abi = _abi;
    return IRewards__factory;
}());
export { IRewards__factory };