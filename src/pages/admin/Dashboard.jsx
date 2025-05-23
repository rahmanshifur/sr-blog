import React from "react";
import { Box, Typography, Avatar, Grid } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import CommentIcon from "@mui/icons-material/Comment";

function Dashboard() {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {/* Card 1 */}
        <Grid size={{ xs: 12, sm: 4, md: 4 }}>
          <Box
          
            sx={{
              width:'100%',
              p: 2,
              borderRadius: 2,
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              position: "relative",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#f44336",
                width: 32,
                height: 32,
                position: "absolute",
                top: 10,
                right: 10,
              }}
            >
              <GroupIcon fontSize="small" />
            </Avatar>

            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ fontWeight: 500 }}
            >
              Total Users
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mt: 0.5, mb: 1 }}>
              350,897
            </Typography>
          </Box>
        </Grid>

        {/* Card 2 */}
        <Grid size={{ xs: 12, sm: 4, md: 4 }}>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              position: "relative",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#f44336",
                width: 32,
                height: 32,
                position: "absolute",
                top: 10,
                right: 10,
              }}
            >
              <AllInboxIcon fontSize="small" />
            </Avatar>

            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ fontWeight: 500 }}
            >
              Total Posts
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mt: 0.5, mb: 1 }}>
              12,345
            </Typography>
          </Box>
        </Grid>

        {/* Card 3 */}
        <Grid size={{ xs: 12, sm: 4, md: 4 }}>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              position: "relative",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#f44336",
                width: 32,
                height: 32,
                position: "absolute",
                top: 10,
                right: 10,
              }}
            >
              <CommentIcon fontSize="small" />
            </Avatar>

            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ fontWeight: 500 }}
            >
              Total Comments
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mt: 0.5, mb: 1 }}>
              78,910
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
