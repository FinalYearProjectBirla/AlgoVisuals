import "./userSort.css";
// import UserSortJs from "./userSortjs";

function userSort() {
  return (
    <div class="__container">
      <div class="bars_container" id="bars_container"></div>
      <div class="main">
        <input
          type="email"
          id="input-numbers"
          placeholder="Enter the elements"
          multiple
        />
        <button type="submit" id="submit">
          SUBMIT
        </button>
        <button type="submit" id="remove">
          Remove
        </button>
      </div>
      <h1>SORTING VISUALIZER</h1>
      <div class="buttons_container">
        <select name="" id="speed">
          <option value="100">Slow</option>
          <option value="50">Medium</option>
          <option value="10">Fast</option>
        </select>
        <select name="" id="algo">
          <option value="bubble">Bubble Sort</option>
          <option value="heap">Heap Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="quick">Quick Sort</option>
        </select>
        <button id="sort_btn">Sort</button>
      </div>
      {/* <UserSortJs></UserSortJs>; */}
    </div>
  );
}

export default userSort;
