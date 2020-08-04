<template>
  <div>
    <Todo :todos="todos" />
    <p @click="test($event)">test</p>
  </div>
</template>

<script>
import Todo from './components/todo';
export default {
  data: function() {
    return {
       todos: [
          { 
            date: '1999/01/01', 
            handle: '範例1'
          },
          {
            date: '1999/01/01', 
            handle: '範例2'
          }
        ],
    }
  },

  methods: {
    test: function(e){
      console.log(e);
    }
  },

  components: { 
    Todo 
  },
};
</script>