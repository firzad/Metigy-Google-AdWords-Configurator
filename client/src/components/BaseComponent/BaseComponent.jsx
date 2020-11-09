import React from "react";
// import axios from 'axios';

import {Grid} from "@material-ui/core";

// const callServer = () => {
//   axios.get('http://localhost:8000/test', {
//     params: {
//       table: 'sample',
//     },
//   }).then((response) => {
//     console.log(response.data);
//   });
// }

export function BaseComponent() {
  // let output = "";
  return (
    <Grid container spacing={4} className='container'>
			<Grid item xs={3}>
				{/* <Keywords /> */}
                <div>
                    TEST
                </div>
			</Grid>
			<Grid item xs={3}>
            <div>
                    TEST
                </div>
			</Grid>
			<Grid item xs={6}>
            <div>
                    TEST
                </div>
			</Grid>
		</Grid>
  );
}
