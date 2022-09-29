# Web3 Leaderboard

---

A web3 game leaderboard that shows the $LC balances of players and allows them to transact.

You can view a live demo here: [Web3 Leaderboard Challenge](https://web3-leaderboard-challenge.vercel.app/)  
*(note that you need 50 + $LC to access the dashboard - drop me a message to get some)*

## Features

- [x] Dashboard showing current balance and rank for all players
- [x] Add players using their wallet address
- [x] Send funds to another player using your MetaMask wallet

![Screenshot of Leaderboard](/assets/Leaderboard.png "Leaderboard")
![Screenshot of Add User Screen](/assets/AddingUserWithFormValidation.png "Add User")
![Screenshot of Transaction Screen](/assets/SendingFunds.png "$LC Transaction")

## Technology

This project relies on [Web3.js](https://web3js.readthedocs.io/) for interacting with the ethereum blockchain.

Player data is stored in [Supabase](https://supabase.com/).

The demo of this project is hosted on [Vercel](https://vercel.com/).

## About

Based on an example app by Late Checkout that connects to a MetaMask wallet with Web3.js and extracts the balance of different ERC20 tokens ([blog post](https://blog.etereo.io/how-to-read-the-balance-of-your-metamask-wallet-with-web3-js-6d4c4c364225)).
