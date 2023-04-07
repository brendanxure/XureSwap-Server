const express = require('express')
const { getTokenPrice } = require('../Controller/tokenPrice')
const route = express.Router()

route.get('/', getTokenPrice)

module.exports = route
