export default class Notifier {
    // an array of subscriber callbacks // arr of function // we only have one sub which is ToastCOnatiner
    static listeners = []

    // internal method: call all subscribers with { type, message }
    static notify(type, message) {
        this.listeners.forEach(fn => fn({ type, message }))
    }

    // public API
    static success(message) { this.notify('success', message) }
    static error(message) { this.notify('error', message) }
    static info(message) { this.notify('info', message) }
    static warn(message) { this.notify('warn', message) }

    // subscription management
    static subscribe(fn) { this.listeners.push(fn) }
    static unsubscribe(fn) {
        this.listeners = this.listeners.filter(l => l !== fn)
    }
}
