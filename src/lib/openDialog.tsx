import EventBus, { type EventDataMap } from "./EventBus";


const openDialog = async (Component: React.ReactNode) => {
  EventBus.emit('dialog', Component);;

  return await new Promise<EventDataMap['submit'] | null>((resolve) => {
    const onSubmit = (event: CustomEvent<EventDataMap['submit']>) => {
      EventBus.off('submit', onSubmit);
      resolve(event.detail);
    };

    const onDismiss = () => {
      EventBus.off('dismiss', onDismiss);
      resolve(null);
    };

    EventBus.on('submit', onSubmit);
    EventBus.on('dismiss', onDismiss);
  });
};

export default openDialog;