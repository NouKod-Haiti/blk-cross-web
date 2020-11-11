import React,{useState} from 'react';
import {Flex,View} from '@adobe/react-spectrum';
    import Table from '@material-ui/core/Table';
    import TableBody from '@material-ui/core/TableBody';
    import TableCell from '@material-ui/core/TableCell';
    import TableContainer from '@material-ui/core/TableContainer';
    import TableHead from '@material-ui/core/TableHead';
    import TableRow from '@material-ui/core/TableRow';
    import Paper from '@material-ui/core/Paper';
    import Link from '@material-ui/core/Link';
    import Button from '@material-ui/core/Button';
    import { makeStyles } from '@material-ui/core/styles';

    const myStyles = makeStyles({
      myTable: {
        borderCollapse: 'collapse',
        tableLayout: 'fixed'
      },
    });

  
 function Admin(){
   const [isToggle,setToggle] = useState(false);
   const classes = myStyles();
   const preventDefault = (event) => event.preventDefault();
   const showTable = (event) =>{
     event.preventDefault();
     if (isToggle)
        setToggle(false)
     else 
        setToggle(true)
   }
   return(
    <Flex direction="column" width="100%" height="100%">
     <View paddingBottom="size-200">
      <Flex direction="column" marginTop="size-300">
        <View marginBottom="size-300" padding="2%">
         <TableContainer component={Paper}>
           <Table className={classes.myTable}>
            <TableHead>
             <TableRow>
                <TableCell colSpan={5} align="left"><h3>Users to be approved</h3></TableCell> 
             </TableRow>
            </TableHead>
            <TableBody>
             <TableRow>
                <TableCell align="left">User name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Areas of impact interest</TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Approve</Link>
                </TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Decline</Link>
                </TableCell>
             </TableRow>  
             <TableRow>
                <TableCell align="left">User name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Areas of impact interest</TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Approve</Link>
                </TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Decline</Link>
                </TableCell>
             </TableRow> 
             <TableRow>
                <TableCell align="left">User name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Areas of impact interest</TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Approve</Link>
                </TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Decline</Link>
                </TableCell>
             </TableRow> 
             <TableRow>
                <TableCell align="left">User name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Areas of impact interest</TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Approve</Link>
                </TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Decline</Link>
                </TableCell>
             </TableRow> 
             <TableRow>
                <TableCell align="left">User name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Areas of impact interest</TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Approve</Link>
                </TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Decline</Link>
                </TableCell>
             </TableRow> 
             <TableRow>
                <TableCell align="left">User name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Areas of impact interest</TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Approve</Link>
                </TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Decline</Link>
                </TableCell>
             </TableRow> 
            </TableBody>
           </Table>  
         </TableContainer>
        </View>

        <View marginBottom="size-300" padding="2%">
         <TableContainer component={Paper}>
           <Table className={classes.myTable}>
            <TableHead>
             <TableRow>
                <TableCell colSpan={5} align="left"><h3>Register Users</h3></TableCell> 
             </TableRow>
            </TableHead>
            <TableBody>
             <TableRow>
                <TableCell align="left">User name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Areas of impact interest</TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Edit</Link>
                </TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Delete</Link>
                </TableCell>
             </TableRow>  
             <TableRow>
                <TableCell align="left">User name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Areas of impact interest</TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Edit</Link>
                </TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Delete</Link>
                </TableCell>
             </TableRow> 
             <TableRow>
                <TableCell align="left">User name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Areas of impact interest</TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Edit</Link>
                </TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Delete</Link>
                </TableCell>
             </TableRow> 
             <TableRow>
                <TableCell align="left">User name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Areas of impact interest</TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Edit</Link>
                </TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Delete</Link>
                </TableCell>
             </TableRow> 
             <TableRow>
                <TableCell align="left">User name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Areas of impact interest</TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Edit</Link>
                </TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Delete</Link>
                </TableCell>
             </TableRow> 
             <TableRow>
                <TableCell align="left">User name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Areas of impact interest</TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Edit</Link>
                </TableCell>
                <TableCell align="right">
                  <Link href="#" onClick={preventDefault}>Delete</Link>
                </TableCell>
             </TableRow> 
            </TableBody>
           </Table>  
         </TableContainer>
        </View>
        <View marginBottom="size-300" padding="2%">
         <TableContainer component={Paper}>
          <Table className={classes.myTable}>
          <TableHead>
             <TableRow>
                <TableCell colSpan={1} align="left"><h3>Toolkits for visitors<br/></h3></TableCell>
                <TableCell colSpan={4} align="right"><Link href="#" onClick={preventDefault}>Add new link category</Link></TableCell> 
             </TableRow>
            </TableHead>
            <TableBody>
             <TableRow>
              <TableCell colSpan={3} align="left"><Link href="#" onClick={showTable}>Toolkit Category</Link></TableCell>
              <TableCell  align="right"><Link href="#" onClick={preventDefault}>Edit</Link></TableCell>
              <TableCell  align="right"><Link href="#" onClick={preventDefault}>Delete</Link></TableCell>
             </TableRow>
             <TableRow>
              <Table style={{display: isToggle ? 'block' : 'none'}}>
                <TableBody>
                  <TableRow>
                    <TableCell>Upload file</TableCell>
                  </TableRow>  
                </TableBody>  
                </Table> 
             </TableRow>
            </TableBody>
          </Table>
         </TableContainer>
        </View>
        <View marginBottom="size-300" padding="2%">
         <TableContainer component={Paper}>
          <Table className={classes.myTable}>
          <TableHead>
             <TableRow>
                <TableCell colSpan={1} align="left"><h3>Toolkits for registered users</h3></TableCell>
                <TableCell colSpan={4} align="right"><Link href="#" onClick={preventDefault}>Add new link category</Link></TableCell> 
             </TableRow>
            </TableHead>
            <TableBody>
             <TableRow>
              <TableCell  align="left" colSpan={3}><Link href="#" onClick={preventDefault}>Toolkit Category</Link></TableCell>
              <TableCell  align="right"><Link href="#" onClick={preventDefault}>Edit</Link></TableCell>
              <TableCell align="right"><Link href="#" onClick={preventDefault}>Delete</Link></TableCell>
             </TableRow>
            </TableBody>
          </Table>
         </TableContainer>
        </View>
        <View marginBottom="size-300" padding="2%">
         <TableContainer component={Paper}>
          <Table className={classes.myTable}>
          <TableHead>
             <TableRow>
                <TableCell colSpan={1} align="left"><h3>Video links</h3></TableCell>
                <TableCell colSpan={4} align="right"><Link href="#" onClick={preventDefault}>Add new video</Link></TableCell> 
             </TableRow>
            </TableHead>
            <TableBody>
             <TableRow>
              <TableCell  align="left"><Link href="#" onClick={preventDefault}>Video link</Link></TableCell>
              <TableCell  align="left" colSpan={2}>Description</TableCell>
              <TableCell  align="right"><Link href="#" onClick={preventDefault}>Edit</Link></TableCell>
              <TableCell  align="right"><Link href="#" onClick={preventDefault}>Delete</Link></TableCell>
             </TableRow>
            </TableBody>
          </Table>
         </TableContainer>
        </View>
        <View marginBottom="size-300" padding="2%">
         <TableContainer component={Paper}>
          <Table className={classes.myTable}>
          <TableHead>
             <TableRow>
                <TableCell colSpan={1} align="left"><h3>Resource Links</h3></TableCell>
                <TableCell colSpan={4} align="right"><Link href="#" onClick={preventDefault}>Add new link category</Link></TableCell> 
             </TableRow>
            </TableHead>
            <TableBody>
             <TableRow>
              <TableCell align="left" colSpan={3}><Link href="#" onClick={preventDefault}>Link Category</Link></TableCell>
              <TableCell align="right"><Link href="#" onClick={preventDefault}>Save</Link></TableCell>
              <TableCell align="right"><Link href="#" onClick={preventDefault}>Delete</Link></TableCell>
             </TableRow>
            
            </TableBody>
          </Table>
         </TableContainer>
        </View>
      </Flex>
     </View>
    </Flex>
    );
 }

 export default Admin;