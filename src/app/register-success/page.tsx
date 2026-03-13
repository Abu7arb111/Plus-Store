'use client';

import { motion } from 'framer-motion';
import { Smartphone, CheckCircle2, Copy } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
    const searchParams = useSearchParams();
    const udid = searchParams.get('udid') || '30230-0004561E14E1802E'; // Representative format

    return (
        <main style={{ minHeight: '100vh', padding: '4rem 2rem', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card"
                style={{ maxWidth: '500px', margin: '0 auto', padding: '3rem 2rem' }}
            >
                <div style={{ color: '#22c55e', marginBottom: '1.5rem' }}>
                    <CheckCircle2 size={64} />
                </div>

                <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>Device Registered</h1>
                <p style={{ color: '#888', marginBottom: '2rem' }}>
                    Your device has been successfully identified. You can now install the Plus Store app.
                </p>

                <div style={{
                    background: 'rgba(0,0,0,0.3)',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2rem'
                }}>
                    <span style={{ color: 'var(--accent)' }}>{udid}</span>
                    <Copy size={16} style={{ cursor: 'pointer', color: '#555' }} />
                </div>

                <button className="premium-button" style={{ width: '100%', padding: '15px' }}>
                    Install Native Store App
                </button>
            </motion.div>
        </main>
    );
}

export default function RegisterSuccess() {
    return (
        <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '4rem' }}>Loading...</div>}>
            <SuccessContent />
        </Suspense>
    );
}
