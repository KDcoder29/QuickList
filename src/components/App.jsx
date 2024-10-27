import React, { useState } from "react";
import html2canvas from "html2canvas";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon from react-icons

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText !== "") {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
    }
    setInputText("");
  }

  function downloadImage() {
    const todoListElement = document.getElementById("todo-list");
    html2canvas(todoListElement).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpg");
      link.download = "todo-list.jpg";
      link.click();
    });
  }

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Quick List</h1>
        </div>
        <div className="form">
          <input type="text" onChange={handleChange} value={inputText} />
          <button>
            <span onClick={addItem}>Add</span>
          </button>
        </div>
        <div id="todo-list">
          <ol>
            {items.map((todoItem, index) => (
              <li key={index}>{todoItem}</li>
            ))}
          </ol>
        </div>
        <button className="download" onClick={downloadImage}>
          <span>Download as Image</span>
        </button>

        {/* Developer Info inside the container */}
        <div style={{ marginTop: "20px", fontSize: "1rem", color: "#666" }}>
          Developed By: Kandarp Vaghela
        </div>
      </div>

      {/* Connect Info outside the container */}
      <div
        style={{
          marginTop: "10px",
          fontSize: "1rem",
          color: "#666",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Connect me on: &nbsp;
        <a
          href="https://www.linkedin.com/in/kandarp-vaghela/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} color="#0077b5" style={{ cursor: "pointer" }} />
        </a>
      </div>
    </>
  );
}

export default App;
