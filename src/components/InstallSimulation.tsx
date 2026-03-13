'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Download, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InstallSimulation({ appName, isOpen, onClose }: { appName: string, isOpen: boolean, onClose: () => void }) {
    const [stage, setStage] = useState(0); // 0: Prompt, 1: Installing, 2: Done

    useEffect(() => {
        if (stage === 1) {
            const timer = setTimeout(() => setStage(2), 3000);
            return () => clearTimeout(timer);
        }
    }, [stage]);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(8px)'
        }}>
            <AnimatePresence mode="wait">
                {stage === 0 && (
                    <motion.div
                        key="prompt"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        style={{
                            background: '#1c1c1e',
                            width: '280px',
                            borderRadius: '14px',
                            overflow: 'hidden',
                            textAlign: 'center',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                            border: '0.5px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <div style={{ padding: '20px 15px' }}>
                            <p style={{ fontWeight: '600', fontSize: '17px', marginBottom: '5px', color: 'white' }}>
                                "Plus Store" would like to install "{appName}"
                            </p>
                            <p style={{ fontSize: '13px', color: '#8e8e93' }}>
                                This app is from a distributed developer and is verified for current iOS version.
                            </p>
                        </div>
                        <div style={{ display: 'flex', borderTop: '0.5px solid rgba(255,255,255,0.1)' }}>
                            <button
                                onClick={onClose}
                                style={{
                                    flex: 1, padding: '12px', border: 'none', background: 'transparent',
                                    color: '#0a84ff', fontSize: '17px', borderRight: '0.5px solid rgba(255,255,255,0.1)',
                                    cursor: 'pointer'
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setStage(1)}
                                style={{
                                    flex: 1, padding: '12px', border: 'none', background: 'transparent',
                                    color: '#0a84ff', fontSize: '17px', fontWeight: '600',
                                    cursor: 'pointer'
                                }}
                            >
                                Install
                            </button>
                        </div>
                    </motion.div>
                )}

                {stage === 1 && (
                    <motion.div
                        key="installing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ textAlign: 'center', color: 'white' }}
                    >
                        <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 20px' }}>
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="38" fill="none" stroke="#2c2c2e" strokeWidth="4" />
                                <motion.circle
                                    cx="40" cy="40" r="38" fill="none" stroke="#0a84ff" strokeWidth="4"
                                    strokeDasharray="239"
                                    initial={{ strokeDashoffset: 239 }}
                                    animate={{ strokeDashoffset: 0 }}
                                    transition={{ duration: 3, ease: "linear" }}
                                />
                            </svg>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <Smartphone size={32} color="#0a84ff" />
                            </div>
                        </div>
                        <p style={{ fontSize: '18px', fontWeight: '600' }}>Starting Download...</p>
                        <p style={{ fontSize: '14px', color: '#8e8e93', marginTop: '5px' }}>Requesting bundle from server</p>
                    </motion.div>
                )}

                {stage === 2 && (
                    <motion.div
                        key="done"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{ textAlign: 'center', color: 'white' }}
                    >
                        <div style={{
                            width: '80px', height: '80px', background: '#30d158',
                            borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 20px', boxShadow: '0 0 20px rgba(48,209,88,0.3)'
                        }}>
                            <Download size={40} color="white" />
                        </div>
                        <p style={{ fontSize: '24px', fontWeight: '800' }}>Success!</p>
                        <p style={{ fontSize: '16px', color: '#8e8e93', margin: '10px 0 25px' }}>
                            Check your home screen to see "{appName}"
                        </p>
                        <button
                            className="premium-button"
                            onClick={onClose}
                            style={{ padding: '10px 40px' }}
                        >
                            Done
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
