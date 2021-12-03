import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TDaoVotingRewardsSafe, TDaoVotingRewardsSafeInterface } from "../TDaoVotingRewardsSafe";
declare type TDaoVotingRewardsSafeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TDaoVotingRewardsSafe__factory extends ContractFactory {
    constructor(...args: TDaoVotingRewardsSafeConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TDaoVotingRewardsSafe>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TDaoVotingRewardsSafe;
    connect(signer: Signer): TDaoVotingRewardsSafe__factory;
    static readonly bytecode = "0x60a06040523480156100115760006000fd5b505b3373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b610053565b60805160601c6104356100746000398060e652806101d152506104356000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c8063d1660f9914610041578063de9375f2146100b05761003b565b60006000fd5b6100ae600480360360608110156100585760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506100e4565b005b6100b86101cf565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b60008114156101b8576101ca565b6101c98383836101f363ffffffff16565b5b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060008473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b8585604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831015156102d857805182525b6020820191506020810190506020830392506102b2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461033a576040519150601f19603f3d011682016040523d82523d6000602084013e61033f565b606091505b5091509150818015610380575060008151148061037f575080806020019051602081101561036d5760006000fd5b81019080805190602001909291905050505b5b15156103f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f535400000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b50505b50505056fea2646970667358221220a09fa674e24bee1d9e1df7bc0570046e4c432e836610f7a105a97cba2ac2d0cf64736f6c63430007060033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): TDaoVotingRewardsSafeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TDaoVotingRewardsSafe;
}
export {};
