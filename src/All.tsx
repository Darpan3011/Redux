import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "./Slice/reduxSlice";
import { startEdit } from "./Slice/editSlice";
import { RootState } from "./store/redux";

const All = () => {
  const list = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (todo: { id: number; text: string }) => {
    dispatch(startEdit(todo));
  };

  return (
    <ul className="space-y-4">
      {list.map((x) => (
        <div key={x.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-md">
          <li className="text-lg">{x.text}</li>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700" onClick={() => handleDelete(x.id)}>
              Delete
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => handleEdit(x)}>
              Edit
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default All;
