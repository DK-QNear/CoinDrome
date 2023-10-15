import React from 'react'
import styled from 'styled-components'
import './Coins.css'
const CoinItem = (props) => {
  return (
    <CoinRow>
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol'>
                <img src={props.coins.image} alt='' />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
        <p>₹{props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hide-mobile'>₹{props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>₹{props.coins.market_cap.toLocaleString()}</p>
    </CoinRow>
  )
}
const CoinRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 1rem;
  transition: 0.5s ease-in-out; /* Move the transition property here */
  cursor: pointer;

  &:hover {
    transform: scale(1.1); /* Correct the transform syntax */
  }
`;

export default CoinItem
