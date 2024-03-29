import { Text, TextProps } from './Themed';

export function PopBoldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'PoppinsBold' }]} />;
}

export function PopItalicText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'PoppinsItalic' }]} />;
}

export function MerriText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'MerriweatherRegular' }]} />;
}

export function PrimaryFontText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'PoppinsRegular' }]} />;
}

export function SecondaryFontText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'MerriweatherRegular' }]} />;
}