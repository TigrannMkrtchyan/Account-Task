import data from './data.json'
import { isMock } from './isMock'
import { serverData } from './serverData'

export const getData = () => isMock()? Promise.resolve(data): serverData();
