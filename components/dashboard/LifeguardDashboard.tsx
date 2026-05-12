import { useState } from 'react';
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/icon-symbol';
import {
  ACTIVE_ALERT,
  DASHBOARD_TEXT,
  GUEST_MARKERS,
  GUESTS,
  LEGEND_ITEMS,
  NOTIFICATIONS,
  REMINDERS,
  STATUS_COLORS,
  STATUS_COUNTS,
} from '@/constants/dashboard';
import { dashboardStyles as styles } from '@/styles/dashboard.styles';
import type { Guest, GuestStatus } from '@/types/dashboard';

import { GuestMapMarker } from './GuestMapMarker';

export function LifeguardDashboard() {
  const [selectedGuestId, setSelectedGuestId] = useState<string | null>(null);
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  const selectedGuest = selectedGuestId ? GUESTS[selectedGuestId] : null;
  const isDanger = selectedGuest?.status === 'DANGER';

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <DashboardHeader onNotificationsPress={() => setShowNotificationModal(true)} />
        <ActiveGuestAlert />
        <GuestMonitoringMap selectedGuestId={selectedGuestId} onGuestSelect={setSelectedGuestId} />

        <View style={styles.statusBox}>
          <Text style={styles.statusTitle}>{DASHBOARD_TEXT.guestStatusTitle}</Text>
          {STATUS_COUNTS.map((status) => (
            <StatusCount
              key={status.label}
              label={status.label}
              count={status.count}
              color={status.color}
              showDivider
            />
          ))}
        </View>

        <View style={[styles.selectedCard, isDanger && styles.selectedCardDanger]}>
          <Text style={styles.sectionTitle}>
            {selectedGuest ? DASHBOARD_TEXT.selectedGuestTitle : DASHBOARD_TEXT.selectGuestTitle}
          </Text>

          {selectedGuest ? <SelectedGuest guest={selectedGuest} /> : <SelectedGuestPlaceholder />}
        </View>

        <View>
          <Text style={styles.reminderTitle}>{DASHBOARD_TEXT.remindersTitle}</Text>
          <View style={styles.reminderBox}>
            {REMINDERS.map((reminder, index) => (
              <Reminder key={reminder} text={reminder} showDivider={index > 0} />
            ))}
          </View>
        </View>
      </ScrollView>

      <NotificationModal
        visible={showNotificationModal}
        onClose={() => setShowNotificationModal(false)}
      />
    </SafeAreaView>
  );
}

