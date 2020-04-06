import http from "./httpService";

export function getBooks() {
  return http.get("https://aqueous-island-97232.herokuapp.com/api/books");
}
