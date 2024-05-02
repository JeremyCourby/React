import '../../Style/App.css';

function ProjectsCard(props) {
  return (
    <div className="border border-2 bg-body-secondary m-4 carte post">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
}

export default ProjectsCard;
