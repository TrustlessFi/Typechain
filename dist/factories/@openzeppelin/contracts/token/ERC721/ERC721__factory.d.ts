import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { ERC721, ERC721Interface } from "../../../../../@openzeppelin/contracts/token/ERC721/ERC721";
declare type ERC721ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721__factory extends ContractFactory {
    constructor(...args: ERC721ConstructorParams);
    deploy(name_: PromiseOrValue<string>, symbol_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC721>;
    getDeployTransaction(name_: PromiseOrValue<string>, symbol_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC721;
    connect(signer: Signer): ERC721__factory;
    static readonly bytecode = "0x6080604052348015620000125760006000fd5b506040516200221338038062002213833981810160405281019062000038919062000143565b5b81600060005090816200004d91906200027f565b5080600160005090816200006291906200027f565b505b50506200035c566200035b565b634e487b7160e01b600052604160045260246000fd5b565b600082601f83011215156200009e5760006000fd5b81516001600160401b0380821115620000bc57620000bb62000071565b5b601f1960405181603f83601f8701160116810191508082108383111715620000e957620000e862000071565b5b81604052838152602092508683858801011115620001075760006000fd5b600091505b838210156200012d578282870101518383830101525b82820191506200010c565b6000838583010152809450505050505b92915050565b6000600060408385031215620001595760006000fd5b82516001600160401b0380821115620001725760006000fd5b620001808683870162000089565b93506020850151915080821115620001985760006000fd5b50620001a78582860162000089565b9150505b9250929050565b60008160011c905060018216801515620001cd57607f821691505b60208210811415620001ef57634e487b7160e01b600052602260045260246000fd5b505b919050565b80600052506000602060002090505b90565b601f8211156200025e57600081815260208120601f850160051c8101602086101562000232578190505b601f850160051c820191508090505b818110156200025a578281555b60018101905062000241565b5050505b5050505b565b60008260011b6000198460031b1c1983161790505b92915050565b81516001600160401b038111156200029c576200029b62000071565b5b620002b481620002ad8454620001b2565b8462000208565b60006020809150601f831160018114620002ed5760008415620002d8578387015190505b620002e4858262000264565b86555062000352565b601f198416620002fd86620001f6565b60005b82811015620003265785890151825560018201915084860195505b848101905062000300565b508582101562000346578488015160001960f88860031b161c1981168255505b505060018460011b0185555b5050505050505b565b5b611ea7806200036c6000396000f3fe60806040523480156100115760006000fd5b50600436106100e45760003560e01c80636352211e1161008d578063a22cb46511610067578063a22cb4651461023a578063b88d4fde14610256578063c87b56dd14610272578063e985e9c5146102a2576100e4565b80636352211e146101bc57806370a08231146101ec57806395d89b411461021c576100e4565b8063095ea7b3116100be578063095ea7b31461016857806323b872dd1461018457806342842e0e146101a0576100e4565b806301ffc9a7146100ea57806306fdde031461011a578063081812fc14610138576100e4565b60006000fd5b61010460048036038101906100ff9190611541565b6102d2565b604051610111919061156a565b60405180910390f35b6101226103bf565b60405161012f91906115f7565b60405180910390f35b610152600480360381019061014d9190611613565b610459565b60405161015f9190611631565b60405180910390f35b610182600480360381019061017d919061168a565b6104ad565b005b61019e600480360381019061019991906116b9565b6105e8565b005b6101ba60048036038101906101b591906116b9565b61065d565b005b6101d660048036038101906101d19190611613565b610687565b6040516101e39190611631565b60405180910390f35b610206600480360381019061020191906116f8565b610745565b604051610213919061171d565b60405180910390f35b61022461080b565b60405161023191906115f7565b60405180910390f35b610254600480360381019061024f919061172f565b6108a5565b005b610270600480360381019061026b91906117a2565b6108c8565b005b61028c60048036038101906102879190611613565b61093f565b60405161029991906115f7565b60405180910390f35b6102bc60048036038101906102b791906118a8565b6109c4565b6040516102c9919061156a565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061039d57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103b357506103b282610a6363ffffffff16565b5b90506103ba565b919050565b6060600060005080546103d1906118de565b80601f01602080910402602001604051908101604052809291908181526020018280546103fd906118de565b801561044a5780601f1061041f5761010080835404028352916020019161044a565b820191906000526020600020905b81548152906001019060200180831161042d57829003601f168201915b50505050509050610456565b90565b600061046a82610ad263ffffffff16565b6004600050600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506104a8565b919050565b60006104be8261068763ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890611939565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610556610b2663ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff161480610591575061059081610585610b2663ffffffff16565b6109c463ffffffff16565b5b15156105d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c99061199e565b60405180910390fd5b6105e28383610b3363ffffffff16565b505b5050565b6106056105f9610b2663ffffffff16565b82610bf663ffffffff16565b1515610646576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063d90611a03565b60405180910390fd5b610657838383610ca463ffffffff16565b5b505050565b610681838383604051806020016040528060008152602001506108c863ffffffff16565b5b505050565b600060006002600050600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610736576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072d90611a68565b60405180910390fd5b8091505061074056505b919050565b6000600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156107b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b090611aa7565b60405180910390fd5b600360005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610806565b919050565b60606001600050805461081d906118de565b80601f0160208091040260200160405190810160405280929190818152602001828054610849906118de565b80156108965780601f1061086b57610100808354040283529160200191610896565b820191906000526020600020905b81548152906001019060200180831161087957829003601f168201915b505050505090506108a2565b90565b6108c36108b6610b2663ffffffff16565b8383610f3963ffffffff16565b5b5050565b6108e56108d9610b2663ffffffff16565b83610bf663ffffffff16565b1515610926576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091d90611a03565b60405180910390fd5b610938848484846110af63ffffffff16565b5b50505050565b606061095082610ad263ffffffff16565b600061096061111a63ffffffff16565b9050600081511161098357604051806020016040528060008152602001506109b6565b8061099584611139909063ffffffff16565b6040516020016109a6929190611b0c565b6040516020818303038152906040525b9150506109bf56505b919050565b6000600560005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050610a5d565b92915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050610acd565b919050565b610ae1816112b063ffffffff16565b1515610b22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1990611a68565b60405180910390fd5b5b50565b6000339050610b30565b90565b816004600050600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610baf8361068763ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b5050565b60006000610c098361068763ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c515750610c5081856109c463ffffffff16565b5b80610c9557508373ffffffffffffffffffffffffffffffffffffffff16610c7d8461045963ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16145b915050610c9e56505b92915050565b8273ffffffffffffffffffffffffffffffffffffffff16610cca8261068763ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16141515610d22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1990611b42565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610d94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8b90611ba7565b60405180910390fd5b610da583838361132563ffffffff16565b610db6600082610b3363ffffffff16565b6001600360005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054610e0b9190611c3d565b9250508190909055506001600360005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054610e699190611c5c565b925050819090905550816002600050600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610f3383838361132b63ffffffff16565b5b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610faa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa190611c7b565b60405180910390fd5b80600560005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110a1919061156a565b60405180910390a35b505050565b6110c0848484610ca463ffffffff16565b6110d28484848461133163ffffffff16565b1515611113576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110a90611cba565b60405180910390fd5b5b50505050565b6060604051806020016040528060008152602001509050611136565b90565b60606000821415611184576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081526020015090506112ab565b600082905060005b6000821415156111ba5780806111a190611d1f565b915050600a826111b19190611d8f565b9150815061118c565b60008167ffffffffffffffff8111156111d6576111d5611771565b5b6040519080825280601f01601f1916602001820160405280156112085781602001600182028036833780820191505090505b5090505b60008514151561129d576001826112239190611c3d565b91508150600a856112349190611dad565b60306112409190611c5c565b60f81b818381518110151561125857611257611dcb565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856112949190611d8f565b9450845061120c565b8093505050506112ab565050505b919050565b6000600073ffffffffffffffffffffffffffffffffffffffff166002600050600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050611320565b919050565b5b505050565b5b505050565b600061135a8473ffffffffffffffffffffffffffffffffffffffff166114df909063ffffffff16565b156114cd578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611389610b2663ffffffff16565b8786866040518563ffffffff1660e01b81526004016113ab9493929190611dfc565b6020604051808303816000875af19250505080156113e757506040513d601f19601f820116820180604052508101906113e49190611e47565b60015b611477575b5b3d8060008114611419576040519150601f19603f3d011682016040523d82523d6000602084013e61141e565b606091505b50600081511415611468576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145b90611cba565b60405180910390fd611470565b805181602001fd5b505b6114c8565b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506114d756505b6114d6565b600190506114d7565b5b949350505050565b600060008273ffffffffffffffffffffffffffffffffffffffff163b119050611503565b91905056611e70565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114151561153d5760006000fd5b505b565b6000602082840312156115545760006000fd5b813561155f8161150c565b809150505b92915050565b600060208201905082151582525b92915050565b60005b8381101561159d5780820151818401525b602081019050611581565b506000838301525050505b565b600081518084526115c281602086016020860161157e565b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019150505b92915050565b60208152600061160a60208301846115aa565b90505b92915050565b6000602082840312156116265760006000fd5b813590505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60008135905073ffffffffffffffffffffffffffffffffffffffff8116811415156116845760006000fd5b5b919050565b600060006040838503121561169f5760006000fd5b6116a883611659565b9150602083013590505b9250929050565b600060006000606084860312156116d05760006000fd5b6116d984611659565b92506116e760208501611659565b9150604084013590505b9250925092565b60006020828403121561170b5760006000fd5b61171482611659565b90505b92915050565b60006020820190508282525b92915050565b60006000604083850312156117445760006000fd5b61174d83611659565b91506020830135801515811415156117655760006000fd5b809150505b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b6000600060006000608085870312156117bb5760006000fd5b6117c485611659565b93506117d260208601611659565b925060408501359150606085013567ffffffffffffffff808211156117f75760006000fd5b818701915087601f830112151561180e5760006000fd5b81358181111561182157611820611771565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe060405181603f83601f860116011681019150808210848311171561186957611868611771565b5b816040528281528a60208487010111156118835760006000fd5b8260208601602083013760006020848301015280955050505050505b92959194509250565b60006000604083850312156118bd5760006000fd5b6118c683611659565b91506118d460208401611659565b90505b9250929050565b60008160011c9050600182168015156118f857607f821691505b60208210811415611932577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b505b919050565b60208152602160208201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560408201527f7200000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152603e60208201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60408201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606082015260006080820190505b919050565b60208152602e60208201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201527f72206e6f7220617070726f766564000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601860208201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604082015260006060820190505b919050565b60208152602960208201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160408201527f6c6964206f776e65720000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60008351611b1e81846020880161157e565b80830190508351611b3381836020880161157e565b808201925050505b9392505050565b60208152602560208201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201527f6f776e6572000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602460208201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b6000828203905081811115611c5557611c54611c0c565b5b5b92915050565b6000828201905080821115611c7457611c73611c0c565b5b5b92915050565b60208152601960208201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260006060820190505b919050565b60208152603260208201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527f63656976657220696d706c656d656e7465720000000000000000000000000000606082015260006080820190505b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611d5257611d51611c0c565b5b6001820190505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565b6000821515611da157611da0611d5e565b5b82820490505b92915050565b6000821515611dbf57611dbe611d5e565b5b82820690505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152611e3b60808301846115aa565b90505b95945050505050565b600060208284031215611e5a5760006000fd5b8151611e658161150c565b809150505b92915050565bfea2646970667358221220ff7ebeb384eb12a21c6330e4e1ba1a7b606bd08d9cad65107ada65f1ceaf6e5964736f6c63430008100033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC721Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721;
}
export {};
