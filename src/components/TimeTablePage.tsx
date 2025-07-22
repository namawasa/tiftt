import TimeTableList from './TimeTableList'
import Footer from './Footer'
import styles from './TimeTablePage.module.css'
import ArtistDetailsModal from './ArtistDetailsModal'

function TimeTablePage() {
  return (
    <div className={styles.time_table_page}>
      <TimeTableList />
      <Footer />
      <ArtistDetailsModal />
    </div>
  )
}

export default TimeTablePage
