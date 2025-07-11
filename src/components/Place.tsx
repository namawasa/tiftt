import { PLACE_TYPE, type PlaceType } from "../types/PlaceType"
import type { StageInfo } from "../types/StageInfo"
import Stage from "./Stage"
import styles from "./Place.module.css"
import { multiStyles } from "../utils/stringUtil"

type PlaceProps = {
  stages: StageInfo[]
  placeType: PlaceType
}

function Place({ stages, placeType }: PlaceProps) {
  const styleOfPlace = () => {
    switch (placeType) {
      case PLACE_TYPE.HOT_STAGE: return styles.hot_stage
      case PLACE_TYPE.HEAT_GARAGE: return styles.heat_garage
      case PLACE_TYPE.SMILE_GARDEN: return styles.smile_garden
      case PLACE_TYPE.DOLL_FACTORY: return styles.doll_factory
      case PLACE_TYPE.SKY_STAGE: return styles.sky_stage
      case PLACE_TYPE.TOROCCO_PARK: return styles.torocco_park
      case PLACE_TYPE.UKISIMA_STAGE: return styles.ukisima_stage
      case PLACE_TYPE.INFO_CENTRE: return styles.info_centre
    }
  }
  return (
    <div className={multiStyles(styles.place, styleOfPlace())}>
      {stages.map((item, index) => <Stage key={index} stageInfo={item} />)}
    </div>
  )
}

export default Place
