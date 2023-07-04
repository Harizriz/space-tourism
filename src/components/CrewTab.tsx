import { useStore } from '@nanostores/react'
import classNames from 'classnames'
import { FC, Fragment } from 'react'
import { $crewTab, updateCrewTab } from '../stores/tabStore'

const tabs = [
  {
    name: 'douglas'
  },
  {
    name: 'mark'
  },
  {
    name: 'victor'
  },
  {
    name: 'ansari'
  }
]

const desc = [
  {
    role: 'commander',
    shortname: 'douglas',
    name: 'douglas hurley',
    desc: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
  },
  {
    role: 'mission specialist',
    shortname: 'mark',
    name: 'mark shuttleworth',
    desc: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
  },
  {
    role: 'pilot',
    shortname: 'victor',
    name: 'victor glover',
    desc: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
  },
  {
    role: 'flight engineer',
    shortname: 'ansari',
    name: 'anousheh ansari',
    desc: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
  }
]

export default function CrewTab() {
  const crew = useStore($crewTab)

  const onClickCrewTab = (name: string) => {
    updateCrewTab(name)
  }

  const CrewDescription: FC<{ crewName: string }> = ({ crewName }) => {
    const content = desc.find((crews) => crews.shortname === crewName)
    return (
      <Fragment>
        <h3 className="text-center font-serif uppercase text-white opacity-50 md:text-[24px] lg:text-start lg:text-[32px]">
          {content.role}
        </h3>
        <h2 className="text-center font-serif text-[24px] uppercase text-white md:mt-0 md:text-[40px] lg:mt-4 lg:text-start lg:text-[56px]">
          {content.name}
        </h2>
        <span
          className={classNames(
            'mx-5 mt-3 h-[150px] text-center font-body text-[15px] leading-[25px] text-light-gray-blue md:mx-0 md:ml-1 md:mt-1 md:h-full md:text-base md:leading-[28px] lg:mt-5 lg:h-[160px] lg:w-[444px] lg:text-start lg:text-lg lg:leading-[32px]',
            {
              'md:!w-[458px]': content.shortname === 'douglas',
              'md:!w-[520px]': content.shortname === 'mark',
              'md:!w-[592px]': content.shortname === 'victor',
              'md:!w-[536px]': content.shortname === 'ansari'
            }
          )}
        >
          {content.desc}
        </span>
      </Fragment>
    )
  }

  return (
    <main className="h-screen min-h-[800px] w-full bg-crew-mobile bg-cover bg-no-repeat md:bg-crew-tablet lg:bg-crew-desktop">
      <aside className="absolute inset-x-0 top-24 mx-auto flex flex-col md:top-[136px] lg:left-[13%] lg:top-[25%] lg:mx-0">
        <div className="flex justify-center md:ml-12 md:justify-normal lg:ml-0">
          <h5 className="text-base font-bold uppercase tracking-[2.7px] text-white opacity-25 md:text-[20px] md:tracking-[3.38px] lg:text-heading-5 lg:tracking-[4.72px]">
            02
          </h5>
          <h5 className="ml-[19px] text-base uppercase tracking-[2.7px] text-white md:text-[20px] md:tracking-[3.38px] lg:ml-[28px] lg:text-heading-5 lg:tracking-[4.72px]">
            Meet your crew
          </h5>
        </div>
        <div className="mt-[27rem] flex flex-col md:mt-[40px] md:items-center lg:mt-[154px] lg:items-start">
          <CrewDescription crewName={crew} />
        </div>
        <div className="-mt-[16.2rem] flex flex-row justify-center space-x-5 md:mt-[30px] lg:ml-1 lg:mt-[100px] lg:justify-normal">
          {tabs.map(({ name }, key) => (
            <div key={key} onClick={() => onClickCrewTab(name)}>
              <div className="cursor-pointer">
                <div
                  className={classNames(
                    'h-[10px] w-[10px] items-center justify-center rounded-full bg-white opacity-[17%] lg:h-4 lg:w-4',
                    {
                      '!opacity-100': crew === name,
                      'hover:!opacity-50': crew !== name
                    }
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </aside>
      <div
        className={classNames(
          'absolute inset-x-0 inset-y-0 mx-auto my-auto mt-[150px] h-[322px] w-[237px] bg-contain bg-no-repeat md:my-0 md:mt-auto md:h-[532px] md:w-[456px] lg:left-[55%] lg:mx-0 lg:h-[640px] lg:w-[550px]',
          {
            'ml-[26%] bg-douglas md:ml-[28%] lg:!h-[700px]': crew === 'douglas',
            'w-[218px] bg-mark md:ml-[26%]': crew === 'mark',
            '!mt-[194px] h-[279px] bg-victor md:!mt-auto md:h-[535px]': crew === 'victor',
            '!mt-[224px] h-[248px] w-[226px] bg-ansari md:!mt-auto md:h-[477px] lg:!h-[575px]':
              crew === 'ansari'
          }
        )}
      />
      <div className="flex md:hidden">
        <div className="absolute inset-x-0 inset-y-0 z-0 mx-auto my-auto mt-[472px] h-[1px] w-[85%] bg-white opacity-25" />
      </div>
    </main>
  )
}
