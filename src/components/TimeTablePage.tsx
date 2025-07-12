import TimeTableList from './TimeTableList'
import Footer from './Footer'
import styles from './TimeTablePage.module.css'

function TimeTablePage() {
  return (
    <div className={styles.time_table_page}>
      <TimeTableList />
      <Footer />
    </div>
  )
}

export default TimeTablePage
