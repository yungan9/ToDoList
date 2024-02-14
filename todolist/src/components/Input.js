function Input() {
  return (
    <div className="flex flex-center">
      <input
        className="h-10 w-3/5"
        type="text"
        name="todo"
        placeholder="enter"
      />
      <button type="submit" className="h-10 w-1/5 ml-4 rounded-lg bg-rose-200">
        Add
      </button>
    </div>
  );
}

export default Input;
