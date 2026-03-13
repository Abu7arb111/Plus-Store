'use client';

import { motion } from 'framer-motion';
import { Smartphone, Shield, Zap, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background Orbs */}
      <div style={{
        position: 'fixed',
        top: '-10%',
        left: '-10%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        zIndex: -1,
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'fixed',
        bottom: '-10%',
        right: '-10%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
        zIndex: -1,
        borderRadius: '50%'
      }} />

      {/* Navigation */}
      <nav style={{
        padding: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '32px', height: '32px', background: 'var(--accent)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={20} color="white" />
          </div>
          Plus<span className="gradient-text">Store</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#features" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Features</a>
          <a href="#apps" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>App Library</a>
          <button className="premium-button">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '8rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'var(--glass)',
            border: '1px solid var(--glass-border)',
            borderRadius: '100px',
            fontSize: '0.8rem',
            marginBottom: '2rem'
          }}>
            <span style={{ color: 'var(--accent)' }}>New</span>
            <span>Unmatched privacy features for iOS</span>
          </div>

          <h1 style={{
            fontSize: '4.5rem',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em'
          }}>
            Upgrade Your iPhone<br />
            With <span className="gradient-text">Premium Tweaks</span>
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: '#aaa',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            The #1 destination for modified apps. Stealth mode for Instagram,
            Snapchat stories without seen receipts, and more.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <button className="premium-button" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
              Download Store
            </button>
            <button style={{
              background: 'transparent',
              color: 'white',
              border: '1px solid var(--glass-border)',
              padding: '15px 40px',
              borderRadius: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              View Apps <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Feature Preview Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '8rem'
        }}>
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'left' }}>
            <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}><Shield size={32} /></div>
            <h3>Total Privacy</h3>
            <p style={{ color: '#aaa', marginTop: '0.5rem' }}>Encrypted storage and stealth browsing. Watch stories and read messages undetected.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'left' }}>
            <div style={{ color: '#06b6d4', marginBottom: '1rem' }}><Smartphone size={32} /></div>
            <h3>No Jailbreak</h3>
            <p style={{ color: '#aaa', marginTop: '0.5rem' }}>Experience full customization without compromising your device security or warranty.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'left' }}>
            <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}><CheckCircle2 size={32} /></div>
            <h3>Yearly Support</h3>
            <p style={{ color: '#aaa', marginTop: '0.5rem' }}>One subscription, 365 days of guaranteed updates and priority support for all apps.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
