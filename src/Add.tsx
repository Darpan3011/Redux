import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "./Slice/reduxSlice";
import { RootState } from "./store/redux";
import { stopEdit } from "./Slice/editSlice";

const Add = () => {
  const [text, setText] = useState("");
  const editState = useSelector((state: RootState) => state.edit);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editState.id) {
      setText(editState.text);
    }
  }, [editState]);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText) { // Only dispatch if trimmedText is not empty
      if (editState.id) {
        dispatch(updateTodo({
          id: editState.id,
          text: trimmedText
        }));
        dispatch(stopEdit());
      } else {
        dispatch(addTodo(trimmedText));
      }
      setText("");
    }
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleClick} className="flex space-x-2">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
          {editState.id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Add;
