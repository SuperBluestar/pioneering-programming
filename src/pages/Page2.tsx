import { useState } from 'react'
import ReactModal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import './Page2.css'

const Page2 = () => {
  const [openedSingleCTA, setOpenedSingleCTA] = useState<boolean>(false)
  const [openedRemoveX, setOpenedRemoveX] = useState<boolean>(false)
  const [openedDeleteX, setOpenedDeleteX] = useState<boolean>(false)
  const [removeX, setRemoveX] = useState<number>(1)
  const [deleteX, setDeleteX] = useState<number>(1)
  const [deleting, setDeleting] = useState<boolean>(false)
  const openSingleCTAModal = () => {
    setOpenedSingleCTA(true)
  }
  const closeSingleCTAModal = () => {
    setOpenedSingleCTA(false)
  }
  const openRemoveXModal = () => {
    setOpenedRemoveX(true)
  }
  const closeRemoveXModal = () => {
    setOpenedRemoveX(false)
  }
  const removeHandler = () => {
    setRemoveX((_removeX) => _removeX + 1)
    setOpenedRemoveX(false)
  }
  const openDeleteXModal = () => {
    setOpenedDeleteX(true)
  }
  const closeDeleteXModal = () => {
    setOpenedDeleteX(false)
  }
  const deleteHandler = () => {
    setDeleteX((_deleteX) => _deleteX + 1)
    setDeleting(false)
    setOpenedDeleteX(false)
  }
  const deleteProceeding = () => {
    setDeleting(true)
  }
  return (
    <div className='page-2'>
      <button onClick={openSingleCTAModal}>Single CTA</button>
      <button onClick={openRemoveXModal}>Remove {removeX}</button>
      <button onClick={openDeleteXModal}>{deleting ? 'Disabled' : 'Delete'} {deleteX}</button>
      <ReactModal
        isOpen={openedSingleCTA}
        contentLabel='Single CTA Modal'
        className={`single-cta-modal modal`}
        onRequestClose={closeSingleCTAModal}
        ariaHideApp={false}
      >
        <div className='header'>
          <span className='title'>Information</span>
          <FontAwesomeIcon
            icon={faClose}
            className='cursor-pointer'
            onClick={closeSingleCTAModal}
            fontSize='1.5em'
          />
        </div>
        <div className='body'>
          <p>You have clicked the Single CTA button</p>
        </div>
        <div className='footer'>
          <button onClick={closeSingleCTAModal} className='ok-btn'>OK</button>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={openedRemoveX}
        contentLabel='Remove X Modal'
        className={`remove-x-modal modal`}
        onRequestClose={closeRemoveXModal}
        ariaHideApp={false}
      >
        <div className='header'>
          <span className='title'>Remove?</span>
          <FontAwesomeIcon
            icon={faClose}
            className='cursor-pointer'
            onClick={closeRemoveXModal}
            fontSize='1.5em'
          />
        </div>
        <div className='body'>
          <p>Are you sure you want to remove the Remove {removeX} button?</p>
        </div>
        <div className='footer'>
          <button onClick={closeRemoveXModal} className='cancel-btn'>Cancel</button>
          <button onClick={removeHandler} className='remove-btn'>Remove</button>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={openedDeleteX}
        contentLabel='Delete X Modal'
        className={`delete-x-modal modal`}
        onRequestClose={closeDeleteXModal}
        ariaHideApp={false}
      >
        <div className='header'>
          <span className='title'>Delete?</span>
          <FontAwesomeIcon
            icon={faClose}
            className='cursor-pointer'
            onClick={closeDeleteXModal}
            fontSize='1.5em'
          />
        </div>
        <div className='body'>
          <p>Are you sure you want to delete the {deleting ? 'Disabled' : 'Delete'} {deleteX} button? This cannot be undone!</p>
        </div>
        <div className='footer'>
          <button onClick={closeDeleteXModal} className='cancel-btn'>Cancel</button>
          <button onMouseDown={deleteProceeding} onMouseUp={deleteHandler} className='delete-btn'>Delete</button>
        </div>
      </ReactModal>
    </div>
  )
}

export default Page2
