import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isMenuOpen = useSelector((store)=>store.menuSlice.isMenuOpen)

  //if (!isMenuOpen) return null;

  return (
    <>
    <div className='defaultNav'>
      <ul>
        <li><i className="fa fa-home"></i> Home</li>
        <li><i className="fa fa-random"></i> Shorts</li>
        <li><i className="fa fa-file-video-o"></i> Subscriptions</li>
        <li><i className="fa fa-play-circle-o"></i> YouTube Music</li>
        <li><i className="fa fa-television"></i> You</li>
        <li><i className="fa fa-history"></i> History</li>
      </ul>
    </div>
    <div className={isMenuOpen ? "defaultNav hiddenMenu open" : "defaultNav hiddenMenu"}>
      <ul>
          <li><i className="fa fa-home"></i> Home</li>
          <li><i className="fa fa-random"></i> Shorts</li>
          <li><i className="fa fa-file-video-o"></i> Subscriptions</li>
          <li><i className="fa fa-play-circle-o"></i> YouTube Music</li>
          <li><i className="fa fa-television"></i> You</li>
          <li><i className="fa fa-history"></i> History</li>
        </ul>
        <h3>Explore</h3>
        <ul>
          <li><i className="fa fa-slack"></i> Treding</li>
          <li><i className="fa fa-shopping-cart"></i> Shopping</li>
          <li><i className="fa fa-music"></i> Music</li>
          <li><i className="fa fa-film"></i> Movies</li>
          <li><i className="fa fa-television"></i> Live</li>
          <li><i className="fa fa-gamepad"></i> Gaming</li>
          <li><i className="fa fa-newspaper-o"></i> News</li>
          <li><i className="fa fa-futbol-o"></i> Sports</li>
          <li><i className="fa fa-book"></i> Courses</li>
          <li><i className="fa fa-microphone"></i> Podcasts</li>
          <li><i className="fa fa-hashtag"></i> Fashion</li>
          <li><i className="fa fa-server"></i> Playables</li>
        </ul>
    </div>
    </>
  )
}

export default SideBar