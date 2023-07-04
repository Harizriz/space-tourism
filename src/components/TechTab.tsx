import { useStore } from '@nanostores/react'
import classNames from 'classnames'
import { FC, Fragment } from 'react'
import { $techTab, updateTechTab } from '../stores/tabStore'

const tabs = [
  {
    step: '1',
    name: 'vehicle'
  },
  {
    step: '2',
    name: 'spaceport'
  },
  {
    step: '3',
    name: 'capsule'
  }
]

const desc = [
  {
    id: 'vehicle',
    name: 'launch vehicle',
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  {
    id: 'spaceport',
    name: 'spaceport',
    desc: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
  },
  {
    id: 'capsule',
    name: 'space capsule',
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
]

export default function TechTab() {
  const tech = useStore($techTab)

  const onClickTechTab = (name: string) => {
    updateTechTab(name)
  }

  const TechDescription: FC<{ techName: string }> = ({ techName }) => {
    const content = desc.find((crews) => crews.id === techName)
    return (
      <Fragment>
        <h2 className="mt-2 text-center font-serif text-2xl uppercase text-white md:mt-0 md:text-5xl lg:mt-3 lg:text-start lg:text-[56px]">
          {content.name}
        </h2>
        <span className="mx-5 mt-3 h-[160px] text-center font-body text-[15px] leading-[25px] text-light-gray-blue md:mx-0 md:mt-0 md:w-[458px] md:text-base md:leading-[28px] lg:ml-1 lg:mt-5 lg:w-[444px] lg:text-start lg:text-lg lg:leading-[32px]">
          {content.desc}
        </span>
      </Fragment>
    )
  }

  const TechVehicle: FC<{ techName: string }> = ({ techName }) => {
    if (techName === 'capsule') {
      return (
        <div className="absolute inset-x-0 top-36 mx-auto h-[170px] w-[full] bg-capsule-landscape bg-contain bg-no-repeat md:top-[225px] md:h-[310px] md:w-[768px] lg:top-[33%] lg:mx-0 lg:ml-auto lg:h-[527px] lg:w-[515px] lg:bg-capsule-portrait" />
      )
    } else if (techName === 'spaceport') {
      return (
        <div className="absolute inset-x-0 top-36 mx-auto h-[170px] w-[full] bg-spaceport-landscape bg-contain bg-no-repeat md:top-[225px] md:h-[310px] md:w-[768px] lg:top-[33%] lg:mx-0 lg:ml-auto lg:h-[527px] lg:w-[515px] lg:bg-spaceport-portrait" />
      )
    } else {
      return (
        <div className="absolute inset-x-0 top-36 mx-auto h-[170px] w-[full] bg-vehicle-landscape bg-contain bg-no-repeat md:top-[225px] md:h-[310px] md:w-[768px] lg:top-[33%] lg:mx-0 lg:ml-auto lg:h-[527px] lg:w-[515px] lg:bg-vehicle-portrait" />
      )
    }
  }
  return (
    <main className="h-screen w-full bg-technology-mobile bg-cover bg-no-repeat md:bg-technology-tablet lg:bg-technology-desktop">
      <aside className="absolute top-24 flex flex-col md:left-[40px] md:top-[136px] md:w-[calc(100vw-75px)] lg:left-[13%] lg:top-[25%] lg:w-max">
        <div className="flex justify-center md:justify-normal">
          <h5 className="text-base font-bold uppercase tracking-[2.7px] text-white opacity-25 md:text-[20px] md:tracking-[3.38px] lg:text-heading-5 lg:tracking-[4.72px]">
            03
          </h5>
          <h5 className="ml-[19px] text-base uppercase tracking-[2.7px] text-white md:text-[20px] md:tracking-[3.38px] lg:ml-[28px] lg:text-heading-5 lg:tracking-[4.72px]">
            Space Launch 101
          </h5>
        </div>
        <div className="mt-[55%] flex flex-col md:mt-[425px] md:items-center lg:mt-[137px] lg:flex-row lg:items-start">
          <div className="flex justify-center space-x-4 md:flex-row md:justify-normal lg:ml-1 lg:flex-col lg:space-x-0 lg:space-y-11">
            {tabs.map(({ step, name }, key) => (
              <div key={key} onClick={() => onClickTechTab(name)}>
                <div className="cursor-pointer">
                  <div
                    className={classNames(
                      'flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#979797] md:h-[60px] md:w-[60px] lg:h-20 lg:w-20',
                      {
                        'bg-white': tech === name,
                        'hover:!border-white': tech !== name
                      }
                    )}
                  >
                    <span
                      className={classNames(
                        'font-serif text-base text-white md:text-2xl lg:text-[32px]',
                        {
                          '!text-black': tech === name
                        }
                      )}
                    >
                      {step}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col justify-center md:mt-10 md:justify-normal md:space-y-5 lg:ml-[80px] lg:mt-0">
            <span className="justify-center text-center text-sm uppercase tracking-[2.7px] text-light-gray-blue md:justify-normal md:text-base lg:text-start">
              The terminology ...
            </span>
            <TechDescription techName={tech} />
          </div>
        </div>
      </aside>
      <TechVehicle techName={tech} />
    </main>
  )
}
