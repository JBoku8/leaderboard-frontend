import axios from "axios";
import Todo from "../interfaces/Todo.interface";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

class Api {
  static async getTodos(): Promise<Array<Todo>> {
    try {
      const data: Array<Todo> = await (
        await axios.get("/todos?_start=0&_limit=10")
      ).data;
      return data;
    } catch (err) {
      return [];
    }
  }
}

export default Api;
