export const ElasticsearchConfig = {
	// ================================================== INDEX NAMES ==================================================
	indices: {
		users: 'users_v1',
		profiles: 'profiles_v1',
		notifications: 'notifications_v1',
		media: 'media_v1',
		messages: 'messages_v1',
		conversations: 'conversations_v1',
	},

	// ================================================== ALIASES ==================================================
	aliases: {
		users: 'users',
		profiles: 'profiles',
		notifications: 'notifications',
		media: 'media',
		messages: 'messages',
		conversations: 'conversations',
	},

	// ================================================== DEFAULT SETTINGS ==================================================
	defaultSettings: {
		number_of_shards: 1,
		number_of_replicas: 0,
		refresh_interval: '10s',
	},

	// ================================================== COMMON MAPPINGS ==================================================
	commonMappings: {
		properties: {
			createdAt: { type: 'date' },
			updatedAt: { type: 'date' },
			deletedAt: { type: 'date' },
			isActive: { type: 'boolean' },
			active: { type: 'boolean' },
		},
	},
} as const;
