import React, {useState} from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => {

	const [gifs, setGifs] = useState(0);

  return(
  	<>
			if (gifs === 0) {
				<ul className="gif-list">
					{gifs}
				</ul>
			} else {
				<NoGifs />
			}
		</>
  );
}

export default GifList;
