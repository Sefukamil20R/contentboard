import { useRouter } from "next/router";
import Head from "next/head";
import postsData from "../../data/posts.json";
import styles from "../../styles/Post.module.css";
import homeStyles from "../../styles/Home.module.css";
interface Post {
  id: number;
  title: string;
  image: string;
  content: string;
  category: string;
}

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;

  const post = postsData.find((p) => p.id.toString() === id);

  if (!post) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title}</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>THEISDUDE</div>
        <nav className={styles.navbar}>
          <ul>
            <li>About</li>
            <li>Design</li>
            <li>Programming</li>
            <li>Blockchain</li>
            <li>Courses</li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <img src={post.image} alt={post.title} className={styles.bannerImage} />
        <h1 className={styles.title}>{post.title}</h1>
<div className={styles.postMetaRow}>
  <div className={styles.postTags}>
    <span className={styles.tagGreen}>#javascript</span>
    <span className={styles.tagBlue}>#nextjs</span>
    <span className={styles.tagRed}>#vite</span>
  </div>
  <span className={styles.postDate}>22 July 22</span>
</div>
        <article className={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </article>

        <section className={styles.commentSection}>
  <h2 className={styles.commentTitle}>Leave Comment</h2>
  <form className={styles.commentForm}>
    <div className={styles.row}>
      <input
        type="text"
        placeholder="Name"
        className={styles.input}
        required
      />
      <input
        type="text"
        placeholder="email"
        className={styles.input}
      />
    </div>
    <textarea
      placeholder="Comment"
      className={styles.textarea}
      required
    />
    <button type="submit" className={styles.submitButton}>
      Submit
    </button>
  </form>

</section>
<section>
  <h2 className={homeStyles.sectionTitle}>Similar Posts</h2>
  <section>
  <div className={homeStyles.highlightedPostReverse}>
    <div className={homeStyles.highlightedContent}>
      <h3>Typescript in 21 steps, best in-depth guide</h3>
      <div className={homeStyles.tags}>
        <span className={homeStyles.tagGreen}>#javascript</span>
        <span className={homeStyles.tagBlue}>#nextjs</span>
        <span className={homeStyles.tagYellow}>#stripe</span>
      </div>
      <div className={homeStyles.date}>12 July 2022</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
        consectetur nisi, euismod euismod nisi nisi euismod.
        Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
        consectetur nisi, euismod euismod nisi nisi euismod.
      </p>
      <span className={homeStyles.readTime}>5-7 min read</span>
    </div>
    <div className={homeStyles.highlightedImageWrapper}>
      <img
        src="/images/typescript_vs_js2.png"
        alt="Typescript in 21 steps, best in-depth guide"
        className={homeStyles.highlightedImage}
      />
    </div>
  </div>
</section>
  <div className={homeStyles.cardGrid}>
    {postsData
      .filter((p) => p.id.toString() !== id) 
      .slice(0, 3) 
      .map((post) => (
        <div
          key={post.id}
          className={homeStyles.card}
          onClick={() => router.push(`/post/${post.id}`)}
        >
          <img
            src={post.image}
            alt={post.title}
            className={homeStyles.cardImage}
          />
          <h3>{post.title}</h3>
          <div className={homeStyles.cardTagsRow}>
            <span className={homeStyles.tagGreen}>#javascript</span>
            <span className={homeStyles.tagBlue}>#nextjs</span>
            <span className={homeStyles.tagRed}>#vite</span>
          </div>
          <p>{post.snippet}</p>
          <div className={homeStyles.cardMetaRow}>
            <span className={homeStyles.cardReadTime}>5-7 min read</span>
            <span className={homeStyles.cardDate}>22 July 2022</span>
          </div>
        </div>
      ))}
  </div>
</section>
<section className={homeStyles.newsletterSection}>
  <div className={homeStyles.newsletterLeft}>
    <h2>NEWSLETTER</h2>
    <p>
      Are you passionate about programming and always looking for ways to<br />
      learn more and stay up-to-date with the latest developments in the field?<br /><br />
      If so, our programming blog newsletter is the perfect fit for you!<br /><br />
      With our newsletter, you'll receive regular updates on the hottest topics in the world<br />
      of programming, as well as exclusive access to content that you won't find anywhere else.
    </p>
  </div>
  <div className={homeStyles.newsletterRight}>
    <p>
      Plus, our team of expert writers and industry professionals curate each edition to<br />
      ensure that you're only getting the most valuable and relevant information.<br /><br />
      Don't miss out - sign up for our newsletter today and take your programming knowledge to the next level!
    </p>
    <form className={homeStyles.newsletterForm}>
      <input
        type="email"
        placeholder="Register newsletter"
        required
        className={homeStyles.newsletterInput}
      />
      <button type="submit" className={homeStyles.newsletterButton}>
        Submit
      </button>
    </form>
  </div>
</section>
<footer className={homeStyles.footer}>
  <nav>
    <ul>
      <li>ABOUT</li>
      <li>CONTACT</li>
      <li>DESIGN</li>
      <li>PROGRAMMING</li>
      <li>DEVELOPMENT</li>
    </ul>
  </nav>
  <span>&copy;AXENTIOI ALEXANDRU - JAVASCRIPT DEVELOPER</span>
</footer>
      </main>
      
    </div>
  );
}
