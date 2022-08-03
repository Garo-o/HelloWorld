import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { BsGear } from 'react-icons/bs'
import CountryFlag from 'react-country-flag'
import Sheet from '../common/Sheet'
import Badge from '../common/Badge'
import Heart from '../common/Heart'
import classes from './ProfileSection.module.css'

function ProfileSection({ user }) {
  return (
    <Sheet size="large">
      <div className={classes.profileContainer}>
        <div className={classes.mainInfoContainer}>
          <div className={classes.mainInfo}>
            <div className={classes.title}>
              <h1 className="title">
                안녕하세요, <strong>{user.name}</strong>님!
              </h1>
              {user.subscribed && <Badge />}
            </div>
            <div className={classes.description}>{user.description}</div>
          </div>
          <img src={user.avatar} alt="avatar" className={classes.avatar} />
        </div>
        <div className={classes.subInfo}>
          <div className={classes.subInfoContents}>
            <Heart count={user.heart} />
            <div className={classes.countryAndLanguages}>
              <CountryFlag
                svg
                countryCode="KR"
                className={classes.CountryFlag}
                style={{
                  width: '3rem',
                  height: '2rem',
                }}
              />
              <div className={classes.languages}>
                {user.languages.map(lang => (
                  <div key={lang} className={classes.language}>
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <NavLink to="/settings/profile" className={classes.SettingsIcon}>
            <BsGear />
          </NavLink>
        </div>
      </div>
    </Sheet>
  )
}

ProfileSection.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    countryId: PropTypes.number.isRequired,
    mobileNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    heart: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    subscribed: PropTypes.bool.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
}

export default ProfileSection