import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Posts() {
  fetch("https://backpacker-comment-default-rtdb.firebaseio.com/comments.json")
    .then((res) => res.json())
    .then((data) => {
      var userPosts = Object.entries(data);
      return (
        <div className={styles.posts}>
          {userPosts.map((item, i) => (
            <span className={styles.grid} key={item.text}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>
                  {i + 1}.{item.text} &rarr;
                </h2>
              </a>
            </span>
          ))}
        </div>
      );
    });
}
