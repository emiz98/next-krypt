import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'

const ServiceCardComp = ({ color, title, icon, subtitle }) => {
  return (
    <div
      className="white-glassmorphism m-2 flex cursor-pointer flex-row
    items-center justify-start p-3 hover:shadow-xl"
    >
      <div
        className={`flex h-10 w-10 items-center justify-center
      rounded-full ${color}`}
      >
        {icon}
      </div>
      <div className="ml-5 flex flex-1 flex-col text-white">
        <h3 className="mt-2 text-lg">{title}</h3>
        <p className="mt text-sm text-gray-400 md:w-9/12">{subtitle}</p>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <div
      className="gradient-bg-services flex w-full flex-col items-center
  justify-center md:flex-row"
    >
      <div
        className="flex flex-col items-center justify-between py-12 px-4
      md:p-20 mf:flex-row"
      >
        <div className="flex flex-1 flex-col items-start justify-start lg:mr-10">
          <h1
            className="text-gradient py-2 text-3xl
          text-white sm:text-5xl"
          >
            Services that we
            <br />
            continue to improve
          </h1>
        </div>

        <div className="flex flex-1 flex-col items-center justify-start">
          <ServiceCardComp
            color="bg-[#2952E3]"
            title="Security Guaranteed"
            icon={<BsShieldFillCheck fontSize={20} className="text-white" />}
            subtitle="Security is guaranteed. We always maintaining the privacy."
          />
          <ServiceCardComp
            color="bg-[#8945F8]"
            title="Best Exchange Rate"
            icon={<BiSearchAlt fontSize={20} className="text-white" />}
            subtitle="Security is guaranteed. We always maintaining the privacy."
          />
          <ServiceCardComp
            color="bg-[#F84550]"
            title="Fastest Transaction"
            icon={<RiHeart2Fill fontSize={20} className="text-white" />}
            subtitle="Security is guaranteed. We always maintaining the privacy."
          />
        </div>
      </div>
    </div>
  )
}

export default Services
