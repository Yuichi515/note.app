<template>
  <div class="about">
    <h1>Notes</h1>
    <div v-for="note in notes" :key="note.id">
      <!-- NoteDetailに飛ぶ.:to=`javascliptを書ける`-->
      <router-link :to="`/notes/${note.id}`">
        {{ note.id + ". " + note.title + " (" + note.user + ")" }}
      </router-link>
      <button @click="del(note.id)">削除</button>
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
  },
  methods: {
    // 追記箇所
    del(deletingNoteId) {
      // delNoteに削除ボタンを押した箇所のnote.idをいれる
      // const delNote = {
      //   id: deletingNoteId,
      //   title: this.title,
      //   body: this.body
      // }
      // 関数updateNoteでnewNoteをコミット
      // store/index.jsの mutations updateNoteでcommitする
      this.$store.commit("deleteNote", deletingNoteId);
      // /notes (ノート一覧)に移動
      this.$router.push("/notes");
    }
  }
};
</script>
