const user = {

  name: 'Miguel',
  lastName: 'Silva',
};

function Header() {
  return (
    <h1>
      {`Olá,${user.name}`}
    </h1>
  );
}

export default Header;
