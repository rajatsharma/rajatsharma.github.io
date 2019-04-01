import { Button } from '@elementary/components';

export default ({ text, onClick = _ => _ }) => (
  <Button
    onClick={_ => onClick()}
    className="button"
    bg="transparent"
    height="50px"
    f="20px"
    width="200px"
    border="2px solid #fff"
    boxShadow="5px 6px 0px #fff"
    color="white"
    transition="all 0.5s ease"
    hover={{
      border: 'none',
      boxShadow: 'none',
      color: 'black',
      backgroundColor: 'white',
    }}
  >
    {text}
  </Button>
);
