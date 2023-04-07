const Moralis = require('moralis').default;

const getTokenPrice = async(req, res)=> {

    const {query} = req

    const resOne = await Moralis.EvmApi.token.getTokenPrice({
        address: query.addressOne
    })

    const resTwo = await Moralis.EvmApi.token.getTokenPrice({
        address: query.addressTwo 
    })

    const usdPrice = {
        priceOne : resOne.raw.usdPrice,
        priceTwo : resTwo.raw.usdPrice,
        ratio: resOne.raw.usdPrice / resTwo.raw.usdPrice
    }

    console.log(usdPrice)

    return res.status(200).json(usdPrice)}


module.exports = {
    getTokenPrice
}