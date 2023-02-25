export const styles = {
  '& .MuiGrid-root.MuiGrid-item': {
    p: (theme) => theme.spacing(8, 0),
    '&:first-of-type': {
      p: (theme) => theme.spacing(12, 0)
    },
    '&:last-of-type': {
      p: (theme) => theme.spacing(12, 16, 12, 0)
    }
  }
};
