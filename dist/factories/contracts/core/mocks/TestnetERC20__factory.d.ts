import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { TestnetERC20, TestnetERC20Interface } from "../../../../contracts/core/mocks/TestnetERC20";
declare type TestnetERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestnetERC20__factory extends ContractFactory {
    constructor(...args: TestnetERC20ConstructorParams);
    deploy(_initialHolder: PromiseOrValue<string>, initialTokens: PromiseOrValue<BigNumberish>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _decimalsOverride: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestnetERC20>;
    getDeployTransaction(_initialHolder: PromiseOrValue<string>, initialTokens: PromiseOrValue<BigNumberish>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _decimalsOverride: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestnetERC20;
    connect(signer: Signer): TestnetERC20__factory;
    static readonly bytecode = "0x60a0604052348015620000125760006000fd5b5060405162001f2238038062001f228339818101604052810190620000389190620003ed565b5b82825b816003600050908162000050919062000577565b50806004600050908162000065919062000577565b505b505080600560006101000a81548160ff021916908360ff160217905550620000968585620000d960201b60201c565b8473ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b505050505062000882565b620000e96200016560201b60201c565b600a620000f791906200078b565b62989680620001079190620007a5565b81111515156200014e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200014590620007cf565b60405180910390fd5b6200016082826200018260201b60201c565b5b5050565b6000600560009054906101000a900460ff1690506200017f565b90565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515620001f7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001ee906200080e565b60405180910390fd5b6200020b600083836200030a60201b60201c565b806002600082828250546200022191906200084d565b92505081909090555080600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250546200028091906200084d565b9250508190909055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002e991906200086f565b60405180910390a362000305600083836200031060201b60201c565b5b5050565b5b505050565b5b5050505662000881565b634e487b7160e01b600052604160045260246000fd5b565b600082601f8301121515620003485760006000fd5b81516001600160401b03808211156200036657620003656200031b565b5b601f1960405181603f83601f87011601168101915080821083831117156200039357620003926200031b565b5b81604052838152602092508683858801011115620003b15760006000fd5b600091505b83821015620003d7578282870101518383830101525b8282019150620003b6565b6000838583010152809450505050505b92915050565b6000600060006000600060a08688031215620004095760006000fd5b85516001600160a01b03811681141515620004245760006000fd5b809550506020860151935060408601516001600160401b03808211156200044b5760006000fd5b6200045989838a0162000333565b94506060880151915080821115620004715760006000fd5b50620004808882890162000333565b925050608086015160ff8116811415156200049b5760006000fd5b809150505b9295509295909350565b60008160011c905060018216801515620004c557607f821691505b60208210811415620004e757634e487b7160e01b600052602260045260246000fd5b505b919050565b80600052506000602060002090505b90565b601f8211156200055657600081815260208120601f850160051c810160208610156200052a578190505b601f850160051c820191508090505b8181101562000552578281555b60018101905062000539565b5050505b5050505b565b60008260011b6000198460031b1c1983161790505b92915050565b81516001600160401b038111156200059457620005936200031b565b5b620005ac81620005a58454620004aa565b8462000500565b60006020809150601f831160018114620005e55760008415620005d0578387015190505b620005dc85826200055c565b8655506200064a565b601f198416620005f586620004ee565b60005b828110156200061e5785890151825560018201915084860195505b8481019050620005f8565b50858210156200063e578488015160001960f88860031b161c1981168255505b505060018460011b0185555b5050505050505b565b634e487b7160e01b600052601160045260246000fd5b565b6000600060018092508391505b80851115620006b957816000190482111562000699576200069862000653565b5b80851615620006a85781830292505b818202915084811c94505b62000678565b505b9250929050565b6000821515620006d6576001905062000785565b811515620006e8576000905062000785565b8160018114620007015760028114620007115762000733565b6001915050620007855662000733565b60ff84111562000726576200072562000653565b5b6001841b91505062000785565b5060208310610133831016604e8410600b8410161715620007595782820a905062000785565b6200076583836200066b565b80600019048211156200077d576200077c62000653565b5b808202925050505b92915050565b60006200079c60ff841683620006c2565b90505b92915050565b6000816000190483118215151615620007c357620007c262000653565b5b82820290505b92915050565b60208152600860208201527f546f6f206d756368000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601f60208201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260006060820190505b919050565b600082820190508082111562000868576200086762000653565b5b5b92915050565b60006020820190508282525b92915050565b5b60805161167d620008a56000396000818161048401526106e0015261167d6000f3fe60806040523480156100115760006000fd5b50600436106100e45760003560e01c8063449a52f81161008d578063a457c2d711610067578063a457c2d71461023e578063a9059cbb1461026e578063b72218e31461029e578063dd62ed3e146102bc576100e4565b8063449a52f8146101d457806370a08231146101f057806395d89b4114610220576100e4565b806323b872dd116100be57806323b872dd14610156578063313ce5671461018657806339509351146101a4576100e4565b806306fdde03146100ea578063095ea7b31461010857806318160ddd14610138576100e4565b60006000fd5b6100f26102ec565b6040516100ff9190610ed4565b60405180910390f35b610122600480360381019061011d9190610f76565b610386565b60405161012f9190610fa5565b60405180910390f35b6101406103bc565b60405161014d9190610fb9565b60405180910390f35b610170600480360381019061016b9190610fcb565b6103ce565b60405161017d9190610fa5565b60405180910390f35b61018e610416565b60405161019b919061100a565b60405180910390f35b6101be60048036038101906101b99190610f76565b610432565b6040516101cb9190610fa5565b60405180910390f35b6101ee60048036038101906101e99190610f76565b610482565b005b61020a6004803603810190610205919061101f565b610527565b6040516102179190610fb9565b60405180910390f35b61022861057b565b6040516102359190610ed4565b60405180910390f35b61025860048036038101906102539190610f76565b610615565b6040516102659190610fa5565b60405180910390f35b61028860048036038101906102839190610f76565b6106a8565b6040516102959190610fa5565b60405180910390f35b6102a66106de565b6040516102b39190611044565b60405180910390f35b6102d660048036038101906102d1919061106c565b610702565b6040516102e39190610fb9565b60405180910390f35b6060600360005080546102fe906110a2565b80601f016020809104026020016040519081016040528092919081815260200182805461032a906110a2565b80156103775780601f1061034c57610100808354040283529160200191610377565b820191906000526020600020905b81548152906001019060200180831161035a57829003601f168201915b50505050509050610383565b90565b6000600061039861079763ffffffff16565b90506103ab8185856107a463ffffffff16565b60019150506103b656505b92915050565b600060026000505490506103cb565b90565b600060006103e061079763ffffffff16565b90506103f385828561097f63ffffffff16565b610404858585610a1c63ffffffff16565b600191505061040f56505b9392505050565b6000600560009054906101000a900460ff16905061042f565b90565b6000600061044461079763ffffffff16565b905061047181858561045c858961070263ffffffff16565b610466919061112e565b6107a463ffffffff16565b600191505061047c56505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610512576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105099061114d565b60405180910390fd5b6105228282610cc863ffffffff16565b5b5050565b6000600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610576565b919050565b60606004600050805461058d906110a2565b80601f01602080910402602001604051908101604052809291908181526020018280546105b9906110a2565b80156106065780601f106105db57610100808354040283529160200191610606565b820191906000526020600020905b8154815290600101906020018083116105e957829003601f168201915b50505050509050610612565b90565b6000600061062761079763ffffffff16565b9050600061063b828661070263ffffffff16565b9050838110151515610682576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106799061118c565b60405180910390fd5b61069582868684036107a463ffffffff16565b6001925050506106a25650505b92915050565b600060006106ba61079763ffffffff16565b90506106cd818585610a1c63ffffffff16565b60019150506106d856505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610791565b92915050565b60003390506107a1565b90565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610816576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080d906111f1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610888576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087f90611256565b60405180910390fd5b80600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109719190610fb9565b60405180910390a35b505050565b6000610991848461070263ffffffff16565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81141515610a1557818110151515610a01576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f8906112bb565b60405180910390fd5b610a1484848484036107a463ffffffff16565b5b505b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610a8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a85906112fa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610b00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af79061135f565b60405180910390fd5b610b11838383610d4963ffffffff16565b6000600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050818110151515610ba0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b97906113c4565b60405180910390fd5b818103600060005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555081600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054610c42919061112e565b9250508190909055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ca89190610fb9565b60405180910390a3610cc1848484610d4f63ffffffff16565b505b505050565b610cd661041663ffffffff16565b600a610ce2919061156b565b62989680610cf09190611583565b8111151515610d34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2b906115c8565b60405180910390fd5b610d448282610d5563ffffffff16565b5b5050565b5b505050565b5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610dc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dbe90611607565b60405180910390fd5b610dd960008383610d4963ffffffff16565b80600260008282825054610ded919061112e565b92505081909090555080600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054610e4a919061112e565b9250508190909055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610eb19190610fb9565b60405180910390a3610ecb60008383610d4f63ffffffff16565b5b505056611646565b600060208083528351808285015260005b81811015610f0557828187010151604082870101525b8281019050610ee5565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565b60008135905073ffffffffffffffffffffffffffffffffffffffff811681141515610f705760006000fd5b5b919050565b6000600060408385031215610f8b5760006000fd5b610f9483610f45565b9150602083013590505b9250929050565b600060208201905082151582525b92915050565b60006020820190508282525b92915050565b60006000600060608486031215610fe25760006000fd5b610feb84610f45565b9250610ff960208501610f45565b9150604084013590505b9250925092565b600060208201905060ff831682525b92915050565b6000602082840312156110325760006000fd5b61103b82610f45565b90505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60006000604083850312156110815760006000fd5b61108a83610f45565b915061109860208401610f45565b90505b9250929050565b60008160011c9050600182168015156110bc57607f821691505b602082108114156110f6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b6000828201905080821115611146576111456110fd565b5b5b92915050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b60208152602560208201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760408201527f207a65726f000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602460208201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602260208201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560408201527f7373000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601d60208201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604082015260006060820190505b919050565b60208152602560208201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602360208201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201527f6573730000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602660208201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408201527f616c616e63650000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b6000600060018092508391505b8085111561148f57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611471576114706110fd565b5b8085161561147f5781830292505b818202915084811c94505b611436565b505b9250929050565b60008215156114aa5760019050611565565b8115156114ba5760009050611565565b81600181146114d057600281146114de576114fc565b6001915050611565566114fc565b60ff8411156114f0576114ef6110fd565b5b6001841b915050611565565b5060208310610133831016604e8410600b84101617156115205782820a9050611565565b61152a8383611429565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561155d5761155c6110fd565b5b808202925050505b92915050565b600061157a60ff841683611498565b90505b92915050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156115bc576115bb6110fd565b5b82820290505b92915050565b60208152600860208201527f546f6f206d756368000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601f60208201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260006060820190505b919050565bfea2646970667358221220b1779ab9a8427b68373a34762b7de9b629f0ba64efc6509b77d99d8800fe0fdb64736f6c63430008100033";
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
    static createInterface(): TestnetERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestnetERC20;
}
export {};
