import { useState } from "react";

function PageModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <dialog open={isOpen} onClose={handleCloseModal}>
        <h1>This is a modal</h1>
        <button onClick={handleCloseModal}>Close modal</button>
      </dialog>
      <button onClick={handleOpenModal}>Open modal</button>
    </>
  );
}
export default PageModal;
