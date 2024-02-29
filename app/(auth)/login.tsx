import { Image, Platform, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { Button, HelperText, MD3LightTheme, Text, TextInput, useTheme } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { LoginSchema } from "@/schemas/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { GoogleSignin, GoogleSigninButton, User, statusCodes } from "@react-native-google-signin/google-signin";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";

export default function TabTwoScreen() {
  const [securePassword, setSecurePassword] = useState(true)
  const [userInfo, setUserInfo] = useState<User | null>(null)
  const [error, setError] = useState<unknown | null>(null)
  const theme: any = useTheme()

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId: "399976551727-6tml8b2ea8iunqgd6j68adu977df4oq9.apps.googleusercontent.com",
  //   })
  // }, [])

  const {
    control,
    handleSubmit,
  } = useForm({ 
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: zodResolver(LoginSchema),
    mode: 'onBlur'
  })

  const onSubmit = (data: any) => console.log(data);

  // const googleSignin = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices()
  //     const user = await GoogleSignin.signIn()
  //     setUserInfo(user)
  //   } catch (error) {
  //     console.log('google signin error', error);
  //     setError(error)
  //   }
  // }

  // const logout = () => {
  //   setUserInfo(null)
  //   GoogleSignin.revokeAccess()
  //   GoogleSignin.signOut()
  // }

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.background }}>
      <Stack.Screen 
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <Link href={`/`} style={{ paddingLeft: 24 }}>
              <Image source={require('../../assets/images/favicon.png')} style={{ width: 40, height: 40 }} />
            </Link>
          )
        }}
      />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={{ marginBottom: 20 }}>
            <Text variant="headlineSmall" style={{ color: theme.colors.primary }}>Login</Text>
          </View>
          <View>
            <View>
              <Controller 
                control={control}
                name="email"
                render={({ field: {onChange, value, onBlur}, fieldState: { error, isDirty } }) => (
                  <View>
                    <TextInput
                      mode="outlined"
                      label="Email"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                    />
                    <HelperText type="error" visible={error?.message ? true : false}>
                      {error?.message}
                    </HelperText>
                  </View>
                )}
              />
            </View>

            <View style={{ position: "relative" }}>
              <Controller 
                control={control}
                name="password"
                render={({field: {onChange, value, onBlur}}) => (
                  <TextInput
                    mode="outlined"
                    label="Password"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry={securePassword}
                  />
                )}
              />
              <Button 
                mode="text" 
                style={{ width: 15, position: "absolute", top: 12, right: 0, backgroundColor: "transparent" }}
                onPress={() => setSecurePassword(!securePassword)}
              >
                <Feather name={securePassword ? "eye" : "eye-off"} size={18} color="black" />
              </Button>
            </View>

            <Button
              mode="elevated"
              style={{ backgroundColor: theme.colors.primaryContainer, marginTop: 10 }}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={{ color: theme.colors.plain }}>Sign in</Text>
            </Button>

            <Text style={{ margin: 20, textAlign: 'center' }}>Haven't registered yet? <Link href="/" style={{ color: theme.colors.primary }}>Sign Up Here</Link></Text>

            {/* <View style={styles.signinContainer}>
              <Text>{JSON.stringify(error)}</Text>
              {userInfo && <Text>{JSON.stringify(userInfo)}</Text>}
              {userInfo 
                ? <Button onPress={logout}>Logout</Button> 
                : <GoogleSigninButton size={GoogleSigninButton.Size.Standard} color={GoogleSigninButton.Color.Dark} onPress={googleSignin} />
              }
            </View> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'column',
    gap: 10,
    width: '100%',
    padding: 20,
    paddingBottom: 60
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});