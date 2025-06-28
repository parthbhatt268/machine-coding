import React from 'react'
import Notifier from './Notification'
import './ToastConatiner.css'

export default class ToastContainer extends React.Component {
    state = { toasts: [] }

    // when Notifier.notify() is called, this runs:
    handleNotify = ({ type, message }) => {
        const id = Date.now() + Math.random()
        this.setState(({ toasts }) => (
            {
                toasts: [...toasts, { id, type, message }]
            }
        ),
            () => {
                // auto-dismiss after 3s
                setTimeout(() => this.removeToast(id), 3000)
            }
        )
    }

    removeToast = id =>
        this.setState(({ toasts }) => ({
            toasts: toasts.filter(t => t.id !== id)
        }))

    componentDidMount() {
        Notifier.subscribe(this.handleNotify)  // first step
    }

    componentWillUnmount() {
        Notifier.unsubscribe(this.handleNotify)
    }

    render() {
        return (
            <div className="toast-wrapper">
                {this.state.toasts.map(({ id, type, message }) => (
                    <div key={id} className={`toast toast-${type}`}>
                        {message}
                    </div>
                ))}
            </div>
        )
    }
}
