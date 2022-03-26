import { Container, makeStyles, Typography } from "@material-ui/core"
import Carousel from "./Carousel";


const useStyles = makeStyles(()=>({
   banner: {
     backgroundImage: "url(./background.jpg)",
   },
   bannerContent:{
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 2,
    justifyContent: "space-around",
   },
  tagline: {
    display:"flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign:"center",
    fontWeight: "bold",
  }

}));
const Banner = () => {
 const classes = useStyles();
 
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
         <Typography
           variant="h2"
           style={{
             fontWeight: "bold",
             marginBottom: "15",
             fontFamily: "Poppins",
           }}
         >
           Crypto Punk
         </Typography>
         <Typography
           variant="subtitle2"
           style={{
             color: "darkgrey",
             textTransform: "capitalize",
             fontFamily: "Poppins",
           }}
         >
           All the information reagrding your favorite Crypto currency
         </Typography>
         <Carousel />
        </div>
      </Container>
    </div>
  )
}

export default Banner
