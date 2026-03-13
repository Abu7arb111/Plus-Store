'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone, Shield, Zap, CheckCircle2, ChevronRight,
  Download, ChevronDown, PlayCircle, Star, Lock, Eye, BellOff
} from 'lucide-react';
import { useState } from 'react';
import NativeAppCode from '@/components/NativeAppCode';
import InstallSimulation from '@/components/InstallSimulation';
import ThreeBackground from '@/components/ThreeBackground';
import TiltCard from '@/components/TiltCard';

// ─── App Data ───────────────────────────────────────────────────────────────
const APPS = [
  {
    id: 1,
    name: 'Instagram++',
    category: 'Social',
    icon: '/images/apps/instagram_plus_icon_1773430878711.png',
    features: ['View stories secretly', 'Download posts & stories', 'Screenshot chats silently', 'Disable seen receipts'],
    badge: 'Popular',
    badgeColor: '#6366f1',
    installUrl: '#'
  },
  {
    id: 2,
    name: 'Snapchat++',
    category: 'Social',
    icon: '/images/apps/snapchat_plus_icon_1773430963533.png',
    features: ['Open snaps without seen', 'Screenshot without notify', 'Save snaps to camera roll', 'Disable typing indicator'],
    badge: 'Hot 🔥',
    badgeColor: '#ef4444',
    installUrl: '#'
  },
  {
    id: 3,
    name: 'Movie Plus',
    category: 'Entertainment',
    icon: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=200&h=200&auto=format&fit=crop', // Fallback for 429
    features: ['Cinema Releases', 'No Subscriptions', 'Multi-Language Support', 'Offline Downloads'],
    badge: 'Trending',
    badgeColor: '#ef4444',
    installUrl: '#'
  },
  {
    id: 4,
    name: 'Twitter (X)++',
    category: 'Social',
    icon: 'https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fd6465.png', // Official X Icon High Res
    features: ['Download any video', 'Undo tweet anytime', 'No ads ever', 'Chronological timeline'],
    badge: 'Updated',
    badgeColor: '#6366f1',
    installUrl: '#'
  },
  {
    id: 5,
    name: 'TikTok++',
    category: 'Entertainment',
    icon: '/images/apps/tiktok_plus_icon_1773430978581.png',
    features: ['Download without watermark', 'Region bypass', 'Background audio play', 'Disable ads'],
    badge: 'Popular',
    badgeColor: '#6366f1',
    installUrl: '#'
  },
  {
    id: 6,
    name: 'YouTube++',
    category: 'Entertainment',
    icon: '/images/apps/youtube_plus_icon_1773431003669.png',
    features: ['Background play (free)', 'Ad-free experience', 'Download any video/audio', 'Picture-in-picture'],
    badge: 'Most Loved',
    badgeColor: '#ef4444',
    installUrl: '#'
  },
  {
    id: 7,
    name: 'WhatsApp++',
    category: 'Messaging',
    icon: '/images/apps/whatsapp_plus_icon_1773431018318.png',
    features: ['Enter chat without appearing', 'Blue tick control', 'Download statuses & media', 'Hide typing indicator'],
    badge: 'New',
    badgeColor: '#06b6d4',
    installUrl: '#'
  }
];

const MOVIES = [
  { id: 101, title: 'Dune: Part Two', year: '2024', status: 'In Cinemas', poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&h=600&auto=format&fit=crop', platform: 'Cinema' },
  { id: 102, title: 'Kung Fu Panda 4', year: '2024', status: 'In Cinemas', poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=400&h=600&auto=format&fit=crop', platform: 'Cinema' },
  { id: 103, title: 'Avatar: The Way of Water', year: '2022', status: 'Available', poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=400&h=600&auto=format&fit=crop', platform: 'Disney+' },
];

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
    <TiltCard>
      <motion.div
        className="glass-card"
        style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', position: 'relative', overflow: 'hidden' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img
              src={app.icon}
              alt={app.name}
              style={{
                width: '60px', height: '60px', borderRadius: '14px',
                objectFit: 'cover',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            />
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

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {app.features.map((f, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#bbb', fontSize: '0.85rem' }}>
              <CheckCircle2 size={14} color="#6366f1" /> {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => onInstall(app.name)}
          className="premium-button"
          style={{
            width: '100%', display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: '0.5rem', paddingTop: '10px', paddingBottom: '10px',
            marginTop: 'auto'
          }}
        >
          <Download size={16} /> Install Free
        </button>
      </motion.div>
    </TiltCard>
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
    <main style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <ThreeBackground />
      <InstallSimulation
        isOpen={simulation.isOpen}
        appName={simulation.appName}
        onClose={() => setSimulation({ ...simulation, isOpen: false })}
      />

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
          <a href="#movies" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Movies</a>
          <a href="#pricing" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Pricing</a>
          <button className="premium-button" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Get Started</button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ padding: '7rem 2rem 6rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'var(--glass)', border: '1px solid var(--glass-border)', borderRadius: '100px', fontSize: '0.78rem', marginBottom: '2rem' }}>
            <Zap size={12} color="var(--accent)" />
            <span style={{ color: '#bbb' }}>The only App Store you'll ever need</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: '900', lineHeight: '1.05', marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Get the <span className="gradient-text">Plus Store</span> App.<br />
            Unleash Your iPhone.
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#999', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            Install our native app store to access 50+ tweaked apps, premium movies, and advanced privacy tools. No jailbreak. No revokes. Forever.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/register-success">
              <button className="premium-button" style={{ padding: '16px 48px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 0 40px var(--accent-glow)' }}>
                <Download size={20} /> Install Plus Store App
              </button>
            </a>
            <a href="#apps">
              <button style={{ background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', padding: '16px 48px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                Preview Library <ChevronRight size={18} />
              </button>
            </a>
          </div>

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

      {/* ── Feature Cards ── */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { icon: <Eye size={26} color="#6366f1" />, title: 'Ghost Mode', desc: 'Browse Instagram stories, Snapchat, and WhatsApp statuses without the other side ever knowing.' },
            { icon: <Lock size={26} color="#06b6d4" />, title: 'Encrypted Vault', desc: 'All your downloaded content is stored in an encrypted, hidden vault inaccessible to other apps.' },
            { icon: <BellOff size={26} color="#ec4899" />, title: 'Screenshot Guard', desc: 'Take screenshots of any chat or story without triggering a single notification to the sender.' },
            { icon: <Smartphone size={26} color="#a855f7" />, title: 'No Jailbreak', desc: 'Installed via a one-tap enterprise certificate. No jailbreak, no risk, no tech skills needed.' },
          ].map((item, i) => (
            <TiltCard key={i}>
              <motion.div className="glass-card" style={{ padding: '1.75rem', height: '100%' }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.05rem' }}>{item.title}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
              </motion.div>
            </TiltCard>
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
      </section>

      {/* ── Movie Plus Library ── */}
      <section id="movies" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>
            Movie <span className="gradient-text">Plus Library</span>
          </motion.h2>
          <p style={{ color: '#888', marginTop: '0.75rem' }}>Free streaming for every platform. Cinema to TV.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
          {MOVIES.map((movie, i) => (
            <TiltCard key={movie.id}>
              <motion.div
                className="glass-card"
                style={{ overflow: 'hidden', padding: 0, height: '100%' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '2/3' }}>
                  <img src={movie.poster} alt={movie.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', backdropFilter: 'blur(4px)' }}>
                    {movie.status}
                  </div>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem' }}>{movie.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#888' }}>{movie.year} • {movie.platform}</p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>

      <section style={{ padding: '2rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <NativeAppCode />
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          Simple <span className="gradient-text">Pricing</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
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
