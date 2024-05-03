function SkillsCard(props) {

  return (<>
    <div className='bg-body-secondary border m-4 p-4 border-3 mx-4 d-flex flex-column justify-content-center align-items-center zoom2 text-center carte' style={{ height: "180px", width: "200px" }}>
      {props.title}
    </div>

  </>);
}

export default SkillsCard;
