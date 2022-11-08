import {Box, Typography, Divider, Container} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import IconButton from '@mui/joy/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'

const socials = [
  {
    name: 'LinkedIn',
    iconName: <LinkedInIcon />,
    url: 'https://www.linkedin.com/company/alkemy2020',
  },
  {
    name: 'Facebook',
    iconName: <FacebookIcon />,
    url: 'https://www.facebook.com/AlkemyLATAM',
  },
  {
    name: 'Twitter',
    iconName: <TwitterIcon />,
    url: 'https://twitter.com/alkemy__',
  },
  {
    name: 'Instagram',
    iconName: <InstagramIcon />,
    url: 'https://www.instagram.com/alkemy__/',
  },
]

const Footer = () => (
  <Box component="footer" sx={{px: 2, py: 4, bgcolor: '#1976d2', color: 'white'}}>
    <Container
      maxWidth="lg"
      sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}
    >
      <Divider
        flexItem
        light
        component="div"
        orientation="horizontal"
        role="presentation"
        sx={{
          '&::before, &::after': {
            borderColor: 'white',
          },
        }}
        variant="middle"
      >
        {socials.map((social) => (
          <IconButton
            key={social.name}
            aria-label="Open in new tab"
            component="a"
            href={social.url}
            rel="noreferrer"
            target="_blank"
          >
            {social.iconName}
          </IconButton>
        ))}
      </Divider>
      <Typography>©2022 Grupo Fullstack JS 01</Typography>
    </Container>
  </Box>
)

export default Footer
