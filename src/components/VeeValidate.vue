<template>
  <div class="vee-validate">
    <p>
      <input type="text" v-validate="'required|email'" placeholder="Email" name="email">
      <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
    </p>
  </div>
</template>

<script>


export default {
  name: 'vee-validate'
}
</script>

<style>

</style>
