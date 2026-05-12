# AquaGuard Lifeguard App

A React Native + Expo dashboard for monitoring resort guests, wristband status,
active safety alerts, and zone activity.

## Run Locally

```bash
npm install
npm start
```

Use the Expo terminal menu to open the app on Android, iOS, web, or Expo Go.

## Main Files

- `app/(tabs)/index.tsx` - app route entry
- `components/dashboard/LifeguardDashboard.tsx` - main dashboard screen
- `components/dashboard/GuestMapMarker.tsx` - animated map marker
- `constants/dashboard.ts` - dashboard text, colors, guest data, alerts, and notifications
- `styles/dashboard.styles.ts` - dashboard styles
- `types/dashboard.ts` - dashboard TypeScript types
