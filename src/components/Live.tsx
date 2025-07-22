import { useAtom, useSetAtom } from "jotai"
import type { StageInfo } from "../types/StageInfo"
import { getMinuteDifference } from "../utils/dateUtil"
import { artistStagesAtom, checkedAtom, isModalOpenAtom, liveArtistAtom } from "../libs/jotai"
import { multiStyles } from "../utils/stringUtil"
import { useClickLongPress } from "../hooks/useClickLongPress"
import { getArtistStages } from "../utils/util"
import styles from "./Live.module.css"

type LiveProps = {
  liveInfo: StageInfo
}

function Live({ liveInfo }: LiveProps) {
  const eventStartDate = new Date('2025-08-01 09:00:00')
  const startDate = new Date('2025-08-01 ' + liveInfo.start_time)
  const endDate = new Date('2025-08-01 ' + liveInfo.end_time)
  const startMinute = getMinuteDifference(eventStartDate, startDate)
  const time = getMinuteDifference(startDate, endDate)

  const setArtistStages = useSetAtom(artistStagesAtom)
  const setLiveArtist = useSetAtom(liveArtistAtom)
  const [checkedList, setCheckedList] = useAtom(checkedAtom)
  const setIsModalOpen = useSetAtom(isModalOpenAtom)

  const onClickLive = () => {
    if (checkedList.includes(liveInfo.id_timetable)) {
      setCheckedList(val => val.filter(item => item !== liveInfo.id_timetable))
    }
    else {
      setCheckedList(val => {
        const nval = [...val]
        nval.push(liveInfo.id_timetable)
        return nval
      })
    }
  }

  const onLongPressLive = () => {
    const srtistStages = getArtistStages(liveInfo.aid)
    setArtistStages(srtistStages)
    setLiveArtist(liveInfo.title2)
    setIsModalOpen(true)
  }

  const clickEvent = useClickLongPress(onClickLive, onLongPressLive)

  return (
    <div
      className={multiStyles(styles.live, checkedList.includes(liveInfo.id_timetable) ? styles.checked : '')}
      style={{
        width: `${(time * 5) - 2}px`,
        left: `${startMinute * 5}px`
      }}
      {...clickEvent}
    >
      {liveInfo.title}
    </div>
  )
}

export default Live
