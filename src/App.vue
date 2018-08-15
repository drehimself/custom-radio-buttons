<template>
  <div id="app" class="min-h-screen bg-grey-light font-sans">
    <div class="md:w-custom mx-auto pt-8 pb-6 md:flex md:justify-between items-end border-b-2 border-grey">
      <div class="text-2xl text-blue-darker mb-4 md:mb-0">Change Plan</div>
      <div>
        <a href="#" class="no-underline text-blue-darker hover:underline">Cancel your plan</a>
      </div>
    </div>
    <div class="md:w-custom mx-auto py-8 md:flex md:justify-between md:flex-wrap">
      <selectable-plan
        plan-name="Hobby"
        plan-gigs="1"
        plan-dollars="5"
        v-model="activePlan"
      ></selectable-plan>
      <selectable-plan
        plan-name="Growth"
        plan-gigs="5"
        plan-dollars="10"
        v-model="activePlan"
      ></selectable-plan>
      <selectable-plan
        plan-name="Business"
        plan-gigs="10"
        plan-dollars="15"
        v-model="activePlan"
      ></selectable-plan>
      <selectable-plan
        plan-name="Enterprise"
        plan-gigs="20"
        plan-dollars="20"
        v-model="activePlan"
      ></selectable-plan>
    </div>
    <!-- <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span> -->
  </div>
</template>

<script>
import SelectablePlan from './components/SelectablePlan.vue'
import './assets/css/main.css'

export default {
  name: 'app',
  components: {
    SelectablePlan
  },
  data() {
    return {
      picked: 'Two',
      activePlan: '',
    }
  }
}
</script>

<style>

</style>
