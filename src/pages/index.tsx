import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Bio from '@/components/Bio';
import Skills from '@/components/Skills';
import Proficiencies from '@/components/Proficiencies';
import Certificates from '@/components/Certificates';
import Interests from '@/components/Interests';
import type { PortfolioData } from '@/types/portfolio';
import styles from '@/styles/Home.module.css';

interface HomeProps {
  data: PortfolioData;
}

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>{`${data.bio.name} | Software Engineer Portfolio`}</title>
        <meta name="description" content={data.bio.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${data.bio.name} | ${data.bio.title}`} />
        <meta property="og:description" content={data.bio.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout name={data.bio.name} socialLinks={data.bio.socialLinks}>
        <div className={styles.homeContainer}>
          <Bio bio={data.bio} />
          <Skills skills={data.skills} />
          <Proficiencies proficiencies={data.proficiencies} />
          <Certificates certificates={data.certificates} />
          <Interests interests={data.interests} />
        </div>
      </Layout>
    </>
  );
}

/**
 * Load portfolio data at build time for optimal SSG
 * Data is fetched once during build, baked into HTML
 */
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // Import data from public directory
  const data: PortfolioData = await import('../../public/data.json').then(
    (mod) => mod.default
  );

  return {
    props: {
      data,
    },
  };
};
