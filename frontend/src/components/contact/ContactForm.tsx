import { Box, Button } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import FormInput from './FormInput';
import FormTextField from './FormText';

export default function ContactForm() {
  return (
    <SectionWrapper>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: { xs: '100%', md: '50%' }, margin: '0 20px' }}>
        <FormInput
          label='Your name'
          id='name'
        />
        <FormInput
          label='Email address'
          id='email'
        />
        <FormTextField
          placeholder='Message here...'
        />
        <Button variant="contained" sx={{ width: '20%', margin: '0 auto' }}>Submit</Button>
      </Box>
    </SectionWrapper>
  )
}