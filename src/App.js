import React, { useEffect, useRef, useState } from 'react';

// isOpen true olduğunda Modalı açalım
export default function App() {
  const modalRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [isOpen]);

  return (
    <>
      <button onClick={openModal}>Modalı aç</button>
      <Modal ref={modalRef} closeModal={closeModal}>
        <h1 className='pb-2 text-lg font-bold'>Modal açık</h1>
        {/* <button onClick={closeModal}>Kapalı</button> */}
      </Modal>
    </>
  );
}

const Modal = React.forwardRef(({ closeModal, children }, ref) => {
  return (
    <dialog ref={ref} className='border-2 border-black p-4'>
      {children}
      <button onClick={closeModal} className="mt-4">
        Kapat
      </button>
    </dialog>
  );
});

Modal.displayName = 'Modal';
