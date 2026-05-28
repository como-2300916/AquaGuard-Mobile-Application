# AquaGuard Lifeguard App

A React Native + Expo dashboard for monitoring resort guests, wristband status,
active safety alerts, and zone activity.

## Run Locally

```bash
npm install
npm run start:clear
```

The VS Code workspace clears `REACT_NATIVE_PACKAGER_HOSTNAME` for Windows
terminals so Expo can advertise the current Wi-Fi IPv4 address. `npm start`
uses LAN mode; if your phone is on a different network, use `npm run
start:tunnel`.

## Main Files

- `app/(tabs)/index.tsx` - app route entry
- `components/dashboard/LifeguardDashboard.tsx` - main dashboard screen
- `components/dashboard/GuestMapMarker.tsx` - animated map marker
- `constants/dashboard.ts` - dashboard text, colors, guest data, alerts, and notifications
- `styles/dashboard.styles.ts` - dashboard styles
- `types/dashboard.ts` - dashboard TypeScript types
