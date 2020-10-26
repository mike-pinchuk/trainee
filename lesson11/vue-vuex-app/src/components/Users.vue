<template>
  <div>
    <button type="button" v-on:click="reservedMessage()">Click on me</button>
    <button type="button" v-on:click="yee('foo')">Clic</button>
    <div class="result">{{ result }}</div>
    <p id="too"></p>
    <p id="three"></p>
  </div>
</template>

<script>
export default {
  name: "Users",
  props: {
    result: String,
    
  },
  methods: {
    reservedMessage: function() {
      document.getElementById('too').append(this.result.split("").reverse().join(""));
    },
    yee: function(e) {
        document.getElementById('three').innerHTML = e
    }
  },
 
};
</script>

<style></style>
