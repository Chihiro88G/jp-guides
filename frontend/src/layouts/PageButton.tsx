import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

type PageButtonProps = {
  pageName: string;
  path: string;
}

export default function PageButton({ pageName, path }: PageButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      // key={pageName}
      sx={{ 
        my: { xs: 0, md: 2},
        color: 'white',
        display: 'block'
      }}
      onClick={() => navigate(path)}
    >
      {pageName}
    </Button>
  );
}