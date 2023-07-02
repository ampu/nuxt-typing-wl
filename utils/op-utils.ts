export type Op = {
  name: string,
  isDefault?: boolean,
  isPending?: boolean,
  isOk?: boolean,
  isError?: boolean,
  isResolved?: boolean,
}

export const OpState: Record<string, Op> = {
  DEFAULT: {name: `default`, isDefault: true},
  PENDING: {name: `pending`, isPending: true},
  OK: {name: `ok`, isOk: true, isResolved: true},
  ERROR: {name: `error`, isError: true, isResolved: true},
}
