import { useEffect, useRef, useState } from "react"
import EventBus from "../lib/EventBus";

const DialogRoot = () => {
  const [dialog, setDialog] = useState<React.ReactNode>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    EventBus.on('dialog', (event: CustomEvent<React.ReactNode>) => {
      console.log('dialog', event.detail);
      setDialog(event.detail);
      dialogRef.current?.showModal();
    });
    EventBus.on('close', () => {
      setDialog(null);
      dialogRef.current?.close();
    });
    EventBus.on('error', (error: Error) => {
      console.error(error);
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