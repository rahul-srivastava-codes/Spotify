function Dropdown({ data }) {
  return (
    <div>
      <label htmlFor="my-dropdown" className="font-semibold flex flex-col">
        Music Language:
      </label>
      <select id="my-dropdown" className="w-[15vh] ">
        <option value="">Hindi</option>
        <option value="option1">English</option>
        <option value="option2">Bengali</option>
        <option value="option3">Urdu</option>
        <option value="option3">Urdu</option>
      </select>
    </div>
  );
}

export default Dropdown;
