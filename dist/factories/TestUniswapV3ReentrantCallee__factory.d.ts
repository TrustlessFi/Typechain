import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestUniswapV3ReentrantCallee, TestUniswapV3ReentrantCalleeInterface } from "../TestUniswapV3ReentrantCallee";
declare type TestUniswapV3ReentrantCalleeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestUniswapV3ReentrantCallee__factory extends ContractFactory {
    constructor(...args: TestUniswapV3ReentrantCalleeConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestUniswapV3ReentrantCallee>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestUniswapV3ReentrantCallee;
    connect(signer: Signer): TestUniswapV3ReentrantCallee__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50610017565b611485806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c8063c22a2bfe14610041578063fa461e33146100865761003b565b60006000fd5b610084600480360360208110156100585760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610119565b005b6101176004803603606081101561009d5760006000fd5b810190808035906020019092919080359060200190929190803590602001906401000000008111156100cf5760006000fd5b8201836020820111156100e25760006000fd5b803590602001918460018302840111640100000000831117156101055760006000fd5b909192939090919293905050506102d4565b005b8073ffffffffffffffffffffffffffffffffffffffff1663128acb08600060006001600173fffd8963efd1fc6a506488495d951d5263988d2603600067ffffffffffffffff8111801561016c5760006000fd5b506040519080825280601f01601f19166020018201604052801561019f5781602001600182028036833780820191505090505b506040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156102365780820151818401525b60208101905061021a565b50505050905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b1580156102875760006000fd5b505af115801561029c573d600060003e3d6000fd5b505050506040513d60408110156102b35760006000fd5b81019080805190602001909291908051906020019092919050505050505b50565b3373ffffffffffffffffffffffffffffffffffffffff1663128acb086000600060016000600067ffffffffffffffff811180156103115760006000fd5b506040519080825280601f01601f1916602001820160405280156103445781602001600182028036833780820191505090505b506040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff168152602001851515815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156103c55780820151818401525b6020810190506103a9565b50505050905090810190601f1680156103f25780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b1580156104165760006000fd5b505af192505050801561045557506040513d60408110156104375760006000fd5b81019080805190602001909291908051906020019092919050505060015b6105e957610461611366565b8061046c57506105d9565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152602001506040516020018080602001828103825283818151815260200191508051906020019080838360005b838110156104e95780820151818401525b6020810190506104cd565b50505050905090810190601f1680156105165780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040528051906020012060001916816040516020018080602001828103825283818151815260200191508051906020019080838360005b8381101561057a5780820151818401525b60208101905061055e565b50505050905090810190601f1680156105a75780820380516001836020036101000a031916815260200191505b509250505060405160208183030381529060405280519060200120600019161415156105d35760006000fd5b506105e4565b3d600060003e3d6000fd5b6105ec565b50505b3373ffffffffffffffffffffffffffffffffffffffff16633c8a7d8d6000600060006000600067ffffffffffffffff811180156106295760006000fd5b506040519080825280601f01601f19166020018201604052801561065c5781602001600182028036833780820191505090505b506040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156106db5780820151818401525b6020810190506106bf565b50505050905090810190601f1680156107085780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b15801561072c5760006000fd5b505af192505050801561076b57506040513d604081101561074d5760006000fd5b81019080805190602001909291908051906020019092919050505060015b6108ff57610777611366565b8061078257506108ef565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152602001506040516020018080602001828103825283818151815260200191508051906020019080838360005b838110156107ff5780820151818401525b6020810190506107e3565b50505050905090810190601f16801561082c5780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040528051906020012060001916816040516020018080602001828103825283818151815260200191508051906020019080838360005b838110156108905780820151818401525b602081019050610874565b50505050905090810190601f1680156108bd5780820380516001836020036101000a031916815260200191505b509250505060405160208183030381529060405280519060200120600019161415156108e95760006000fd5b506108fa565b3d600060003e3d6000fd5b610902565b50505b3373ffffffffffffffffffffffffffffffffffffffff16634f1eb3d8600060006000600060006040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815260200182815260200195505050505050604060405180830381600087803b1580156109915760006000fd5b505af19250505080156109d057506040513d60408110156109b25760006000fd5b81019080805190602001909291908051906020019092919050505060015b610b64576109dc611366565b806109e75750610b54565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152602001506040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015610a645780820151818401525b602081019050610a48565b50505050905090810190601f168015610a915780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040528051906020012060001916816040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015610af55780820151818401525b602081019050610ad9565b50505050905090810190601f168015610b225780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040528051906020012060001916141515610b4e5760006000fd5b50610b5f565b3d600060003e3d6000fd5b610b67565b50505b3373ffffffffffffffffffffffffffffffffffffffff1663a34123a76000600060006040518463ffffffff1660e01b8152600401808481526020018381526020018281526020019350505050604060405180830381600087803b158015610bce5760006000fd5b505af1925050508015610c0d57506040513d6040811015610bef5760006000fd5b81019080805190602001909291908051906020019092919050505060015b610da157610c19611366565b80610c245750610d91565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152602001506040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015610ca15780820151818401525b602081019050610c85565b50505050905090810190601f168015610cce5780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040528051906020012060001916816040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015610d325780820151818401525b602081019050610d16565b50505050905090810190601f168015610d5f5780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040528051906020012060001916141515610d8b5760006000fd5b50610d9c565b3d600060003e3d6000fd5b610da4565b50505b3373ffffffffffffffffffffffffffffffffffffffff1663490e6cbc600060006000600067ffffffffffffffff81118015610ddf5760006000fd5b506040519080825280601f01601f191660200182016040528015610e125781602001600182028036833780820191505090505b506040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e8b5780820151818401525b602081019050610e6f565b50505050905090810190601f168015610eb85780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015610edb5760006000fd5b505af1925050508015610eec575060015b61108057610ef8611366565b80610f035750611070565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152602001506040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015610f805780820151818401525b602081019050610f64565b50505050905090810190601f168015610fad5780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040528051906020012060001916816040516020018080602001828103825283818151815260200191508051906020019080838360005b838110156110115780820151818401525b602081019050610ff5565b50505050905090810190601f16801561103e5780820380516001836020036101000a031916815260200191505b5092505050604051602081830303815290604052805190602001206000191614151561106a5760006000fd5b5061107b565b3d600060003e3d6000fd5b611081565b5b3373ffffffffffffffffffffffffffffffffffffffff166385b667296000600060006040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050604060405180830381600087803b1580156110fe5760006000fd5b505af192505050801561113d57506040513d604081101561111f5760006000fd5b81019080805190602001909291908051906020019092919050505060015b6112d157611149611366565b8061115457506112c1565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152602001506040516020018080602001828103825283818151815260200191508051906020019080838360005b838110156111d15780820151818401525b6020810190506111b5565b50505050905090810190601f1680156111fe5780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040528051906020012060001916816040516020018080602001828103825283818151815260200191508051906020019080838360005b838110156112625780820151818401525b602081019050611246565b50505050905090810190601f16801561128f5780820380516001836020036101000a031916815260200191505b509250505060405160208183030381529060405280519060200120600019161415156112bb5760006000fd5b506112cc565b3d600060003e3d6000fd5b6112d4565b50505b6000151561134d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f556e61626c6520746f207265656e74657200000000000000000000000000000081526020015060200191505060405180910390fd5b5b505050505661144e565b60008160e01c90505b919050565b600060443d10156113765761144b565b600481823e6308c379a061138a8251611358565b1415156113965761144b565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3d016004823e80513d67ffffffffffffffff81602484011181841117156113e4575050505061144b565b828401925082519150808211156113fe575050505061144b565b503d830160208284010111156114165750505061144b565b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168301016040525080925050505b90565bfea26469706673582212200546be75655fe4227fcfb49d1e4dc1f06419c51531018137724753ef2ef9d3b164736f6c63430007060033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): TestUniswapV3ReentrantCalleeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestUniswapV3ReentrantCallee;
}
export {};
