import { useForm } from "react-hook-form";

export const useSignIn = () => {
  const { handleSubmit, control, getValues } = useForm();

  const onSubmit = (formData: any) => {
    console.log('formData', formData);
  };

  const values = getValues()

  return {
    methods: {
      submit: handleSubmit(onSubmit)
    },
    data: {
      control,
      values
    }
  }
}