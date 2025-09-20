import type { ComponentProps } from "react";
import EventBus, { type EventDataMap } from "./EventBus";
import type RegisterForm from "../components/RegisterForm";


const openDialog = async (Component: React.ReactNode) => {
  EventBus.emit('dialog', Component);

  return new Promise<EventDataMap['close']>((resolve, reject) => {
    EventBus.on('close', (event: CustomEvent<EventDataMap['close']>) => {
      console.log('close', event.detail);
      resolve(event.detail);
    });

    EventBus.on('error', (error: EventDataMap['error']) => {
      reject(error);
    });
  });
};

export default openDialog;