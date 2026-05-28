import type { Guest, GuestMarker, GuestStatus, Notification } from '@/types/dashboard';

export const STATUS_COLORS: Record<GuestStatus, string> = {
  SAFE: '#7ED957',
  WARNING: '#FFC107',
  DANGER: '#D00012',
};

export const DASHBOARD_TEXT = {
  appName: 'AQUAGUARD',
  liveMonitoringTitle: 'LIVE MONITORING',
  guestStatusTitle: 'GUEST STATUS',
  selectedGuestTitle: 'SELECTED GUEST',
  selectGuestTitle: 'SELECT A GUEST',
  selectGuestHelp: 'Tap on a guest on the map to view their details.',
  notificationsTitle: 'NOTIFICATIONS',
  profileTitle: 'LIFEGUARD PROFILE',
  accountInformationTitle: 'ACCOUNT INFORMATION',
  lifeguardName: 'Kenneth Adoyo',
  lifeguardId: 'LG-001',
  lifeguardRole: 'Lifeguard',
  seeAllNotifications: 'See all',
  totalGuestsLabel: 'TOTAL GUESTS',
  totalGuestsUpdated: 'Updated just now',
};

export const ACTIVE_ALERT = {
  label: 'ACTIVE ALERT',
  title: 'GUEST 07 OUT OF SAFE ZONE',
  description: 'Please take action immediately.',
};

export const GUESTS: Record<string, Guest> = {
  '27-1': {
    markerId: '27-1',
    guestName: 'Kenneth Adoyo',
    status: 'DANGER',
    wristbandId: '0007',
    location: 'North boundary area',
    zoneStatus: 'Out of safe zone',
    battery: '78%',
    heartRate: '110 bpm',
    lastUpdate: '3:15 PM',
    wristbandStatus: 'ACTIVE',
  },
  '72-1': {
    markerId: '72-1',
    guestName: 'Sophia Malabanan',
    status: 'DANGER',
    wristbandId: '0008',
    location: 'South boundary area',
    zoneStatus: 'Out of safe zone',
    battery: '65%',
    heartRate: '95 bpm',
    lastUpdate: '3:14 PM',
    wristbandStatus: 'ACTIVE',
  },
  '15-10': {
    markerId: '15-10',
    guestName: 'Carmela Aldea',
    status: 'WARNING',
    wristbandId: '0003',
    location: 'West zone edge',
    zoneStatus: 'In warning zone',
    battery: '82%',
    heartRate: '88 bpm',
    lastUpdate: '3:16 PM',
    wristbandStatus: 'ACTIVE',
  },
  '85-10': {
    markerId: '85-10',
    guestName: 'Erin Delos Trinos',
    status: 'WARNING',
    wristbandId: '0004',
    location: 'East zone edge',
    zoneStatus: 'In warning zone',
    battery: '20%',
    heartRate: '76 bpm',
    lastUpdate: '3:16 PM',
    wristbandStatus: 'ACTIVE',
  },
  '31-25': {
    markerId: '31-25',
    guestName: 'Reane Fines',
    status: 'SAFE',
    wristbandId: '0001',
    location: 'Main beach area',
    zoneStatus: 'In safe zone',
    battery: '95%',
    heartRate: '72 bpm',
    lastUpdate: '3:17 PM',
    wristbandStatus: 'ACTIVE',
  },
  '50-25': {
    markerId: '50-25',
    guestName: 'Sheena Macadat',
    status: 'SAFE',
    wristbandId: '0002',
    location: 'Main beach area',
    zoneStatus: 'In safe zone',
    battery: '88%',
    heartRate: '70 bpm',
    lastUpdate: '3:17 PM',
    wristbandStatus: 'ACTIVE',
  },
  '69-28': {
    markerId: '69-28',
    guestName: 'Ysabell Como',
    status: 'SAFE',
    wristbandId: '0005',
    location: 'North beach area',
    zoneStatus: 'In safe zone',
    battery: '85%',
    heartRate: '75 bpm',
    lastUpdate: '3:17 PM',
    wristbandStatus: 'ACTIVE',
  },
  '18-29': {
    markerId: '18-29',
    guestName: 'Kristine Asi',
    status: 'SAFE',
    wristbandId: '0006',
    location: 'South beach area',
    zoneStatus: 'In safe zone',
    battery: '92%',
    heartRate: '78 bpm',
    lastUpdate: '3:17 PM',
    wristbandStatus: 'ACTIVE',
  },
};

export const GUEST_MARKERS: GuestMarker[] = [
  { markerId: '27-1', color: '#B40012', top: '1%', left: '27%' },
  { markerId: '72-1', color: '#B40012', top: '1%', left: '72%' },
  { markerId: '15-10', color: '#E8A600', top: '10%', left: '35%' },
  { markerId: '85-10', color: '#E8A600', top: '9%', left: '50%' },
  { markerId: '31-25', color: '#167A24', top: '25%', left: '31%' },
  { markerId: '50-25', color: '#167A24', top: '25%', left: '50%' },
  { markerId: '69-28', color: '#167A24', top: '23%', left: '64%' },
  { markerId: '18-29', color: '#167A24', top: '29%', left: '20%' },
];

export const LEGEND_ITEMS = [
  { color: STATUS_COLORS.SAFE, label: 'SAFE ZONE' },
  { color: STATUS_COLORS.WARNING, label: 'WARNING ZONE' },
  { color: '#FF3030', label: 'DANGER ZONE' },
];

export const STATUS_COUNTS = (['SAFE', 'WARNING', 'DANGER'] as const).map((status) => ({
  label: status,
  count: Object.values(GUESTS).filter((guest) => guest.status === status).length,
  color: status === 'DANGER' ? '#FF3030' : STATUS_COLORS[status],
}));

export const NOTIFICATIONS: Notification[] = [
  {
    icon: 'exclamationmark.triangle.fill',
    color: '#FF3030',
    message: 'Guest 07 exited safe zone',
    time: 'now',
  },
  {
    icon: 'battery.25',
    color: '#FFC107',
    message: 'Guest 04 wristband battery low (20%)',
    time: '3 mins ago',
  },
];
