import { useRef, useImperativeHandle, forwardRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(({ buttonCaption, children }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));
  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
