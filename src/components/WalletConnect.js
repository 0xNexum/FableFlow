import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function WalletConnect() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (account) {
      getBalance(account);
    }
  }, [account]);

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setError('');
      } catch (error) {
        setError('User denied account access');
      }
    } else {
      setError('No Ethereum browser extension detected');
    }
  };

  const getBalance = async (account) => {
    const web3 = new Web3(window.ethereum);
    const balanceInWei = await web3.eth.getBalance(account);
    const balanceInEth = web3.utils.fromWei(balanceInWei, 'ether');
    setBalance(balanceInEth);
  };

  const disconnectWallet = () => {
    setAccount('');
    setBalance('');
  };

  return (
    <div>
      <button onClick={connectWallet}>
        {account ? 'Connected' : 'Connect Wallet'}
      </button>
      {account && (
        <div>
          <p>Connected account: {account}</p>
          <p>Balance: {balance} ETH</p>
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default WalletConnect;
