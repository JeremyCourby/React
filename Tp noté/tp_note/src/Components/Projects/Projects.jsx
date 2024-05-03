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
        body: "La première année de Esimed j'ai réalisé un projet js. Le but du projet est de développer un site Web pour de recettes.",
        Lang: "FRA"
      }])
    } else {
      setProjects([{
        Type: "Lib",
        id: "1",
        title: "Android Mobile Project",
        body: "The second year of BTS I carried out a java project with android studio. The goal of the project is to develop an application for a library so that it can keep its book inventory up to date. In addition, members will be able to borrow a book, display, modify their profile and staff will be able to add, modify, delete books, authors, genres, members, borrowings and finally staff will be able to check overdue borrowings and contact the member.",
        Lang: "ENG"
      },
      {
        Type: "Lib",
        id: "2",
        title: "Web projects: Turboo",
        body: "Turboo is a WEB site developed as a duo during the first year of BTS allowing you to see future grand prix and all the information on Formula 1 and moto gp (driver ranking, date, team, next Grand Prix, driver, circuit. ..). The user will be able to give opinions on different Grand Prix or on the site.",
        Lang: "ENG"
      },
      {
        Type: "Lib",
        id: "3",
        title: "Web project: internship management",
        body: `This is a project carried out by 4 people during the 2nd year of BTS for the Aubanel high school which wishes to put online a website for the educational management of internships.
        The aim of the project is:
        To allow students to be managed within a class
        To register the internships and the companies concerned
        To allow a student to indicate the tools used during an internship (tools, languages, techniques, etc.)
        To allow a student to evaluate their internship on different criteria (material, help from the tutor, quality of the project, etc.)
        To indicate what tools and technologies were used during an internship
        To allow you to search for an internship based on several criteria.`,
        Lang: "ENG"
      },
      {
        Type: "Lib",
        id: "4",
        title: "Web Project: FastRecipe",
        body: "The first year of Esimed I created a js project. The goal of the project is to develop a recipe website.",
        Lang: "ENG"
      }])
    }
  }, [props.langue])

  return (
    <div className="text-body align-items-center h-100" style={{ marginTop: "100px" }}>
      {projects.map((project, index) => {
        return (<ProjectsCard key={index} title={project.title} body={project.body}></ProjectsCard>)
      })}
    </div>
  );
}

export default Projects;
