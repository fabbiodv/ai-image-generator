import FileSaver from 'file-saver'
import { surpriseMePrompts } from '../constants'

export function getRandomPrompt(propmt){
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomPrompt = surpriseMePrompts[randomIndex]

  if (randomPrompt === prompt) return getRandomPrompt(propmt)

  return randomPrompt
} 


export async function downloadImage (_id, photo){
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}