export type Op = {
  name: string,
  isDefault?: boolean,
  isPending?: boolean,
  isOk?: boolean,
  isError?: boolean,
  isResolved?: boolean,
}

export const Ops: Record<string, Op> = {
  DEFAULT: {name: `default`, isDefault: true},
  PENDING: {name: `pending`, isPending: true},
  OK: {name: `ok`, isOk: true, isResolved: true},
  ERROR: {name: `error`, isError: true, isResolved: true},
}

export const runOp = async <T>(op: { value: Op }, callback: () => Promise<T>) => {
  try {
    op.value = Ops.PENDING
    const text = await callback()
    op.value = Ops.OK
    return text
  }
  catch (err) {
    op.value = Ops.ERROR
  }
}
