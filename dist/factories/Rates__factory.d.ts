import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Rates, RatesInterface, ConstructorParamsStruct } from "../Rates";
declare type RatesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Rates__factory extends ContractFactory {
    constructor(...args: RatesConstructorParams);
    deploy(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Rates>;
    getDeployTransaction(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Rates;
    connect(signer: Signer): Rates__factory;
    static readonly bytecode = "0x60e06040526001600260005090905562014a78600460006101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550348015620000485760006000fd5b50604051620048bf380380620048bf83398181016040528101906200006e919062000abe565b5b806000015181602001515b815b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b5050806040015173ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150508060600151600360005090805190602001906200015292919062000940565b506040518060c0016040528066038d7ea4c680006fffffffffffffffffffffffffffffffff1681526020016611c37937e080006fffffffffffffffffffffffffffffffff1681526020016611c37937e080006fffffffffffffffffffffffffffffffff168152602001600567ffffffffffffffff1681526020017ffffffffffffffffffffffffffffffffffffffffffffffffffdeb17cb73b10000600f0b81526020016706f05b59d3b20000600f0b815260200150600560005060008201518160000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060208201518160000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060408201518160010160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060608201518160010160106101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060808201518160020160006101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff16021790555060a08201518160020160106101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff1602179055509050506040518060600160405280666a94d74f4300008152602001620003e0600460009054906101000a900467ffffffffffffffff16620003c2620007ec60201b60201c565b67ffffffffffffffff166200080e60201b620021261790919060201c565b67ffffffffffffffff16815260200168056bc75e2d631000006fffffffffffffffffffffffffffffffff16815260200150600860005060008201518160000160005090905560208201518160010160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060408201518160010160086101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555090505060006040518061010001604052806380ddbdb460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001635fd019ad60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001636e16ead260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200163d3ab388860e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200163ee47304d60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200163eec3f6f160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001635d8350b460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200163fc2a11e860e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020015090506000600090505b81506008811015620007a15760016001600050600084846008811015156200072a57fe5b60200201517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055505b808060010191505062000706565b5033600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b5062000ba3565b60006200080642620008ac60201b620021c317909060201c565b905080505b90565b60008267ffffffffffffffff1682840191508167ffffffffffffffff1610151515620008a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b6000680100000000000000008210151562000932576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b8190506200093b565b919050565b828054828255906000526020600020908101928215620009bc579160200282015b82811115620009bb5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000961565b5b509050620009cb9190620009cf565b5090565b620009d5565b80821115620009f15760008181506000905550600101620009d5565b50905662000ba2565b600082601f830112151562000a0d578081fd5b815160206001600160401b038083111562000a2457fe5b8183026040518382820101818110848211171562000a3e57fe5b806040525080925084815283810192508387018885848a0101111562000a62578687fd5b8692505b8583101562000a9757805162000a7c8162000b85565b80855250848401935084810190505b60018301925062000a66565b5080955050505050505b92915050565b60008151905062000ab88162000b85565b5b919050565b60006020828403121562000ad0578081fd5b81516001600160401b038082111562000ae7578283fd5b81840191506080828603121562000afc578283fd5b60405160808101818110838211171562000b1257fe5b8060405250825162000b248162000b85565b80825250602083015162000b388162000b85565b8060208301525062000b4d6040840162000aa7565b604082015260608301518281111562000b64578485fd5b62000b7287828601620009fa565b6060830152508093505050505b92915050565b6001600160a01b0381168114151562000b9e5760006000fd5b5b50565b5b60805160601c60a05160601c60c05160601c613caf62000c10600039806108ab52806115225280611d49528061210452508061263d528061290652508061053c528061068752806112b752806118445280611c8e528061225a528061275e5280612ba95250613caf6000f3fe60806040523480156100115760006000fd5b50600436106101d45760003560e01c806380ddbdb411610105578063c381c1e6116100a3578063ee47304d11610072578063ee47304d146104a8578063eec3f6f1146104c4578063fc2a11e8146104e0578063ff0eccf6146104fc576101d4565b8063c381c1e614610448578063d3ab388814610464578063d5f3948814610480578063e1c7392a1461049e576101d4565b8063a03cada9116100df578063a03cada9146103e4578063a0fc0eda14610402578063a2e6204514610420578063ab658be21461042a576101d4565b806380ddbdb41461037557806384333cc71461039157806395563b47146103c1576101d4565b80635d8350b4116101725780636dc14c8e1161014c5780636dc14c8e146103015780636e16ead21461031d57806375f12b21146103395780637e7e8eec14610357576101d4565b80635d8350b4146102ab5780635fd019ad146102c75780636d7fa664146102e3576101d4565b8063150147d7116101ae578063150147d714610232578063178d12261461024e57806319a6e9e61461026d5780631f244faf1461028b576101d4565b806307da68f5146101da5780630c340a24146101e4578063113cf1ab14610202576101d4565b60006000fd5b6101e261051a565b005b6101ec61053a565b6040516101f99190613835565b60405180910390f35b61021c600480360381019061021791906135c5565b61055e565b6040516102299190613821565b60405180910390f35b61024c60048036038101906102479190613639565b610583565b005b61025661067f565b604051610264929190613bd5565b60405180910390f35b610275610adb565b6040516102829190613bee565b60405180910390f35b610293610af5565b6040516102a29392919061390e565b60405180910390f35b6102c560048036038101906102c0919061371f565b610b43565b005b6102e160048036038101906102dc91906136aa565b610be6565b005b6102eb610cb6565b6040516102f89190613821565b60405180910390f35b61031b6004803603810190610316919061368e565b610cd2565b005b610337600480360381019061033291906136aa565b610d73565b005b610341610e25565b60405161034e9190613821565b60405180910390f35b61035f610e38565b60405161036c9190613bc3565b60405180910390f35b61038f600480360381019061038a91906136aa565b610efc565b005b6103ab60048036038101906103a691906136e7565b610fae565b6040516103b8919061385d565b60405180910390f35b6103c9610ff4565b6040516103db96959493929190613b66565b60405180910390f35b6103ec6110a3565b6040516103f99190613754565b60405180910390f35b61040a6110c9565b6040516104179190613bc3565b60405180910390f35b6104286110fa565b005b610432611937565b60405161043f91906137bd565b60405180910390f35b610462600480360381019061045d9190613639565b6119cd565b005b61047e6004803603810190610479919061371f565b611b69565b005b610488611be2565b6040516104959190613754565b60405180910390f35b6104a6611c08565b005b6104c260048036038101906104bd9190613660565b611e8d565b005b6104de60048036038101906104d99190613660565b611f43565b005b6104fa60048036038101906104f59190613571565b611ff9565b005b610504612102565b604051610511919061385d565b60405180910390f35b61052861225563ffffffff16565b6105366122b563ffffffff16565b5b5b565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b61059161225563ffffffff16565b61062a600360005080548060200260200160405190810160405280929190818152602001828054801561061957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116105cf575b5050505050826122ff63ffffffff16565b600360005090805190602001906106429291906134c0565b507fe0c45385660471da2afc510ebde41d5f9361442fcda1f7a196e554fe3f6b5611816040516106729190613754565b60405180910390a15b5b50565b6000600060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d3419bf36040518163ffffffff1660e01b815260040160206040518083038186803b1580156106ec5760006000fd5b505afa158015610701573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107259190613612565b90506000600360005080549050905060008167ffffffffffffffff8111801561074e5760006000fd5b5060405190808252806020026020018201604052801561077d5781602001602082028036833780820191505090505b5090506000600090505b82811015610888578373ffffffffffffffffffffffffffffffffffffffff16633c63a9cd6003600050838154811015156107bd57fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016040518363ffffffff1660e01b8152600401610809929190613885565b60206040518083038186803b1580156108225760006000fd5b505afa158015610837573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085b9190613703565b828281518110151561086957fe5b60200260200101909081815260200150505b8080600101915050610787565b50610946818473ffffffffffffffffffffffffffffffffffffffff16633c63a9cd7f000000000000000000000000000000000000000000000000000000000000000060016040518363ffffffff1660e01b81526004016108e9929190613885565b60206040518083038186803b1580156109025760006000fd5b505afa158015610917573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093b9190613703565b61247063ffffffff16565b94508450610ac260086000506000016000505460056000506040518060c00160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016001820160109054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016002820160009054906101000a9004600f0b600f0b600f0b81526020016002820160109054906101000a9004600f0b600f0b600f0b81526020015050876124bb63ffffffff16565b93508350848494509450505050610ad7565050505b9091565b600460009054906101000a900467ffffffffffffffff1681565b60086000508060000160005054908060010160009054906101000a900467ffffffffffffffff16908060010160089054906101000a90046fffffffffffffffffffffffffffffffff16905083565b610b5161225563ffffffff16565b80600460006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000600460009054906101000a900467ffffffffffffffff1667ffffffffffffffff16111515610baa5760006000fd5b7f517c1f8e39144dc2198ca9c7f0cb04ac8ecbffef718abb8a24b56d2ae881e0fe81604051610bd99190613bee565b60405180910390a15b5b50565b610bf461225563ffffffff16565b806fffffffffffffffffffffffffffffffff166000108015610c2f5750670de0b6b3a7640000816fffffffffffffffffffffffffffffffff16105b1515610c3b5760006000fd5b80600560005060000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055507f265b81e00f507e5ddfcde5e43ed2952f0462df065bf26eebc1c5bf184ab31cd381604051610ca99190613b42565b60405180910390a15b5b50565b6000600060086000506000016000505412159050610ccf565b90565b610ce061263b63ffffffff16565b610cee61274e63ffffffff16565b610d4d600460089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461287b63ffffffff16565b8060086000506000016000508190909055505b5b610d6f6128f763ffffffff16565b5b50565b610d8161225563ffffffff16565b670de0b6b3a7640000816fffffffffffffffffffffffffffffffff16101515610daa5760006000fd5b80600560005060010160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055507fbf56c5a0ff5b41763e4284940e0db09730e97d817e41e1396be9b9f2a9ed38fb81604051610e189190613b42565b60405180910390a15b5b50565b600060009054906101000a900460ff1681565b6000610ef26008600050604051806060016040529081600082016000505481526020016001820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160089054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020015050610ee761298963ffffffff16565b6129a463ffffffff16565b9050610ef9565b90565b610f0a61225563ffffffff16565b670de0b6b3a7640000816fffffffffffffffffffffffffffffffff16101515610f335760006000fd5b80600560005060000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055507f94ff7d36ecf3da5a6cb7d7be5b429c938850be85f46d1d256c0dafe008b590a381604051610fa19190613b42565b60405180910390a15b5b50565b60036000508181548110610fc157600080fd5b906000526020600020900160005b9150909054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60056000508060000160009054906101000a90046fffffffffffffffffffffffffffffffff16908060000160109054906101000a90046fffffffffffffffffffffffffffffffff16908060010160009054906101000a90046fffffffffffffffffffffffffffffffff16908060010160109054906101000a900467ffffffffffffffff16908060020160009054906101000a9004600f0b908060020160109054906101000a9004600f0b905086565b600460089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060006008600050600001600050549050600081126110e957806110ee565b806000035b9150506110f756505b90565b61110861263b63ffffffff16565b61111661274e63ffffffff16565b600073ffffffffffffffffffffffffffffffffffffffff16600460089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156111a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a090613a07565b60405180910390fd5b60006008600050604051806060016040529081600082016000505481526020016001820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160089054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020015050905061125761298963ffffffff16565b67ffffffffffffffff16816020015167ffffffffffffffff16111515156112b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112aa90613a85565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d3419bf36040518163ffffffff1660e01b815260040160206040518083038186803b15801561131c5760006000fd5b505afa158015611331573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113559190613612565b905060006003600050805490509050600081141515156113aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a190613989565b60405180910390fd5b60008167ffffffffffffffff811180156113c45760006000fd5b506040519080825280602002602001820160405280156113f35781602001602082028036833780820191505090505b5090506000600090505b828110156114fd578373ffffffffffffffffffffffffffffffffffffffff1663ce403c1360036000508381548110151561143357fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b815260040161147c919061385d565b602060405180830381600087803b1580156114975760006000fd5b505af11580156114ac573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d09190613703565b82828151811015156114de57fe5b60200260200101909081815260200150505b80806001019150506113fd565b5060006115bc828573ffffffffffffffffffffffffffffffffffffffff1663ce403c137f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040161155d919061385d565b602060405180830381600087803b1580156115785760006000fd5b505af115801561158d573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b19190613703565b61247063ffffffff16565b90506000604051806060016040528061173c886000015160056000506040518060c00160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016001820160109054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016002820160009054906101000a9004600f0b600f0b600f0b81526020016002820160109054906101000a9004600f0b600f0b600f0b81526020015050866124bb63ffffffff16565b8152602001611766600460009054906101000a900467ffffffffffffffff16612a9563ffffffff16565b67ffffffffffffffff1681526020016117a26117958961178a61298963ffffffff16565b6129a463ffffffff16565b612acb909063ffffffff16565b6fffffffffffffffffffffffffffffffff16815260200150905080600860005060008201518160000160005090905560208201518160010160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060408201518160010160086101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055509050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd7a3153383604001516040518363ffffffff1660e01b81526004016118a192919061377c565b600060405180830381600087803b1580156118bc5760006000fd5b505af11580156118d1573d600060003e3d6000fd5b505050507f9f912bcb7b057a4f10fbbee5785670aecb2ab545144237646e17398d55de72dc8160000151838360400151846020015160405161191694939291906138cb565b60405180910390a15050505050505b5b6119346128f763ffffffff16565b5b565b606060036000508054806020026020016040519081016040528092919081815260200182805480156119be57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611974575b505050505090506119ca565b90565b6119db61225563ffffffff16565b611a746003600050805480602002602001604051908101604052809291908181526020018280548015611a6357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611a19575b505050505082612b6563ffffffff16565b151515611ab6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aad90613b03565b60405180910390fd5b611ac581612ba763ffffffff16565b600360005081908060018154018082558091505060019003906000526020600020900160005b9091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd815dd7ac4a8a5f5f1d3b09c4fb82cdf04e21e127619c6fca60b8f80e420492a81604051611b5c9190613754565b60405180910390a15b5b50565b611b7761225563ffffffff16565b80600560005060010160106101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507fcf58c4278b7362e258dd9a03400b38f692197a7ceb18b1c31ff440c1f9d5062f81604051611bd59190613bee565b60405180910390a15b5b50565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611c67600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461287b63ffffffff16565b600a60006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690557f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d3419bf36040518163ffffffff1660e01b815260040160206040518083038186803b158015611cf35760006000fd5b505afa158015611d08573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d2c9190613612565b73ffffffffffffffffffffffffffffffffffffffff1663532cec7c7f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b8152600401611d84919061385d565b60206040518083038186803b158015611d9d5760006000fd5b505afa158015611db2573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dd69190613598565b1515611e17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e0e906139c8565b60405180910390fd5b6000600090505b600360005080549050811015611e8957611e7b600360005082815481101515611e4357fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16612ba763ffffffff16565b5b8080600101915050611e1e565b505b565b611e9b61225563ffffffff16565b600560005060020160109054906101000a9004600f0b600f0b81600f0b121515611ec55760006000fd5b80600560005060020160006101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff1602179055507fc24e66dcb27dbd285d47a59317af2469aaec7df1cbef5058516e9f09c363a37581604051611f3691906138b6565b60405180910390a15b5b50565b611f5161225563ffffffff16565b80600f0b600560005060020160009054906101000a9004600f0b600f0b121515611f7b5760006000fd5b80600560005060020160106101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff1602179055507fddfcfaec23708d16c646e9e109985f7db635f6a645245e87946f7d2f64f4bb6a81604051611fec91906138b6565b60405180910390a15b5b50565b61200761225563ffffffff16565b61201681612cb763ffffffff16565b1515612057576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161204e90613ac4565b60405180910390fd5b80600460086101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fe0b059e7224cb02077d499d3dcdb8b5fd92486104e56578599357ed67977c1f860405160405180910390a25b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008267ffffffffffffffff1682840191508167ffffffffffffffff16101515156121bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b60006801000000000000000082101515612248576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050612250565b919050565b6122b27f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461287b63ffffffff16565b5b565b6001600060006101000a81548160ff0219169083151502179055507f7acc84e34091ae817647a4c49116f5cc07f319078ba80f8f5fde37ea7e25cbd660405160405180910390a15b565b606060006123138484612cd163ffffffff16565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811415151561237a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123719061394a565b60405180910390fd5b6000600185510367ffffffffffffffff811180156123985760006000fd5b506040519080825280602002602001820160405280156123c75781602001602082028036833780820191505090505b50905060006000600090505b865181101561245b57838114151561244d5786818151811015156123f357fe5b6020026020010151838380600101945081518110151561240f57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815260200150505b5b80806001019150506123d3565b5081935050505061246a565050505b92915050565b60008161248284612d7263ffffffff16565b760a70c3c40a64e6c51999090b65f67d92400000000000008115156124a357fe5b048115156124ad57fe5b0490506124b5565b92915050565b60006000670de0b6b3a7640000831090506000816124e357670de0b6b3a764000084036124ef565b83670de0b6b3a7640000035b905084600001516fffffffffffffffffffffffffffffffff16811015156125f057600061256761255a600188602001516fffffffffffffffffffffffffffffffff168581151561253b57fe5b0401886060015167ffffffffffffffff16612ff590919063ffffffff16565b612acb909063ffffffff16565b905060006125b66125978389604001516fffffffffffffffffffffffffffffffff1661301390919063ffffffff16565b6fffffffffffffffffffffffffffffffff1661310b909063ffffffff16565b9050836125d5576125d081896131b490919063ffffffff16565b6125e9565b6125e8818961324b90919063ffffffff16565b5b9750875050505b8460800151600f0b86121561260c578460800151600f0b955085505b8460a00151600f0b861315612628578460a00151600f0b955085505b85925050506126345650505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e97dcb626040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156126a45760006000fd5b505af11580156126b9573d600060003e3d6000fd5b5050505060026002600050541415151561273e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4c50205265656e7472616e63790000000000000000000000000000000000000081526020015060200191505060405180910390fd5b600260026000508190909055505b565b61275c6132e263ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bf86d6906040518163ffffffff1660e01b815260040160206040518083038186803b1580156127c35760006000fd5b505afa1580156127d8573d600060003e3d6000fd5b505050506040513d60208110156127ef5760006000fd5b8101908080519060200190929190505050151515612878576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f50726f746f636f6c2073687574646f776e00000000000000000000000000000081526020015060200191505060405180910390fd5b5b565b8015156128f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b50565b600160026000508190909055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561296d5760006000fd5b505af1158015612982573d600060003e3d6000fd5b505050505b565b600061299c426121c3909063ffffffff16565b905080505b90565b6000826020015167ffffffffffffffff168267ffffffffffffffff161115156129d05760009050612a8f565b6000600284604001516fffffffffffffffffffffffffffffffff168115156129f457fe5b046fffffffffffffffffffffffffffffffff1690506000612a328560200151850367ffffffffffffffff166107088461336d9092919063ffffffff16565b82019050612a84612a63600587604001516fffffffffffffffffffffffffffffffff1661301390919063ffffffff16565b6fffffffffffffffffffffffffffffffff1682612ff590919063ffffffff16565b92505050612a8f5650505b92915050565b6000612ac182612aa961298963ffffffff16565b67ffffffffffffffff1661212690919063ffffffff16565b905080505b919050565b600070010000000000000000000000000000000082101515612b58576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203132382062697473000000000000000000000000000081526020015060200191505060405180910390fd5b819050612b60565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612b988484612cd163ffffffff16565b14159050612ba1565b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d3419bf36040518163ffffffff1660e01b815260040160206040518083038186803b158015612c0e5760006000fd5b505afa158015612c23573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c479190613612565b73ffffffffffffffffffffffffffffffffffffffff16637c5b9011826040518263ffffffff1660e01b8152600401612c7f919061385d565b600060405180830381600087803b158015612c9a5760006000fd5b505af1158015612caf573d600060003e3d6000fd5b505050505b50565b60006000823b905060008111915050612ccc56505b919050565b60006000600090505b8351811015612d43578273ffffffffffffffffffffffffffffffffffffffff168482815181101515612d0857fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415612d355780915050612d6c565b5b8080600101915050612cda565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050612d6c565b92915050565b6000600082519050600081111515612dbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612db690613a46565b60405180910390fd5b6000600060005b6002841115612f7257856000815181101515612dde57fe5b602002602001015191508150856000815181101515612df957fe5b6020026020010151905080506000600190505b84811015612e58578681815181101515612e2257fe5b60200260200101519350835082841015612e3c5783925082505b81841115612e4a5783915081505b5b8080600101915050612e0c565b5080821415612e6d5781945050505050612ff0565b60006002850367ffffffffffffffff81118015612e8a5760006000fd5b50604051908082528060200260200182016040528015612eb95781602001602082028036833780820191505090505b5090506000600060006000600090505b88811015612f5b578a81815181101515612edf57fe5b6020026020010151975087508688148015612ef8575081155b15612f0857600191508150612f4d565b8588148015612f15575082155b15612f2557600192508250612f4c565b878585806001019650815181101515612f3a57fe5b60200260200101909081815260200150505b5b5b8080600101915050612ec9565b506002880397508750839950895050505050612dc6565b6001841415612fa157856000815181101515612f8a57fe5b6020026020010151945050505050612ff056612feb565b612fe0866001815181101515612fb357fe5b6020026020010151876000815181101515612fca57fe5b602002602001015161346e90919063ffffffff16565b945050505050612ff0565b505050505b919050565b60008183106130045781613006565b825b905061300d565b92915050565b60006000826fffffffffffffffffffffffffffffffff16148061308d5750826fffffffffffffffffffffffffffffffff16826fffffffffffffffffffffffffffffffff168385029250826fffffffffffffffffffffffffffffffff1681151561307857fe5b046fffffffffffffffffffffffffffffffff16145b1515613104576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6d756c2d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b60007f8000000000000000000000000000000000000000000000000000000000000000821015156131a7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f746f6f2062696720666f7220696e74323536000000000000000000000000000081526020015060200191505060405180910390fd5b8190506131af565b919050565b600060008284039050600083121580156131ce5750838113155b806131e457506000831280156131e357508381135b5b151561323b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180613c566024913960400191505060405180910390fd5b8091505061324556505b92915050565b600060008284019050600083121580156132655750838112155b8061327b575060008312801561327a57508381125b5b15156132d2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180613c356021913960400191505060405180910390fd5b809150506132dc56505b92915050565b600060009054906101000a900460ff1615151561336a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f436f6e74726163742069732073746f707065640000000000000000000000000081526020015060200191505060405180910390fd5b5b565b60006000600060001985870985870292508281108382030391505060008114156133b0576000841115156133a15760006000fd5b83820492508292505050613467565b80841115156133bf5760006000fd5b60008486880990508281118203915080830392506000858660000316905080860495508084049350600181826000030401905080830284179350835060006002876003021890508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508085029550855085955050505050506134675650505050505b9392505050565b6000600260028381151561347e57fe5b0660028581151561348b57fe5b060181151561349657fe5b046002838115156134a357fe5b046002858115156134b057fe5b04010190506134ba565b92915050565b828054828255906000526020600020908101928215613539579160200282015b828111156135385782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906134e0565b5b509050613546919061354a565b5090565b61354f565b80821115613569576000818150600090555060010161354f565b509056613c33565b600060208284031215613582578081fd5b813561358d81613c0a565b809150505b92915050565b6000602082840312156135a9578081fd5b8151801515811415156135ba578182fd5b809150505b92915050565b6000602082840312156135d6578081fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681141515613607578182fd5b809150505b92915050565b600060208284031215613623578081fd5b815161362e81613c0a565b809150505b92915050565b60006020828403121561364a578081fd5b813561365581613c0a565b809150505b92915050565b600060208284031215613671578081fd5b813580600f0b81141515613683578182fd5b809150505b92915050565b60006020828403121561369f578081fd5b813590505b92915050565b6000602082840312156136bb578081fd5b81356fffffffffffffffffffffffffffffffff8116811415156136dc578182fd5b809150505b92915050565b6000602082840312156136f8578081fd5b813590505b92915050565b600060208284031215613714578081fd5b815190505b92915050565b600060208284031215613730578081fd5b813567ffffffffffffffff811681141515613749578182fd5b809150505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682526fffffffffffffffffffffffffffffffff831660208301525b9392505050565b600060208083018184528085518083526040860191508387019250845b818110156138125773ffffffffffffffffffffffffffffffffffffffff8451168352848301925084840193505b6001810190506137da565b50508093505050505b92915050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff8416825282151560208301525b9392505050565b600060208201905082600f0b82525b92915050565b60006080820190508582528460208301526fffffffffffffffffffffffffffffffff8416604083015267ffffffffffffffff831660608301525b95945050505050565b600060608201905084825267ffffffffffffffff841660208301526fffffffffffffffffffffffffffffffff831660408301525b949350505050565b600060208252600960208301527f4e6f7420666f756e64000000000000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601260208301527f4e6f207265666572656e636520706f6f6c73000000000000000000000000000060408301526060820190505b919050565b600060208252601460208301527f506f6f6c206e6f7420696e697469616c697a656400000000000000000000000060408301526060820190505b919050565b600060208252601960208301527f5261746573207570646174652064656c6567617465207365740000000000000060408301526060820190505b919050565b600060208252600560208301527f656d70747900000000000000000000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601060208301527f557064617465206e6f742072656164790000000000000000000000000000000060408301526060820190505b919050565b600060208252600e60208301527f4e6f74206120636f6e747261637400000000000000000000000000000000000060408301526060820190505b919050565b600060208252600d60208301527f416c72656164792061646465640000000000000000000000000000000000000060408301526060820190505b919050565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b600060c0820190506fffffffffffffffffffffffffffffffff8089168352808816602084015280871660408401525067ffffffffffffffff8516606083015283600f0b608083015282600f0b60a08301525b979650505050505050565b60006020820190508282525b92915050565b60006040820190508382528260208301525b9392505050565b600060208201905067ffffffffffffffff831682525b92915050565b73ffffffffffffffffffffffffffffffffffffffff811681141515613c2f5760006000fd5b5b50565bfe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f775369676e6564536166654d6174683a207375627472616374696f6e206f766572666c6f77a2646970667358221220dc5d4072e525e8c468dc814967bfa1f5ea4c5c45092e0ad1e05681f05742778964736f6c63430007060033";
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
    static createInterface(): RatesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Rates;
}
export {};
