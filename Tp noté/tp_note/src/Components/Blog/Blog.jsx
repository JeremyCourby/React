import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostView from './PostView';
import { Routes, Route } from "react-router-dom";
import PostAdd from './PostAdd';

function Blog(props) {

  const [blogResult, setBlogResult] = useState([])
  const [postId, setpostId] = useState()
  const [tokenResult, setTokenResult] = useState(localStorage.getItem("Token"))
  const [ajout, setAjout] = useState(false)
  const [bAddResult, setBAddResult] = useState({})
  const [bLogOutResult, setBLogOutResult] = useState({})

  useEffect(() => {
    setTokenResult(localStorage.getItem("Token"))
    if (tokenResult === "" || tokenResult == "") {
      window.location.href = '/auth';
    } else {
      checkauth()
    }

    // Afficher les 10 derniers posts sous forme de liste
    fetch('https://dummyjson.com/posts?limit=10')
      .then(res => res.json())
      .then(data => {
        setBlogResult(data.posts);
      })
      .catch(error => {
        setBlogResult({ error: `Aucun Post : ${error}` });
      });
  }, [])

  useEffect(() => {
    if (props.langue === "FRA") {
      setBAddResult({
        Type: "Button",
        Text: "Ajout",
        Lang: "FRA"
      })
      setBLogOutResult({
        Type: "Button",
        Text: "Déconnexion",
        Lang: "FRA"
      })
    } else {
      setBAddResult({
        Type: "Button",
        Text: "Add",
        Lang: "ENG"
      })
      setBLogOutResult({
        Type: "Button",
        Text: "Log Out",
        Lang: "ENG"
      })
    }
  }, [props.langue])

  function updatePost(id, updateInput) {
    fetch(`https://dummyjson.com/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        body: updateInput,
      })
    })
      .then(res => res.json())
      .then(data => {
        const tabSansPost = blogResult.filter((post) => post.id != id)
        let postUpdate = blogResult.find((post) => post.id = id)
        postUpdate = data
        setBlogResult([postUpdate, ...tabSansPost])
      });
  }

  function deletePost(id) {
    fetch(`https://dummyjson.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.isDeleted === true) {
          const tabSansPost = blogResult.filter((post) => post.id != id)
          setBlogResult(tabSansPost)
        }
      });
  }

  function addPost(updateInput, updateTitleInput) {
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: updateTitleInput,
        body: updateInput,
        userId: localStorage.getItem("UserID"),
        /* other post data */
      })
    })
      .then(res => res.json())
      .then(data => {
        setBlogResult([data, ...blogResult])
      });
  }

  function checkauth() {
    /* providing token in bearer */
    fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${tokenResult}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.name === "TokenExpiredError" || data.name === "JsonWebTokenError") {
          localStorage.setItem("Token", "")
          window.location.href = '/auth';
        }
      });
  }

  function logout() {
    localStorage.setItem("Token", "")
    setTokenResult(localStorage.getItem("Token"))
    window.location.href = '/auth';
  }

  return (<>
    <div className="text-body align-items-center h-100 w-50" style={{ marginTop: "100px" }}>
      <div>
        <button className="btn border border-2 bg-body-secondary ms-4 carte" type="button" onClick={() => { logout() }}>{bLogOutResult.Text} &nbsp;&nbsp;<FontAwesomeIcon icon="fa-solid fa-right-to-bracket" /></button>
        <button className="btn border border-2 bg-body-secondary ms-4 carte" type="button" onClick={() => { setAjout(true); setpostId() }}>{bAddResult.Text} &nbsp;&nbsp;<FontAwesomeIcon icon="fa-solid fa-plus" /></button>
      </div>
      {blogResult.map((post, index) => {
        return (<>
          <div key={index} className="post bg-body-secondary m-4 carte" onClick={() => { setpostId(post.id); setAjout(false) }}>
            <h3 className="post-title">{post.title} <button className="btn" type="button" style={{ float: 'right' }}><FontAwesomeIcon icon="fa-solid fa-caret-right" /></button></h3>
            <p className="post-body">{post.body}</p>
            <p className="post-meta"><FontAwesomeIcon icon="fa-solid fa-heart" style={{ color: "#ff0000" }} /> {post.reactions}</p>
          </div>
        </>)
      })}
    </div>
    {postId && <PostView id={postId} updatePost={updatePost} deletePost={deletePost} langue={props.langue}></PostView>}
    {ajout && <PostAdd id={postId} addPost={addPost} langue={props.langue}></PostAdd>}

  </>);
}

export default Blog;
