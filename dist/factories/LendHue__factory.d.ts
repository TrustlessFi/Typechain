import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LendHue, LendHueInterface, ConstructorParamsStruct } from "../LendHue";
declare type LendHueConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LendHue__factory extends ContractFactory {
    constructor(...args: LendHueConstructorParams);
    deploy(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LendHue>;
    getDeployTransaction(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LendHue;
    connect(signer: Signer): LendHue__factory;
    static readonly bytecode = "0x60a0604052600160076000509090553480156200001c5760006000fd5b5060405162001e9738038062001e978339818101604052810190620000429190620001fc565b5b80600001515b6040518060400160405280600881526020017f4c656e64204875650000000000000000000000000000000000000000000000008152602001506040518060400160405280600781526020017f4c656e64487565000000000000000000000000000000000000000000000000008152602001505b8160036000509080519060200190620000d79291906200013b565b508060046000509080519060200190620000f39291906200013b565b505b50508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b505b50620002af565b82805462000149906200026a565b90600052602060002090601f0160209004810192826200016d5760008555620001be565b82601f106200018857805160ff1916838001178555620001be565b82800160010185558215620001be579182015b82811115620001bd57825182600050909055916020019190600101906200019b565b5b509050620001cd9190620001d1565b5090565b620001d7565b80821115620001f35760008181506000905550600101620001d7565b509056620002ae565b6000602082840312156200020e578081fd5b604051602081018181106001600160401b03821117156200023d57634e487b7160e01b83526041600452602483fd5b806040525082516001600160a01b038116811415156200025b578283fd5b80825250809150505b92915050565b60008160011c9050600182168015156200028557607f821691505b60208210811415620002a757634e487b7160e01b600052602260045260246000fd5b505b919050565b5b60805160601c611bc2620002d56000396000818161044201526106a60152611bc26000f3fe60806040523480156100115760006000fd5b50600436106101055760003560e01c8063449a52f81161009857806395d89b411161006757806395d89b41146102c9578063a457c2d7146102e7578063a9059cbb14610317578063dd62ed3e1461034757610105565b8063449a52f81461024357806370a082311461025f57806375f12b211461028f57806379cc6790146102ad57610105565b806318160ddd116100d457806318160ddd146101a757806323b872dd146101c5578063313ce567146101f5578063395093511461021357610105565b806306fdde031461010b578063095ea7b3146101295780630c340a2414610159578063113cf1ab1461017757610105565b60006000fd5b610113610377565b604051610120919061156f565b60405180910390f35b610143600480360381019061013e919061148e565b610411565b6040516101509190611533565b60405180910390f35b610161610440565b60405161016e9190611547565b60405180910390f35b610191600480360381019061018c91906114bf565b610464565b60405161019e9190611533565b60405180910390f35b6101af610489565b6040516101bc9190611a70565b60405180910390f35b6101df60048036038101906101da9190611449565b61049b565b6040516101ec9190611533565b60405180910390f35b6101fd6105bc565b60405161020a9190611a82565b60405180910390f35b61022d6004803603810190610228919061148e565b6105ca565b60405161023a9190611533565b60405180910390f35b61025d6004803603810190610258919061148e565b610696565b005b610279600480360381019061027491906113e6565b6107d7565b6040516102869190611a70565b60405180910390f35b61029761082b565b6040516102a49190611533565b60405180910390f35b6102c760048036038101906102c2919061148e565b61083e565b005b6102d16108f3565b6040516102de919061156f565b60405180910390f35b61030160048036038101906102fc919061148e565b61098d565b60405161030e9190611533565b60405180910390f35b610331600480360381019061032c919061148e565b610a9c565b60405161033e9190611533565b60405180910390f35b610361600480360381019061035c919061140d565b610acb565b60405161036e9190611a70565b60405180910390f35b60606003600050805461038990611ad6565b80601f01602080910402602001604051908101604052809291908181526020018280546103b590611ad6565b80156104025780601f106103d757610100808354040283529160200191610402565b820191906000526020600020905b8154815290600101906020018083116103e557829003601f168201915b5050505050905061040e565b90565b6000610431610424610b6063ffffffff16565b8484610b6d63ffffffff16565b6001905061043a565b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600660005060205280600052604060002060009150909054906101000a900460ff1681565b60006002600050549050610498565b90565b60006104ae848484610d4863ffffffff16565b6000600160005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000610505610b6063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054905082811015151561058a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058190611838565b60405180910390fd5b6105aa8561059c610b6063ffffffff16565b858403610b6d63ffffffff16565b60019150506105b556505b9392505050565b6000601290506105c7565b90565b60006106876105dd610b6063ffffffff16565b8484600160005060006105f4610b6063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505461067c9190611a97565b610b6d63ffffffff16565b60019050610690565b92915050565b6106a4610ff463ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b815260040160206040518083038186803b15801561070b5760006000fd5b505afa158015610720573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610744919061150c565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107aa906117f9565b60405180910390fd5b6107c3828261104f63ffffffff16565b5b6107d26111ca63ffffffff16565b5b5050565b6000600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610826565b919050565b600560009054906101000a900460ff1681565b61084c610ff463ffffffff16565b600061085e8333610acb63ffffffff16565b90508181101515156108a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089c906117ba565b60405180910390fd5b6108ce836108b7610b6063ffffffff16565b84846108c39190611ab7565b610b6d63ffffffff16565b6108de83836111da63ffffffff16565b505b6108ee6111ca63ffffffff16565b5b5050565b60606004600050805461090590611ad6565b80601f016020809104026020016040519081016040528092919081815260200182805461093190611ad6565b801561097e5780601f106109535761010080835404028352916020019161097e565b820191906000526020600020905b81548152906001019060200180831161096157829003601f168201915b5050505050905061098a565b90565b60006000600160005060006109a6610b6063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050828110151515610a6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a62906119cc565b60405180910390fd5b610a8b610a7c610b6063ffffffff16565b85858403610b6d63ffffffff16565b6001915050610a9656505b92915050565b6000610abc610aaf610b6063ffffffff16565b8484610d4863ffffffff16565b60019050610ac5565b92915050565b6000600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610b5a565b92915050565b6000339050610b6a565b90565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610bdf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd690611967565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610c51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c48906116f0565b60405180910390fd5b80600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610d3a9190611a70565b60405180910390a35b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610dba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db190611902565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610e2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e23906115e7565b60405180910390fd5b610e3d8383836113d663ffffffff16565b6000600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050818110151515610ecc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec390611755565b60405180910390fd5b818103600060005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555081600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054610f6e9190611a97565b9250508190909055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610fd49190611a70565b60405180910390a3610fed8484846113dc63ffffffff16565b505b505050565b60026007600050541415151561103f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611036906116b1565b60405180910390fd5b600260076000508190909055505b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156110c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b890611a31565b60405180910390fd5b6110d3600083836113d663ffffffff16565b806002600082828250546110e79190611a97565b92505081909090555080600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250546111449190611a97565b9250508190909055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516111ab9190611a70565b60405180910390a36111c5600083836113dc63ffffffff16565b5b5050565b600160076000508190909055505b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561124c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112439061189d565b60405180910390fd5b61125e826000836113d663ffffffff16565b6000600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490508181101515156112ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e49061164c565b60405180910390fd5b818103600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508160026000828282505461134f9190611ab7565b925050819090905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516113b69190611a70565b60405180910390a36113d0836000846113dc63ffffffff16565b505b5050565b5b505050565b5b50505056611b8b565b6000602082840312156113f7578081fd5b813561140281611b62565b809150505b92915050565b6000600060408385031215611420578081fd5b823561142b81611b62565b80925050602083013561143d81611b62565b809150505b9250929050565b6000600060006060848603121561145e578081fd5b833561146981611b62565b80935050602084013561147b81611b62565b80925050604084013590505b9250925092565b60006000604083850312156114a1578182fd5b82356114ac81611b62565b80925050602083013590505b9250929050565b6000602082840312156114d0578081fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681141515611501578182fd5b809150505b92915050565b60006020828403121561151d578081fd5b815161152881611b62565b809150505b92915050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b6000602080835283518082850152825b8181101561159f57828187010151604082870101525b828101905061157f565b818111156115b05783604083870101525b5060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565b60208152602360208201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201527f6573730000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602260208201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60408201527f6365000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152600d60208201527f4c43205265656e7472616e637900000000000000000000000000000000000000604082015260006060820190505b919050565b60208152602260208201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560408201527f7373000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602660208201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408201527f616c616e63650000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601660208201527f4275726e206578636565647320616c6c6f77616e636500000000000000000000604082015260006060820190505b919050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b60208152602860208201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160408201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602160208201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360408201527f7300000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602560208201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602460208201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602560208201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760408201527f207a65726f000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601f60208201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260006060820190505b919050565b60006020820190508282525b92915050565b600060208201905060ff831682525b92915050565b60008219821115611aab57611aaa611b31565b5b82820190505b92915050565b600082821015611aca57611ac9611b31565b5b82820390505b92915050565b60008160011c905060018216801515611af057607f821691505b60208210811415611b2a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b73ffffffffffffffffffffffffffffffffffffffff811681141515611b875760006000fd5b505b565bfea2646970667358221220cfbbd82c69da34156b218ad143bf7486e88d103963317e291ff8d25e4b2f781b64736f6c63430008040033";
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
    static createInterface(): LendHueInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LendHue;
}
export {};
