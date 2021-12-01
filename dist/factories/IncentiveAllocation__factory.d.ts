import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { IncentiveAllocation, IncentiveAllocationInterface, ConstructorParamsStruct } from "../IncentiveAllocation";
declare type IncentiveAllocationConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class IncentiveAllocation__factory extends ContractFactory {
    constructor(...args: IncentiveAllocationConstructorParams);
    deploy(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<IncentiveAllocation>;
    getDeployTransaction(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): IncentiveAllocation;
    connect(signer: Signer): IncentiveAllocation__factory;
    static readonly bytecode = "0x60a06040523480156100115760006000fd5b50604051610791380380610791833981810160405281019061003391906100c2565b5b806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508060200151600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b506101405661013f565b6000604082840312156100d3578081fd5b604051604081018181106001600160401b03821117156100ef57fe5b806040525082516100ff81610123565b80825250602083015161011181610123565b80602083015250809150505b92915050565b6001600160a01b0381168114151561013b5760006000fd5b5b50565b5b60805160601c61062a610167600039806101ff52806102f6528061038b525061062a6000f3fe60806040523480156100115760006000fd5b506004361061006c5760003560e01c8063628e2e8511610051578063628e2e851461009a578063a9778eb0146100b6578063f00000ee146100d25761006c565b8063314e99a214610072578063452a93201461007c5761006c565b60006000fd5b61007a6100f0565b005b610084610178565b60405161009191906104d8565b60405180910390f35b6100b460048036038101906100af9190610489565b61019e565b005b6100d060048036038101906100cb9190610455565b610295565b005b6100da610389565b6040516100e7919061058c565b60405180910390f35b61014f600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ad63ffffffff16565b600060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b5b565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6101fd600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ad63ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663628e2e858484846040518463ffffffff1660e01b815260040161025a93929190610541565b600060405180830381600087803b1580156102755760006000fd5b505af115801561028a573d600060003e3d6000fd5b505050505b5b505050565b6102f4600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ad63ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9778eb083836040518363ffffffff1660e01b815260040161034f929190610500565b600060405180830381600087803b15801561036a5760006000fd5b505af115801561037f573d600060003e3d6000fd5b505050505b5b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b8015156103ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e6906105b4565b60405180910390fd5b5b50566105f3565b60008135905073ffffffffffffffffffffffffffffffffffffffff8116811415156104225760006000fd5b5b919050565b6000813590506fffffffffffffffffffffffffffffffff81168114151561044f5760006000fd5b5b919050565b6000600060408385031215610468578182fd5b610471836103f7565b915061047f60208401610428565b90505b9250929050565b6000600060006060848603121561049e578081fd5b6104a7846103f7565b92506104b560208501610428565b9150604084013560ff8116811415156104cc578182fd5b809150505b9250925092565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682526fffffffffffffffffffffffffffffffff831660208301525b9392505050565b600060608201905073ffffffffffffffffffffffffffffffffffffffff851682526fffffffffffffffffffffffffffffffff8416602083015260ff831660408301525b949350505050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208252600e60208301527f4e6f7420417574686f72697a656400000000000000000000000000000000000060408301526060820190505b919050565bfea2646970667358221220a564596dfbd80b539e6c8d8bd30a60aff60abcee2e6cc737f956760297f273fd64736f6c63430007060033";
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
