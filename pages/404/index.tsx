import Link from "next/link";
import styles from './Page404.module.css';
import { useEffect } from "react";
import { useRouter } from 'next/router';

const Page404 = () => {

  return (
    <div className={styles.container404}>
      Opps.
      <h1 className={styles.header404}>The page you are looking for does not exists.</h1>
      <p>
        If you want to return home page
      </p>
      <Link href={'/'} >
        Click here
      </Link>
    </div>
  )
}

export default Page404;
