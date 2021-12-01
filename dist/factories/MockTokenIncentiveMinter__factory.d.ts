import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTokenIncentiveMinter, MockTokenIncentiveMinterInterface } from "../MockTokenIncentiveMinter";
declare type MockTokenIncentiveMinterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockTokenIncentiveMinter__factory extends ContractFactory {
    constructor(...args: MockTokenIncentiveMinterConstructorParams);
    deploy(_token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockTokenIncentiveMinter>;
    getDeployTransaction(_token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockTokenIncentiveMinter;
    connect(signer: Signer): MockTokenIncentiveMinter__factory;
    static readonly bytecode = "0x60806040523480156100115760006000fd5b50604051610402380380610402833981810160405260208110156100355760006000fd5b81019080805190602001909291905050505b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5061008f565b6103648061009e6000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c80634cd7a31514610041578063fc0c546a146100905761003b565b60006000fd5b61008e600480360360408110156100585760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506100c4565b005b6100986100fc565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100f7600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838361012263ffffffff16565b5b5050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060008473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b8585604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310151561020757805182525b6020820191506020810190506020830392506101e1565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610269576040519150601f19603f3d011682016040523d82523d6000602084013e61026e565b606091505b50915091508180156102af57506000815114806102ae575080806020019051602081101561029c5760006000fd5b81019080805190602001909291905050505b5b1515610326576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f535400000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b50505b50505056fea2646970667358221220d7b1831e1815ab33fb31eb71d50088507c3ed743f178ec2a3bc2b56b0605308464736f6c63430007060033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
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
    })[];
    static createInterface(): MockTokenIncentiveMinterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTokenIncentiveMinter;
}
export {};
