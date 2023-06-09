/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle
} from "react-native"

interface FieldProps extends TextInputProps {
  icon?: string
  label?: string
  iconSize?: number
  iconColor?: string
  labelStyle?: StyleProp<TextStyle>
  inputStyle?: StyleProp<TextStyle>
  wrapperStyle?: StyleProp<ViewStyle>
}

export default function Field({
  label,
  labelStyle,
  inputStyle,
  wrapperStyle,
  ...props
}: FieldProps) {
  return (
    <View style={wrapperStyle}>
      {label && <Text style={labelStyle}>{label}</Text>}
      <View style={styles.field}>
        <TextInput {...props} style={inputStyle} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  field: {
    columnGap: 16,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent"
  }
})
