import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';

function PostView(props) {

  const [blogResult, setBlogResult] = useState([])
  const [postResult, setPostResult] = useState([])
  const [commentResult, setCommentResult] = useState([])

  const [commentLibResult, setCommentLibResult] = useState({}) // Texte par défaut en Français
  const [tokenResult, setTokenResult] = useState(localStorage.getItem("Token"))
  const [isAuthResult, setIsAuthResult] = useState(true)

  useEffect(() => {
    showComment(props.id)
    setTokenResult(localStorage.getItem("Token"))
    if (tokenResult === "" || tokenResult == "") {
      window.location.href = '/auth';
    } else {
      checkauth()
    }
  }, [props.id])

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
  }

  function showPost(id) {
    // Afficher un détail d'un post avec ses commentaires
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPostResult(data);
        setUpdateInput(data.body)
      })
      .catch(error => {
        setPostResult({ error: `Post innexistant : ${error}` });
      });
    setAnimationActive(true)
  }

  // function updatePost(id) {
  //   fetch(`https://dummyjson.com/posts/${id}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       body: updateInput,
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(console.log);
  // }

  // function deletePost(id) {
  //   fetch(`https://dummyjson.com/posts/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(res => res.json())
  //     .then(console.log);
  // }

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
        if(data.name === "TokenExpiredError" || data.name === "JsonWebTokenError"){
          localStorage.setItem("Token", "")
          window.location.href = '/auth';
        }
      });
  }

  const [animationActive, setAnimationActive] = useState(false);
  const [updateInput, setUpdateInput] = useState('')

  return (<>
    <div onAnimationEnd={() => { setAnimationActive(false) }} className={ animationActive && "postDetails" } style={{ marginTop: "100px", position: 'fixed', marginLeft: '50%', width:'47%' }}>
      <div className="text-body post2 bg-body-secondary m-4 cadre_scroll ms-4 w-100">
        <h2 className="post-title mb-5">{postResult.title} <p className="post-meta" style={{ float: 'right' }}><FontAwesomeIcon icon="fa-solid fa-heart" style={{ color: "#ff0000", }} /> {postResult.reactions}</p></h2>
        <textarea className="form-group form-control" rows="5" value={updateInput} onChange={(event) => setUpdateInput(event.target.value)}></textarea>
        <div style={{ float: 'right' }}>
          <button className="btn" type="button" onClick={() => props.updatePost(postResult.id, updateInput)}><FontAwesomeIcon className="m-2" icon="fa-solid fa-pen" /></button>
          <button className="btn" type="button" onClick={() => props.deletePost(postResult.id)}><FontAwesomeIcon className="m-2" icon="fa-solid fa-trash" /></button>
        </div>
        <h3 className='mt-5 border-top border-2 pt-'>{commentLibResult.Text}</h3>
        {commentResult && commentResult.map((comment) => {
          return (
            <div className="post bg-body-secondary m-4">
              <p className="post-body">{comment.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  </>);
}

export default PostView;
