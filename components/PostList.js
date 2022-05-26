import Post from '../components/Post'
import styles from '../styles/PostList.module.css'

export default function postList () {

    const post = [{
        date: 'May 2 2022 at 23:13',
        text: "This is a nice post, so read it carefuly",
        title: "A nice post",
        author: "Miguel Tomé"
    },
    {
        date: 'May 26 2022 at 21:47',
        text: "This is a new nice post, so read it carefuly",
        title: "A nice post",
        author: "Aurélio Figueira" 
    }
    ]
    return(
        <div className={styles.postList}>
            <Post info = {post} ></Post>
        </div>
    )


}