import { StyleSheet } from "react-native"

import { Text, View } from "@components/Themed"
import EditScreenInfo from "@components/EditScreenInfo"
import { useContext, useState } from "react"
import AppStateContext from "@services/context/context"
import { IconButton, useTheme } from "react-native-paper"

export default function TabOneScreen() {
  const { locale } = useContext(AppStateContext)
  const { colors } = useTheme()

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: "SoraBold" }]}>
        Hi! I'm Yvan Nanfack
      </Text>
      <Text style={styles.title}>Tab One</Text>
      <Text style={styles.title}>{locale.t("message")}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
})
