import { useStore } from '@nanostores/react'
import classNames from 'classnames'
import { useState } from 'react'
import { $mainTab, updateTab } from '../stores/tabStore'

const tabs = [
  {
    number: '00',
    name: 'home'
  },
  {
    number: '01',
    name: 'destination'
  },
  {
    number: '02',
    name: 'crew'
  },
  {
    number: '03',
    name: 'technology'
  }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const tab = useStore($mainTab)
  const onClickTab = (name: string) => {
    updateTab(name)
    setIsMenuOpen(false)
  }

  const onClickMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true)
    } else {
      setIsMenuOpen(false)
    }
  }

  return (
    <header>
      <div className="absolute right-0 h-24 w-full overflow-x-hidden lg:top-10 lg:w-[calc(100vw-55px)]">
        <div className="absolute inset-x-6 inset-y-6 grid h-12 w-12 grid-cols-2 grid-rows-2 rounded-full bg-white md:left-10 md:top-7 lg:left-[53px]">
          <span className="h-5 w-5 self-end justify-self-end bg-gradient-radial-tl"></span>
          <span className="h-5 w-5 justify-start self-end bg-gradient-radial-tr"></span>
          <span className="h-5 w-5 justify-self-end bg-gradient-radial-br"></span>
          <span className="h-5 w-5 bg-gradient-radial-bl"></span>
        </div>
        <div className="hidden md:flex">
          <div className="absolute inset-y-[3.1rem] left-[165px] z-10 h-[1px] w-[calc(100vw-975px)] bg-white opacity-25" />
          <nav className="absolute z-0 flex h-24 items-center bg-header backdrop-blur-[40px] md:left-[calc(100vw-450px)] md:w-[450px] md:space-x-9 md:pl-11 md:tracking-[2.36px] lg:left-[calc(100vw-850px)] lg:w-[830px] lg:justify-end lg:space-x-12 lg:pr-[125px]">
            {tabs.map(({ number, name }, key) => (
              <div
                className={classNames('group flex flex-col-reverse', {
                  'mt-auto h-1 bg-white': tab === name,
                  'hover:mt-auto hover:h-1 hover:bg-[#A7ABB4] hover:transition-colors hover:ease-in-out':
                    tab !== name
                })}
                key={key}
                onClick={() => onClickTab(name)}
              >
                <div
                  className={classNames('mb-8 mt-9 flex cursor-pointer items-end justify-center', {
                    'group-hover:!mb-[2.27rem]': tab !== name,
                    '!mb-9': tab === name
                  })}
                >
                  <span
                    className={classNames(
                      'text-nav font-bold tracking-nav text-white md:hidden lg:flex',
                      {
                        'group-hover:!opacity-100': tab !== name
                      }
                    )}
                  >
                    {number}
                  </span>
                  <span className="uppercase tracking-nav text-white md:text-[14px] lg:ml-4 lg:text-nav">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </nav>
        </div>
        <span className="absolute right-6 top-7 flex md:hidden" onClick={onClickMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10 text-light-gray-blue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
            q
          </svg>
        </span>
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 z-10 h-screen w-2/3 bg-header backdrop-blur-[40.7742px]">
          <span className="absolute right-6 top-7" onClick={onClickMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10 text-light-gray-blue"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
          <div className="mt-[118px] flex flex-col space-y-6">
            {tabs.map(({ number, name }, key) => (
              <div
                className="group flex flex-col-reverse"
                key={key}
                onClick={() => onClickTab(name)}
              >
                <div className="ml-8 flex h-8 cursor-pointer items-center justify-start">
                  <span className="mr-3 text-nav font-bold tracking-nav text-white">{number}</span>
                  <span className="text-nav uppercase tracking-nav text-white">{name}</span>
                  <span
                    className={classNames('', {
                      'ml-auto h-8 w-1 bg-white': tab === name
                    })}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
