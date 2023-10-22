// WalletCard.jsx
import React, { useState } from 'react';
import { ethers } from 'ethers';

const WalletCard = ({ onConnect }) => {
  const [defaultAccount, setDefaultAccount] = useState(null);

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setDefaultAccount(address);
        onConnect(provider, address); // Pass the provider and account to onConnect callback
      } catch (error) {
        console.error('Error connecting to Metamask:', error);
      }
    }
  };

  return (
    <div className="Card flex">
      <button className="btn btn-secondary rounded-md" onClick={connectWalletHandler}>
        {defaultAccount ? `Connected!` : "Connect"}
      </button>
      {defaultAccount && (
        <div className="btn btn-primary shadow-md">{defaultAccount}</div>)
      }
    </div>
  );
};

export default WalletCard;
