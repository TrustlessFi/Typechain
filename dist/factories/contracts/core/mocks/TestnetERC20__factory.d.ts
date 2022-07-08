import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestnetERC20, TestnetERC20Interface } from "../../../../contracts/core/mocks/TestnetERC20";
declare type TestnetERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestnetERC20__factory extends ContractFactory {
    constructor(...args: TestnetERC20ConstructorParams);
    deploy(_initialHolder: string, initialTokens: BigNumberish, _name: string, _symbol: string, _decimalsOverride: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestnetERC20>;
    getDeployTransaction(_initialHolder: string, initialTokens: BigNumberish, _name: string, _symbol: string, _decimalsOverride: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestnetERC20;
    connect(signer: Signer): TestnetERC20__factory;
    static readonly bytecode = "0x60a0604052348015620000125760006000fd5b5060405162001f8838038062001f888339818101604052810190620000389190620004c1565b5b82825b81600360005090805190602001906200005792919062000324565b5080600460005090805190602001906200007392919062000324565b505b505080600560006101000a81548160ff021916908360ff160217905550620000a48585620000e760201b60201c565b8473ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b5050505050620007f2565b620000f76200017360201b60201c565b600a620001059190620006b6565b62989680620001159190620006d0565b81111515156200015c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200015390620006fa565b60405180910390fd5b6200016e82826200019060201b60201c565b5b5050565b6000600560009054906101000a900460ff1690506200018d565b90565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151562000205576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001fc9062000739565b60405180910390fd5b62000219600083836200031860201b60201c565b806002600082828250546200022f919062000778565b92505081909090555080600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250546200028e919062000778565b9250508190909055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002f791906200079b565b60405180910390a362000313600083836200031e60201b60201c565b5b5050565b5b505050565b5b505050565b8280546200033290620007ad565b90600052602060002090601f016020900481019282620003565760008555620003a7565b82601f106200037157805160ff1916838001178555620003a7565b82800160010185558215620003a7579182015b82811115620003a6578251826000509090559160200191906001019062000384565b5b509050620003b69190620003ba565b5090565b620003c0565b80821115620003dc5760008181506000905550600101620003c0565b509056620007f1565b634e487b7160e01b600052604160045260246000fd5b565b600082601f8301121515620004125760006000fd5b81516001600160401b038082111562000430576200042f620003e5565b5b601f1960405181603f83601f87011601168101915080821083831117156200045d576200045c620003e5565b5b816040528381526020925086838588010111156200047b5760006000fd5b600091505b83821015620004a1578282870101518383830101525b828201915062000480565b83821115620004b35760008385830101525b809450505050505b92915050565b6000600060006000600060a08688031215620004dd5760006000fd5b85516001600160a01b03811681141515620004f85760006000fd5b809550506020860151935060408601516001600160401b03808211156200051f5760006000fd5b6200052d89838a01620003fd565b94506060880151915080821115620005455760006000fd5b506200055488828901620003fd565b925050608086015160ff8116811415156200056f5760006000fd5b809150505b9295509295909350565b634e487b7160e01b600052601160045260246000fd5b565b6000600060018092508391505b80851115620005e4578160001904821115620005c457620005c36200057e565b5b80851615620005d35781830292505b818202915084811c94505b620005a3565b505b9250929050565b6000821515620006015760019050620006b0565b811515620006135760009050620006b0565b81600181146200062c57600281146200063c576200065e565b6001915050620006b0566200065e565b60ff8411156200065157620006506200057e565b5b6001841b915050620006b0565b5060208310610133831016604e8410600b8410161715620006845782820a9050620006b0565b62000690838362000596565b8060001904821115620006a857620006a76200057e565b5b808202925050505b92915050565b6000620006c760ff841683620005ed565b90505b92915050565b6000816000190483118215151615620006ee57620006ed6200057e565b5b82820290505b92915050565b60208152600860208201527f546f6f206d756368000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601f60208201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260006060820190505b919050565b600082198211156200078f576200078e6200057e565b5b82820190505b92915050565b60006020820190508282525b92915050565b60008160011c905060018216801515620007c857607f821691505b60208210811415620007ea57634e487b7160e01b600052602260045260246000fd5b505b919050565b5b60805161177362000815600039600081816104fa01526107cc01526117736000f3fe60806040523480156100115760006000fd5b50600436106100e45760003560e01c8063449a52f81161008d578063a457c2d711610067578063a457c2d71461023e578063a9059cbb1461026e578063b72218e31461029e578063dd62ed3e146102bc576100e4565b8063449a52f8146101d457806370a08231146101f057806395d89b4114610220576100e4565b806323b872dd116100be57806323b872dd14610156578063313ce5671461018657806339509351146101a4576100e4565b806306fdde03146100ea578063095ea7b31461010857806318160ddd14610138576100e4565b60006000fd5b6100f26102ec565b6040516100ff9190610fc0565b60405180910390f35b610122600480360381019061011d919061106b565b610386565b60405161012f919061109a565b60405180910390f35b6101406103bc565b60405161014d91906110ae565b60405180910390f35b610170600480360381019061016b91906110c0565b6103ce565b60405161017d919061109a565b60405180910390f35b61018e610416565b60405161019b91906110ff565b60405180910390f35b6101be60048036038101906101b9919061106b565b610432565b6040516101cb919061109a565b60405180910390f35b6101ee60048036038101906101e9919061106b565b6104f8565b005b61020a60048036038101906102059190611114565b61059d565b60405161021791906110ae565b60405180910390f35b6102286105f1565b6040516102359190610fc0565b60405180910390f35b6102586004803603810190610253919061106b565b61068b565b604051610265919061109a565b60405180910390f35b6102886004803603810190610283919061106b565b610794565b604051610295919061109a565b60405180910390f35b6102a66107ca565b6040516102b39190611139565b60405180910390f35b6102d660048036038101906102d19190611161565b6107ee565b6040516102e391906110ae565b60405180910390f35b6060600360005080546102fe90611197565b80601f016020809104026020016040519081016040528092919081815260200182805461032a90611197565b80156103775780601f1061034c57610100808354040283529160200191610377565b820191906000526020600020905b81548152906001019060200180831161035a57829003601f168201915b50505050509050610383565b90565b6000600061039861088363ffffffff16565b90506103ab81858561089063ffffffff16565b60019150506103b656505b92915050565b600060026000505490506103cb565b90565b600060006103e061088363ffffffff16565b90506103f3858285610a6b63ffffffff16565b610404858585610b0863ffffffff16565b600191505061040f56505b9392505050565b6000600560009054906101000a900460ff16905061042f565b90565b6000600061044461088363ffffffff16565b90506104e7818585600160005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050546104dc9190611223565b61089063ffffffff16565b60019150506104f256505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610588576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057f90611243565b60405180910390fd5b6105988282610db463ffffffff16565b5b5050565b6000600060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490506105ec565b919050565b60606004600050805461060390611197565b80601f016020809104026020016040519081016040528092919081815260200182805461062f90611197565b801561067c5780601f106106515761010080835404028352916020019161067c565b820191906000526020600020905b81548152906001019060200180831161065f57829003601f168201915b50505050509050610688565b90565b6000600061069d61088363ffffffff16565b90506000600160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054905083811015151561076e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076590611282565b60405180910390fd5b610781828686840361089063ffffffff16565b60019250505061078e5650505b92915050565b600060006107a661088363ffffffff16565b90506107b9818585610b0863ffffffff16565b60019150506107c456505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054905061087d565b92915050565b600033905061088d565b90565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610902576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f9906112e7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610974576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096b9061134c565b60405180910390fd5b80600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a5d91906110ae565b60405180910390a35b505050565b6000610a7d84846107ee63ffffffff16565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81141515610b0157818110151515610aed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae4906113b1565b60405180910390fd5b610b00848484840361089063ffffffff16565b5b505b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610b7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b71906113f0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610bec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be390611455565b60405180910390fd5b610bfd838383610e3563ffffffff16565b6000600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050818110151515610c8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c83906114ba565b60405180910390fd5b818103600060005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555081600060005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054610d2e9190611223565b9250508190909055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d9491906110ae565b60405180910390a3610dad848484610e3b63ffffffff16565b505b505050565b610dc261041663ffffffff16565b600a610dce9190611661565b62989680610ddc9190611679565b8111151515610e20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e17906116be565b60405180910390fd5b610e308282610e4163ffffffff16565b5b5050565b5b505050565b5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610eb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eaa906116fd565b60405180910390fd5b610ec560008383610e3563ffffffff16565b80600260008282825054610ed99190611223565b92505081909090555080600060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054610f369190611223565b9250508190909055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f9d91906110ae565b60405180910390a3610fb760008383610e3b63ffffffff16565b5b50505661173c565b600060208083528351808285015260005b81811015610ff157828187010151604082870101525b8281019050610fd1565b81811115611003576000604083870101525b5060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565b60008135905073ffffffffffffffffffffffffffffffffffffffff8116811415156110655760006000fd5b5b919050565b60006000604083850312156110805760006000fd5b6110898361103a565b9150602083013590505b9250929050565b600060208201905082151582525b92915050565b60006020820190508282525b92915050565b600060006000606084860312156110d75760006000fd5b6110e08461103a565b92506110ee6020850161103a565b9150604084013590505b9250925092565b600060208201905060ff831682525b92915050565b6000602082840312156111275760006000fd5b6111308261103a565b90505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60006000604083850312156111765760006000fd5b61117f8361103a565b915061118d6020840161103a565b90505b9250929050565b60008160011c9050600182168015156111b157607f821691505b602082108114156111eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b60008219821115611237576112366111f2565b5b82820190505b92915050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b60208152602560208201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760408201527f207a65726f000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602460208201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602260208201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560408201527f7373000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601d60208201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604082015260006060820190505b919050565b60208152602560208201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602360208201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201527f6573730000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602660208201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408201527f616c616e63650000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b6000600060018092508391505b8085111561158557817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611567576115666111f2565b5b808516156115755781830292505b818202915084811c94505b61152c565b505b9250929050565b60008215156115a0576001905061165b565b8115156115b0576000905061165b565b81600181146115c657600281146115d4576115f2565b600191505061165b566115f2565b60ff8411156115e6576115e56111f2565b5b6001841b91505061165b565b5060208310610133831016604e8410600b84101617156116165782820a905061165b565b611620838361151f565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611653576116526111f2565b5b808202925050505b92915050565b600061167060ff84168361158e565b90505b92915050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156116b2576116b16111f2565b5b82820290505b92915050565b60208152600860208201527f546f6f206d756368000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601f60208201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260006060820190505b919050565bfea26469706673582212209e7f4286fdf68f10044ae60928c9662cea975670ed89e3faa8ffe27a8c22fb5264736f6c634300080c0033";
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
