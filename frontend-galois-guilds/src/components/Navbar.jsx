import React, { useState } from 'react'
import gglogo from '../assets/gglogo.jpg';
import WalletCard from './WalletCard';
import WalletProvider from './WalletProvider';

import { Signer, providers } from "ethers";
import { Link } from 'react-router-dom';
/* 
async function connectSigner() {
  // Establish a connection with the browser wallet's provider.
  const provider = new providers.Web3Provider(window.ethereum);
  // Request the connected accounts, prompting a browser wallet popup to connect.
  await provider.send("eth_requestAccounts", []);
  // Create a signer from the returned provider connection.
  const signer = provider.getSigner();
  // Return the signer
  return signer;
}
 */

const Navbar = ({onConnect}) => {

    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
            <img class="w-24 rounded-full" src={gglogo} alt="" />
                <a className="btn btn-ghost normal-case text-xl" href='/'> GaloisGuilds </a>
            </div>
            <div className="flex-none">
                <WalletCard onConnect={onConnect}/>
            </div>
            <Link to="/guild-creator">
            <div className='btn btn-tertiary normal-case text-xl' >
                Create Guild!
            </div>
            </Link>
        </div>

    )
}

export default Navbar