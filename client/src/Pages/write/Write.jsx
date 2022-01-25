import "./write.css";

export default function Write() {
  return (
  <div className="write">
  {/* for design purpose */}
  <img className="writeImg"
                src="https://images.pexels.com/photos/6348820/pexels-photo-6348820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="sky" />
    <form className="writeForm">
        <div className="writeFormGroup">
         {/* The plus icon opens the folder to insert file */}
            <label htmlFor="fileInput">
                <i className=" writeIcon fas fa-plus"></i>
            </label>
              <input type="file" id="fileInput" style={{display:"none"}}/> {/*style to remove the choose button */}
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/> {/*Autofocus true ensures that when u refresh the page the title gets focused and ready to type */}
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" />
        </div>
        <button className="writeSubmit">Publish</button>
    </form>
  </div>);
}
