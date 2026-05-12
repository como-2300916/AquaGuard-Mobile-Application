export type GuestStatus = 'SAFE' | 'WARNING' | 'DANGER';

export type WristbandStatus = 'ACTIVE' | 'REMOVED';

export type Guest = {
  markerId: string;
  guestName: string;
  status: GuestStatus;
  wristbandId: string;
  location: string;
  zoneStatus: string;
  battery: string;
  heartRate: string;
  lastUpdate: string;
  wristbandStatus: WristbandStatus;
};

export type GuestMarker = {
  markerId: string;
  color: string;
  top: `${number}%`;
  left: `${number}%`;
};

export type DashboardIconName =
  | 'bell.fill'
  | 'person.fill'
  | 'exclamationmark.triangle.fill'
  | 'battery.25';

export type Notification = {
  icon: DashboardIconName;
  color: string;
  message: string;
  time: string;
};
