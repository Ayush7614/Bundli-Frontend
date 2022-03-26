import axios from "axios";
import { CoinList } from "../config/api";
import { useState } from "react";
import { CryptoState } from "../CryptoContext";
import { useEffect } from "react";
import { createTheme, ThemeProvider, Typography, Container, TextField, TableContainer, CircularProgress, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Pagination } from "@material-ui/lab";


  export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const CoinsTable = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState( false);
  const [search, setSearch] = useState(" ");
  const {currency, symbol } = CryptoState();
  const [page, setPage] = useState(1);
  const history = useHistory();

  const fetchCoins = async () => {
    setloading(true);
    const { data } = await axios.get(CoinList(currency));
    setcoins(data);
    setloading(false);

  };
 console.log(coins);

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const darkTheme = createTheme({
     palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };
   
    const useStyles = makeStyles(() => ({
      row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Poppins",
    },  
       pagination: {
      "& .MuiPaginationItem-root": {
        color: "secondary",
      },
    },
     
    }));
    const classes = useStyles();

    

  return (
   <ThemeProvider theme={darkTheme}>
     <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          style={{ margin: 18, fontFamily: "Poppins" }}
        >
         Punk Chart
        </Typography>
        <TextField
          label="Search for your dope currencies.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <TableContainer>
          {
            loading? (
              <CircularProgress style={ {backgroundColor: "secondary" }} />
            ):(
               <Table>
                 <TableHead style={{ backgroundColor: "#3d5afe" }}>
                   <TableRow>
                     {["Coins", "Price", "Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Poppins",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                   </TableRow>
                 </TableHead>
                  <TableBody>
                   {handleSearch()
                   .slice((page - 1)*10, (page - 1)*10 + 10)
                   .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => history.push(`/coins/${row.id}`)}
                        className={classes.row}
                        key={row.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                          >
                            <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                            /> 
                            <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "darkgrey" }}>
                              {row.name}
                            </span>
                          </div>
                          </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                          </TableCell> 
                        </TableRow>
                      );
                    })}
                  </TableBody>
               </Table>
            )}
        </TableContainer>
           <Pagination 
           count={(handleSearch()?.length / 10).toFixed(0)}
             style={{
             padding: 20,
             width: "100%",
             display: "flex",
             justifyContent: "center",
          }}
           classes={{ ul: classes.pagination }}
           count={(handleSearch()?.length / 10).toFixed(0)}
           onChange={(_, value) => {
             setPage(value);
             window.scroll(0, 450);
           }}


           />
     </Container>
   </ThemeProvider>
  );
}

export default CoinsTable
