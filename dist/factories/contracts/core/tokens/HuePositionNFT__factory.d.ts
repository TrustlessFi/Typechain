import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { HuePositionNFT, HuePositionNFTInterface } from "../../../../contracts/core/tokens/HuePositionNFT";
declare type HuePositionNFTConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HuePositionNFT__factory extends ContractFactory {
    constructor(...args: HuePositionNFTConstructorParams);
    deploy(params: HuePositionNFT.ConstructorParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HuePositionNFT>;
    getDeployTransaction(params: HuePositionNFT.ConstructorParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HuePositionNFT;
    connect(signer: Signer): HuePositionNFT__factory;
    static readonly bytecode = "0x60a0604052348015620000125760006000fd5b506040516200352c3803806200352c83398181016040528101906200003891906200013f565b5b6040518060400160405280601b81526020017f48554520546f6b656e697a6564204465627420506f736974696f6e00000000008152602001506040518060400160405280600581526020017f48756544500000000000000000000000000000000000000000000000000000008152602001505b81815b8160006000509081620000c3919062000275565b508060016000509081620000d8919062000275565b505b50505b5050806000015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b50620003525662000351565b634e487b7160e01b600052604160045260246000fd5b565b600060208284031215620001535760006000fd5b604051602081018181106001600160401b038211171562000179576200017862000127565b5b806040525082516001600160a01b03811681141515620001995760006000fd5b80825250809150505b92915050565b60008160011c905060018216801515620001c357607f821691505b60208210811415620001e557634e487b7160e01b600052602260045260246000fd5b505b919050565b80600052506000602060002090505b90565b601f8211156200025457600081815260208120601f850160051c8101602086101562000228578190505b601f850160051c820191508090505b8181101562000250578281555b60018101905062000237565b5050505b5050505b565b60008260011b6000198460031b1c1983161790505b92915050565b81516001600160401b0381111562000292576200029162000127565b5b620002aa81620002a38454620001a8565b84620001fe565b60006020809150601f831160018114620002e35760008415620002ce578387015190505b620002da85826200025a565b86555062000348565b601f198416620002f386620001ec565b60005b828110156200031c5785890151825560018201915084860195505b8481019050620002f6565b50858210156200033c578488015160001960f88860031b161c1981168255505b505060018460011b0185555b5050505050505b565b5b6080516131b7620003756000396000818161078b01526115ac01526131b76000f3fe60806040523480156100115760006000fd5b50600436106101875760003560e01c80634f6ccce7116100d957806395d89b411161008d578063b88d4fde11610067578063b88d4fde1461045f578063c87b56dd1461047b578063e985e9c5146104ab57610187565b806395d89b41146104095780639dbead4214610427578063a22cb4651461044357610187565b80636352211e116100be5780636352211e1461037957806370a08231146103a9578063755edd17146103d957610187565b80634f6ccce7146103195780635a11a9ad1461034957610187565b806318160ddd1161013b5780632f745c59116101155780632f745c591461029d57806342842e0e146102cd578063430c2081146102e957610187565b806318160ddd146102455780631c8249051461026357806323b872dd1461028157610187565b8063081812fc1161016c578063081812fc146101db578063095ea7b31461020b5780630c340a241461022757610187565b806301ffc9a71461018d57806306fdde03146101bd57610187565b60006000fd5b6101a760048036038101906101a29190612512565b6104db565b6040516101b4919061253b565b60405180910390f35b6101c5610560565b6040516101d291906125c8565b60405180910390f35b6101f560048036038101906101f091906125e4565b6105fa565b6040516102029190612602565b60405180910390f35b61022560048036038101906102209190612653565b61064e565b005b61022f610789565b60405161023c9190612686565b60405180910390f35b61024d6107ad565b60405161025a91906126ae565b60405180910390f35b61026b6107c2565b60405161027891906126c0565b60405180910390f35b61029b600480360381019061029691906126dc565b6107dc565b005b6102b760048036038101906102b29190612653565b610851565b6040516102c491906126ae565b60405180910390f35b6102e760048036038101906102e291906126dc565b61090c565b005b61030360048036038101906102fe9190612653565b610936565b604051610310919061253b565b60405180910390f35b610333600480360381019061032e91906125e4565b610955565b60405161034091906126ae565b60405180910390f35b610363600480360381019061035e9190612723565b6109dd565b604051610370919061274c565b60405180910390f35b610393600480360381019061038e91906125e4565b610ab4565b6040516103a09190612602565b60405180910390f35b6103c360048036038101906103be9190612723565b610b72565b6040516103d091906126ae565b60405180910390f35b6103f360048036038101906103ee9190612723565b610c38565b60405161040091906126c0565b60405180910390f35b610411610d8f565b60405161041e91906125c8565b60405180910390f35b610441600480360381019061043c91906127a5565b610e29565b005b61045d600480360381019061045891906127de565b610e96565b005b61047960048036038101906104749190612855565b610eb9565b005b610495600480360381019061049091906125e4565b610f30565b6040516104a291906125c8565b60405180910390f35b6104c560048036038101906104c09190612963565b610fb5565b6040516104d2919061253b565b60405180910390f35b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061055457506105538261105463ffffffff16565b5b905061055b565b919050565b606060006000508054610572906129a1565b80601f016020809104026020016040519081016040528092919081815260200182805461059e906129a1565b80156105eb5780601f106105c0576101008083540402835291602001916105eb565b820191906000526020600020905b8154815290600101906020018083116105ce57829003601f168201915b505050505090506105f7565b90565b600061060b8261114163ffffffff16565b6004600050600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610649565b919050565b600061065f82610ab463ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156106d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c9906129fc565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106f761119563ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16148061073257506107318161072661119563ffffffff16565b610fb563ffffffff16565b5b1515610773576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076a90612a61565b60405180910390fd5b61078383836111a263ffffffff16565b505b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060086000508054905090506107bf565b90565b600a60009054906101000a900467ffffffffffffffff1681565b6107f96107ed61119563ffffffff16565b8261126563ffffffff16565b151561083a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083190612ac6565b60405180910390fd5b61084b83838361131363ffffffff16565b5b505050565b600061086283610b7263ffffffff16565b821015156108a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089c90612b2b565b60405180910390fd5b600660005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000838152602001908152602001600020600050549050610906565b92915050565b61093083838360405180602001604052806000815260200150610eb963ffffffff16565b5b505050565b6000610948838361126563ffffffff16565b905061094f565b92915050565b60006109656107ad63ffffffff16565b821015156109a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099f90612b90565b60405180910390fd5b6008600050828154811015156109c1576109c0612bf5565b5b906000526020600020900160005b505490506109d8565b919050565b606060006109f083610b7263ffffffff16565b90508067ffffffffffffffff811115610a0c57610a0b612824565b5b604051908082528060200260200182016040528015610a3a5781602001602082028036833780820191505090505b50915081506000600090505b81811015610aac57610a5e848261085163ffffffff16565b8382815181101515610a7357610a72612bf5565b5b602002602001019067ffffffffffffffff16908167ffffffffffffffff16815260200150505b8080610aa490612c57565b915050610a46565b50505b919050565b600060006002600050600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610b63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5a90612c96565b60405180910390fd5b80915050610b6d56505b919050565b6000600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610be6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdd90612cd5565b60405180910390fd5b600360005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610c33565b919050565b6000610c49336115a863ffffffff16565b1515610c8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8190612d3a565b60405180910390fd5b67ffffffffffffffff67ffffffffffffffff16600a60009054906101000a900467ffffffffffffffff1667ffffffffffffffff16101515610d00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf790612d79565b60405180910390fd5b600a60009054906101000a900467ffffffffffffffff1690508050600a600081819054906101000a900467ffffffffffffffff1680929190610d4190612db8565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050610d82828267ffffffffffffffff1661167463ffffffff16565b809050610d8a565b919050565b606060016000508054610da1906129a1565b80601f0160208091040260200160405190810160405280929190818152602001828054610dcd906129a1565b8015610e1a5780601f10610def57610100808354040283529160200191610e1a565b820191906000526020600020905b815481529060010190602001808311610dfd57829003601f168201915b50505050509050610e26565b90565b610e383361186f63ffffffff16565b1515610e79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7090612d3a565b60405180910390fd5b610e928167ffffffffffffffff1661187f63ffffffff16565b5b50565b610eb4610ea761119563ffffffff16565b83836119bf63ffffffff16565b5b5050565b610ed6610eca61119563ffffffff16565b8361126563ffffffff16565b1515610f17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0e90612ac6565b60405180910390fd5b610f2984848484611b3563ffffffff16565b5b50505050565b6060610f418261114163ffffffff16565b6000610f51611ba063ffffffff16565b90506000815111610f745760405180602001604052806000815260200150610fa7565b80610f8684611bbf909063ffffffff16565b604051602001610f97929190612de5565b6040516020818303038152906040525b915050610fb056505b919050565b6000600560005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905061104e565b92915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061111f57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611135575061113482611d3663ffffffff16565b5b905061113c565b919050565b61115081611da563ffffffff16565b1515611191576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118890612c96565b60405180910390fd5b5b50565b600033905061119f565b90565b816004600050600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661121e83610ab463ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b5050565b6000600061127883610ab463ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806112c057506112bf8185610fb563ffffffff16565b5b8061130457508373ffffffffffffffffffffffffffffffffffffffff166112ec846105fa63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16145b91505061130d56505b92915050565b8273ffffffffffffffffffffffffffffffffffffffff1661133982610ab463ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16141515611391576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138890612e1b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611403576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113fa90612e80565b60405180910390fd5b611414838383611e1a63ffffffff16565b6114256000826111a263ffffffff16565b6001600360005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505461147a9190612ee5565b9250508190909055506001600360005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250546114d89190612f04565b925050819090905550816002600050600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46115a2838383611f5163ffffffff16565b5b505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b8152600401602060405180830381865afa158015611616573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061163a9190612f23565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614905061166f565b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156116e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116dd90612f4c565b60405180910390fd5b6116f581611da563ffffffff16565b151515611737576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161172e90612f8b565b60405180910390fd5b61174960008383611e1a63ffffffff16565b6001600360005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505461179e9190612f04565b925050819090905550816002600050600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461186a60008383611f5163ffffffff16565b5b5050565b60006000905061187a565b919050565b600061189082610ab463ffffffff16565b90506118a481600084611e1a63ffffffff16565b6118b56000836111a263ffffffff16565b6001600360005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505461190a9190612ee5565b9250508190909055506002600050600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46119ba81600084611f5163ffffffff16565b505b50565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515611a30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a2790612fca565b60405180910390fd5b80600560005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611b27919061253b565b60405180910390a35b505050565b611b4684848461131363ffffffff16565b611b5884848484611f5763ffffffff16565b1515611b99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b9090613009565b60405180910390fd5b5b50505050565b6060604051806020016040528060008152602001509050611bbc565b90565b60606000821415611c0a576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152602001509050611d31565b600082905060005b600082141515611c40578080611c2790612c57565b915050600a82611c37919061309f565b91508150611c12565b60008167ffffffffffffffff811115611c5c57611c5b612824565b5b6040519080825280601f01601f191660200182016040528015611c8e5781602001600182028036833780820191505090505b5090505b600085141515611d2357600182611ca99190612ee5565b91508150600a85611cba91906130bd565b6030611cc69190612f04565b60f81b8183815181101515611cde57611cdd612bf5565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611d1a919061309f565b94508450611c92565b809350505050611d31565050505b919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050611da0565b919050565b6000600073ffffffffffffffffffffffffffffffffffffffff166002600050600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050611e15565b919050565b611e2b83838361210563ffffffff16565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611e7457611e6f8161210b63ffffffff16565b611ebb565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515611eba57611eb9838261216763ffffffff16565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611f0457611eff8161230e63ffffffff16565b611f4b565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515611f4a57611f49828261241763ffffffff16565b5b5b5b505050565b5b505050565b6000611f808473ffffffffffffffffffffffffffffffffffffffff166124b0909063ffffffff16565b156120f3578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611faf61119563ffffffff16565b8786866040518563ffffffff1660e01b8152600401611fd194939291906130db565b6020604051808303816000875af192505050801561200d57506040513d601f19601f8201168201806040525081019061200a9190613126565b60015b61209d575b5b3d806000811461203f576040519150601f19603f3d011682016040523d82523d6000602084013e612044565b606091505b5060008151141561208e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161208190613009565b60405180910390fd612096565b805181602001fd5b505b6120ee565b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506120fd56505b6120fc565b600190506120fd565b5b949350505050565b5b505050565b60086000508054905060096000506000838152602001908152602001600020600050819090905550600860005081908060018154018082558091505060019003906000526020600020900160005b909190919091509090555b50565b6000600161217a84610b7263ffffffff16565b6121849190612ee5565b9050600060076000506000848152602001908152602001600020600050549050818114151561228d576000600660005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600084815260200190815260200160002060005054905080600660005060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008481526020019081526020016000206000508190909055508160076000506000838152602001908152602001600020600050819090905550505b6007600050600084815260200190815260200160002060005060009055600660005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008381526020019081526020016000206000506000905550505b5050565b600060016008600050805490506123259190612ee5565b905060006009600050600084815260200190815260200160002060005054905060006008600050838154811015156123605761235f612bf5565b5b906000526020600020900160005b505490508060086000508381548110151561238c5761238b612bf5565b5b906000526020600020900160005b5081909090555081600960005060008381526020019081526020016000206000508190909055506009600050600085815260200190815260200160002060005060009055600860005080548015156123f5576123f461314f565b5b600190038181906000526020600020900160005b506000905590555050505b50565b600061242883610b7263ffffffff16565b905081600660005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008381526020019081526020016000206000508190909055508060076000506000848152602001908152602001600020600050819090905550505b5050565b600060008273ffffffffffffffffffffffffffffffffffffffff163b1190506124d4565b91905056613180565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114151561250e5760006000fd5b505b565b6000602082840312156125255760006000fd5b8135612530816124dd565b809150505b92915050565b600060208201905082151582525b92915050565b60005b8381101561256e5780820151818401525b602081019050612552565b506000838301525050505b565b6000815180845261259381602086016020860161254f565b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019150505b92915050565b6020815260006125db602083018461257b565b90505b92915050565b6000602082840312156125f75760006000fd5b813590505b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b73ffffffffffffffffffffffffffffffffffffffff81168114151561264f5760006000fd5b505b565b60006000604083850312156126685760006000fd5b82356126738161262a565b80925050602083013590505b9250929050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b60006020820190508282525b92915050565b600060208201905067ffffffffffffffff831682525b92915050565b600060006000606084860312156126f35760006000fd5b83356126fe8161262a565b8093505060208401356127108161262a565b80925050604084013590505b9250925092565b6000602082840312156127365760006000fd5b81356127418161262a565b809150505b92915050565b60006020808301818452808551808352604086019150838701925060005b818110156127965767ffffffffffffffff8451168352848301925084840193505b60018101905061276a565b50508093505050505b92915050565b6000602082840312156127b85760006000fd5b813567ffffffffffffffff8116811415156127d35760006000fd5b809150505b92915050565b60006000604083850312156127f35760006000fd5b82356127fe8161262a565b809250506020830135801515811415156128185760006000fd5b809150505b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b60006000600060006080858703121561286e5760006000fd5b84356128798161262a565b80945050602085013561288b8161262a565b8093505060408501359150606085013567ffffffffffffffff808211156128b25760006000fd5b818701915087601f83011215156128c95760006000fd5b8135818111156128dc576128db612824565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe060405181603f83601f860116011681019150808210848311171561292457612923612824565b5b816040528281528a602084870101111561293e5760006000fd5b8260208601602083013760006020848301015280955050505050505b92959194509250565b60006000604083850312156129785760006000fd5b82356129838161262a565b8092505060208301356129958161262a565b809150505b9250929050565b60008160011c9050600182168015156129bb57607f821691505b602082108114156129f5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b505b919050565b60208152602160208201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560408201527f7200000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152603e60208201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60408201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606082015260006080820190505b919050565b60208152602e60208201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201527f72206e6f7220617070726f766564000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602b60208201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560408201527f74206f6620626f756e6473000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602c60208201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60408201527f7574206f6620626f756e64730000000000000000000000000000000000000000606082015260006080820190505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612c8a57612c89612c26565b5b6001820190505b919050565b60208152601860208201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604082015260006060820190505b919050565b60208152602960208201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160408201527f6c6964206f776e65720000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b60208152600860208201527f4f766572666c6f77000000000000000000000000000000000000000000000000604082015260006060820190505b919050565b600067ffffffffffffffff80831681811415612dd757612dd6612c26565b5b60018101925050505b919050565b60008351612df781846020880161254f565b80830190508351612e0c81836020880161254f565b808201925050505b9392505050565b60208152602560208201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201527f6f776e6572000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602460208201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b6000828203905081811115612efd57612efc612c26565b5b5b92915050565b6000828201905080821115612f1c57612f1b612c26565b5b5b92915050565b600060208284031215612f365760006000fd5b8151612f418161262a565b809150505b92915050565b60208152602060208201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260006060820190505b919050565b60208152601c60208201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260006060820190505b919050565b60208152601960208201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260006060820190505b919050565b60208152603260208201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527f63656976657220696d706c656d656e7465720000000000000000000000000000606082015260006080820190505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b565b60008215156130b1576130b061306e565b5b82820490505b92915050565b60008215156130cf576130ce61306e565b5b82820690505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015261311a608083018461257b565b90505b95945050505050565b6000602082840312156131395760006000fd5b8151613144816124dd565b809150505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b565bfea2646970667358221220101b999502e85293d7f25c21a4e0d3d93e637d83965c589a36cf92701b03934e64736f6c63430008100033";
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
