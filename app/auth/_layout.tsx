import { Stack, Link } from 'expo-router';
import Foundation from '@expo/vector-icons/Foundation';
import { colors } from '@/constants';

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: { backgroundColor: colors.WHITE },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: '로그인',
          headerShown: true,
          headerLeft: () => (
            <Link href={'/'} replace style={{ paddingRight: 10 }}>
              <Foundation name="home" size={28} color={'black'} />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: '이메일 로그인',
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: '회원가입',
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
