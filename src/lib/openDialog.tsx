import EventBus, { type EventDataMap } from "./EventBus";


const openDialog = async (Component: React.ReactNode) => {
  EventBus.emit('dialog', Component);;

  const result = await new Promise<EventDataMap['submit'] | null>((resolve) => {
    const onSubmit = (event: CustomEvent<EventDataMap['submit']>) => {
      resolve(event.detail);
    };

    const onDismiss = () => {
      resolve(null);
    };

    EventBus.on('submit', onSubmit);
    EventBus.on('dismiss', onDismiss);
  });
  
  return result;
};

export default openDialog;