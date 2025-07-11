import { useState } from 'react'
import data from '../timetable.json'
import Place from './Place'
import { PLACE_TYPE } from '../types/PlaceType'
import styles from "./TileTableList.module.css"
import React from 'react'

type DayType = '2025-08-01' | '2025-08-02' | '2025-08-03'

function TimeTableList() {
  const [day, setDay] = useState<DayType>('2025-08-01')
  const dayInfo = data[day]

  function createNumberArrayWithArrayFrom(length: number, startValue: number = 0, increment: number = 15): number[] {
    return Array.from({ length }, (_, i) => startValue + i * increment);
  }
  const hours = createNumberArrayWithArrayFrom(12, 9, 1)
  const minutes = createNumberArrayWithArrayFrom(4, 0, 15)

  const Header = () => {
    return (
      <div className={styles.header}>
        {hours.map(hour => {
          return (
            <React.Fragment key={hour}>
              {minutes.map(minute => {
                return (
                  <div key={minute} className={styles.time}>
                    {minute == 0 ?
                      <span className={styles.hour}>{hour}時</span> :
                      <span className={styles.minute}>{minute}</span>
                    }
                  </div>
                )
              })}
            </React.Fragment>
          )
        })}
      </div>
    )
  }

  const onClickDay = (day: DayType) => () => {
    setDay(day)
  }

  const Footer = () => {
    return (
      <div className={styles.footer}>
        <button type='button' className={styles.btn_day} onClick={onClickDay('2025-08-01')}>1日目</button>
        <button type='button' className={styles.btn_day} onClick={onClickDay('2025-08-02')}>2日目</button>
        <button type='button' className={styles.btn_day} onClick={onClickDay('2025-08-03')}>3日目</button>
      </div>
    )
  }

  const bgColor = day === '2025-08-01' ? '#FD8CC6' : day === '2025-08-02' ? '#5BBBD8' : '#89C76C'

  return (
    <>
      <div className={styles.time_table_list} style={{ backgroundColor: bgColor }}>
        <Header />
        <Place stages={dayInfo['HOT STAGE']} placeType={PLACE_TYPE.HOT_STAGE} />
        <Place stages={dayInfo['HEAT GARAGE']} placeType={PLACE_TYPE.HEAT_GARAGE} />
        <Place stages={dayInfo['SMILE GARDEN']} placeType={PLACE_TYPE.SMILE_GARDEN} />
        <Place stages={dayInfo['DOLL FACTORY']} placeType={PLACE_TYPE.DOLL_FACTORY} />
        <Place stages={dayInfo['SKY STAGE']} placeType={PLACE_TYPE.SKY_STAGE} />
        <Place stages={dayInfo['TOROCCO PARK']} placeType={PLACE_TYPE.TOROCCO_PARK} />
        <Place stages={dayInfo['浮島STAGE']} placeType={PLACE_TYPE.UKISIMA_STAGE} />
        <Place stages={dayInfo['INFO CENTRE']} placeType={PLACE_TYPE.INFO_CENTRE} />
      <Footer />
      </div>
    </>
  )
}

export default TimeTableList
