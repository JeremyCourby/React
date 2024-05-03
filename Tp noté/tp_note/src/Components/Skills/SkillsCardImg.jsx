import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillsCardImg(props) {
  return (<>
    <div className='bg-body-secondary border m-4 p-4 border-3 mx-4 d-flex flex-column align-items-center zoom carte' style={{ height: "180px", width: "200px" }}>
      <div><FontAwesomeIcon icon={props.img} size='xl' /></div>
      <div><h3>{props.title}</h3></div>
    </div>
  </>);
}

export default SkillsCardImg;
