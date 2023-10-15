import React from 'react';
import styled from 'styled-components';
import CoinItem from './CoinItem';
import './Coins.css'
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin'

const Coins = (props) => {
  // Check if props.coins is an array
  if (!Array.isArray(props.coins)) {
    return <p>Loading...</p>; // Or handle the non-array case as needed
  }

  return (
    <Container>
      <div>
        <Heading>
          <p>#</p>
          <p className='coin-name' style={{ marginLeft: '-4rem' }}>Coins</p>
          <p>Price</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Mkt Cap</p>
        </Heading>
        {props.coins.map((coin) => {
          return (
            <Link to={`/coin/${coin.id}`} element={<Coin/>} key={coin.id}>
          <CoinItem  coins={coin} />
          </Link>
          )
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width:1140px;
  margin:auto;
`;
const Heading = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color:#26272b;
  box-shadow:0px 0px 12px #18191b;
  border-radius:8px;
  margin:2rem 1rem;
  padding:.7rem 1rem;
  font-weight:700;
  `;

export default Coins;
