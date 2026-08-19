function ButtonClick() {

  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <div>
      <h2>Day 1 - Button Click Event</h2>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default ButtonClick;