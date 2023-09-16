const Header = () => {
    return(
        <header className={classes.Header}>
        <div>
          <h1 className={classes.HaderTitle}>
            안녕하세요 <br /> {name}님
          </h1>
          <span className={classes.account}>
            <p className={classes.accountDesc}>계정관리</p>
            <img
              className={classes.accountStroke}
              src="/img/stroke.png"
              alt="stroke"
            />
          </span>
        </div>
        <span className={classes.accountEmail}>{email}</span>
      </header>
    );
}

export default Header;