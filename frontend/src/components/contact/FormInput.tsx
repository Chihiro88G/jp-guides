import { FormControl, InputLabel, Input } from '@mui/material';

type FormInputProps = {
  label: string;
  id: string;
}

export default function FormInput({ label, id }: FormInputProps) {
  return (
    <FormControl sx={{ margin: '10px 0' }}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} aria-describedby="" />
      {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
    </FormControl>
  )
}