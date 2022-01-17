<template>
  <div>
      <form @submit.prevent="handleSubmit">
          <label>Email: </label>
          <input type="email" required v-model="email">

          <label>Password: </label>
          <input type="password" required v-model="password">
          <div v-if="passwordError" class="error">{{passwordError}}</div>

          <label>Role:</label>
          <select v-model="role" required>
              <option value="">-- Select option --</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
          </select>

          <label>Skills:</label>
          <input type="text" v-model="tempskill" @keyup="addSkill">
          <div v-for="skill in skills" :key="skill" class="pill">
            <span @click="deleteSkill(skill)">{{skill}}</span>
          </div>

          <div>
            <input type="checkbox" required v-model="term">
            <label>Accept terms</label>
          </div>

          <div class="submit">
            <button type="submit">Create account</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            term: false,
            tempskill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
      addSkill(e) {
        if (e.key === "End" && this.tempskill){
          if (!this.skills.includes(this.tempskill)){
            this.skills.push(this.tempskill)
          }
          this.tempskill = ''
        }
      },
      deleteSkill(skill){
        this.skills = this.skills.filter((item) => {
          return skill !== item
        })
      },
      handleSubmit(){
        //validate password
        this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long'

        if (!this.passwordError) {
        console.log('email: ', this.email)
        console.log('password: ', this.password)
        console.log('role: ', this.role)
        console.log('skills: ', this.skills)
        console.log('terms accepted: ', this.terms)
      }
      }
    }
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>