import { Flex } from '@elementary/components';
import LinedHeading from './components/LinedHeading';
import ExternalFormal from './components/ExternalLinkFormal';

export default () => (
  <>
    <LinedHeading>Say Hello.</LinedHeading>
    <Flex direction="column">
      <ExternalFormal href="https://www.linkedin.com/in/tyrannodrake/">
        LinkedIn
      </ExternalFormal>
      <ExternalFormal href="https://www.instagram.com/rajatsharma034/">
        Instagram
      </ExternalFormal>
      <ExternalFormal href="https://twitter.com/tyrannodrake">
        Twitter
      </ExternalFormal>
      <ExternalFormal href="https://medium.com/@lunasunkaiser">
        Medium
      </ExternalFormal>
      <ExternalFormal href="https://github.com/rajatsharma">
        Github
      </ExternalFormal>
      <ExternalFormal href="https://www.linkedin.com/in/tyrannodrake/">
        npm
      </ExternalFormal>
      <ExternalFormal href="https://www.linkedin.com/in/tyrannodrake/">
        Stack Overflow
      </ExternalFormal>
      <ExternalFormal href="https://www.linkedin.com/in/tyrannodrake/">
        Dribbble
      </ExternalFormal>
      <ExternalFormal href="mailto://rajatsharma034@gmail.com">
        Email: rajatsharma034@gmail.com
      </ExternalFormal>
    </Flex>
  </>
);