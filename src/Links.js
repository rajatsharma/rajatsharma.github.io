import { Grid } from '@elementary/components';
import ProjectCard from './components/ProjectCard';

export default () => (
  <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gridRowGap="20px">
    <ProjectCard
      dest="Enginite"
      desc="Webpack Config sharing and authoring at its best"
    />
    <ProjectCard
      dest="Hellpack"
      desc="Generate editorconfig, prettier, eslint config for your next project in seconds"
    />
    <ProjectCard
      dest="Shinobi"
      desc="Create React App with Server Side Rendering and Hot Module Replacement"
    />
    <ProjectCard
      dest="Elementary Components"
      desc="Ruthlessly Common React Components"
    />
    <ProjectCard
      dest="Elementary Proper"
      desc="Handle JS Objects or React Props like a Pro"
    />
    <ProjectCard
      dest="Libstarter"
      desc="Create Node module with latest language features like pipelines, do block etc."
    />
    <ProjectCard
      dest="Libstarter-TS"
      desc="Create Node module with Typescript"
    />
    <ProjectCard
      dest="npm-scope"
      desc="Checks if the npm scope is taken or available"
    />
    <ProjectCard
      dest="Asynchronizer"
      desc="Create Express server with latest language features like pipelines, do block etc."
    />
    <ProjectCard dest="Rico" desc="A better way to clone a repository" />
    <ProjectCard dest="Shinju" desc="Store data in functional Closures" />
    <ProjectCard dest="Electronator" desc="Zero to Electron App in minutes" />
  </Grid>
);
