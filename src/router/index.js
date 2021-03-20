import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateNote from "../views/CreateNote.vue";
import NoteDetail from "../views/NoteDetail.vue";
import Notes from "../views/Notes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/notes/create",
    name: "CreateNote",
    component: CreateNote
  },
  {
    path: "/notes/:noteId",
    name: "NoteDetail",
    component: NoteDetail,
    props: true
  },
  {
    path: "/notes",
    name: "Notes",
    component: Notes
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
