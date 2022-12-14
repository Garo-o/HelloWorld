import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUserData = createAsyncThunk(
  'user/getUserData',
  async accessToken => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/user/me`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)

export const getLanguageData = createAsyncThunk(
  'user/getLanguageData',
  async accessToken => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/user/lan`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)

export const signup = createAsyncThunk('auth/signup', async userData => {
  try {
    console.log(userData)
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/user`,
      userData,
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
})

export const setImage = createAsyncThunk(
  'auth/setImage',
  async imageFormData => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/user/image`,
        imageFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)

export const getImage = createAsyncThunk('auth/getImage', async file => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/user/image/${file}`,
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
})

// // 회원탈퇴
export const withDrawal = createAsyncThunk(
  'auth/withDrawal',
  async accessToken => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/v1/user/delete`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ token: accessToken, userData }) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/v1/user`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)

export const getMyHeart = createAsyncThunk(
  'user/getMyHeart',
  async accessToken => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/user/heart`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)

export const heartEvent = createAsyncThunk(
  'user/heartEvent',
  async ({ accessToken, heartData }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/user/heart`,
        {
          ...heartData,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)
