import {Box, Typography, Container} from '@mui/material'

const FooterAdmin = () => (
  <Box component="footer" sx={{px: 2, py: 2, bgcolor: '#1976d2', color: 'white'}}>
    <Container
      maxWidth="lg"
      sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}
    >
      <Typography>Panel de administración</Typography>
    </Container>
  </Box>
)

export default FooterAdmin
