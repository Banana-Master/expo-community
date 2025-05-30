import DescriptionInput from '@/components/Description';
import TitleInput from '@/components/TitleInput';
import { FormProvider, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

type FormValues = {
  title: string;
  description: string;
};

const PostWriteScreen = () => {
  const postForm = useForm<FormValues>({
    defaultValues: {
      title: '',
      description: '',
    },
  });
  return (
    <View style={styles.container}>
      <FormProvider {...postForm}>
        <TitleInput />
        <DescriptionInput />
      </FormProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    gap: 16,
  },
});

export default PostWriteScreen;
