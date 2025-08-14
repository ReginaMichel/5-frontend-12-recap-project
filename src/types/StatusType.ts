export const status: Record<StatusType, StatusType> = {
    OPEN: "OPEN",
    IN_PROGRESS: "IN_PROGRESS",
    DONE: "DONE"
} as const;
export type StatusType = 'OPEN' | 'IN_PROGRESS' | 'DONE';