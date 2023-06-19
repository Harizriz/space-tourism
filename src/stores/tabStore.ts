import { atom } from 'nanostores'

export const $mainTab = atom<string>('technology')
export const $planetTab = atom<string>('moon')
export const $crewTab = atom<string>('douglas')
export const $techTab = atom<string>('vehicle')

export const updateTab = (name: string) => {
  $mainTab.set(name)
}

export const updatePlanetTab = (name: string) => {
  $planetTab.set(name)
}

export const updateCrewTab = (name: string) => {
  $crewTab.set(name)
}

export const updateTechTab = (name: string) => {
  $techTab.set(name)
}
