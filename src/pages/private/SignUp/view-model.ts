import { useForm } from "react-hook-form";

export const useSignUp = () => {
  const { handleSubmit, control, getValues } = useForm();
  const values = getValues()

  const onSubmit = (formData: any) => {
    console.log('formData', formData);
  };


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
