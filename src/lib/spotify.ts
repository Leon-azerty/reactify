import querystring from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })
  return response.json()
}

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`
export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

const PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/users/me/playlists`
export const getPlaylists = async () => {
  const access_token = localStorage.getItem('access_token')

  const playlists = await fetch(PLAYLISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
  console.log('playlists', playlists)
  return playlists
}

const PROFILE_ENDPOINT = `https://api.spotify.com/v1/me`
export const getProfile = async () => {
  const access_token = localStorage.getItem('access_token')
  return fetch(PROFILE_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

const TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/tracks`
export const getTracks = async () => {
  const { access_token } = await getAccessToken()
  return fetch(TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
