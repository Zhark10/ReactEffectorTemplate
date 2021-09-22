export const useSignIn = () => {
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return {
    methods: {
      submit
    },
    data: {
      
    }
  }
} 