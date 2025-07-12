import type { DayCategory } from "../types/DayCategory"
import { useSetAtom } from "jotai"
import { selectedDayAtom } from "../libs/jotai"
import styles from "./Footer.module.css"
import { multiStyles } from "../utils/stringUtil"

function Footer() {
  const setDay = useSetAtom(selectedDayAtom)

  const onClickDay = (day: DayCategory) => () => {
    setDay(day)
  }

  return (
    <div className={styles.footer}>
      <button type='button' className={multiStyles(styles.button, styles.day1)} onClick={onClickDay('2025-08-01')}>8/1</button>
      <button type='button' className={multiStyles(styles.button, styles.day2)} onClick={onClickDay('2025-08-02')}>8/2</button>
      <button type='button' className={multiStyles(styles.button, styles.day3)} onClick={onClickDay('2025-08-03')}>8/3</button>
    </div>
  )
}

export default Footer
