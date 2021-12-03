var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
var _abi = [
    {
        inputs: [
            {
                internalType: "uint32",
                name: "by",
                type: "uint32",
            },
        ],
        name: "advanceTime",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint32",
                        name: "advanceTimeBy",
                        type: "uint32",
                    },
                    {
                        internalType: "int24",
                        name: "tick",
                        type: "int24",
                    },
                    {
                        internalType: "uint128",
                        name: "liquidity",
                        type: "uint128",
                    },
                ],
                internalType: "struct OracleTest.UpdateParams[]",
                name: "params",
                type: "tuple[]",
            },
        ],
        name: "batchUpdate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "cardinality",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cardinalityNext",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32[]",
                name: "secondsAgos",
                type: "uint32[]",
            },
        ],
        name: "getGasCostOfObserve",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "_cardinalityNext",
                type: "uint16",
            },
        ],
        name: "grow",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "index",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint32",
                        name: "time",
                        type: "uint32",
                    },
                    {
                        internalType: "int24",
                        name: "tick",
                        type: "int24",
                    },
                    {
                        internalType: "uint128",
                        name: "liquidity",
                        type: "uint128",
                    },
                ],
                internalType: "struct OracleTest.InitializeParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "liquidity",
        outputs: [
            {
                internalType: "uint128",
                name: "",
                type: "uint128",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "observations",
        outputs: [
            {
                internalType: "uint32",
                name: "blockTimestamp",
                type: "uint32",
            },
            {
                internalType: "int56",
                name: "tickCumulative",
                type: "int56",
            },
            {
                internalType: "uint160",
                name: "secondsPerLiquidityCumulativeX128",
                type: "uint160",
            },
            {
                internalType: "bool",
                name: "initialized",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32[]",
                name: "secondsAgos",
                type: "uint32[]",
            },
        ],
        name: "observe",
        outputs: [
            {
                internalType: "int56[]",
                name: "tickCumulatives",
                type: "int56[]",
            },
            {
                internalType: "uint160[]",
                name: "secondsPerLiquidityCumulativeX128s",
                type: "uint160[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "tick",
        outputs: [
            {
                internalType: "int24",
                name: "",
                type: "int24",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "time",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint32",
                        name: "advanceTimeBy",
                        type: "uint32",
                    },
                    {
                        internalType: "int24",
                        name: "tick",
                        type: "int24",
                    },
                    {
                        internalType: "uint128",
                        name: "liquidity",
                        type: "uint128",
                    },
                ],
                internalType: "struct OracleTest.UpdateParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "update",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156100115760006000fd5b50610017565b612104806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100ef5760003560e01c8063761eb23e1161008d578063daf50f6b11610067578063daf50f6b14610255578063dbffe9ad14610271578063dd158c181461028f578063f7fd2cfa146102ad576100ef565b8063761eb23e146101ec578063883bdbfd14610208578063d81740db14610239576100ef565b80632986c0e5116100c95780632986c0e5146101645780633eaf5d9f1461018257806365829dc5146101a057806374e69cef146101bc576100ef565b806316ada547146100f55780631a68650214610113578063252c09d714610131576100ef565b60006000fd5b6100fd6102c9565b60405161010a919061206d565b60405180910390f35b61011b6102e0565b6040516101289190612021565b60405180910390f35b61014b60048036038101906101469190611ed8565b610303565b60405161015b9493929190612085565b60405180910390f35b61016c610387565b6040516101799190612045565b60405180910390f35b61018a61039c565b6040516101979190611fcd565b60405180910390f35b6101ba60048036038101906101b59190611e48565b6103b0565b005b6101d660048036038101906101d19190611d81565b61052e565b6040516101e3919061205b565b60405180910390f35b61020660048036038101906102019190611ea9565b61062b565b005b610222600480360381019061021d9190611d81565b610676565b604051610230929190611f25565b60405180910390f35b610253600480360381019061024e9190611d0c565b610750565b005b61026f600480360381019061026a9190611e24565b610973565b005b610279610af1565b6040516102869190612045565b60405180910390f35b610297610b06565b6040516102a49190612045565b60405180910390f35b6102c760048036038101906102c29190611ef4565b610b1b565b005b61ffff60009054906101000a900463ffffffff1681565b61ffff60079054906101000a90046fffffffffffffffffffffffffffffffff1681565b60006000508161ffff811061031757600080fd5b90900160005b915090508060000160009054906101000a900463ffffffff16908060000160049054906101000a900460060b9080600001600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600001601f9054906101000a900460ff16905084565b61ffff60179054906101000a900461ffff1681565b61ffff60049054906101000a900460020b81565b6103d18160000160208101906103c69190611ef4565b610b1b63ffffffff16565b61046761ffff60179054906101000a900461ffff1661ffff60009054906101000a900463ffffffff1661ffff60049054906101000a900460020b61ffff60079054906101000a90046fffffffffffffffffffffffffffffffff1661ffff60199054906101000a900461ffff1661ffff601b9054906101000a900461ffff166000600050610b56909695949392919063ffffffff16565b61ffff601761ffff60198491906101000a81548161ffff021916908361ffff1602179055508391906101000a81548161ffff021916908361ffff16021790555050508060200160208101906104bc9190611df6565b61ffff60046101000a81548162ffffff021916908360020b62ffffff1602179055508060400160208101906104f19190611e6c565b61ffff60076101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b50565b6000600060006000600061ffff60009054906101000a900463ffffffff1661ffff60049054906101000a900460020b61ffff60079054906101000a90046fffffffffffffffffffffffffffffffff1661ffff60179054906101000a900461ffff16935093509350935060005a905061060f85898980806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505086858761ffff60199054906101000a900461ffff166000600050610daa909695949392919063ffffffff16565b50505a8103955050505050506106255650505050505b92915050565b61065561ffff601b9054906101000a900461ffff16826000600050610f8d9092919063ffffffff16565b61ffff601b6101000a81548161ffff021916908361ffff1602179055505b50565b6060606061074061ffff60009054906101000a900463ffffffff16858580806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061ffff60049054906101000a900460020b61ffff60179054906101000a900461ffff1661ffff60079054906101000a90046fffffffffffffffffffffffffffffffff1661ffff60199054906101000a900461ffff166000600050610daa909695949392919063ffffffff16565b91509150610749565b9250929050565b600061ffff60049054906101000a900460020b9050600061ffff60079054906101000a90046fffffffffffffffffffffffffffffffff169050600061ffff60179054906101000a900461ffff169050600061ffff60199054906101000a900461ffff169050600061ffff601b9054906101000a900461ffff169050600061ffff60009054906101000a900463ffffffff1690506000600090505b888890508110156108ac57888882818110151561080357fe5b905060600201600001602081019061081b9190611ef4565b8201915081506108428583898988886000600050610b56909695949392919063ffffffff16565b8095508196505050888882818110151561085857fe5b90506060020160200160208101906108709190611df6565b96508650888882818110151561088257fe5b905060600201604001602081019061089a9190611e6c565b955085505b80806001019150506107ea565b508561ffff60046101000a81548162ffffff021916908360020b62ffffff1602179055508461ffff60076101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055508361ffff60176101000a81548161ffff021916908361ffff1602179055508261ffff60196101000a81548161ffff021916908361ffff1602179055508061ffff60006101000a81548163ffffffff021916908363ffffffff1602179055505050505050505b5050565b600061ffff60199054906101000a900461ffff1661ffff161415156109cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c490611fe2565b60405180910390fd5b8060000160208101906109e09190611ef4565b61ffff60006101000a81548163ffffffff021916908363ffffffff160217905550806020016020810190610a149190611df6565b61ffff60046101000a81548162ffffff021916908360020b62ffffff160217905550806040016020810190610a499190611e6c565b61ffff60076101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550610aab816000016020810190610a989190611ef4565b600060005061109890919063ffffffff16565b61ffff601961ffff601b8491906101000a81548161ffff021916908361ffff1602179055508391906101000a81548161ffff021916908361ffff16021790555050505b50565b61ffff60199054906101000a900461ffff1681565b61ffff601b9054906101000a900461ffff1681565b8061ffff60008282829054906101000a900463ffffffff160192506101000a81548163ffffffff021916908363ffffffff1602179055505b50565b600060006000898961ffff1661ffff81101515610b6f57fe5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff16151515158152602001505090508763ffffffff16816000015163ffffffff161415610c5e5788859250925050610d9e565b8461ffff168461ffff16118015610c7f57506001850361ffff168961ffff16145b15610c8e578391508150610c94565b84915081505b8161ffff1660018a0161ffff16811515610caa57fe5b0692508250610cc1818989896111d663ffffffff16565b8a8461ffff1661ffff81101515610cd457fe5b90900160005b5060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a81548166ffffffffffffff021916908360060b66ffffffffffffff160217905550604082015181600001600b6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600001601f6101000a81548160ff021916908315150217905550905050505b97509795505050505050565b6060606060008361ffff16111515610e2d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260018152602001807f490000000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b865167ffffffffffffffff81118015610e465760006000fd5b50604051908082528060200260200182016040528015610e755781602001602082028036833780820191505090505b5091508150865167ffffffffffffffff81118015610e935760006000fd5b50604051908082528060200260200182016040528015610ec25781602001602082028036833780820191505090505b50905080506000600090505b8751811015610f7f57610f018a8a8a84815181101515610eea57fe5b60200260200101518a8a8a8a6112cc63ffffffff16565b8483815181101515610f0f57fe5b602002602001018484815181101515610f2457fe5b6020026020010182909073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020015082909060060b60060b81526020015050505b8080600101915050610ece565b505b97509795505050505050565b600060008361ffff1611151561100e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260018152602001807f490000000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b8261ffff168261ffff1611151561102757829050611091565b60008390505b8261ffff168161ffff161015611088576001858261ffff1661ffff8110151561105257fe5b90900160005b5060000160006101000a81548163ffffffff021916908363ffffffff1602179055505b808060010191505061102d565b50819050611091565b9392505050565b6000600060405180608001604052808463ffffffff168152602001600060060b8152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016001151581526020015084600061ffff811015156110f457fe5b90900160005b5060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a81548166ffffffffffffff021916908360060b66ffffffffffffff160217905550604082015181600001600b6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600001601f6101000a81548160ff02191690831515021790555090505060016001819150809050915091506111cf565b9250929050565b6111de611ca1565b600085600001518503905060405180608001604052808663ffffffff1681526020018263ffffffff168660020b0288602001510160060b81526020016000856fffffffffffffffffffffffffffffffff161161123b57600161123d565b845b6fffffffffffffffffffffffffffffffff1660808463ffffffff1673ffffffffffffffffffffffffffffffffffffffff16901b73ffffffffffffffffffffffffffffffffffffffff1681151561128f57fe5b0488604001510173ffffffffffffffffffffffffffffffffffffffff168152602001600115158152602001509150506112c456505b949350505050565b6000600060008763ffffffff161415611404576000898661ffff1661ffff811015156112f457fe5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff16151515158152602001505090508863ffffffff16816000015163ffffffff161415156113ef576113ea818a89886111d663ffffffff16565b905080505b80602001518160400151925092505061152856505b60008789039050600060006114248c8c858c8c8c8c61153463ffffffff16565b91509150816000015163ffffffff168363ffffffff16141561145a57816020015182604001519450945050505061152856611524565b806000015163ffffffff168363ffffffff16141561148c57806020015181604001519450945050505061152856611523565b60008260000151826000015103905060008360000151850390508063ffffffff168263ffffffff16856020015185602001510360060b8115156114cb57fe5b05028460200151018263ffffffff168263ffffffff16866040015186604001510373ffffffffffffffffffffffffffffffffffffffff160281151561150c57fe5b048560400151019650965050505050506115285650505b5b5050505b97509795505050505050565b61153c611ca1565b611544611ca1565b888561ffff1661ffff8110151561155757fe5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff161515151581526020015050915081506116398883600001518961191563ffffffff16565b15611682578663ffffffff16826000015163ffffffff1614156116655781819150915061190956611681565b81611678838989886111d663ffffffff16565b91509150611909565b5b888361ffff166001870161ffff1681151561169957fe5b0661ffff1661ffff811015156116ab57fe5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff16151515158152602001505091508150816060015115156118615788600061ffff8110151561179357fe5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff161515151581526020015050915081505b6118768883600001518961191563ffffffff16565b15156118ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260038152602001807f4f4c44000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b61190089898988876119e363ffffffff16565b91509150611909565b97509795505050505050565b60008363ffffffff168363ffffffff161115801561193f57508363ffffffff168263ffffffff1611155b1561195b578163ffffffff168363ffffffff16111590506119dc565b60008463ffffffff168463ffffffff1611611983576401000000008463ffffffff160161198b565b8363ffffffff165b64ffffffffff16905060008563ffffffff168463ffffffff16116119bc576401000000008463ffffffff16016119c4565b8363ffffffff165b64ffffffffff16905080821115925050506119dc5650505b9392505050565b6119eb611ca1565b6119f3611ca1565b60008361ffff166001860161ffff16811515611a0b57fe5b0661ffff169050600060018561ffff16830103905060005b600115611c93576002828401811515611a3857fe5b0490508050898661ffff1682811515611a4d57fe5b0661ffff81101515611a5b57fe5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff1615151515815260200150509450845084606001511515611b40576001810192508250611a23565b898661ffff1660018301811515611b5357fe5b0661ffff81101515611b6157fe5b90900160005b506040518060800160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900460060b60060b60060b815260200160008201600b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160008201601f9054906101000a900460ff161515151581526020015050935083506000611c458a87600001518b61191563ffffffff16565b9050808015611c655750611c648a8a876000015161191563ffffffff16565b5b15611c705750611c93565b801515611c84576001820392508250611c8d565b60018201935083505b50611a23565b5050505b9550959350505050565b6040518060800160405280600063ffffffff168152602001600060060b8152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020015090566120cd565b600060608284031215611d02578081fd5b8190505b92915050565b6000600060208385031215611d1f578182fd5b823567ffffffffffffffff80821115611d36578384fd5b818501915085601f8301121515611d4b578384fd5b813581811115611d59578485fd5b866020606083028501011115611d6d578485fd5b6020830194508093505050505b9250929050565b6000600060208385031215611d94578182fd5b823567ffffffffffffffff80821115611dab578384fd5b818501915085601f8301121515611dc0578384fd5b813581811115611dce578485fd5b866020602083028501011115611de2578485fd5b6020830194508093505050505b9250929050565b600060208284031215611e07578081fd5b81358060020b81141515611e19578182fd5b809150505b92915050565b600060608284031215611e35578081fd5b611e3f8383611cf1565b90505b92915050565b600060608284031215611e59578081fd5b611e638383611cf1565b90505b92915050565b600060208284031215611e7d578081fd5b81356fffffffffffffffffffffffffffffffff811681141515611e9e578182fd5b809150505b92915050565b600060208284031215611eba578081fd5b813561ffff811681141515611ecd578182fd5b809150505b92915050565b600060208284031215611ee9578081fd5b813590505b92915050565b600060208284031215611f05578081fd5b813563ffffffff811681141515611f1a578182fd5b809150505b92915050565b6000604082016040835280855180835260608501915060209250828701845b82811015611f6957815160060b8452848401935084820191505b600181019050611f44565b5050508381038285015280855180835283830191508387019250845b81811015611fbd5773ffffffffffffffffffffffffffffffffffffffff8451168352848301925084840193505b600181019050611f85565b50508093505050505b9392505050565b60006020820190508260020b82525b92915050565b600060208252601360208301527f616c726561647920696e697469616c697a65640000000000000000000000000060408301526060820190505b919050565b60006020820190506fffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905061ffff831682525b92915050565b60006020820190508282525b92915050565b600060208201905063ffffffff831682525b92915050565b600060808201905063ffffffff861682528460060b602083015273ffffffffffffffffffffffffffffffffffffffff8416604083015282151560608301525b95945050505050565bfea26469706673582212202136e6ad9b35f2354ba97553cceae1716275997c7649f3e891a05c7b6fa3ef7c64736f6c63430007060033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var OracleTest__factory = /** @class */ (function (_super) {
    __extends(OracleTest__factory, _super);
    function OracleTest__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    OracleTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    OracleTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    OracleTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    OracleTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    OracleTest__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    OracleTest__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    OracleTest__factory.bytecode = _bytecode;
    OracleTest__factory.abi = _abi;
    return OracleTest__factory;
}(ContractFactory));
export { OracleTest__factory };
