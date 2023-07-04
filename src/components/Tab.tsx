import { useStore } from '@nanostores/react'
import { $mainTab, updateTab } from '../stores/tabStore'
import CrewTab from './CrewTab'
import PlanetTab from './PlanetTab'
import TechTab from './TechTab'

export default function Tab() {
  const mainTab = useStore($mainTab)

  const onClick = () => {
    updateTab('destination')
  }

  return (
    <>
      {mainTab === 'home' ? (
        <main className="h-screen w-screen bg-home-mobile bg-cover bg-no-repeat md:flex md:flex-col md:bg-home-tablet lg:bg-home-desktop">
          <aside className="absolute inset-x-0 top-[25%] mx-auto flex -translate-y-12 transform flex-col items-center md:top-[25%] md:h-[382px] md:w-[450px] lg:left-[13%] lg:top-[45%] lg:mx-0 lg:items-start">
            <h5 className="uppercase tracking-[2.7px] text-light-gray-blue md:text-[20px] md:tracking-[4.72px] lg:ml-2 lg:text-heading-5">
              so, you want to travel to
            </h5>
            <h1 className="font-serif text-[80px] uppercase text-white md:text-heading-1">space</h1>
            <h3 className="h-[125px] w-[85%] text-center font-body text-[15px] leading-[25px] text-light-gray-blue duration-300 md:h-full md:w-full md:text-[16px] md:leading-7 lg:ml-2 lg:text-start lg:text-body lg:leading-8">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer
              space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
              give you a truly out of this world experience!
            </h3>
          </aside>
          <div
            onClick={onClick}
            className="group absolute inset-x-0 inset-y-0 mx-auto my-auto mb-20 flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-full bg-white md:h-60 md:w-60 lg:left-[68%] lg:top-[55%] lg:h-72 lg:w-72"
          >
            <div className="transform transition-colors duration-300 group-hover:absolute group-hover:h-[450px] group-hover:w-[450px] group-hover:rounded-full group-hover:bg-white group-hover:opacity-10 group-hover:ring-1 group-hover:ring-[#979797]" />
            <span className="font-serif text-[20px] uppercase tracking-[2px] md:text-heading-4">
              explore
            </span>
          </div>
        </main>
      ) : mainTab === 'destination' ? (
        <PlanetTab />
      ) : mainTab === 'crew' ? (
        <CrewTab />
      ) : (
        <TechTab />
      )}
    </>
  )
}
