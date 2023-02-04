export const AsyncStatuses = {
    FAILED: 'failed',
    IDLE: 'idle',
    LOADING: 'loading',
} as const;

export type AsyncStatusesType =
    typeof AsyncStatuses[keyof typeof AsyncStatuses];
