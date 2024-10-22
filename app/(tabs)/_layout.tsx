import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue',headerShown:false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'SVG',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="link" color={color} />,
        }}
      />
      <Tabs.Screen
        name="png"
        options={{
          title: 'PNG',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="link" color={color} />,
        }}
      />
    </Tabs>
  );
}
