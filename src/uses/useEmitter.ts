import { getCurrentInstance } from "vue";
import { Emitter, EventType } from "mitt";

export default function useEmitter() {
    const internalInstance = getCurrentInstance();
    const emitter =
        internalInstance!.appContext.config.globalProperties.emitter;

    return emitter as Emitter<Record<EventType, unknown>>;
}
