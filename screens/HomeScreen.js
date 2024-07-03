

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.greeting}>Hello 👋</Text>
      
      <Image source={{ uri: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/395077657_1028692314925861_8525541017069530325_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeE3xvwQNi-6tCAFcLHBLTe3-27f49vEDXP7bt_j28QNc8V5XvF3PwJvyOvCva7fVu3ZQb8nsz41rvgN90dN1ZQO&_nc_ohc=tyJE59HDBLAQ7kNvgEdH785&_nc_ht=scontent.fhan2-4.fna&oh=00_AYCh1PLUgI7p6EV77N0QrkY1W2VA8Xxhfrvy11ZLpF1Vbg&oe=668A00EC' }} style={styles.profilePic} />
    </View>
    <Text style={styles.name}>Christie Doe</Text>

    <Text style={styles.insightsTitle}>Your Insights</Text>

    <View style={styles.quadContainer}>
    <View style={styles.quadContainer}>
  <TouchableOpacity style={styles.quadItem} onPress={() => navigation.navigate('Scan')}>
    <Text style={styles.quadText}>Scan new</Text>
    <Text style={styles.quadCount}>Scanned 483</Text>
  </TouchableOpacity>
  
  <View style={styles.quadItem}>
    <Text style={styles.quadText}>Counterfeits</Text>
    <Text style={styles.quadCount}>Counterfeited 32</Text>
  </View>
  <View style={styles.quadItem}>
    <Text style={styles.quadText}>Success</Text>
    <Text style={styles.quadCount}>Checkouts 8</Text>
  </View>
  <View style={styles.quadItem}>
    <Text style={styles.quadText}>Directory</Text>
    <Text style={styles.quadCount}>History 26</Text>
  </View>
</View>

    </View>

    <Text style={styles.exploreMore}>Explore More</Text>
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  insightsTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  quadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  exploreMore: {
    fontSize: 20,
    marginVertical: 20,
  },
  quadItem: {
    width: '48%', // Để xếp 2 cột, set width là 48%
    aspectRatio: 1, // Đảm bảo các mục là hình vuông bằng cách duy trì tỷ lệ khung hình là 1:1
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  quadText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quadCount: {
    fontSize: 14,
    color: '#888',
  },
});

export default HomeScreen;
