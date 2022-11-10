import {Box, IconButton} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import PhotoCamera from '@mui/icons-material/PhotoCamera'

import {setAvatar} from '../../../app/authSlice'
import avatar from '../../../assets/avatar.svg'

const AvatarForm = () => {
  const {user} = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const handleUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('profile-pic', e.target.files[0])

    dispatch(setAvatar(formData))
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 16,
        marginLeft: 24,
        position: 'relative',
      }}
    >
      <Box
        alt="The house from the offer."
        component="img"
        src={user.avatar ? user.avatar : avatar}
        sx={{
          height: 200,
          width: 200,
          margin: '0 auto',
          borderRadius: 50,
        }}
      />
      <div style={{position: 'absolute', bottom: -10, right: 80}}>
        <IconButton color="primary" component="label" size="large">
          <input hidden accept="image/*" name="profile-pic" type="file" onChange={handleUpload} />
          <PhotoCamera
            sx={{fontSize: 48, backgroundColor: 'whitesmoke', borderRadius: 10, padding: 1}}
          />
        </IconButton>
      </div>
    </div>
  )
}

export default AvatarForm
