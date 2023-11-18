<template>
  <Form class="login w-full max-w-xs p-4 m-auto" @submit="onSubmit" :validation-schema="schema">
    <h3 class="text-lg text-center font-bold uppercase">Đăng nhập</h3>
    <div class="form-control w-full max-w-xs mb-2">
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <Field 
        type="text" 
        name="email"
        placeholder="Email" 
        class="input input-bordered w-full max-w-xs" 
        v-model="form.email"
      />
        <ErrorMessage name="email" class="label-text-alt text-red-500" />
    </div>
    <div class="form-control w-full max-w-xs mb-2">
      <label class="label">
        <span class="label-text">Mật khẩu</span>
      </label>
      <Field 
        type="password" 
        name="password" 
        placeholder="Mật khẩu" 
        class="input input-bordered w-full max-w-xs" 
        v-model="form.password"
      />
      <ErrorMessage name="password" class="label-text-alt text-red-500" />
    </div>
    <div class="form-control w-full max-w-xs mt-3">
      <button type="submit" class="btn btn-primary">Đăng nhập</button>
    </div>
  </Form>
</template>

<script lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useRouter } from 'vue-router';
import { object, string } from "yup";
import { login } from '../../apis/auth';
import { setToken } from '../../utils/token';

export default {
  name: 'LoginPage',
  components: {
    Form: Form,
    Field: Field,
    ErrorMessage: ErrorMessage,
  },

  setup() {
    const router = useRouter();

    const schema = object().shape({
      email: string().required('Email chưa được nhập').email('Chưa đúng định dạng email'),
      password: string().required('Mật khẩu chưa được nhập')
    })

    return {
      router,
      schema,
    }
  },

  data() {
    return {
      form: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    async onSubmit() {
      const { email, password } = this.form;
      const data = await login({ email, password });
      console.log(data)
      if (data) {
        // save token
        setToken(data.access_token);

        // redirect to home page
        this.router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.login {}
</style>
