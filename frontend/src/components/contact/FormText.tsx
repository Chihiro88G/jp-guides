import { forwardRef } from 'react';
import { TextField } from '@mui/material';

type FormTextFieldProps = {
  placeholder: string;
}

const FormTextField = forwardRef<HTMLDivElement, FormTextFieldProps>(({ placeholder }, ref) => {
  return (
    <TextField
      placeholder={placeholder}
      rows={10}
      multiline
      inputRef={ref}
      sx={{ m: '10px 0' }}
    />
  );
});

export default FormTextField;