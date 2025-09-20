import { useEffect, useRef, useState } from "react"
import EventBus from "../lib/EventBus";

const DialogRoot = () => {
  const [dialog, setDialog] = useState<React.ReactNode>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    EventBus.on('dialog', (event: CustomEvent<React.ReactNode>) => {
      setDialog(event.detail);
      dialogRef.current?.showModal();
    });
    EventBus.on('submit', () => {
      setDialog(null);
      dialogRef.current?.close();
    });
    EventBus.on('dismiss', () => {
      setDialog(null);
      dialogRef.current?.close();
    });
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    
    const handleClickOutside = (e: MouseEvent) => {
      if (e.target === dialog) {
      setDialog(null);
      dialogRef.current?.close();
      }
    };
    
    dialog?.addEventListener('click', handleClickOutside);
    return () => dialog?.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="dialog"
    >
      {dialog}
    </dialog>
  )
}

export default DialogRoot