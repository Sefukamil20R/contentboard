import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import postsData from "../data/posts.json";
import styles from "../styles/Home.module.css";

interface Post {
  id: number;
  title: string;
  image: string;
  snippet: string;
  content: string;
  category: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setPosts(postsData);
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>TheJsDude Blog</title>
      </Head>

      <header className={styles.header}>
  <div className={styles.logo}>THEJSDUDE</div>  <div className={styles.navbarMobile}>
    {!navOpen ? (
      <button
        className={styles.hamburger}
        onClick={() => setNavOpen(true)}
        aria-label="Open navigation"
      >
        <span />
        <span />
        <span />
      </button>
    ) : (
      <button
        className={styles.closeIcon}
        onClick={() => setNavOpen(false)}
        aria-label="Close navigation"
      >
        &#10005;
      </button>
    )}
  </div>
  <nav className={`${styles.navbarMobileLinks} ${navOpen ? styles.open : ""}`}>
    <ul>
      <li>ABOUT</li>
      <li>DESIGN</li>
      <li>PROGRAMMING</li>
      <li>BLOCKCHAIN</li>
      <li>COURSES</li>
    </ul>
  </nav>
  <div className={styles.navSearchRow}>
    <nav className={styles.navbar}>
      <ul>
        <li>ABOUT</li>
        <li>DESIGN</li>
        <li>PROGRAMMING</li>
        <li>BLOCKCHAIN</li>
        <li>COURSES</li>
      </ul>
    </nav>
    <input
      type="text"
      placeholder="Search..."
      className={styles.search}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
</header>

      <main className={styles.main}>
        <section>
          <h2 className={styles.sectionTitle}>LATEST</h2>
          <div className={styles.highlightedPost}>
            <div className={styles.highlightedImageWrapper}>
              <img
                src="/images/typescript_vs_js.png"
                alt="How I created a chess subscription application."
                className={styles.highlightedImage}
              />
            </div>
            <div className={styles.highlightedContent}>
              <h3>How I created a chess subscription application.</h3>
              <div className={styles.tags}>
                <span className={styles.tagGreen}>#javascript</span>
                <span className={styles.tagBlue}>#nextjs</span>
                <span className={styles.tagYellow}>#stripe</span>
              </div>
              <div className={styles.date}>12 July 2022</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
                consectetur nisi, euismod euismod nisi nisi euismod.
                Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
                consectetur nisi, euismod euismod nisi nisi euismod.
              </p>
              <span className={styles.readTime}>5-7 min read</span>
            </div>
          </div>
          <div className={styles.cardGrid}>
            {filteredPosts.slice(0,3).map((post) => (
              <div
                key={post.id}
                className={styles.card}
                onClick={() => router.push(`/post/${post.id}`)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className={styles.cardImage}
                />
                <h3>{post.title}</h3>
                <div className={styles.cardTagsRow}>
                  <span className={styles.tagGreen}>#javascript</span>
                  <span className={styles.tagBlue}>#nextjs</span>
                  <span className={styles.tagRed}>#vite</span>
                </div>
                <p>{post.snippet}</p>
                <div className={styles.cardMetaRow}>
                  <span className={styles.cardReadTime}>5-7 min read</span>
                  <span className={styles.cardDate}>22 July 2022</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>JAVASCRIPT</h2>
          <div className={styles.highlightedPostReverse}>
            <div className={styles.highlightedContent}>
              <h3>Typescript in 21 steps, best in-depth guide</h3>
              <div className={styles.tags}>
                <span className={styles.tagGreen}>#javascript</span>
                <span className={styles.tagBlue}>#nextjs</span>
                <span className={styles.tagYellow}>#stripe</span>
              </div>
              <div className={styles.date}>12 July 2022</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
                consectetur nisi, euismod euismod nisi nisi euismod.
                Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
                consectetur nisi, euismod euismod nisi nisi euismod.
              </p>
              <span className={styles.readTime}>5-7 min read</span>
            </div>
            <div className={styles.highlightedImageWrapper}>
              <img
                src="/images/typescript_vs_js2.png"
                alt="Typescript in 21 steps, best in-depth guide"
                className={styles.highlightedImage}
              />
            </div>
          </div>

          <div className={styles.cardGrid}>
            {filteredPosts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className={styles.card}
                onClick={() => router.push(`/post/${post.id}`)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className={styles.cardImage}
                />
                <h3>{post.title}</h3>
                <div className={styles.cardTagsRow}>
                  <span className={styles.tagGreen}>#javascript</span>
                  <span className={styles.tagBlue}>#nextjs</span>
                  <span className={styles.tagRed}>#vite</span>
                </div>
                <p>{post.snippet}</p>
                <div className={styles.cardMetaRow}>
                  <span className={styles.cardReadTime}>5-7 min read</span>
                  <span className={styles.cardDate}>22 July 2022</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.newsletterSection}>
  <div className={styles.newsletterLeft}>
    <h2>NEWSLETTER</h2>
    <p>
      Are you passionate about programming and always looking for ways to<br />
      learn more and stay up-to-date with the latest developments in the field?<br /><br />
      If so, our programming blog newsletter is the perfect fit for you!<br /><br />
      With our newsletter, you'll receive regular updates on the hottest topics in the world
      of programming, as well as exclusive access to content that you won't find anywhere else.
    </p>
  </div>
  <div className={styles.newsletterRight}>
    <p>
      Plus, our team of expert writers and industry professionals curate each edition to
      ensure that you're only getting the most valuable and relevant information.<br /><br />
      Don't miss out - sign up for our newsletter today and take your programming knowledge to the next level!
    </p>
    <form className={styles.newsletterForm}>
      <input
        type="email"
        placeholder="Register newsletter"
        required
        className={styles.newsletterInput}
      />
      <button type="submit" className={styles.newsletterButton}>
        Submit
      </button>
    </form>
  </div>
</section>
      </main>

      <footer className={styles.footer}>
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
    </div>
  );
}
