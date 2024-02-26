
import { AppBar, Toolbar, Typography} from "@mui/material";

export default function Footer() {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Email
          </Typography>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
          </Typography>       
        </Toolbar>
      </AppBar>
  );
}
