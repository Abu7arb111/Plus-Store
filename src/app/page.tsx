'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone, Shield, Zap, CheckCircle2, ChevronRight,
  Instagram, Camera, MessageCircle, Star, Lock, Eye, BellOff,
  Download, ChevronDown, Twitter
} from 'lucide-react';
import { useState } from 'react';
import NativeAppCode from '@/components/NativeAppCode';
import InstallSimulation from '@/components/InstallSimulation';

// ─── App Data ───────────────────────────────────────────────────────────────
const APPS = [
  {
    id: 1,
    name: 'Instagram++',
    category: 'Social',
    icon: <Instagram size={28} color="white" />,
    iconBg: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    features: ['View stories secretly', 'Download posts & stories', 'Screenshot chats silently', 'Disable seen receipts'],
    badge: 'Popular',
    badgeColor: '#6366f1',
    installUrl: '#'
  },
  {
    id: 2,
    name: 'Snapchat++',
    category: 'Social',
    icon: <Camera size={28} color="black" />,
    iconBg: 'linear-gradient(135deg, #FFFC00, #f5e800)',
    features: ['Open snaps without seen', 'Screenshot without notify', 'Save snaps to camera roll', 'Disable typing indicator'],
    badge: 'Hot 🔥',
    badgeColor: '#ef4444',
    installUrl: '#'
  },
  {
    id: 3,
    name: 'WhatsApp++',
    category: 'Messaging',
    icon: <MessageCircle size={28} color="white" />,
    iconBg: 'linear-gradient(135deg, #25D366, #128C7E)',
    features: ['Enter chat without appearing', 'Blue tick control', 'Download statuses & media', 'Hide typing indicator'],
    badge: 'New',
    badgeColor: '#06b6d4',
    installUrl: '#'
  },
  {
    id: 4,
    name: 'Twitter (X)++',
    category: 'Social',
    icon: <Twitter size={28} color="white" />,
    iconBg: 'linear-gradient(135deg, #111, #333)',
    features: ['Download any video', 'Undo tweet anytime', 'No ads ever', 'Chronological timeline'],
    badge: 'Updated',
    badgeColor: '#6366f1',
    installUrl: '#'
  },
  {
    id: 5,
    name: 'TikTok++',
    category: 'Entertainment',
    icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.15 8.15 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z" /></svg>,
    iconBg: 'linear-gradient(135deg, #010101, #2d2d2d)',
    features: ['Download without watermark', 'Region bypass', 'Background audio play', 'Disable ads'],
    badge: 'Popular',
    badgeColor: '#6366f1',
    installUrl: '#'
  },
  {
    id: 6,
    name: 'YouTube++',
    category: 'Entertainment',
    icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
    iconBg: 'linear-gradient(135deg, #FF0000, #cc0000)',
    features: ['Background play (free)', 'Ad-free experience', 'Download any video/audio', 'Picture-in-picture'],
    badge: 'Most Loved',
    badgeColor: '#ef4444',
    installUrl: '#'
  },
];

// ─── FAQ Data ────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Do I need to jailbreak my iPhone?', a: 'No! Plus Store uses an enterprise certificate method to install apps. No jailbreak required — your warranty stays intact and your device remains fully secure.' },
  { q: 'How does the stealth mode work?', a: 'Our modified apps inject custom code that intercepts read receipts, screenshot notifications, and story views at the app layer, so the servers never register your action.' },
  { q: 'Will my accounts get banned?', a: 'We use advanced obfuscation techniques to minimize detection. However, no tweak is 100% undetectable. We recommend using a secondary account for tweaked apps as a precaution.' },
  { q: 'What does the yearly subscription include?', a: 'You get access to the full app library (all 50+ apps), continuous updates, priority tech support, and any new apps added during your subscription year.' },
  { q: 'How do I install the apps?', a: 'After subscribing, you\'ll get a unique install link. Tap it on your iPhone, trust the profile in Settings, and the app installs just like a normal app.' },
];

