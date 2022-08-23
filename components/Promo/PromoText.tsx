import React from 'react'
import { PromoCategoryType } from '../../type'

const PromoText:React.FC<PromoCategoryType> = ({category}) => {
  return (
    
    <div>{category.text}</div>
  )
}

export default PromoText