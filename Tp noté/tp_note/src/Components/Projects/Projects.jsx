import { useEffect, useState } from 'react';
import '../../Style/App.css';
import ProjectsCard from './ProjectsCard';

function Projects(props) {

  const [projects, setProjects] = useState([{}])

  useEffect(() => {
    if (props.langue === "FRA") {
      setProjects([{
        Type: "Lib",
        id: "1",
        title: "Projet Mobile Android",
        body: "La deuxième année de BTS j'ai réalisé un projet java avec android studio. Le but du projet est de développer une application pour une bibliothèque afin qu’elle puisse tenir à jour son inventaire des livres. De plus les adhérents pourront emprunter un livre, afficher, modifier son profil et le personnel pourra ajouter modifier, supprimer des livres, auteurs, genres, adhérents, emprunts et enfin le personnel pourra vérifier les emprunts en retard et contacter l’adhérent.",
        Lang: "FRA"
      },
      {
        Type: "Lib",
        id: "2",
        title: "Projets Web : Turboo",
        body: "Turboo est un site WEB développé en duo lors de la première année de BTS permettant de voir les futurs grands-prix et toutes les informations sur la Formule 1 et moto gp (classement pilote, date, ecurie, prochain Grand Prix, pilote, circuit...). L’utilisateur pourra donner des avis sur différents Grand Prix ou sur le site.",
        Lang: "FRA"
      },
      {
        Type: "Lib",
        id: "3",
        title: "Projet Web : gestion des stages",
        body: `C'est un projet réaliser à 4 lors de la 2eme année de BTS pour le lycée Aubanel qui souhaite mettre en ligne un sit Web pour la gestion pédagogique des stages.
        Le but du projet est :
        De permettre de gérer les élèves à l’intérieur d’une promo
        D’enregistrer les stages et les entreprises concernées
        De permettre à un étudiant d’indiquer les outils utilisés lors d’un stage (outils, langages, techniques…)
        De permettre à un étudiant d’évaluer son stage sur différents critères (matériel, aide du tuteur, qualité du projet,…)
        D’indiquer quels ont été les outils et technologies utilisées lors d’un stage
        De permettre de faire des recherches de stage sur plusieurs critères.`,
        Lang: "FRA"
      },
      {
        Type: "Lib",
        id: "4",
        title: "Projet Web : FastRecipe",
        body: "La deuxième année de BTS j'ai réalisé un projet java avec android studio. Le but du projet est de développer une application pour une bibliothèque afin qu’elle puisse tenir à jour son inventaire des livres. De plus les adhérents pourront emprunter un livre, afficher, modifier son profil et le personnel pourra ajouter modifier, supprimer des livres, auteurs, genres, adhérents, emprunts et enfin le personnel pourra vérifier les emprunts en retard et contacter l’adhérent.",
        Lang: "FRA"
      }])
    } else {
      setProjects([{
        Type: "Lib",
        id: "1",
        title: "qdzdqzdzqzd",
        body: "blablalba",
        Lang: "ENG"
      },
      {
        Type: "Lib",
        id: "2",
        title: "qdzdqzdqzdzq",
        body: "!!!!!!!!!!!!!!!!",
        Lang: "ENG"
      },
      {
        Type: "Lib",
        id: "3",
        title: "qzdqzdqzdzqdqz",
        body: "?????????????????",
        Lang: "ENG"
      },
      {
        Type: "Lib",
        id: "4",
        title: "dqdqdqzd",
        body: ";;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        Lang: "ENG"
      }])
    }
  }, [props.langue])

  return (
    <div className="text-body align-items-center h-100" style={{ marginTop: "100px" }}>
      {projects.map((project) => {
        return (<ProjectsCard title={project.title} body={project.body}></ProjectsCard>)
      })}
    </div>
  );
}

export default Projects;
