<template>
  <div class="regist">
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="name"
          placeholder="Enter name"
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
      <b-button id="btn" type="submit" variant="primary">Register</b-button>
    </b-form>
    <p class="center">
      Already have an account?
      <a href="/Login">Login</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data: () => ({
    email: "",
    password: "",
    name: "",
  }),
  methods: {
    async onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      try {
        await this.$store.dispatch("register", formData);
        // this.$store.commit("setFirebaseUser", this.user);
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
  margin-top: 2px;
}
</style>
