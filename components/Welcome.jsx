import React, { useContext, useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import Loader from './Loader'
import { TransactionContext } from '../context/TransactionContext'

const commonStyles =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    className="white-glassmorphism my-2 w-full rounded-sm border-none bg-transparent p-2
    text-sm text-white outline-none"
    type={type}
    placeholder={placeholder}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
  />
)

const Welcome = () => {
  const handleSubmit = (e) => {
    const { addressTo, amount, keywordName, message } = formData
    e.preventDefault()
    if (!addressTo || !amount || !keywordName || !message) return
    sendTransaction()
  }
  const {
    connectWallet,
    connectedAccount,
    formData,
    mainOnChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext)

  return (
    <div className="flex w-full items-center justify-center">
      <div
        className="flex flex-col items-start justify-between py-12
      mf:flex-row"
      >
        <div className="flex flex-1 flex-col justify-start md:mr-10 lg:mr-48">
          <h1 className="text-gradient py-1 text-3xl text-white sm:text-5xl">
            Send Crypto <br />
            across the world
          </h1>
          <p className="mt-5 w-11/12 text-left text-base font-light text-white md:w-9/12">
            Explore the crypto world, Buy and sell crypto using krypt
          </p>
          {!connectedAccount && (
            <button
              className="my-5 flex cursor-pointer flex-row 
            items-center justify-center rounded-full bg-[#2952e3] 
            p-3 hover:bg-[#2546bd]"
              type="button"
              onClick={connectWallet}
            >
              <span className="text-base font-bold text-white">
                Connect Wallet
              </span>
            </button>
          )}

          <div className="mt-10 grid w-full grid-cols-2 sm:grid-cols-3">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={`${commonStyles}`}>Security</div>

            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={`${commonStyles}`}>Low fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>

        <div
          className="mt-10 flex w-full flex-1 flex-col items-center
      justify-start mf:mt-0"
        >
          <div
            className="eth-card white-glassmorphism my-5 h-40 w-full
        flex-col items-start justify-end rounded-xl p-3 sm:w-72"
          >
            <div className="flex h-full w-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full 
              border-2 border-white"
                >
                  <SiEthereum fontSize={20} color="#fff" />
                </div>
                <BsInfoCircle fontSize={18} color="#fff" />
              </div>
              <div>
                <p className="text-sm font-light text-white">
                  {connectedAccount.slice(0, 5) +
                    '...' +
                    connectedAccount.slice(connectedAccount.length - 4)}
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div
            className="blue-glassmorphism flex w-full flex-col items-center justify-start p-5
        sm:w-96"
          >
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={mainOnChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={mainOnChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keywordName"
              type="text"
              handleChange={mainOnChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={mainOnChange}
            />
            <div className="my-2 h-[1px] w-full bg-gray-400" />
            {isLoading ? (
              <Loader />
            ) : (
              <button
                className="mt-2 w-full cursor-pointer rounded-full 
              border-[1px] border-[#3d4f7c] p-2 text-white"
                type="button"
                onClick={handleSubmit}
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
