import { NextResponse } from 'next/server';

/**
 * Manifest Plist Generator
 * This is the file Apple's itms-services protocol reads to install an app.
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const appName = searchParams.get('app') || 'PlusStore';
    const bundleId = searchParams.get('bundleId') || 'com.plusstore.app';
    const version = '1.0.0';

    // In a real app, this would point to your signed .ipa file on a secure server (must be HTTPS)
    const ipaUrl = `https://your-domain.com/downloads/${appName.toLowerCase()}.ipa`;

    const plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.EN">
<plist version="1.0">
<dict>
    <key>items</key>
    <array>
        <dict>
            <key>assets</key>
            <array>
                <dict>
                    <key>kind</key>
                    <string>software-package</string>
                    <key>url</key>
                    <string>${ipaUrl}</string>
                </dict>
            </array>
            <key>metadata</key>
            <dict>
                <key>bundle-identifier</key>
                <string>${bundleId}</string>
                <key>bundle-version</key>
                <string>${version}</string>
                <key>kind</key>
                <string>software</string>
                <key>title</key>
                <string>${appName}</string>
            </dict>
        </dict>
    </array>
</dict>
</plist>`;

    return new Response(plist, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
