import { useNavigate } from 'react-router-dom';

function Component() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('../pages/Coffee/index.tsx');
  }

  return (
    // ...
    <button onClick={ handleClick }>Entrar</button>
  );
}

export default Component;
