import React, { useRef, useEffect } from 'react'
import { useAtom } from 'jotai'
import { isModalOpenAtom } from '../libs/jotai'
import styles from './Modal.module.css'

type ModaalProps = {
  title?: string
  children: React.ReactNode
}

function Modal({ title, children }: ModaalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom)

  useEffect(() => {
    const dialogElement = dialogRef.current
    if (dialogElement) {
      if (isModalOpen) {
        if (!dialogElement.open) {
          dialogElement.showModal();
        }
      } else {
        if (dialogElement.open) {
          dialogElement.close();
        }
      }
    }
  }, [isModalOpen])

  const handleClose = () => {
    setIsModalOpen(false)
  }

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      handleClose()
    }
  }

  if (!isModalOpen && !dialogRef.current?.open) {
    return <></>
  }

  return (
    <dialog ref={dialogRef} className={styles.dialog} onCancel={handleClose} onClick={handleBackdropClick}>
      {title && <h2 className={styles.modal_title}>{title}</h2>} 
      {children}
      <button onClick={handleClose} className={styles.modal_close_button}>
        &times;
      </button>
    </dialog>
  )
}

export default Modal