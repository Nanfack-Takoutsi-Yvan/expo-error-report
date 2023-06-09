/* eslint-disable no-unsafe-optional-chaining */
import NavigationDrawer from "@components/ui/NavigationDrawer"
import AppStateContext from "@services/context/context"
import { Drawer } from "expo-router/drawer"
import { useContext } from "react"
import { Platform, StyleSheet } from "react-native"
import { Avatar, useTheme } from "react-native-paper"
import Icon from "react-native-paper/src/components/Icon"

export default function DashboardLayout() {
  const { user } = useContext(AppStateContext)
  const { colors } = useTheme()

  const avatar = user.userInfos?.firstName[0] + user.userInfos?.lastName[0]

  return (
    <Drawer
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerLabel,
        drawerIcon: ({ size }) => (
          <Icon size={size} source="menu" color={colors.primary} />
        ),
        drawerStyle: styles.drawer,
        headerRight: () => (
          <Avatar.Text
            size={24}
            label={avatar}
            labelStyle={styles.avatarLabel}
            style={[styles.avatar, { backgroundColor: colors.secondary }]}
          />
        )
      }}
      drawerContent={NavigationDrawer}
    />
  )
}

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    marginRight: 18
  },
  avatarLabel: { fontSize: 9, fontFamily: "SoraBold" },
  drawer: {
    backgroundColor: "rgba(42, 17, 65, 0.9)",
    borderTopRightRadius: Platform.OS === "ios" ? 0 : 30
  },
  header: {
    backgroundColor: "#532181",
    shadowColor: "transparent"
  },
  headerLabel: {
    color: "#fff",
    fontFamily: "SoraBold"
  }
})
