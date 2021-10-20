require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name release magic minor hope clock metal gauge'; 
let testAccounts = [
"0xaa913a927727c2bddb80f835a63076d8bf9881d1aebc8689c2b579a937733a6e",
"0xdb15015dacc71fd89ce26e468d501a35a586f8790c3a9f45fa212c60ae7040a6",
"0x48e6a62d83e5863ec9ec1c8c140ab8be667b53d69fb5623988ce07867c48a9c5",
"0x3ac27267f23be0c914b87d15b4bdb7132e35eb8550cc7a62b2eab025598a00c7",
"0x1026ad5215caec4211d008b4873222cc4b6653acf7c76a76bb2a7ca5b9d8580c",
"0xe8c4e27f31f2720e748ac5d17f1ce202cf6750494e82dafabe2f00742695e072",
"0x9142358223730a4a93051e21d3bf3424725d367d946503d6aabf0866086f6b4f",
"0x23d827fffd738334cd481cca23dfb6bfcb397dfe1606db719363a3118f50d0ee",
"0xa9b566177bf0200fa5375af906ef3e0743f89a56585166d10fce2d184d87e679",
"0xa8af7695063bd00a13edaf97b7017949bada07c876908d6c4107bb001842547a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

