// src/NotificationsDemo.jsx
import React from 'react'
import Notifier from './Notification'

export default function NotificationsDemo() {
    return (
        <div style={{ padding: '2rem' }}>
            <h2>Notifier Demo</h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => Notifier.success('👍 Success!')}>
                    Success
                </button>
                <button onClick={() => Notifier.error('🚫 Error!')}>
                    Error
                </button>
                <button onClick={() => Notifier.info('ℹ️ Info')}>
                    Info
                </button>
                <button onClick={() => Notifier.warn('⚠️ Warning')}>
                    Warn
                </button>
            </div>
        </div>
    )
}
