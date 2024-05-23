import { useRef, MouseEvent } from 'react';

import { Box, Button } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import FormInput from './FormInput';
import FormTextField from './FormText';

export default function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(nameRef.current?.value);
    console.log(emailRef.current?.value);
    console.log(msgRef.current?.value);
  }

  return (
    <SectionWrapper>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: { xs: '90%', md: '50%' }, margin: '0 20px' }}>
        <FormInput
          label='Your name'
          id='name'
          ref={nameRef}
        />
        <FormInput
          label='Email address'
          id='email'
          ref={emailRef}
        />
        <FormTextField
          placeholder='Message here...'
          ref={msgRef}
        />
        <Button
          variant="contained"
          sx={{ width: '20%', margin: '0 auto' }}
          onClick={(event) => handleSubmit(event)}
        >
          Submit
        </Button>
      </Box>
    </SectionWrapper>
  )
}