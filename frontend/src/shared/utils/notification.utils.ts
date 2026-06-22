import type { NotificationInstance } from 'antd/es/notification/interface';
import React from 'react';

let notificationApi: NotificationInstance | null = null;

export const setNotificationApi = (api: NotificationInstance) => {
    notificationApi = api;
};

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

const DEFAULT_TITLES: Record<NotificationType, string> = {
    success: 'Thành công',
    error: 'Lỗi',
    info: 'Thông báo',
    warning: 'Cảnh báo',
};

export const notify = (
    type: NotificationType,
    description: string | React.ReactNode,
    message?: string,
    placement: 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' = 'topRight'
) => {
    if (!notificationApi) {
        console.warn('Notification API chưa được khởi tạo. Hãy gọi setNotificationApi trong component chính.');
        return;
    }

    const finalMessage = message || DEFAULT_TITLES[type];

    notificationApi[type]({
        message: finalMessage,
        description,
        placement,
        duration: type === 'error' ? 5 : 3,
        showProgress: true,
    });
};