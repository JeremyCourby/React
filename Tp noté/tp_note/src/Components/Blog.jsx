import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Blog(props) {

  const [blogResult, setBlogResult] = useState([])
  const [postResult, setPostResult] = useState([])
  const [commentResult, setCommentResult] = useState([])
  const [showCommentsResult, setShowCommentsResult] = useState('hidden')

  const [commentLibResult, setCommentLibResult] = useState({}) // Texte par défaut en Français

  const [tokenResult, setTokenResult] = useState(localStorage.getItem("Token"))

  useEffect(() => {
    if(tokenResult == null){
      window.location.href = '/auth';
    }
  }, [])

  useEffect(() => {
    if (props.langue === "FRA") {
      setCommentLibResult({
        Type: "Lib",
        Text: "Commentaires : ",
        Lang: "FRA"
      })
    } else {
      setCommentLibResult({
        Type: "Lib",
        Text: "Comments : ",
        Lang: "ENG"
      })
    }
  }, [props.langue])


  useEffect(() => {

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

  function showComment(id) {
    // Afficher un détail d'un post avec ses commentaires
    fetch(`https://dummyjson.com/comments/post/${id}`)
      .then(res => res.json())
      .then(data => {
        setCommentResult(data.comments);
      })
      .catch(error => {
        setCommentResult({ error: `Aucun Commentaire : ${error}` });
      });
    showPost(id)
    setShowCommentsResult('visible')
  }

  function showPost(id) {
    // Afficher un détail d'un post avec ses commentaires
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPostResult(data);
      })
      .catch(error => {
        setPostResult({ error: `Post innexistant : ${error}` });
      });
    setAnimationActive(true)
    setShowCommentsResult('visible')
  }

  function updatePost(id) {
    fetch(`https://dummyjson.com/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'I think I should shift to the moon',
      })
    })
      .then(res => res.json())
      .then(console.log);
  }

  function deletePost(id) {
    fetch(`https://dummyjson.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(console.log);
  }

  const [animationActive, setAnimationActive] = useState(false);

  return (<>
    <div className="text-body align-items-center h-100 w-50" style={{ marginTop: "100px" }}>
      {blogResult.map((post, index) => {
        return (<>
          <div key={index} className="post bg-body-secondary m-4 carte" onClick={() => showComment(post.id)}>
            <h3 className="post-title">{post.title} <button className="btn" type="button" style={{ float: 'right' }}><FontAwesomeIcon icon="fa-solid fa-caret-right" /></button></h3>
            <p className="post-body">{post.body}</p>
            <p className="post-meta"><FontAwesomeIcon icon="fa-solid fa-heart" style={{ color: "#ff0000", }} /> {post.reactions}</p>
          </div>
        </>)
      })}
    </div>
    <div onAnimationEnd={() => {setAnimationActive(false)}} className={"text-body border-start align-items-center h-100 w-50", animationActive ? "postDetails" : ""} style={{ marginTop: "100px", position: 'fixed', marginLeft: '50%', visibility: showCommentsResult}}>
      <div className="text-body post2 bg-body-secondary m-4 cadre_scroll">
        <h2 className="post-title mb-5">{postResult.title} <p className="post-meta" style={{ float: 'right' }}><FontAwesomeIcon icon="fa-solid fa-heart" style={{ color: "#ff0000", }} /> {postResult.reactions}</p></h2>
        <p className="post-body">{postResult.body}</p>
        <h3>{commentLibResult.Text}</h3>
        {commentResult.map((comment) => {
          return (
            <div className="post bg-body-secondary m-4">
              <p className="post-body">{comment.body}</p>
            </div>
          )
        })}
        <div style={{ float: 'right' }}>
          <button className="btn" type="button"  onClick={() => updatePost(postResult.id)}><FontAwesomeIcon className="m-2" icon="fa-solid fa-pen" /></button>
          <button className="btn" type="button"  onClick={() => deletePost(postResult.id)}><FontAwesomeIcon className="m-2" icon="fa-solid fa-trash" /></button>
        </div>
      </div>
    </div>
  </>);
}

export default Blog;
