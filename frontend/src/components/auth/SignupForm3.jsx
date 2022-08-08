import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import codes from 'country-calling-code'
import CountryFlag from 'react-country-flag'
// import Dropdown from '../common/Dropdown'

import RenewDropdown from '../common/RenewDropdown'
import classes from './SignupForm.module.css'
import { countryValidHandler } from '../utils/validation/countryValid'
import { languageValidHandler } from '../utils/validation/languageValid'

//국가 유효성 확인
const countryValidObj = {
  func0: {
    func: dropdownValue => countryValidHandler(dropdownValue),
    message: '국가를 입력해주세요.',
  },
}

//언어 유효성 확인
const languageValidObj = {
  func0: {
    func: dropdownValue => languageValidHandler(dropdownValue),
    message: '사용언어를 입력해주세요.',
  },
}

const countries = codes.map(c => ({
  label: c.country,
  value: c.isoCode2,
}))

const languages_1 = [
  { value: '1', label: 'English' },
  { value: '2', label: 'Korean' },
  { value: '3', label: 'Spanish' },
]

const languages_2 = [
  { value: '1', label: '없음' },
  { value: '2', label: 'Korean' },
  { value: '3', label: 'Spanish' },
  { value: '4', label: 'English' },
]

function SignupStep3({ step, handleNext }) {
  const [country, setCountry] = useState(countries[0].value)
  const [language1, setLanguage1] = useState('')
  const [language2, setLanguage2] = useState('')
  const [language3, setLanguage3] = useState('')

  const handleChange = e => setCountry(e.target.value)
  const handleChange2 = e => setLanguage1(e.target.value)
  const handleChange3 = e => setLanguage2(e.target.value)
  const handleChange4 = e => setLanguage3(e.target.value)

  useEffect(() => {
    handleNext({ country })
  }, [country])

  return (
    <div className={`${classes.signupStepContainer} ${classes['step' + step]}`}>
      <div className={classes.countryContainer}>
        <RenewDropdown
          id="국적"
          value={country}
          items={countries}
          handleChange={handleChange}
          onValid={countryValidObj}
          placeholder="국적을 선택해주세요"
          onData={countryData => setCountry(countryData)}
          required
        />
        {country ? (
          <CountryFlag
            countryCode={country}
            svg
            style={{
              width: '3rem',
              height: '2rem',
            }}
            title={country}
            className={classes.countryFlag}
          />
        ) : (
          <div className={classes.countryFlag}></div>
        )}
      </div>

      <RenewDropdown
        id="1순위 사용 언어"
        value={language1}
        items={languages_1}
        onValid={languageValidObj}
        handleChange={handleChange2}
        placeholder="언어를 선택해주세요"
        required
      />
      <RenewDropdown
        id="2순위 사용 언어"
        value={language2}
        items={languages_2}
        handleChange={handleChange3}
        placeholder="언어를 선택해주세요"
      />
      <RenewDropdown
        id="3순위 사용 언어"
        value={language3}
        items={languages_2}
        handleChange={handleChange4}
        placeholder="언어를 선택해주세요"
      />
    </div>
  )
}

SignupStep3.propTypes = {
  step: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
}

export default SignupStep3