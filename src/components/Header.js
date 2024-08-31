import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/menuSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const handleToggleMenu = ()=> {
    dispatch(toggleMenu());
  }

  useEffect(()=> {
    const timer = setTimeout(()=> {
      getSuggestions();
    }, 200)

    return ()=> {
      clearTimeout(timer)
    }    
  }, [searchText]);

  const getSuggestions = async ()=> {
    const data = await fetch(YOUTUBE_SEARCH_API+searchText);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);
    setShowSuggestions(true);
  }

  return (
    <div className='header'>
      <div className="leftLogos">
        <i className="fa fa-bars" onClick={()=>handleToggleMenu()}></i>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png" alt="YouTube Logo" />
      </div>
      <div className="searchWrap">
        <form onSubmit={(e)=> e.preventDefault()}>
          <input type="text" className="form-control" value={searchText} onChange={(e)=>setSearchText(e.target.value)} onBlur={()=> setShowSuggestions(false)} onFocus={()=> setShowSuggestions(true)}/>
          <button className='btn btn-light'><i className="fa fa-search"></i></button>
        </form>
        {showSuggestions && <ul>
          {suggestions.map((x, index)=> <li key={index}>{x}</li>)}
        </ul>}
      </div>
      <div className="userWrap">
        <i className="fa fa-user-circle-o"></i>
      </div>
    </div>
  )
}

export default Header;