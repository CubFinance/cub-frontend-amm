import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { CUB } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData: any = useGetPriceData()

  const cakePriceUsd = priceData && priceData.market_data.current_price.usd ? Number(priceData.market_data.current_price.usd) : 0

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `Cub Finance${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
