import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Web3 from 'web3'
import './App.css'
import { Navbar } from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import Home from './components/home/HomePage'

// import PlayerProfile from './components/home-container/player-profile/PlayerProfile'
// import CreatePost from './components/create-post/CreatePost'
// import DonateNFT from './components/donate-nft/DonateNFT'

// import playerAbi from './artifacts/contracts/Player.sol/Player.json'
const playerContractAddress = '0x16d7be29ebc6db2e9c92E0Bf1dE5c1cfe6b1AD2a'

function App() {
  const [account, setAccount] = useState('')
  const [contractData, setContractData] = useState('')

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.request({ method: 'eth_requestAccounts' })
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider trying Metamask!',
      )
    }
  }

  const getContract = async () => {
    // try {
    //   const web3 = window.web3
    //   const accounts = await web3.eth.getAccounts()
    //   setAccount(accounts[0])
    //   const abi = playerAbi.abi
    //   const address = playerContractAddress
    //   const myContract = new web3.eth.Contract(abi, address)
    //   setContractData(myContract)
    // } catch (error) {
    //   console.log('🚀 ~ file: App.js ~ line 41 ~ getContract ~ error', error)
    //   window.alert(
    //     'Contract is not deployed to the detected network. Connect to the correct network!',
    //   )
    // }
  }

  const connectWallet = async () => {
    // await loadWeb3()
    // await getContract()
  }

  console.log('contractData', contractData)
  return (
    <Router>
      <div className="cl">
        <Navbar account={account} connectWallet={connectWallet} />
        <Route exact path="/" component={Home} />
        <Switch>
          {/* <Route exact path="/create" component={CreatePost} /> */}
          {/* <Route exact path="/create" component={CreatePost} /> */}
          {/* <Route path="/player-details/:petId">
            <PlayerProfile />
          </Route>
          <Route path="/donate">
            <DonateNFT />
          </Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
