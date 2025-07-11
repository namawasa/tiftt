
import type { StageInfo } from "../types/StageInfo"
import { getMinuteDifference } from "../utils/dateUtil"
import { multiStyles } from "../utils/stringUtil"
import styles from "./Stage.module.css"

type StageProps = {
  stageInfo: StageInfo
}

function Stage({ stageInfo }: StageProps) {
  const eventStartDate = new Date('2025-08-01 09:00:00')
  const startDate = new Date('2025-08-01 ' + stageInfo.start_time)
  const endDate = new Date('2025-08-01 ' + stageInfo.end_time)
  const startMinute  = getMinuteDifference(eventStartDate, startDate)
  const time  = getMinuteDifference(startDate, endDate)
  return (
    <div className={multiStyles(styles.stage, styles[`time${time}`])} style={{left: `${startMinute*5}px`}}>
      {stageInfo.title}
    </div>
  )
}

export default Stage
