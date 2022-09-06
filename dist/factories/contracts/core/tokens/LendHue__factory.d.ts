import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { LendHue, LendHueInterface, ILendHue } from "../../../../contracts/core/tokens/LendHue";
declare type LendHueConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LendHue__factory extends ContractFactory {
    constructor(...args: LendHueConstructorParams);
    deploy(params: ILendHue.ConstructorParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LendHue>;
    getDeployTransaction(params: ILendHue.ConstructorParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LendHue;
    connect(signer: Signer): LendHue__factory;
    static readonly bytecode = "0x60a0604052600160076000509090553480156200001c5760006000fd5b5060405162001de938038062001de9833981810160405281019062000042919062000147565b5b80600001515b6040518060400160405280600881526020017f4c656e64204875650000000000000000000000000000000000000000000000008152602001506040518060400160405280600781526020017f4c656e64487565000000000000000000000000000000000000000000000000008152602001505b8160036000509081620000d091906200027d565b508060046000509081620000e591906200027d565b505b50508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b505b506200035a5662000359565b634e487b7160e01b600052604160045260246000fd5b565b6000602082840312156200015b5760006000fd5b604051602081018181106001600160401b03821117156200018157620001806200012f565b5b806040525082516001600160a01b03811681141515620001a15760006000fd5b80825250809150505b92915050565b60008160011c905060018216801515620001cb57607f821691505b60208210811415620001ed57634e487b7160e01b600052602260045260246000fd5b505b919050565b80600052506000602060002090505b90565b601f8211156200025c57600081815260208120601f850160051c8101602086101562000230578190505b601f850160051c820191508090505b8181101562000258578281555b6001810190506200023f565b5050505b5050505b565b60008260011b6000198460031b1c1983161790505b92915050565b81516001600160401b038111156200029a57620002996200012f565b5b620002b281620002ab8454620001b0565b8462000206565b60006020809150601f831160018114620002eb5760008415620002d6578387015190505b620002e2858262000262565b86555062000350565b601f198416620002fb86620001f4565b60005b82811015620003245785890151825560018201915084860195505b8481019050620002fe565b508582101562000344578488015160001960f88860031b161c1981168255505b505060018460011b0185555b5050505050505b565b5b608051611a6c6200037d6000396000818161044901526105580152611a6c6000f3fe60806040523480156100115760006000fd5b50600436106101055760003560e01c8063449a52f81161009857806395d89b411161006757806395d89b41146102c9578063a457c2d7146102e7578063a9059cbb14610317578063dd62ed3e1461034757610105565b8063449a52f81461024357806370a082311461025f57806375f12b211461028f57806379cc6790146102ad57610105565b806318160ddd116100d457806318160ddd146101a757806323b872dd146101c5578063313ce567146101f5578063395093511461021357610105565b806306fdde031461010b578063095ea7b3146101295780630c340a2414610159578063113cf1ab1461017757610105565b60006000fd5b610113610377565b60405161012091906112b0565b60405180910390f35b610143600480360381019061013e919061134a565b610411565b604051610150919061137d565b60405180910390f35b610161610447565b60405161016e9190611391565b60405180910390f35b610191600480360381019061018c91906113b9565b61046b565b60405161019e919061137d565b60405180910390f35b6101af610490565b6040516101bc919061140a565b60405180910390f35b6101df60048036038101906101da919061141c565b6104a2565b6040516101ec919061137d565b60405180910390f35b6101fd6104ea565b60405161020a9190611463565b60405180910390f35b61022d6004803603810190610228919061134a565b6104f8565b60405161023a919061137d565b60405180910390f35b61025d6004803603810190610258919061134a565b610548565b005b61027960048036038101906102749190611478565b610679565b604051610286919061140a565b60405180910390f35b6102976106cd565b6040516102a4919061137d565b60405180910390f35b6102c760048036038101906102c2919061134a565b6106e0565b005b6102d1610795565b6040516102de91906112b0565b60405180910390f35b61030160048036038101906102fc919061134a565b61082f565b60405161030e919061137d565b60405180910390f35b610331600480360381019061032c919061134a565b6108c2565b60405161033e919061137d565b60405180910390f35b610361600480360381019061035c91906114a1565b6108f8565b60405161036e919061140a565b60405180910390f35b606060036000508054610389906114df565b80601f01602080910402602001604051908101604052809291908181526020018280546103b5906114df565b80156104025780601f106103d757610100808354040283529160200191610402565b820191906000526020600020905b8154815290600101906020018083116103e557829003601f168201915b5050505050905061040e565b90565b6000600061042361098d63ffffffff16565b905061043681858561099a63ffffffff16565b600191505061044156505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600660005060205280600052604060002060009150909054906101000a900460ff1681565b6000600260005054905061049f565b90565b600060006104b461098d63ffffffff16565b90506104c7858285610b7563ffffffff16565b6104d8858585610c1263ffffffff16565b60019150506104e356505b9392505050565b6000601290506104f5565b90565b6000600061050a61098d63ffffffff16565b905061053781858561052285896108f863ffffffff16565b61052c919061156b565b61099a63ffffffff16565b600191505061054256505b92915050565b610556610ebe63ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105c2573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e6919061158a565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064c906115b3565b60405180910390fd5b6106658282610f1963ffffffff16565b5b61067461109463ffffffff16565b5b5050565b6000600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490506106c8565b919050565b600560009054906101000a900460ff1681565b6106ee610ebe63ffffffff16565b600061070083336108f863ffffffff16565b9050818110151515610747576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073e906115f2565b60405180910390fd5b6107708361075961098d63ffffffff16565b84846107659190611631565b61099a63ffffffff16565b61078083836110a463ffffffff16565b505b61079061109463ffffffff16565b5b5050565b6060600460005080546107a7906114df565b80601f01602080910402602001604051908101604052809291908181526020018280546107d3906114df565b80156108205780601f106107f557610100808354040283529160200191610820565b820191906000526020600020905b81548152906001019060200180831161080357829003601f168201915b5050505050905061082c565b90565b6000600061084161098d63ffffffff16565b9050600061085582866108f863ffffffff16565b905083811015151561089c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089390611650565b60405180910390fd5b6108af828686840361099a63ffffffff16565b6001925050506108bc5650505b92915050565b600060006108d461098d63ffffffff16565b90506108e7818585610c1263ffffffff16565b60019150506108f256505b92915050565b6000600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610987565b92915050565b6000339050610997565b90565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610a0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a03906116b5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610a7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a759061171a565b60405180910390fd5b80600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b67919061140a565b60405180910390a35b505050565b6000610b8784846108f863ffffffff16565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81141515610c0b57818110151515610bf7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bee9061177f565b60405180910390fd5b610c0a848484840361099a63ffffffff16565b5b505b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610c84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7b906117be565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610cf6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ced90611823565b60405180910390fd5b610d078383836112a063ffffffff16565b6000600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050818110151515610d96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8d90611888565b60405180910390fd5b818103600060005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555081600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054610e38919061156b565b9250508190909055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e9e919061140a565b60405180910390a3610eb78484846112a663ffffffff16565b505b505050565b600260076000505414151515610f09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f00906118ed565b60405180910390fd5b600260076000508190909055505b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610f8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f829061192c565b60405180910390fd5b610f9d600083836112a063ffffffff16565b80600260008282825054610fb1919061156b565b92505081909090555080600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505461100e919061156b565b9250508190909055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611075919061140a565b60405180910390a361108f600083836112a663ffffffff16565b5b5050565b600160076000508190909055505b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611116576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110d9061196b565b60405180910390fd5b611128826000836112a063ffffffff16565b6000600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490508181101515156111b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ae906119d0565b60405180910390fd5b818103600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819090905550816002600082828250546112199190611631565b925050819090905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611280919061140a565b60405180910390a361129a836000846112a663ffffffff16565b505b5050565b5b505050565b5b50505056611a35565b600060208083528351808285015260005b818110156112e157828187010151604082870101525b82810190506112c1565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565b73ffffffffffffffffffffffffffffffffffffffff8116811415156113465760006000fd5b505b565b600060006040838503121561135f5760006000fd5b823561136a81611321565b80925050602083013590505b9250929050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b6000602082840312156113cc5760006000fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811415156113ff5760006000fd5b809150505b92915050565b60006020820190508282525b92915050565b600060006000606084860312156114335760006000fd5b833561143e81611321565b80935050602084013561145081611321565b80925050604084013590505b9250925092565b600060208201905060ff831682525b92915050565b60006020828403121561148b5760006000fd5b813561149681611321565b809150505b92915050565b60006000604083850312156114b65760006000fd5b82356114c181611321565b8092505060208301356114d381611321565b809150505b9250929050565b60008160011c9050600182168015156114f957607f821691505b60208210811415611533577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b60008282019050808211156115835761158261153a565b5b5b92915050565b60006020828403121561159d5760006000fd5b81516115a881611321565b809150505b92915050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601660208201527f4275726e206578636565647320616c6c6f77616e636500000000000000000000604082015260006060820190505b919050565b60008282039050818111156116495761164861153a565b5b5b92915050565b60208152602560208201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760408201527f207a65726f000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602460208201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602260208201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560408201527f7373000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601d60208201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604082015260006060820190505b919050565b60208152602560208201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602360208201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201527f6573730000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602660208201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408201527f616c616e63650000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152600d60208201527f4c43205265656e7472616e637900000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601f60208201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260006060820190505b919050565b60208152602160208201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360408201527f7300000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602260208201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60408201527f6365000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565bfea26469706673582212204446e9ff788201418bf7b8c958cdd5e5c59076c98f5e7826d5e30f821072729e64736f6c63430008100033";
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
