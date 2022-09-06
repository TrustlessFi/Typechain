import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { IncentiveAllocation, IncentiveAllocationInterface } from "../../../../../contracts/core/auxiliary/allocations/IncentiveAllocation";
declare type IncentiveAllocationConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class IncentiveAllocation__factory extends ContractFactory {
    constructor(...args: IncentiveAllocationConstructorParams);
    deploy(params: IncentiveAllocation.ConstructorParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<IncentiveAllocation>;
    getDeployTransaction(params: IncentiveAllocation.ConstructorParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): IncentiveAllocation;
    connect(signer: Signer): IncentiveAllocation__factory;
    static readonly bytecode = "0x60a06040523480156100115760006000fd5b506040516107ac3803806107ac833981810160405281019061003391906100db565b5b806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150508060200151600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5061015356610152565b6001600160a01b038116811415156100d75760006000fd5b505b565b6000604082840312156100ee5760006000fd5b604051604081018181106001600160401b038211171561011e57634e487b7160e01b600052604160045260246000fd5b8060405250825161012e816100bf565b808252506020830151610140816100bf565b80602083015250809150505b92915050565b5b60805161063061017c600039600081816101ff015281816102f6015261038b01526106306000f3fe60806040523480156100115760006000fd5b506004361061006c5760003560e01c8063628e2e8511610051578063628e2e851461009a578063a9778eb0146100b6578063f00000ee146100d25761006c565b8063314e99a214610072578063452a93201461007c5761006c565b60006000fd5b61007a6100f0565b005b610084610178565b60405161009191906103f7565b60405180910390f35b6100b460048036038101906100af919061047d565b61019e565b005b6100d060048036038101906100cb91906104d0565b610295565b005b6100da610389565b6040516100e79190610506565b60405180910390f35b61014f600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ad63ffffffff16565b600060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b5b565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6101fd600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ad63ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663628e2e858484846040518463ffffffff1660e01b815260040161025a9392919061052e565b600060405180830381600087803b1580156102755760006000fd5b505af115801561028a573d600060003e3d6000fd5b505050505b5b505050565b6102f4600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ad63ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9778eb083836040518363ffffffff1660e01b815260040161034f929190610579565b600060405180830381600087803b15801561036a5760006000fd5b505af115801561037f573d600060003e3d6000fd5b505050505b5b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b8015156103ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e6906105ba565b60405180910390fd5b5b50566105f9565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60008135905073ffffffffffffffffffffffffffffffffffffffff81168114151561044a5760006000fd5b5b919050565b6000813590506fffffffffffffffffffffffffffffffff8116811415156104775760006000fd5b5b919050565b600060006000606084860312156104945760006000fd5b61049d8461041f565b92506104ab60208501610450565b9150604084013560ff8116811415156104c45760006000fd5b809150505b9250925092565b60006000604083850312156104e55760006000fd5b6104ee8361041f565b91506104fc60208401610450565b90505b9250929050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060608201905073ffffffffffffffffffffffffffffffffffffffff851682526fffffffffffffffffffffffffffffffff8416602083015260ff831660408301525b949350505050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682526fffffffffffffffffffffffffffffffff831660208301525b9392505050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565bfea26469706673582212208d325a65199c9ca276937a395e3a33db920cc5bf825b4a16aae28bbf17f2c91964736f6c63430008100033";
    static readonly abi: ({
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
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
    static createInterface(): IncentiveAllocationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IncentiveAllocation;
}
export {};
