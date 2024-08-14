import { StateCreator } from "zustand"
import Notification from '../components/Notification';

type Notification = {
    message: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'message' | 'error'>) => void
    hideNotification: () => void
}

export const createNotifictionSlice: StateCreator<NotificationSliceType> = (set, get) => ({
    notification: {
        message: '',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notification:{
                message: payload.message,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() => {
            get().hideNotification()
        }, 5000);
    },
    hideNotification: () => {
        set({
            notification:{
                message: '',
                error: false,
                show: false
            }
        })
    } 
})