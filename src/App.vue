<template>
  <div id="app" class="min-h-screen bg-grey-light font-sans">
    <div class="md:w-custom mx-auto pt-8 pb-6 md:flex md:justify-between items-end border-b-2 border-grey">
      <div class="text-2xl text-blue-darker mb-4 md:mb-0">Change Plan</div>
      <div>
        <a href="#" class="no-underline text-blue-darker hover:underline">Cancel your plan</a>
      </div>
    </div>
    <selectable-plan></selectable-plan>
  </div>
</template>

<script>
import SelectablePlan from './components/SelectablePlan.vue'
import './assets/css/main.css'

export default {
  name: 'app',
  components: {
    SelectablePlan
  }
}
</script>

<style>

</style>
