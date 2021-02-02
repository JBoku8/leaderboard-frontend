import { useEffect, useState } from "react";
import Profile from "./Profile";

import { LeaderboardListQuery } from "../../generated/graphql";

// service import
import Api from "../../services/api";
import Todo from "../../interfaces/Todo.interface";

interface Props {
  data: LeaderboardListQuery;
}

function ProfileList(props: Props) {
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  useEffect(() => {
    (async () => {
      const result = await Api.getTodos();
      setTodoList(result);
    })();
  }, []);

  useEffect(() => {
    console.log(props.data);
  }, [props.data]);

  return (
    <div className="row justify-content-center pt-4 w-75 m-auto">
      {todoList.map((todo, index) => {
        return <Profile key={todo.id} todo={todo} order={index + 1} />;
      })}
    </div>
  );
}

export default ProfileList;
