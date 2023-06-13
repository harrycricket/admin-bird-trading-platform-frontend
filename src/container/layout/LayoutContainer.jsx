import Grid from "@mui/material/Unstable_Grid2";
import s from "./layoutContainer.module.scss";
import React from "react";
import SideBar from "../side-bar/SideBar";
import { Breadcrumbs, Stack } from "@mui/material";
import HeaderContainer from "../header/HeaderContainer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "../../style/theme";
import clsx from "clsx";
import MyBreadCrumb from "../../component/breadcrumb/MyBreadCrumb";

export default function LayoutContainer() {
   return (
      <ThemeProvider theme={theme}>
         <div style={{ backgroundColor: theme.palette.template5, minHeight: '100vh', display: 'flex' }}>
            <Grid
               container
               p={"1rem 0rem"}
               spacing={'2.4rem'}
               sx={{ boxSizing: "border-box", width: "100%", display: 'flex'}}
            >
               <Grid xs={2}>
                  <SideBar />
               </Grid>
               <Grid xs={10} padding={'1rem 0 1rem 1.6rem'}>
                  <Stack className={clsx(s.rightContent)}>
                     <HeaderContainer />
                     <MyBreadCrumb />
                     <div className={s.content}>
                        <Outlet />
                     </div>
                  </Stack>
               </Grid>
            </Grid>
         </div>
      </ThemeProvider>
   );
}
