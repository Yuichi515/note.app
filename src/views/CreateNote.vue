<template>
  <div class="container">
    <h1>Create Note</h1>
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
    <button @click="addTag" class="save-button">Tag</button>
    <button @click="save" class="save-button">Save</button>
  </div>
</template>

<script>
export default {
  name: "CreateNote",
  data() {
    return {
      user: "",
      title: "",
      body: "",
      tags: []
    };
  },
  methods: {
    save() {
      // payloadに入力内容を格納
      // 関数addNoteでpayloadをコミット
      const payload = {
        user: this.user,
        title: this.title,
        body: this.body,
        tags: this.tags
      }
      // store/index.js の mutations addNoteでcommitする
      this.$store.commit("addNote", payload);

      // ノートを作成した後に一覧画面に飛ぶ
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

.save-button {
  margin: 20px;
}
</style>