import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div
      className="gradient-bg-footer flex w-full flex-col items-center justify-between
  p-4 md:justify-center"
    >
      <div
        className="my-4 flex w-full flex-col items-center justify-between
      sm:flex-row"
      >
        <div className="flex flex-[0.5] items-center justify-center">
          <img src="/images/logo.png" alt="logo" className="w-32" />
        </div>
        <div
          className="mt-5 flex w-full flex-1 flex-wrap items-center 
        justify-evenly sm:mt-0"
        >
          <p className="mx-2 cursor-pointer text-center text-base text-white">
            Market
          </p>
          <p className="mx-2 cursor-pointer text-center text-base text-white">
            Exchange
          </p>
          <p className="mx-2 cursor-pointer text-center text-base text-white">
            Tutorials
          </p>
          <p className="mx-2 cursor-pointer text-center text-base text-white">
            Wallet
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center justify-center">
        <p className="text-center text-sm text-white">
          This is only working for rapsten test network
        </p>
        <a
          href="https://www.linkedin.com/in/menura-adithya-434760199/"
          target="_blank"
          className="mt-2 flex cursor-pointer items-center text-center text-sm text-white transition ease-in-out hover:text-blue-400"
        >
          <span className="mr-2">
            <BsLinkedin />
          </span>
          EMIZ
        </a>
      </div>
      <div className="mt-5 h-[0.25px] w-full bg-gray-400 sm:w-[90%]" />
      <div className="mt-3 flex w-full items-center justify-between sm:w-[90%]">
        <p className="text-center text-sm text-white">@EMIZ2022</p>
        <p className="text-center text-sm text-white">All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
