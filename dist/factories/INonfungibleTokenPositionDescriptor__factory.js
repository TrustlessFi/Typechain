/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
var _abi = [
    {
        inputs: [
            {
                internalType: "contract INonfungiblePositionManager",
                name: "positionManager",
                type: "address",
            },
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
];
var INonfungibleTokenPositionDescriptor__factory = /** @class */ (function () {
    function INonfungibleTokenPositionDescriptor__factory() {
    }
    INonfungibleTokenPositionDescriptor__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    INonfungibleTokenPositionDescriptor__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    INonfungibleTokenPositionDescriptor__factory.abi = _abi;
    return INonfungibleTokenPositionDescriptor__factory;
}());
export { INonfungibleTokenPositionDescriptor__factory };