// 消息提示类型
import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'
import type { NotificationApiInjection } from 'naive-ui/lib/notification/src/NotificationProvider'

declare global {
    interface Window {
        // 消息提示类型
        $Message: MessageApiInjection,
        $Notification: NotificationApiInjection
    }
}