import data from '../timetable.json'
import Place from './Place'
import { PLACE_TYPE } from '../types/PlaceType'
import { useAtomValue } from 'jotai'
import { selectedDayAtom } from '../libs/jotai'
import styles from './TimeTableList.module.css'
import { TimeTableHeader } from './TimeTableHeader'
import { multiStyles } from '../utils/stringUtil'

function TimeTableList() {
  const day = useAtomValue(selectedDayAtom)
  const dayInfo = data[day]

  return (
    <>
      <div className={styles.place}>
        <span className={multiStyles(styles.place_title, styles.hot_stage)}>HOT</span>
        <span className={multiStyles(styles.place_title, styles.heat_garage)}>HEAT</span>
        <span className={multiStyles(styles.place_title, styles.smile_garden)}>SMILE</span>
        <span className={multiStyles(styles.place_title, styles.doll_factory)}>DOLL</span>
        <span className={multiStyles(styles.place_title, styles.sky_stage)}>SKY</span>
        <span className={multiStyles(styles.place_title, styles.torocco_park)}>TROCCO</span>
        <span className={multiStyles(styles.place_title, styles.ukisima_stage)}>浮島</span>
        <span className={multiStyles(styles.place_title, styles.info_centre)}>INFO</span>
      </div>
      <div className={styles.time_table_list}>
        <TimeTableHeader />
        <Place stages={dayInfo['HOT STAGE']} placeType={PLACE_TYPE.HOT_STAGE} />
        <Place stages={dayInfo['HEAT GARAGE']} placeType={PLACE_TYPE.HEAT_GARAGE} />
        <Place stages={dayInfo['SMILE GARDEN']} placeType={PLACE_TYPE.SMILE_GARDEN} />
        <Place stages={dayInfo['DOLL FACTORY']} placeType={PLACE_TYPE.DOLL_FACTORY} />
        <Place stages={dayInfo['SKY STAGE']} placeType={PLACE_TYPE.SKY_STAGE} />
        <Place stages={dayInfo['TOROCCO PARK']} placeType={PLACE_TYPE.TOROCCO_PARK} />
        <Place stages={dayInfo['浮島STAGE']} placeType={PLACE_TYPE.UKISIMA_STAGE} />
        <Place stages={dayInfo['INFO CENTRE']} placeType={PLACE_TYPE.INFO_CENTRE} />
      </div>
    </>
  )
}

export default TimeTableList
