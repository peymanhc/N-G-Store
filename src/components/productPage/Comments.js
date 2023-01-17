import React from 'react'
import { Avatar, Box, Grid, makeStyles, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "30px 20px",
    },
    name:{
        fontSize:14,
        fontWeight:700
    },
    title: {
        padding: "10px 0",
        fontSize: 25,
        fontWeight: 700,
        borderBottom: "1px solid rgba(0,0,0,0.2) "
    },
    commenstnum: {
        color: "rgba(0,0,0,0.4)"
    },
    commenttitle: {
        color: "rgba(0,0,0,0.6)",
        fontSize: 15,
        margin: "0 15px"
    },
    "@global":{
        ".MuiPaginationItem-page.Mui-selected":{
            width:"100%",
            backgroundColor:"rgba(255, 204, 0,0.3)",
            border:"1px solid #ffcc00",
            fontWeight:"bold",
            borderRadius:0,
            "&:hover":{
                backgroundColor:"rgba(255, 204, 0,0.3)",
            }
        },
        ".MuiPaginationItem-outlined":{
            width:"100%",
            borderRadius:0,
        }
    }
}))
const Comments = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root} >
            <Typography className={classes.title} >Comments <span className={classes.commenstnum}> 23</span></Typography>
            {[0, 1].map(() => (
                <Grid style={{ margin: "10px 0" }} container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Peymanhc" src="https://i.pinimg.com/736x/e0/72/ca/e072caf6cab0307e13381a7637fa484d.jpg" />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <Typography variant="h4" className={classes.name}>Michel Michel</Typography>
                        <Box display="flex" alignItems="center" ><Rating value={5} style={{ fontSize: 15 }} />
                            <Typography className={classes.commenttitle} >The best in its class</Typography>
                        </Box>
                        <Box display="flex" textAlign="left">
                            <Typography className="font-bold text-sm" >Test: </Typography>
                            <Typography className="text-sm mx-2"> The best in its class</Typography>
                        </Box>
                        <Box display="flex" textAlign="left">
                            <Typography className="font-bold text-sm">Detail: </Typography>
                            <Typography className="text-sm mx-2"> I think its bad</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" style={{ textAlign: "left", color: "#367ff5" }}>
                            <Typography > Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            <span className="mx-4" style={{ textAlign: "left", color: "gray" }}>posted 1 minute ago</span>
                        </Box>
                    </Grid>
                </Grid>
            ))}
            <Pagination count={3} variant="outlined" />
        </Box>
    )
}

export default Comments
