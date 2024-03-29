import { Grid } from '@elementary/components';
import ProjectCard from '../components/ProjectCard';
import LineHeading from '../components/LineHeading';
import Button from '../components/Button';

export default function Intro() {
  return (
    <>
      <LineHeading noLine>Full Stλck Web Developer</LineHeading>
      Creating Server rendered Web Application in React with Redux powered by
      backend created with Node, with heavy experiance in tools like Babel{' '}
      Webpack. Skilled in languages like Haskell JavaScript Purescript .
      Learning WebAssembly with Rust in my free time.
      <LineHeading noLine>Projects</LineHeading>
      <Grid
        gridRowGap="20px"
        gridColumnGap="20px"
        mb="40px"
        gridTemplateColumns={({ theme }) =>
          theme.breakpoints(['1fr', '1fr 1fr'])
        }
      >
        <ProjectCard
          link="enginite"
          className="featured"
          dest="Enginite"
          desc="Webpack Config sharing and authoring at its best"
        />
        <ProjectCard
          link="hellpack"
          className="side-featured"
          dest="Hellpack"
          desc="Generate editorconfig, prettier, eslint config for your next project in seconds"
        />
        <ProjectCard
          link="shinobi"
          dest="Shinobi"
          desc="Create React App with Server Side Rendering and Hot Module Replacement"
        />
        <ProjectCard
          link="elementary"
          dest="Elementary Components"
          desc="Ruthlessly Common React Components"
        />
        <ProjectCard
          link="elementary"
          dest="Elementary Proper"
          desc="Handle JS Objects or React Props like a Pro"
        />
        <ProjectCard
          link="libstarter"
          dest="Libstarter"
          desc="Create Node module with latest language features like pipelines, do block etc."
        />
        <ProjectCard
          link="libstarter-ts"
          dest="Libstarter-TS"
          desc="Create Node module with Typescript"
        />
        <ProjectCard
          link="npm-scope"
          dest="npm-scope"
          desc="Checks if the npm scope is taken or available"
        />
        <ProjectCard
          link="asynchronizer"
          dest="Asynchronizer"
          desc="Create Express server with latest language features like pipelines, do block etc."
        />
        <ProjectCard
          dest="Rico"
          link="rico"
          desc="A better way to clone a repository"
        />
        <ProjectCard
          dest="Shinju"
          link="shinju"
          desc="Store data in functional Closures"
        />
      </Grid>
      <Button
        text="View All Projects"
        onClick={() => window.open('https://github.com/rajatsharma/')}
      >
        View All Projects
      </Button>
    </>
  );
}
