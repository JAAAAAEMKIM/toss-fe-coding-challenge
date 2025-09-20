type EventType = 'dialog' | 'submit' | 'dismiss';

export interface EventData { }

export interface EventDataMap extends Record<EventType, any> {
  'dialog': React.ReactNode;
  'submit': EventData;
  'dismiss': null;
};

const eventBus = new EventTarget();

const EventBus = {
  on: <E extends keyof EventDataMap>(event: E, callback: (event: CustomEvent<EventDataMap[E]>) => void) => {
    eventBus.addEventListener(event, callback as EventListener);
  },
  off: <E extends keyof EventDataMap>(event: E, callback: (event: CustomEvent<EventDataMap[E]>) => void) => {
    eventBus.removeEventListener(event, callback as EventListener);
  },
  emit: <E extends keyof EventDataMap>(event: E, data: EventDataMap[E]) => {
    eventBus.dispatchEvent(new CustomEvent(event, { detail: data as EventDataMap[E] }));
  },
};

export default EventBus;