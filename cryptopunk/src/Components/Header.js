import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles(() => ({
    title: {
       flex: 1,
       color: "white",
       fontFamily: "Poppins",
       fontWeight: "bold",
       fontSize: 30,
       cursor:"pointer",
    }


}))
const Header = () => {
  const classes = useStyles()
  const history = useHistory()
  const { currency, setCurrency } = CryptoState()

  console.log(currency);

  const darkTheme = createTheme({
     pallete:{
       primary:{
        main: "#fff",
       },
     
     type: "dark",
   },
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="primary" position="static">
        <Container>
          <Toolbar>
            <Typography onClick={()=> history.push("/")} className={classes.title}
            variant="h6"
            >Crypto Punk</Typography>
            <Select variant="outlined" style={{
                width: 100,
                height: 40,
                marginRight: 15,
                color: "white",
            }} 
               value={currency}
               onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
   </ThemeProvider>
  )
}

export default Header