export const TOKEN_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const TOKEN_ABI = [
  {
    "_format": "hh-sol-artifact-1",
    "contractName": "OneStepToken",
    "sourceName": "contracts/OneStepToken.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "initialOwner",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "allowance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "needed",
            "type": "uint256"
          }
        ],
        "name": "ERC20InsufficientAllowance",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "needed",
            "type": "uint256"
          }
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "approver",
            "type": "address"
          }
        ],
        "name": "ERC20InvalidApprover",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          }
        ],
        "name": "ERC20InvalidReceiver",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "ERC20InvalidSender",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "ERC20InvalidSpender",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b50604051611a60380380611a6083398181016040528101906100329190610272565b806040518060400160405280600c81526020017f4f6e6553746570546f6b656e00000000000000000000000000000000000000008152506040518060400160405280600481526020017f4f5341410000000000000000000000000000000000000000000000000000000081525081600390816100ae91906104ef565b5080600490816100be91906104ef565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101335760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161012a91906105d0565b60405180910390fd5b6101428161014960201b60201c565b50506105eb565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061023f82610214565b9050919050565b61024f81610234565b811461025a57600080fd5b50565b60008151905061026c81610246565b92915050565b6000602082840312156102885761028761020f565b5b60006102968482850161025d565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061032057607f821691505b602082108103610333576103326102d9565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261039b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261035e565b6103a5868361035e565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006103ec6103e76103e2846103bd565b6103c7565b6103bd565b9050919050565b6000819050919050565b610406836103d1565b61041a610412826103f3565b84845461036b565b825550505050565b600090565b61042f610422565b61043a8184846103fd565b505050565b5b8181101561045e57610453600082610427565b600181019050610440565b5050565b601f8211156104a35761047481610339565b61047d8461034e565b8101602085101561048c578190505b6104a06104988561034e565b83018261043f565b50505b505050565b600082821c905092915050565b60006104c6600019846008026104a8565b1980831691505092915050565b60006104df83836104b5565b9150826002028217905092915050565b6104f88261029f565b67ffffffffffffffff811115610511576105106102aa565b5b61051b8254610308565b610526828285610462565b600060209050601f8311600181146105595760008415610547578287015190505b61055185826104d3565b8655506105b9565b601f19841661056786610339565b60005b8281101561058f5784890151825560018201915060208501945060208101905061056a565b868310156105ac57848901516105a8601f8916826104b5565b8355505b6001600288020188555050505b505050505050565b6105ca81610234565b82525050565b60006020820190506105e560008301846105c1565b92915050565b611466806105fa6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063715018a61161008c5780639dc29fac116100665780639dc29fac1461023b578063a9059cbb14610257578063dd62ed3e14610287578063f2fde38b146102b7576100ea565b8063715018a6146101f55780638da5cb5b146101ff57806395d89b411461021d576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b57806340c10f19146101a957806370a08231146101c5576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f76102d3565b6040516101049190610efa565b60405180910390f35b61012760048036038101906101229190610fb5565b610365565b6040516101349190611010565b60405180910390f35b610145610388565b604051610152919061103a565b60405180910390f35b61017560048036038101906101709190611055565b610392565b6040516101829190611010565b60405180910390f35b6101936103c1565b6040516101a091906110c4565b60405180910390f35b6101c360048036038101906101be9190610fb5565b6103ca565b005b6101df60048036038101906101da91906110df565b6103fe565b6040516101ec919061103a565b60405180910390f35b6101fd610446565b005b61020761045a565b604051610214919061111b565b60405180910390f35b610225610484565b6040516102329190610efa565b60405180910390f35b61025560048036038101906102509190610fb5565b610516565b005b610271600480360381019061026c9190610fb5565b61054a565b60405161027e9190611010565b60405180910390f35b6102a1600480360381019061029c9190611136565b61056d565b6040516102ae919061103a565b60405180910390f35b6102d160048036038101906102cc91906110df565b6105f4565b005b6060600380546102e2906111a5565b80601f016020809104026020016040519081016040528092919081815260200182805461030e906111a5565b801561035b5780601f106103305761010080835404028352916020019161035b565b820191906000526020600020905b81548152906001019060200180831161033e57829003601f168201915b5050505050905090565b60008061037061067a565b905061037d818585610682565b600191505092915050565b6000600254905090565b60008061039d61067a565b90506103aa858285610694565b6103b5858585610729565b60019150509392505050565b60006012905090565b6103d261081d565b6103fa826103de6103c1565b600a6103ea9190611338565b836103f59190611383565b6108a4565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61044e61081d565b6104586000610926565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610493906111a5565b80601f01602080910402602001604051908101604052809291908181526020018280546104bf906111a5565b801561050c5780601f106104e15761010080835404028352916020019161050c565b820191906000526020600020905b8154815290600101906020018083116104ef57829003601f168201915b5050505050905090565b61051e61081d565b6105468261052a6103c1565b600a6105369190611338565b836105419190611383565b6109ec565b5050565b60008061055561067a565b9050610562818585610729565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6105fc61081d565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361066e5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610665919061111b565b60405180910390fd5b61067781610926565b50565b600033905090565b61068f8383836001610a6e565b505050565b60006106a0848461056d565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156107235781811015610713578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161070a939291906113c5565b60405180910390fd5b61072284848484036000610a6e565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361079b5760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610792919061111b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361080d5760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610804919061111b565b60405180910390fd5b610818838383610c45565b505050565b61082561067a565b73ffffffffffffffffffffffffffffffffffffffff1661084361045a565b73ffffffffffffffffffffffffffffffffffffffff16146108a25761086661067a565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610899919061111b565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109165760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161090d919061111b565b60405180910390fd5b61092260008383610c45565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a5e5760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610a55919061111b565b60405180910390fd5b610a6a82600083610c45565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610ae05760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610ad7919061111b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b525760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610b49919061111b565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610c3f578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610c36919061103a565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c97578060026000828254610c8b91906113fc565b92505081905550610d6a565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d23578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610d1a939291906113c5565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610db35780600260008282540392505081905550610e00565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e5d919061103a565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ea4578082015181840152602081019050610e89565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ecc82610e6a565b610ed68185610e75565b9350610ee6818560208601610e86565b610eef81610eb0565b840191505092915050565b60006020820190508181036000830152610f148184610ec1565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f4c82610f21565b9050919050565b610f5c81610f41565b8114610f6757600080fd5b50565b600081359050610f7981610f53565b92915050565b6000819050919050565b610f9281610f7f565b8114610f9d57600080fd5b50565b600081359050610faf81610f89565b92915050565b60008060408385031215610fcc57610fcb610f1c565b5b6000610fda85828601610f6a565b9250506020610feb85828601610fa0565b9150509250929050565b60008115159050919050565b61100a81610ff5565b82525050565b60006020820190506110256000830184611001565b92915050565b61103481610f7f565b82525050565b600060208201905061104f600083018461102b565b92915050565b60008060006060848603121561106e5761106d610f1c565b5b600061107c86828701610f6a565b935050602061108d86828701610f6a565b925050604061109e86828701610fa0565b9150509250925092565b600060ff82169050919050565b6110be816110a8565b82525050565b60006020820190506110d960008301846110b5565b92915050565b6000602082840312156110f5576110f4610f1c565b5b600061110384828501610f6a565b91505092915050565b61111581610f41565b82525050565b6000602082019050611130600083018461110c565b92915050565b6000806040838503121561114d5761114c610f1c565b5b600061115b85828601610f6a565b925050602061116c85828601610f6a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806111bd57607f821691505b6020821081036111d0576111cf611176565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111561125c57808604811115611238576112376111d6565b5b60018516156112475780820291505b808102905061125585611205565b945061121c565b94509492505050565b6000826112755760019050611331565b816112835760009050611331565b816001811461129957600281146112a3576112d2565b6001915050611331565b60ff8411156112b5576112b46111d6565b5b8360020a9150848211156112cc576112cb6111d6565b5b50611331565b5060208310610133831016604e8410600b84101617156113075782820a905083811115611302576113016111d6565b5b611331565b6113148484846001611212565b9250905081840481111561132b5761132a6111d6565b5b81810290505b9392505050565b600061134382610f7f565b915061134e836110a8565b925061137b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611265565b905092915050565b600061138e82610f7f565b915061139983610f7f565b92508282026113a781610f7f565b915082820484148315176113be576113bd6111d6565b5b5092915050565b60006060820190506113da600083018661110c565b6113e7602083018561102b565b6113f4604083018461102b565b949350505050565b600061140782610f7f565b915061141283610f7f565b925082820190508082111561142a576114296111d6565b5b9291505056fea2646970667358221220f5dfe265a1dc38bc80a17d0b15bf248513d17d242f77cfb3ea08611da98b782664736f6c634300081c0033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063715018a61161008c5780639dc29fac116100665780639dc29fac1461023b578063a9059cbb14610257578063dd62ed3e14610287578063f2fde38b146102b7576100ea565b8063715018a6146101f55780638da5cb5b146101ff57806395d89b411461021d576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b57806340c10f19146101a957806370a08231146101c5576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f76102d3565b6040516101049190610efa565b60405180910390f35b61012760048036038101906101229190610fb5565b610365565b6040516101349190611010565b60405180910390f35b610145610388565b604051610152919061103a565b60405180910390f35b61017560048036038101906101709190611055565b610392565b6040516101829190611010565b60405180910390f35b6101936103c1565b6040516101a091906110c4565b60405180910390f35b6101c360048036038101906101be9190610fb5565b6103ca565b005b6101df60048036038101906101da91906110df565b6103fe565b6040516101ec919061103a565b60405180910390f35b6101fd610446565b005b61020761045a565b604051610214919061111b565b60405180910390f35b610225610484565b6040516102329190610efa565b60405180910390f35b61025560048036038101906102509190610fb5565b610516565b005b610271600480360381019061026c9190610fb5565b61054a565b60405161027e9190611010565b60405180910390f35b6102a1600480360381019061029c9190611136565b61056d565b6040516102ae919061103a565b60405180910390f35b6102d160048036038101906102cc91906110df565b6105f4565b005b6060600380546102e2906111a5565b80601f016020809104026020016040519081016040528092919081815260200182805461030e906111a5565b801561035b5780601f106103305761010080835404028352916020019161035b565b820191906000526020600020905b81548152906001019060200180831161033e57829003601f168201915b5050505050905090565b60008061037061067a565b905061037d818585610682565b600191505092915050565b6000600254905090565b60008061039d61067a565b90506103aa858285610694565b6103b5858585610729565b60019150509392505050565b60006012905090565b6103d261081d565b6103fa826103de6103c1565b600a6103ea9190611338565b836103f59190611383565b6108a4565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61044e61081d565b6104586000610926565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610493906111a5565b80601f01602080910402602001604051908101604052809291908181526020018280546104bf906111a5565b801561050c5780601f106104e15761010080835404028352916020019161050c565b820191906000526020600020905b8154815290600101906020018083116104ef57829003601f168201915b5050505050905090565b61051e61081d565b6105468261052a6103c1565b600a6105369190611338565b836105419190611383565b6109ec565b5050565b60008061055561067a565b9050610562818585610729565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6105fc61081d565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361066e5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610665919061111b565b60405180910390fd5b61067781610926565b50565b600033905090565b61068f8383836001610a6e565b505050565b60006106a0848461056d565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156107235781811015610713578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161070a939291906113c5565b60405180910390fd5b61072284848484036000610a6e565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361079b5760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610792919061111b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361080d5760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610804919061111b565b60405180910390fd5b610818838383610c45565b505050565b61082561067a565b73ffffffffffffffffffffffffffffffffffffffff1661084361045a565b73ffffffffffffffffffffffffffffffffffffffff16146108a25761086661067a565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610899919061111b565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109165760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161090d919061111b565b60405180910390fd5b61092260008383610c45565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a5e5760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610a55919061111b565b60405180910390fd5b610a6a82600083610c45565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610ae05760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610ad7919061111b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b525760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610b49919061111b565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610c3f578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610c36919061103a565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c97578060026000828254610c8b91906113fc565b92505081905550610d6a565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d23578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610d1a939291906113c5565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610db35780600260008282540392505081905550610e00565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e5d919061103a565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ea4578082015181840152602081019050610e89565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ecc82610e6a565b610ed68185610e75565b9350610ee6818560208601610e86565b610eef81610eb0565b840191505092915050565b60006020820190508181036000830152610f148184610ec1565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f4c82610f21565b9050919050565b610f5c81610f41565b8114610f6757600080fd5b50565b600081359050610f7981610f53565b92915050565b6000819050919050565b610f9281610f7f565b8114610f9d57600080fd5b50565b600081359050610faf81610f89565b92915050565b60008060408385031215610fcc57610fcb610f1c565b5b6000610fda85828601610f6a565b9250506020610feb85828601610fa0565b9150509250929050565b60008115159050919050565b61100a81610ff5565b82525050565b60006020820190506110256000830184611001565b92915050565b61103481610f7f565b82525050565b600060208201905061104f600083018461102b565b92915050565b60008060006060848603121561106e5761106d610f1c565b5b600061107c86828701610f6a565b935050602061108d86828701610f6a565b925050604061109e86828701610fa0565b9150509250925092565b600060ff82169050919050565b6110be816110a8565b82525050565b60006020820190506110d960008301846110b5565b92915050565b6000602082840312156110f5576110f4610f1c565b5b600061110384828501610f6a565b91505092915050565b61111581610f41565b82525050565b6000602082019050611130600083018461110c565b92915050565b6000806040838503121561114d5761114c610f1c565b5b600061115b85828601610f6a565b925050602061116c85828601610f6a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806111bd57607f821691505b6020821081036111d0576111cf611176565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111561125c57808604811115611238576112376111d6565b5b60018516156112475780820291505b808102905061125585611205565b945061121c565b94509492505050565b6000826112755760019050611331565b816112835760009050611331565b816001811461129957600281146112a3576112d2565b6001915050611331565b60ff8411156112b5576112b46111d6565b5b8360020a9150848211156112cc576112cb6111d6565b5b50611331565b5060208310610133831016604e8410600b84101617156113075782820a905083811115611302576113016111d6565b5b611331565b6113148484846001611212565b9250905081840481111561132b5761132a6111d6565b5b81810290505b9392505050565b600061134382610f7f565b915061134e836110a8565b925061137b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611265565b905092915050565b600061138e82610f7f565b915061139983610f7f565b92508282026113a781610f7f565b915082820484148315176113be576113bd6111d6565b5b5092915050565b60006060820190506113da600083018661110c565b6113e7602083018561102b565b6113f4604083018461102b565b949350505050565b600061140782610f7f565b915061141283610f7f565b925082820190508082111561142a576114296111d6565b5b9291505056fea2646970667358221220f5dfe265a1dc38bc80a17d0b15bf248513d17d242f77cfb3ea08611da98b782664736f6c634300081c0033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  
];
