
import { useAtom } from "jotai"
import type { StageInfo } from "../types/StageInfo"
import { getMinuteDifference } from "../utils/dateUtil"
import styles from "./Stage.module.css"
import { checkedAtom } from "../libs/jotai"
import { multiStyles } from "../utils/stringUtil"

type StageProps = {
  stageInfo: StageInfo
}

function Stage({ stageInfo }: StageProps) {
  const eventStartDate = new Date('2025-08-01 09:00:00')
  const startDate = new Date('2025-08-01 ' + stageInfo.start_time)
  const endDate = new Date('2025-08-01 ' + stageInfo.end_time)
  const startMinute = getMinuteDifference(eventStartDate, startDate)
  const time = getMinuteDifference(startDate, endDate)

  const [checkedList, setCheckedList] = useAtom(checkedAtom)

  const onClickStage = () => {
    if (checkedList.includes(stageInfo.id_timetable)) {
      setCheckedList(val => val.filter(item => item !== stageInfo.id_timetable))
    }
    else {
      setCheckedList(val => {
        const nval = [...val]
        nval.push(stageInfo.id_timetable)
        return nval
      })
    }
  }

  return (
    <div
      className={multiStyles(styles.stage, checkedList.includes(stageInfo.id_timetable) ? styles.checked : '')}
      style={{
        width: `${(time * 5) - 2}px`,
        left: `${startMinute * 5}px`
      }}
      onClick={onClickStage}
    >
      {stageInfo.title}
    </div>
  )
}

export default Stage
