import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HuePositionNFT, HuePositionNFTInterface, ConstructorParamsStruct } from "../HuePositionNFT";
declare type HuePositionNFTConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HuePositionNFT__factory extends ContractFactory {
    constructor(...args: HuePositionNFTConstructorParams);
    deploy(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<HuePositionNFT>;
    getDeployTransaction(params: ConstructorParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): HuePositionNFT;
    connect(signer: Signer): HuePositionNFT__factory;
    static readonly bytecode = "0x60a0604052348015620000125760006000fd5b5060405162003a1e38038062003a1e83398181016040528101906200003891906200036f565b5b6040518060400160405280601b81526020017f48554520546f6b656e697a6564204465627420506f736974696f6e00000000008152602001506040518060400160405280600581526020017f48756544500000000000000000000000000000000000000000000000000000008152602001505b81815b5b620000c86301ffc9a760e01b6200019560201b60201c565b5b8160066000509080519060200190620000e4929190620002a8565b50806007600050908051906020019062000100929190620002a8565b50620001196380ac58cd60e01b6200019560201b60201c565b62000131635b5e139f60e01b6200019560201b60201c565b6200014963780e9d6360e01b6200019560201b60201c565b5b50505b5050806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b50620003cc565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415151562000237576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081526020015060200191505060405180910390fd5b600160006000506000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620002e0576000855562000331565b82601f10620002fb57805160ff191683800117855562000331565b8280016001018555821562000331579182015b828111156200033057825182600050909055916020019190600101906200030e565b5b50905062000340919062000344565b5090565b6200034a565b808211156200036657600081815060009055506001016200034a565b509056620003cb565b60006020828403121562000381578081fd5b604051602081018181106001600160401b03821117156200039e57fe5b806040525082516001600160a01b03811681141515620003bc578283fd5b80825250809150505b92915050565b5b60805160601c61362f620003ef600039806108325280611aee525061362f6000f3fe60806040523480156100115760006000fd5b50600436106101925760003560e01c80634f6ccce7116100e457806395d89b411161008d578063b88d4fde11610067578063b88d4fde14610488578063c87b56dd146104a4578063e985e9c5146104d457610192565b806395d89b41146104325780639dbead4214610450578063a22cb4651461046c57610192565b80636c0360eb116100be5780636c0360eb146103b457806370a08231146103d2578063755edd171461040257610192565b80634f6ccce7146103245780635a11a9ad146103545780636352211e1461038457610192565b806318160ddd116101465780632f745c59116101205780632f745c59146102a857806342842e0e146102d8578063430c2081146102f457610192565b806318160ddd146102505780631c8249051461026e57806323b872dd1461028c57610192565b8063081812fc11610177578063081812fc146101e6578063095ea7b3146102165780630c340a241461023257610192565b806301ffc9a71461019857806306fdde03146101c857610192565b60006000fd5b6101b260048036038101906101ad919061315b565b610504565b6040516101bf91906132a0565b60405180910390f35b6101d0610574565b6040516101dd91906132dc565b60405180910390f35b61020060048036038101906101fb91906131cf565b61061e565b60405161020d9190613220565b60405180910390f35b610230600480360381019061022b919061312a565b6106c9565b005b61023a610830565b60405161024791906132b4565b60405180910390f35b610258610854565b6040516102659190613354565b60405180910390f35b610276610875565b6040516102839190613366565b60405180910390f35b6102a660048036038101906102a19190612fb4565b61088f565b005b6102c260048036038101906102bd919061312a565b61091a565b6040516102cf9190613354565b60405180910390f35b6102f260048036038101906102ed9190612fb4565b610980565b005b61030e6004803603810190610309919061312a565b6109aa565b60405161031b91906132a0565b60405180910390f35b61033e600480360381019061033991906131cf565b6109c9565b60405161034b9190613354565b60405180910390f35b61036e60048036038101906103699190612f51565b6109f6565b60405161037b9190613248565b60405180910390f35b61039e600480360381019061039991906131cf565b610abf565b6040516103ab9190613220565b60405180910390f35b6103bc610afe565b6040516103c991906132dc565b60405180910390f35b6103ec60048036038101906103e79190612f51565b610ba8565b6040516103f99190613354565b60405180910390f35b61041c60048036038101906104179190612f51565b610c93565b6040516104299190613366565b60405180910390f35b61043a610e50565b60405161044791906132dc565b60405180910390f35b61046a600480360381019061046591906131eb565b610efa565b005b610486600480360381019061048191906130e8565b610f9d565b005b6104a2600480360381019061049d9190612ff9565b611171565b005b6104be60048036038101906104b991906131cf565b6111fe565b6040516104cb91906132dc565b60405180910390f35b6104ee60048036038101906104e99190612f78565b6114fd565b6040516104fb91906132a0565b60405180910390f35b600060006000506000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff16905061056f565b919050565b606060066000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561060f5780601f106105e45761010080835404028352916020019161060f565b820191906000526020600020905b8154815290600101906020018083116105f257829003601f168201915b5050505050905061061b565b90565b600061062f8261159c63ffffffff16565b1515610686576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613524602c913960400191505060405180910390fd5b6004600050600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506106c4565b919050565b60006106da82610abf63ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610763576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806135a86021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166107886115c163ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1614806107c357506107c2816107b76115c163ffffffff16565b6114fd63ffffffff16565b5b151561081a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806134776038913960400191505060405180910390fd5b61082a83836115ce63ffffffff16565b505b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061086b6002600050611691909063ffffffff16565b9050610872565b90565b600a60009054906101000a900467ffffffffffffffff1681565b6108ac6108a06115c163ffffffff16565b826116b463ffffffff16565b1515610903576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806135c96031913960400191505060405180910390fd5b6109148383836117c863ffffffff16565b5b505050565b600061097382600160005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050611a3190919063ffffffff16565b905061097a565b92915050565b6109a48383836040518060200160405280600081526020015061117163ffffffff16565b5b505050565b60006109bc83836116b463ffffffff16565b90506109c3565b92915050565b600060006109e4836002600050611a5990919063ffffffff16565b509050809150506109f156505b919050565b60606000610a0983610ba863ffffffff16565b90508067ffffffffffffffff81118015610a235760006000fd5b50604051908082528060200260200182016040528015610a525781602001602082028036833780820191505090505b50915081506000600090505b81811015610ab757610a76848261091a63ffffffff16565b8382815181101515610a8457fe5b602002602001019067ffffffffffffffff16908167ffffffffffffffff16815260200150505b8080600101915050610a5e565b50505b919050565b6000610af2826040518060600160405280602981526020016134d9602991396002600050611a9a9092919063ffffffff16565b9050610af9565b919050565b606060096000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b995780601f10610b6e57610100808354040283529160200191610b99565b820191906000526020600020905b815481529060010190602001808311610b7c57829003601f168201915b50505050509050610ba5565b90565b6000600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610c32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806134af602a913960400191505060405180910390fd5b610c87600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050611ac7909063ffffffff16565b9050610c8e565b919050565b6000610ca433611aea63ffffffff16565b1515610d1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b67ffffffffffffffff67ffffffffffffffff16600a60009054906101000a900467ffffffffffffffff1667ffffffffffffffff16101515610dc7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260088152602001807f4f766572666c6f7700000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b600a60009054906101000a900467ffffffffffffffff1690508050600a600081819054906101000a900467ffffffffffffffff168092919060010191906101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050610e43828267ffffffffffffffff16611bc663ffffffff16565b809050610e4b565b919050565b606060076000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610eeb5780601f10610ec057610100808354040283529160200191610eeb565b820191906000526020600020905b815481529060010190602001808311610ece57829003601f168201915b50505050509050610ef7565b90565b610f0933611dda63ffffffff16565b1515610f80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4e6f7420417574686f72697a656400000000000000000000000000000000000081526020015060200191505060405180910390fd5b610f998167ffffffffffffffff16611dea63ffffffff16565b5b50565b610fab6115c163ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611051576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081526020015060200191505060405180910390fd5b80600560005060006110676115c163ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661111d6115c163ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35b5050565b61118e6111826115c163ffffffff16565b836116b463ffffffff16565b15156111e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806135c96031913960400191505060405180910390fd5b6111f784848484611f4b63ffffffff16565b5b50505050565b606061120f8261159c63ffffffff16565b1515611266576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180613579602f913960400191505060405180910390fd5b6000600860005060008481526020019081526020016000206000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113155780601f106112ea57610100808354040283529160200191611315565b820191906000526020600020905b8154815290600101906020018083116112f857829003601f168201915b50505050509050600061132c610afe63ffffffff16565b90506000815114156113425781925050506114f8565b6000825111156114195780826040516020018083805190602001908083835b60208310151561138757805182525b602082019150602081019050602083039250611361565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831015156113db57805182525b6020820191506020810190506020830392506113b5565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506114f8565b8061142b85611fcc909063ffffffff16565b6040516020018083805190602001908083835b60208310151561146457805182525b60208201915060208101905060208303925061143e565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831015156114b857805182525b602082019150602081019050602083039250611492565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506114f85650505b919050565b6000600560005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050611596565b92915050565b60006115b582600260005061213190919063ffffffff16565b90506115bc565b919050565b60003390506115cb565b90565b816004600050600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661164a83610abf63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b5050565b60006116a88260000160005061215963ffffffff16565b90506116af565b919050565b60006116c58261159c63ffffffff16565b151561171c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061344b602c913960400191505060405180910390fd5b600061172d83610abf63ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806117a257508373ffffffffffffffffffffffffffffffffffffffff1661178a8461061e63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16145b806117b957506117b881856114fd63ffffffff16565b5b9150506117c256505b92915050565b8273ffffffffffffffffffffffffffffffffffffffff166117ee82610abf63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1614151561185c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806135506029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156118e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806134016024913960400191505060405180910390fd5b6118f583838361217263ffffffff16565b6119066000826115ce63ffffffff16565b61195d81600160005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005061217890919063ffffffff16565b506119b581600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506121a090919063ffffffff16565b506119cf818360026000506121c89092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b505050565b6000611a49836000016000508361220b63ffffffff16565b60001c9050611a53565b92915050565b6000600060006000611a7786600001600050866122a263ffffffff16565b915091508160001c8160001c809050935093505050611a935650505b9250929050565b6000611ab6846000016000508460001b8461235663ffffffff16565b60001c9050611ac0565b9392505050565b6000611ade8260000160005061247063ffffffff16565b9050611ae5565b919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b815260040160206040518083038186803b158015611b535760006000fd5b505afa158015611b68573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b8c91906131a8565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050611bc1565b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611c6e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381526020015060200191505060405180910390fd5b611c7d8161159c63ffffffff16565b151515611cf5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081526020015060200191505060405180910390fd5b611d076000838361217263ffffffff16565b611d5e81600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506121a090919063ffffffff16565b50611d78818360026000506121c89092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b5050565b600060009050611de5565b919050565b6000611dfb82610abf63ffffffff16565b9050611e0f8160008461217263ffffffff16565b611e206000836115ce63ffffffff16565b600060086000506000848152602001908152602001600020600050805460018160011615610100020316600290049050141515611e7a57600860005060008381526020019081526020016000206000611e799190612ee2565b5b611ed182600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005061217890919063ffffffff16565b50611ee982600260005061248990919063ffffffff16565b5081600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505b50565b611f5c8484846117c863ffffffff16565b611f6e848484846124b163ffffffff16565b1515611fc5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806133cf6032913960400191505060405180910390fd5b5b50505050565b60606000821415612017576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815260200150905061212c565b600082905060005b600082141515612047578080600101915050600a8281151561203d57fe5b049150815061201f565b60008167ffffffffffffffff811180156120615760006000fd5b506040519080825280601f01601f1916602001820160405280156120945781602001600182028036833780820191505090505b509050600060018303905085935083505b60008414151561211c57600a848115156120bb57fe5b0660300160f81b8282806001900393508151811015156120d757fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481151561211257fe5b04935083506120a5565b8194505050505061212c56505050505b919050565b600061214c836000016000508360001b6126e263ffffffff16565b9050612153565b92915050565b60008160000160005080549050905061216d565b919050565b5b505050565b6000612193836000016000508360001b61271963ffffffff16565b905061219a565b92915050565b60006121bb836000016000508360001b61286463ffffffff16565b90506121c2565b92915050565b60006121fd846000016000508460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b61290363ffffffff16565b9050612204565b9392505050565b6000818360000160005080549050111515612271576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806133ad6022913960400191505060405180910390fd5b826000016000508281548110151561228557fe5b906000526020600020900160005b5054905061229c565b92915050565b6000600082846000016000508054905011151561230a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806135026022913960400191505060405180910390fd5b6000846000016000508481548110151561232057fe5b906000526020600020906002020160005b50905080600001600050548160010160005054925092505061234f56505b9250929050565b60006000846001016000506000856000191660001916815260200190815260200160002060005054905060008114158390151561242f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156123f45780820151818401525b6020810190506123d8565b50505050905090810190601f1680156124215780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016000506001820381548110151561244757fe5b906000526020600020906002020160005b506001016000505491505061246956505b9392505050565b600081600001600050805490509050612484565b919050565b60006124a4836000016000508360001b612a3e63ffffffff16565b90506124ab565b92915050565b60006124da8473ffffffffffffffffffffffffffffffffffffffff16612bd0909063ffffffff16565b15156124e957600190506126da565b600061265a63150b7a0260e01b6125046115c163ffffffff16565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156125895780820151818401525b60208101905061256d565b50505050905090810190601f1680156125b65780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518060600160405280603281526020016133cf603291398773ffffffffffffffffffffffffffffffffffffffff16612bea9092919063ffffffff16565b905060008180602001905160208110156126745760006000fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050506126da5650505b949350505050565b6000600083600101600050600084600019166000191681526020019081526020016000206000505414159050612713565b92915050565b6000600083600101600050600084600019166000191681526020019081526020016000206000505490506000811415156128525760006001820390506000600186600001600050805490500390506000866000016000508281548110151561277d57fe5b906000526020600020900160005b505490508087600001600050848154811015156127a457fe5b906000526020600020900160005b50819090600019169055506001830187600101600050600083600019166000191681526020019081526020016000206000508190909055508660000160005080548015156127fc57fe5b600190038181906000526020600020900160005b50600090559055866001016000506000876000191660001916815260200190815260200160002060005060009055600194505050505061285e5650505061285c565b600091505061285e565b505b92915050565b60006128768383612c0d63ffffffff16565b15156128f3578260000160005082908060018154018082558091505060019003906000526020600020900160005b909190919091509060001916905582600001600050805490508360010160005060008460001916600019168152602001908152602001600020600050819090905550600190506128fd566128fc565b600090506128fd565b5b92915050565b60006000846001016000506000856000191660001916815260200190815260200160002060005054905060008114156129f157846000016000506040518060400160405280866000191681526020018560001916815260200150908060018154018082558091505060019003906000526020600020906002020160005b9091909190915060008201518160000160005090600019169055602082015181600101600050906000191690555050846000016000508054905085600101600050600086600019166000191681526020019081526020016000206000508190909055506001915050612a3756612a35565b828560000160005060018303815481101515612a0957fe5b906000526020600020906002020160005b50600101600050819090600019169055506000915050612a37565b505b9392505050565b600060008360010160005060008460001916600019168152602001908152602001600020600050549050600081141515612bbe57600060018203905060006001866000016000508054905003905060008660000160005082815481101515612aa257fe5b906000526020600020906002020160005b509050808760000160005084815481101515612acb57fe5b906000526020600020906002020160005b50600082016000505481600001600050906000191690556001820160005054816001016000509060001916905590505060018301876001016000506000836000016000505460001916600019168152602001908152602001600020600050819090905550866000016000508054801515612b5257fe5b600190038181906000526020600020906002020160005b60008201600050600090556001820160005060009055505090558660010160005060008760001916600019168152602001908152602001600020600050600090556001945050505050612bca56505050612bc8565b6000915050612bca565b505b92915050565b60006000823b905060008111915050612be556505b919050565b6060612bff8484600085612c4463ffffffff16565b9050612c06565b9392505050565b6000600083600101600050600084600019166000191681526020019081526020016000206000505414159050612c3e565b92915050565b6060824710151515612ca1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806134256026913960400191505060405180910390fd5b612cb085612bd063ffffffff16565b1515612d27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081526020015060200191505060405180910390fd5b600060008673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b602083101515612d7a57805182525b602082019150602081019050602083039250612d54565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612ddc576040519150601f19603f3d011682016040523d82523d6000602084013e612de1565b606091505b5091509150612df7828286612e0a63ffffffff16565b92505050612e025650505b949350505050565b60608315612e1e57829050612edb56612eda565b600083511115612e365782518084602001fd50612ed9565b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612e9e5780820151818401525b602081019050612e82565b50505050905090810190601f168015612ecb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5b5b9392505050565b50805460018160011615610100020316600290046000825580601f10612f085750612f27565b601f016020900490600052602060002090810190612f269190612f2a565b5b50565b612f2f565b80821115612f495760008181506000905550600101612f2f565b5090566133ab565b600060208284031215612f62578081fd5b8135612f6d81613382565b809150505b92915050565b6000600060408385031215612f8b578081fd5b8235612f9681613382565b809250506020830135612fa881613382565b809150505b9250929050565b60006000600060608486031215612fc9578081fd5b8335612fd481613382565b809350506020840135612fe681613382565b80925050604084013590505b9250925092565b600060006000600060808587031215613010578081fd5b843561301b81613382565b8094505060208086013561302e81613382565b8094505060408601359250606086013567ffffffffffffffff80821115613053578384fd5b818801915088601f8301121515613068578384fd5b81358181111561307457fe5b604051847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011682010181811084821117156130af57fe5b80604052508181528a858386010111156130c7578586fd5b81858501868301378585838301015280955050505050505b92959194509250565b60006000604083850312156130fb578182fd5b823561310681613382565b8092505060208301358015158114151561311e578182fd5b809150505b9250929050565b600060006040838503121561313d578182fd5b823561314881613382565b80925050602083013590505b9250929050565b60006020828403121561316c578081fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114151561319d578182fd5b809150505b92915050565b6000602082840312156131b9578081fd5b81516131c481613382565b809150505b92915050565b6000602082840312156131e0578081fd5b813590505b92915050565b6000602082840312156131fc578081fd5b813567ffffffffffffffff811681141515613215578182fd5b809150505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208083018184528085518083526040860191508387019250845b818110156132915767ffffffffffffffff8451168352848301925084840193505b600181019050613265565b50508093505050505b92915050565b600060208201905082151582525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b6000602080835283518082850152825b8181101561330c57828187010151604082870101525b82810190506132ec565b8181111561331d5783604083870101525b5060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050505b92915050565b60006020820190508282525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565b73ffffffffffffffffffffffffffffffffffffffff8116811415156133a75760006000fd5b5b50565bfe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220b309b05aa8209cba32de92ba9533dbbc750eb39933123972446a23b83addf56e64736f6c63430007060033";
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
    static createInterface(): HuePositionNFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HuePositionNFT;
}
export {};