import 
{
    Grid,
    TextField,
    Button
} 
from '@mui/material'
import {Search} from '@mui/icons-material'
export const SearchInput =() =>{


    return (
        <Grid item container xs ={12} sm={10} md={10}
        className='searchContainer'
        padding={1}
        justifyContent="center">
            <Grid item 
             xs={8}
             sm={6}
            padding={1}>
                <TextField 
                 placeholder='enter your search'/>
            </Grid>
            <Grid item xs={4}
            className="searchIcon"
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            padding={1}>
                <Button>
                    search
                    <Search />
                </Button>
            </Grid>
        </Grid>
    )
}