// ─── App Card ────────────────────────────────────────────────────────────────
function AppCard({ app, index, onInstall }: { app: typeof APPS[0]; index: number; onInstall: (name: string) => void }) {
  return (
    <motion.div
      className="glass-card"
      style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* App Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '14px',
            background: app.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}>
            {app.icon}
          </div>
          <div>
            <p style={{ fontWeight: '700', fontSize: '1rem' }}>{app.name}</p>
            <p style={{ color: '#888', fontSize: '0.75rem' }}>{app.category}</p>
          </div>
        </div>
        <span style={{
          background: app.badgeColor, color: 'white',
          padding: '3px 10px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: '600'
        }}>{app.badge}</span>
      </div>

      {/* Features */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {app.features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#bbb', fontSize: '0.85rem' }}>
            <CheckCircle2 size={14} color="#6366f1" /> {f}
          </li>
        ))}
      </ul>

      {/* Install Button */}
      <button
        onClick={() => onInstall(app.name)}
        className="premium-button"
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '0.5rem', paddingTop: '10px', paddingBottom: '10px'
        }}
      >
        <Download size={16} /> Install Free
      </button>
    </motion.div>
  );
}

// ─── FAQ Item ────────────────────────────────────────────────────────────────
function FaqItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="glass-card"
      style={{ padding: '1.25rem 1.5rem', cursor: 'pointer' }}
      onClick={() => setOpen(!open)}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontWeight: '600', fontSize: '0.95rem' }}>{faq.q}</p>
        <ChevronDown size={18} color="#888" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ color: '#aaa', fontSize: '0.9rem', marginTop: '0.75rem', overflow: 'hidden', lineHeight: '1.6' }}
          >
            {faq.a}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [simulation, setSimulation] = useState({ isOpen: false, appName: '' });

  const triggerInstall = (appName: string) => {
    setSimulation({ isOpen: true, appName });
  };

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <InstallSimulation
        isOpen={simulation.isOpen}
        appName={simulation.appName}
        onClose={() => setSimulation({ ...simulation, isOpen: false })}
      />
      {/* Background Orbs */}
      <div style={{ position: 'fixed', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', zIndex: -1, borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', zIndex: -1, borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', top: '40%', left: '50%', transform: 'translateX(-50%)', width: '30%', height: '30%', background: 'radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)', zIndex: -1, borderRadius: '50%', pointerEvents: 'none' }} />

      {/* ── Navigation ── */}
      <nav style={{ padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', position: 'sticky', top: 0, backdropFilter: 'blur(12px)', zIndex: 100 }}>
        <div style={{ fontSize: '1.4rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '32px', height: '32px', background: 'var(--accent)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={20} color="white" />
          </div>
          Plus<span className="gradient-text">Store</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#apps" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Apps</a>
          <a href="#pricing" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Pricing</a>
          <a href="#faq" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>FAQ</a>
          <button className="premium-button" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Get Started</button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ padding: '7rem 2rem 6rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'var(--glass)', border: '1px solid var(--glass-border)', borderRadius: '100px', fontSize: '0.78rem', marginBottom: '2rem' }}>
            <Zap size={12} color="var(--accent)" />
            <span style={{ color: '#bbb' }}>The #1 tweaked app store for college students</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: '900', lineHeight: '1.05', marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Go Stealth.<br />
            <span className="gradient-text">Stay Ahead.</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#999', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            Access 50+ modified apps with full privacy controls. Watch stories, read snaps, screenshot messages — completely undetected.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#pricing">
              <button className="premium-button" style={{ padding: '14px 36px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Download size={18} /> Get Plus Store
              </button>
            </a>
            <a href="#apps">
              <button style={{ background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', padding: '14px 36px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                Browse Apps <ChevronRight size={18} />
              </button>
            </a>
          </div>

          {/* Social Proof */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '3.5rem', flexWrap: 'wrap' }}>
            {[['50+', 'Tweaked Apps'], ['10K+', 'Active Users'], ['99%', 'Uptime SLA'], ['24/7', 'Support']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent)' }}>{num}</p>
                <p style={{ color: '#888', fontSize: '0.8rem' }}>{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── What you get ── */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { icon: <Eye size={26} color="#6366f1" />, title: 'Ghost Mode', desc: 'Browse Instagram stories, Snapchat, and WhatsApp statuses without the other side ever knowing.' },
            { icon: <Lock size={26} color="#06b6d4" />, title: 'Encrypted Vault', desc: 'All your downloaded content is stored in an encrypted, hidden vault inaccessible to other apps.' },
            { icon: <BellOff size={26} color="#ec4899" />, title: 'Screenshot Guard', desc: 'Take screenshots of any chat or story without triggering a single notification to the sender.' },
            { icon: <Smartphone size={26} color="#a855f7" />, title: 'No Jailbreak', desc: 'Installed via a one-tap enterprise certificate. No jailbreak, no risk, no tech skills needed.' },
          ].map((item, i) => (
            <motion.div key={i} className="glass-card" style={{ padding: '1.75rem' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
              <h3 style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.05rem' }}>{item.title}</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── App Library ── */}
      <section id="apps" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>
            The <span className="gradient-text">App Library</span>
          </motion.h2>
          <p style={{ color: '#888', marginTop: '0.75rem' }}>All modified, all encrypted, all yours for a year.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {APPS.map((app, i) => <AppCard key={app.id} app={app} index={i} onInstall={triggerInstall} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>+ 44 more apps including Telegram++, BeReal++, Discord++ & more</p>
        </div>

        <NativeAppCode />
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          Simple <span className="gradient-text">Pricing</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          {/* Monthly */}
          <motion.div className="glass-card" style={{ padding: '2.5rem' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}>
            <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: '600' }}>MONTHLY</p>
            <p style={{ fontSize: '3rem', fontWeight: '900' }}>$4<span style={{ fontSize: '1rem', color: '#888' }}>.99/mo</span></p>
            <p style={{ color: '#777', fontSize: '0.85rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Billed monthly</p>
            {['20 apps included', 'Basic support', 'Standard updates'].map(f => (
              <div key={f} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.6rem' }}>
                <CheckCircle2 size={16} color="#6366f1" /> <span style={{ fontSize: '0.88rem', color: '#bbb' }}>{f}</span>
              </div>
            ))}
            <button className="premium-button" style={{ width: '100%', marginTop: '1.5rem' }}>Choose Monthly</button>
          </motion.div>

          {/* Yearly (highlighted) */}
          <motion.div style={{
            padding: '2.5rem', background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(6,182,212,0.1))',
            border: '1px solid var(--accent)', borderRadius: '20px', position: 'relative', boxShadow: '0 0 30px rgba(99,102,241,0.3)'
          }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', padding: '4px 16px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: '700', whiteSpace: 'nowrap' }}>
              ⭐ MOST POPULAR
            </div>
            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: '600' }}>YEARLY</p>
            <p style={{ fontSize: '3rem', fontWeight: '900' }}>$29<span style={{ fontSize: '1rem', color: '#888' }}>/year</span></p>
            <p style={{ color: '#06b6d4', fontSize: '0.85rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Save 51% vs monthly</p>
            {['50+ apps included', 'Priority 24/7 support', 'Instant updates', 'Early access to new apps', 'Encrypted vault (unlimited)'].map(f => (
              <div key={f} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.6rem' }}>
                <CheckCircle2 size={16} color="#6366f1" /> <span style={{ fontSize: '0.88rem', color: '#ddd' }}>{f}</span>
              </div>
            ))}
            <button className="premium-button" style={{ width: '100%', marginTop: '1.5rem' }}>Get Yearly Plan</button>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: '5rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>
            Frequently <span className="gradient-text">Asked</span>
          </motion.h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {FAQS.map((faq, i) => <FaqItem key={i} faq={faq} index={i} />)}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '2.5rem', textAlign: 'center', color: '#555', fontSize: '0.85rem', marginTop: '3rem' }}>
        <div style={{ marginBottom: '1rem', fontWeight: '700', fontSize: '1.1rem', color: '#888' }}>
          Plus<span className="gradient-text">Store</span>
        </div>
        <p style={{ maxWidth: '500px', margin: '0 auto 1rem' }}>
          ⚠️ Disclaimer: Modified apps are for educational purposes. Use at your own risk. We are not affiliated with Instagram, Snapchat, or any third party.
        </p>
        <p>© {new Date().getFullYear()} PlusStore. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
