import EventEmmiter from 'events'

export default class SafeEmiiter<Events extends Record<PropertyKey, unknown[]>> {
  private emitter = new EventEmmiter();
  public emit<K extends string | symbol>(
    channel: K,
    ...data: Events[K]
  ) {
    return this.emitter.emit(channel, ...data)
  }

  public on<K extends string | symbol>(
    channel: K,
    listener: (...data: Events[K]) => void
  ) {
    return this.emitter.on(channel, listener)
  }
}
