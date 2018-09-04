import uuid from 'react-native-uuid';

const defaultTokens = [
  {
    name: 'Ethereum',
    id: uuid.v4(),
    symbol: 'ETH',
  },
];

const idexAbi = [
  {
    constant: false,
    inputs: [
      {
        name: 'assertion',
        type: 'bool',
      },
    ],
    name: 'assert',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'setOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
      {
        name: 'user',
        type: 'address',
      },
      {
        name: 'nonce',
        type: 'uint256',
      },
      {
        name: 'v',
        type: 'uint8',
      },
      {
        name: 'r',
        type: 'bytes32',
      },
      {
        name: 's',
        type: 'bytes32',
      },
      {
        name: 'feeWithdrawal',
        type: 'uint256',
      },
    ],
    name: 'adminWithdraw',
    outputs: [
      {
        name: 'success',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'lastActiveTransaction',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'depositToken',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'withdrawn',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'admins',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'admin',
        type: 'address',
      },
      {
        name: 'isAdmin',
        type: 'bool',
      },
    ],
    name: 'setAdmin',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'tokens',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'feeAccount',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'invalidOrder',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'getOwner',
    outputs: [
      {
        name: 'out',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'a',
        type: 'uint256',
      },
      {
        name: 'b',
        type: 'uint256',
      },
    ],
    name: 'safeSub',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'user',
        type: 'address',
      },
      {
        name: 'nonce',
        type: 'uint256',
      },
    ],
    name: 'invalidateOrdersBefore',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'a',
        type: 'uint256',
      },
      {
        name: 'b',
        type: 'uint256',
      },
    ],
    name: 'safeMul',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'deposit',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'traded',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'expiry',
        type: 'uint256',
      },
    ],
    name: 'setInactivityReleasePeriod',
    outputs: [
      {
        name: 'success',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'a',
        type: 'uint256',
      },
      {
        name: 'b',
        type: 'uint256',
      },
    ],
    name: 'safeAdd',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'tradeValues',
        type: 'uint256[8]',
      },
      {
        name: 'tradeAddresses',
        type: 'address[4]',
      },
      {
        name: 'v',
        type: 'uint8[2]',
      },
      {
        name: 'rs',
        type: 'bytes32[4]',
      },
    ],
    name: 'trade',
    outputs: [
      {
        name: 'success',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'inactivityReleasePeriod',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [
      {
        name: 'success',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'orderFills',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
      {
        name: 'user',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'feeAccount_',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    payable: false,
    stateMutability: 'nonpayable',
    type: 'fallback',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'SetOwner',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'tokenBuy',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amountBuy',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'tokenSell',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amountSell',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'expires',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'nonce',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'v',
        type: 'uint8',
      },
      {
        indexed: false,
        name: 'r',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'Order',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'tokenBuy',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amountBuy',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'tokenSell',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amountSell',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'expires',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'nonce',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'v',
        type: 'uint8',
      },
      {
        indexed: false,
        name: 'r',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'Cancel',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'tokenBuy',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amountBuy',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'tokenSell',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amountSell',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'get',
        type: 'address',
      },
      {
        indexed: false,
        name: 'give',
        type: 'address',
      },
    ],
    name: 'Trade',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'balance',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'balance',
        type: 'uint256',
      },
    ],
    name: 'Withdraw',
    type: 'event',
  },
];

const erc20Abi = [
  {
    name: 'balanceOf',
    type: 'function',
    constant: true,
    payable: false,
    inputs: [
      {
        name: '_owner',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: 'balance',
        type: 'uint256',
      },
    ],
  },
  {
    name: 'transfer',
    type: 'function',
    constant: false,
    payable: false,
    inputs: [
      {
        name: '_to',
        type: 'address',
      },
      {
        name: '_value',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'success',
        type: 'bool',
      },
    ],
  },
];

export { defaultTokens, erc20Abi, idexAbi };
