<template>
  <div class="container">
    <h1>Note Detail</h1>
    <input type="text" v-model="user" class="note-title">
    <input type="text" v-model="title" class="note-title">
    <textarea v-model="body" cols="30" rows="10"></textarea>
    
    <input
     v-for="(tag, index) in tags"
     :key="tag"
     :value="tags[index]"
     @input="updateItem($event, index)"
     type="text"
     class="note-title">
    <div class="button-wrap">
      <button @click="addTag" class="save-button">Tag</button>
      <button @click="del(note.id)" class="delete-button">削除</button>
      <button @click="save" class="save-button">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateNote",
  data() {
    return {
      user:"",
      title: "",
      body: "",
      tags: []
    };
  },
  computed: {
    note() {
      // store の notes から今の note をとってくる
      // /notes/:noteId の :noteId の部分を this.$route.params.noteId で取れる
      // けどそのままだと文字列なので、 parseInt で数値に変換
      console.log("notes:", this.$store.state.notes);
      const foundNote = this.$store.state.notes.find(
        note => note.id === parseInt(this.$route.params.noteId)
      );
      console.log(foundNote);
      return foundNote;
    }
  },
  created() {
    // computed のnote
    this.user = this.note.user;
    this.title = this.note.title;
    this.body = this.note.body;
    this.tags = this.note.tags;
  },
  methods: {
    save() {
      // payloadに入力内容を格納
      const newNote = {
        id: this.note.id,
        user: this.user,
        title: this.title,
        body: this.body,
        tags: this.tags
      }
      // 関数updateNoteでnewNoteをコミット
      // store/index.jsの mutations updateNoteでcommitする
      this.$store.commit("updateNote", newNote);
      // /notes (ノート一覧)に移動
      this.$router.push("/notes");
    },
    del(deletingNoteId) {
      this.$store.commit("deleteNote", deletingNoteId);
      // /notes (ノート一覧)に移動
      this.$router.push("/notes");
    },
    addTag() {
      this.tags.push("");
    },
    updateItem(event, index) {
      this.tags = this.tags.map((tag, i) => i === index ? event.target.value : tag);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-title {
  margin-bottom: 20px;
}

.button-wrap {
  display: flex;
  margin-top: 10px;
}

.save-button, .delete-button {
  margin: 5px;
}
</style>