import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { colors } from '../../../Theme/Theme';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../../Context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { theme, updateTheme } = useContext(ThemeContext);
  const [switchValue, setSwitchValue] = useState(theme.mode === 'dark');
  const [user, setUser] = useState(null);
  const activeColors = colors[theme.mode];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      navigation.navigate('Signup'); 
    } catch (error) {
      console.error("Error clearing data", error);
      Alert.alert("Logout Error", "An error occurred while logging out.");
    }
  };

  const handleToggleSwitch = () => {
    updateTheme(); 
    setSwitchValue(prev => !prev); 
  };

  const MenuOption = ({ title, icon, onPress }) => (
    <TouchableOpacity style={[styles.menuOption, { borderColor: activeColors.same }]} onPress={onPress}>
      <Ionicons name={icon} size={24} color={activeColors.tertiary} />
      <Text style={[styles.menuText, { color: activeColors.tertiary }]}>{title}</Text>
      <Ionicons name="chevron-forward-outline" size={24} color={activeColors.tertiary} style={styles.chevron} />
    </TouchableOpacity>
  );

  const MenuOption1 = ({ title, icon, onPress }) => (
    <TouchableOpacity style={[styles.menuOption, { borderColor: activeColors.same }]} onPress={onPress}>
      <Ionicons name={icon} size={24} color={activeColors.tertiary} />
      <Text style={[styles.menuText, { color: activeColors.tertiary }]}>{title}</Text>
      <Switch
        value={switchValue}
        onValueChange={handleToggleSwitch}
        thumbColor={activeColors.tertiary}
        trackColor={activeColors.tertiary}
      />
    </TouchableOpacity>
  );

  const MenuOption2 = ({ title, icon, onPress }) => (
    <TouchableOpacity style={[styles.menuOption, { borderColor: activeColors.same }]} onPress={handleLogout}>
      <Ionicons name={icon} size={24} color={activeColors.tertiary} />
      <Text style={[styles.menuText, { color: activeColors.tertiary }]}>{title}</Text>
      <Ionicons name="chevron-forward-outline" size={24} color={activeColors.tertiary} style={styles.chevron} />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: activeColors.primary }]}>
      <View style={[styles.userInfo, { backgroundColor: activeColors.primary }]}>
        <Ionicons name="person-circle-outline" size={80} color={activeColors.txt} />
        {user ? (
          <>
            <Text style={[styles.userName, { color: activeColors.txt }]}>{user.name}</Text>
            <Text style={[styles.userEmail, { color: activeColors.txt }]}>{user.email}</Text>
          </>
        ) : (
          <Text style={[styles.userName, { color: activeColors.txt }]}>Loading...</Text>
        )}
      </View>

      <View style={styles.menuContainer}>
        <MenuOption1 title='Dark Mode' icon="moon-outline" />
        <MenuOption title="Wishlist" icon="heart-outline" />
        <MenuOption title="My Orders" icon="cart-outline" />
        <MenuOption title="Settings" icon="settings-outline" />
        <MenuOption title="Help & Support" icon="help-circle-outline" />
        <MenuOption2 title="Log Out" icon="log-out-outline" />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  userEmail: {
    fontSize: 16,
  },
  menuContainer: {
    marginVertical: 20,
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 20,
    flex: 1,
  },
  chevron: {
    marginLeft: 'auto',
  },
});
