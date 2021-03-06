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
                name: "target",
                type: "address",
            },
            {
                indexed: true,
                internalType: "string",
                name: "signature",
                type: "string",
            },
        ],
        name: "ActionBlacklisted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "startTime",
                type: "uint64",
            },
        ],
        name: "PhaseOneStartTimeSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint8",
                name: "phase",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "startTime",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "delaysRemaining",
                type: "uint8",
            },
        ],
        name: "PhaseStartDelayed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "locktime",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "delaysRemaining",
                type: "uint8",
            },
        ],
        name: "UpdateLockDelayed",
        type: "event",
    },
    {
        inputs: [],
        name: "currentPhase",
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
                name: "target",
                type: "address",
            },
            {
                internalType: "string",
                name: "signature",
                type: "string",
            },
        ],
        name: "requireValidAction",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "phaseOneStartTime",
                type: "uint64",
            },
        ],
        name: "setPhaseOneStartTime",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IEnforcedDecentralization__factory = /** @class */ (function () {
    function IEnforcedDecentralization__factory() {
    }
    IEnforcedDecentralization__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    IEnforcedDecentralization__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    IEnforcedDecentralization__factory.abi = _abi;
    return IEnforcedDecentralization__factory;
}());
export { IEnforcedDecentralization__factory };
