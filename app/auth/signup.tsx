import FixedBottomCTA from '@/components/FixedBottomCTA';
import { StyleSheet, View } from 'react-native';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import EmailInput from '@/components/EmailInput';
import PasswordInput from '@/components/PasswordInput';
import PasswordConfirmInput from '@/components/PasswordConfirmInput';

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupScreen = () => {
  const signupForm = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (formValues) => {
    console.log('formValues', formValues);
  };

  return (
    <FormProvider {...signupForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput submitBehavior="submit" />
        <PasswordConfirmInput />
      </View>
      <FixedBottomCTA label="회원가입하기" onPress={signupForm.handleSubmit(onSubmit)} />
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});

export default SignupScreen;
