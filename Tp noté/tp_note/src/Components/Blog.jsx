import { useEffect, useState } from 'react';
import logo from '../Assets/logo.svg';
import photo from '../Assets/photo.png';
import '../Style/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Blog(props) {

  const [blogResult, setBlogResult] = useState([])
  const [postResult, setPostResult] = useState([])
  const [commentResult, setCommentResult] = useState([])
  const [showCommentsResult, setShowCommentsResult] = useState('hidden')

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
    setShowCommentsResult('visible')
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
    setShowCommentsResult('visible')
    // Afficher un détail d'un post avec ses commentaires
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPostResult(data);
      })
      .catch(error => {
        setPostResult({ error: `Post innexistant : ${error}` });
      });
  }

  return (<>
    <div className="text-body align-items-center h-100 w-50" style={{ marginTop: "100px" }}>
      {blogResult.map((post, index) => {
        return (<>
          <div key={index} className="post bg-body-secondary m-4 carte">
            <h3 className="post-title">{post.title} <button className="btn" type="button" style={{ float: 'right' }} onClick={() => showComment(post.id)}><FontAwesomeIcon icon="fa-solid fa-caret-right" /></button></h3>
            <p className="post-body">{post.body}</p>
            <p className="post-meta"><FontAwesomeIcon icon="fa-solid fa-heart" style={{ color: "#ff0000", }} /> {post.reactions}</p>
          </div>
        </>)
      })}

    </div>
    <div className="text-body border-start align-items-center h-100 w-50" style={{ marginTop: "100px", position: 'fixed', marginLeft: '50%' }}>
      <div className="post2 bg-body-secondary m-4 cadre_scroll" style={{ display: 'hidden' }}>
        <h2 className="post-title mb-5">{postResult.title} <p className="post-meta" style={{ float: 'right' }}><FontAwesomeIcon icon="fa-solid fa-heart" style={{ color: "#ff0000", }} /> {postResult.reactions}</p></h2>
        <p className="post-body">{postResult.body}</p>
        <h3>Comments : </h3>
        {commentResult.map((comment) => {
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

export default Blog;
