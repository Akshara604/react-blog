import "./SideBar.css";

export default function SideBar() {
  return (
  <div className="sideBar">
        <div className="sideBarItem">
            <span className="sideBarTitle">ABOUT ME </span><br/>
            <img className="sideBarImg"
            src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="laptop"/>
            <p>
                loremAd nisi non ex laborum. 
                Aliquip exercitation tempor qui incididunt aliquip et pariatur e
            </p>
        </div>
        <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
           <li className="sideBarListItem">Life</li>
           <li className="sideBarListItem">Music</li>
           <li className="sideBarListItem">Style</li>
           <li className="sideBarListItem">Cinema</li>
           <li className="sideBarListItem">Tech</li>
        </ul>
        </div>
        <div className="sideBarItem">
            <span className="sideBarTitle">FOLLOW US AT: </span>
            <div className="sideBarSocial">
            <i className="fab fa-facebook sideBarIcon" ></i>
            <i className="fab fa-twitter-square sideBarIcon" ></i>
            <i className="fab fa-pinterest sideBarIcon" ></i>
            </div>
            
        </div>
  </div>);
}
