import { exam_01 } from './exam1'
import { graduationExams } from '../graduationExams'
import { essayExams } from '../essayExams'

export const exams = [
  exam_01,
  ...graduationExams,
  ...essayExams
]
