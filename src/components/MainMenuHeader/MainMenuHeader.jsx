import BurgerButtonSvg from '../../shared/components/svg/mainMenu/BurgerButtonSvg';
import { Grid, IconButton, Typography } from '@mui/material';
import LogoSvg from '../../shared/components/svg/LogoSvg';
import SearchIconSvg from '../../shared/components/svg/SearchIconSvg';
import CartSvg from '../../shared/components/svg/CartSvg';
import { styles } from './styles';

export const MainMenuHeader = () => {
  const productCount = 2;

  return (
    <Grid
      container
      alignItems="center"
      wrap="nowrap"
      position="relative"
      bgcolor="black"
      sx={styles}
    >
      <Grid item>
        <IconButton>
          <BurgerButtonSvg />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <LogoSvg />
        </IconButton>
      </Grid>
      <Grid item ml="auto">
        <IconButton>
          <SearchIconSvg />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <CartSvg />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">{productCount > 0 && `(${productCount})`}</Typography>
      </Grid>
    </Grid>
  );
};
