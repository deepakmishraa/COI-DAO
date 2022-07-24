export const Burgermenu = (props) => {
  return (
    <div className='menu-container'>
      <img
        className='burger-icon'
        src={props.iconState ? 'img/close.png' : 'img/burgermenu-100.png'}
        onClick={props.burgerIconClick}
      />
    </div>
  );
};
