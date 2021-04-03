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
      const newNote = {
        // idにnotesの配列数+1したものを入れる
        id: state.notes.length + 1,
        user: payload.user,
        title: payload.title,
        body: payload.body,
        tags: payload.tags
      }
      // state.notesにnewNoteを格納
      state.notes.push(newNote);
    },
    // 1.deleteNote(引数を追記)
    deleteNote(state, noteId) {
      // 2. 配列に対する処理の filter を使って notes から 指定された id の note を削除する処理を書く
      // filter(配列 => 条件)tureのものだけを取り出す
      state.notes = state.notes.filter( note => note.id !== noteId );
    },
    updateNote(state, newNote) {
      // const ids = state.notes.map(note => note.id);
      // ids: [1, 2, 3]7
      // 三項演算子
      // (条件式) ? tureの場合 : falseの場合
      // idが等しいものを
      state.notes = state.notes.map(note => (note.id === newNote.id ? newNote : note));
    }
  },
});
