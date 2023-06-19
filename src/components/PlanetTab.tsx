import { useStore } from '@nanostores/react'
import classNames from 'classnames'
import { FC, Fragment } from 'react'
import { $planetTab, updatePlanetTab } from '../stores/tabStore'

const tabs = [
  {
    name: 'moon'
  },
  {
    name: 'mars'
  },
  {
    name: 'europa'
  },
  {
    name: 'titan'
  }
]

const desc = [
  {
    name: 'moon',
    desc: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 KM',
    travel: '3 DAYS'
  },
  {
    name: 'mars',
    desc: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 MIL. KM',
    travel: '9 MONTHS'
  },
  {
    name: 'europa',
    desc: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 MIL. KM',
    travel: '3 YEARS'
  },
  {
    name: 'titan',
    desc: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '1.6 BIL. KM',
    travel: '7 YEARS'
  }
]

export default function PlanetTab() {
  const planetTab = useStore($planetTab)

  const onClickPlanetTab = (name: string) => {
    updatePlanetTab(name)
  }

  const PlanetDescription: FC<{ planetName: string }> = ({ planetName }) => {
    const content = desc.find((planets) => planets.name === planetName)
    return (
      <Fragment>
        <h2 className="mt-3 text-center font-serif text-[56px] uppercase text-white md:text-start md:text-[80px] lg:text-[100px]">
          {content.name}
        </h2>
        <span className="mx-8 text-center font-body text-[15px] leading-6 text-light-gray-blue md:mx-0 md:text-base md:leading-[28px] lg:ml-2 lg:text-start lg:text-lg lg:leading-[32px]">
          {content.desc}
        </span>
        <div className="mb-8 mt-8 w-[85%] border border-[#383B4B] md:mb-8 md:mt-12 md:w-full lg:ml-2" />
        <div className="flex flex-col items-center space-y-8 md:flex-row md:items-start md:space-y-0 lg:ml-2">
          <div className="flex flex-col">
            <span className="text-center text-sm tracking-[2.4px] text-light-gray-blue lg:text-start">
              AVG. DISTANCE
            </span>
            <span className="mt-3 text-center font-serif text-[28px] leading-[32px] text-white lg:text-start">
              {content.distance}
            </span>
          </div>
          <div className="flex flex-col md:ml-[79px]">
            <span className="text-center text-sm tracking-[2.4px] text-light-gray-blue lg:text-start">
              EST. TIME TRAVEL
            </span>
            <span className="mt-3 text-center font-serif text-[28px] leading-[32px] text-white lg:text-start">
              {content.travel}
            </span>
          </div>
        </div>
      </Fragment>
    )
  }

  return (
    <main className="h-[850px] w-screen overflow-x-hidden overflow-y-scroll bg-destination-mobile bg-cover bg-scroll md:h-screen md:overflow-y-hidden md:bg-destination-tablet lg:bg-destination-desktop">
      <aside className="absolute inset-x-[4.7rem] top-24 flex flex-col md:left-[40px] md:top-[136px] lg:left-[13%] lg:top-[25%]">
        <div className="flex">
          <h5 className="text-base font-bold uppercase tracking-[2.7px] text-white opacity-25 md:text-[20px] md:tracking-[3.38px] lg:text-heading-5 lg:tracking-[4.72px]">
            01
          </h5>
          <h5 className="ml-[19px] text-base uppercase tracking-[2.7px] text-white md:text-[20px] md:tracking-[3.38px] lg:ml-[28px] lg:text-heading-5 lg:tracking-[4.72px]">
            Pick your destination
          </h5>
        </div>
        <div
          className={classNames(
            'absolute inset-x-7 mt-12 h-[170px] w-[170px] transform bg-contain bg-no-repeat md:left-52 md:mt-[80px] md:h-[300px] md:w-[300px] lg:left-12 lg:mt-[150px] lg:h-[445px] lg:w-[445px]',
            {
              'bg-moon': planetTab === 'moon',
              'bg-mars': planetTab === 'mars',
              'bg-europa': planetTab === 'europa',
              'bg-titan': planetTab === 'titan'
            }
          )}
        />
      </aside>
      <article className="absolute top-[21rem] flex h-[472px] flex-col items-center md:left-[14%] md:top-[56%] md:w-[573px] lg:left-[60%] lg:top-[38%] lg:w-[445px] lg:items-start">
        <div className="flex flex-row space-x-6 md:space-x-8 lg:ml-2">
          {tabs.map(({ name }, key) => (
            <div className="group" key={key} onClick={() => onClickPlanetTab(name)}>
              <div className="cursor-pointer">
                <span
                  className={classNames(
                    'text-[14px] uppercase tracking-nav text-light-gray-blue md:text-base',
                    {
                      'text-white': planetTab == name
                    }
                  )}
                >
                  {name}
                </span>
              </div>
              <div
                className={classNames('mt-3 h-0.5 w-[95%]', {
                  'bg-white opacity-100': planetTab === name,
                  'group-hover:bg-white group-hover:opacity-50': planetTab !== name
                })}
              />
            </div>
          ))}
        </div>
        <PlanetDescription planetName={planetTab} />
      </article>
    </main>
  )
}
