import { useAtomValue } from "jotai"
import Modal from "./Modal"
import { artistStagesAtom, liveArtistAtom } from "../libs/jotai"
import { getPlaceName, type PlaceType } from "../types/PlaceType"
import styles from './ArtistDetailsModal.module.css'

function ArtistDetailsModal() {
  const artistStages = useAtomValue(artistStagesAtom)
  const liveArtist = useAtomValue(liveArtistAtom)

  if (artistStages.length === 0) {
    return <></>
  }

  return (
    <Modal title={artistStages[0].stageInfos[0].artist_name}>
      <div className={styles.contents}>
        {artistStages[0].stageInfos[0].aid === 0 ?
          <>
            {liveArtist === '' ? 'スペシャルステージ' : liveArtist}
          </>
          :
          <>
            {artistStages.map(artistStage => {
              return (
                <div>
                  <span>{artistStage.day}</span>
                  {artistStage.stageInfos.map(stageInfo => {
                    return (
                      <div key={`${stageInfo.id_timetable}`} className={styles.live}>
                        <div className={styles.stage}>
                          {getPlaceName(stageInfo.id_stage as PlaceType)}
                        </div>
                        <div className={styles.time}>
                          {stageInfo.start_time.slice(0,5)} ~ {stageInfo.end_time.slice(0,5)}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )

            })}
          </>
        }
      </div>
    </Modal>
  )
}

export default ArtistDetailsModal
