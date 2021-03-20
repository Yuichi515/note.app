import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // state:dataのように使える.アプリの情報を入れる
  // 全てのノートデータを配列notesに格納する
  state: {
    notes: []
  },
  // stateを更新するaddNoteを定義 引数(state, payload:自由にデータを入れれる)
  // payload:CreateNoteで作ったsave用の一時的な配列. *主にデータ送信の時に命名
  mutations: {   //mutationsはstateのデータを更新する。.vueのmethodsでcommitする必要がある
    addNote(state, payload) {
      console.log(payload.title);
      console.log(payload.body);
      const newNote = {
        // idにnotesの配列数+1したものを入れる
        id: state.notes.length + 1,
        title: payload.title,
        body: payload.body
      }
      // state.notesにnewNoteを格納
      state.notes.push(newNote);
    },
    deleteNote() {

    },
    updateNote() {

    }
  },
});
