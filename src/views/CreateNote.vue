<template>
  <div class="about">
    <h1>Create Note</h1>
    <input type="text" v-model="title">
    <textarea v-model="body" cols="30" rows="10"></textarea>
    <button @click="save">Save</button>
  </div>
</template>

<script>
export default {
  name: "CreateNote",
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    save() {
      // payloadに入力内容を格納
      // 関数addNoteでpayloadをコミット
      const payload = {
        title: this.title,
        body: this.body
      }
      // store/index.jsのmutations addNoteでcommitする
      this.$store.commit("addNote", payload);
    }
  }
};
</script>
