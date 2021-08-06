<template>
  <div class="regist">
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form>
          <b-form-input
            type="password"
            placeholder="Password"
            id="text-password"
            aria-describedby="password-help-block"
            v-model="password"
          ></b-form-input>
          <b-form-text id="password-help-block"> </b-form-text>
        </b-form>
      </b-form-group>
      <b-button id="btn" type="submit" variant="primary">Login</b-button>
    </b-form>
    <p class="center">
      No account ?
      <a href="/registration">Create Account</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    async onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("login", formData);
        this.$store.commit("setLoggedIn", true);
        

        this.$router.push("/");

      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.regist {
  width: 400px;
  height: 100px;
  margin-top: 100px;
  margin-left: 520px;
  align-items: center;
  justify-content: center;
}

#btn {
  margin-top: 10px;
}
</style>
