import { SetMetadata } from '@nestjs/common';

// Khi dùng thì đánh @Permissions('user:read', 'order:manage')
export const PERMISSIONS_KEY = 'permissions';
export const Permissions = (...permissions: string[]) => SetMetadata(PERMISSIONS_KEY, permissions);