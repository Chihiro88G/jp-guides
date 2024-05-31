import { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type SelectionProps = {
  label: string;
  items: string[];
  onChange: (value: string) => void;
}

export default function Selection({ label, items, onChange }: SelectionProps) {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    onChange(selectedValue);
  }, [selectedValue, onChange])

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl
      sx={{ 
        width: { md: '15%', xs: '100%'},
        margin: { xs: '5px 0', md: '5px 5px' },
      }}
    >
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedValue}
        label={label}
        onChange={e => handleChange(e)}
      >
        {items.map(item => (
          <MenuItem value={item} key={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}