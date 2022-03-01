//https://eth-ropsten.alchemyapi.io/v2/BmjqXDx_rkUV63_KCOhWMX56S14LnKHl
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/BmjqXDx_rkUV63_KCOhWMX56S14LnKHl',
      accounts: [
        '3b5903ba9d4afc88f16bc310534fd8505bf7a305a93e9bb3a906661d7f9d37cf',
      ],
    },
  },
}
