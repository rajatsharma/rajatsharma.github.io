import styled from 'styled-components';
import ProjectCard from './components/ProjectCard';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  margin-bottom: 40px;
`;

export default () => (
  <Grid className="links">
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
      link="rico-01"
      desc="A better way to clone a repository"
    />
    <ProjectCard
      dest="Shinju"
      link="shinju"
      desc="Store data in functional Closures"
    />
  </Grid>
);
