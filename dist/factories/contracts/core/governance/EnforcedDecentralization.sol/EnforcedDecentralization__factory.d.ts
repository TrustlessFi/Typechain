import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { EnforcedDecentralization, EnforcedDecentralizationInterface, IEnforcedDecentralization } from "../../../../../contracts/core/governance/EnforcedDecentralization.sol/EnforcedDecentralization";
declare type EnforcedDecentralizationConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EnforcedDecentralization__factory extends ContractFactory {
    constructor(...args: EnforcedDecentralizationConstructorParams);
    deploy(params: IEnforcedDecentralization.ConstructorParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<EnforcedDecentralization>;
    getDeployTransaction(params: IEnforcedDecentralization.ConstructorParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): EnforcedDecentralization;
    connect(signer: Signer): EnforcedDecentralization__factory;
    static readonly bytecode = "0x60c0604052600160026000509090553480156200001c5760006000fd5b50604051620035cc380380620035cc8339818101604052810190620000429190620008dd565b5b806000015181602001515b815b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815260200150505b508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815260200150505b5050620000d760006000620004af60201b60201c565b620000eb60016000620004af60201b60201c565b620000ff60026003620004af60201b60201c565b6200011360036003620004af60201b60201c565b600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000632c388d5d60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000634ac8c5ae60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600063e97dcb6260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160046000506000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600063e9fad8ee60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555060016001600050600063eb02312060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550620004a7816040015182600001517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6200054c60201b620019281760201c565b5b5062000b57565b6040518060400160405280600067ffffffffffffffff1681526020018260ff16815260200150600360005060008460ff1660ff16815260200190815260200160002060005060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548160ff021916908360ff1602179055509050505b5050565b620005d78363095ea7b360e01b84846040516024016200056e92919062000971565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620005dd60201b60201c565b5b505050565b600062000649826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152602001508573ffffffffffffffffffffffffffffffffffffffff16620006b760201b620019b5179092919060201c565b9050600081511115620006b157808060200190518101906200066c919062000993565b1515620006b0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006a790620009c6565b60405180910390fd5b5b505b5050565b6060620006ce8484600085620006dd60201b60201c565b9050620006d6565b9392505050565b606082471015151562000727576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200071e9062000a2b565b60405180910390fd5b62000738856200081860201b60201c565b15156200077c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007739062000a90565b60405180910390fd5b600060008673ffffffffffffffffffffffffffffffffffffffff168587604051620007a8919062000afd565b60006040518083038185875af1925050503d8060008114620007e7576040519150601f19603f3d011682016040523d82523d6000602084013e620007ec565b606091505b5091509150620008048282866200084260201b60201c565b92505050620008105650505b949350505050565b600060008273ffffffffffffffffffffffffffffffffffffffff163b1190506200083d565b919050565b606083156200085957829050620008b456620008b3565b600083511115620008735782518084602001fd50620008b2565b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008a9919062000b1e565b60405180910390fd5b5b5b93925050505662000b56565b6001600160a01b03811681141515620008d95760006000fd5b505b565b600060608284031215620008f15760006000fd5b604051606081018181106001600160401b03821117156200092257634e487b7160e01b600052604160045260246000fd5b806040525082516200093481620008c0565b8082525060208301516200094881620008c0565b8060208301525060408301516200095f81620008c0565b80604083015250809150505b92915050565b60006040820190506001600160a01b03841682528260208301525b9392505050565b600060208284031215620009a75760006000fd5b815180151581141515620009bb5760006000fd5b809150505b92915050565b60208152602a60208201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602660208201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601d60208201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260006060820190505b919050565b60005b8381101562000af05780820151818401525b60208101905062000ad2565b506000838301525050505b565b6000825162000b1181846020870162000acf565b8083019150505b92915050565b602081526000825180602084015262000b3f81604085016020870162000acf565b6040601f19601f8301168401019150505b92915050565b5b60805160a051612a1762000bb5600039600081816119f50152611b530152600081816103cd0152818161041801528181610634015281816107a401528181610925015281816112f1015281816113f20152611ad50152612a176000f3fe60806040523480156100115760006000fd5b50600436106100e45760003560e01c80636f2b849f1161008d578063a43c36af11610067578063a43c36af14610251578063b8188c811461026d578063bd2ab47214610289578063eb023120146102b9576100e4565b80636f2b849f146101d2578063719e712d1461020257806375f12b2114610233576100e4565b80632c3ac786116100be5780632c3ac78614610156578063388b3cee1461018657806350e6c229146101b6576100e4565b8063055ad42e146100ea5780630c340a2414610108578063113cf1ab14610126576100e4565b60006000fd5b6100f26102d5565b6040516100ff9190611f61565b60405180910390f35b6101106103cb565b60405161011d9190611f76565b60405180910390f35b610140600480360381019061013b9190611fdb565b6103ef565b60405161014d9190612000565b60405180910390f35b610170600480360381019061016b919061203d565b610414565b60405161017d9190612000565b60405180910390f35b6101a0600480360381019061019b919061203d565b610921565b6040516101ad9190612000565b60405180910390f35b6101d060048036038101906101cb91906120a8565b610bb0565b005b6101ec60048036038101906101e7919061203d565b610cf5565b6040516101f99190612000565b60405180910390f35b61021c60048036038101906102179190612197565b610d2a565b60405161022a9291906121c9565b60405180910390f35b61023b610d72565b6040516102489190612000565b60405180910390f35b61026b600480360381019061026691906120a8565b610d85565b005b610287600480360381019061028291906121ef565b611035565b005b6102a3600480360381019061029e919061203d565b6112ed565b6040516102b09190612000565b60405180910390f35b6102d360048036038101906102ce9190612197565b6115a8565b005b6000600060036000506000600160ff16815260200190815260200160002060005060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff16141561032757600090506103c8565b60006103376119d863ffffffff16565b90506000600390505b60008160ff1611156103bc578167ffffffffffffffff16600360005060008360ff1660ff16815260200190815260200160002060005060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1610156103a85780925050506103c8565b5b80806103b490612259565b915050610340565b5060009150506103c856505b90565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166343f48fbd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610482573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a6919061229b565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561063257636e16ead260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561052f576001905061091b565b63c381c1e660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610585576001905061091b565b63150147d760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156105db576001905061091b565b63fc2a11e860e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610631576001905061091b565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639624e83e6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561069e573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c291906122c4565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107a25763397d359260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561074b576001905061091b565b630b218d2460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156107a1576001905061091b565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639ec5a8946040518163ffffffff1660e01b8152600401602060405180830381865afa15801561080e573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083291906122ed565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561091257636161189060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156108bb576001905061091b565b6328d10de860e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610911576001905061091b565b5b6000905061091b565b92915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415156109815760009050610baa565b63e97a99b660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610a18575063b971dc0560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610a67575063ff26df7260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610ab657506383208f5360e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610b05575063a1c1f90d60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610b5457506380304d0960e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610ba35750638f40b82f60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050610baa565b92915050565b610bbe6119f363ffffffff16565b610bcc611ad063ffffffff16565b6001600460005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000610c2484611b3063ffffffff16565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555080604051610c959190612342565b60405180910390208273ffffffffffffffffffffffffffffffffffffffff167f7765b2c9b4f271477d3d98e0d032233ed6b45059eaf1f5815095b2f855bcfe1660405160405180910390a35b5b610cf0611b4463ffffffff16565b5b5050565b60046000506020528160005260406000206000506020528060005260406000206000915091509054906101000a900460ff1681565b60036000506020528060005260406000206000915090508060000160009054906101000a900467ffffffffffffffff16908060000160089054906101000a900460ff16905082565b600060009054906101000a900460ff1681565b6000610d9682611b3063ffffffff16565b9050610da883826112ed63ffffffff16565b15610db35750611031565b600460005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff16151515610e97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8e90612361565b60405180910390fd5b610ea7838261041463ffffffff16565b15610eb25750611031565b6000610ec26102d563ffffffff16565b9050600360ff168160ff16101515610f0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f06906123a0565b60405180910390fd5b610f1f848361092163ffffffff16565b15610f715760028160ff16101515610f6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f63906123df565b60405180910390fd5b61102e565b8373ffffffffffffffffffffffffffffffffffffffff1663113cf1ab836040518263ffffffff1660e01b8152600401610faa919061241e565b602060405180830381865afa158015610fc8573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fec9190612452565b151561102d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102490612483565b60405180910390fd5b5b50505b5050565b6110436119f363ffffffff16565b611051611ad063ffffffff16565b600060036000506000600160ff16815260200190815260200160002060005060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff161415156110d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110cb906124c2565b60405180910390fd5b60006110e46102d563ffffffff16565b60ff16141515611129576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112090612501565b60405180910390fd5b8067ffffffffffffffff166111426119d863ffffffff16565b67ffffffffffffffff1610151561118e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118590612540565b60405180910390fd5b8060036000506000600160ff16815260200190815260200160002060005060000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506111f562f142808267ffffffffffffffff16611bd690919063ffffffff16565b60036000506000600260ff16815260200190815260200160002060005060000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555061125c6301e133808267ffffffffffffffff16611bd690919063ffffffff16565b60036000506000600360ff16815260200190815260200160002060005060000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507f18e32a18f3c57a652a4a5c7d49e929120f265175598b362abd1716d0d64c2ad1816040516112d191906125a5565b60405180910390a15b5b6112e9611b4463ffffffff16565b5b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156113f05763232948ea60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561139957600190506115a2565b6380b5c66560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156113ef57600190506115a2565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663511606306040518163ffffffff1660e01b8152600401602060405180830381865afa15801561145c573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061148091906125c1565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480156114fe575063e4e9bcca60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b1561150c57600190506115a2565b3073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614801561158b57506350e6c22960e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b1561159957600190506115a2565b600090506115a2565b92915050565b6115b66119f363ffffffff16565b6115c4611ad063ffffffff16565b60008160ff1611151561160c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611603906125ea565b60405180910390fd5b8060ff1660016116206102d563ffffffff16565b61162a9190612629565b60ff1614151561166f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116669061264f565b60405180910390fd5b600360ff168160ff16111515156116bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b29061268e565b60405180910390fd5b6000600360005060008360ff1660ff1681526020019081526020016000206000506040518060400160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900460ff1660ff1660ff1681526020015050905061174d62278d00611bf163ffffffff16565b67ffffffffffffffff16816000015167ffffffffffffffff161015156117a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161179f906126cd565b60405180910390fd5b6000816020015160ff161115156117f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117eb9061270c565b60405180910390fd5b61181862278d00826000015167ffffffffffffffff16611bd690919063ffffffff16565b816000019067ffffffffffffffff16908167ffffffffffffffff168152602001505080602001805180919061184c90612259565b909060ff1660ff168152602001505080600360005060008460ff1660ff16815260200190815260200160002060005060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548160ff021916908360ff1602179055509050508160ff167f4c5477e514459ab04fc3defdfdc3db8562422e8e9b25a0e0050b1b81629757188260000151836020015160405161190b9291906121c9565b60405180910390a2505b5b611924611b4463ffffffff16565b5b50565b6119af8363095ea7b360e01b848460405160240161194792919061274b565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611c2763ffffffff16565b5b505050565b60606119ca8484600085611cf463ffffffff16565b90506119d1565b9392505050565b60006119eb42611e20909063ffffffff16565b905080505b90565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e97dcb626040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611a5c5760006000fd5b505af1158015611a71573d600060003e3d6000fd5b50505050600260026000505414151515611ac0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ab79061277a565b60405180910390fd5b600260026000508190909055505b565b611b2d7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611e7c63ffffffff16565b5b565b60008180519060200120905080505b919050565b600160026000508190909055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611bba5760006000fd5b505af1158015611bcf573d600060003e3d6000fd5b505050505b565b60008183611be491906127b9565b9050611beb565b92915050565b6000611c1d82611c056119d863ffffffff16565b67ffffffffffffffff16611bd690919063ffffffff16565b905080505b919050565b6000611c8c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152602001508573ffffffffffffffffffffffffffffffffffffffff166119b59092919063ffffffff16565b9050600081511115611cee5780806020019051810190611cac9190612452565b1515611ced576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ce4906127e6565b60405180910390fd5b5b505b5050565b6060824710151515611d3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d329061284b565b60405180910390fd5b611d4a85611ec263ffffffff16565b1515611d8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d82906128b0565b60405180910390fd5b600060008673ffffffffffffffffffffffffffffffffffffffff168587604051611db591906128ef565b60006040518083038185875af1925050503d8060008114611df2576040519150601f19603f3d011682016040523d82523d6000602084013e611df7565b606091505b5091509150611e0d828286611eeb63ffffffff16565b92505050611e185650505b949350505050565b60006801000000000000000082101515611e6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e669061290e565b60405180910390fd5b819050611e77565b919050565b801515611ebe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eb59061294d565b60405180910390fd5b5b50565b600060008273ffffffffffffffffffffffffffffffffffffffff163b119050611ee6565b919050565b60608315611eff57829050611f5656611f55565b600083511115611f175782518084602001fd50611f54565b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f4b919061298c565b60405180910390fd5b5b5b9392505050566129e0565b600060208201905060ff831682525b92915050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b6000813590507fffffffff00000000000000000000000000000000000000000000000000000000811681141515611fd55760006000fd5b5b919050565b600060208284031215611fee5760006000fd5b611ff782611f9e565b90505b92915050565b600060208201905082151582525b92915050565b73ffffffffffffffffffffffffffffffffffffffff8116811415156120395760006000fd5b505b565b60006000604083850312156120525760006000fd5b823561205d81612014565b8092505061206d60208401611f9e565b90505b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b565b60006000604083850312156120bd5760006000fd5b82356120c881612014565b80925050602083013567ffffffffffffffff808211156120e85760006000fd5b818501915085601f83011215156120ff5760006000fd5b81358181111561211257612111612077565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe060405181603f83601f860116011681019150808210848311171561215a57612159612077565b5b816040528281528860208487010111156121745760006000fd5b8260208601602083013760006020848301015280955050505050505b9250929050565b6000602082840312156121aa5760006000fd5b813560ff8116811415156121be5760006000fd5b809150505b92915050565b600060408201905067ffffffffffffffff8416825260ff831660208301525b9392505050565b6000602082840312156122025760006000fd5b813567ffffffffffffffff81168114151561221d5760006000fd5b809150505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b600060ff821680151561226f5761226e612228565b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81019150505b919050565b6000602082840312156122ae5760006000fd5b81516122b981612014565b809150505b92915050565b6000602082840312156122d75760006000fd5b81516122e281612014565b809150505b92915050565b6000602082840312156123005760006000fd5b815161230b81612014565b809150505b92915050565b60005b838110156123355780820151818401525b602081019050612319565b506000838301525050505b565b60008251612354818460208701612316565b8083019150505b92915050565b60208152601260208201527f416374696f6e20626c61636b6c69737465640000000000000000000000000000604082015260006060820190505b919050565b60208152601660208201527f5065726d616e656e7420616374696f6e73206f6e6c7900000000000000000000604082015260006060820190505b919050565b60208152601660208201527f557067726164652077696e646f77206578706972656400000000000000000000604082015260006060820190505b919050565b60006020820190507fffffffff00000000000000000000000000000000000000000000000000000000831682525b92915050565b6000602082840312156124655760006000fd5b8151801515811415156124785760006000fd5b809150505b92915050565b60208152601960208201527f55706461746520616374696f6e206e6f7420616c6c6f77656400000000000000604082015260006060820190505b919050565b60208152600b60208201527f416c726561647920736574000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152600b60208201527f4e6f742070686173652030000000000000000000000000000000000000000000604082015260006060820190505b919050565b60208152602260208201527f5068617365206f6e65206d75737420737461727420696e20746865206675747560408201527f7265000000000000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b600060208201905067ffffffffffffffff831682525b92915050565b6000602082840312156125d45760006000fd5b81516125df81612014565b809150505b92915050565b60208152601260208201527f43616e742064656c617920302070686173650000000000000000000000000000604082015260006060820190505b919050565b600060ff831660ff831601905060ff81111561264857612647612228565b5b5b92915050565b60208152601960208201527f43616e206f6e6c792064656c6179206e65787420706861736500000000000000604082015260006060820190505b919050565b60208152600d60208201527f556e6b6e6f776e20706861736500000000000000000000000000000000000000604082015260006060820190505b919050565b60208152601760208201527f5068617365207374617274206973206e6f74206e656172000000000000000000604082015260006060820190505b919050565b60208152601360208201527f4e6f2064656c6179732072656d61696e696e6700000000000000000000000000604082015260006060820190505b919050565b600060408201905073ffffffffffffffffffffffffffffffffffffffff841682528260208301525b9392505050565b60208152600d60208201527f4c50205265656e7472616e637900000000000000000000000000000000000000604082015260006060820190505b919050565b600067ffffffffffffffff808416818416019150808211156127de576127dd612228565b5b505b92915050565b60208152602a60208201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152602660208201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260006080820190505b919050565b60208152601d60208201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260006060820190505b919050565b60008251612901818460208701612316565b8083019150505b92915050565b60208152601160208201527f6d6f7265207468616e2036342062697473000000000000000000000000000000604082015260006060820190505b919050565b60208152600e60208201527f4e6f7420417574686f72697a6564000000000000000000000000000000000000604082015260006060820190505b919050565b60208152600082518060208401526129ab816040850160208701612316565b60407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150505b92915050565bfea26469706673582212208bb8e44e4f0309dcc0863da1b19329512aca596c68c2c1a005a0f90c5c4fc93664736f6c63430008100033";
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
    static createInterface(): EnforcedDecentralizationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EnforcedDecentralization;
}
export {};
