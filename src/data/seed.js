import { LoremIpsum } from 'lorem-ipsum'
import moment from 'moment'

const seed = () => {
  const lorem = new LoremIpsum()
  const data = []

  for (let i = 0; i < 10; i++) {
    const project = {
      projectName: lorem.generateWords(1),
      projectIdentifier: lorem.generateWords(1).slice(1, 4),
      description: lorem.generateParagraphs(1),
      startDate: moment().format('yyyy-MM-DD'),
      endDate: moment().add(7, 'days').format('yyyy-MM-DD')
    }
    data.push(project)
  }
  return data
}

export default seed
