import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function NativeAppCode() {
    return (
        <div className="glass-card" style={{ padding: '2rem', marginTop: '4rem', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>Native Store Code (SwiftUI)</h2>
            <p style={{ color: '#888', marginBottom: '1.5rem' }}>
                Paste this into Xcode to build your own custom store app.
            </p>

            <pre style={{
                background: '#000',
                padding: '1.5rem',
                borderRadius: '12px',
                overflowX: 'auto',
                fontSize: '0.85rem',
                border: '1px solid var(--border)'
            }}>
                <code className="language-swift">
                    {`import SwiftUI

struct AppItem: Identifiable {
    let id = UUID()
    let name: String
    let icon: String
    let features: [String]
}

struct NativeStoreView: View {
    let apps = [
        AppItem(name: "Instagram++", icon: "camera.fill", features: ["Ghost Mode", "Save Stories"]),
        AppItem(name: "Snapchat++", icon: "bell.fill", features: ["Incognito", "No Screenshot Notify"])
    ]
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(spacing: 20) {
                    ForEach(apps) { app in
                        AppRow(app: app)
                    }
                }
                .padding()
            }
            .navigationTitle("Plus Store")
            .background(Color.black.edgesIgnoringSafeArea(.all))
        }
        .preferredColorScheme(.dark)
    }
}

struct AppRow: View {
    let app: AppItem
    var body: some View {
        HStack {
            Image(systemName: app.icon)
                .resizable()
                .frame(width: 50, height: 50)
                .padding(10)
                .background(Color.blue.opacity(0.2))
                .cornerRadius(12)
            
            VStack(alignment: .leading) {
                Text(app.name).font(.headline)
                Text(app.features.joined(separator: ", ")).font(.caption).foregroundColor(.gray)
            }
            Spacer()
            Button("Install") {
                // itms-services protocol trigger
                if let url = URL(string: "itms-services://?action=download-manifest&url=https://your-domain.com/api/manifest/\\(app.name)") {
                    UIApplication.shared.open(url)
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 8)
            .background(Color.blue)
            .cornerRadius(10)
        }
        .padding()
        .background(Color.white.opacity(0.05))
        .cornerRadius(16)
    }
}
`}
                </code>
            </pre>
        </div>
    );
}
