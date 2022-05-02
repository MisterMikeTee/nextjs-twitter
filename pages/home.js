import styles from '../styles/HomePage.module.css'
import PostList from '../components/PostList'
import Post from '../components/Post'


export default function homePage() {
    return (
    <>
        <h1 className={styles.homeTitle}>Welcome to Copwitter</h1>
        <PostList></PostList>
    </>
    )
}