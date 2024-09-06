import { forwardRef } from 'react';
import { FormControl, InputLabel, Input } from '@mui/material';

type FormInputProps = {
  label: string;
  id: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({ label, id }, ref) => {
  return (
    <FormControl sx={{ m: '10px 0' }}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} aria-describedby="" inputRef={ref} />
      {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
    </FormControl>
  );
});

export default FormInput;