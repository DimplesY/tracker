export const createHistoryEvent = <T extends keyof History>(type: T): (() => any) => {
  const origin = history[type]
  return function (this: any) {
    // eslint-disable-next-line prefer-rest-params
    const res = origin.apply(this, arguments)
    const e = new Event(type)
    window.dispatchEvent(e)
    return res
  }
}
