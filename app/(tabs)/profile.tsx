import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Settings, Heart, Share2, Info } from 'lucide-react-native';

const ProfileActions = [
  { id: 1, title: 'Settings', icon: Settings },
  { id: 2, title: 'Favorites', icon: Heart },
  { id: 3, title: 'Share App', icon: Share2 },
  { id: 4, title: 'About', icon: Info },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Sarah Johnson</Text>
        <Text style={styles.profileBio}>Food enthusiast & home chef 👩‍🍳</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Recipes</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>48</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        {ProfileActions.map((action) => (
          <TouchableOpacity key={action.id} style={styles.actionButton}>
            <action.icon size={24} color="#4A5568" />
            <Text style={styles.actionText}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  header: {
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 28,
    color: '#1A202C',
  },
  profileSection: {
    alignItems: 'center',
    padding: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  profileName: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 24,
    color: '#1A202C',
    marginBottom: 8,
  },
  profileBio: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    justifyContent: 'space-around',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 24,
    color: '#1A202C',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4A5568',
  },
  statDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#E2E8F0',
  },
  actionsContainer: {
    padding: 24,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  actionText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#1A202C',
    marginLeft: 16,
  },
});