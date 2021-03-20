<template>
  <div class="about">
    <h1>Note Detail</h1>
    <h2>{{$route.params.note.text}}</h2>
    <h2>{{note.text}}</h2>
    <button @click="updateNote">更新</button>
  </div>
</template>

<script>
export default {
  name: "NoteDetail",
  computed: {
    notes() {
      return this.$store.state.notes;
    }
  }
};
</script>