import React from 'react';
import {
    Flex,
    View,
    Header,
    Text,
    Button,
    Well,
    TextField,
    TextArea,
    Form,
  } from '@adobe/react-spectrum';
    import Table from '@material-ui/core/Table';
    import TableBody from '@material-ui/core/TableBody';
    import TableCell from '@material-ui/core/TableCell';
    import TableContainer from '@material-ui/core/TableContainer';
    import TableHead from '@material-ui/core/TableHead';
    import TableRow from '@material-ui/core/TableRow';
    import Paper from '@material-ui/core/Paper';
    import Link from '@material-ui/core/Link';
    import { makeStyles } from '@material-ui/core/styles';


 const admin = () => {
    const preventDefault = (event) => event.preventDefault();
   return(
    <Flex direction="column" width="100%" height="100%">
     <View paddingBottom="size-200">
      <Flex direction="column" marginTop="size-300">
        <View borderWidth="thin" borderColor="static-black" marginBottom="size-300" padding="2%">
         <TableContainer component={Paper}>
           <Table>
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

        <View borderWidth="thin" borderColor="static-black" marginBottom="size-300" padding="2%">
         <TableContainer component={Paper}>
           <Table>
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
        <View borderWidth="thin" borderColor="static-black" marginBottom="size-300" padding="2%">
         <TableContainer component={Paper}>
          <Table>
          <TableHead>
             <TableRow>
                <TableCell colSpan={3} align="left"><h3>Toolkits for visitors (on the landing page)</h3></TableCell>
                <TableCell colSpan={2} align="right"><Link href="#" onClick={preventDefault}>Add new link category</Link></TableCell> 
             </TableRow>
            </TableHead>
            <TableBody>
             <TableRow>
              <TableCell colSpan={3} align="left"><Link href="#" onClick={preventDefault}>Toolkit Category</Link></TableCell>
              <TableCell align="right"><Link href="#" onClick={preventDefault}>Edit</Link></TableCell>
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

 export default admin;