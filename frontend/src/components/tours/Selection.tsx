import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type SelectionProps = {
  label: string;
  items: string[];
  onChange: (value: string) => void;
  value: string | undefined;
}

export default function Selection({ label, items, onChange, value }: SelectionProps) {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value === 'All' ? '' : event.target.value);
  };

  return (
    <FormControl
      sx={{ 
        width: { md: '15%', xs: '100%'},
        m: { xs: '5px 0', md: '5px 5px' },
      }}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        value={value || 'All'}
        label={label}
        onChange={e => handleChange(e)}
      >
        <MenuItem value='All' key='all'>All</MenuItem>
        {items.map(item => (
          <MenuItem value={item} key={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}