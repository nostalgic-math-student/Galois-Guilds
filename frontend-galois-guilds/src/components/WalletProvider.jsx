import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import WalletCard from './WalletCard';

const WalletProvider = ({ children }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [defaultAccount, setDefaultAccount] = useState();

  useEffect(() => {
    if (window.ethereum) {
      provider.send("eth_requestAccounts", []).then(async () => {
        await accountChangedHandler(provider.getSigner());
      });
    }
  }, []);

  const accountChangedHandler = async (newAccount) => {
    const address = await newAccount.getAddress();
    setDefaultAccount(address);
  };

  return (
    <div>
        <WalletCard provider={provider} defaultAccount={defaultAccount}/>
      {children({ provider, defaultAccount })}
    </div>
  );
};

export default WalletProvider;
