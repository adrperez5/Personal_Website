import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import type { PortfolioData, Project } from '@/types/portfolio';
import styles from '@/styles/Projects.module.css';

interface ProjectsProps {
  projects: Project[];
  bioName: string;
  bioSocialLinks: PortfolioData['bio']['socialLinks'];
}

export default function Projects({ projects, bioName, bioSocialLinks }: ProjectsProps) {
  // TODO: Future filtering state management
  // const [filterTech, setFilterTech] = useState<string | null>(null);
  // const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // Filter logic (currently just returns all projects)
  // When implementing filters, modify this function
  const getFilteredProjects = (): Project[] => {
    let filtered = projects;

    // TODO: Add tech stack filter
    // if (filterTech) {
    //   filtered = filtered.filter(p =>
    //     p.details.techStack.includes(filterTech)
    //   );
    // }

    // TODO: Add featured toggle
    // if (showFeaturedOnly) {
    //   filtered = filtered.filter(p => p.featured);
    // }

    return filtered;
  };

  const displayedProjects = getFilteredProjects();

  // Extract unique tech stack for future filter UI
  // const allTechStack = Array.from(
  //   new Set(projects.flatMap(p => p.details.techStack))
  // ).sort();

  return (
    <>
      <Head>
        <title>{`Projects | ${bioName}`}</title>
        <meta
          name="description"
          content={`Browse ${projects.length} projects showcasing full-stack development, iOS engineering, and distributed systems`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout name={bioName} socialLinks={bioSocialLinks}>
        <div className={styles.projectsContainer}>
          <header className={styles.projectsHeader}>
            <h1>Projects</h1>
            <p className={styles.projectsSubtitle}>
              A showcase of {projects.length} projects spanning web development, mobile apps,
              and distributed systems.
            </p>
          </header>

          {/* TODO: Filter UI goes here */}
          {/* <div className={styles.filterBar}>
            <div className={styles.filterGroup}>
              <button onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}>
                {showFeaturedOnly ? 'Show All' : 'Featured Only'}
              </button>
            </div>
            <div className={styles.filterGroup}>
              {allTechStack.map(tech => (
                <button
                  key={tech}
                  onClick={() => setFilterTech(filterTech === tech ? null : tech)}
                  className={filterTech === tech ? styles.active : ''}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div> */}

          <div className={styles.projectsGrid}>
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {displayedProjects.length === 0 && (
            <div className={styles.emptyState}>
              <p>No projects match your filters.</p>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

/**
 * Load projects data at build time
 * Only loads necessary data (projects + minimal bio info for layout)
 */
export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const data: PortfolioData = await import('../../../public/data.json').then(
    (mod) => mod.default
  );

  return {
    props: {
      projects: data.projects,
      bioName: data.bio.name,
      bioSocialLinks: data.bio.socialLinks,
    },
  };
};
