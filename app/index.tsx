import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Home, CheckSquare, User, Settings } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <LinearGradient
        colors={['#007AFF', '#0056CC']}
        style={styles.header}
      >
        <Animated.View 
          entering={FadeInDown.duration(600)}
          style={styles.headerContent}
        >
          <Text style={styles.headerTitle}>مرحباً بك</Text>
          <Text style={styles.headerSubtitle}>في تطبيق إدارة المهام</Text>
        </Animated.View>
      </LinearGradient>

      {/* Menu Grid */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.menuGrid}>
          <Animated.View entering={FadeInUp.duration(600).delay(200)}>
            <TouchableOpacity style={[styles.menuCard, { backgroundColor: '#007AFF' }]}>
              <Home size={32} color="#FFFFFF" />
              <Text style={styles.menuText}>الرئيسية</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInUp.duration(600).delay(300)}>
            <TouchableOpacity style={[styles.menuCard, { backgroundColor: '#34C759' }]}>
              <CheckSquare size={32} color="#FFFFFF" />
              <Text style={styles.menuText}>المهام</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInUp.duration(600).delay(400)}>
            <TouchableOpacity style={[styles.menuCard, { backgroundColor: '#FF9500' }]}>
              <User size={32} color="#FFFFFF" />
              <Text style={styles.menuText}>الملف الشخصي</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInUp.duration(600).delay(500)}>
            <TouchableOpacity style={[styles.menuCard, { backgroundColor: '#5856D6' }]}>
              <Settings size={32} color="#FFFFFF" />
              <Text style={styles.menuText}>الإعدادات</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* Stats Section */}
        <Animated.View 
          entering={FadeInUp.duration(600).delay(600)}
          style={styles.statsContainer}
        >
          <Text style={styles.sectionTitle}>إحصائيات سريعة</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>المهام المكتملة</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>85%</Text>
              <Text style={styles.statLabel}>معدل الإنجاز</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>24h</Text>
              <Text style={styles.statLabel}>الوقت المستثمر</Text>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: -20,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  menuCard: {
    width: 160,
    height: 120,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  statsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 16,
    textAlign: 'right',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#007AFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#8E8E93',
    textAlign: 'center',
  },
});