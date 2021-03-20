<template>
  <div class="about">
    <h1>Notes</h1>
    <div v-for="note in notes" :key="note.id">
      <!-- NoteDetailに飛ぶ.-->
      <router-link to="/notes/:noteId">
        {{note.id}}. {{note.title}}
      </router-link>
      <button @click="deleteNote(note.id)">削除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notes",
  computed: {
    notes() {
      // $store.state.データ名  stateにアクセスする 
      // state,notesが持つデータを返す.一覧に使用
      return this.$store.state.notes;
    }
  }
};
</script>
