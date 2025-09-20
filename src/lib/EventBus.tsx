type EventType = 'dialog' | 'close' | 'error';

export interface EventDataMap extends Record<EventType, any> {
  'dialog': React.ReactNode;
  'close': {};
  'error': Error;
}

const EventBus = {
  on: <E extends EventType>(event: E, callback: (data: EventDataMap[E]) => void) => {
    document.addEventListener(event, callback as EventListener);
  },
  off: <E extends EventType>(event: E, callback: (data: EventDataMap[E]) => void) => {
    document.removeEventListener(event, callback as EventListener);
  },
  emit: <E extends EventType>(event: E, data: EventDataMap[E]) => {
    document.dispatchEvent(new CustomEvent(event, { detail: data as EventDataMap[E] }));
  },
};

export default EventBus;