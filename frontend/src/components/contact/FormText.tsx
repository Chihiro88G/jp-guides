import { FormControl, TextField } from '@mui/material';

type FormTextFieldProps = {
  placeholder: string;
}

export default function FormTextField({ placeholder }: FormTextFieldProps) {
  return (
    <FormControl sx={{ margin: '10px 0' }}>
      <TextField label={placeholder} rows={10} multiline />
    </FormControl>
  )
}