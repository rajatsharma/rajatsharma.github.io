import { Button } from '@elementary/components';

export default function ButtonNew(props) {
  return (
    <Button
      bg="transparent"
      h="50px"
      color="white"
      f="20px"
      hover={{
        color: 'black',
        backgroundColor: 'white',
        border: 'none',
        boxShadow: 'none',
      }}
      transition="all 0.5s ease"
      w={({ theme }) => theme.breakpoints(['100%', '200px'])}
      boxShadow="5px 6px 0px #fff"
      border="2px solid #fff"
      {...props}
    />
  );
}
