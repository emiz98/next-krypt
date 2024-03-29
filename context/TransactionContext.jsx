import dynamic from 'next/dynamic'
import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [transactionCount, setTransactionCount] = useState(0)
  const [transactions, setTransactions] = useState([])
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  })

  const mainOnChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
  }

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert('Please install metamask')
      const transactionContract = getEthereumContract()
      const availableTransactions =
        await transactionContract.getAllTransactions()

      const structuredTransaction = availableTransactions.map(
        (transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        })
      )
      setTransactions(structuredTransaction)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setTransactionCount(localStorage.getItem('transactionCount'))
    const { ethereum } = window
    checkIfWalletIsConnected()
    checkIfTransactionsExist()
  }, [])

  const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    )
    // console.log({
    //   provider,
    //   signer,
    //   transactionContract,
    // })
    return transactionContract
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install metamask')

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setConnectedAccount(accounts[0])
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum objects')
    }
  }

  const checkIfTransactionsExist = async () => {
    try {
      const transactionContract = getEthereumContract()
      const transactionCount = await transactionContract.getTransactionCount()
      window.localStorage.setItem('transactionCount', transactionCount)
    } catch (error) {
      console.log(error)
      // throw new Error('No ethereum objects')
    }
  }

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install metamask')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setConnectedAccount(accounts[0])
        getAllTransactions()
      } else {
        console.log('No Accounts Found')
      }
      // console.log(accounts)
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum objects')
    }
  }

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert('Please install metamask')

      //get data from the form
      const { addressTo, amount, keyword, message } = formData
      const transactionContract = getEthereumContract()
      //   console.log(formData)

      const parsedAmount = ethers.utils.parseEther(amount)

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: connectedAccount,
            to: addressTo,
            gas: '0x5208', //21000 GWEI
            value: parsedAmount._hex,
          },
        ],
      })

      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      )
      setIsLoading(true)
      console.log(`Loading - ${transactionHash.hash}`)
      await transactionHash.wait()
      setIsLoading(false)
      console.log(`Success - ${transactionHash.hash}`)
      const transactionCount = await transactionContract.getTransactionCount()
      setTransactionCount(transactionCount.toNumber())
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum objects')
    }
  }
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        formData,
        mainOnChange,
        sendTransaction,
        transactions,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