function DashboardHeader({ onNotificationsPress }: { onNotificationsPress: () => void }) {
  return (
    <View style={styles.header}>
      <View style={styles.logoGroup}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logoIcon} resizeMode="contain" />
        <Text style={styles.resortName}>{DASHBOARD_TEXT.appName}</Text>
      </View>

      <TouchableOpacity style={styles.notificationButton} onPress={onNotificationsPress}>
        <IconSymbol name="bell.fill" size={23} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

function ActiveGuestAlert() {
  return (
    <View style={styles.alertBox}>
      <View style={styles.fill}>
        <Text style={styles.alertLabel}>{ACTIVE_ALERT.label}</Text>
        <Text style={styles.alertTitle}>{ACTIVE_ALERT.title}</Text>
        <Text style={styles.alertDesc}>{ACTIVE_ALERT.description}</Text>
      </View>
    </View>
  );
}

type GuestMonitoringMapProps = {
  selectedGuestId: string | null;
  onGuestSelect: (guestId: string) => void;
};

function GuestMonitoringMap({ selectedGuestId, onGuestSelect }: GuestMonitoringMapProps) {
  return (
    <View style={styles.monitorCard}>
      <View style={styles.monitorTop}>
        <Text style={styles.sectionTitle}>{DASHBOARD_TEXT.liveMonitoringTitle}</Text>

        <View style={styles.legendWrapper}>
          {LEGEND_ITEMS.map((item) => (
            <ZoneLegendItem key={item.label} color={item.color} label={item.label} />
          ))}
        </View>
      </View>

      <View style={styles.mapContainer}>
        <Image
          source={require('@/assets/images/beach-map.jpeg')}
          style={styles.mapImage}
          resizeMode="cover"
        />

        {GUEST_MARKERS.map((marker) => (
          <GuestMapMarker
            key={marker.markerId}
            color={marker.color}
            top={marker.top}
            left={marker.left}
            isDanger={GUESTS[marker.markerId].status === 'DANGER'}
            isSelected={selectedGuestId === marker.markerId}
            onSelect={() => onGuestSelect(marker.markerId)}
          />
        ))}

        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>{DASHBOARD_TEXT.totalGuestsLabel}</Text>
          <Text style={styles.totalNumber}>{GUEST_MARKERS.length}</Text>
          <Text style={styles.totalUpdated}>{DASHBOARD_TEXT.totalGuestsUpdated}</Text>
        </View>
      </View>
    </View>
  );
}

function ZoneLegendItem({ color, label }: { color: string; label: string }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
}

type StatusCountProps = {
  label: string;
  count: number;
  color: string;
  showDivider: boolean;
};

function StatusCount({ label, count, color, showDivider }: StatusCountProps) {
  return (
    <>
      {showDivider && <View style={styles.divider} />}
      <View style={styles.statusCount}>
        <Text style={[styles.statusLabel, { color }]}>{label}</Text>
        <Text style={styles.statusNumber}>{count}</Text>
      </View>
    </>
  );
}

function SelectedGuest({ guest }: { guest: Guest }) {
  return (
    <>
      <View style={styles.selectedNameSection}>
        <Text style={styles.guestNameLarge}>{guest.guestName}</Text>
        <Text style={[styles.badge, { backgroundColor: STATUS_COLORS[guest.status] }]}>
          {guest.status}
        </Text>
      </View>

      <View style={styles.infoLine} />

      <View style={styles.infoGrid}>
        <Info label="WRISTBAND ID" value={guest.wristbandId} />
        <Info label="LAST LOCATION" value={guest.location} />
        <Info label="ZONE STATUS" value={guest.zoneStatus} status={guest.status} />
        <Info label="BATTERY" value={guest.battery} />
        <Info label="HEART RATE" value={guest.heartRate} />
        <Info label="LAST UPDATE" value={guest.lastUpdate} />
        <Info label="WRISTBAND STATUS" value={guest.wristbandStatus} />
      </View>
    </>
  );
}

function SelectedGuestPlaceholder() {
  return (
    <View style={styles.selectedPlaceholderWrapper}>
      <View style={styles.selectedPlaceholderIcon}>
        <IconSymbol name="person.fill" size={40} color="#FFFFFF" />
      </View>
      <Text style={styles.selectedPlaceholderText}>
        {DASHBOARD_TEXT.selectGuestHelp}
      </Text>
    </View>
  );
}

type InfoProps = {
  label: string;
  value: string;
  status?: GuestStatus;
};

function Info({ label, value, status }: InfoProps) {
  const valueColor = label === 'ZONE STATUS' && status ? STATUS_COLORS[status] : '#FFFFFF';

  return (
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={[styles.infoValue, { color: valueColor }]}>{value}</Text>
    </View>
  );
}

function Reminder({ text, showDivider }: { text: string; showDivider: boolean }) {
  return (
    <>
      {showDivider && <View style={styles.divider} />}
      <View style={styles.reminderItem}>
        <Text style={styles.reminderText}>{text}</Text>
      </View>
    </>
  );
}

type NotificationModalProps = {
  visible: boolean;
  onClose: () => void;
};

function NotificationModal({ visible, onClose }: NotificationModalProps) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{DASHBOARD_TEXT.notificationsTitle}</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.modalCloseButton}>X</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.seeAllContainer}>
            <Text style={styles.seeAllText}>{DASHBOARD_TEXT.seeAllNotifications}</Text>
          </TouchableOpacity>

          <View style={styles.modalEmptyState}>
            {NOTIFICATIONS.map((notification) => (
              <View key={`${notification.message}-${notification.time}`} style={styles.notificationItem}>
                <IconSymbol name={notification.icon} size={20} color={notification.color} />
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationMessage}>{notification.message}</Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
}
