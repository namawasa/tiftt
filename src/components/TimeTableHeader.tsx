import React from "react"
import { divideHours, divideMinutes } from "../const/const"
import styles from './TimeTableHeader.module.css'

export const TimeTableHeader = () => {
  return (
    <div className={styles.header}>
      {divideHours.map(hour => {
        return (
          <React.Fragment key={hour}>
            {divideMinutes.map(minute => {
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