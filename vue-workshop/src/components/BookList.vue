<template>
  <table>
    <BookListItem v-for="book in books" :key="book.isbn" v-bind="book" />
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BookListItem from "@/components/BookListItem.vue";
import type { Book } from "@/includes/type";
import BOOKS from "@/stores/books";

interface ComponentData {
  books: Book[];
}

export default defineComponent({
  name: "BookList",
  components: {
    BookListItem,
  },
  data(): ComponentData {
    return {
      books: [],
    };
  },
  created() {
    this.books = [...BOOKS];
  },
  mounted() {
    const baseUrl = "http://localhost:4730/books";
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        this.books = data as Book[];
      });
  },
});
</script>

<style>
table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  padding: 8px;
}
th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr:hover {
  background-color: #dddddd;
}
</style>
