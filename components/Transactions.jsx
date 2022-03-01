import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

import data from '../utils/data'
import useFetch from '../hooks/useFetch'

const TransactionCardComp = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  amount,
  keyword,
  url,
}) => {
  const gifUrl = useFetch(message)

  return (
    <div
      className="m-4 flex flex-1 flex-col rounded-md bg-[#181918] p-3 hover:shadow-2xl
  sm:min-w-[270px] sm:max-w-[300px] 2xl:min-w-[450px] 2xl:max-w-[500px]"
    >
      <div className="mt-3 flex w-full flex-col items-center">
        <div className="mb-6 w-full p-2">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-base text-white">
              From:{' '}
              {addressFrom.slice(0, 5) +
                '...' +
                addressFrom.slice(addressFrom.length - 4)}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-base text-white">
              To:{' '}
              {addressTo.slice(0, 5) +
                '...' +
                addressTo.slice(addressTo.length - 4)}
            </p>
          </a>
          <p className="text-base text-white">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-base text-white">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="gif"
          className="h-64 w-full rounded-md object-cover shadow-lg 2xl:h-96"
        />
        <div className="-mt-5 w-max rounded-3xl bg-black p-3 px-5 shadow-2xl">
          <p className="font-bold text-[#37c7da]">{timestamp}</p>
        </div>
      </div>
    </div>
  )
}

const Transactions = () => {
  const { connectedAccount, transactions } = useContext(TransactionContext)

  return (
    <div
      className="gradient-bg-transactions flex w-full items-center justify-center
  2xl:px-20"
    >
      <div className="flex flex-col py-12 px-4 md:p-12">
        {connectedAccount ? (
          <h3 className="my-2 text-center text-3xl text-white">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="my-2 text-center text-3xl text-white">
            Connect to your account to see the changes
          </h3>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-center">
          {transactions.reverse().map((transaction, index) => (
            <TransactionCardComp key={index} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Transactions
